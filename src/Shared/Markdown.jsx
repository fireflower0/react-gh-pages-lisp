import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import ReactMarkdown from "react-markdown";
import CodeBlock from './CodeBlock';

const MarkDown = styled(ReactMarkdown)`
  width: 1000px;
`;

const Markdown = ({ filePath }) => {
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    fetch(filePath).then(response => (
      response.text()
    )).then(text => setMarkdown(text));
  }, []);

  return (
    <MarkDown
      source={ markdown }
      renderers={{ code: CodeBlock }}
      escapeHtml={false}
      linkTarget="_blank"
    />
  );
};

Markdown.propTypes = {
  filePath: PropTypes.string.isRequired,
};

export default Markdown;
