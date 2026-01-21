import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home from "../../pages/home/Home";
import AppStyle from "./AppStyle";
import { Text, View } from "react-native";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['top', 'bottom']} style={AppStyle.container}>
                <View style={AppStyle.appBar}>
                    <Text style={AppStyle.appBarTitle}>App Bar</Text>
                </View>
                
                <View style={AppStyle.main}>
                    <Home />
                </View>
                
                <View style={AppStyle.navBar}>
                    <Text style={AppStyle.navBarTitle}>Home</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}