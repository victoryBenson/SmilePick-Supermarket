import React, {createContext, useContext, useEffect, useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Firebase'



const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})


    //signup
    const signUp = (email, passward) => {
        return createUserWithEmailAndPassword(auth, email, passward)
    }

    //signIn
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubcribe()
        }
    });




  return (
    <AuthContext.Provider value={{signUp, signIn, logOut, user}}>
        {children}
    </AuthContext.Provider>
  )
}

export function UserAuth (){
    return useContext(AuthContext)
}
