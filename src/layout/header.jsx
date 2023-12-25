import couch from '../assets/couch.png';
import dotsGray from '../assets/dots-gray.png'

const Header = () => {
    return (
        <section className="h-full w-[100%] bg-[#3b5d50] md:overflow-x-hidden lg:overflow-hidden lg:h-[95vh]">
            <div className="mr-auto ml-auto w-[85%]">
                <div className="h-[15vh] py-[1rem] flex justify-between items-center">
                    <a href="#" className=" text-[1.5rem] md:text-[2rem] font-semibold text-white">Furni<span
                        className="text-gray-400">.</span></a>
                    <div className="text-[1.2rem] text-white lg:hidden"><i className="fa-solid fa-bars"></i></div>
                    <div className="hidden gap-[5rem] lg:flex">
                        <ul className="flex gap-[3rem] items-center text-[.9rem] text-gray-400 font-semibold">
                            <li><a href="#" className="group transition duration-300">Home<span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#f9bf29]"></span>
                            </a></li>
                            <li><a href="#" className="group transition duration-300">Shop<span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#f9bf29]"></span></a>
                            </li>
                            <li><a href="#" className="group transition duration-300">About us<span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#f9bf29]"></span></a>
                            </li>
                            <li><a href="#" className="group transition duration-300">Services<span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#f9bf29]"></span></a>
                            </li>
                            <li><a href="#" className="group transition duration-300">Blog<span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#f9bf29]"></span></a>
                            </li>
                            <li><a href="#" className="group transition duration-300">Contact us<span
                                className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-[#f9bf29]"></span></a>
                            </li>
                        </ul>
                        <div className="flex items-center text-[1.1rem] text-white gap-[3rem]">
                            <i className="fas fa-user cursor-pointer"></i>
                            <i className="fa-solid fa-cart-shopping cursor-pointer"></i>
                        </div>
                    </div>
                </div>
                <div className="w-full py-20 flex flex-col lg:flex-row">
                    <div className="lg:w-[42%] text-center lg:text-start">
                        <h2
                            className="text-[2rem] md:text-[2.5rem] lg:text-[2rem]  font-extrabold w-full lg:w-[70%] text-white leading-[1.2] mb-8">
                            Modern Interior
                            Design Studio</h2>
                        <p className="text-[.9rem] text-gray-400 leading-[1.8] mb-8">Donec vitae odio quis nisl dapibus
                            malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <button
                                className="bg-[#f9bf29] text-[.8rem] lg:text-[1rem] px-[1.5rem] py-[.6rem] md:px-[2rem] md:py-[.8rem] rounded-full font-bold text-[#2f2f2f]">Shop
                                Now</button>
                            <button
                                className="bg-transparent text-[.8rem] lg:text-[1rem] px-[1.5rem] py-[.6rem] md:px-[2rem] md:py-[.8rem] rounded-full font-bold text-white border border-[rgba(255, 255, 255, 0.3)]">Explore</button>
                        </div>
                    </div>
                    <div className="hidden lg:w-[58.33333333%] relative lg:block w-full">
                        <img src={couch}
                            className="absolute md:top-[1rem] lg:top-[-6rem] xl:max-w-[48.75rem]  lg:right-[-8.5rem]  m-4 z-10  2lg:max-w-[40rem]" />
                        <img src={dotsGray}
                            className="absolute md:top-[2rem] lg:top-[-3rem] max-w-[48.75rem] right-[-6.5rem] overflow-hidden m-4" />
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Header;