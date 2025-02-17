import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// jsx는 className
// 데이터 바인딩은 { 변수명 }
// style 넣을땐 style={{스타일명:'값'}}

function App() {

  let post = '테스트 변수';

  return (
      <div className='App'>
        <div className='black-nav'>
          <h4>블로그 글 제목</h4>
        </div>

        <h4 style={ {color : 'red', fontSize:'16px'} }> { post } </h4>
       
      </div>

  );
}

export default App
