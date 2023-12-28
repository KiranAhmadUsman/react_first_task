import { useState } from 'react'
import Product from '../component/product'
import useProductDisplay from '../hooks/useProductDisplay'

const Products = () => {
    const [category, setCategory] = useState('Electronics');
    const data = useProductDisplay(category);
    console.log(data);
    return (
        <section className=" h-max  bg-[#eff2f1] pt-8 lg:p-[6rem]">
            <div className="mr-auto ml-auto w-[85%]">
                <div className="mb-24 flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={ () => setCategory('Electronics') }
                        className={ ` text-[1.2rem] text-gray-400 font-bold py-2 px-4 ${category === 'Electronics' && 'border-[#f9bf29] border-b-2 text-[#f9bf29]'
                            }` }
                    >
                        Electronics
                    </button>
                    <button
                        onClick={ () => setCategory('Shoes') }
                        className={ `text-[1.2rem] text-gray-400 font-bold py-2 px-4 ${category === 'Shoes' && 'border-[#f9bf29] border-b-2 text-[#f9bf29]'
                            }` }
                    >
                        Shoes
                    </button>
                    <button
                        onClick={ () => setCategory('Clothes') }
                        className={ `text-[1.2rem] text-gray-400 font-bold py-2 px-4  ${category === 'Clothes' && 'border-[#f9bf29] border-b-2 text-[#f9bf29]'
                            }` }
                    >
                        Clothes
                    </button>
                </div>
                <div className="grid gap-16 lg:grid-cols-4 lg:grid-rows-5 lg:gap-8 h-full lg:h-[140rem]">
                    {/*-- -----------------Product data------------------------- --> */ }
                    { data.map((product) => <Product key={ product.id } productImg={ product.images[0] } productName={ product.title } productPrice={ product.price } />) }
                </div>
            </div>
        </section>
    )
}
export default Products;