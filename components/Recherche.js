import React from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import cours from '../helpers/contenuCours';
import CoursItem from './CoursItem';


class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            cours: [],
            chercheText: "", //Initialisation chaine à rechercher
            onRecherche: false
        };
    }
    _chercheTextInputChange(text) {
        this.setState({ chercheText: text })
    }

    _afficheDetailsCours = (id) => {
        //alert(id)
        this.props.navigation.navigate("CoursDetails", { id: id })
    }

    _voirCours() {
        this.setState({onRecherche: true})

        var data = new Array();
        var j = 0;
        for (var i = 0; i < cours.length; i++) {
            
            var titreCours = cours[i].titre.toLowerCase()

            if (titreCours.includes(this.state.chercheText.toLowerCase())) {
                data[j] = cours[i]
                j++   
            }
            
        }
        
        setTimeout(() => {
            {this.setState({cours: data, onRecherche: false})}
        }, 1000);
        
        this.forceUpdate();
    }
    render() {
        //console.log(this.props)
        return (
            <View style={{ marginTop: 100 }}>
                <TextInput style={styles.textinput} placeholder='Titre du cours' onChangeText={(text) => this._chercheTextInputChange(text)}/>
                <Button title='Rechercher' onPress={() => this._voirCours() } />

                <FlatList
                    data={ this.state.cours }
                    keyExtractor={ (item) => item.id.toString()}
                    renderItem={ ({item}) => <CoursItem unCours={item} afficheDetailsCours={ this._afficheDetailsCours}/>}
                />
                { this.state.onRecherche ?

                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' color="#0000ff"/>
                    </View>

                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        marginLeft: 2,
        marginRight: 2,
        marginBottom: 2,
        height: 50,
        paddingLeft: 5,
        color: 'red',
        height: 40,
        borderColor: 'gray', 
        borderWidth: 3,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default Recherche;