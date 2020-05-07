import styled from "styled-components";

export const Container =  styled.div`
display:flex;
flex-flow:row;
justify-content:center;
align-items:column;
height:1000px;
` 
export const Child = styled.div`

    background:black;
    margin:1em;
    flex-grow:1;
`
export const ChildBig =styled(Child)`
    flex-grow:2;
`