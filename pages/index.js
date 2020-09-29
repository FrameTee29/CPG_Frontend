const { default: SendETH } = require("../components/Sendeth");
const { default: Product } = require("./products");
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Home = () =>{
  return(
    <Product/>
  )
}

export default Home;