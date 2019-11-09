import React from 'react';
import mortgageJs from 'mortgage-js';

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
    const payment = mortgageJs.calculatePayment(this.state.value, this.state.value-this.state.mortgage, this.state.rate/100, this.state.term);
    const rows = [];
    for (let i = 11; i < payment.paymentSchedule.length; i=i+12) {
      rows.push(payment.paymentSchedule[i]);
    }

    return rows;
  }

  renderRows() {
   const rows = this.getPaymentRows();
   const newRows = [];
   for (const [index, value] of rows.entries()) {
     newRows.push(
        <tr key={index}>
          <td>{index+1}</td>
          <td className="numeric">{value.balance.toFixed(2)}</td>
          <td className="numeric">{(this.state.value-value.balance).toFixed(2)}</td>
          <td className="numeric">{value.totalInterest.toFixed(2)}</td>
          <td className="numeric">{value.totalPayments.toFixed(2)}</td>
          <td className="numeric">{(100*(this.state.value-value.balance)/this.state.value).toFixed(2)}</td>
        </tr>
      );
    }

    return newRows;
  }

  renderTableBody() {
    if (this.state.value && this.state.rate && this.state.mortgage && this.state.term) {
      return (
        <tbody>
        {this.renderRows()}
        </tbody>
      );
    }
  }

  render() {
    return (
      <>
        <div className="calculator">
          <div className="one">
            <table>
              <thead>
              <tr>
                <th>Year</th>
                <th>Mortgage remaining</th>
                <th>Value Owned</th>
                <th>Interest Paid To Date</th>
                <th>Total Paid</th>
                <th>% Owned</th>
              </tr>
              </thead>
              {this.renderTableBody()}
            </table>
          </div>
          <div className="two">
            <h2>Your Details</h2>
            <div>
              <label htmlFor="value">Home Value</label>
              <input name="value" type="number" onChange={this.handleInputChange}/>
            </div>
            <div>
              <label htmlFor="rate">Interest Rate</label>
              <input name="rate" type="number" onChange={this.handleInputChange}/>
            </div>
            <div>
              <label htmlFor="mortgage">Mortgage Amount</label>
              <input name="mortgage" type="number" step="12" onChange={this.handleInputChange}/>
            </div>
            <div>
              <label htmlFor="term">Mortgage Term</label>
              <input name="term" type="number" onChange={this.handleInputChange}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
