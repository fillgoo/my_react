import React, { useEffect } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import link from './utils/link';

const App = ()=>{

  useEffect(()=>{
    link();
  },[]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/about' element={<AboutView />} />
    </Routes>
    </BrowserRouter>
  )
}
// BrowserRouter : 라우팅을 적용하기 위한 컴퍼넌트 입니다. App 컴퍼넌트를 감싸서 라우팅 설정을 적용할 수 있는 명령어.
// Routes        : 라우터들의 정의하는 컨테이너 입니다. 명령어들을 가지고 있다고 보시면 됩니다.
// <Route path='/' element={<HomeView />} /> : '/' 경로에 해당하는 <HomeView /> 컴퍼넌트를 랜더링하도록 설정.
export default App;
