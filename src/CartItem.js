import React from 'react';
class CartItem extends React.Component {
    constructor() {
        // we need to use super so as to inherit the constructor of the parent class
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = () => {
        this.setState({
            qty: this.state.qty + 1
        })
        //if we have repeative setState queries, we just execute the last one
    }
    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty === 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        }, () => {
            console.log(this.state.qty);
        });
    }
    render() {
        //object destructuring to get the values from the state object
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} /></div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "red" }}>Rs {price}</div>
                    <div style={{ color: "blue" }}>QTY : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <img className="action-icons" alt="increase"
                            action-icons src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQuantity} />
                        <img className="action-icons" alt="decrease"
                            action-icons src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={this.decreaseQuantity} />
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
