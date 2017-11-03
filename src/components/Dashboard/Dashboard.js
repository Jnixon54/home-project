import React, {Component} from 'react';
import Header from '../Header.js';




export default class Dashboard extends Component{
    constructor(){
        super()

        this.state={}
    }
    render(){

        return(
            <div>
                <Header />
                <h2>Dashboard</h2>

            </div>
            
        )
    }
}