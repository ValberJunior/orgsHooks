import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import FilledStar from '../../../assets/estrela.png';
import UnFilledStar from '../../../assets/estrelaCinza.png';


const Star = ({onPress, disabled, filled, big = false}) => {
  
  const getImage = ()=>{
    if(filled) return FilledStar;
    return UnFilledStar;
  }

  const styles = stylesFC(big);

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
    <Image source={getImage()} style={styles.icon}/>
    </TouchableOpacity>
  )
}

const stylesFC = (big)=> StyleSheet.create({
    icon:{
        width: big ? 36 : 12,
        height: big ? 36 : 12
    }
})


export default Star