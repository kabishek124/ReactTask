// write a class component here
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.count} component</h1>
        <button
          type="submit"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Summa count panren parunga frands
        </button>
        <br />
        <br />
        <button
          type="summa"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Summa count a decrease panren parunga frands
        </button>
      </div>
    );
  }
}
export default UserClass;
