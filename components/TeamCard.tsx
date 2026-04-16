import {useRouter} from "expo-router";
import {Image, TouchableOpacity, StyleSheet, Text, View} from "react-native";
import {Team} from "../data/teams";

interface Props {
    //Datos del equipo para renderizar la tarjeta y construir la ruta al detalle
    team: Team;
}

export default function TeamCard({team}: Props) {
    const router = useRouter();

    return(
        <TouchableOpacity style={styles.card} onPress={() => router.push(`/team/${team.id}`)}>
            <Image source={team.logo} style={styles.logo} resizeMode="contain" />
            <View>
                <Text style={styles.name}>{team.name}</Text>
                <Text style={styles.city}>📍{team.city}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        margin:10,
        borderRadius: 8,
        padding: 10,
        elevation:3,
    },

    logo:{
        width: 60,
        height: 60,
        marginRight: 15,
    },

    name:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },

    city:{
        fontSize: 14,
        color: "#666",
    }
});