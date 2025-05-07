import { createContext, useMemo, useState } from "react";
import { Users } from '../data/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([...Users]);

    const login = (email, password) => {
        const userFound = users.find(u => u.email === email && u.password === password);

        if(userFound){
            localStorage.setItem('user', email);
            setUser(email);
            return true
        }
        return false
    }

    const registerUser = (email, password) => {
        const userFound = users.find(u => u.email === email);

        if (userFound) {
            return false;
        } else {
            const newUser = {
                email,
                password
            }
            setUsers([...users, newUser]);
            return true;
        }
    }

    const context = useMemo(() => (
        {
            user,
            setUser,
            users,
            setUsers,
            login,
            registerUser
        }
    ), [user, users]);

    return (
        <div>
            <UserContext.Provider value={context}>
                {children}
            </UserContext.Provider>
        </div>
    )
}
