import React from 'react';
import ReactMarkdown from "react-markdown";
import CodeBlock from './codeblock';

class Markdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: null
    }
  }

  componentDidMount() {
    fetch(this.props.mdFilePath).then(response => {
      return response.text()
    }).then(text => {
      this.setState({
        markdown: text
      })
    })
  }

  render() {
    const { markdown } = this.state;
    return (
      <ReactMarkdown
        source={ markdown }
        renderers={{ code: CodeBlock }}
      />
    );
  }
}

export default Markdown;
