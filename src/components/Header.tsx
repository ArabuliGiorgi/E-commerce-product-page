import { HeaderDiv } from "../styled-components.tsx/HeaderStyle";
import { useEffect, useState, useContext } from "react";
import { myContext } from "../App"
import MenuIcon from "/images/icon-menu.svg"
import Logo from "/images/logo.svg"
import Avatar from "/images/image-avatar.png"
import Cart from "/images/icon-cart.svg"
import Cross from "/images/icon-close.svg"
import Trash from "/images/icon-delete.svg"

export default function Header(){
    const {inCart, setInCart, data} = useContext(myContext);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [numberOnCart, setNumberOnCart] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setMobileMenu(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        let newNum = 0;
        inCart.forEach((el) => newNum += el.quantity);
        setNumberOnCart(newNum);
    }, [inCart]);

    function handleDelete(e: React.MouseEvent<HTMLElement>): void{
        const target = e.target as HTMLElement;
        const parent = target.parentElement;
        setInCart(inCart.filter((element) => element.id !== Number(parent?.dataset.id)));
    }

    return(
        <HeaderDiv>
            <div className="div1">
                <img src={MenuIcon} alt="menu" className="desktop:hidden" onClick={() => setMobileMenu(true)}/>
                <img src={Logo} alt="logo" />
                <div className="desktop-menu">
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="div2">
                <div className="cart-div">
                    <div id="number-on-cart" className={`${numberOnCart === 0 ? 'hidden' : 'block'}`}><h1>{numberOnCart}</h1></div>
                    <img src={Cart} alt="cart" onClick={() => setShowCart(!showCart)} className="cart-icon"/>
                    <div id="in-cart" className={`${showCart ? 'block' : 'hidden'}`}>
                        <h1 className="cart-header">Cart</h1>
                        <div className="line"></div>
                        <div className="cart-list">
                            {inCart.length === 0 ? 
                            (<h1 className="empty-cart">Your cart is empty.</h1>) : (
                            <>
                            {inCart.map((element) => {
                                let obj = data.products.find(el => el.id === element.id);
                                if(obj === undefined)
                                    return null;
                                let Price = obj.price*obj.discount/100;

                                return <div className="in-cart-object" key={obj.id} data-id={obj.id}>
                                    <div className="object">
                                        <img src={obj.thumbnails[0]} alt="product image" />
                                        <div className="info">
                                            <h1 className="name">{obj.name}</h1>
                                            <h1 className="price">${Price.toFixed(2)} x {element.quantity} <span>${(Price*element.quantity).toFixed(2)}</span></h1>
                                        </div>
                                    </div>
                                    <img src={Trash} alt="delete" onClick={handleDelete} className="delete"/>
                                </div>
                            })}
                            <div className="checkout"><h1>Checkout</h1></div>
                            </>)}
                        </div>
                    </div>
                </div>
                <img src={Avatar} alt="avatar"  className="avatar"/>
            </div>
            {mobileMenu ? 
            <div className="mobile-menu">
                <div className="menu-list">
                    <img src={Cross} alt="cross" onClick={() => setMobileMenu(false)}/>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div> :
            <></>
            }
        </HeaderDiv>
    )
}