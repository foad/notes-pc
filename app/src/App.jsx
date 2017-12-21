import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store.js'

import {} from 'react-select/dist/react-select.css';
import {} from './styles/global.css'
import {} from './styles/local.css'

import MenuBar from './components/MenuBar.jsx'
import SideBar from './components/SideBar.jsx'
import NotesBar from './components/NotesBar.jsx'
import Notes from './components/Notes.jsx'
import LoginView from './components/LoginView.jsx'


export default class App extends Component {

    getCurrentView() {
        var token = store.getState().token;
        if (token != '') {
            return (
                <div className='main'>
                    <MenuBar />
                    <div className='content'>
                        <SideBar />
                        <NotesBar />
                        <Notes />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='main'>
                    <MenuBar />
                    <LoginView />
                </div>
            )
        }
    }

    render() {
        return (
            <Provider store={store}>
                {this.getCurrentView()}
            </Provider>
        )
    }
}
