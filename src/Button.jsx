import React from "react";

// props.children 의 사용

const Button = ({ handleClick, children }) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default React.memo(Button);

// 함수형 컴포넌트에서 state 가 변경이되면 랜더링이 일어나게 되는데, 이때 컴포넌트의 함수들도 다시 생성된다.
// 이 예제 코드에서는 incrementWeight 와 incrementHeight 함수가 렌더링 할 때마다 다시 생성되고,
// 자식 컴포넌트로 전달된다. -> 함수는 객체 이기 때문에 이전과 이후의 메모리 주소가 달라져서
// 자식 컴포넌트에서 React.memo 기능을 사용해도 렌더링을 막을 수 없다.
// 이런 경우 useCallback 훅을 사용하면 렌더링을 최적화 할 수 있다.
