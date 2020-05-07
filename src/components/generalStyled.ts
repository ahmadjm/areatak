import styled from "styled-components"
import RatniaBlack from "../assets/img/ratina-black.png";
import IscImage from "../assets/img/isc-en-logo-new-980806.png";
import PassEye from "../assets/img/remove_red_eye-24px.svg";

export const BornaButton = styled.button`
  width: 258px;
  height: 44px;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, rgba(35, 122, 192, 0.81), #00aeef);
  margin-top:24px;
`
export const Isc = styled.div`
  background-image :url(${IscImage});
  background-repeat : no-repeat;
  width:87px;
  height:22px;
  background-size:contain;
  margin-top:274px;
`
export const Logo = styled.div`
  background-image: url(${RatniaBlack});
  background-repeat: no-repeat;
  margin-top :243px;
  width: 118px;
  height: 67px;
  background-size: contain;
`
export const Title = styled.span`
  font-size: 24px;
  color: #ffffff;
  margin-top:36px
  
`
export const Caption = styled.span`
  font-size: 15px;
  color: #e9f4fb;
  
`
export const Container = styled.div`
  display:flex;
  flex-direction: column;
  height: 1000px;
  align-items: center;
  font-family: IRANSans;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  background-image: linear-gradient(to bottom, #034ea2, #00aeef);
`
export const BornaForm = styled.form`
  display:flex;
  flex-direction : column;
  direction:rtl;
  align-items:center;
`
export const BornaInput = styled.input`
  width: 312px;
  margin-top:24px;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  padding: 10px 12px;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: IRANSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: right;
`
export const BornaInputPass = styled(BornaInput)`

`
export const EyePass = styled.span`
  float: right;
  margin-left: -25px;
  margin-top: -25px;
  position: relative;
  z-index: 2;
`