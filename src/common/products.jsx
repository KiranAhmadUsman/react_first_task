import product1 from '../assets/product-1.png'
import product2 from '../assets/product-2.png'
import product3 from '../assets/product-3.png'
import Button from '../component/button'
import Paragraph from '../component/paragraph'
import Product from '../component/product'
const productData = [{
    Img: product1,
    name: "Nordic Chair",
    price: 50
},
{
    Img: product2,
    name: "Wood Chair",
    price: 80
}, {
    Img: product3,
    name: "Steel Chair",
    price: 90
},
]
const Products = () => {
    return (
        <section className=" h-max lg:h-screen bg-[#eff2f1] pt-[6rem]">
            <div className="mr-auto ml-auto w-[85%]">
                <div className="grid gap-16 lg:grid-cols-4 lg:grid-rows-1 lg:gap-1 h-full lg:h-[24rem]">
                    <div>
                        <h1
                            className="text-[1.5rem] md:text-[2rem] w-full md:w-[80%] font-medium leading-[1.2] mb-6 text-[#333]">
                            Crafted with excellent material.</h1>
                        <Paragraph text="Donec vitae odio quis nisl dapibus
                            malesuada. Nullam ac aliquet velit. Aliquam vulputate velit
                            imperdiet dolor tempor tristique." textWeight="600" />
                        <Button color="white" borderColor="transparent" bg="[#353535]" borderWidth="border-0" text="Explore" />
                    </div>
                    {/*-- -----------------Product data------------------------- --> */ }
                    { productData.map((product) => <Product key={ product.name } productImg={ product.Img } productName={ product.name } productPrice={ product.price } />) }
                </div>
            </div>
        </section>
    )
}
export default Products;