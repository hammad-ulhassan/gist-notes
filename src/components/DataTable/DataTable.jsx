import React from "react";
import { Table, Space } from "antd";
import {
  StarOutlined,
  ForkOutlined
} from '@ant-design/icons';
import stubColumns from "../../stubData/columns.json";
import stubData from "../../stubData/MOCK_DATA.json";
import Column from "antd/lib/table/Column";
import './DataTable.css';

export default class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }

  onSelectChange = (selectedRowKeys) => {
    this.props.handleOnSelectChange({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys, columns, dataSource } = this.props;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        scroll={{ y: 550 }}
        loading={loading}
      >
        {columns.map((col) => (
          <Column title={col.title} dataIndex={col.dataIndex} key={col.key} />
        ))}
        <Column
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <div className="row">
                <a>
                  <StarOutlined />
                </a>

                <a>
                  <ForkOutlined />
                </a>
              </div>
            </Space>
          )}
        />
      </Table>
    );
  }
}
