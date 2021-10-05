import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { LogBox, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import {AntDesign} from '@expo/vector-icons';
import Player from './Player.js';

export default function App() {

  LogBox.ignoreAllLogs(true);

  const [audioIndex,setarAudioIndex] = useState(0);
  const [playing,setPlaying] = useState(false);
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
    },
    {
      nome: 'Musica 4',
      artista: 'Musica 4',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 5',
      artista: 'Musica 5',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 6',
      artista: 'Musica 6',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 7',
      artista: 'Musica 7',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 8',
      artista: 'Musica 8',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 9',
      artista: 'Musica 9',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 10',
      artista: 'Musica 10',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 11',
      artista: 'Musica 11',
      playing: false,
      file: require('./Musica.mp3')
    },
    {
      nome: 'Musica 12',
      artista: 'Musica 12',
      playing: false,
      file: require('./Musica.mp3')
    },

  ]);

  const changeMusic = async (id) =>{
    let curFile = null;
    let newMusics = musicas.filter((val,k)=>{
        if(id == k){
          musicas[k].playing = true;
          curFile = musicas[k].file;
          setPlaying(true);
          setarAudioIndex(id);
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
    <View style={{flex:1}}>
<ScrollView style={styles.container}>
  <StatusBar hidden/>
  <View style={styles.header}>
    <Text style={{textAlign:'center',color:'silver',fontSize:25}}>Música</Text></View>
    <View style={styles.table}>
      <Text style={{width:'50%',color:'silver'}}>Música</Text>
      <Text style={{width:'50%',color:'silver'}}>Artista</Text>
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
    <View style={{paddingBottom:200}}></View>
</ScrollView>
<Player playing={playing} setPlaying={setPlaying} setarAudioIndex={setarAudioIndex} audioIndex={audioIndex} musicas={musicas} setarMusicas={setarMusicas}
audio={audio} setarAudio={setarAudio}>

</Player>
</View>
  );
}
//CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c0505',
  
  },
  header:{
    backgroundColor:'#470000',
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
