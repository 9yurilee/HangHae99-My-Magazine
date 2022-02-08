import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const { text, _onClick, is_float, children, margin, width, padding } = props;

  if (is_float) {
    return (
      <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
  };

  return (
    <ElButton {...styles} onClick={_onClick}>
      {text ? text : children}
    </ElButton>
  );
};

//속성을 정해주는 느낌
Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: '100%',
  padding: "12px 0px"
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #ff9f45;
  color: #ffffff;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: navy;
  color: #fff;
  box-sizing: border-box;
  font-size: 35px;
  font-weight: 800;
  position: fixed;
  bottom: 25px;
  right: 25px;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

export default Button;
