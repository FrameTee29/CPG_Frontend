const { default: SendETH } = require("../components/Sendeth");
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { Layout } from 'antd';
import Content_product from '../components/content_product';
import Content_send from '../components/content_send';
const { Header, Content, Footer, Sider } = Layout;

const sendETH = () => {
    const StyledWrapper = styled.body`
    `;

    return (
        <StyledWrapper>
            <title>Cryptocurrency Payment Gateway</title>
            <Layout>
                <Topbar/>
                {/* <Content_send/> */}
            </Layout>
        </StyledWrapper>
    )
}

export default sendETH;