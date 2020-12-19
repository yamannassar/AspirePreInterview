import { Button, TextField } from '@material-ui/core'
import React from 'react'
import './LoginPage.scss'
export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="loginPage-container">
                <header className="header">
                </header>
                <div className="login-content">
                    <div className="row username">
                        <div className="col-3"></div>
                        <div className="col-6 username">
                            <TextField className="username-textField" label="Username" variant="outlined" />
                        </div>
                    </div>
                    <div className="row password">
                        <div className="col-3"></div>
                        <div className="col-6 username">
                            <TextField className="password-textField" label="Password" type="password" variant="outlined" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 login-button-div">
                            <Button className="login-button">
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
                <footer className="footer">

                </footer>
            </div>
        )
    }
}
