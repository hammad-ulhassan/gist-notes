import React from "react";
import "./main.css";
import DataTable from "./table/DataTable";
import BtnGrp from "./view-btn-grp/BtnGrp";

export default class Main extends React.Component {
  render() {
    return (
      <main className="offset">
        <div className="container">
          <section>
            <div className="row">
              <BtnGrp/>
            </div>
          </section>
          <section>
            <DataTable/>

          </section>
        </div>
      </main>
    );
  }
}