import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const {text, _onClick, is_float } = props;

    if(is_float){
      return (
        <FloatButton onClick={_onClick}>{text}</FloatButton>
      )
    }

    return (
        <ElButton onClick={_onClick}>{text}</ElButton>
    );
}

//속성을 정해주는 느낌
Button.defaultProps = {
    text: "텍스트",
    _onClick: () => {},
    is_float: false,
}

const ElButton = styled.button`
    width: 100%;
    background-color: #FF9F45;
    color: #ffffff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
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

`;

export default Button;