import { useContext } from 'react';
import dropdown_icon from '../../assets/dropdown.png';
import ProductsContext from '../../contexts/ProductsContext';
import Item from '../item/Item';
import './ProductCategory.css';

function ProductCategory(props) {
    const { products } = useContext(ProductsContext);

    return (
        <div className="shop-category">
            <h1>Shop the newest {props.category}s!</h1>
            <div className="shopcategory-products">
                {products.map((item) => {
                    if (props.category === item.category) {
                        return <Item key={item._id} props={item} />
                    }
                })}
            </div>
        </div>
    )
}

export default ProductCategory;