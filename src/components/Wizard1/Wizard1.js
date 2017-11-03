import React, {Component} from 'react';
import Header from '../Header.js';




export default class Wizard1 extends Component{
    constructor(){
        super()

        this.state={}
    }
    render(){
        
        return(
            <div>
                <Header />
                <h2>Wizard1</h2>
            </div>
        );
    }
}