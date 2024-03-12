import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'

const Screen2 = ({route}) => {
    const { selectedItem } = route.params;
    const[image , setImage] = useState("");
    console.log(image)

    useEffect(()=>{
        setImage(JSON.parse(selectedItem))
    },[])
 
  return (
    <View >
        
              {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%" , objectFit:"contain"}} />}
        
      
    </View>
  )
}

export default Screen2;