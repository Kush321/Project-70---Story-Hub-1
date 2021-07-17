import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native';

export default class CreateScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            //text: ''
        }
    }

    render() {
        return (
            <View>
            <TouchableOpacity style = {styles.titlePoster}>
                <Text style = {styles.title}>Story Hub</Text>
            </TouchableOpacity>
            <View>
            <TextInput
              style={styles.titleBox}
              placeholder="Title">
            </TextInput>
            <TextInput
              style={styles.titleBox}
              placeholder="Author">
            </TextInput>
            <TextInput
              style={styles.bigBox}
              placeholder="Write Your Story"
              multiline={true}>
            </TextInput>
            <TouchableOpacity style = {styles.submitButton}>
                <Text style = {{marginTop: 15}}>Submit</Text>
            </TouchableOpacity>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 36,
        marginTop: 10
    },
    titlePoster: {
        backgroundColor: 'pink',
        height: 75,
        textAlign: 'center',
    },
    titleBox: { 
        width: 1000, 
        height: 40, 
        borderWidth: 1.5, 
        fontSize: 20, 
        alignSelf: 'center',
        marginTop: 50
    },
    bigBox: { 
        width: 1000, 
        height: 425, 
        borderWidth: 1.5, 
        fontSize: 20, 
        alignSelf: 'center',
        marginTop: 50,
    },
    submitButton: {
        backgroundColor: 'pink',
        width: 100,
        height: 50,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
        borderRadius: 25
    }
});
