import React from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { CartDropdownContainer, EmptyMessageContainer, CartItemsContainer, CheckoutButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map((item) => <CartItem key={item.id} item={item} />) :
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CheckoutButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
    </CheckoutButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
