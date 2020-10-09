import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        }))
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://lh3.googleusercontent.com/proxy/D2593C9ezH7pgLrC0M2H0Pbb-CD1O1c_cOMIZjCRNggfz_6-rv99CwPP4T5bsyugyXebjPf8czoHt1erGVtWpIll8IeTz1Dr5AJHdIBTtQ" alt=""/>
                <div className="login_text">
                    <h1>Sign in to the Chat App</h1>
                </div>

                <Button type='submit' onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login