import * as React from "react";
import {
  ListContainer,
  LeftContent,
  Logo,
  Caption,
} from "../../components/generalStyled";
import SideMenu from "../../components/SideMenu";
import Counter from "../../components/Counter";

const CompnaiesListPage = () => {
  return (
    <ListContainer>
      <SideMenu />
      <LeftContent>
        <Counter value={0} />
      </LeftContent>
    </ListContainer>
  );
};
export default CompnaiesListPage;
