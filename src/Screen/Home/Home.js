import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import styles from './Styles';
import NaviagationStrings from '../../../Navigation/NaviagationStrings';

const Home = ({navigation , route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.carry}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>
                    MY TODO
                </Text>
            </View>


            <TouchableOpacity style={styles.next} onPress={()=>{
                navigation.navigate(NaviagationStrings.ADD_TASK)
                
            }} >
                <Image style={{ height: 100, width: 100 }} source={{ uri: 'https://thumbs.dreamstime.com/b/plus-button-icon-plus-button-icon-vector-illustration-105545139.jpg' }}/>
                </TouchableOpacity>
       </View>
    );
};
export default Home;
