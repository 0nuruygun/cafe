import React, { Component } from "react";

const {name, surname} = this.props
class User extends Component {
    render(){
        return (
            <div>
                {name}
                {surname}
            </div>
        )
    }
}

export default User