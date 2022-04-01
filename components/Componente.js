import React from "react";
import {StyleSheet, Text} from "react-native";

export default function Componente(props){
    return(
        <>
            <Text style={style.texto}>
                Nome: {props.nome}
                Idade: {props.idade}
            </Text>
        </>
    );
}

const style = StyleSheet.create({
    texto: {
        fontSize: 40,
    }
});