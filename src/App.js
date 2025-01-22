import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';


const App = ()=>{
  return (
    <BrowserRouter>
		<Routes>
			<Route path='/' element={<HomeView />} />
			<Route path='/about' element={<AboutView />} />
		</Routes>
    </BrowserRouter>
  )
}
// BrowserRouter : 라우팅을 적용하기 위한 컴포넌트입니다. App 컴퍼넌트를 감싸서 라우팅 설정을 적용수 있는 명령어
//Routes : 라우터들의 정의하는 컨테이너입니다. 명령어들을 가지고 있다고 보시면 됩니다.
//<Route path='/' element={<HomeView />} : '/'경로에 해당하는 <HomeView /> 컴폰먼트를 랜더링하도록 설정
export default App;
