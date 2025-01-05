import styled from "styled-components";

const ProductDiv = styled.div`
    width: 100%;

    .pictures-div{
        width: 100%;
        max-width: 400px;
        height: 300px;
        margin: 0 auto;
        position: relative;

        .product-img{
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .previous, .next{
            position: absolute;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
            background-color: #FFFFFF;
            top: 50%;
            transform: translate(0, -50%);
            border-radius: 50%;

            img{
                width: 8px;
                height: 14px;
            }
        }
        .previous{
            left: 16px;
            
            img{
                margin-left: -2px;
            }
        }
        .next{
            right: 16px;

            img{
                margin-right: -2px;
            }
        }
    }
    .details-div{
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 24px 24px 88px;

        .company-font{
            font-size: 12px;
            font-weight: 700;
            line-height: 14.88px;
            letter-spacing: 1.8461538553237915px;
            text-align: left;
            color: #FF7E1B;
            margin-bottom: 19px;
        }
        .product-name{
            font-size: 28px;
            font-weight: 700;
            line-height: 32px;
            text-align: left;
            color: #1D2026;
            margin-bottom: 15px;
        }
        .product-description{
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            color: #69707D;
            margin-bottom: 24px;
        }
        .price-div{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 24px;

            .new-price{
                display: flex;
                gap: 16px;
                align-items: center;

                .price{
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 34.73px;
                    text-align: left;
                    color: #1D2026;
                }
                .discount{
                    width: 51px;
                    height: 27px;
                    background-color: #FFEEE2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 19.84px;
                    color: #FF7E1B;
                }
            }
            .old-price{
                font-size: 16px;
                font-weight: 700;
                line-height: 26px;
                text-align: left;
                text-decoration-line: line-through;
                color: #B6BCC8;
            }
        }
        .purchase{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;

            .quantity-div{
                width: 100%;
                height: 56px;
                border-radius: 10px;
                background-color: #F6F8FD;
                padding: 0 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .quantity-font{
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 19.84px;
                    text-align: center;
                    color: #1D2026;
                }
            }
            .cart-button{
                width: 100%;
                height: 56px;
                border-radius: 10px;
                box-shadow: 0px 20px 50px -20px #FF7E1B;
                background-color: #FF7E1B;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;

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

    @media only screen and (min-width: 1000px){
        max-width: 1055px;
        margin: 0 auto;
        padding: 90px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .pictures-div{
            max-width: 445px;
            height: auto;
            margin: 0;

            .product-img{
                border-radius: 15px;
                margin-bottom: 32px;
                cursor: pointer;
            }
            .thumbnails{
                height: 88px;
                width: 100%;
                justify-content: space-between;
                align-items: center;

                .thumbnail-div{
                    width: 88px;
                    height: 88px;
                    position: relative;

                    #active-thumbnail{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border: 2px solid #FF7E1B;
                        border-radius: 10px;
                        background-color: rgba(255, 255, 255, 0.75);
                        z-index: 1;
                    }
                    img{
                        height: 100%;
                        border-radius: 10px;
                        transition: all ease 0.2s;
                        cursor: pointer;
                    }
                    img:hover{
                        opacity: 50%;
                    }
                }
            }
        }
        .details-div{
            max-width: 445px;
            margin: 0;
            padding: 0;

            .company-font{
                font-size: 13px;
                line-height: 16.12px;
                letter-spacing: 2px;
                margin-bottom: 27px;
            }
            .product-name{
                font-size: 44px;
                line-height: 48px;
                margin-bottom: 32px;
            }
            .product-description{
                font-size: 16px;
                line-height: 26px;
            }
            .price-div{
                flex-direction: column;
                justify-content: center;
                align-items: start;
                margin-bottom: 32px;

                .new-price{
                    margin-bottom: 10px;
                }
            }
            .purchase{
                flex-direction: row;

                .quantity-div{
                    max-width: 157px;
                    padding: 0 16px;

                    div{
                        min-height: 15px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;

                        .svg-fill{
                            fill: #FF7E1B;
                        }
                        &:hover .svg-fill{
                            fill: #FFAB6A;
                        }
                    }
                }
                .cart-button{
                    transition: all ease 0.2s;
                    cursor: pointer;
                }
                .cart-button:hover{
                    background-color: #FFAB6A;
                }
            }
        }
        
    }
`

const PicViewer = styled.div<{picviewer: string}>`
    display: none;

    @media only screen and (min-width: 1000px){
        display: ${(props) => props.picviewer === "true" ? 'flex' : 'none'};
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 100%;
        z-index: 1;
        justify-content: center;
        align-items: center;

        .main{
            width: 100%;
            max-width: 550px;
            display: flex;
            flex-direction: column;
            align-items: end;

            .cross{
                cursor: pointer;
                margin-bottom: 24px;

                .fill-svg{
                    fill: #FFFFFF;
                }
                &:hover .fill-svg{
                    fill: #FF7E1B;
                }
            }
            .main-image-div{
                position: relative;
                width: 100%;

                .main-image{
                    width: 100%;
                    border-radius: 15px;
                    margin-bottom: 40px;
                }
                .previous, .next{
                    position: absolute;
                    width: 56px;
                    height: 56px;
                    background-color: #FFFFFF;
                    border-radius: 50%;
                    top: 237px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;

                    .svg-stroke{
                        stroke: #1D2026;
                    }
                    &:hover .svg-stroke{
                        stroke: #FF7E1B;
                    }
                }
                .previous{
                    left: -28px;
                }
                .next{
                    right: -28px;
                }
            }
            
            .thumbnails{
                width: 100%;
                padding: 0 53px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .thumbnail-div{
                    width: 88px;
                    height: 88px;
                    position: relative;

                    #active-thumbnail{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        border: 2px solid #FF7E1B;
                        border-radius: 10px;
                        background-color: rgba(255, 255, 255, 0.75);
                        z-index: 1;
                    }
                    .thumbnail-image{
                        cursor: pointer;
                        width: 100%;
                        height: 100%;
                        position: relative;

                        &:hover::after{
                            content: '';
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            background-color: #FFFFFF;
                            border-radius: 10px;
                            opacity: 50%;
                            top: 0;
                            left: 0;
                        }
                        img{
                            height: 100%;
                            border-radius: 10px;
                        }
                    }
                }
            }
        }
    }
`

export {ProductDiv, PicViewer}