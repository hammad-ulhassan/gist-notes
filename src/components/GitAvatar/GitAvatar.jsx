import { Avatar } from "antd";
import React from "react";

export class GitAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { size, icon, image, shape } = this.props;
    return (
      <Avatar
        size={size}
        icon={icon}
        src={image}
        shape={shape}
      />
    );
  }
}
