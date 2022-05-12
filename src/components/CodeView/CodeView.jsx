import styled from "styled-components";
import React from "react";

const Line = styled.pre`
  font-size: 0.7rem;
  margin: 0;
  counter-increment: line;

  &:before {
    content: counter(line);
    color: var(--gray);
  }
`;

const CodeWrapper = styled.div`
  width: 27rem;
  height: 15rem;
  overflow-y: scroll;
  overflow-x: ellipsis;
`;

export default class CodeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { code } = this.props;
    return (
      <CodeWrapper>
        {code.map((line, i) => (
          <Line key={i}>{line}</Line>
        ))}
      </CodeWrapper>
    );
  }
}
