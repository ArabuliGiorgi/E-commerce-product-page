import { ReactNode, useEffect } from "react";
import { useProductContext } from "../contexts/productContext";
import { PicViewer } from "../styled-components/PictureViewer";

function PictureViewer({ind, children, popup, setPicViewer, picNumber, setPicNumber}: 
    {
        ind: number,
        children: ReactNode,
        popup: boolean, 
        setPicViewer: React.Dispatch<React.SetStateAction<boolean>>,
        picNumber: number,
        setPicNumber: React.Dispatch<React.SetStateAction<number>>
    }) {
    const {data} = useProductContext();
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setPicViewer(false);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    return (
        <PicViewer popup={popup.toString()}>
            <div className="main">
                {children}
                <div className={`product-img ${popup ? 'mb-[40px]' : 'mb-[32px]'}`}>
                    <img src={data.products[ind].pictures[picNumber]} alt="product image" className={`${popup ? '' : 'cursor-pointer'}`} onClick={() => {popup ? '' : setPicViewer(true)}}/>
                    <div className={`previous flex ${popup ? "" : "desktop:hidden"}`} onClick={() => handlePicChange("previous")}>
                        <svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1 3 9l8 8" className="svg-stroke" strokeWidth="3" fill="none" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <div className={`next flex ${popup ? "" : "desktop:hidden"}`} onClick={() => handlePicChange("next")}>
                        <svg viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="m2 1 8 8-8 8" className="svg-stroke" strokeWidth="3" fill="none" fillRule="evenodd"/>
                        </svg>
                    </div>
                </div>
                <div className="thumbnails">
                    {data.products[ind].thumbnails.map((thumbnail) => {
                        const index = data.products[ind].thumbnails.indexOf(thumbnail);

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
    );
}

export default PictureViewer;