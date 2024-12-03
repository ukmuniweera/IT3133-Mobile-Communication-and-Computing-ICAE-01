import '../assets/CSS/layout.css';
import React, { useState } from 'react';

export default function Product({ flower, addToCart }) {
    const [quantity, setQuantity] = useState("0");

    const handleAddToCart = () => {
        if (quantity >= 0) {
            addToCart();
        }
    };

    return (
        <div className="grid-item">
            <div className="card">
                <img
                    src={`../assets/image/${flower.img}`}
                    alt={flower.name}
                />
                <div className="card-body">
                    <h5 className="card-title">
                        {flower.name} Price: {flower.price}
                    </h5>
                    <div className="quantity-container">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </div>
                    <button className="card-button" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
