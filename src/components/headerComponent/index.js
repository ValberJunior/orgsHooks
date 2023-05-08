import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Logo from '../../assets/logo.png';
import styles from '../../styles/headerStyle';
import { getHeaderData } from '../../services/getData';

const HeaderComponent = () => {

  const [ headerData, setHeaderData ] = useState({title:"", subtitle:""});

  const loadData = () => {
    const data = getHeaderData();
    setHeaderData(data);
  }

  useEffect(()=>{
    loadData();
  },[])

  return (
    <View style={styles.top}>
      <Image source={Logo} style={styles.logo}/>
      <Text style={styles.title}>{headerData.title}</Text>
      <Text style={styles.subtitle}>{headerData.subtitle}</Text>
    </View>
  )
}

export default HeaderComponent