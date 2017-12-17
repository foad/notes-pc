import React, {Component} from 'react'

import NotesMenu from './NotesMenu.jsx'
import NoteEditor from './NoteEditor.jsx'

export default class Notes extends Component {

    constructor(props) {
        super(props)
        this.getNoteContent = this.getNoteContent.bind(this)
    }

    getNoteContent() {
        let code = `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis non semper libero, ac vehicula velit. Donec vitae magna nec nisl congue gravida. Morbi non augue in nisi tempor mollis. Nullam mi eros, rutrum nec dapibus ac, molestie eu neque. Vestibulum ultricies sem eget nibh aliquam euismod non eu dui. Maecenas interdum lorem sit amet consectetur aliquam. Praesent porttitor finibus massa, suscipit feugiat turpis auctor at. Nunc nec magna quam.
        
        Praesent lorem enim, vestibulum quis est sed, porttitor congue massa. Integer imperdiet eleifend ultricies. Phasellus magna ipsum, pellentesque a turpis eu, tempus condimentum metus. Aenean sodales dignissim erat, sed finibus enim. Proin vehicula neque eu mi facilisis lacinia. Nullam neque arcu, rutrum vitae sagittis a, facilisis id ligula. Etiam quis eros lacus. Duis ac fringilla lacus. Nullam tincidunt est nisl, eget blandit nisi tempor at.
        
        Quisque finibus quis dui id imperdiet. Vestibulum at mi id nulla sagittis vulputate eget a libero. Fusce ut semper nibh, id venenatis sem. Duis non neque metus. Phasellus commodo ut dui at bibendum. Proin posuere molestie ultrices. Sed nulla elit, fermentum nec consectetur sed, viverra eu diam. Pellentesque eu ligula id dolor tempus consequat. Nullam a ipsum malesuada, posuere felis sed, placerat ligula. Etiam sed felis blandit, sagittis mauris sit amet, venenatis augue. Vestibulum sapien ligula, scelerisque in rutrum ultricies, iaculis et velit.
        
        Aliquam sit amet suscipit libero, in condimentum ligula. Cras a vulputate nisl. Mauris aliquam gravida lectus non blandit. Mauris vestibulum et libero vel aliquet. Morbi sit amet risus et nibh bibendum egestas quis ac justo. Nulla elementum sapien quis leo luctus viverra. Morbi nec magna nec est bibendum lobortis in in nibh. Donec a urna posuere, ultrices quam vitae, ornare massa. Aliquam consectetur ullamcorper turpis, at pretium dui pharetra at. Vestibulum vel massa feugiat, venenatis massa sit amet, cursus lacus.
        
        Etiam scelerisque fermentum elit tincidunt auctor. Etiam auctor lacus eget risus pretium fermentum. Mauris suscipit, libero vitae condimentum tristique, ex est faucibus elit, at euismod mauris turpis imperdiet arcu. Morbi feugiat velit sed odio cursus, sed commodo risus placerat. Praesent maximus libero non tellus vehicula, nec fermentum dolor condimentum. Vestibulum sed viverra ex, a sodales nisi. In in mauris imperdiet, sodales odio ac, condimentum nulla. Vestibulum vitae massa tempus, vehicula magna id, luctus justo.
        
        In non feugiat mi. Proin eget orci nisi. Aliquam at est justo. Curabitur in ex odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vestibulum faucibus tristique dui non placerat. Fusce ut justo sed lectus imperdiet mattis eu at nulla.
        
        Integer a elementum nisi, eu facilisis orci. Quisque tristique porttitor ultricies. Integer eleifend, justo ut maximus tincidunt, massa arcu ornare dolor, non ultrices neque nulla et neque. Sed vel quam at eros cursus mollis. Duis pellentesque diam in condimentum tristique. Mauris vitae mattis nisl. Donec et nulla varius, ullamcorper felis sed, scelerisque augue. Aliquam vehicula sit amet eros sit amet tempor. Quisque metus lacus, posuere sit amet convallis vel, eleifend venenatis justo. Phasellus sit amet augue elit. Cras venenatis euismod libero a bibendum. Sed semper, mauris at semper venenatis, lectus justo aliquet augue, a varius tellus elit sed ipsum. Pellentesque et lobortis mauris, ac blandit est. Aenean ac elit nunc.
        
        Cras sit amet lacus tincidunt, blandit augue at, maximus mauris. In cursus ipsum gravida lacus egestas, in scelerisque lectus viverra. Donec blandit rutrum lectus, in vehicula ligula mattis id. Nam ornare ligula nisl, nec molestie magna porttitor id. Curabitur odio tortor, luctus at feugiat sit amet, ultricies et sapien. Cras eu tempor sem, id consectetur ipsum. Nunc ut dictum odio. Phasellus in molestie elit. Praesent ut luctus est. Vivamus tincidunt suscipit augue, eget tincidunt erat laoreet ut. In ut lacinia turpis. Proin laoreet semper sagittis. Maecenas porttitor nibh eu tellus fringilla interdum vitae a ante. In scelerisque, nisl nec pharetra vehicula, ipsum mauris faucibus felis, laoreet volutpat arcu sapien id quam. Vestibulum a aliquam nisl.`

        return (
            <NoteEditor initialValue={code} />
        )
    }

    render () {
        return (
            <div className='notes'>
                <h2 className='note__title'>Two years to date</h2>
                <p className='note__tag'>#business</p>
                <NotesMenu />
                { this.getNoteContent() }
            </div>
        )
    }
}
