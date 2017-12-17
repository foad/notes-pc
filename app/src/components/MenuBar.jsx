import React, {Component} from 'react'

export default class MenuBar extends Component {



    render () {
        return (
            <div className='menubar'>
                <i className='fa fa-window-minimize smaller' onClick={ this.minimize }/>
                <i className='fa fa-window-restore smaller' />
                <i className='fa fa-close' />
            </div>
        )
    }
}
