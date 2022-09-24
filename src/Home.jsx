import React, { useCallback, useMemo, useState } from "react";
import Text from "./Text";
import Name from "./Name";
import Button from "./Button";

const Home = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  // const incrementWeight = () => setWeight(weight + 1);
  // const incrementHeight = () => setHeight(height + 1);

  const incrementWeight = useCallback(() => {
    setWeight(weight + 1);
  }, [weight]);

  const incrementHeight = useCallback(() => {
    setHeight(height + 1);
  }, [height]);

  // const expensiveTask = () => {
  //   let i = 0;
  //   while (i < 10000000) i++;
  //   console.log("expensiveTask 가 실행되었습니다.");
  //   return weight > 1000;
  // };

  const expensiveTask = useMemo(() => {
    let i = 0;
    while (i < 10000000) i++;
    console.log("expensiveTask 가 실행되었습니다.");
    return weight > 1000;
  }, [weight]);

  // weight 값이 변경되면, Text 컴포넌트를 갱신할 때마다 expensiveTask() 를 실행하기 때문에,
  // 몇 초간 렌더링 지연이 생긴다.

  // 문제는 weight 상태와 관계가 없는 [키 증가] 버튼을 누를 때에도 딜레이가 생긴다는 것이다.
  // 왜냐하면 버튼을 눌러 state 가 변경되고, 컴포넌트가 리렌더링 될 때마다 expensiveTask() 함수 역시 다시 실행되기 때문이다.
  // 렌더링을 지연시키는 함수가 state 가 변경될 때마다, 매번 실행되는 것은 여러모로 좋지 않기 때문에, 리엑트에 불필요한 상황에서는
  // 실행될 필요가 없음을 알려야 한다.
  // expensiveTask = useMemo 이러헥 작성해줬을 때는 이건 함수가 아님.

  return (
    <div>
      <Name />
      <Text title="weight" value={expensiveTask ? "1톤" : weight} />
      <Button handleClick={incrementWeight}>몸무게 증가</Button>

      <Text title="height" value={height} />
      <Button handleClick={incrementHeight}>키 증가</Button>
    </div>
  );
};

export default Home;

// useEffect 를 사용할 때에는 첫 번째 파라미터에는 함수,
// 두 번째 파라미터에는 의존값이 들어있는 배열 (deps) 을 넣습니다.

// 그리고 useEffect 에서는 함수를 반환할 때, 이를 cleanup 함수라고 부릅니다.
// deps 가 비어있는 경우에는 컴포넌트가 언마운트될 때 (사라질 때) cleanup 함수가 호출됩니다.

/*
주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.

props 로 받은 값을 컴포넌트의 로컬 상태로 설정
외부 API 요청 (REST API 등)
라이브러리 사용 (D3, Video.js 등...)
setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약
그리고 언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.

setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
라이브러리 인스턴스 제거
 */

// useCallback 은 렌더링 성능 최적화를 위해 제공되는 훅이다..
// 훅은 전달된 콜백 함수를 메모이제이션 하여 반환하고, 이 함수는 오직 의존하는 상태값이 변경된 경우에만 갱신된다.
// 오직 의존하는 state 가 변경된 경우에만 갱신되기 때문에, Button 으로 props 을 통해 넘겨준 저 함수들은
// React.memo 에 의하여 Button 의 불필요한 리렌더링을 막아주게 된다.
