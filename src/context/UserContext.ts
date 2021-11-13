import React, {createContext} from 'react';
import {users} from '../data/users';


type User = {
    id:number;
    nome: string;
    email:string;
    avatarUrl:string
}

interface IState {
    users: User[];
}

interface IContextProps {
    state: IState;
    dispatch: ({type}:{type:string}) => void;
  }

const UsersContext = createContext({} as IState);



export const UsersProvider = props => {
    return(
        <UsersContext.Provider value={{
            state:{
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>
    )
   
}


export default UsersContext;