import React, { Component } from 'react';

export default class Tag extends Component {
  componentDidMount() {
    if (!this.input) return;
    this.input.focus();
  }

  componentDidUpdate() {
    if (!this.input) return;
    this.input.focus();
  }

  renderTag() {
    const tag = this.props.tag;
    switch (this.props.type) {
      case 'editing':
        return (
          <li
            className="editing"
            onClick={() => {
              this.props.setSelectedTag(tag.id);
            }}
            onBlur={() => {
              this.props.setEditingTag(-1);
            }}
          >
            <input
              className="tags__name"
              type="text"
              value={tag.name}
              ref={input => (this.input = input)}
              onChange={e => {
                this.props.setTagText(tag.id, e.target.value);
              }}
              onKeyUp={e => {
                if (e.key === 'Enter') this.props.setEditingTag(-1);
              }}
            />
            <span className="tags__count">{tag.count}</span>
            <span
              className="tags__button"
              onClick={() => {
                this.props.deleteTag(tag.id);
              }}
            >
              ×
            </span>
          </li>
        );
      case 'selected':
        return (
          <li
            className="selected"
            onClick={() => {
              this.props.setEditingTag(tag.id);
            }}
          >
            <span className="tags__name">{tag.name === '' ? '[untitled]' : tag.name}</span>
            <span className="tags__count">{tag.count}</span>
            <span
              className="tags__button"
              onClick={() => {
                this.props.deleteTag(tag.id);
              }}
            >
              ×
            </span>
          </li>
        );
      default:
        return (
          <li
            onClick={() => {
              this.props.setSelectedTag(tag.id);
            }}
          >
            <span className="tags__name">{tag.name === '' ? '[untitled]' : tag.name}</span>
            <span className="tags__count">{tag.count}</span>
          </li>
        );
    }
  }

  render() {
    return this.renderTag();
  }
}
