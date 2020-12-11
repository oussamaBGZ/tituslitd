import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideMenu from './components/SideMenu';
import Home from './pages/Home';
import AddExpense from './pages/AddExpense';
import Expense from './pages/Expense';
import Chart from './pages/Chart';


function App() {
  return (
    <Router>
      <div>
        <main className="flex w-full h-screen">
          <SideMenu />
          <section className="w-full p-4">
            <div className="w-full h-64 p-4 text-md">
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/add_expense" component={AddExpense} exact />
                <Route path="/expense/:id" component={Expense} exact />
                <Route path="/chart" component={Chart} exact />
              </Switch>
            </div>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
