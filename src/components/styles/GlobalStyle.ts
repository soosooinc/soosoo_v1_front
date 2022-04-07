import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${reset}

*{
  box-sizing: border-box;
}

a:link{
  color: black;
  text-decoration:none;
}
a:visited{
  color: black;
  text-decoration:none;
}
a:hover{
  color: black;
  text-decoration:none;
}

select {
  outline:none;
}

textarea:focus, input:focus{
    outline: none;
}

// Input type number 일때 input 오른쪽 화살표 없애기
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="checkbox"]:focus {
	outline-color : #ff9248;
	outline-style: solid;
	outline-width : 1px;	
};

input[type="checkbox"] {
  accent-color:#ff9248;
};

body {
  scrollbar-width: none; 
  margin: 0;
  padding: 0;
  font-family: "Pretendard";
  -ms-overflow-style: none; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &::-webkit-scrollbar{
    display: none;
  }
}

  #root {
    width: 100vw;
    height: 100vh;
  }

code {
  font-family: "Pretendard";
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 45 920;
	font-style: normal;
	font-display: swap;
	src: local('Pretendard'), url('assets/fonts/Pretendard.woff2') format('woff2-variations');
}

:root {
  --toastify-color-success: #ff9248;
}

.Toastify__toast-container--top-right {
  // 모달컴포넌트에서 react-toasify 가 가리는 현상 방지용
    z-index: 999999;
}
`;
