import { useNavigation } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useState } from "react";
import { Image, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Cadastro from './Cadastro';
import { styles } from './estilosCadastroInd';
import { ParametrosTelas } from './ParametrosTelas';

export default function CadastroIndustria() {
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <TouchableOpacity style={styles.container} onPress={()=>{ navigation.navigate("PrimeiroAcesso" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/arrowLeft.png")}/>  
                </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Cadastro da Indústria</Texto> 
                </View>
            </View>



            <View style={styles.conteudo}>

                <View style={styles.campo}>
                    <Texto>Nome da Indústria</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        style={styles.input}
                        placeholder="Digite o nome da insústria"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto>Razão Social</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        style={styles.input}
                        placeholder="Digite a razão social"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto>CNPJ</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        style={styles.input}
                        placeholder="Digite o CNPJ"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto>E-mail</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        style={styles.input}
                        placeholder="Digite o e-mail"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto>CEP</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>
                <View style={styles.inputArea}>
                        <TextInput
                        style={styles.input}
                        placeholder="Digite o CEP da indústria"
                        />
                </View>  

                <View style={styles.campo}>
                    <Texto>Senha</Texto>
                    <Texto style={{color: 'red'}}> *</Texto>
                </View>

                    <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        value={input}
                        onChangeText={(texto) => setInput(texto)}
                        secureTextEntry={hidePass}
                        />

                        <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}/>

                    </View> 
                    
                    <Texto style={{fontSize:11, marginLeft: 40, color: 'red'}}>Mínimo 8 caracteres</Texto>

            </View>



            <View style={styles.botaoCentro}>

                <TouchableOpacity style={styles.botaoArea}onPress={()=>{ navigation.navigate("CadastroColetor" as never)}}>
                    <Texto style={styles.botao}>PRONTO</Texto>
                </TouchableOpacity>

                <Texto style={{marginTop: 15, fontSize:11}}>Por registro, eu concordo com os</Texto>
                <View style={{flexDirection: 'row'}}>
                    <Texto style={styles.textoUnderline}>Termos e Condições</Texto>
                    <Texto style={{fontSize:11, color:`black`}}> e </Texto>
                    <Texto style={styles.textoUnderline}>Política de Privacidade</Texto>
                </View>

            </View>     



        </View>
        );
    }