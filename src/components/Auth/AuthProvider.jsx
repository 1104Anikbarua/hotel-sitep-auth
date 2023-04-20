import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

    return (
        <RoomContext.Provider value={{ user, createUser, userName, signInUser }}>
            {children}
        </RoomContext.Provider>
    );
};

export default AuthProvider;