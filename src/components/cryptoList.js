import React from "react";
import { connect } from "react-redux";
import { fetchCryptos } from "../actions/cryptoActions";
import './cryptoList.css';

class CryptoList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCryptos());
  }

  render() {
    const { error, loading, cryptos } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul id="cryptoList">
        {cryptos.map(crypto =>
          <li key={crypto.id}>{crypto.name} {crypto.price_usd}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cryptos: state.crypto.items,
  loading: state.crypto.loading,
  error: state.crypto.error
});

export default connect(mapStateToProps)(CryptoList);