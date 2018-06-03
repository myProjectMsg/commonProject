import React,{ Component } from 'react';

export default class Index extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <span>{this.props.userMsg.name}</span>
                <span>{this.props.userMsg.age}</span>
            </div>
        )
    }
}