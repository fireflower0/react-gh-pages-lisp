import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={rainbow}>
      {value}
    </SyntaxHighlighter>
  );
};

CodeBlock.defaultProps = {
  language: null,
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
