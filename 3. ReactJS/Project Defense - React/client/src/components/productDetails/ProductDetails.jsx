import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { ProductsContext } from '../../contexts/ProductsContext';
import AuthContext from '../../contexts/AuthContext';
import Reviews from '../reviews/reviews';

function ProductDetails(props) {

    const { id } = useParams();
    const { addToCart, products } = useContext(ProductsContext);
    const { auth } = useContext(AuthContext);

    const product = products.find((e) => e._id === id);

    return (
        <div className="productdisplaybody">
            <div className="productdisplay">
                <div className="productdisplay-left">
                    <div className="productdisplay-img">
                        <img className="productdisplay-main-img" src={product.imageUrl} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{product.title}</h1>
                    <div className="productdisplay-right-price">
                        Price: ${1200}
                    </div>
                    <div className="productdisplay-right-desc">
                        <p>Description:</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt labore aperiam maxime repudiandae corporis autem magnam sint error, at eos ipsam quis commodi cum quae natus, possimus saepe magni nihil voluptatem tenetur! Ipsa accusantium omnis, voluptates quos ab similique ut facilis maiores harum nemo debitis soluta doloribus error consequuntur. Minus.</p>
                    </div>
                    {
                        auth && auth.accessToken && <button onClick={() => addToCart(id)}>ADD TO CART</button>
                    }
                </div>
            </div>
            <Reviews />
        </div>
    );
}

export default ProductDetails;