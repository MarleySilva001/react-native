import { Text, View } from "react-native"
import Bar from "../../../components/Bar"
import Entypo from '@expo/vector-icons/Entypo';

const livroInfo = () => {
    return(
        <>
        <Bar 
        icon={<Entypo name="chevron-left" size={24} color="white" />}
        href={'/sobreMim/livro'}
        Titulo={'livro'}
        cor={'#00BF66'}
        />
        <View>
            <Text>livro</Text>
        </View>
        </>
    )
}

export default livroInfo