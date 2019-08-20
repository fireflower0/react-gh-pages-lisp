import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from "react-markdown";
import CodeBlock from './codeblock';

const MarkDown = styled(ReactMarkdown)`
  width: 1000px;
`;

class Markdown extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      markdown: null
    };
  }

  componentDidMount() {
    fetch(this.props.mdFilePath).then(response => {
        return response.text();
    }).then(text => {
      this.setState({
        markdown: text
      });
    });
  }

  render() {
    const { markdown } = this.state;
    return (
      <MarkDown
        source={ markdown }
        renderers={{ code: CodeBlock }}
        escapeHtml={false}
        linkTarget="_blank"
      />
    );
  }
}

export default Markdown;
