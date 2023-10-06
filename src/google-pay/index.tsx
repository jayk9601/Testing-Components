import React from 'react';
import {
  GooglePayButton,
  onGooglePayment,
  onApplePay,
} from 'react-apple-google-pay';

const GooglePay = () => {
  return (
    <GooglePayButton
      title="on Payment"
      onPress={() => {
        onApplePay({
          amount: '0.01',
          merchantId: 'acct_1MKaf5SJHee3mOwM',
          paymentLabel: 'Test',
        })
          .then(res => {
            console.log('res : ', res);
          })
          .catch(err => {
            console.log('err : ', err);
          });
      }}
    />
  );
};

export default GooglePay;
