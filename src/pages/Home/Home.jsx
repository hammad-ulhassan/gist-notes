import React from "react";
import BtnGrp from "../../components/BtnGrp/BtnGrp";
import DataTable from "../../components/DataTable/DataTable";
import "./Home.css";
import data from "../../stubData/MOCK_DATA.json";
import columns from "../../stubData/columns.json";
import UserCard from "../../components/UserCard/UserCard";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import CodeView from "../../components/CodeView/CodeView";
import { stubCode } from "../../stubData/stubCode";
import { Pagination } from "antd";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      data,
      columns,
      loading: false,
      view: "table",
    };
    this.handleOnSelectChange = this.handleOnSelectChange.bind(this);
    this.onViewChange = this.onViewChange.bind(this);
  }

  handleOnSelectChange({ selectedRowKeys }) {
    this.setState({ selectedRowKeys: [selectedRowKeys] });
  }

  onViewChange(selectedView) {
    this.setState({ view: selectedView });
  }

  render() {
    return (
      <div className="container">
        <section>
          <div className="row">
            <BtnGrp onViewChange={this.onViewChange} view={this.state.view} />
          </div>
        </section>
        <section>
          {this.state.view}
          {/* <DataTable
            handleOnSelectChange={this.handleOnSelectChange}
            dataSource={this.state.data.map(person=>({...person, name: person.first_name+' '+person.last_name}))}
            columns={this.state.columns}
            loading={this.state.loading}
            selectedRowKeys={this.state.selectedRowKeys}
          /> */}
          <CardsWrapper>
            {Array(10)
              .fill()
              .map((_, i) => (
                <UserCard size="small" key={i}>
                  <CodeView code={stubCode} />
                  <hr />
                </UserCard>
              ))}
          </CardsWrapper>
        </section>
        <section>
          <Pagination simple defaultCurrent={2} total={50} />
        </section>
      </div>
    );
  }
}
