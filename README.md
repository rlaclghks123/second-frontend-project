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

- [ ] complete
  - [ ] 3초 뒤에 다시 /order 페이지로 돌아가야 합니다.
- [ ] error
  - [ ] 3초 뒤에 다시 /order 페이지로 돌아가야 합니다.

# 요구사항 선택

- 적절하게 컴포넌트를 나누어 주세요.
- Typescript를 사용하셔도 됩니다. => react로만 구성
