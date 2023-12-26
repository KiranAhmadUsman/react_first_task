const Paragraph = ({ textWeight, text }) => {
    return (
        <p className={ `text-[1rem] text-gray-${textWeight} leading-[1.8] mb-8` }>{ text }
        </p>
    )
}
export default Paragraph;