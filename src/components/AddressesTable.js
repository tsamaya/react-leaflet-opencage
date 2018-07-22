import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddressesTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: props.addresses,
    };
  }
  render() {
      const {addresses} = this.state;
    return (
      <div className="form-group">
        <label htmlFor="results">Results</label>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Input</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map(address => (
              <tr key={address.input}>
                <td>{address.input}</td>
                <td>{address.formatted}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

AddressesTable.propTypes = {
  addresses: PropTypes.array.isRequired,
};

export default AddressesTable;
