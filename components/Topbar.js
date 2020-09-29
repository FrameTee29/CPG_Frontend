import { useState, useEffect, useCallback } from 'react';
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

    .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
    .ant-layout-sider-zero-width-trigger{
        top: 0;
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
                {/* <div className="logo" /> */}
                
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} className="Container_topbar">
                    <Menu.Item key="1" icon={<UserOutlined />}>Fashion Cloth</Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>Mobile Phone</Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>Watch</Menu.Item>
                    <Menu.Item key="5" icon={<UploadOutlined />}>Computer</Menu.Item>
                    <Menu.Item key="6" icon={<UserOutlined />}>Food</Menu.Item>
                </Menu>
            </StyledWrapper>
        </Sider>

    )
}

export default Topbar;