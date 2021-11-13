import React from 'react';
import {Button,Icon} from 'react-native-elements'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UserForm} from './UserForm/userform.page';
import {UserList} from './UserList/userlist.page';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="UserList" component={UserList} 
                    options = { ({navigation}) =>
                     { 
                        return {
                                title:"Lista de Usuários",
                                headerRight: () => (
                                 <Button
                                   type="clear"
                                   icon={<Icon name="add" size={25} color='#fff'
                                   onPress={() => navigation.navigate('UserForm')}
                                   /> } />
                                                                                                                   ) 
                              }  
                      }
                    }
          />
        <Stack.Screen name="UserForm" component={UserForm} options={{title:"Formulário de Usuários"}}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}


export default App;

const screenOptions = {
  headerStyle:{
    backgroundColor:'#f4511e',
  },
  headerTintColor:'#fff',
  headerTitleStyle: {
    fontWeight:'bold' 
  }
}
