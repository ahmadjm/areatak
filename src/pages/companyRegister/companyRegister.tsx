import React from "react"
import { Isc,Container, BornaForm, BornaInput,BornaInputPass,BornaButton } 
from "../../components/generalStyled"
import { RegisterTitle } from "../../pages/companyRegister/companyRegister"

export const Register = ()=>{
    return(
        <>
        <Container>
            <RegisterTitle>
                به منظور ثبت نام در سامانه برنا اطلاعات زیر را وارد نمایید      
            </RegisterTitle>
            <BornaForm >
                <BornaInput placeholder="نام"/>
                <BornaInput placeholder="نام خانوادگی" />
                <BornaInput placeholder="شماره ملی"/>
                <BornaInput placeholder="ایمیل" />
                <BornaInputPass type="password" placeholder="رمز"  />
                <BornaButton> ثبت نام</BornaButton>
                <Isc/>
                <span>شرکت خدمات انفورماتیک</span>
            </BornaForm>
        </Container>
        </>
    )
}