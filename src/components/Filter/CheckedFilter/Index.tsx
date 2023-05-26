import React, {useState, useEffect} from 'react';
import {  Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FilterElement } from '../../../models/FilterModel';
import { AntDesign } from '@expo/vector-icons';


interface FilterProps{
  filterChecked: FilterElement[],
  Color: string,
  OnInteract : (itemInteract : FilterElement) => void,
  OnClose : () => void
}

export const CheckedFilter : React.FC<FilterProps> = ( {filterChecked: filterAvaliable, OnInteract, OnClose, Color} : FilterProps) => {
    
    return (

        filterAvaliable.length > 0 ? 

        <View style={styles.container}>
            <TouchableOpacity style={[styles.close, {backgroundColor: Color}]} onPress={() =>{OnClose()}} >
                <AntDesign name={'close'} size={20} color={'#fff'}></AntDesign>
            </TouchableOpacity>

            <View style={styles.SelectItens}>
            {
                filterAvaliable.map( (item, index) => {
                
                    return (
                        <View key={item.FilterName}>
                            <TouchableOpacity onPress={() =>{OnInteract(item)}}>
                                <Text style={[ 
                                        index == filterAvaliable.length-1 ? styles.LastOption : styles.MiddleOption, 
                                        filterAvaliable.length > 1 ? {left: -11*index} : {left: 0},
                                        {backgroundColor: Color}
                                        ]}
                                >{item.FilterName}</Text>
                            </TouchableOpacity>
                        </View>
                    ) 
                })
            }  

            </View>
        
        </View>: <></>
    )
        
    
}

const styles = StyleSheet.create({
    MiddleOption:{
        
        color: '#fff',
        marginVertical: 5,
        paddingHorizontal: 12,
        paddingRight: 20,
        paddingVertical: 5,
        borderTopLeftRadius: 99,
        borderBottomLeftRadius: 99,
        shadowColor: '#000',
        shadowOffset: { width: -5, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 4,
        elevation: 8,
    },
    LastOption:{
        
        color: '#fff',
        marginVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 99,
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: -5, height: 0 },
        shadowOpacity: 2,
        shadowRadius: 4,
        elevation: 8,
    },
    container:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    close:{
        width: 30,
        height: 30,
        borderRadius: 99,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    SelectItens:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
    }
})
