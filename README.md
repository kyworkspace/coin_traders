## 가상 코인 거래소 2021-01-07

First init

## 화면 구성 완료 및 테스트 2021-01-10

로컬에서 화면 구성 확인 완료

## 액션, 리듀서, 모달 기능 확인

2021-01-11

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
