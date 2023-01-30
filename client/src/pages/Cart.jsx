import { Fragment, useState } from "react";
import '../styles/Cart.css';
// https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react

// import Footer from "../components/Footer";

function Cart() {
    const [cart, setCart] = useState([]);

    function addItemToCart(e) {
        const item = e.target.value;
        // console.log(item);
        setCart([...cart, item]);
    }

    // Clear cart
    const resetCart = () => {
        setCart([]);
    };

    return (
        <Fragment>
            <h1 className="text-center">Cart</h1>
            <div className="row text-center mt-3">
                <div className="col">
                    <div className="bg-dark pt-2 pb-2" style={{ width: "10rem" }}>
                        <h3 className="mt-2 mb-3">Add items</h3>
                        <button className="btn btn-outline-warning mb-2" value="MacBook Pro" onClick={addItemToCart}>MacBook Pro</button><br />
                        <button className="btn btn-outline-warning mb-2" value="iPhone XS" onClick={addItemToCart}>iPhone XS</button><br />
                        <button className="btn btn-outline-warning mb-2" value="Gem" onClick={addItemToCart}>Gem</button><br />
                        <button className="btn btn-outline-warning mb-2" value="Teddy Bear" onClick={addItemToCart}>Teddy Bear</button><br />
                        <hr />
                        <button className="btn btn-warning dropdown-toggle mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">Clear cart</button>
                        <ul className="dropdown-menu">
                            <li className="dropdown-item">
                                <span>Are you sure?</span><br />
                                <button className="mt-2 btn btn-danger" onClick={resetCart}>Ok</button>
                                <span className='m-1'></span>
                                <button className="mt-2 btn btn-secondary">Cancel</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="card bg-dark" style={{ width: "10rem" }}>
                        <h3 className="mt-2">Cart</h3>
                        <ol className="list-group list-group-flush list-group-numbered">
                            {cart.map(item =>
                                <li className="list-group-item d-flex justify-content-between align-items-start bg-success text-light" key={item}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{item}</div>
                                    </div>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Cart;