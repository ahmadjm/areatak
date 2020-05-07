import { Child, Container, ChildBig } from "./styled"
import React from "react"

export const ExampleComponent = ()=>{
    return (
        <Container>
            <Child/>
            <Child/>
            <ChildBig/>
        </Container>
    )
}