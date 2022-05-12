import styled from "styled-components";
import { Typography, Space } from 'antd';
import React from "react";

const { Text, Link } = Typography;

// const CodeView = styled.pre`

// `;

export default class CodeView extends React.Component{
    constructor(props){
        super(props);
        this.ellipsisProps = {
            rows: null,
        }
    }

    render(){
        const {rows, code} = this.props;
        this.ellipsisProps.rows = rows;
        return(
            <Space direction="vertical">
                <Text code ellipsis={{rows: 13}}>{code}</Text>
            </Space>
        );
    }
}