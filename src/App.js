import React, {Component} from 'react';
import PetTable from './components/PetTable';
import './App.css';
import { render } from '@testing-library/react';


class App extends Component {

  render() {
    return (
      <div>
        <PetTable />
      </div>
    );
  }
}

export default App;
