import React from "react";
import styled from "styled-components";

import {Text, Grid} from "./index";

const Input = (props) => {
    const {label, placeholder, _onChange} = props;
    return (
      <React.Fragment>
        <Grid>
          <Text margin="0px">{label}</Text>
          <ElInput placeholder={placeholder} onChange={_onChange} />
        </Grid>
      </React.Fragment>
    );
}

Input.defaultProps = {
    label: '텍스트',
    placeholder: '텍스트를 입력해주세요.',
    _onChange: () => {}
}

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;


//내가 한구야
// import React from "react";
// import styled from "styled-components";

// const Input = (props) => {
//   const {width, height, borderRadius, children} = props;
//   const styles = {
//     width: width,
//     height: height,
//     borderRadius: borderRadius,
//   };
//   return (
//     <>
//     <InputBox {...styles}>{children}</InputBox>
//     </>
//   )
// }

// Input.defaultProps = {
// };

// const InputBox = styled.input`
// width: 250px;
// height: 30px;
// border: solid 1px;
// border-radius: 10px;
// `;

// export default Input;