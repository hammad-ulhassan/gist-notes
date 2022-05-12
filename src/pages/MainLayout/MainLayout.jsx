import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import './MainLayout.css';
import React from "react";


export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <main className="offset">
          <Outlet />
        </main>
      </>
    );
  }
}
