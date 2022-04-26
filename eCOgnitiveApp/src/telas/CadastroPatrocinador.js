import React, { useState } from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity, View, TextInput, Button } from 'react-native';
import Texto from '../componentes/Texto';
import { Ionicons} from '@expo/vector-icons';


import setaEsquerda from '../../assets/arrowLeft.png'

export default function CadastroPatrocinador(){

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);

    return <>
    <View style={estilos.container}>
        <View style={estilos.topo}>
            <Image style={estilos.setaEsquerda} source={setaEsquerda}/>  
            <View>
                <Texto style={estilos.userTexto}>Cadastro do Patrocinador</Texto> 
            </View>
        </View>

        <View style={estilos.conteudo}>

            <View style={estilos.campo}>
                <Texto>Nome do Patrocinador</Texto>
                <Texto style={{color: 'red'}}> *</Texto>
            </View>
            <View style={estilos.inputArea}>
                    <TextInput
                    style={estilos.input}
                    placeholder="Digite o nome do patrocinador"
                    />
            </View>  
            
            <View style={estilos.campo}>
                <Texto>Razão Social</Texto>
                <Texto style={{color: 'red'}}> *</Texto>
            </View>
            <View style={estilos.inputArea}>
                    <TextInput
                    style={estilos.input}
                    placeholder="Digite a razão social"
                    />
            </View>  

            <View style={estilos.campo}>
                <Texto>CNPJ</Texto>
                <Texto style={{color: 'red'}}> *</Texto>
            </View>
            <View style={estilos.inputArea}>
                    <TextInput
                    style={estilos.input}
                    placeholder="Digite o CNPJ"
                    />
            </View>  

            <View style={estilos.campo}>
                <Texto>E-mail</Texto>
                <Texto style={{color: 'red'}}> *</Texto>
            </View>
            <View style={estilos.inputArea}>
                    <TextInput
                    style={estilos.input}
                    placeholder="Digite o e-mail"
                    />
            </View>  

            <View style={estilos.campo}>
                <Texto>Senha</Texto>
                <Texto style={{color: 'red'}}> *</Texto>
            </View>

                <View style={estilos.inputArea}>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite sua senha"
                    value={input}
                    onChangeText={(texto) => setInput(texto)}
                    secureTextEntry={hidePass}
                    />

                    <TouchableOpacity style={estilos.icon} onPress={() => setHidePass(!hidePass)}>
                        { hidePass ?
                            <Ionicons name="eye" size={20}/>
                            :
                            <Ionicons name="eye-off" size={20}/>
                        }
                </TouchableOpacity>
                </View> 
                <Texto style={{fontSize:11, marginLeft: 40, color: 'red'}}>Mínimo 8 caracteres</Texto>

        </View>

        <View style={estilos.botaoCentro}>
            <TouchableOpacity style={estilos.botaoArea}>
                <Texto style={estilos.botao}>PRONTO</Texto>
            </TouchableOpacity>

            <Texto style={{marginTop: 15, fontSize:11}}>Por registro, eu concordo com os</Texto>
            <View style={{flexDirection: 'row'}}>
                <Texto style={estilos.textoUnderline}>Termos e Condições</Texto>
                <Texto style={{fontSize:11, color:`black`}}> e </Texto>
                <Texto style={estilos.textoUnderline}>Política de Privacidade</Texto>
            </View>
        </View>                                 
    </View>
    </>
}

const estilos = StyleSheet.create({
    container: {
        height: "100%",
    },

    topo: {
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
    },

    setaEsquerda: {
        width: 30,
        height: 30,
        marginLeft: 30,

    },

    userTexto: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
        color:`#2e8b57`,
    },

    campo: {
        flexDirection: 'row',
        marginLeft: 30,
        marginTop: 15,
    },

    inputArea: {
        flexDirection: 'row',
        width: '98%',
        alignItems: 'center',
        alignItems: 'center',
        marginLeft: 35,
        
    },

    input: {
        borderWidth: 0.2,
        borderRadius:2,
        opacity: 2,
        width: "85%",
        height: 45,
        padding: 8,       
    },
    icon: {
        position: 'absolute',
        marginLeft: 290,
        width: "15%",
    },
    conteudo: {
        marginTop: 25,
    },

    botaoArea: {
        display: 'flex',
        width: "50%",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        height: 50,
        backgroundColor:`#2A9F85`,
        borderRadius: 5,  
        elevation: 2,
    },

    botao: {
        fontWeight: "bold",
        color: '#f5fffa',
    },
    botaoCentro: {
        alignItems: 'center',
    },

    textoUnderline: {
        textDecorationLine: 'underline',
        fontSize:11,
        color:`#2e8b57`
    },

  
}); 