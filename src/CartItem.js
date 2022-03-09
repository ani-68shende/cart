import React from 'react';

const CartItem = (props) => {
    const { price, title, qty } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: 'purple' }}>Rs {price} </div>
                <div style={{ color: 'blue' }}>Qty: {qty} </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1646401450~hmac=497ca88647bb78aeb7b1227c0935ea58"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;