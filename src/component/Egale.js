import './css/bouton.css';
import React, {Component} from 'react';


class Egale extends Component{
    render(){
        return(
            <button className='bouton' onClick={()=>{
                alert('hello' + this.props.egal)}}>
                {this.props.egal}
            </button>
        );
    }
}

export default Egale;