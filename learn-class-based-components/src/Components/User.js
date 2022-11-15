
import classes from './User.module.css';
import { Component } from 'react';

class User extends Component {
    componentWillUnmount(){
        console.log('User Will Unmount!')
    }
    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}
// const User = (props) => {
 
// };

export default User;
