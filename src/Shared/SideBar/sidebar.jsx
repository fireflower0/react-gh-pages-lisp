import React from 'react';
import styled from 'styled-components';
import { Nav, NavIcon } from 'react-sidenav';
import { withRR4 } from "react-sidenav/withRR4";
import { Icon } from 'react-icons-kit';
import { ic_home } from 'react-icons-kit/md/ic_home';
import { ic_keyboard } from 'react-icons-kit/md/ic_keyboard';
import { ic_assignment } from 'react-icons-kit/md/ic_assignment'
import { Navigation } from '../containers';

const Text = styled.div`
  padding-left: 8px;
`;

const theme = {
  hoverBgColor:       "#f5f5f5",
  selectionBgColor:   "#f5f5f5",
  selectionIconColor: "#03A9F4"
};

class Sidebar extends React.Component {
  SubMenuItem (child) {
    var list = [];
    for (let i = 0; i < child.length; i++){
      list.push(<Nav key={i} id={child[i][0]}><Text>{child[i][1]}</Text></Nav>);
    }
    return list;
  }

  MenuItem(parent, child) {
    return (
      <Nav id={parent[0]}>
        <NavIcon>
          <Icon icon={parent[1]} />
        </NavIcon>
        <Text>{parent[2]}</Text>
        { child !== null ? this.SubMenuItem(child) : null }
      </Nav>
    );
  }

  render() {
    const SideNav = withRR4();
    return (
      <Navigation>
        <SideNav theme={theme} defaultSelectedPath={"home"}>
          {this.MenuItem(["home", ic_home, "Home"], null)}
          {this.MenuItem(["blog", ic_assignment, "Blog"], null)}
          {this.MenuItem(["programming", ic_keyboard, "Programming"],
                         [["commonlisp", "Common Lisp"]])}
        </SideNav>
      </Navigation>
    );
  }
}

export default Sidebar;
