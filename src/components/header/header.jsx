import React from "react";
import Logo from "../Logo/Logo";
import './Header.css'
import { Input } from 'antd';
import { Button } from 'antd';
import { SearchOutlined} from '@ant-design/icons';


export default class Header extends React.Component {
  render() {
    return (
      <header className="flex-row header-style emumba-green">
        <Logo fillColor="#ffffff" />
        <div className="flex-row">
          <Input 
            placeholder="Search Notes..." 
            bordered={true} 
            suffix={
                <SearchOutlined />
            }
            />
          <Button>Login</Button>
        </div>
      </header>
    );
  }
}
