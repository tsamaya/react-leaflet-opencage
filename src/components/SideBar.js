import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputAPIKey from './InputAPIKey';
import InputAddresses from './InputAddresses';
import AddressesTable from './AddressesTable';
// import api from '../services/api';

class SideBar extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   apiKey: props.apiLey,
    //   addresses: props.addresses,
    //   addressesDisbaled: props.addressesDisbaled,
    //   submitDisbaled: props.submitDisbaled,
    //   results: props.results,
    // };
    // this.handleAPIKeyChange = props.onAPIKeyChange;
    // this.handleAddressesChange = props.onAddressesChange;
    // this.handleSubmit = props.onSubmit;
    // this.handleRestAddresses = props.onRestAddresses;
  // }
  // handleAPIKeyChange(event) {
  //   const { value } = event.target;
  //   let disabled = true;
  //   if (value.length >= 30) {
  //     disabled = false;
  //   }
  //   this.setState({ apiKey: value, addressesDisbaled: disabled });
  // }

  // handleAddressesChange(event) {
  //   const { value } = event.target;
  //   let disabled = true;
  //   if (value.length >= 2) {
  //     disabled = false;
  //   }
  //   this.setState({ addresses: value, submitDisbaled: disabled });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const inarray = this.state.addresses.split('\n');
  //   api.batchGeocode(this.state.apiKey, inarray).then(data => {
  //     // console.log(data);
  //     this.setState({ results: data, submitDisbaled: true, addressesDisbaled: true });
  //   });
  // }

  // handleRestAddresses(event) {
  //   this.setState({ results: [], addresses: '', addressesDisbaled: false });
  // }

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
