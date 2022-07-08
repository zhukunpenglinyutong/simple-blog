import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import routes from "./router";

import Header from './components/Header'

function App() {
  return <Router>
    <Header />
    <Routes>
      {
        routes.map(route => <Route exact key={route.path} path={route.path} element={<route.component/>} />)
      }
    </Routes>
  </Router>
}

export default App