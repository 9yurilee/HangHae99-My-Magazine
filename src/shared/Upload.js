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
    console.log(e);
    console.log(e.target.files[0]);
    console.log(fileInput.current.files[0]);
  };

  const uploadFB = () => {
    if (!fileInput.current || fileInput.current.files.length === 0) {
      window.alert('파일을 선택해주세요!');
      return;
    }

    dispatch(imageActions.uploadImageFB(fileInput.current.files[0]));
  };
  //     let image = fileInput.current.files[0];
  //     const _upload = storage.ref(`images/${image.name}`).put(image);

  //     _upload.then((snapshot) => {
  //       console.log(snapshot);

  //       snapshot.ref.getDownloadURL().then((url) => {
  //         console.log(url);
  //       });
  //     });
  //   };
  return (
    <>
      <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading} />
      <Button text="파일 업로드" _onClick={uploadFB}></Button>;
    </>
  );
};

export default ImgUpload;