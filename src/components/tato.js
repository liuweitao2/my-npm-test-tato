/* eslint-disable  */
//test
import React from "react";

class Demo extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){}
    componentDidUpdate(){}
    componentWillReceiveProps(nexProps){}
    render(){
        return (
            <div>{this.props.a}+{this.props.b}={this.props.a+this.props.b}</div>
        )
    }
}
export default Demo;