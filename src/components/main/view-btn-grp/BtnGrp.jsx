import React from "react";
import { Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default class BtnGrp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <Radio.Group value="default">
            <Radio.Button type="primary" value="large" icon={<DownloadOutlined />} />
            <Radio.Button type="primary" value="default" icon={<DownloadOutlined />} />
          </Radio.Group>
        );
    }
}