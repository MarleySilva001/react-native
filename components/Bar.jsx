import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MdHome } from "react-icons/md";
import { Link } from "expo-router";

const Bar = ({ Titulo, href, icon }) => {
    return (
        <View style={styles.bar}>
            <Link href={href}>
                <View>
                {React.cloneElement(icon, { style: styles.icon })}
                </View>
            </Link>
            <Text style={styles.titulo}>{Titulo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#00BF66',
        paddingVertical: 10,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulo: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        width: '100%',
        textAlign: 'center'
    },
    icon: {
        color: 'white',
        fontSize: 24,

    }
})

export default Bar;