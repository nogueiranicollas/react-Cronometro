import React, {Component} from "react";
import '../src/app.css'

import Cronometro from '../src/assets/cronometro.png'

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      numero:0,
      btn_vai:'Start'

    }
    this.timer =null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai(){

    if(this.timer !==null){
      clearInterval(this.timer)
      this.timer =null
      this.setState({btn_vai:'Start'})
    }else{

    this.timer = setInterval(() => {
      let state = this.state;
      state.numero += 0.1;
      this.setState(state)
      this.setState({btn_vai:'Stop'})
    }, 100);
  }
  }

  limpar(){

    if(this.timer !==null){
      clearInterval(this.timer)
      this.timer =null
      
    }
    let state = this.state;
    state.numero = 0;
    state.btn_vai = "Start"
    this.setState(state)
  }
  
  render(){
    return(
    <div className="container">
        <img src={Cronometro} className="img" alt="cronometro"/>
        <a href="#" className="timer">{this.state.numero.toFixed(1)}</a>
        <br/>
        <div className="areaBTN">
            <a href="#" className="button" onClick={this.vai}>{this.state.btn_vai}</a>
            <a href="#" className="button" onClick={this.limpar}>Limpar</a>
        </div>
    </div>)
  }
}

export default App