import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class TextEditor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      fontFamily: "RictyDiminishedDiminished",
      fontSize: 16,
    };

    return (
      <div>
        <h1>テキストエディタ</h1>
        <MonacoEditor
          width="800"
          height="600"
          language="clojure"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

export default TextEditor;
