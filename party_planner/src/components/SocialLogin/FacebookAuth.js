import React, {} from 'react'
import FacebookLogin from 'react-facebook-login'

class Facebook extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userId: '',
            name: '',
            email: '',
            picture: '',
            loggedIn: props.loggedIn
        }
    }

    componentClicked = () => {
        console.log('hello')
    }

    responseFacebook = res => {
        console.log(res, 'res')
    }


    render() {

        let fbContent
        this.state.loggedIn ? console.log('hello')
            : fbContent = <FacebookLogin
                appId="2301746973409809"
                fields="name,email,picture,friends"
                scope="public_profile,email,user_friends"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                autoLoad={false}
                // cookie={true}
            // disableMobileRedirect={true}
            />

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}

    export default Facebook