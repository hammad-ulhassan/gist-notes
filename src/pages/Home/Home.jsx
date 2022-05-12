import React from "react";
import BtnGrp from "../../components/BtnGrp/BtnGrp";
import DataTable from "../../components/DataTable/DataTable";
import "./Home.css";
import data from "../../stubData/MOCK_DATA.json";
import columns from "../../stubData/columns.json";
import UserCard from "../../components/UserCard/UserCard";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import CodeView from "../../components/CodeView/CodeView";
import {stubCode} from '../../stubData/stubCode';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      data,
      columns,
      loading: false,
      view: 'table'
    };
    this.handleOnSelectChange = this.handleOnSelectChange.bind(this);
    this.onViewChange = this.onViewChange.bind(this)
  }

  handleOnSelectChange({selectedRowKeys}) {
    this.setState({ selectedRowKeys: [selectedRowKeys] });
  }

  onViewChange(selectedView){
    this.setState({view: selectedView})
  }

  render() {
    return (
      <div className="container">
        <section>
          <div className="row">
            <BtnGrp onViewChange={this.onViewChange} view={this.state.view}/>
          </div>
        </section>
        <section>
          {/* <DataTable
            handleOnSelectChange={this.handleOnSelectChange}
            dataSource={this.state.data.map(person=>({...person, name: person.first_name+' '+person.last_name}))}
            columns={this.state.columns}
            loading={this.state.loading}
            selectedRowKeys={this.state.selectedRowKeys}
          /> */}
          <CardsWrapper>
            <UserCard>
              <CodeView rows={14} code={stubCode}></CodeView>
            </UserCard>
          </CardsWrapper>
        </section>
      </div>
    );
  }
}
