import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// jsx는 className
// 데이터 바인딩은 { 변수명 }
// style 넣을땐 style={{스타일명:'값'}}

function App() {

  // 자료 잠깐 저장할 땐 변수
  // React에선 state 
  let post = '테스트 변수';

  // 1. import{userState}
  // 2. useState{보관할 자료}
  // 3. let[작명, 작명]
  // 두 번째 작명은 state 변경도와주는 함수
  // state 변경시 state 쓰던 html은 자동 재렌더링됨
  // state 언제 씀? -> 변경시 자동으로 html에 반영되게 만들고 싶을 때
  let[a, b] = useState(['남자 코트 추천', '강남 우동맛집', '리액트 연습']);

  let[good, goodSet] = useState(0);

  // onClick 안에는 함수 이름만만
  function goodCount(){
    console.log(1);
    goodSet(good + 1);
  }

  function changeName(){
    b(['남자 코트 추천', '여자 코트 추천', '리액트 연습']);
  }

  // return 안에는 병렬로 태그 2개 이상 기입금지
  return (
      <div className='App'>

        <div className='black-nav'>
          <h4>블로그 글 제목</h4>
        </div>

        <div className="list">
          <h4>{ a[0] } <span onClick={ goodCount }>👍</span> {good} </h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4>{ a[1] } <span onClick={ changeName }>[제목 변경]</span></h4>
          <p>2월 17일 발행</p>
        </div>
       
        <div className="list">
          <h4>{ a[2] }</h4>
          <p>2월 17일 발행</p>
        </div>

      </div>

  );
}

export default App
