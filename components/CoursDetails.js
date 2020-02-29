import React, { Component } from 'react';
import { StyleSheet,View, Text, ScrollView, Image, Alert } from 'react-native';
import cours from '../helpers/contenuCours';
import { Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

class CoursDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unCours: {
                    id: null,
                    titre: '',
                    description: '',
                    images: '',
                    prof: ''
                },
            liste: [
            ],
            onB: true // je met la valeur au true car le cours n'a pas encore été ajoutée au favori
        };
    }

    componentDidMount() {
       const id = this.props.navigation.state.params.id
       for(var i = 0; i< cours.length; i++){
        if(id == cours[i].id){
            this.setState({unCours: cours[i]})
            break
        }
    }
    }

    _ajouterFavoris(){
        
        {this.setState({liste: [
            {
                //titre: this.props.navigation.state.params.titre,
                id: this.props.navigation.state.params.id
            }
        ],
        onB : false //Je met la valeur à false pour éteindre le bouton car le cours a été ajoutée au favoris
    })}
        
        Alert.alert("Favoris ajoutée")


    }
    render() {

        return (
            <ScrollView style = {styles.scrollvieww}>
                <View style = {styles.main_container}>
                    <View style={styles.colone}>
                        <Image style={styles.image} source={{uri: this.state.unCours.images}}/>
                    </View>
                    <View style={styles.colone}>
                        <Text style = {styles.text}> Titre du cours : {this.state.unCours.titre}</Text>
                        <Text style = {styles.prof}> Nom du prof : {this.state.unCours.prof}</Text>
                    </View>
                </View>
                <View style = {styles.desdes}>

                    <Text style = {styles.description}> {this.state.unCours.description} </Text>

                    <View style = {styles.buttonC}>
                        { this.state.onB ?

                            <Button style={styles.button} title="Ajouter favoris :)" onPress={() => this._ajouterFavoris() } />
        
                            : <Button style={styles.button} title="Ajouter favoris :)"  disabled />
                        }
                    </View>

                    <View >//la liste des cours ajoutée
                        <Text style = {styles.textListe}> Les ID des Cours Favoris</Text>
                        <FlatList
                        data = {this.state.liste}
                        renderItem={({item}) => <Text style={styles.item}>id : {item.id} </Text>}
                        />
                    </View>
                </View>

            </ScrollView>
                
        );
    }
}

/********* pour les styles */

const styles = StyleSheet.create({
    scrollvieww:{
        backgroundColor: '#F5FCFF'
    },
    main_container: {
        flex: 1,
        flexDirection: "row",
    },
    image: {
        width: 150,
        height: 150
    },
    colone: {
        flex:2,
        margin: 1
    },
    text: {
        fontWeight: "bold",
        margin : 10,
        backgroundColor:"skyblue"
    },
    prof: {
        fontWeight: "bold",
        margin : 10,
        backgroundColor: "#f194ff"
    },
    description: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:25
    },
    desdes: {
        borderWidth: 2,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopColor: 'black',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    textListe: {
        fontStyle:"italic",
        fontSize:30,
        textAlign:"center",
        color:"green"
    },
    buttonC: {
        alignItems:"center",
        paddingBottom:15
    },
    button: {
        width:200
    }
})

export default CoursDetails;
