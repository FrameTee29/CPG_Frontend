import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Row, Col, Divider } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Content_product = () => {


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

    .d-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.align-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.flex-centerY-centerX {
  justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

body {
  background-color: #f7f7f7;
}

.page-wrapper {
  height: 100%;
  display: table;
}

.page-wrapper .page-inner {
  display: table-cell;
  vertical-align: middle;
}

.el-wrapper {
  width: 360px;
  padding: 15px;
  margin: 15px auto;
  background-color: #fff;
}

@media (max-width: 991px) {
  .el-wrapper {
    width: 345px;
  }
}

@media (max-width: 767px) {
  .el-wrapper {
    width: 290px;
    margin: 30px auto;
  }
}

.el-wrapper:hover .h-bg {
  left: 0px;
}

.el-wrapper:hover .price {
    font-size:12px;
  left: 20px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #818181;
}

.el-wrapper:hover .add-to-cart {
  left: 50%;
}

.el-wrapper:hover .img {
  webkit-filter: blur(7px);
  -o-filter: blur(7px);
  -ms-filter: blur(7px);
  filter: blur(7px);
  filter: progid:DXImageTransform.Microsoft.Blur(pixelradius='7', shadowopacity='0.0');
  opacity: 0.4;
}

.el-wrapper:hover .info-inner {
  bottom: 155px;
}

.el-wrapper:hover .a-size {
  -webkit-transition-delay: 300ms;
  -o-transition-delay: 300ms;
  transition-delay: 300ms;
  bottom: 50px;
  opacity: 1;
}

.el-wrapper .box-down {
  width: 100%;
  height: 60px;
  position: relative;
  overflow: hidden;
}

.el-wrapper .box-up {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.el-wrapper .img {
  padding: 20px 0;
  -webkit-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
}

.h-bg {
  -webkit-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 800ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  width: 660px;
  height: 100%;
  background-color: #3f96cd;
  position: absolute;
  left: -659px;
}

.h-bg .h-bg-inner {
  width: 50%;
  height: 100%;
  background-color: #464646;
}

.info-inner {
  -webkit-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 400ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  position: absolute;
  width: 100%;
  bottom: 25px;
}

.info-inner .p-name,
.info-inner .p-company {
  display: block;
}

.info-inner .p-name {
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  color: #252525;
}

.info-inner .p-company {
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #8c8c8c;
}

.a-size {
  -webkit-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 300ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  position: absolute;
  width: 100%;
  bottom: -20px;
  font-family: 'PT Sans', sans-serif;
  color: #828282;
  opacity: 0;
}

.a-size .size {
  color: #252525;
}

.cart {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
}

.cart .price {
  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-delay: 100ms;
  -o-transition-delay: 100ms;
  transition-delay: 100ms;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: #252525;
}

.cart .add-to-cart {
  -webkit-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -moz-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  -o-transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  transition: all 600ms cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -moz-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  -o-transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  transition-timing-function: cubic-bezier(0, 0, 0.18, 1);
  /* ease-out */
  -webkit-transition-delay: 100ms;
  -o-transition-delay: 100ms;
  transition-delay: 100ms;
  display: block;
  position: absolute;
  top: 50%;
  left: 110%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.cart .add-to-cart .txt {
  font-size: 12px;
  color: #fff;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  white-space: nowrap;
}

.sizeCloth{
    width:150px;
}
`

    return (
        <Layout>
            <StyledWrapper>

                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" >

                        {/* แถวที่ 1  */}

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img className="sizeCloth" src="/static/images/Linen_Black.jpg"  />
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Linen T-shirt</span>
                                                            <span class="p-company">Black</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.044411 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img className="sizeCloth" src="/static/images/Linen_Beige.jpg" />
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Linen T-shirt</span>
                                                            <span class="p-company">DARK BEIGE</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.044411 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img className="sizeCloth" src="/static/images/Linen_Brown.jpg" />
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Linen T-shirt</span>
                                                            <span class="p-company">RED-BROWN</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.044411 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img className="sizeCloth" src="/static/images/Polo_black.jpg" />
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Polo Shirt Slim Fit</span>
                                                            <span class="p-company">BLACK/NARROW-STRIPED</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.053311 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        {/* แถวที่ 2 */}

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img className="sizeCloth" src="/static/images/Polo_striped.jpg"  loading="lazy"/>
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Polo Shirt Slim Fit</span>
                                                            <span class="p-company">GREIGE/STRIPED</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">S , M , L , XL</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.053311 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img className="sizeCloth" src="/static/images/Jean_Blue.jpg" loading="lazy"/>
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Regular Jeans</span>
                                                            <span class="p-company">DENIM BLUE</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">30 , 32 , 34 , 36</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.097811 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img className="sizeCloth" src="/static/images/Jean_Black.jpg" loading="lazy"/>
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Regular Jeans</span>
                                                            <span class="p-company">BLACK/WASHED OUT</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">30 , 32 , 34 , 36</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.097811 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <div class="container page-wrapper">
                                    <div class="page-inner">
                                        <div class="row">
                                            <div class="el-wrapper">
                                                <div class="box-up">
                                                    <img  className="sizeCloth" src="/static/images/Jean_Grey.jpg" loading="lazy"/>
                                                    <div class="img-info">
                                                        <div class="info-inner">
                                                            <span class="p-name">Regular Jeans</span>
                                                            <span class="p-company">GRAPHITE GREY</span>
                                                        </div>
                                                        <div class="a-size">Available sizes : <span class="size">30 , 32 , 34 , 36</span></div>
                                                    </div>
                                                </div>

                                                <div class="box-down">
                                                    <div class="h-bg">
                                                        <div class="h-bg-inner"></div>
                                                    </div>

                                                    <a class="cart" href="#">
                                                        <span class="price">0.097811 ETH</span>
                                                        <span class="add-to-cart">
                                                            <span class="txt">Add in cart</span>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>


                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Cryptocurrency Payment Gateway ©2020 Created by Teeraphat</Footer>
            </StyledWrapper>
        </Layout>
    )
}

export default Content_product;