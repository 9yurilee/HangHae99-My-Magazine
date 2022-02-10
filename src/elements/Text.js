import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { float, bold, color, size, children, _onClick, margin, height, text, display, alignItems, justifyContent,textAlign} = props;

  const styles = {
    bold,
    color,
    size,
    margin,
    height,
    text,
    display,
    alignItems,
    textAlign,
    justifyContent,
    float
  };

  return(
  <TextWrap {...styles} onClick={_onClick}>
    {text ? text : children}
  </TextWrap>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '',
  margin: false,
  _onClick: () => {},
  height: 0,
  text: '',
  display: false,
  alignItems: false,
  justifyContent: false,
  textAlign: false,
  float: 'left',
};

const TextWrap = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
`;

export default Text;
