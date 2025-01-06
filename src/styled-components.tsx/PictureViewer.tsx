import styled from "styled-components";

const PicViewer = styled.div<{popup: string}>`
    display: ${(props) => props.popup === "true" ? 'none' : 'block'};
    width: 100%;
    max-width: 400px;
    height: 300px;
    margin: 0 auto;
    position: relative;

    .main{
        width: 100%;
        height: 100%;

        .product-img{
            height: 100%;
            width: 100%;
            position: relative;

            img{
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

                .svg-stroke{
                    stroke: #1D2026;
                }
                svg{
                    width: 10px;
                    height: 14px;
                }
            }
            .previous{
                left: 16px;

                svg{
                    margin-left: -2px;
                }
            }
            .next{
                right: 16px;

                svg{
                    margin-right: -2px;
                }
            }
        }
        .thumbnails{
            display: none;
        }
    }

    @media only screen and (min-width: 1000px){
        display: block;
        max-width: ${(props) => props.popup === "true" ? 'none' : '445px'};
        height: auto;
        margin: 0;
        ${(props) => props.popup === "false" ? '' : `
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.75);
            width: 100%;
            height: 100%;
            z-index: 1;
            justify-content: center;
            align-items: center;
        `}

        .main{
            ${(props) => props.popup === "false" ? '' : `
                width: 100%;
                height: auto;
                max-width: 550px;
                display: flex;
                flex-direction: column;
                align-items: end;
            `}

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
            .product-img{
                img{
                    border-radius: 15px;
                }
                ${(props) => props.popup === "false" ? '' : `
                    .previous, .next{
                        width: 56px;
                        height: 56px;
                        cursor: pointer;

                        svg{
                            width: 13px;
                            height: 18px;
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
                `}
            }
            .thumbnails{
                height: 88px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 ${(props) => props.popup === "true" ? '53px' : '0'};

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
`;

export {PicViewer}