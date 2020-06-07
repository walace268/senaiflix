import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";
import { WebView } from 'react-native-webview';

export default function Desenvolvimento1({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
          <Image source={logoImg} />
        </View>
        <Text style={Style.title}>Desenvolvimento de Sistemas 1</Text>

        <View style={Style.body}>
            <View style={Style.player}>
                <WebView source={{ uri: 'https://www.youtube.com/watch?v=F7KzJ7e6EAc'}} allowsFullscreenVideo={true} />
            </View>            
        </View>

      </View>
    </View>
  );
}  
