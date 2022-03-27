import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(){
    const params = useParams();
    const { id: productId } = params;
    const {search} = useLocation();
    const qtyInUrl = new URLSearchParams(search).get("qty");
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;

    const dispatch = useDispatch();
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>Add to cart: ProductId: {productId} Qty: {qty}</p>
        </div>
    )
}