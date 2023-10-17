import { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Dash from "./components/dashboard/dash";


class App extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex'}}>
        <Navbar />
        <Dash />
      </div>
      </>
    )
  }
}


export default App