import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Texto from '../componentes/Texto';

import topo from '../../assets/icon.png'
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";

const width = Dimensions.get('screen').width;


export default function Login(){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}> Login </Texto> 
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
});