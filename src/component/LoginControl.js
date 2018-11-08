import React from 'react'
export default class LoginControl extends React.Component{
    constructor(props)
    {
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state={isLoggedIn:false};


    }
    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }
    render(){
        
            const isLoggedIn=this.state.isLoggedIn;
            let button;
            if(isLoggedIn){
                button=<LogoutButton onclick={this.handleLogoutClick}/>;
            }else{
                button=<LoginButton onclick={this.handleLogoutClick}/>;
            }
            return(
                <div>
                    <Greeting isLoggedIn={isLoggedIn}/>
                    {button}
                </div>
            );

        
    }
}
function UserGreeting(props){
    return <h1>Welcome back!</h1>
}
function GuestGreeting(props){
    return <h1>please sign up</h1>;
}
function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    )
}
function LogoutButton(props){
    return(
        <button onClick={props.onclick}>Logout</button>
    )
}
