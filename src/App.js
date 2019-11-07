import React from 'react';
import Calculator from './Calculator';
import './App.scss';

function App() {
  return (
    <div className="main">
      <header>
        <h1>Amortisation Calculator</h1>
        <p>Find how much of your home you will own and when.</p>
      </header>
      <Calculator/>
      <div className="assumptions">
        Assumptions: Not over paying at all. Property has not been re-valued. No missed payments. As a guide only. Interest rate remains the same. Interest calculated daily.
      </div>
      <footer>
        <p>Created by <a href="https://www.votemike.co.uk">Michael Gwynne</a></p>
        <p>You may like <a href="https://votemike.github.io/stress-test/">property stress test</a></p>
      </footer>
    </div>
  );
}

export default App;
