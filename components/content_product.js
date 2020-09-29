import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Content_product = () => {
    const StyledWrapper = styled.div`

    font-family:'Poppins-Regular';

    #components-layout-demo-responsive .logo {
        height: 32px;
        background: rgba(255, 255, 255,0.2);
        margin: 16px;
    }

    .site-layout-sub-header-background {
        background: #fff;
    }

    .site-layout-background {
        background: #fff;
        padding: 0;
        min-height:100vh;
        width:100%;
    }
`

    return (
        <Layout>
            <StyledWrapper>
                {/* <Header className="site-layout-sub-header-background" /> */}
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" >content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Cryptocurrency Payment Gateway ©2020 Created by Teeraphat</Footer>
            </StyledWrapper>
        </Layout>
    )
}

export default Content_product;