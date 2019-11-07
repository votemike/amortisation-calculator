import React from 'react';

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
    console.log(this.state);
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
              <tbody>
              <tr>
                <td>0</td>
                <td>£238800</td>
                <td>£31700</td>
                <td>£4700</td>
                <td>£9600</td>
                <td>11.7%</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="two">
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
              <input name="mortgage" type="number" onChange={this.handleInputChange}/>
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

// {/*<form>*/}
// {/*    <label>*/}
// {/*        Is going:*/}
// {/*        <input*/}
// {/*            name="isGoing"*/}
// {/*            type="checkbox"*/}
// {/*            checked={this.state.isGoing}*/}
// {/*            onChange={this.handleInputChange} />*/}
// {/*    </label>*/}
// {/*    <br />*/}
// {/*    <label>*/}
// {/*        Number of guests:*/}
// {/*        <input*/}
// {/*            name="numberOfGuests"*/}
// {/*            type="number"*/}
// {/*            value={this.state.numberOfGuests}*/}
// {/*            onChange={this.handleInputChange} />*/}
// {/*    </label>*/}
// {/*</form>*/}

export default Calculator;
