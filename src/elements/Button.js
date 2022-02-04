import React from "react";
import styled from "styled-components";

const Button = (props) => {

    const {text, _onClick } = props;

    return (
      <>
        <ElButton onClick={_onClick}>{text}</ElButton>
      </>
    );
}

Button.defaultProps = {
    text: "텍스트",
    _onClick: () => {},
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

export default Button;

//내가 한고얌
// import React from "react";
// import styled from "styled-components";

// const Button = (props) => {
//   const {is_full, width, height} = props;
//   if (is_full === true){
//     return (
//       null
//     )
//   } else {
//     return (
//       null
//     )
//   }
//   return (
//     <>
//     <ButtonWrap />
//     </>
//   )
// }

// ButtonWrap.defaultProps = {

// };

// const ButtonWrap = styled.button`
// width: 250px;
// `;

// export default Button;