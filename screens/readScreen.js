import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, ToastAndroid, Alert } from 'react-native';

export default class ReadScreen extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.titlePoster}>
                    <Text style={styles.title}>Story Hub</Text>
                </TouchableOpacity>
                <Text style = {styles.rand}>Read Screen</Text>
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
    rand: {
        fontWeight: 'bold',
        textAlignVertical: 'center',
        fontSize: 100,
        textAlign: 'center',
        marginTop: 100
    },
    titlePoster: {
        backgroundColor: 'pink',
        height: 75,
        textAlign: 'center',
    }
});
