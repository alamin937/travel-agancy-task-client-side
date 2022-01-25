import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut , updateProfile, signInWithEmailAndPassword    } from "firebase/auth";
import { useEffect, useState } from "react";



firebaseAuthentication()

const UseHooks = () =>{
    const [user, setUser] = useState()
    const [error,setError] = useState()
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const register = (email,password,name) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            newUser(name)
            
        })
        .catch(error =>{
            setError(error.message)
        })
    }


    const logIn = (email,password,navigate,location) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            let from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        })
        .catch(error =>{
            setError(error.message);
        })
    }


    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({ })
            }
        })
    },[])


    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({ })
        })
    }


    const newUser = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }



return{
    user,
    logOut,
    error,
    register,
    logIn
}





}

export default UseHooks;