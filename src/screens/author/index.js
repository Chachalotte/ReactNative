import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Index } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import Footer from "../../composants/Footer";
import getAuthors from "../../../models/authors";
import { getData, storeData } from '../../../utils/StoreManager';
import { Icon, Card } from 'react-native-elements';

export default function author({route, navigation}) {
    const { item } = route.params ;

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={ styles.header }>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('start')}><Icon name='home' type="font-awesome" color='#fca3cc'/></Text>
            <Text style={{ width: '20%' }} onPress={() => navigation.navigate('books')}><Icon name='book' type="font-awesome" color='#fca3cc'/>   </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('authors')}><Icon name='pencil' type="font-awesome" color='#fca3cc'/> </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('addLivre')}><Icon name='address-book' type="font-awesome" color='#fca3cc'/></Text>
            </View>
            <Card>
            <Card.Title>
            <Text style={{ textAlign: "center"}}>Auteur :  {item.fields["Nom Complet"]}</Text>
            </Card.Title>
            <Card.Divider/>
           
                {item.fields["Photo"] !== undefined && item.fields["Photo"].length > 0 && <Image source={{uri: item.fields["Photo"][0]["url"]}} style={{ width: 100, height: 100, borderRadius: 200}} />}
                  
                <Text style={{ textAlign: "center"}}></Text>
                <Text style={{ textAlign: "center"}}>Biographie : {item.fields["Description"]}</Text>
                
                <Text style={{ backgroundColor: 'white', textAlign: "center"}}>La liste de ses livres : {item.fields["Livre"]}{"\n"}</Text>
                   
            </Card>
          
    
            <Footer />

        </View>

        
    );
}
