import React, { useState } from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import logo from '../assets/searchIcon.png';
import { inputTextWallpaper } from '../atoms/wallpaperinput';
import { useRecoilState } from 'recoil';

const Navbar = () => {
  const [input , setInput]= useRecoilState(inputTextWallpaper);

  return (
    <View style={styles.container}>
      <View style={styles.searchcount} >
        <Image source={logo} alt="searchIcon"  style={styles.icon} />
        <TextInput 
        placeholder='Search Theme...'
         style={styles.searchinput}
        onChangeText={(text) => setInput(text)}
        // value={input} 
        />
       
      </View>
    </View>
  );
};
export default Navbar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },
  icon:{
    height:30,
    width:30,
  },
  searchcount:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#fff",
    elevation:10,
    paddingHorizontal:5,
    width:"80%",
    borderRadius:5
  },
  searchinput:{
    width:"90%",
    paddingLeft:10,
    fontSize:20
  }
});
