import React from 'react';
import Calculator from './Calculator';
import './App.scss';

function App() {
  return (
    <>
      <div className="main">
        <header>
          <h1>Amortisation Calculator</h1>
          <p>Find how much of your home you will own and when.</p>
        </header>
        <Calculator/>
        <div className="assumptions">
          <p>This site is for illustration purposes only and should not be relied on as a source of truth. The calculator makes several assumptions:</p>
          <ul>
            <li>The mortgage is a repayment mortgage.</li>
            <li>No overpayments are made.</li>
            <li>The property does not get revalued during the mortgage period.</li>
            <li>No payments have been missed.</li>
            <li>The interest rate is constant for the duration of the mortgage.</li>
          </ul>
        </div>
      </div>
      <footer>
        <p>Created by <a href="https://votemike.co.uk">Michael Gwynne</a></p>
        <p>You may like <a href="https://votemike.github.io/stress-test/">property stress test</a></p>
      </footer>
    </>
  );
}

export default App;
