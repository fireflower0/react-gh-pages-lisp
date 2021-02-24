import React from 'react';
import styled from 'styled-components';
import { Nav, NavIcon } from 'react-sidenav';
import { withRR4 } from "react-sidenav/withRR4";
import { Icon } from 'react-icons-kit';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_keyboard } from 'react-icons-kit/md/ic_keyboard';
import { ic_assignment } from 'react-icons-kit/md/ic_assignment';

const Navigation = styled.div`
  width: 220px;
  flex-shrink: 0;
  background: #333333;
  color: #FFDBC9;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.125);
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const theme = {
  selectionColor: "#FFC7AF",
  selectionBgColor: "#000",
  hoverBgColor: "#000",
};

const Sidebar = () => {
  const menuProgSubItems = [
    {
      navId: "commonlisp",
      label: "Commonlisp",
      icon: null,
    },
  ];

  const menuItems = [
    {
      navId: "home",
      label: "Home",
      icon: ic_home,
      children: null,
    },
    {
      navId: "blog",
      label: "Blog",
      icon: ic_assignment,
      children: null,
    },
    {
      navId: "programming",
      label: "Programming",
      icon: ic_keyboard,
      children: menuProgSubItems,
    },
  ];

  const SubMenuItem = (child) => {
    var list = [];
    for (let i = 0; i < child.length; i++) {
      list.push(
        <Nav key={i} id={child[i][0]}>
          <Text>{child[i][1]}</Text>
        </Nav>
      );
    }
    return list;
  };

  const MenuItem = (parent, children) => (
    <Nav key={parent[0]} id={parent[0]}>
      <NavIcon>
        <Icon icon={parent[1]} />
      </NavIcon>
      <Text>{parent[2]}</Text>
      { children !== null
        ? children.map(child => SubMenuItem([[child.navId, child.label]]))
        : null }
    </Nav>
  );

  const SideNav = withRR4();

  return (
    <Navigation>
      <SideNav theme={theme} defaultSelectedPath={"home"}>
        {menuItems.map(v => MenuItem([v.navId, v.icon, v.label], v.children))}
      </SideNav>
    </Navigation>
  );
};

export default Sidebar;
