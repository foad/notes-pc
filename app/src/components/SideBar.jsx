import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  setSelectedTag,
  setEditingTag,
  setTagText,
  deleteTag,
  createTag
} from '../actions/AppActions';

import Tag from './Tag.jsx';

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colourMode: 'sun',
      noteTags: props.noteTags,
      noteTitles: props.noteTitles,
      editingText: ''
    };

    this.getTags = this.getTags.bind(this);
    this.toggleColourMode = this.toggleColourMode.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      noteTags: nextProps.noteTags,
      noteTitles: nextProps.noteTitles
    });
  }

  componentDidUpdate(nextProps, nextState) {
    // Toggle between light and dark mode
    if (nextState.colourMode == 'moon' && this.state.colourMode == 'sun') {
      document.querySelector('body').className = '';
    } else if (
      nextState.colourMode == 'sun' &&
      this.state.colourMode == 'moon'
    ) {
      document.querySelector('body').className = 'light';
    }
  }

  getCounts() {
    // Add count to each tag
    this.props.tags.forEach(t => (t.count = 0));

    // Loop through all notes and increment related tag
    for (let i = 0; i < this.state.noteTags.length; i++) {
      let tag = this.state.noteTags[i];
      let matches = this.props.tags.filter(t => t.id == tag).length;
      if (tag !== -1 && matches > 0) {
        this.props.tags.filter(t => t.id == tag)[0].count++;
      }
    }
  }

  getTags() {
    const allCount = this.state.noteTags.length;
    this.getCounts();
    
    // Loop through each tag
    const tagsHTML = this.props.tags.map(tag => {
      if (this.props.editingTag === tag.id) {
        return (
          <Tag
            tag={tag}
            key={tag.id}
            type="editing"
            setSelectedTag={this.props.setSelectedTag}
            setEditingTag={this.props.setEditingTag}
            setTagText={this.props.setTagText}
            deleteTag={this.props.deleteTag}
          />
        );
      } else if (this.props.selectedTag === tag.id) {
        return (
          <Tag
            tag={tag}
            key={tag.id}
            type="selected"
            setEditingTag={this.props.setEditingTag}
            deleteTag={this.props.deleteTag}
          />
        );
      } else {
        return (
          <Tag
            tag={tag}
            key={tag.id}
            setSelectedTag={this.props.setSelectedTag}
          />
        );
      }
    });

    return (
      <ul className="tags">
        <Tag
          tag={{ id: -1, name: 'All', count: allCount }}
          key={-1}
          setSelectedTag={this.props.setSelectedTag}
        />
        {tagsHTML}
      </ul>
    );
  }

  // Toggle between light and dark mode states
  toggleColourMode() {
    if (this.state.colourMode == 'moon') this.setState({ colourMode: 'sun' });
    else this.setState({ colourMode: 'moon' });
  }

  render() {
    return (
      <div className="sidebar">
        <h2>
          Tags
          <span
            className="icon__button"
            onClick={() => {
              this.props.createTag();
            }}
          >
            +
          </span>
        </h2>
        {this.getTags()}
        <div className="colourmode" onClick={this.toggleColourMode}>
          <i className={'fa fa-' + this.state.colourMode + '-o'} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  let noteTags = state.notes.map(n => n.tag);
  let noteTitles = state.notes.map(n => n.title);
  return {
    selectedTag: state.selectedTag,
    editingTag: state.editingTag,
    tags: state.tags,
    noteTags,
    noteTitles
  };
};
export default connect(
  mapStateToProps,
  {
    setSelectedTag,
    setEditingTag,
    setTagText,
    deleteTag,
    createTag
  }
)(SideBar);
