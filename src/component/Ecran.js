import { Component } from 'react';
import './css/ecran.css';


class Ecran extends Component{
    render(props){
        return(
            <div className="screen">
                {this.props.value}
            </div>
        );
    }
}

export default Ecran;