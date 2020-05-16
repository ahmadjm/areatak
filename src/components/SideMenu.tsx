import * as React from "react";
import {
  SideMenuBorna,
  SideMenuTop,
  SideMenuUl,
  SideMenuFoot,
} from "./generalStyled";
import Ratina from "../assets/img/ratina-black.png";
import homeIcon from "../assets/img/homeIcon.svg";
import RegisterIcon from "../assets/img/registerIcon.svg";
import ConfigIcon from "../assets/img/conFigIcon.svg";
import Counter from "../components/Counter";
const SideMenu = () => {
  return (
    <SideMenuBorna>
      <SideMenuTop>
        <img src={Ratina} />
        <span>
          بُرنا، <span>بستر نوین اعتماد</span>
        </span>
      </SideMenuTop>
      <SideMenuUl>
        <li>
          <img src={homeIcon} />
          شرکت ها
        </li>
        <li>
          <img src={RegisterIcon} />
          ثبت نام شرکت
        </li>
        <li>
          <img src={ConfigIcon} />
          تنظیمات
        </li>
        <Counter value={0} isOdd={true} />
      </SideMenuUl>
      <SideMenuFoot>خروج</SideMenuFoot>
    </SideMenuBorna>
  );
};
export default SideMenu;
