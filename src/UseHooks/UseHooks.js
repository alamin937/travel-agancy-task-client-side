import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut , updateProfile, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider , sendEmailVerification    } from "firebase/auth";
import { useEffect, useState } from "react";



firebaseAuthentication()

const UseHooks = () =>{
    const [user, setUser] = useState()
    const [error,setError] = useState()
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const register = (email,password,name) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            newUser(name)
            saveUser(email,name)
            verification();
            
        })
        .catch(error =>{
            setError(error.message)
        })
    }


    const googleSignIn = (navigate,location) =>{
        signInWithPopup(auth, provider)
        .then((result) => {
           setUser(result.user)
           verification();
           let from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        }).catch((error) => {
          setError(error.message)
        });
    }

    const verification = () =>{
        sendEmailVerification(auth.currentUser)
        .then(() =>{

        })
    }

    useEffect(() =>{
        fetch(`https://pure-dawn-69415.herokuapp.com/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])


    const logIn = (email,password,navigate,location) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            setUser(result.user)
            let from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        })
        .catch(error =>{
            setError(error.message);
        })
        .finally(() => setLoading(false))
    }


    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }
            else{
                setUser({ })
            }
            setLoading(false)
        })
    },[])


    const logOut = () =>{
        setLoading(true)
        signOut(auth)
        .then(() =>{
            setUser({ })
        })
        .finally(() => setLoading(false))
    }


    const newUser = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }



    const saveUser = (email,name) =>{
        const user = {email:email, displayName:name}
        fetch('https://pure-dawn-69415.herokuapp.com/users', {
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then()
    }



return{
    user,
    logOut,
    error,
    register,
    logIn,
    googleSignIn,
    admin,
    loading
}





}

export default UseHooks;