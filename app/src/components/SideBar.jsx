import React, {Component} from 'react'


export default class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = { colourMode: 'sun' };

        this.getTags = this.getTags.bind(this);
        this.toggleColourMode = this.toggleColourMode.bind(this);
    }    

    componentDidUpdate(nextProps, nextState) {
        if (nextState.colourMode == 'moon' && this.state.colourMode == 'sun') {
            document.querySelector('body').className = ''
        } else if (nextState.colourMode == 'sun' && this.state.colourMode == 'moon') {
            document.querySelector('body').className = 'light'
        }
    }

    getTags() {
        let fakedata = [
            <li key='1'>todo<span className='tags__count'>16</span></li>,
            <li key='2'>learning<span className='tags__count'>4</span></li>,
            <li key='3'>snippets<span className='tags__count'>5</span></li>,
            <li key='4'>blog<span className='tags__count'>6</span></li>,
            <li key='5' className='selected'>business <br />
                <span className='tags__count'>11</span>
                <span className='tags__button'>Rename</span>
                <span className='tags__button'>Delete</span>
            </li>,
            <li key='6'>food<span className='tags__count'>6</span></li>,
        ];

        return (
            <ul className='tags'>
                <li key='0'>All<span className='tags__count'>32</span></li>
                { fakedata }
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
