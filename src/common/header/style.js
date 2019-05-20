import styled from "styled-components"
import logoPic from '../../static/nav.png'
export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;
export const Logo = styled.a.attrs({
    href: "/"
})`
    height: 56px;
    width: 100px;
    border: 1px solid #f0f0f0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: url(${logoPic});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
    // background: red;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 36px;
    border: none;
    outline: none;
    border-radius: 19px;
    margin-top: 10px;
    box-sizing: border-box;
    padding: 0 20px;
    background: #eee;
    font-size: 14px;
    &::placeholder{
        color: #999;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 10px;
    line-height: 38px;
    border-radius: 19px;
    padding: 0 20px;
    border: 1px solid #ec6419;
    &.reg{
        color:  #ec6419
    }
    &.writting{
        color: #fff;
        background: #ec6419;
    }

`;
