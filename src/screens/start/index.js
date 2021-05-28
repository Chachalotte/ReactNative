import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import { SearchBar, Card, ListItem, Icon } from 'react-native-elements';

export default function index({navigation}) {
    useEffect(() => {
        navigation.navigate('books');
    }, []);

    return (
        <View style={styles.container}>
             <View style={ styles.header }>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('start')}><Icon name='home' type="font-awesome" color='#fca3cc'/></Text>
            <Text style={{ width: '20%' }} onPress={() => navigation.navigate('books')}><Icon name='book' type="font-awesome" color='#fca3cc'/>   </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('authors')}><Icon name='pencil' type="font-awesome" color='#fca3cc'/> </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('addLivre')}><Icon name='address-book' type="font-awesome" color='#fca3cc'/></Text>
            </View>

            <View style={{ height: "90%" }}>
                <Text>Bienvenue sur l'application Book App</Text>
            </View>
        </View>
    );
}
