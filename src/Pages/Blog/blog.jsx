import React from 'react';
import marked from "marked";

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: null
    }
  }

  componentDidMount() {
    const readmePath = require("./20190422blog.md");

    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }

  render() {
    const { markdown } = this.state;
    return (
      <div>
        Blog
        <section>
          <article dangerouslySetInnerHTML={{__html: markdown}}></article>
        </section>
      </div>
    );
  }
}

export default Blog;
