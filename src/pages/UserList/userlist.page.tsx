import React,{useContext} from 'react';
import {FlatList, SafeAreaView,Alert,View} from 'react-native';
import { ListItem,Avatar,Button,Icon } from 'react-native-elements';

import UserContext from '../../context/UserContext';


type User = {
    id:number;
    nome: string;
    email:string;
    avatarUrl:string
}
interface UserListProps {
    navigation:any;
    usersP:User[];
}



export const UserList : React.FC<UserListProps> = ({navigation,usersP} :UserListProps ) => {

    const {state} =  useContext(UserContext);

    const confirmUserDeletion = (user:User) => {
        Alert.alert("Excluir Usuário","Deseja excluir o usuário?",
            [
                {
                    text:"sim",
                    onPress() {
                        console.warn('delete' + user.id)
                    }
                }
                ,{
                    text:"não"
                }
            ])
    }

    const getActions = (user:User) => {
        return (
            <View style={{flexDirection:'row'}}>
                <Button
                    onPress={ () => navigation.navigate("UserForm",user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={ () => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </View>
        )
    }

    const getUserItem: React.FC<User> = (user:User) => {
        return (<ListItem
            key={user.id.toString()}
            bottomDivider
            onPress={() => navigation.navigate("UserForm")}
        >
              <Avatar source={{uri: user.avatarUrl}} />
              <ListItem.Content>
                <ListItem.Title>{user.nome}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content right>
                    {getActions(user)}
              </ListItem.Content>
        </ListItem>)
    }

    return (
        <SafeAreaView>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users} 
                renderItem= { ({ item }: { item: User }) => 
                    getUserItem(item)
                }
            />
        </SafeAreaView>
    )
}