// StateContext.js
import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export function StateProvider({ children }) {
    const [isAbout, setAbout] = useState(true);
    const [isPost, setPost] = useState(false);
    const [isTodo, setTodo] = useState(false);
    const [isBMI, setBMI] = useState(false);
    const [isWatch, setWatch] = useState(false);
    const [isMedi, setMedi] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const [isLogout, setLogout] = useState(true);
    const [isRecipe, setRecipeState] = useState(false);
    

    return (
        <StateContext.Provider value={{ isRecipe, setRecipeState, isAbout, setAbout, isLogout, isPost, setPost, isTodo, setTodo, isBMI, isLogin, setLogout, setBMI, isWatch, setWatch, isMedi, setMedi, setLogin }}>
            {children}
        </StateContext.Provider>
    );
}
