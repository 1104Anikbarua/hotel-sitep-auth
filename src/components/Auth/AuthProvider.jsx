import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

export const RoomContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <RoomContext.Provider value={{ user, createUser, userName, signInUser }}>
            {children}
        </RoomContext.Provider>
    );
};

export default AuthProvider;