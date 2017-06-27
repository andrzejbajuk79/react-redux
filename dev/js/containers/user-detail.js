/**
 * Created by abajuk on 27.06.2017.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {

    render(){
        if(!this.props.user){
            return(<h4> wybierz pracownika</h4>)
        }
        return(
            <div>
                <img src ={this.props.user.thumbnail} />
                <h2>{this.props.user.first} </h2>
                <h2>{this.props.user.last} </h2>
                <p>zawod : {this.props.user.job}</p>
            </div>

        )

    }
}

function mapStateToProps(state){
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);