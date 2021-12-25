import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import NavBar from './Components/NavBar/NavBar';
import SignInAndSignUp from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from './Firebase/Firebase.config';


class App extends Component{
  constructor() { 
    super();
    this.state = {
      login: undefined,
    }
  }
  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        this.setState({ login: true });
        console.log(user.displayName);
        console.log(user.email)
        // ...
      } else {
        // User is signed out
        this.setState({ login: false });
        // ...
      }
    });
  }

  googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        this.setState({ login: true });
        console.log('login: ', this.state.login);

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode);
        throw new Error(errorCode);

      });
  }

  signOutUser = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.setState({ login: false });
        console.log("login: ", this.state.login);
        console.log('signed-out successfully');
      })
      .catch((error) => {
        // An error happened.
        throw new Error(error.message);
    });
  }

  signUp = async (email, password) => { 
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(errorCode);
      });
  }

  signIn = async(email, password) => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        throw new Error(errorCode);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar login={this.state.login} signOutUser={this.signOutUser}></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='shop' element={<Shop></Shop>}></Route>
          <Route path='signIn-or-signUp' element={<SignInAndSignUp googleSignIn={this.googleSignIn} signUp={this.signUp} signIn={this.signIn}></SignInAndSignUp>}></Route>
          <Route path='*' element={
            <div>
              <h1 style={{ textAlign: 'center', color: 'red' }}>This route is not exist..!</h1>
            </div>
          }></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
