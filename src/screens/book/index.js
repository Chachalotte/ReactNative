import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Linking, Dimensions} from 'react-native';
import styles from './styles';
import Header from "../../composants/Header";
import Footer from "../../composants/Footer";
import { SearchBar, Card, ListItem, Icon } from 'react-native-elements';

import getBooks from "../../../models/books";
import favImg from "../../../assets/images/heart.png";
import { getData, storeData } from '../../../utils/StoreManager';

export default function book({route, navigation}) {
  
    const { item } = route.params ;
    const [ favoris, setFavoris] = useState(false);

    useEffect(() => {
        async function getFavoris()  {
            let favoris = await getData('@favoris_book_'+item.id) ;
            setFavoris(favoris);
        }
        getFavoris() ;
    }, []);

    const clicFavoris = async (favoris) => {
        await storeData('@favoris_book_' + item.id, favoris) ;
        setFavoris(favoris);
    }

    function MyBackButton() {
        const navigation = useNavigation();
      
        return (
          <Button
            title="Back"
            onPress={() => {
              navigation.goBack();
            }}
          />
        );
      }

    return (
        <View style={styles.container}>

            <View style={ styles.header }>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('start')}><Icon name='home' type="font-awesome" color='#fca3cc'/></Text>
            <Text style={{ width: '20%' }} onPress={() => navigation.navigate('books')}><Icon name='book' type="font-awesome" color='#fca3cc'/>   </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('authors')}><Icon name='pencil' type="font-awesome" color='#fca3cc'/> </Text>
            <Text style={{ width: '20%'}} onPress={() => navigation.navigate('addLivre')}><Icon name='address-book' type="font-awesome" color='#fca3cc'/></Text>
            </View>

            <View style={{ width: '100%', height: '80%', alignContent: 'center', textAlign: 'center', alignItems: 'center', overflow: 'visible'}}>

            <TouchableOpacity style={{ height: 100, alignContent: 'center', justifyContent: 'center'}} onPress={() => { clicFavoris(!favoris)}}><Text style={{ textAlign: "center", color: 'red'}}>{favoris ? '' : 'Mettre en favoris'}</Text>
            
            {/* Pour permettre d'afficher l'image si le livre est favori */}
            {favoris && 
            
            <Text style={{ height: 100,  alignItems: 'center', textAlign: 'center',  color: 'red'}}>
            Ne plus mettre en favoris
            <Image source={favImg} style={styles.image} />
            </Text>
            }
 
         
            </TouchableOpacity>
                <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', textAlign: 'center'}}
                    onPress={() => Linking.openURL( item.fields["URL"])}>
                Lien Wikipedia du livre
                </Text>
                <Text></Text>
                <Text style={{ textAlign: "center", fontWeight: 'bold'}}>Nom</Text>
                <Text></Text>
                <Text style={{ textAlign: "center"}}> {item.fields["Nom"]}</Text>
                <Text></Text>
                <Text style={{ textAlign: "center", fontWeight: 'bold'}}>Description</Text>
                <Text style={{ textAlign: "center"}}> {item.fields["Description"]}</Text>

                <Text style={{ textAlign: "center"}}>Cout du livre : {item.fields["Prix"]} €{"\n"}</Text>
                <Text style={{ textAlign: "center"}}>Date de publication du livre : {item.fields["Date de création"]}{"\n"}</Text>
                <Text style={{ textAlign: "center"}}>Auteur : {item.fields["Nom Complet Auteur"]}</Text>
                
               
                {item.fields["Photo"] !== undefined && item.fields["Photo"].length > 0 && <Image source={{uri: item.fields["Photo"][0]["url"]}} style={{ width: '50%', height: '50%', justifyContent: 'center', alignContent:'center', alignItems:'center'}} />}
            
                
            </View>
            <Footer />
        </View>

        
    );
}
