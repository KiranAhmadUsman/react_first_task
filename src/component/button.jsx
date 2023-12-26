const Button = ({ bg, borderColor, borderWidth, color, text }) => {
    return (
        <button
            className={ `bg-${bg}  text-[.8rem] lg:text-[1rem] px-[1.5rem] py-[.6rem] md:px-[2rem] md:py-[.8rem] ${borderWidth} border-${borderColor} rounded-full font-bold text-${color}` }>{ text }</button >
    )
}
export default Button;