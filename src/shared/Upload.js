import React, { useRef } from 'react';
import Button from '../elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from './firebase';

import { actionCreators as imageActions } from '../redux/modules/Image';

const ImgUpload = (props) => {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.readAsDataURL(file); // 파일 내용 읽어오기

    reader.onloadend = () => { //파일 읽어오기 끝나면 실행되는 이벤트 핸들러!
        dispatch(imageActions.setPreview(reader.result));
    }
  };

  const uploadFB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert('파일을 선택해주세요!');
      return;
    }
    dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));
  };

  return (
    <>
      <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading} />
      <Button text="파일 업로드" _onClick={uploadFB}></Button>
    </>
  );
};

export default ImgUpload;