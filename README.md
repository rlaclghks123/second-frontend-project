# 요구사항

### 프로젝트 구성

- [x] Create React App을 사용해 세팅
- [x] CSS-in-JS 사용 -> styled-component 사용
- [x] 모바일 웹 기준으로 구현
- [x] 전역 상태 관리 라이브러리 사용 -> Recoil 선택

### 홈

- [x] 버튼을 클릭하면 /order 페이지로 이동

### order

- [x] 로고가 있는 헤더는 상단에, 총 가격 및 주문하기 버튼이 있는 부분은 하단에 스크롤에 상관없이 고정되도록 만들어 주세요.
- [x] 페이지에 들어오면 바로 주문 아이템을 불러와 주세요.
- [x] 주문 아이템을 불러오는 요청의 로딩 표시를 해주세요.
- [x] Counter를 활용해 주문 아이템의 개수를 조작할 수 있게 구현해 주세요.
  - [x] 수량은 음수가 될 수 없습니다.
  - [x] 주문할 수 있는 최대 수량은 999개 입니다.
  - [x] 수량이 1 이상인 아이템의 배경색을 바꿔 주세요.
  - [x] 주문 아이템의 개수를 조작할 때, 각 아이템의 가격과 하단 총 가격, 하단 총 수량이 맞게 변해야 합니다.
  - [x] 주문 아이템의 합계 수량이 0일 때는 주문할 수 없습니다.
  - [x] 주문하기 클릭 후 로딩 중인 상태를 하단 버튼에 표시해 주세요.

### complete, error

- [x] complete
  - [x] 3초 뒤에 다시 /order 페이지로 돌아가야 합니다.
- [x] error
  - [x] 3초 뒤에 다시 /order 페이지로 돌아가야 합니다.

# 선택 요구사항

- [x] 적절하게 컴포넌트를 나누어 주세요. [재활용 가능한 컴포넌트 구성](#재활용-가능한-컴포넌트-구성)

# 프로젝트 구조

```
second-frontend-project
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.js
   ├─ App.test.js
   ├─ GlobalStyle.jsx
   ├─ index.js
   ├─ setupTests.js
   │
   ├─ api
   │  └─ orderList.js
   │
   ├─ db
   │  └─ db.json
   │
   ├─ atoms
   │  └─ orderListAtom.js
   │
   ├─ components
   │  ├─ Footer.jsx
   │  ├─ Header.jsx
   │  ├─ MessageDisplay.jsx
   │  └─ OrderItem.jsx
   │
   ├─ layout
   │  └─ WebViewLayout.jsx
   │
   ├─ pages
   │  ├─ CompletePage.jsx
   │  ├─ ErrorPage.jsx
   │  ├─ HomePage.jsx
   │  ├─ NotFoundPage.jsx
   │  └─ OrderPage.jsx
   │
   └─ svg
      ├─ check.svg
      ├─ logo-small.svg
      └─ logo.svg

```

# 재활용 가능한 컴포넌트 구성

1. 모든 페이지가 웹뷰로 구성되어 있어 WebViewLayout을 통해 `동일한 구조로 통일하여 유지보수성과 가독성을 높이려 노력`하였습니다.

2. complete, error, NotFound `3개의 페이지가 아래의 공통점을 가지고 있어 하나의 MessageDisplay 컴포넌트를 만들어 재활용`하였습니다.

   - 각 페이지 중간에 동일한 형태의 텍스트를 표시합니다.
   - 접속 후 3초 뒤에 특정 URL로 이동합니다.

3. 각 주문 아이템은 동일한 형태로 구성되어 있어 OrderListItem 컴포넌트를 만들어 재활용하였습니다.

# 추가로 구현한 부분

- [x] 잘못된 주소를 입력할 경우 처리 : 3초 후 home(/)으로 이동
- <img src='https://github.com/rlaclghks123/second-frontend-project/assets/55423198/ea074244-c7d0-4c67-b45c-ceb64559ebdd' width="300px" height='300px' />

- [x] 데이터를 받아올 때 문제 생긴경우 처리 - react-query를 사용하여 실패시 3번의 재요청 후 잘못된 페이지 구현
- <img src='https://github.com/rlaclghks123/second-frontend-project/assets/55423198/af5694b4-d0e1-48b1-8643-1156c72768fa' width="300px" height='300px' />

- [x] 다양한 기기 환경에 대응
- 다른 모바일의 경우 350px로 문제없지만, Galaxy Fold의 경우 짤려서 보이는 문제가 발생
- <img src='https://github.com/rlaclghks123/second-frontend-project/assets/55423198/d7bf8871-f268-4372-b260-b9b03f393da7' width="300px" height='300px' />
- 따라서 위와 같은 문제를 해결
- <img src='https://github.com/rlaclghks123/second-frontend-project/assets/55423198/97d60b15-3822-41fe-bc65-3077e990f6e3' width="300px" height='300px' />
