import React from 'react';
import mortgageJs from 'mortgage-js';

import './Calculator.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', rate: '', mortgage: '', term: ''};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  getPaymentRows() {
    const payment = mortgageJs.calculatePayment(this.state.value, this.state.value - this.state.mortgage, this.state.rate / 100, this.state.term * 12);
    const rows = [];
    for (let i = 11; i < payment.paymentSchedule.length; i = i + 12) {
      rows.push(payment.paymentSchedule[i]);
    }

    return rows;
  }

  renderRows() {
    const paymentRows = this.getPaymentRows();
    const rows = [];
    for (const [index, value] of paymentRows.entries()) {
      rows.push(
        <tr key={index}>
          <td>{index + 1}</td>
          <td className="numeric">{value.balance.toFixed(2)}</td>
          <td className="numeric">{(this.state.value - value.balance).toFixed(2)}</td>
          <td className="numeric">{value.totalInterest.toFixed(2)}</td>
          <td className="numeric">{value.totalPayments.toFixed(2)}</td>
          <td className="numeric">{(100 * (this.state.value - value.balance) / this.state.value).toFixed(0)}</td>
        </tr>
      );
    }

    return rows;
  }

  renderResults() {
    if (!this.state.value || !this.state.rate || !this.state.mortgage || !this.state.term) {
      return <p>Fill in all the fields in "Your Details" to see your results.</p>
    }

    return (
      <table>
        <thead>
        <tr>
          <th>Year</th>
          <th>Mortgage remaining</th>
          <th>Value Owned</th>
          <th>Interest Paid To Date</th>
          <th>Payments Total</th>
          <th>% Owned</th>
        </tr>
        </thead>
        <tbody>
        {this.renderRows()}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className="calculator">
        <div className="results">
          {this.renderResults()}
        </div>
        <div className="details">
          <h2>Your Details</h2>
          <div>
            <label htmlFor="value">Home Value</label>
            <input required type="number" min="0" onChange={this.handleInputChange} name="value" placeholder="234853" />
          </div>
          <div>
            <label htmlFor="rate">Interest Rate</label>
            <input required type="number" min="0" onChange={this.handleInputChange} name="rate" placeholder="4.19" step="any"/>
          </div>
          <div>
            <label htmlFor="mortgage">Mortgage Amount</label>
            <input required type="number" min="0" onChange={this.handleInputChange} name="mortgage" placeholder="176139"/>
          </div>
          <div>
            <label htmlFor="term">Mortgage Term</label>
            <input required type="number" min="0" onChange={this.handleInputChange} name="term" placeholder="25"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
