import React, { useEffect, useState } from 'react';
import {  Text, View, StyleSheet } from 'react-native';
import { FilterElement } from '../../models/FilterModel';
import {AvaliableFilter} from './AvalibleFilter/Index';
import { CheckedFilter } from './CheckedFilter/Index';
import { Ionicons } from '@expo/vector-icons';

var FavoriteFilter : FilterElement = {
  FilterName: 'Favorite',
  SubFilters: []
}

var MyPlaylistFilter : FilterElement = {
  FilterName: 'My Playlist',
  SubFilters: [FavoriteFilter]
}

var SpotifyPlaylistFilter : FilterElement = {
  FilterName: 'Spotify Playlist',
  SubFilters: []
}

var MusicFilter : FilterElement = {
  FilterName: 'Music',
  SubFilters: []
}

var PlayListFilter : FilterElement = {
  FilterName: 'Playlist',
  SubFilters: [MyPlaylistFilter, SpotifyPlaylistFilter]
}

var Filtros : FilterElement[] = [MusicFilter, PlayListFilter]
var Color : string = '#1ED760'

export default function Filter(){ 
  
  const [AvaliableItens, SetAvaliable] = useState(Filtros)

  var Empty: FilterElement[] = []
  const [checkedItens, SetChecked] = useState(Empty)
  

      return(
      <View style={styles.container}>
        <View style={styles.filterTitle}>
          <Ionicons name={'filter'} size={20} color={'#000'}></Ionicons>
          <Text>Filters</Text>
        </View>
        <View style={styles.filterView}>
          <CheckedFilter filterChecked={checkedItens} OnInteract={UncheckItem} OnClose={CloseAll} Color={Color}/>
          <AvaliableFilter filterAvaliable={AvaliableItens} OnInteract={CheckItem} Color={Color}/>
        </View> 
      </View>
        
      )

      function CheckItem(Item : FilterElement){

        checkedItens.push(Item)

        SetAvaliable(Item.SubFilters)
        SetChecked(checkedItens)
      }

      function UncheckItem(Item : FilterElement){
        RemoveSub(Item, checkedItens)

        var Parent = GetParent(Item, Filtros)

        SetAvaliable(Parent?.SubFilters ?? Filtros)
        SetChecked(checkedItens)
        
      }

      function CloseAll(){

        SetAvaliable(Filtros)

        SetChecked(Empty)
      }

      function RemoveSub(Item : FilterElement  ,Itens : FilterElement[]){
        if(Item != undefined){
          Item.SubFilters.map( (MapItem) => {
            const index = Itens.indexOf(MapItem);
            if (index > -1) 
              checkedItens.splice(index, 1); 

            RemoveSub(MapItem, Itens)
          })

          const index = Itens.indexOf(Item);
            if (index > -1) 
              checkedItens.splice(index, 1); 

        }
      }

      function GetParent(Item : FilterElement  ,Itens : FilterElement[]) : FilterElement | undefined{
        
        var Result : FilterElement | undefined = undefined;
        if(Itens != undefined){
          for(let MapItem of Itens) {
            if(MapItem.SubFilters.indexOf(Item) >= 0 && Result == undefined){
              Result = MapItem; 
              break
            }
            else{
              Result = GetParent(Item, MapItem.SubFilters)
            }
          }
        }
        
        return Result;
      }
}

const styles = StyleSheet.create({
  filterView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  container:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 12,
    gap: 10
  },
  filterTitle:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5
  }
})
                   
