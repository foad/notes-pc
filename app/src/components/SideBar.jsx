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
        if (nextState.colourMode == 'moon' && this.state.colourMode == 'sun') {
            document.querySelector('body').className = ''
        } else if (nextState.colourMode == 'sun' && this.state.colourMode == 'moon') {
            document.querySelector('body').className = 'light'
        }
    }

    setSelectedTag(id) {
        this.setState({ selectedTag: id })
    }

    getTags() {
        var tags = AppActions.getTags();

        let tagsHTML = [];
        let allCount = 0;

        for (var i = 0; i < tags.length; i++) {
            allCount += tags[i].count
            let clickHandler = this.setSelectedTag.bind(this, tags[i].id)

            if (this.state.selectedTag == tags[i].id) {
                tagsHTML.push(
                    <li className='selected' key={ tags[i].id } onClick={ clickHandler }>
                        { tags[i].name }
                        <span className='tags__count'>{ tags[i].count }</span>
                        <br />
                        <span className='tags__button'>Rename</span>
                        <span className='tags__button'>Delete</span>
                    </li>
                );
            } else {
                tagsHTML.push(
                    <li key={ tags[i].id } onClick={ clickHandler }>
                        { tags[i].name }
                        <span className='tags__count'>{ tags[i].count }</span>
                    </li>);
            }
        }

        let clickHandler = this.setSelectedTag.bind(this, -1)

        return (
            <ul className='tags'>
                <li onClick={ clickHandler } >All<span className='tags__count'>{ allCount }</span></li>
                { tagsHTML }
            </ul>
        );
    }

    toggleColourMode() {
        if (this.state.colourMode == 'moon')
            this.setState({ colourMode: 'sun' });
        else
            this.setState({ colourMode: 'moon' });
    }

    render () {
        return (
            <div className='sidebar'>
                <h2>Tags<span className='icon__button'>+</span></h2>
                { this.getTags() }
                <div className='colourmode' onClick={ this.toggleColourMode } ><i className={ 'fa fa-' + this.state.colourMode + '-o' } /></div>
            </div>
        )
    }
}
