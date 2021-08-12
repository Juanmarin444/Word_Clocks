import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import AddClock from './components/AddClock';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="container">
        <Header />
        <AddClock />
      </div>
    )
  }
}
// style={{textAlign: 'center'}}
ReactDOM.render(<App />, document.getElementById('root'));
