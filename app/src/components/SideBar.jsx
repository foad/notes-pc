import React, {Component} from 'react'

import AppActions from '../actions/AppActions.js'

export default class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = { colourMode: 'sun', selectedTag: 4 };

        this.getTags = this.getTags.bind(this);
        this.setSelectedTag = this.setSelectedTag.bind(this);
        this.toggleColourMode = this.toggleColourMode.bind(this);
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
        this.setState({ selectedTag: id })
    }

    getTags() {
        var tags = AppActions.getTags();

        let tagsHTML = [];
        let allCount = 0;

        // Loop through each tag
        for (var i = 0; i < tags.length; i++) {
            allCount += tags[i].count

            // Click handler for individual tags
            let clickHandler = this.setSelectedTag.bind(this, tags[i].id)
            let renameHandler = this.startRenameTag.bind(this, tags[i].id)
            let deleteHandler = this.deleteTag.bind(this, tags[i].id)

            if (this.state.selectedTag == tags[i].id) { // If tag is selected
                tagsHTML.push(
                    <li className='selected' key={ tags[i].id } onClick={ clickHandler }>
                        { tags[i].name }
                        <span className='tags__count'>{ tags[i].count }</span>
                        <br />
                        <span className='tags__button' onClick={ renameHandler }>Rename</span>
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
