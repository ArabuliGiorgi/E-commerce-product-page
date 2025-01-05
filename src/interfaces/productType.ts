interface productType{
    id: number,
    name: string,
    company: string,
    description: string,
    price: number,
    discount: number,
    pictures: Array<string>,
    thumbnails: Array<string>
}
export interface Products{
    products: productType[]
}