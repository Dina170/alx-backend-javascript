function getPaymentTokenFromAPI(success) {
  if (success)
    return Promise.resolve({data: 'Successful response from the API'});
}

//console.log(getPaymentTokenFromAPI(true));
module.exports = getPaymentTokenFromAPI;
