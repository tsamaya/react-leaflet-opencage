import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputAPIKey from './InputAPIKey';
import InputAddresses from './InputAddresses';
import AddressesTable from './AddressesTable';

class SideBar extends Component {
  render() {
    const {
      addressesDisbaled,
      submitDisbaled,
      results,
      onAPIKeyChange,
      onAddressesChange,
      onSubmit,
      onRestAddresses,
    } = this.props;
    if (results.length === 0) {
      return (
        <div className="sidebar">
          <form onSubmit={onSubmit}>
            <InputAPIKey onChange={onAPIKeyChange} />
            <InputAddresses
              disable={addressesDisbaled}
              onChange={onAddressesChange}
            />
            <button
              type="submit"
              className="btn btn-success"
              disabled={submitDisbaled}
            >
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="sidebar">
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <InputAPIKey onChange={onAPIKeyChange} />
            <InputAddresses
              disable={addressesDisbaled}
              onChange={onAddressesChange}
            />
            <AddressesTable addresses={results} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={onRestAddresses}
            >
              Reset
            </button>
          </form>
        </div>
      );
    }
  }
}
SideBar.propTypes = {
  onAPIKeyChange: PropTypes.func.isRequired,
  onAddressesChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRestAddresses: PropTypes.func.isRequired,
};

export default SideBar;
