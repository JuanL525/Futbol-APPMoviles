import { Stack } from "expo-router";
import { FlatList, StyleSheet, View, SafeAreaView, ActivityIndicator, StatusBar, RefreshControl } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import TeamCard from "../components/TeamCard";
import { Team, teams } from "../data/teams";

export default function HomeScreen() {
    // Estados para manejar el equipo favorito y el estado de carga
    const [favoriteId, setFavoriteId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false); // Para el RefreshControl

    // Al montar la pantalla, cargamos el favorito guardado
    useEffect(() => {
        loadFavorite();
    }, []);

    const loadFavorite = async () => {
        try {
            const storedFavorite = await AsyncStorage.getItem('@favorite_team');
            if (storedFavorite !== null) {
                setFavoriteId(storedFavorite);
            }
        } catch (e) {
            console.error("Error al cargar favorito", e);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };


    const toggleFavorite = async (id: string) => {
        try {
            // Si ya era favorito, lo quitamos. Si no, lo asignamos.
            const newFavorite = favoriteId === id ? null : id;
            setFavoriteId(newFavorite);
            
            if (newFavorite) {
                await AsyncStorage.setItem('@favorite_team', newFavorite);
            } else {
                await AsyncStorage.removeItem('@favorite_team');
            }
        } catch (e) {
            console.error("Error al guardar favorito", e);
        }
    };

    // Función simulada para el componente RefreshControl
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    // Componente #3 Nuevo: ActivityIndicator (pantalla de carga)
    if (loading) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color="#62f81c" />
            </View>
        );
    }

    return(
        // Componente Nuevo: SafeAreaView
        <SafeAreaView style={styles.container}>
            {/* Componente #2 Nuevo: StatusBar */}
            <StatusBar barStyle="light-content"/>
            
            <Stack.Screen options={{title:"Equipos del Ecuador"}} />
            
            <FlatList<Team>
                data={teams}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TeamCard 
                        team={item} 
                        isFavorite={favoriteId === item.id}
                        onToggleFavorite={() => toggleFavorite(item.id)}
                    />
                )}
                contentContainerStyle={styles.list}
                // Componente #4 Nuevo: RefreshControl
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    list:{
        paddingVertical: 10,
    }
});