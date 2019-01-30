export function fetchCryptos() {
    return dispatch => {
      dispatch(fetchCryptosBegin());
      return fetch(" https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10",
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
                headers: {
                'X-CMC_PRO_API_KEY': '049786a1-4559-470e-821e-9bed74ae3bb0',
                'Accept': 'application/json'
            }
        })
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchCryptosSuccess(json.data));
          return json.data;
        })
        .catch(error => dispatch(fetchCryptosFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export const FETCH_CRYPTOS_BEGIN   = 'FETCH_CRYPTOS_BEGIN';
export const FETCH_CRYPTOS_SUCCESS = 'FETCH_CRYPTOS_SUCCESS';
export const FETCH_CRYPTOS_FAILURE = 'FETCH_CRYPTOS_FAILURE';

export const fetchCryptosBegin = () => ({
  type: FETCH_CRYPTOS_BEGIN
});

export const fetchCryptosSuccess = cryptos => ({
  type: FETCH_CRYPTOS_SUCCESS,
  payload: { cryptos }
});

export const fetchCryptosFailure = error => ({
  type: FETCH_CRYPTOS_FAILURE,
  payload: { error }
});