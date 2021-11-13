import React,{useState} from 'react';
import {SafeAreaView,StyleSheet,Text,Button,TextInput} from 'react-native';



type User = {
    id:number;
    nome: string;
    email:string;
    avatarUrl:string
}
interface UserFormProps {
    route:any;
    navigation:any;
    user:User;
}

export const UserForm:React.FC<UserFormProps> = ({route,navigation}:UserFormProps) => {

    const [user,setUser] = useState<User>(route.params? route.params:{})

    return (
        <SafeAreaView style={styles.form}>
            <Text>Nome</Text>
            <TextInput
            style={styles.input}
                onChangeText={nome => setUser({...user,nome})}
                placeholder="Informe o Nome" 
                value={user.nome}
            />
            <Text>Email</Text>
            <TextInput
            style={styles.input}
                onChangeText={email => setUser({...user,email})}
                placeholder="Informe o Email" 
                value={user.email}
            />
            <Text>Avatar</Text>
            <TextInput
            style={styles.input}
                onChangeText={avatarUrl => setUser({...user,avatarUrl})}
                placeholder="Informe o Email" 
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack();
                }}
             />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    form:{
        padding: 15,
    },
    input: {
        height: 40,
        borderColor:'gray',
        borderWidth:1,
        marginBottom:10,
    }
})