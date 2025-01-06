"use client";
import React, { useEffect, useState } from "react";
import { mockData } from "./mockData";
import SimpleTable, { Column } from "@/components/Tables/SimpleTable/SimpleTable";

interface Travel {
  id: string;
  tenantId: string;
  device: {
    type: string;
    model: string;
    vendor: string;
  };
  startTravel: string;
  endTravel: string;
  totalScore: number;
  brakingScore: number;
  accelerationScore: number;
  speedScore: number;
  distractionsScore: number;
  turnsScore: number;
}

interface ExtendedTravel extends Travel {
  deviceInfo: string;
  startFormatted: string;
  endFormatted: string;
}

const Travels: React.FC = () => {
  const [travels, setTravels] = useState<ExtendedTravel[]>([]);
  const [filteredTravels, setFilteredTravels] = useState<ExtendedTravel[]>([]);
  const [SearchbarText, setSearchbarText] = useState<string>("");

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await new Promise<{ data: Travel[] }>((resolve) =>
          setTimeout(() => resolve({ data: mockData }), 1000)
        );
        const formattedTravels = response.data.map((travel) => ({
          ...travel,
          deviceInfo: `${travel.device.vendor} - ${travel.device.model}`,
          startFormatted: new Date(travel.startTravel).toLocaleString(),
          endFormatted: new Date(travel.endTravel).toLocaleString(),
        }));
        setTravels(formattedTravels);
        setFilteredTravels(formattedTravels);
      } catch (error) {
        console.error("Erro ao buscar viagens:", error);
      }
    };

    fetchTravels();
  }, []);

  useEffect(() => {
    const lowerSearchText = SearchbarText.toLowerCase();
    setFilteredTravels(
      travels.filter(
        (travel) =>
          travel.id.toLowerCase().includes(lowerSearchText) ||
          travel.deviceInfo.toLowerCase().includes(lowerSearchText) ||
          travel.startFormatted.toLowerCase().includes(lowerSearchText) ||
          travel.endFormatted.toLowerCase().includes(lowerSearchText)
      )
    );
  }, [SearchbarText, travels]);

  const columns: Column<ExtendedTravel>[] = [
    { header: "ID", accessor: "id" },
    { header: "Dispositivo", accessor: "deviceInfo" },
    { header: "Início", accessor: "startFormatted" },
    { header: "Término", accessor: "endFormatted" },
    { header: "Pontuação Total", accessor: "totalScore" },
  ];

  return (
    <SimpleTable
      title="Lista de Viagens"
      data={filteredTravels}
      columns={columns}
      setSearchbarText={setSearchbarText}
    />
  );
};

export default Travels;
