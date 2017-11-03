import React, {Component} from 'react';
import './Home.css';




export default class Home extends Component{
    constructor(){
        super()

        this.state={
            
        }
        
    }
    render(){
        
        return(
            <div className="parentDiv">
                <div className="white">
                
                
                <input></input>
                <input></input>
                
               
                <div>
                <img src='../../../icon.png'/>
                <h2 className="heading">Houser</h2>
                
                    <button className="LoginBtn">Login</button>
                    <button className="RegBtn">Register</button>
                
                </div>
            </div>
                
              
            </div>
            
        );
    }
}