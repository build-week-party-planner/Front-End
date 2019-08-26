// import React, {} from 'react'
// import FacebookLogin from 'react-facebook-login'

// class Facebook extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             userId: '',
//             name: '',
//             email: '',
//             picture: '',
//             loggedIn: props.loggedIn
//         }
//     }

//     //  View this comment
//     // ? vIEW THIS COMMENT

//     componentClicked = () => {
//         console.log('clicked')
//     }

//     responseFacebook = res => {
//         console.log(res, 'res')
//         this.setState({...this.state, loggedIn: true})
//     }


//     render() {

//         let fbContent
//         this.state.loggedIn ? console.log('hello')
//             : fbContent = ( <FacebookLogin
//                 appId="2301746973409809"
//                 fields="name,email,picture,friends"
//                 onClick={() => this.componentClicked}
//                 callback={this.responseFacebook}
//                 autoLoad={false}
//                 cookie={true}
//                 // scopes="email,user_friends"
//                 // disableMobileRedirect={true}
//             /> )
//         return (
//             <div>
//                 {fbContent}
//                 {this.state.loggedIn? 'loggedIn' : 'Not logged In'}
//             </div>
//         )
//     }
// }

//     export default Facebook