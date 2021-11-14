import React, {createContext,useReducer,useState} from 'react';
import {users} from '../data/users';

const initialState : State = {
     users
  };

const UsersContext = createContext<IAppContext>({
                            state: initialState,
                            dispatch: () => null
                        });


interface IAppContext {
    state: State;
    dispatch: React.Dispatch<Action>;
  }


type User = {
    id:number;
    nome: string;
    email:string;
    avatarUrl:string
}

type State = {
      users: User[];
}

type Action = {
     type:string;
     playload:User;
};

const actions = {
    USER_CREATE(state:State,action:Action){
        const user = action.playload;
        user.id = Math.random();
        return {
            ...state,
            users:[...state.users,user]
        }
    },
    USER_DELETE(state:State,action:Action){
        const user = action.playload;
        return {
            ...state,
            users:state.users.filter(u => u.id !== user.id)
        }
    },
    USER_UPDATE(state:State,action:Action){
        const user = action.playload;
        return {
            ...state,
            users:state.users.map(u => u.id === user.id ? user : u)
        }
    }
}


function reducer(state:State,action:Action)  {

    const fn = actions[action.type];
    return fn ? fn(state,action) : state;
}

export const UsersProvider: React.FC = ({children}) => {

   
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
            <UsersContext.Provider value={{state,dispatch}}>
                {children}
            </UsersContext.Provider>
    )
}

export default UsersContext;