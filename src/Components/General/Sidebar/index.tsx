import React from "react";
import { ButtonList, NavButton, SidebarDiv, SidebarHeader } from "./styles";

function SideBar() {
  return (
    <SidebarDiv>
      <SidebarHeader>Acala</SidebarHeader>
      <ButtonList>
        <NavButton>Posts</NavButton>
      </ButtonList>
    </SidebarDiv>
  );
}

export default SideBar;
