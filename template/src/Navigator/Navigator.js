import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/Pages/Home/Home';
import List from '~/Pages/List/List';
import StyleGuide from '~/Pages/StyleGuide/StyleGuide';
import NavigationGuide from '~/Pages/NavigationGuide/NavigationGuide';
import ReduxGuide from '~/Pages/ReduxGuide/ReduxGuide';
import ApiGuide from '~/Pages/ApiGuide/ApiGuide';
import InsertPage from '~/Pages/InsertPage/InsertPage';

const Stack = createNativeStackNavigator();

function Navigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
			<Stack.Screen name="List" component={List} options={{headerShown: false}} />
			<Stack.Screen name="StyleGuide" component={StyleGuide} options={{headerShown: false}} />
			<Stack.Screen name="NavigationGuide" component={NavigationGuide} options={{headerShown: false}} />
			<Stack.Screen name="InsertPage" component={InsertPage} options={{headerShown: false}} />
			<Stack.Screen name="ReduxGuide" component={ReduxGuide} options={{headerShown: false}} />
			<Stack.Screen name="ApiGuide" component={ApiGuide} options={{headerShown: false}} />
		</Stack.Navigator>
	);
}

export default Navigator;
