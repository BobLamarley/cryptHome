import React from "react";
import { connect } from "react-redux";
import { fetchCryptos } from "../actions/cryptoActions";

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
      <ul>
        {cryptos.map(crypto =>
          <li key={crypto.id}>{crypto.name}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cryptos: state.cryptos.items,
  loading: state.cryptos.loading,
  error: state.cryptos.error
});

export default connect(mapStateToProps)(CryptoList);