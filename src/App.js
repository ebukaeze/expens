import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Expense from './components/Expense';
import Income from './components/Income';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>HELLO TRACKER</h1>
      
      <Router>
        <Sidebar />
        <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path="/expense" component={Expense} />
        <Route path="/income"  component={Income} />
        

        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
