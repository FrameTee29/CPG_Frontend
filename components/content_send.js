import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Row, Col, Divider } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import TransferETH from './Sendeth';

const { Header, Content, Footer, Sider } = Layout;

const Content_send = () => {


    const style = { background: '#0092ff', padding: '8px 0' };

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

    .Headlogo{
        width:55px;
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

                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" >
                        <TransferETH/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Cryptocurrency Payment Gateway ©2020 Created by Teeraphat</Footer>
            </StyledWrapper>
        </Layout>
    )
}

export default Content_send;