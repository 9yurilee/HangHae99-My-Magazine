import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold, color, size, children, _onClick, margin, height} = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin : margin,
    height,
  };

  return(
  <TextWrap {...styles} _onClick={_onClick}>
    {children}
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
};

const TextWrap = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  /* margin: ${(props) => props.margin}; */
`;

export default Text;
