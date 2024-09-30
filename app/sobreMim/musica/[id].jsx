import { Text, View } from "react-native"
import Bar from "../../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';

const musicaInfo = () => {
    return(
        <>
        <Bar 
        icon={<Entypo name="chevron-left" size={24} color="white" />}
        href={'/sobreMim/musica'}
        Titulo={'musica'}
        cor={'#00BF66'}
        />
        <View>
            <Text>Musica</Text>
        </View> 
        </>
    )
}

export default musicaInfo