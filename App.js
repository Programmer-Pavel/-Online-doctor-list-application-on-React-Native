import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen} from './screens/HomeScreen';
import {PatientScreen} from './screens/PatientScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Patient">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
                <Stack.Screen name="Patient" component={PatientScreen} options={{headerShown : false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



