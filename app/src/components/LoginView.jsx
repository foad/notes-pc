import React, {Component} from 'react'
import {connect} from 'react-redux'

import AppActions from '../actions/AppActions.js'

class LoginView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            apiResponse: props.apiResponse,
            username: '',
            password: '',
            visionIcon: 'eye',
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleVisionClick = this.handleVisionClick.bind(this)
        this.getErrorMessage = this.getErrorMessage.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            apiResponse: nextProps.apiResponse,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        AppActions.attemptLogin(this.state.username, this.state.password)
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

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
            apiResponse: {},
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
            apiResponse: {},
        })
    }

    getErrorMessage() {
        var response = { ...this.state.apiResponse }
        var show = ''

        if(response['message'] == null) {
            response['message'] = ''
        } else {
            show = 'show'
        }

        return(
            <div className={ 'login__error ' + show }>{response['message']}</div>
        )
    }

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.handleSubmit}>
                    <div className='login__input'>
                        <span className='login__icon'><i className='fa fa-user-o' /></span>
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} type='text' />
                    </div>
                    <div className='login__input'>
                        <span className='login__icon'><i className='fa fa-key' /></span>
                        <input value={this.state.password} onChange={this.handlePasswordChange.bind(this)} ref={(vision) => { this.visionElement = vision; }} type='password' />
                        <span className='login__vision' onClick={this.handleVisionClick}><i className={'fa fa-' + this.state.visionIcon} /></span>
                    </div>
                    <input type='submit' value='Log in' />
                </form>
                {this.getErrorMessage()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        apiResponse: state.apiResponse,
    }
}
export default connect(mapStateToProps)(LoginView)