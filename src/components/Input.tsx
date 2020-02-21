import * as React from "react";
import List from "./List";

interface Props {
  todoList: Array<string>;
  currentValue: string;
}

interface State {}

class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  onChangeOfInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentValue: event.target.value });
  };

  addTaskButtonClicked = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Todo.."
          onChange={this.onChangeOfInput}
          defaultValue={this.props.currentValue}
        />
        <button type="submit" onClick={this.addTaskButtonClicked}>
          Add Task
        </button>
        <List
          todoList={this.props.todoList}
          currentValue={this.props.currentValue}
        ></List>
      </div>
    );
  }
}

export default Input;
