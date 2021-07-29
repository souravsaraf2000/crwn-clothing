import React from 'react';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import { Route, Switch } from 'react-router-dom';

import ShopPage from './pages/shop/shoppage.component';

import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';

import {auth,createUser} from './firebase/firebase.util'

class App extends React.Component {

  state={
    currentUser : null
  }

  unsubscribe = null

  componentDidMount(){
    this.unsubscribe = auth.onAuthStateChanged(async user=>{
      if(user)
      {
        const ref = await createUser(user);
        ref.onSnapshot(snapshot => 
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        )
      }
      else
      {
        this.setState({currentUser:null});
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
