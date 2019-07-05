import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

const styles = {
  editor: {
    color: 'black',
    backgroundColor: '#FAF0E6',
  }
};

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = (editorState) => {
      this.setState({editorState});
    }
    this.setEditor = (editor) => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
  }

  onBoldBtnClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  onItalicBtnClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  onUnderlineBtnClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  render() {
    return (
      <div>
        <h1>テキストエディタ</h1>
        <button onClick={this.onBoldBtnClick.bind(this)} >Bold</button>
        <button onClick={this.onItalicBtnClick.bind(this)} >Italic</button>
        <button onClick={this.onUnderlineBtnClick.bind(this)} >Underline</button>
        <div style={styles.editor} onClick={this.focusEditor}>
          <Editor
            ref={this.setEditor}
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default TextEditor;
