import React, {Component} from 'react'

import SearchBar from './SearchBar.jsx'
import NoteSort from './NoteSort.jsx'

export default class NotesBar extends Component {

    constructor(props) {
        super(props);
        this.getNoteSummaries = this.getNoteSummaries.bind(this);
    }

    getNoteSummaries() {

        let fakedata = [
            <div key='0' className='notesummary'><h3>Community Learning</h3><p>During particular group of cells that can easily</p><span className='notesummary__date'>05/11/2017 12:51pm</span></div>,
            <div key='1' className='notesummary'><h3>Notes from investor meeting</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='2' className='notesummary'><h3>3/17</h3><p>lremLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='3' className='notesummary'><h3>Economics Articles</h3><p>lotremLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='4' className='notesummary selected'><h3>Two years to date</h3><p>lotremLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='5' className='notesummary'><h3>Thoughts on reduction</h3><p>remLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='6' className='notesummary'><h3>Note from conference call</h3><p>remLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='7' className='notesummary'><h3>Brief thoughts</h3><p>lotremLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='8' className='notesummary'><h3>Idea for todo</h3><p>remLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='9' className='notesummary'><h3>Community Learning</h3><p>lotremLorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='10' className='notesummary'><h3>Community Learning</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='11' className='notesummary'><h3>Community Learning</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
            <div key='12' className='notesummary'><h3>Community Learning</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae amet rem quia nostrum minima consectetur dolores ipsam exercitationem iusto quo minus omnis in quisquam aperiam perferendis, aliquid eum. Fugit!</p><span className='notesummary__date'>05/11/2017 12:51 PM</span></div>,
        ];

        return (
            <div className='notesummaries'>
                { fakedata }
            </div>
        );
    }

    render () {
        return (
            <div className='notesbar'>
                <h2>business notes<span className='icon__button'>+</span></h2>
                <SearchBar />
                <NoteSort />
                { this.getNoteSummaries() }
            </div>
        )
    }
}
