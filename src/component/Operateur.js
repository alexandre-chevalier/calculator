import './css/bouton.css';
import React, { Component } from 'react';



class Operateur extends Component{
    render(){
        return(
            <button className="bouton" onClick={()=>{
                alert('hello' + this.props.signe)}} >
                {this.props.signe}
            </button>
        );
    }
    
}

export default Operateur;