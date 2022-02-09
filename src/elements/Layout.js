import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Button, Image, Input } from '../elements';
import { useSelector, useDispatch } from 'react-redux';

const Layout = (props) => {
  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);

  return (
    <>
      <Grid>
        <Image
          shape="rectangle"
          src={
            preview
              ? preview
              : 'https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg'
          }
        />
        <Text>fkff</Text>
      </Grid>
    </>
  );
};
export default Layout;
