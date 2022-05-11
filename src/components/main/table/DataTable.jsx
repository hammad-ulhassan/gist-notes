import React from "react";
import { Table, Space } from "antd";
import {
  StarOutlined,
  ForkOutlined
} from '@ant-design/icons';
import stubColumns from "../../../stubData/columns.json";
import stubData from "../../../stubData/MOCK_DATA.json";
import Column from "antd/lib/table/Column";
import './DataTable.css';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.dataSource = stubData.map((person) => ({
      ...person,
      name: person.first_name + " " + person.last_name,
    }));
    this.columns = stubColumns;

    this.state = {
      selectedRowKeys: [],
      loading: false,
    };
  }

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Table rowSelection={rowSelection} dataSource={this.dataSource} scroll={{ y: 550 }}>
        {this.columns.map((col) => (
          <Column title={col.title} dataIndex={col.dataIndex} key={col.key} />
        ))}
        <Column
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>
                <StarOutlined />
              </a>

              <a>
                <ForkOutlined />
              </a>
            </Space>
          )}
        />
      </Table>
    );
  }
}
