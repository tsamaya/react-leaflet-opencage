import React, { Component } from 'react';
import InputAPIKey from './InputAPIKey';
import InputAddresses from './InputAddresses';
import AddressesTable from './AddressesTable';
import api from '../services/api';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      addresses: '',
      addressesDisbaled: true,
      submitDisbaled: true,
      results: [],
    };
    this.handleAPIKeyChange = this.handleAPIKeyChange.bind(this);
    this.handleAddressesChange = this.handleAddressesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestAddresses = this.handleRestAddresses.bind(this);
  }
  handleAPIKeyChange(event) {
    const { value } = event.target;
    let disabled = true;
    if (value.length >= 30) {
      disabled = false;
    }
    this.setState({ apiKey: value, addressesDisbaled: disabled });
  }

  handleAddressesChange(event) {
    const { value } = event.target;
    let disabled = true;
    if (value.length >= 2) {
      disabled = false;
    }
    this.setState({ addresses: value, submitDisbaled: disabled });
  }

  handleSubmit(event) {
    event.preventDefault();
    const inarray = this.state.addresses.split('\n');
    api.batchGeocode(this.state.apiKey, inarray).then(data => {
      // console.log(data);
      this.setState({ results: data, submitDisbaled: true, addressesDisbaled: true });
    });
  }

  handleRestAddresses(event) {
    this.setState({ results: [], addresses: '', addressesDisbaled: false });
  }

  render() {
    const {
      addresses,
      addressesDisbaled,
      submitDisbaled,
      results,
    } = this.state;
    if (results.length === 0) {
      return (
        <div className="sidebar">
          <form onSubmit={this.handleSubmit}>
            <InputAPIKey onChange={this.handleAPIKeyChange} />
            <InputAddresses
              value={addresses}
              disable={addressesDisbaled}
              onChange={this.handleAddressesChange}
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
            <InputAPIKey onChange={this.handleAPIKeyChange} />
            <InputAddresses
              value={addresses}
              disable={addressesDisbaled}
              onChange={this.handleAddressesChange}
            />
            <AddressesTable addresses={results} />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleRestAddresses}
            >
              Reset
            </button>
          </form>
        </div>
      );
    }
  }
}
export default SideBar;
