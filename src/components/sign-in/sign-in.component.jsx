import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.compnent';

import CustomButton from '../custom-button/custom-button.component'

import {SignInWithGoogle} from '../../firebase/firebase.util'

class SignIn extends React.Component{
    state = {
        email: '',
        password:''
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = e =>{
        const {value,name} = e.target;

        this.setState({[name]:value});
    }
    render()
    {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;