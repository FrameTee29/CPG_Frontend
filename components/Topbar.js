import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Topbar = () => {
    const StyledWrapper = styled.div`

   

    .Container_topbar{
        font-family:'Poppins-Regular';
    }

    #components-layout-demo-responsive .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }

        
    .site-layout-sub-header-background {
        background: #fff;
    }

    .site-layout-background {
        background: #fff;
    }

`


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <StyledWrapper>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} className="Container_topbar">
                    <Menu.Item key="1" ><Link href="/"><a ><img src="/static/images/icons8-men's-pajama-40.png" />Fashion Cloth</a></Link></Menu.Item>
                    <Menu.Item key="2" ><img src="/static/images/icons8-android-40.png" />Mobile Phone</Menu.Item>
                    <Menu.Item key="3" ><img src="/static/images/icons8-smart-watch-40.png" />Watch</Menu.Item>
                    <Menu.Item key="5" ><img src="/static/images/icons8-laptop-40.png" />Computer</Menu.Item>
                    <Menu.Item key="6" ><img src="/static/images/icons8-food-bar-40.png" />Food</Menu.Item>
                </Menu>
            </StyledWrapper>
        </Sider>

    )
}

export default Topbar;