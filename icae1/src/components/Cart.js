import React from 'react';

export default function Cart({ cartItems }) {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>QTY</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.qty}</td>
                            <td>{item.price * item.qty}</td>
                        </tr>
                    ))}
                    <tr>
                        <td>Grand Total:</td>
                        <td colSpan={2}>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
