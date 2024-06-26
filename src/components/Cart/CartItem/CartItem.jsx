import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/AgriPro.webp";

import "./CartItem.scss";
const CartItem = () => {
    return (
        <div className="cart-products">
                <div className="cart-product">
                    <div className="img-container">
                        <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                        <span className="name">product name</span>
                        <MdClose className="close-btn"/>
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <div className="text">
                            <span>1</span>
                            <span>x</span>
                            <span className="highlight">&#8377;1234</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CartItem;
