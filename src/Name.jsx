import React from "react";

const Name = () => <h1>홍길동</h1>;

export default React.memo(Name);

// React.memo 를 적용한 컴포넌트는 해당 컴포넌트가 의존하고 있는 props 나 state 의 변화가 생길 때만 렌더링이 일어난다.
// React.memo 를 적용하지 않았을 때에는 Name 이라는 컴포넌트가 불필요하게 리렌더링이 되고 있는 상황이다.
