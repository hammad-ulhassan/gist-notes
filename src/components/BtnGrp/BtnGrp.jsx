import React from "react";
import { Radio } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

export default class BtnGrp extends React.Component{
    constructor(props){
        super(props);
        this.viewChange = this.viewChange.bind(this);
    }

    viewChange(e){
      this.props.onViewChange(e.target.value)
    }

    render(){
        return (
          <Radio.Group value={this.props.view} onChange={this.viewChange}>
            <Radio.Button value="table">
              <UnorderedListOutlined />
            </Radio.Button>
            <Radio.Button value="card">
              <AppstoreOutlined />
            </Radio.Button>
          </Radio.Group>
        );
    }
}