import {useRouter} from "expo-router";
import {Image, TouchableOpacity, StyleSheet, Text, View, Switch} from "react-native";
import {Team} from "../data/teams";

interface Props {
    team: Team;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

export default function TeamCard({team, isFavorite, onToggleFavorite}: Props) {
    const router = useRouter();

    return(
        <TouchableOpacity 
            // Si es favorito, le añadimos un borde resaltado
            style={[styles.card, isFavorite && styles.favoriteCard]} 
            onPress={() => router.push(`/team/${team.id}`)}
        >
            <Image source={team.logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{team.name}</Text>
                <Text style={styles.city}>📍 {team.city}</Text>
                
                {/* AGREGANDO LOS NUEVOS CAMPOS */}
                <Text style={styles.details}>🏟️ {team.estadio}</Text>
                <Text style={styles.details}>🏆 Títulos: {team.titulos}</Text>
            </View>

            <View style={styles.favoriteContainer}>
                <Text style={styles.favoriteText}>Fav</Text>
                {/* Componente #5 Nuevo: Switch */}
                <Switch
                    value={isFavorite}
                    onValueChange={onToggleFavorite}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isFavorite ? "#f5dd4b" : "#f4f3f4"}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 8,
        padding: 10,
        elevation: 3,
        // Sombra para iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    favoriteCard: {
        borderColor: '#f5dd4b',
        borderWidth: 2,
        backgroundColor: '#fffdf0', // Un fondo un poco más cálido para el favorito
    },
    logo:{
        width: 65,
        height: 65,
        marginRight: 15,
        borderRadius: 32.5,
    },
    infoContainer: {
        flex: 1, // Toma todo el espacio disponible empujando el switch a la derecha
    },
    name:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 2,
    },
    city:{
        fontSize: 14,
        color: "#666",
        marginBottom: 4,
    },
    details: {
        fontSize: 13,
        color: "#444",
        marginTop: 2,
    },
    favoriteContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    favoriteText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 2,
    }
});