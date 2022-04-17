import React, { useState } from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity, View, TextInput, Button } from 'react-native';
import Texto from '../componentes/Texto';

import setaEsquerda from '../../assets/arrowLeft.png'
import user from '../../assets/User.png'
import primeiroAcesso from '../../assets/primeiroAcesso1.png'
import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";




export default function PrimeiroAcesso(){
    return <>
    <View style={estilos.container}>
        <View>
        <Image style={estilos.userIcon} source={user}/>
        </View>

         <View style={estilos.topo}>
            <Image style={estilos.setaEsquerda} source={setaEsquerda}/>  

            <View style={estilos.user}>
                <Texto style={estilos.userTexto}>Primeiro Acesso</Texto> 
            </View>
        </View>

        <View style={estilos.meioEspaco}>
            <View style={estilos.meio}>
                <Image style={estilos.primeiroAcesso} source={primeiroAcesso}/>
            </View>

            <View style={estilos.meio}>
                <Texto style={estilos.perfilTexto}>Selecione o tipo de perfil</Texto>

            </View>
        </View>

        <View style={estilos.botaoArea}>

            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.botaoTexto}>PATROCINADOR</Texto>
            </TouchableOpacity>

            <TouchableOpacity style={estilos.botao}>
                <Texto style={estilos.botaoTexto}>INDÚSTRIA</Texto>
            </TouchableOpacity>
        </View>


        
        
    </View>


    </>
}

const estilos = StyleSheet.create({
    container: {
    },

    topo: {
        flexDirection: 'row',

    },

    meio: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    perfilTexto: {
        color:`#2e8b57`,
        fontWeight: 'bold',
        marginTop: 50,
    },

    userTexto: {
        fontSize: 20,
        marginLeft: 60,
        marginTop: 10,
    },

    setaEsquerda: {
        width: 25,
        height: 25,
        marginLeft: 30,
        marginTop: 10,
        },

    userIcon: {
        width: 30,
        height: 30,
        marginLeft: 180,
        marginTop: 15,
    },

    primeiroAcesso:{
        width: 246,
        height: 159,
        alignContent: 'center',
        marginTop: 50,


    },

    meioEspaco: {
        marginTop: 20,
    },

    botao: {
        width: "70%",
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 30,
        height: 50,
        backgroundColor:`#2A9F85`,
        borderRadius: 5,  
        elevation: 2,
    },

    botaoTexto: {
        fontWeight: "bold",
        color: '#f5fffa',
    },

    botaoArea: {
        marginLeft: 90,

    },
    
    
    
}); 