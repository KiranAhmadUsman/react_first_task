import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ productImg, productName, productPrice }) => {
    return (
        <div
            className="flex flex-col justify-center items-center relative group transition h-[22rem] lg:h-full w-full">
            <span
                className="absolute w-full h-[18rem] md:h-0 group-hover:h-[18rem] transition-all duration-500 bg-gray-200 block bottom-0 rounded-[1rem]"></span>
            <div className="absolute top-0 h-full">
                <img src={ productImg }
                    className="w-[12rem] md:w-[16rem] mb-4 group-hover:translate-y-[-2rem] transition-all duration-300" />
                <h2 className="text-center font-semibold text-[#333]">{ productName }</h2>
                <h3 className="text-center font-bold text-[1.2rem] transition-all duration-500 text-[#333]">${ productPrice }.00
                </h3>
            </div>
            <div
                className="flex md:hidden transition-all duration-500 group-hover:flex absolute left-[50%] translate-x-[-50%]  lg:left-[45%] lg:translate-x-[-45%] bottom-[-.8rem] bg-[#272727] rounded-full w-8 h-8  justify-center items-center">
                <FontAwesomeIcon icon={ faPlus } className="font-bold text-[1.2rem] text-white" />
            </div>
        </div>
    )
}
export default Product;