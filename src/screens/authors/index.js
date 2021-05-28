import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, FlatList, Image } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import Footer from "../../composants/Footer";
import MyButton from "../../composants/MyButton";

import getAuthors from "../../../models/authors";
import { SearchBar, Card, ListItem, Icon } from 'react-native-elements';

export default function authors({route, navigation}) {
    const [ authors, setAuthors] = useState([]);
    const [dataAuthors, setDataAuthors] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        async function fetchData()  {
            let authors = await getAuthors() ;
            setAuthors(authors);
            setDataAuthors(authors)
        }
        fetchData() ;
    }, []);

    const updateInput = async (input) => {
        const filtered = dataAuthors.filter(item => {
         return item.fields['Nom'].toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setAuthors(filtered);
     }


    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={ styles.header }>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('start')}><Icon name='home' type="font-awesome" color='#fca3cc'/></Text>
            <Text style={{ width: '20%' }} onPress={() => navigation.navigate('books')}><Icon name='book' type="font-awesome" color='#fca3cc'/>   </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('authors')}><Icon name='pencil' type="font-awesome" color='#fca3cc'/> </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('addLivre')}><Icon name='address-book' type="font-awesome" color='#fca3cc'/></Text>
        </View>

        <View style={{ width: '100%'}}>

        <SearchBar
                    placeholder="Entrez le nom de l'auteur que vous recherchez"
                    onChangeText={updateInput}
                    value={input}
                    style={ styles.searchbar }
                />
        </View>
        <View style={{ justifyContent: 'center', alignContent:'center'}}>
            
              <FlatList  
                    style={ styles.aled}
                    data={authors}
                    renderItem={({ item, index, separators }) => (
                        
        
                    <Card key={index}>
                    <Card.Title>{item.fields['Nom']}</Card.Title>
                    <Card.Divider/>

                    <View style={ styles.Container2}>{item.fields["Photo"] !== undefined && item.fields["Photo"].length > 0 && <Image source={{uri: item.fields["Photo"][0]["url"]}} style={ styles.Image} />}</View>
                    <MyButton
                        title="Découvrir l'auteur"
                        onPress={() => navigation.navigate('author', { item })}
                    />
                    </Card>
                  )}
                />
        <Footer />
        </View>  
        </View>

        
    );
}
