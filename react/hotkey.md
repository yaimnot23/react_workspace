# VSCode React & TypeScript 필수 단축키 요약

이 문서는 React 및 TypeScript 개발 시 VSCode에서 자주 사용하는 단축키와 스니펫을 정리한 치트 시트입니다. `xa-snippets`는 제외되었습니다.

## 1. 🥇 ES7+ React/Redux/React-Native snippets (표준 스니펫)

React 개발 시 코드를 생성하는 **가장 핵심적인 스니펫** 모음입니다. (VSCode 확장 프로그램 설치 필요)

### A. 컴포넌트 생성 (Component)

| 단축어 | 설명 | 
 | ----- | ----- | 
| **`rafce`** | `React.memo`, `export default`가 포함된 화살표 함수 컴포넌트 (가장 많이 씀) | 
| **`rfce`** | `export default`가 포함된 일반 함수 컴포넌트 | 
| **`rafc`** | `export`가 없는 화살표 함수 컴포넌트 | 
| **`sfc`** | 간단한 화살표 함수 컴포넌트 (Stateless Functional Component) | 
| **`cc`** | 클래스 기반 컴포넌트 (Class Component) | 
| **`tsrafce`** | TypeScript + `rafce` (타입이 적용된) | 
| **`tsrfce`** | TypeScript + `rfce` (타입이 적용된) | 

### B. React 훅 (Hooks)

| 단축어 | 설명 | 
 | ----- | ----- | 
| **`uss`** | `const [state, setState] = useState(initialState);` (가장 중요!) | 
| **`uef`** | `useEffect(() => {}, []);` (가장 중요!) | 
| **`ucf`** | `const context = useContext(Context);` | 
| **`urf`** | `const ref = useRef(initialValue);` | 
| **`umf`** | `const memoizedValue = useMemo(() => {}, []);` | 
| **`ucbf`** | `const callback = useCallback(() => {}, []);` | 
| **`urd`** | `const [state, dispatch] = useReducer(reducer, initialState);` | 
| **`usf`** | `useFormState(action, initialState);` (Next.js/React 18+) | 

### C. Import / Export

| 단축어 | 설명 | 
 | ----- | ----- | 
| **`imr`** | `import React from 'react';` | 
| **`imrs`** | `import React, { useState } from 'react';` | 
| **`imrse`** | `import React, { useState, useEffect } from 'react';` | 
| **`imp`** | `import Module from 'module';` (기본 `import`) | 
| **`exp`** | `export default Module;` (기본 `export`) | 

### D. 기타 유틸리티

| 단축어 | 설명 | 
 | ----- | ----- | 
| **`clg`** | `console.log(object)` | 
| **`ccl`** | `console.clear()` | 
| **`cwa`** | `console.warn(object)` | 

## 2. 🧩 TypeScript Essential Plugins (기능 강화)

이 플러그인은 `uss` 같은 스니펫 단축키를 제공하지 않습니다. 대신 **명령 팔레트(`Ctrl+Shift+P`)** 나 **우클릭 메뉴**를 통해 강력한 리팩토링 기능을 제공합니다.

* **주요 기능 (단축키 없음 - 명령 팔레트에서 실행):**

  * **Go to / Select Nodes by Kind:** `AST` 기반으로 코드의 특정 부분(모든 주석, 모든 문자열...)을 선택합니다.

  * **Swap** Keys and **Values in Object:** 객체의 키와 값을 서로 바꿉니다.

  * **Turn Array Into Object:** 배열을 특정 키 기준으로 객체로 변환합니다.

* **유일한 단축키:**

  * `Ctrl+Shift+Enter` (변수명 변경 중): 변수명을 바꿀 때, 문자열과 주석에 포함된 이름까지 함께 변경해 줍니다.

## 3. 🛠️ VSCode 내장 필수 단축키 (React/TS 용)

이 기능들은 확장 프로그램이 아니라 **VSCode 자체 기능**이며 React/TS 개발