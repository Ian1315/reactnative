import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

class CoursItem extends React.Component{
    render() {
        const {unCours, afficheDetailsCours } = this.props
        return (
            /* en ligne */

            <TouchableOpacity style={styles.main_container} onPress={() => afficheDetailsCours(unCours.id,unCours.titre,unCours.images,unCours.description,unCours.prof)}>
                <View style={styles.colone}> 
                    <Image style={styles.image} source={{uri: unCours.images}}/>
                </View>

                <View style={styles.colone}>
                    <Text style={styles.title_text}> {unCours.titre} </Text>
                    <Text numberOfLines={2} style={styles.description_text}> {unCours.description} </Text>
                    <Text style={styles.prof}> {unCours.prof} </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 150,
        flex: 1,
        flexDirection: "row",
        margin : 20
    },
    title_text: {
        fontWeight: "bold",
        margin : 5,
        backgroundColor:"skyblue"
    },
    description_text: {
        margin : 5,
        fontFamily: 'Cochin'

    },
    prof: {
        textAlign: "right",
        margin : 5,
        backgroundColor:"steelblue"
    },
    image: {
        width: 150,
        height: 150
    },
    colone: {
        flex:2
    }
    

})

export default CoursItem;