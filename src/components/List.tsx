import * as React from "react";

interface Props {
  todoList: Array<string>;
  currentValue: string;
}

interface State {}

class List extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
