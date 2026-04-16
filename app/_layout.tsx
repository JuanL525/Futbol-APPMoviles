import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
              //Estilo del encabezado para toda la aplicación
              headerStyle: { backgroundColor: "#1a1a2e" },
              //Color del texto del encabezado
              headerTintColor: "#FFD700",
              //Estilo del título del encabezado
              headerTitleStyle: { fontWeight: "bold" },
            }}
        />
    );
}
