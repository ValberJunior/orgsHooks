import React, { useMemo, useReducer } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { StarsComponent } from '../../../../components';

const addMeasure= ( distance ) => {
  return `${distance}m`
}

const ProducerCard = ({name, image, distance, stars}) => {
  
  // Usando o useReducer ao invés do useState
  const [selected, reverseSelected] = useReducer(
    (selected)=> !selected , false
    );
  // Adicionando o useMemo
  const measuredDistance = useMemo(
    ()=> addMeasure(distance)
    ,[distance]);

  return (
    <TouchableOpacity style={styles.card} onPress={reverseSelected}>
        <Image source={image} accessibilityLabel={name} style={styles.icon}/>
        <View style={styles.details}>
            <View>
                <Text style={styles.name}>{ name }</Text>
                <StarsComponent feedback={stars} editable={selected} big={selected} />
            </View>
            <Text style={styles.distance}>{ measuredDistance }</Text>
        </View>     
    </TouchableOpacity>
  )
}

export default ProducerCard