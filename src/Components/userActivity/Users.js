import React from "react";
import {connect} from "react-redux";
import {userDetails as userDetailsAction} from "../../actions/index";

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getUserDetails();
    }

    render() {
        const {user} = this.props
        return (
            <div>
                {(user || []).map((item, i) => {
                    return(
                        <p>{item.name}</p>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userDetailsReducer.userInfo,
});

const mapDispatchToProps = dispatch => ({
    getUserDetails: () => dispatch(userDetailsAction.getUserDetailsInfo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)