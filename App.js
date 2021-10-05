import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import {AntDesign} from '@expo/vector-icons'
export default function App() {

  const [audio,setarAudio] = useState(null);

  const [musicas,setarMusicas] = useState([
    {
      nome: 'Twist and shout',
      artista: 'The Beatles',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 2',
      artista: 'Musica 2',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 3',
      artista: 'Musica 3',
      playing: false,
      file: require('./Musica.mp3')
    }
  ]);

  const changeMusic = async (id) =>{
    let curFile = null;
    let newMusics = musicas.filter(function(val,k){
        if(id == k){
          musicas[id].playing = true;
          curFile = musicas[k].file;
        }else{
          musicas[k].playing = false;
        }
        return musicas[k];
    })

if(audio != null){
  audio.unloadAsync();
}

    let curAudio = new Audio.Sound();

    try{
        await curAudio.loadAsync(curFile);
        await curAudio.playAsync();
    }catch(error){

    }
    setarAudio(curAudio);
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
