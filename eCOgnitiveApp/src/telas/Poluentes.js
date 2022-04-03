import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png'
import iconAlimento from '../../assets/alimentos.png'
import iconMecanica from '../../assets/mecanica.png'
import iconQuimica from '../../assets/quimica.png'
import iconObras from '../../assets/obras.png'






const width = Dimensions.get('screen').width;

export default function Poluentes(){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>   </Text>

    <View style={estilos.box}>
        <Text style={estilos.sobre}>Sobre</Text>
        <Text style={estilos.descricao}>O eCOgnitive é uma aplicação que visa disponibilizar gráficos representando os percentuais de emissão de poluentes emitidos na atmosfera através das indústrias.</Text>

        <Text style={estilos.principais}>Principais Indústrias</Text>

    <View style={estilos.industriaAlinhamento}>
         <Text style={estilos.industriaNome}>Alimentos</Text>
         <Image style={estilos.industriaLogo} source={iconAlimento}/>       
    </View>
    <Text style={estilos.industriaDEsc}>São em maior parte resíduos de animais e vegetais: carne, ossos, pelos, fibras vegetais, etc</Text>

    <View style={estilos.industriaAlinhamento}>
        <Text style={estilos.industriaNome}>Mecânica</Text>
         <Image style={estilos.industriaLogo} source={iconMecanica}/>        
    </View>
    <Text style={estilos.industriaDEsc}>A indústria mecânica é a maior emissora de poluentes, sendo responsável por 73,67% das emissões.</Text>

    <View style={estilos.industriaAlinhamento}>
        <Text style={estilos.industriaNome}>Química</Text>
         <Image style={estilos.industriaLogo} source={iconQuimica}/>        
    </View>
    <Text style={estilos.industriaDEsc}>Os resultados provenientes da contaminação química podem aparecer de forma imediata ou posteriormente, isso depende do tipo do poluente.</Text>

    <View style={estilos.industriaAlinhamento}>
        <Text style={estilos.industriaNome}>Obras Civis</Text>
         <Image style={estilos.industriaLogo} source={iconObras}/>        
    </View>
    <Text style={estilos.industriaDEsc}>Estima-se que os resíduos de construção e demolição representem de 51% à 70% dos sólidos urbanos que, se mal gerenciados, degradam o meio ambiente.</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },

    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 17,
        lineHeight: 26,
        color: `#fffaf0`,
        fontWeight: "bold",
        padding: 16,
    },

    box: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    sobre: {
        fontSize: 20,
        lineHeight: 42,
        fontWeight: "bold",
    },

    descricao: {
        paddingVertical: 5,
        color: "#A3A3A3",
    },

    principais: {
        fontSize: 18,
        fontWeight:"bold",
        color: `#2e8b57`,
        textAlign: "center",
        },

    industriaNome: {
        fontSize: 16,
        lineHeight: 30,
        fontWeight: "bold",
        color:`#3cb371`,
    },

    industriaDEsc: {
        color: "#A3A3A3",
    },

    industriaLogo: {
        width: 25,
        height: 25,
    },

    industriaAlinhamento: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 3,
    }
});