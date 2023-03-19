import Styled from 'styled-components'

export const Container = Styled.div`
 background:#8cc03d; 
 margin: 0 auto;
 padding:56px;
 border-radius:12px;
 margin:4px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 `;

export const Input = Styled.input`
padding: 8px 2px 8px 12px;
border-radius: 12px;
border: 1px solid #0a381c;
background: #eee;
&:active, &:focus {
    outline: none;
}
margin:6px;
`

export const Button = Styled.button`
padding: 8px;
border-radius: 12px;
border: 1px solid #0a381c;
background: #eee;
&:hover {
    background: #becea6;
}
&:active, &:focus {
    outline: none;
}
margin:6px;

`
export const HomeContainer = Styled.div`
min-height:100vh;
display: flex;
background: #252525;
flex-direction: column;
align-items: center;
`
export const Search = Styled.input`
height: 30px;
border-radius: 12px;
padding: 0px 3px 0px 12px;
border: 1px solid #050505;
background: #191919;
&:active, &:focus {
    outline: none;
}
margin: 10px;
color: #ffffffc1;
`

export const ChartWrapper = Styled.div`
background-color:  #eeeeee11;
border-radius: 16px;
padding: 30px;
`

export const LineWrapper = Styled.div`
ul {
    color:white;}

`


