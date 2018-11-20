import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Transfer from './Transfer';

class Transfers extends Component {
  constructor(props) {
    super(props);
    this.renderTransfers = this.renderTransfers.bind(this);
  }

  renderTransfers() {
    const { transfers, sendTransfer } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>To</th>
            <th>Approvals</th>
            <th>Sent</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {transfers.map((transfer, i) => 
          <tr key={i}>
            <Transfer 
              transfer={transfer}
              sendTransfer={sendTransfer}
            />
          </tr>
        )}
        </tbody>
      </table>
    );
  }

  render() {
    const { transfers } = this.props;

    return (
      <div id="transfers" className="card">
        <h2 className="card-title">Transfers</h2>
        {transfers.length > 0 ? this.renderTransfers() : 'No transfer'}
      </div>
    );
  }
}

Transfers.propTypes = {
  transfers: PropTypes.array,
  sendTransfer: PropTypes.func.isRequired
};

export default Transfers;
