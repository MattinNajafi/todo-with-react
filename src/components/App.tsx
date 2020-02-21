import * as React from "react";
import Input from "./Input";

interface State {
  todoList: Array<string>;
  currentValue: string;
}

interface Props {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      todoList: [],
      currentValue: ""
    };
  }
  render() {
    return (
      <div className="App">
        <Input
          todoList={this.state.todoList}
          currentValue={this.state.currentValue}
        />
      </div>
    );
  }
}

export default App;
