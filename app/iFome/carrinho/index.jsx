import { Text ,FlatList } from "react-native";
import Bar from "../../../components/Bar";
import Entypo from '@expo/vector-icons/Entypo';


const Carrinho = () => {
    return(
    <>
        <Bar
        icon={<Entypo name="chevron-left" size={24} color="white" />}
        href={'/iFome'}
        Titulo={'Carrinho'}
        cor={'#E11515'}
    />
    </>
    )
}

export default Carrinho;