import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { getProducers } from '../../../services/getData';
import TitleBar from './titlebar';
import ProducerCard from './producerCard';
import { HeaderComponent } from '../../../components';

const ProducersSection = () => {
  
  const [title, setTitle] = useState("");
  const [producers, setProducers] = useState([]);

  const loadData = () => {
        const data = getProducers();
        setTitle(data.title);
        setProducers(data.list);
      }
    
  useEffect(()=>{
    loadData();
    },[]) 
    
  return (
    <FlatList
        data={producers}
        keyExtractor={({name})=> name}
        renderItem={({item })=> <ProducerCard {...item}/>}
        ListHeaderComponent={()=>{
        return <>
            <HeaderComponent/>
            <TitleBar title={title}/>
          </>
        }}
        />
  )
}

export default ProducersSection ;