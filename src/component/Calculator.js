import Ecran from "./Ecran";
import Bouton from "./Bouton";
import Operateur from "./Operateur";
import Egale from "./Egale";
import React, {Component} from "react";

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state ={
        valeur:null,
        operateur:'',
        
    };
  }

  renderBouton(i){
    return <Bouton  value={i} onClick={this.chiffre}/>
  }
  renderBoutOpe(i){
    return <Operateur signe={i} />
  }
  renderBoutEg(i){
    return <Egale egal={i}/>
  }

  


  

  render (){
    return (
        <div>
      <h1>Calculator9000</h1>
      <Ecran/>
      <div className='pos'>
        {this.renderBouton(0)}
        {this.renderBouton(1)}
        {this.renderBouton(2)}
      </div>
      <div className='pos'>
        {this.renderBouton(3)}
        {this.renderBouton(4)}
        {this.renderBouton(5)}
      </div>
      <div className='pos'>
        {this.renderBouton(6)}
        {this.renderBouton(7)}
        {this.renderBouton(8)}
      </div>
      <div className='pos'>
        {this.renderBouton(9)}
        {this.renderBoutOpe('+')}
        {this.renderBoutOpe('-')}
      </div>
      <div className='pos'>
      {this.renderBoutOpe('*')}
      {this.renderBoutOpe('/')}
      {this.renderBoutEg('=')}
      </div>
    </div>
       
    );
  }
}



export default Calculator ;
