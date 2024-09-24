# 리액트 훅(React Hook)

- 함수로 만든 리액트 컴포넌트에서 클래스로 만든 리액트 컴포넌트의 기능을 이용하도록 도와주는 함수들이다.
- 이름 앞에 항상 use를 붙인다.
- useState, useEffect, useRef, useContext, ...

## useState

```js
import { useState } from "react";
const [state 변수, set 함수] = useState(초기값);
```

- useState를 호출하면 2개의 요소가 담긴 배열을 반환한다.
- 첫번째 요소는 현재 상태의 값을 저장하고 있는 변수
- 두번째 요소는 state 변수의 값을 변경하는 함수
