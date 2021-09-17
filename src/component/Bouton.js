import './css/bouton.css';
import React, { Component } from 'react';


class Bouton extends Component{
    constructor(props){
        super(props);
        this.state ={
            valeur:null,
        };
    }
    render(){
        return(
            <button className="bouton" >
                {this.props.value}
            </button>
            
        );
    }
}

export default Bouton;