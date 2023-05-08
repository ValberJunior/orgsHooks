import React from 'react'
import { FlatList } from 'react-native'
import TitleBar from './titlebar';
import ProducerCard from './producerCard';
import { HeaderComponent } from '../../../components';
import useProducers from '../../../hooks/useProducers';

const ProducersSection = () => {

  const [ title, producers ] = useProducers();
    
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