import React, {Component} from 'react'
import {connect} from 'react-redux'

import AppActions from '../actions/AppActions.js'

class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colourMode: 'sun',
            selectedTag: props.selectedTag,
            tags: props.tags,
            noteTags:props.noteTags,
            noteTitles: props.noteTitles,
            editingTag: -1,
            editingText: '',
        };

        this.getTags = this.getTags.bind(this);
        this.setSelectedTag = this.setSelectedTag.bind(this);
        this.toggleColourMode = this.toggleColourMode.bind(this);
    }    

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            selectedTag: nextProps.selectedTag,
            tags: nextProps.tags,
            noteTags: nextProps.noteTags,
            noteTitles: nextProps.noteTitles,
        })
    }

    componentDidUpdate(nextProps, nextState) {
        // Toggle between light and dark mode
        if (nextState.colourMode == 'moon' && this.state.colourMode == 'sun') {
            document.querySelector('body').className = ''
        } else if (nextState.colourMode == 'sun' && this.state.colourMode == 'moon') {
            document.querySelector('body').className = 'light'
        }
    }

    setSelectedTag(id) {
        // Set selected tag
        AppActions.setSelectedTag(id);
    }

    getCounts() {
        // Add count to each tag
        this.state.tags.forEach(t => t.count = 0)

        // Loop through all notes and increment related tag
        for (var i = 0; i < this.state.noteTags.length; i++) {
            var tag = this.state.noteTags[i]
            var matches = this.state.tags.filter(t => t.id == tag).length;
            if (tag !== -1 && matches > 0) {
                this.state.tags.filter(t => t.id == tag)[0].count++
            }
        }
    }

    getTags() {
        var tags = this.state.tags;

        let tagsHTML = [];
        let allCount = this.state.noteTags.length;
        this.getCounts();

        // Loop through each tag
        for (var i = 0; i < tags.length; i++) {

            // Click handler for individual tags
            let clickHandler = this.setSelectedTag.bind(this, tags[i].id)
            //let renameHandler = this.startRenameTag.bind(this, tags[i].id)
            let editHandler = this.continueRenameTag.bind(this, tags[i].id)
            let completeHandler = this.finishRenameTag.bind(this, tags[i].id)
            let deleteHandler = this.deleteTag.bind(this, tags[i].id)

            if (this.state.editingTag == tags[i].id) {
                tagsHTML.push(
                    <li className='editing' key={ tags[i].id } onClick={ clickHandler }>
                        <input type='text' value={ tags[i].name } onChange={ editHandler } onBlur={ completeHandler } />
                        <span className='tags__count'>{ tags[i].count }</span>
                    </li>
                );
            } else if (this.state.selectedTag == tags[i].id) { // If tag is selected
                tagsHTML.push(
                    <li className='selected' key={ tags[i].id } onClick={ clickHandler }>
                        { tags[i].name }
                        <span className='tags__count'>{ tags[i].count }</span>
                        <br />
                        <span className='tags__button' onClick={ () => { this.startRenameTag(tags[i].id) } }>Rename</span>
                        <span className='tags__button' onClick={ deleteHandler }>Delete</span>
                    </li>
                );
            } else { // If tag not selected
                tagsHTML.push(
                    <li key={ tags[i].id } onClick={ clickHandler }>
                        { tags[i].name }
                        <span className='tags__count'>{ tags[i].count }</span>
                    </li>);
            }
        }

        // Click handler for All tag
        let clickHandler = this.setSelectedTag.bind(this, -1)

        return (
            <ul className='tags'>
                <li onClick={ clickHandler } >All<span className='tags__count'>{ allCount }</span></li>
                { tagsHTML }
            </ul>
        );
    }

    newTag() {
        AppActions.createNewTag('none')
    }

    startRenameTag(id) {
        console.log(id)
        this.setState({
            editingTag: 50
        }, () => {
            console.log(this.state.editingTag)
        })
    }

    continueRenameTag(id, event) {
        var text = event.target.value
        this.setState({
            editingText: text,
        })
    }

    finishRenameTag(id, event) {
        
    }

    deleteTag(id) {
        AppActions.deleteTag(id)
    }

    // Toggle between light and dark mode states
    toggleColourMode() {
        if (this.state.colourMode == 'moon')
            this.setState({ colourMode: 'sun' });
        else
            this.setState({ colourMode: 'moon' });
    }

    render () {
        return (
            <div className='sidebar'>
                <h2>Tags<span className='icon__button' onClick={ this.newTag }>+</span></h2>
                { this.getTags() }
                <div className='colourmode' onClick={ this.toggleColourMode } ><i className={ 'fa fa-' + this.state.colourMode + '-o' } /></div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    var noteTags = state.notes.map(n => n.tag)
    var noteTitles = state.notes.map(n => n.title)
    return {
        selectedTag: state.selectedTag,
        tags: state.tags,
        noteTags,
        noteTitles,
    }
}
export default connect(mapStateToProps)(SideBar);