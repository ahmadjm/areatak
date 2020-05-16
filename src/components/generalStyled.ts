import styled from "styled-components";
import RatniaBlack from "../assets/img/ratina-black.png";
import IscImage from "../assets/img/isc-en-logo-new-980806.png";
import BgImage from "../assets/img/bgImage.jpg";
import ExitIcon from "../assets/img/exit_icon.png";
import { Button as AntdButton } from "antd";

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 60px;
`;
export const Button = styled(AntdButton)`
  margin: 24px;
  background: linear-gradient(to bottom, rgba(35, 122, 192, 0.81), #00aeef);
`;
export const Isc = styled.div`
  background-image: url(${IscImage});
  background-repeat: no-repeat;
  background-position: center;
  width: 200px;
  height: 22px;
  background-size: contain;
  margin: 10px;
`;
export const BornaFoot = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IscFoot = styled(BornaFoot)`
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url(${RatniaBlack});
  background-repeat: no-repeat;
  width: 155px;
  height: 48px;
  background-size: contain;
`;
export const Title = styled.span`
  font-size: 16px;
  color: #ffffff;
  margin-top: 39px;
`;
export const Caption = styled.span`
  font-size: 15px;
  color: #e9f4fb;
`;
export const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(3, 78, 162, 0.8) 0%,
      rgba(0, 174, 239, 0.8) 100%
    ),
    url(${BgImage});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
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
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const BornaForm = styled.form`
  display: flex;
  flex-direction: column;
  direction: rtl;
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
`;
export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder || "...",
}))`
  width: 312px;
  margin-top: 24px;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  padding: 5px 12px;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: IRANSans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: right;
  font-size: 16px;
  border: none;
  ::placeholder {
    font-size: 14px;
  }
`;
export const AlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BornaInputContainer = styled.div`
  float: left;
  position: relative;
`;
export const Eye = styled.img`
  position: absolute;
  bottom: 5px;
  left: 10px;
  z-index: 10;
  cursor: pointer;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  direction: rtl;
`;
export const SideMenuBorna = styled.aside`
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  width: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: 100vh;
`;
export const SideMenuUl = styled.ul`
  padding: 0;
  list-style: none;
  text-align: right;
  li:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  li {
    padding: 16px;
    cursor: pointer;
  }
`;
export const SideMenuFoot = styled.div`
  height: 51px;
  background-color: rgba(0, 0, 0, 0.3);
  background-image: url(${ExitIcon});
  background-repeat: no-repeat;
  background-position: right;
  text-align: right;
  padding: 12px 30px;
`;

export const SideMenuTop = styled.div`
  display: flex;
  flex-direction: column;
  & > img {
    height: 61px;
    width: 196px;
    margin: 23px auto 5px auto;
  }
`;
export const LeftContent = styled.div`
  width: 70%;
`;
export const Counter = styled.div`
  color: red;
`;
