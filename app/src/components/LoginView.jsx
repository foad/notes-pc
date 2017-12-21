import React, {Component} from 'react'
import {connect} from 'react-redux'

import AppActions from '../actions/AppActions.js'

class LoginView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            token: props.token,
            visionIcon: 'eye',
        }

        this.handleVisionClick = this.handleVisionClick.bind(this)
    }

    handleSubmit() {

    }

    handleVisionClick() {
        if (this.state.visionIcon == 'eye') {
            this.setState({ ...this.state, visionIcon: 'eye-slash' })
            this.visionElement.type = 'text'
        } else {
            this.setState({ ...this.state, visionIcon: 'eye' })
            this.visionElement.type = 'password'
        }
    }

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <div className='login__input'>
                        <span className='login__icon'><i className='fa fa-user-o' /></span>
                        <input type='text' />
                    </div>
                    <div className='login__input'>
                        <span className='login__icon'><i className='fa fa-key' /></span>
                        <input ref={(vision) => { this.visionElement = vision; }} type='password' />
                        <span className='login__vision' onClick={this.handleVisionClick}><i className={'fa fa-' + this.state.visionIcon} /></span>
                    </div>
                    <input type='submit' value='Log in' />
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.token,
    }
}
export default connect(mapStateToProps)(LoginView);
