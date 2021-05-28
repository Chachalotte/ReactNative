import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, FlatList, Image } from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import Footer from "../../composants/Footer";
import { SearchBar, Card, ListItem, Icon } from 'react-native-elements';
import MyButton from "../../composants/MyButton";

import getBooks from "../../../models/books";

export default function books({route, navigation}) {
    const [ books, setBooks] = useState([]);
    const [dataBooks, setDataBooks] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        async function fetchData()  {
            let books = await getBooks() ;
            setBooks(books);
            setDataBooks(books)
        }
        fetchData() ;
    }, []);

    const updateInput = async (input) => {
        const filtered = dataBooks.filter(item => {
         return item.fields['Nom'].toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setBooks(filtered);
     }


    return (
        
        <View style={styles.container}>
             <View style={ styles.header }>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('start')}><Icon name='home' type="font-awesome" color='#fca3cc'/></Text>
            <Text style={{ width: '20%' }} onPress={() => navigation.navigate('books')}><Icon name='book' type="font-awesome" color='#fca3cc'/>   </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('authors')}><Icon name='pencil' type="font-awesome" color='#fca3cc'/> </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('addLivre')}><Icon name='address-book' type="font-awesome" color='#fca3cc'/></Text>
            </View>
            <SearchBar
                    placeholder="Entrer le nom du livre que vous cherchez"
                    onChangeText={updateInput}
                    value={input}
                    style={ styles.searchbar }
                />
            <View style={ styles.underContainer }>
                <FlatList  
                    style={ styles.aled}
                    data={books}
                    renderItem={({ item, index, separators }) => (
                        
        
                    <Card key={index}>
                    <Card.Title>{item.fields['Nom']}</Card.Title>
                    <Card.Divider/>

                    <View style={ styles.Container2}>{item.fields["Photo"] !== undefined && item.fields["Photo"].length > 0 && <Image source={{uri: item.fields["Photo"][0]["url"]}} style={ styles.Image} />}</View>
                    <MyButton
                        title="Accéder au livre"
                        onPress={() => navigation.navigate('book', { item })}
                    />
                    </Card>
                  )}
                />
            </View>
            <View style={ styles.hr }>
            </View>
            <Footer />

        </View>
    );
}
