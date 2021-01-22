## 가상 코인 거래소 2021-01-07

First init

## 화면 구성 완료 및 테스트 2021-01-10

로컬에서 화면 구성 확인 완료

## 액션, 리듀서, 모달 기능 확인

## 2021-01-11

이덕스는 단방향 데이터 흐름속에서 액션을 검사하는 검문소 역할을 한다.
미들웨어는 리덕스에서 특정액션에 연쇄로 일어나는 액션을 추가하거나 액션을 함수형으로 취급하여
추가작업을 할 수 있게 해줌

미들웨어는 리듀서 실행 전후에 위치 함.

applyMiddleWare를 함수를 사용하는데,
nextRunner가 실행되기 이전에는 등록된 순서대로 여러개의 미들웨어가 작동하지만,
그 뒤에는 등록된 역순으로 실행됨

## 2021-01-13

ConfigureStore 작업

redux-thunk
미들웨어 내에서 action을 함수형태로 처리할 수 있도록 하여 비동기 처리를 할수 있도록 지원함
일반적으로 action은 type과 payload 형태로 되어 있지만, dispatch()와 스토어 데이터를 액션에 포함 시킬수 있도록 함

{yarn add redux-thunk}
## 2021-01-14
서버 지연 처리와 오류 표시
## 2021-01-20

사용자 회원가입 로직 추가

## 2021-01-21
### Route 컴포넌트 정리  
component : 라우터 공급자로부터 전달받은 모든 값을 프로퍼티로 전달하여 출력.  
render : render 프로퍼티에는 render 함수를 구성하므로 match,location,history 프로퍼티가 자동으로 전달되지 않음. 특정 프로퍼티를 전달하고 싶다면
<Route path="*" render={props=><MyComponent url={props.match.url}/>}/>}/> 와 같이 입력 해야함. &&와 같은 조건식도 사용가능
Children : render 프로퍼티를 자식 프로퍼티 형태로 출력. 
<Route>{()=><MyComponent/>}</Route> ----> <Route render={()=><MyComponent/>}/> 와 동일하게 동작함
  
#### Route 컴포넌트가 출력할 컴포넌트에는 아래의 프로퍼티를 전달함
match : 현재 루트에 정의된 경로와 일치된 주소 정보  
location : 브라우저 라우터의 경우 window.location의 정보를 전달  
history : 페이지 이동 기록 정보. 페이지 앞뒤 이동 할 수 있음

#### Link 컴포넌트
Link 컴포넌트는 주소와 리액트 라우터의 정보만 변경 시키므로 새로고침 현상을 방지함
#### Switch  
조건에 맞는 컴포넌트만 나올수 있도록 함

#### Redirect 컴포넌트
특정조건에서 바로 페이지 이동을 해야하는 경우

## 2021-01-21
### 파이어 베이스 적용해보기
URL : https://kyworkspace.web.app/
.....  
Your project kyworkspace must be on the Blaze (pay-as-you-go) plan to complete this command. Required API cloudbuild.googleapis.com can't be enabled until the upgrade is complete.  
..... ㅠㅠ JSON server가 안되네...  
yarn mockserver 실행후 확인해야함..

