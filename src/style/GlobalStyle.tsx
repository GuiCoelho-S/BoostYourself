import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    padding:0;
    margin: 0;
    box-sizing:0;
    font-family: 'Roboto', sans-serif;
    color:black;
}
body {
    background-color:whitesmoke;
    color:white;
    a {
        text-decoration:none;
    }
}
`
