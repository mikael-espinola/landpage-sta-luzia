import { useJsApiLoader } from "@react-google-maps/api";
import { ReactNode } from "react";

const libraries: ("places" | "geometry" | "drawing")[] = [
  "places",
  "geometry",
  "drawing",
];

interface MapProviderProps {
  children: ReactNode;
}

export function MapProvider({ children }: MapProviderProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || "",
    libraries,
  });

  if (loadError) return <p>Erro ao carregar o Google Maps</p>;
  if (!isLoaded) return <p>Carregando o mapa...</p>;

  return <>{children}</>;
}
