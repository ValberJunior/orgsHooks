import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { StarsComponent } from '../../../../components';

const ProducerCard = ({name, image, distance, stars}) => {

  const [selected, setSelected] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={()=> setSelected(!selected)}>
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