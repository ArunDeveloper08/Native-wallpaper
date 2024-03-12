import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {inputTextWallpaper} from '../atoms/wallpaperinput';
import Navbar from './Navbar';

const Screen1 = ({navigation}) => {
  const access_key = 'cynOuKHCiAviKyqTgYEUDI1eXaSVyx-evykdNDtZN8E';
  const [input, setInput] = useRecoilState(inputTextWallpaper);
  const [imageCollection, setImageCollection] = useState([]);

  const getimagecollection = async () => {
    try {
      let data = await fetch(
        `https://api.unsplash.com/search/collections?page=1&query=${
          input || 'all'
        }&per_page=50&client_id=${access_key}`,
      );
      let jsondata = await data.json();
      setImageCollection(jsondata.results);
    } catch (error) {
      console.error('Error fetching image collection:', error);
    }
  };

  useEffect(() => {
    getimagecollection();
  }, [input]);

  const showWallpaper=(item)=>{
  
    navigation.navigate("S2", { selectedItem: `${JSON.stringify(item)}` })
  }

  return (
    <View style={styles.container}>
               <Navbar />
      <FlatList
        numColumns={2}
        data={imageCollection}
        keyExtractor={item => item?.id?.toString()}
        renderItem={({item}) => (
       <TouchableOpacity onPress={()=>showWallpaper(item?.cover_photo?.urls.regular)}>
           <View style={styles.imageContainer}>
            <Image
              source={{uri: item?.cover_photo?.urls.regular}}
              style={styles.image}
            />
          </View>
       </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,

    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    padding: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
