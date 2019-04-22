import React from 'react';
import marked from "marked";

class Markdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: null
    }
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
