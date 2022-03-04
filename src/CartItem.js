import React from 'react';
class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} /></div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>Phone</div>
                    <div style={{ color: "red" }}>Rs 999</div>
                    <div style={{ color: "blue" }}>QTY : 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img className="action-icons" alt="increase"
                            action-icons src="https://cdn-icons-png.flaticon.com/512/992/992651.png" />
                        <img className="action-icons" alt="decrease"
                            action-icons src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img className="action-icons" alt="delete"
                            action-icons src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1646401450~hmac=497ca88647bb78aeb7b1227c0935ea58" />
                    </div>
                </div>
            </div>
        );
    }
}

//we can style our elements using the objects
const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;