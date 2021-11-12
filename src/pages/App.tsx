import React from 'react';
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
      >
        <Stack.Screen name="UserList" component={UserList}/>
        <Stack.Screen name="UserForm" component={UserForm}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}


export default App;
