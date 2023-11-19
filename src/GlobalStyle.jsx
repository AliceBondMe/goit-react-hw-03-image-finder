const { createGlobalStyle } = require('styled-components');

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        font-size: 18px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #ffffff;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }

    p, h1, h2, h3 {
        margin: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
