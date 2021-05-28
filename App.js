import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import start from './src/screens/start/index';
import home from './src/screens/home/index';
import books from './src/screens/books/index';
import book from './src/screens/book/index';
import authors from './src/screens/authors/index';
import author from './src/screens/author/index';
import addLivre from './src/screens/livre/index';

const Stack = createStackNavigator() ;

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
				initialRouteName={'Start'}
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name={'start'} component={start} />
				<Stack.Screen name={'home'} component={home} />
				<Stack.Screen name={'books'} component={books} />
				<Stack.Screen name={'book'} component={book} />
				<Stack.Screen name={'author'} component={author} />
				<Stack.Screen name={'authors'} component={authors} />
				<Stack.Screen name={'addLivre'} component={addLivre} />

        </Stack.Navigator>
    </NavigationContainer>
  );
}
