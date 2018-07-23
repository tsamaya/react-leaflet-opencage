import React, { Component, Fragment } from 'react';
import Header from './components/Hearder';
import Map from './components/Map';
import SideBar from './components/SideBar';
import api from './services/api';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
      addresses: '',
      addressesDisbaled: true,
      submitDisbaled: true,
      results: [
        {
          input: 'W10 5JJ',
          formatted: '"Kensington and Chelsea W10 5XL, United Kingdom"',
          geometry: {
            lat: 51.518171,
            lng: -0.208935,
          },
        },
      ],
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
      console.log(data);
      this.setState({
        results: data,
        submitDisbaled: true,
        addressesDisbaled: true,
      });
    });
  }

  handleRestAddresses(event) {
    this.setState({ results: [], addresses: '', addressesDisbaled: false });
  }

  render() {
    const {
      apiKey,
      addresses,
      addressesDisbaled,
      submitDisbaled,
      results,
    } = this.state;

    return (
      <Fragment>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 col-md-4">
              <SideBar
                apiKey={apiKey}
                value={addresses}
                addressesDisbaled={addressesDisbaled}
                submitDisbaled={submitDisbaled}
                addresses={addresses}
                results={results}
                onSubmit={this.handleSubmit}
                onAPIKeyChange={this.handleAPIKeyChange}
                onAddressesChange={this.handleAddressesChange}
                onRestAddresses={this.handleRestAddresses}
              />
            </div>
            <div className="col-12 col-md-8">
              <Map data={results} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default App;
