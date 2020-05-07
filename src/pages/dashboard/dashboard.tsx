import React from "react"
import { Isc,Container ,Caption, Title, Logo} from "../../components/generalStyled"

export const DashboardPage = ()=>{
    return(
        <>
        <Container>
            <Logo/>
            <Caption>
                بُرنا, بستر نوین اعتماد      
            </Caption>
            <Title>
                سامانه ثبت شرکت های فینتک   
            </Title>
            <Isc/>
            <span>شرکت خدمات انفورماتیک</span>
        </Container>
        </>
    )
}