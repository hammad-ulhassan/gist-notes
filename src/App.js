import './App.css';
import React from 'react';
import MainLayout from './pages/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Empty from './pages/Empty/Empty';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="*" element={<Empty />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
