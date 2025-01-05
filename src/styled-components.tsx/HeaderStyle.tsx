import styled from "styled-components";

const HeaderDiv = styled.div`
    width: 100%;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    position: relative;

    .div1{
        display: flex;
        align-items: center;
        gap: 16px;

        .desktop-menu{
            display: none;
        }
    }
    .div2{
        display: flex;
        align-items: center;
        height: 100%;
        gap: 22px;

        .cart-div{
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;

            #number-on-cart{
                position: absolute;
                height: 13px;
                padding: 0 6px;
                border-radius: 6.5px;
                background-color: #FF7E1B;
                top: calc(50% - 16px);
                left: 9px;

                h1{
                    font-size: 10px;
                    font-weight: 700;
                    line-height: 12.4px;
                    text-align: left;
                    color: #FFFFFF;
                }
            }
            #in-cart{
                position: absolute;
                top: 76px;
                right: -63px;
                width: 360px;
                padding-top: 24px;
                min-height: 256px;
                border-radius: 10px;
                background-color: #FFFFFF;
                box-shadow: 0px 20px 50px -20px #1D202680;
                z-index: 1;

                .cart-header{
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 19.84px;
                    text-align: left;
                    color: #1D2026;
                    margin: 0 0 27px 24px;
                }
                .line{
                    width: 100%;
                    height: 1px;
                    background-color: #E4E9F2;
                }
                .cart-list{
                    width: 100%;
                    min-height: 180px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;

                    .empty-cart{
                        font-size: 16px;
                        font-weight: 700;
                        line-height: 26px;
                        text-align: center;
                        color: #69707D;
                    }
                    .in-cart-object{
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 24px;

                        .object{
                            display: flex;
                            align-items: center;
                            gap: 16px;

                            img{
                                height: 50px;
                                border-radius: 4px;
                            }
                            .info{
                                width: 100%;
                                max-width: 219px;

                                .name{
                                    font-size: 16px;
                                    font-weight: 400;
                                    line-height: 26px;
                                    text-align: left;
                                    color: #69707D;
                                }
                                .price{
                                    font-size: 16px;
                                    font-weight: 400;
                                    line-height: 26px;
                                    text-align: left;
                                    color: #69707D;

                                    span{
                                        font-weight: 700;
                                        color: #1D2026;
                                    }
                                }
                            }
                        }
                    }
                    .checkout{
                        width: 100%;
                        height: 56px;
                        background-color: #FF7E1B;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        h1{
                            font-size: 16px;
                            font-weight: 700;
                            line-height: 19.84px;
                            text-align: left;
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }
        .avatar{
            height: 24px;
        }
    }
    .mobile-menu{
        position: absolute;
        width: 100%;
        min-height: 100vh;
        background-color: rgba(0, 0, 0, 0.75);
        top: 0;
        left: 0;
        z-index: 1;

        .menu-list{
            width: 250px;
            min-height: 100vh;
            background-color: #FFFFFF;
            padding: 25px 0 0 25px;

            ul{
                margin-top: 54px;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 20px;

                li{
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 26px;
                    text-align: left;
                    color: #1D2026;
                }
            }
        }
    }

    @media only screen and (min-width: 1000px){
        max-width: 1110px;
        height: 112px;
        padding: 0;
        border-bottom: 1px solid #E4E9F2;
        margin: 0 auto;

        .div1{
            gap: 56px;
            height: 100%;

            .desktop-menu{
                display: block;
                height: 100%;

                ul{
                    height: 100%;
                    display: flex;
                    gap: 32px;

                    li{
                        font-size: 15px;
                        font-weight: 400;
                        line-height: 26px;
                        color: #69707D;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        transition: all ease 0.2s;
                        cursor: pointer;
                        position: relative;
                    }
                    li:hover{
                        color: #1D2026;
                    }
                    li:hover::after{
                        content: '';
                        position: absolute;
                        height: 4px;
                        width: 100%;
                        background-color: #FF7E1B;
                        bottom: 0;
                    }
                }
            }
        }
        .div2{
            gap: 46px;

            .cart-div{
                .cart-icon:hover{
                    cursor: pointer;
                }
                #in-cart{
                    top: 94px;
                    right: -90px;

                    .cart-list{
                        .in-cart-object{
                            .delete{
                                cursor: pointer;
                            }
                        }
                        .checkout{
                            transition: all ease 0.2s;
                            cursor: pointer;
                        }
                        .checkout:hover{
                            background-color: #FFAB6A;
                        }
                    }
                }
            }
            .avatar{
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
            }
            .avatar:hover{
                outline: 2px solid #FF7E1B;
            }
        }
        
    }
    @media only screen and (min-width: 1200px){
        .div2{
            .cart-div{
                #in-cart{
                    right: -130px;
                }
            }
        }   
    }
    @media only screen and (min-width: 1300px){
        .div2{
            .cart-div{
                #in-cart{
                    right: -172px;
                }
            }
        }   
    }
`

export {HeaderDiv}