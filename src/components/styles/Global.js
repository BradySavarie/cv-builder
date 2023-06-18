import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

* {
box-sizing: border-box;
}

body {
background: white;
color: hsl(192, 100%, 9%);
font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
font-size:  14px;
margin: 0;
}

h1, h2, h3, p, a, li {
    color: black;
}

h2 {
    margin: 10px 0px;
}

h3 {
    margin: 6px 0px;
}

h1 {
    color: black;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    margin: 0;
    padding: 0;
}

h2 {
    border-bottom: 1px solid #000000;
    text-transform: uppercase;
    font-size: 16px;
    padding: 0;
}

h3 {
    display: flex;
    font-size: 15px;
    padding: 0;
    justify-content: space-between;
}

p {
    margin: 0;
    padding: 0;
}

a {
    color: black;
}

ul {
    margin: 4px 0;
    padding-left: 24px;
    padding-right: 24px;
}

textarea {
    font-family: inherit;
}
`;

export default GlobalStyles;
