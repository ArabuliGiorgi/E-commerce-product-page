import { PicViewer, ProductDiv } from "../styled-components.tsx/ProductStyle";
import { myContext } from "../App"
import { useContext, useState } from "react";
import previous from "/images/icon-previous.svg"
import next from "/images/icon-next.svg"

export default function Product(){
    const {inCart, setInCart, data} = useContext(myContext);
    const [picNumber, setPicNumber] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [picViewer, setPicViewer] = useState(false);

    function handlePicChange(str: string){
        if(str === "previous"){
            if(picNumber === 0){
                setPicNumber(data.products[0].pictures.length - 1);
            }else{
                setPicNumber(picNumber - 1);
            }
        }else{
            if(picNumber === data.products[0].pictures.length - 1){
                setPicNumber(0);
            }else{
                setPicNumber(picNumber + 1);
            }
        }
    }
    function handleQuantChange(str: string){
        if(str === "plus"){
            setQuantity(quantity + 1);
        }else{
            if(quantity === 0)
                return;
            setQuantity(quantity - 1);
        }
    }
    function handleAddToCart(){
        if(quantity === 0)
            return;
        let obj = inCart.find((element) => element.id === data.products[0].id);
        if(obj !== undefined){
            let newArr = inCart.filter(el => el.id !== obj.id);
            obj.quantity += quantity;
            setInCart([...newArr, obj]);
        }else{
            setInCart([...inCart, {id: data.products[0].id, quantity: quantity}]);
        }
        setQuantity(0);
    }

    return (
        <>
            <ProductDiv>
                <div className="pictures-div">
                    <img src={data.products[0].pictures[picNumber]} alt="picture" className="product-img" onClick={() => setPicViewer(true)}/>
                    <div className="previous flex desktop:hidden" onClick={() => handlePicChange("previous")}>
                        <img src={previous} alt="previous" />
                    </div>
                    <div className="next flex desktop:hidden" onClick={() => handlePicChange("next")}>
                        <img src={next} alt="next" />
                    </div>
                    <div className="thumbnails hidden desktop:flex">
                        {data.products[0].thumbnails.map((thumbnail) => {
                            const index = data.products[0].thumbnails.indexOf(thumbnail);

                            return <div className="thumbnail-div" key={index}>
                                <div id="active-thumbnail" className={`${index === picNumber ? 'blcok' : 'hidden'}`}></div>
                                <img src={thumbnail} alt="thumbnail" onClick={() => setPicNumber(index)}/>
                            </div>
                        })}
                    </div>
                </div>
                <div className="details-div">
                    <h1 className="company-font">{data.products[0].company.toUpperCase()}</h1>
                    <h1 className="product-name">{data.products[0].name}</h1>
                    <p className="product-description">{data.products[0].description}</p>
                    <div className="price-div">
                        <div className="new-price">
                            <h1 className="price">${(data.products[0].price*data.products[0].discount/100).toFixed(2)}</h1>
                            <h1 className="discount">{data.products[0].discount}%</h1>
                        </div>
                        <h1 className="old-price">${data.products[0].price.toFixed(2)}</h1>
                    </div>
                    <div className="purchase">
                        <div className="quantity-div">
                            <div onClick={() => handleQuantChange("minus")}>
                                <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use className="svg-fill" fillRule="nonzero" xlinkHref="#a"/>
                                </svg>
                            </div>
                            <h1 className="quantity-font">{quantity}</h1>
                            <div onClick={() => handleQuantChange("plus")}>
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use className="svg-fill" fillRule="nonzero" xlinkHref="#b"/>
                                </svg>
                            </div>
                        </div>
                        <div className="cart-button" onClick={handleAddToCart}>
                            <svg viewBox="0 0 22 20" width="18" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFFFF" fillRule="nonzero"/>
                            </svg>
                            <h1>Add to cart</h1>
                        </div>
                    </div>
                </div>
            </ProductDiv>
            <PicViewer picviewer={`${picViewer}`}>
                <div className="main">
                    <div className="cross" onClick={() => setPicViewer(false)}>
                        <svg viewBox="0 0 14 15" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" className="fill-svg" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <div className="main-image-div">
                        <img src={data.products[0].pictures[picNumber]} alt="product image" className="main-image"/>
                        <div className="previous" onClick={() => handlePicChange("previous")}>
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1 3 9l8 8" className="svg-stroke" strokeWidth="3" fill="none" fillRule="evenodd"/>
                            </svg>
                        </div>
                        <div className="next" onClick={() => handlePicChange("next")}>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                                <path d="m2 1 8 8-8 8" className="svg-stroke" strokeWidth="3" fill="none" fillRule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div className="thumbnails">
                        {data.products[0].thumbnails.map((thumbnail) => {
                            const index = data.products[0].thumbnails.indexOf(thumbnail);

                            return <div className="thumbnail-div" key={index}>
                                <div id="active-thumbnail" className={`${index === picNumber ? 'blcok' : 'hidden'}`}></div>
                                <div className="thumbnail-image" onClick={() => setPicNumber(index)}>
                                    <img src={thumbnail} alt="thumbnail" />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </PicViewer>
        </>
    )
}