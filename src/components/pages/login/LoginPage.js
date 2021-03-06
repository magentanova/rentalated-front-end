import React from 'react'

import { logIn } from '../../../services/authService'

class LoginPage extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        const formEls = e.target.elements
        const user_data = {}
        let el 
        for (let i = 0; i < formEls.length; i++ ) {
            el = formEls[i]
            user_data[el.name] = el.value
        }
        logIn(user_data)
            .then(
                resp => {
                    localStorage.setItem("session_token",resp.text)
                    this.props.history.push( "/home")
                },
                err => alert(err)
            )
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="email" placeholder="email"/>
                <input name="first_name" placeholder="first name"/>
                <input name="last_name" placeholder="last name"/>
                <input name="password" placeholder="password" type="password"/>
                <button type="submit" />
            </form>
        )
    }
}

export default LoginPage