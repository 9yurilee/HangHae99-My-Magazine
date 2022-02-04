import React from 'react';
import { Route, Routes } from 'react-router-dom';

//강의 내 postlist = 나의 Main
import Main from '../pages/Main';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
// import Write from '../pages/Write';
// import Detail from '../pages/Detail';
// import Edit from '../pages/Edit';

import Header from '../components/Header';
import { Grid } from '../elements';

function App() {
  return (
    <>
      <Grid>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Grid>
    </>
    // <div className="App">
    //     <Routes>
    //       <Route path="/write" element={<Write />} />
    //       <Route path="/detail" element={<Detail />} />
    //       <Route path="/edit" element={<Edit />} />
    //     </Routes>
    // </div>
  );
}

export default App;
