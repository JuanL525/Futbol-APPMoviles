import { Stack } from "expo-router";
import { FlatList,StyleSheet, View } from "react-native";
import TeamCard from "../components/TeamCard";
import { Team,teams } from "../data/teams";

export default function HomeScreen() {
    return(
        <View style={styles.container}>
            {/*Configura el titulo de la pantalla en el header */}
            <Stack.Screen options={{title:"Equipos del Ecuador"}} />
            <FlatList<Team>
                //Fuente de datos para renderizar cada tarjeta 
                data={teams}
                //Usa el id unico de cada equipo como clave de lista
                keyExtractor={(item) => item.id}
                //Renderiza una tarjeta por cada equipo usando el componente TeamCard
                renderItem={({item}) => <TeamCard team={item}/>}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    //Contenedor base de la pantalla
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    //Espaciado vertical interno de la lista
    list:{
        paddingVertical: 10,
    }
});