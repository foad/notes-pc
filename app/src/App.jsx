import React, {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store.js'

import {} from './styles/global.css'
import {} from './styles/local.css'

import MenuBar from './components/MenuBar.jsx'
import SideBar from './components/SideBar.jsx'
import NotesBar from './components/NotesBar.jsx'
import Notes from './components/Notes.jsx'


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className='main'>
                    <MenuBar />
                    <div className='content'>
                        <SideBar />
                        <NotesBar />
                        <Notes />
                    </div>
                </div>
            </Provider>
        )
    }
}
