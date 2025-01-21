// import logo from './logo.svg';
import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">

//       app 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomeView from './Views/HomeView';
import AboutView from './Views/AboutView';

const App = ()=>{
  // return <div>App</div> -- 한줄일 때 
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/about' element={<AboutView />} />
    </Routes>
    </BrowserRouter>
  )
}
// BrowserRouter : 라우팅을 적용하기 위한 컴포넌트입니다. App 컴포넌트를 감싸서 라우팅 설정을 적용할 수 있는 명령어
//Routes : 라우터들을 정의하는 컨테이너입니다. 명령어를 가지고 있습니다. 
// /* <Route path='/' element={<HomeView />} /> */ : '경로에 해당하는 <HomeView />' 컴포넌트를 랜더링하도록 설정
export default App;