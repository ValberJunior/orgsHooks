import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Star from './star';

const StarsComponents = ({feedback : oldFeedback, editable, big }) => {

  const [starsNumber, setStarsNumber] = useState(oldFeedback);

  const RenderStars = () => {
    const starsList = [];
    for(let i = 0; i < 5; i++ ){
        starsList.push( 
        <Star 
          onPress={()=> setStarsNumber(i+1)}
          disabled={!editable}
          filled={i < starsNumber}
          big={big}
          key={i}
          />
           )
    }
    return starsList;
  }

  return (
    <View style={styles.starsBar}>
        <RenderStars/>
    </View>
  )
}

const styles =  StyleSheet.create({
    starsBar:{
        flexDirection: 'row',
        marginRight: 2
    }
})

export default StarsComponents