import React, { useReducer } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { StarsComponent } from '../../../../components';

const ProducerCard = ({name, image, distance, stars}) => {
  
  // Usando o useReducer ao invés do useState
  const [selected, reverseSelected] = useReducer(
    (selected)=> !selected , false
    );

  return (
    <TouchableOpacity style={styles.card} onPress={reverseSelected}>
        <Image source={image} accessibilityLabel={name} style={styles.icon}/>
        <View style={styles.details}>
            <View>
                <Text style={styles.name}>{ name }</Text>
                <StarsComponent feedback={stars} editable={selected} big={selected} />
            </View>
            <Text style={styles.distance}>{ distance }</Text>
        </View>     
    </TouchableOpacity>
  )
}

export default ProducerCard