import { createGlobalStyle } from 'styled-components'
import { grey300 } from './colors'

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
        padding:0;
        transition:all 0.3s;
        outline:1px solid transparent;
        border-bottom:1px solid transparent;


        :hover,:focus{
            outline:1px solid transparent;
            border-bottom:1px solid lightgrey;
            color:red;
        }
    }
}
`
