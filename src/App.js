import { useState , useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import NavBar from './Components/NavBar/NavBar';
import SignInAndSignUp from './Pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from './Firebase/Firebase.config';
import CardShop from './Pages/CardShop/CardShop';

const App = () => {
  console.log(localStorage.length);
  const [login, setLogin] = useState(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setLogin(true);
        console.log(user.displayName);
        console.log(user.email);
        // ...
      } else {
        // User is signed out
        setLogin(false);
        // ...
      }
    });
  });

  console.log('login: ',login)

  const [items, setItems] = useState([]);
  console.log(items)

  useEffect(() => {
    if (localStorage.length === 0) {
      console.log('iam zero');
    } else {
      localStorage.removeItem('items');
    }
  },[]);

  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => { 
    if (items.length) {
      localStorage.setItem('items', JSON.stringify(items));
    }
    console.log('itemHook is: ',items)
  },[items]);

  const googleSignIn = async () => {
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
        setLogin(true);
        // this.setState({ login: true });
        console.log('login: ', login);

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

  const signOutUser = async () => {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        // Sign-out successful.
        setLogin(false);
        // this.setState({ login: false });
        console.log("login: ", login);
        console.log('signed-out successfully');
      })
      .catch((error) => {
        // An error happened.
        throw new Error(error.message);
    });
  }

  const signUp = async (email, password) => { 
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

  const signIn = async(email, password) => {
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

  const addToCard = (item) => {
    console.log('from card', item.id)
    console.log('from card', item)
    const isItemExist = items.filter(i => i.id === item.id ? i : false);
    if (isItemExist.length) {
      const newItem = Object.assign(item, { count: item.count + 1 });
      let index = 0;
      items.filter((i,idx) => { 
        if (i.name === item.name) {
          index = idx;
          return idx;
        }
      });
      console.log('exist this: ', index);
      const newOne = Object.assign(items[index],newItem);
      console.log('existed item is: ', newOne);
      items[index] = newOne;
      setItemsCount(prev => prev + 1);
      console.log('exist');

    } else {
      setItems(prevItems => [...prevItems, item]);
      setItemsCount(prev => prev + 1);
      console.log('we added the: ', item);
      console.log(items);
    }
  }
  const decrease = (item) => { 
    const newItem = Object.assign(item, { count: item.count !== 1 ? item.count - 1: 1 });
    let index = 0;
    items.filter((i, idx) => {
      if (i.name === item.name) {
        index = idx;
        return idx;
      }
    });
    const newOne = Object.assign(items[index], newItem);
    items[index] = newOne;
    setItemsCount(prev => prev !== 1? prev - 1: prev);
  }

  return (
    <div className="App">
      <NavBar itemsCount={itemsCount} login={login} signOutUser={signOutUser} items={items}></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop addToCard={addToCard}></Shop>}></Route>
        <Route path='signIn-or-signUp' element={<SignInAndSignUp googleSignIn={googleSignIn} signUp={signUp} signIn={signIn}></SignInAndSignUp>}></Route>
        <Route path='shop/shoping-cards' element={<CardShop decrease={decrease} addToCard={addToCard} items={items}></CardShop>}></Route>
        <Route path='*' element={
          <div>
            <h1 style={{ textAlign: 'center', color: 'red' }}>This route is not exist..!</h1>
          </div>
        }></Route>
      </Routes>
    </div>
  );
}


export default App;
