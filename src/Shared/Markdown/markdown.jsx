import React from 'react';
import marked from "marked";

class Markdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: null
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
  }

  componentDidMount() {
    fetch(this.props.filePath).then(response => {
      return response.text()
    }).then(text => {
      this.setState({
        markdown: marked(text, {sanitize: true})
      })
    })
  }

  render() {
    const { markdown } = this.state;
    return (
      <span dangerouslySetInnerHTML={{__html: markdown}} />
    );
  }
}

export default Markdown;
