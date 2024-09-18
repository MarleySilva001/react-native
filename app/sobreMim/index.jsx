import { ScrollView, StyleSheet, Text, View } from "react-native"
import ButtonSM from "./buttonSM"

const sobreMim = () => {
    return(
        <View>
            <Text>sobreMim</Text>
            <ButtonSM 
            href={"/musica"}
            text={"Albuns favoritos"}
            />
            <ButtonSM 
            href={"/sobreMim/2.desenho"}
            text={"Melhores desenhos"}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default sobreMim