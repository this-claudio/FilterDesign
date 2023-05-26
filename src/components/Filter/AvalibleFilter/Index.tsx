import React, {useState, useEffect} from 'react';
import {  Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FilterElement } from '../../../models/FilterModel';

interface FilterProps{
  filterAvaliable: FilterElement[],
  Color: string,
  OnInteract : (ItemInteract : FilterElement) => void
}

export const AvaliableFilter : React.FC<FilterProps> = ( {filterAvaliable, OnInteract} : FilterProps) => {
    
    return (
        <View style={styles.container}>
        {
            filterAvaliable.map( (item, index) => {
               
                return (
                    <View key={item.FilterName}>
                        <TouchableOpacity onPress={() =>{OnInteract(item)}}>
                            <Text style={[styles.FilterOption]}>{item.FilterName}</Text>
                        </TouchableOpacity>
                    </View>
                ) 
            })

        }  
        </View>            
    )
}
const styles = StyleSheet.create({
    FilterOption:{
        // backgroundColor: '#F4FFF3',
        marginHorizontal: 5,
        marginVertical: 5,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 99
    },
    container:{
        flexDirection: 'row',
    }
})
