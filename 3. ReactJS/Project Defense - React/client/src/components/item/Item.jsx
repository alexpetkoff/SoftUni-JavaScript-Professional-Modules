import './Item.css';

function Item({props}) {

    console.log(props)
    return (
        <div className="item">
            <img src={props.imageUrl} alt=""/>
            <p>{props.title}</p>
            <div className='item-prices'>
                <div className="item-price">
                    $1200
                </div>
            </div>
            <button className="detail-btn">DETAILS</button>
        </div>
    );
}

export default Item;