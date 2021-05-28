import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Footer() {
    return (
        <View style={ styles.footer }>
            
            <Text style={{ fontSize: 20, color: 'white', backgroundColor: 'black', textAlign: 'center', width: '100%'}}>Copyright - Book App</Text>
        </View>
    );
}
