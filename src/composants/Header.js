import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Navigation } from '@react-navigation/native';

export default function Header({route, navigation}) {

    
    
    return (
        <View style={ styles.header }>
            <Text style={{ fontSize: 24, color: 'black', textAlign: 'center'}}>Accueil    </Text>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Liste des livres    </Text>
            <Text style={{ fontSize: 24, color: 'white', textAlign: 'center'}}>Liste des auteurs       </Text>
            <Text style={{ fontSize: 24, color: 'white', textAlign: 'center'}}>Profil</Text>
        </View>
    );
}
