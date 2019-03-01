import React from 'react';
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:'232188619317-d2ehtq6tabnhk6pdt0pdcnrfk15i0fdk.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                
                    this.onAuthChange(this.auth.isSignedIn.get());
                    console.log(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signOut();
            console.log(this.auth.currentUser.get().getId());
        } else {
            this.props.signIn();
        }
    };

    onSignInClick = () => {
        console.log('sign in djdsh');
        this.auth.signIn();
    };

    onSignOutClick = () => {
        console.log('sign out djdsh');

        this.auth.signOut();
    };

    renderAuthButton(){
        
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            
            return (
                <button onClick={this.onSignOutClick} className=" ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return (
                <button onClick={this.onSignInClick} className=" ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    }

    render(){
       return <div>{this.renderAuthButton()}</div>;
    };
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
    mapStateToProps,
    { signIn, signOut }
    )(GoogleAuth);