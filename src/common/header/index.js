import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from "./style"

class Header extends Component {
  render(){
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left'>首页</NavItem>
          <NavItem className='right'>下载登陆APP</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <Button className='reg'>
            写文章
          </Button>
          <Button className='writting'>
            写文章
          </Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header