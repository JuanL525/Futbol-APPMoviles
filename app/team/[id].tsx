import { Stack, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View} from "react-native";
import {teams} from "../../data/teams";

export default function TeamDetailScreen() {
    const {id} = useLocalSearchParams<{id:string}>();
    const team = teams.find((t) => t.id === id);

    if (!team) {
        return (
            <View style={styles.container}>
                <Text>Equipo no encontrado</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: team.name }} />
            <Image source={team.logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.name}>{team.name}</Text>
            <Text style={styles.city}>📍{team.city}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    //Contenedor principal centrado para la pantalla de detalle del equipo
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
    },
    //Variante centrada usada en el estado de equipo no encontrado
    center:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    //Tamaño del esucdo/logo en la vista de detalle del equipo
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    //Estilo destacado para el nombre del equipo en la vista de detalle
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    //Estilo secundario para mostrar la ciudad
    city: {
        fontSize: 18,
        color: "#666",
    },
});