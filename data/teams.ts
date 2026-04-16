import { ImageSourcePropType } from "react-native";

export interface Team {
  id: string;
  name: string;
  city: string;
  estadio: string;
  titulos: string;
  logo: ImageSourcePropType;
}

export const teams: Team[] = [
    {
        id: "1",
        name: "Barcelona SC",
        city: "Guayaquil",
        estadio: "Estadio Monumental Isidro Romero Carbo",
        titulos: "3",
        logo: require("../assets/logos/barcelona.jpeg"),
    },

    {
        id: "2",
        name: "LDU",
        city: "Quito",
        estadio: "Estadio Rodrigo Paz Delgado",
        titulos: "1",
        logo: require("../assets/logos/ldu.jpeg"),
    },

    {
        id: "3",
        name: "Emelec",
        city: "Guayaquil",
        estadio: "Estadio George Capwell",
        titulos: "0",
        logo: require("../assets/logos/emelec.jpeg"),
    },

    {
        id: "4",
        name: "Independiente del Valle",
        city: "Sangolquí",
        estadio: "Estadio Banco Guayaquil",
        titulos: "0",
        logo: require("../assets/logos/independiente.png"),
    },

    {
        id: "5",
        name: "Ballenita",
        city: "Manta",
        estadio: "Estadio Jocay",
        titulos: "0",
        logo: require("../assets/logos/ballenita.avif"),
    }
];

    