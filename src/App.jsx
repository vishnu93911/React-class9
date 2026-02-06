
import React from "react"
import "./count.css"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // names:"vishnu",
      num: 0,
      // products:[{name:"sathvik",age:22},{name:"vinay",age:23}]
    }

  }
  // change(){
  //   this.setState({names:this.state.names+" vardhan"})
  // }
  decrement() {
    this.setState({ num: this.state.num - 1 })
  }
  increment() {
    this.setState({ num: this.state.num + 1 })
  }
  reset() {
    this.setState({ num: this.state.num = 0 })
  }
  // array(){
  //   this.setState({products:this.state.products[0].name+" sandeep"})
  // }
  render() {
    return (
      <>
        {/* <h1>class component</h1> */}
        {/* <h1>{this.state.names}</h1>
        <button onClick={()=>this.change()}>changing state messages/</button>*/}
        <h1 className="head">Count:{this.state.num}</h1>
        <div className="container">
          <button className="bt inc" onClick={() => this.increment()}>Increment</button>

          <button className="bt dec" onClick={() => this.decrement()}>Decrement</button>
          <button className="bt res" onClick={() => this.reset()}>Reset</button>

        </div>

        {
          console.log(this.state.products)
        }
        {/* <h1>{this.state.products[0]}</h1> */}
        {/* <button onClick={()=>this.array()}>array accesing</button> */}

      </>
    )
  }
}
export default App
