import React,{useState} from 'react';
import {SafeAreaView,Text} from 'react-native';

interface UserFormProps {
    route:any;
    navigation:any;
}

export const UserForm:React.FC<UserFormProps> = ({route,navigation}:UserFormProps) => {

    const [user,setUser] = useState(route.params? route.params:{})

    return (
        <SafeAreaView>
            <Text>{user.id}</Text>
        </SafeAreaView>
    );
};