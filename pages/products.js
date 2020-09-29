const { default: SendETH } = require("../components/Sendeth");
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Topbar from '../components/Topbar';
import { Layout } from 'antd';
import Content_product from '../components/content_product';
const { Header, Content, Footer, Sider } = Layout;

const Products = () => {
    const StyledWrapper = styled.body`
    `;

    return (
        <StyledWrapper>
            <Layout>
                <Topbar/>
                <Content_product/>
            </Layout>
        </StyledWrapper>
    )
}

export default Products;