import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_glas7vcqLDXCeTChG5sS9oSy00XkBIYtIH';

  const onToken = token => {
    console.log(token);
    alert('Payment successful!');
  }

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      description={`Your total is $${price}`}
      image='https://svgshare.com/i/CUz.svg'
      label='Pay Now'
      name='Crown Clothing Pty Ltd'
      panelLabel='Pay Now'
      shippingAddress
      stripeKey={publishableKey}
      token={onToken}
    />
  )
}

export default StripeCheckoutButton;
