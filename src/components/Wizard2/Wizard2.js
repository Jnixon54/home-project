import React, {Component} from 'react';
import Header from '../Header.js';




export default class Wizard2 extends Component{
    constructor(){
        super()

        this.state={}
    }
    render(){
        
        return(
            <div>
                <Header />
                <h2>Wizard2</h2>
            </div>
        );
    }
}