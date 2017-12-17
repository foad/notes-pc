import React, {Component} from 'react'

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.getTags = this.getTags.bind(this);
    }    

    getTags() {
        let fakedata = [
            <li>todo<span className='tags__count'>32</span></li>,
            <li>learning<span className='tags__count'>4</span></li>,
            <li>snippets<span className='tags__count'>5</span></li>,
            <li>blog<span className='tags__count'>6</span></li>,
            <li className='selected'>business <br />
                <span className='tags__count'>11</span>
                <span className='tags__button'>Rename</span>
                <span className='tags__button'>Delete</span>
            </li>,
            <li>food<span className='tags__count'>6</span></li>,
        ];

        return (
            <ul className='tags'>
                <li>All<span className='tags__count'>32</span></li>
                { fakedata }
            </ul>
        );
    }

    render () {
        return (
            <div className='sidebar'>
                <h2>Tags<span className='icon__button'>+</span></h2>
                { this.getTags() }
            </div>
        )
    }
}
