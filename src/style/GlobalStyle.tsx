import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    padding:0;
    margin: 0;
    box-sizing:0;
}
body {
    background-color:#573290;
    color:white;
    a {
        text-decoration:none;
    }
}
`;