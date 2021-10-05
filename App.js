import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import {AntDesign} from '@expo/vector-icons'
export default function App() {

  const [audio,setarAudio] = useState(null);

  const [musicas,setarMusicas] = useState([
    {
      nome: 'Sweet child of mine',
      artista: 'Guns N Roses',
      playing: true,
      file: ''
    },
    {
      nome: 'Welcome to the jungle',
      artista: 'Guns N Roses',
      playing: false,
      file: ''
    },
    {
      nome: 'This Love',
      artista: 'Maroon 5',
      playing: false,
      file: ''
    }
  ]);

  const changeMusic = (id) =>{
    let newMusics = musicas.filter(function(val,k){
        if(id == k){
          musicas[id].playing = true;
        }else{
          musicas[k].playing = false;
        }
        return musicas[k];
    })
    setarMusicas(newMusics);
  }

  return (
<ScrollView style={styles.container}>
  <StatusBar hidden/>
  <View style={styles.header}>
    <Text style={{textAlign:'center',color:'white',fontSize:25}}>Musica</Text></View>
    <View style={styles.table}>
      <Text style={{width:'50%',color:'rgb(200,200,200)'}}>Música</Text>
      <Text style={{width:'50%',color:'rgb(200,200,200)'}}>Artista</Text>
    </View>

    {
      musicas.map(function(val,k){
        if(val.playing){
          return(
          <View style={styles.table}>
            <TouchableOpacity onPress={()=>changeMusic(k)} style={{width:'100%',flexDirection:'row'}}>
              <Text style={styles.tableTextSelect}><AntDesign name="play" size={15} color="black"/> {val.nome}</Text>
              <Text style={styles.tableTextSelect}>{val.artista}</Text>
            </TouchableOpacity>
          </View>);
        }else{
          return(
            <View style={styles.table}>
            <TouchableOpacity onPress={()=>changeMusic(k)} style={{width:'100%',flexDirection:'row'}}>
              <Text style={styles.tableText}><AntDesign name="play" size={15} color="white"/> {val.nome}</Text>
              <Text style={styles.tableText}>{val.artista}</Text>
            </TouchableOpacity>
          </View>);
        }
      })
    }
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91ab00',
  
  },
  header:{
    backgroundColor:'#09afb5',
    width:'100%',
    padding:20
  },
  table:{
    flexDirection:'row',
    padding:20,
    borderBottomColor:'white',
    borderBottomWidth:1
  },
  tableTextSelect:{
    width:'50%',
    color:'black'
  },
  tableText:{
    width:'50%',
    color:'white'
  }
});
