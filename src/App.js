import React, { Component } from 'react';
import Accordion from './components/Accordion';
import accordionData from './accordionData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion items={accordionData.accordionList} />
      </div>
    );
  }
}

export default App;
