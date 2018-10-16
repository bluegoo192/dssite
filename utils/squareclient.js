const axios = require('axios');
const SQUARE_LOCATION_ID = 'NCQKPHA45A7Q8';
const token = process.env.DSSITE_SQUARE_ACCESS_TOKEN;
const uuid = require('uuid/v4');
const MEMBERSHIP_FEE_IN_CENTS = 1500;

const locationBaseURL = `https://connect.squareup.com/v2/locations/${SQUARE_LOCATION_ID}/`;

const chargeMembership = async (nonce) => {
  const paymentRequest = {
    url: 'transactions',
    method: 'post',
    baseURL: locationBaseURL,
    headers: {
      'Authorization': token,
    },
    data: {
      idempotency_key: 'payment:'+uuid(),
      amount_money: {
        amount: MEMBERSHIP_FEE_IN_CENTS,
        currency: 'USD',
      },
      card_nonce: nonce,
      note: 'Membership payment',
    }
  };
  // try {
    const payment = await axios(paymentRequest);
    return payment;
  // } catch (error) {
  //   console.log(error);
  //   return error;
  // }
}

module.exports = {chargeMembership, MEMBERSHIP_FEE_IN_CENTS};
