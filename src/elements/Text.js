import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold, color, size, children } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
  };

  return(
  <TextWrap {...styles}>
    {children}
  </TextWrap>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '13px',
};

const TextWrap = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
`;

export default Text;
