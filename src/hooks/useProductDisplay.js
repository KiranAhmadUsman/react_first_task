import { useEffect, useState } from "react";
function useProductDisplay(category) {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products`)
            .then((res) => res.json())
            .then((res) => res.filter((item) => item.category.name === category)).then((res) => setProduct(res));
    }, [category])
    return product
}
export default useProductDisplay;