import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";
import { WebView } from 'react-native-webview';

export default function Logica({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
          <Image source={logoImg} />
        </View>
        <Text style={Style.title}>Python</Text>

         <View style={Style.body}>
            <View style={Style.player}>
                <WebView source={{ uri: 'https://www.youtube.com/watch?v=S9uPNppGsGo'}} allowsFullscreenVideo={true} />
            </View>            
        </View>

      </View>
    </View>
  );
}  
