import React from 'react';

import './sign-up.style.scss';

import FormInput from '../form-input/form-input.compnent';

import CustomButton from '../custom-button/custom-button.component';

import { auth,createUser } from '../../firebase/firebase.util';

class SignUp extends React.Component{
    state={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword)
        {
            alert("Password Mismatch!!!");
            return;
        }
        else
        {
            try
            {
                const {user} = await auth.createUserWithEmailAndPassword(email,password);
                await createUser(user,{displayName});
                this.setState({
                    displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                })
            }
            catch(error){
                console.error(error);
            }
        }

    }
    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    }
    render()
    {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name = "displayName"
                        onChange={this.handleChange}
                        label="Name"
                        value = {displayName}
                        required
                    />
                    <FormInput
                        type="email"
                        name = "email"
                        onChange={this.handleChange}
                        label="Email"
                        value = {email}
                        required
                    />
                    <FormInput
                        type="password"
                        name = "password"
                        onChange={this.handleChange}
                        label="Password"
                        value = {password}
                        required
                    />
                    <FormInput
                        type="password"
                        name = "confirmPassword"
                        onChange={this.handleChange}
                        label="Confirm Password"
                        value = {confirmPassword}
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;