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

  let[good, goodSet] = useState(new Array(a.length).fill(0)); // a의 개수만큼 0으로 초기화

  let[modal,setModal] = useState(false);

  // onClick 안에는 함수 이름만만
  function goodCount(i){
    var copyArr = [...good];
    copyArr[i] += 1;
    goodSet(copyArr);
  }

  function changeName(){
    // 변경 함수는 주소 혹은 값이 같으면 변경을 안함
    // 그래서 [...state명] 으로 복사해야 주소값이 달라짐
    // array/object일 경우 복사해서 변경하자자
    var copy = [...a];
    copy[0]= '여자 코트 추천';

    b(copy);  
  }

  function sortArr(){
    var copy = [...a];
    copy.sort();

    b(copy);
  }

  // return 안에는 병렬로 태그 2개 이상 기입금지
  return (
      <div className='App'>

       
        

         
        <div className='black-nav'>
          <h4>블로그 글 제목</h4>
        </div>
        <button onClick= {sortArr}>
          정렬 버튼
        </button>
        { /*
        <div className="list">
          <h4>{ a[0] } <span onClick={ goodCount }>👍</span> {good} </h4>
          <p>2월 17일 발행</p>
        </div>

        <div className="list">
          <h4>{ a[1] } <span onClick={ changeName }>[제목 변경]</span></h4>
          <p>2월 17일 발행</p>
        </div>
       

        <div className="list">
          <h4 onClick={ ()=>{ 
            modal==true?setModal(false): setModal(true)  } }> 
              { a[2] } 
            </h4>
          <p>2월 17일 발행</p>
        </div>
         */}
         
        {
          a.map(function(a, i){
            return(
              <div className="list">

                <h4 onClick={ ()=>{ modal==true ? setModal(false) : setModal(true)  } }>
                  { a }  
                </h4>

                <span onClick={ () => goodCount(i) }>👍</span> {good[i]}

                <p>2월 17일 발행</p>
              </div> 
              )})
        }
        

        {
          modal == true ? <Modal/> : null
        }
        

      </div>

  );
}

// 컴포넌트 만들기
// 1. function 만들고 (funtion App 밖에다가가)
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기

// 어떤걸 컴포넌트로 만들까?
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지들
// 3. 자주 변경되는것들
function Modal(){

  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App
