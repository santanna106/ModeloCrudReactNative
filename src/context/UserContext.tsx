import React, {createContext} from 'react';
import {users} from '../data/users';

const UsersContext = createContext({state:{users}});

export const UsersProvider: React.FC = ({children}) => {
    return (
            <UsersContext.Provider value={{state:{users}}}>
                {children}
            </UsersContext.Provider>
    )
}

export default UsersContext;