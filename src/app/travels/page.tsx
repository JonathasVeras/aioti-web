"use client";
import React, { useEffect, useState } from "react";
import { mockData } from "./mockData";
import SimpleTable from "@/components/Tables/SimpleTable/SimpleTable";

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

const Travels: React.FC = () => {
  const [travels, setTravels] = useState<Travel[]>([]);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await new Promise<{ data: Travel[] }>((resolve) =>
          setTimeout(() => resolve({ data: mockData }), 1000)
        );
        setTravels(response.data);
      } catch (error) {
        console.error("Erro ao buscar viagens:", error);
      }
    };

    fetchTravels();
  }, []);

  const columns = [
    { header: "ID", accessor: "id" },
    {
      header: "Dispositivo",
      accessor: "device",
      render: (value: Travel["device"]) => `${value.vendor} - ${value.model}`,
    },
    {
      header: "Início",
      accessor: "startTravel",
      render: (value: Travel["startTravel"]) => new Date(value).toLocaleString(),
    },
    {
      header: "Término",
      accessor: "endTravel",
      render: (value: Travel["endTravel"]) => new Date(value).toLocaleString(),
    },
    { header: "Pontuação Total", accessor: "totalScore" },
  ];

  return <SimpleTable title="Lista de Viagens" data={travels} columns={columns} />;
};

export default Travels;
