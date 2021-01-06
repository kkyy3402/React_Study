# React_Study

리액트 공부내용을 정리하는 레포입니다. 

### 작업환경 준비 

nodejs, yarn, vscode

### 프로젝트 만들기

npx create-react-app [프로젝트명]

### 프로젝트 실행하기

yarn start 혹은 npm start

### JSX 기본 규칙

- HTML처럼 생겼지만, babel로 해석되어 JS코드로 변환된다. 
- 규칙을 지키지 않으면 에러난다.

1. 태그는 닫혀야 한다. input,br 태그도 마찬가지이다. 
2. <>  </> 로 태그들을 감싸주면
3. return 을 {}로 감싸지 않아도 된다. 
4. 변수 값 출력하기 {}로 감싸주면 된다. 
5. class를 지정할때는 className , style은 변수에 담아서 넣어줘야함 
6. {/* 주석은 이 형태로 작성해야한다. */}
7. // 주석 이렇게 가능


### props (Properties) 
- 객체에 값을 전달하는 방법을 이야기한다.
App 의 인자에서 prop.name 혹은 {name}을 받아 사용하면 된다.
    
- 기본 props 설정하기

App.defaultProps = {
    name : "이름 없음"
}
    
    
### useState 
동적인 기능을 만들 때 사용한다. 

클릭 리스너 넣을때 
onClick=함수명 인데, 
이때 () 괄호를 빼줘야함. 안그러면 랜더링할 때 호출됨


### useRef로 특정 DOM 선택하기
직접 DOM에 접근하는 방법이다. 


