"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { mockData } from "./mockData";
import SimpleTable, { Column } from "@/components/Tables/SimpleTable/SimpleTable";
import Card from "@/components/Cards/TravelCard/Card";
import { FaMagnifyingGlass } from "react-icons/fa6";

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
  const [listingType, setListingType] = useState<string>("table");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchbarText(e.target.value);
    };

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
    <>
      <div className="flex justify-center">
        <button
          className={`${
            listingType === "table" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-l-md`}
          onClick={() => setListingType("table")}
        >
          Tabela
        </button>
        <button
          className={`${
            listingType === "card" ? "bg-primary text-white" : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-r-md`}
          onClick={() => setListingType("card")}
        >
          Cartão
        </button>
      </div>
      {listingType === "table" ? (
        <SimpleTable
          title="Lista de Viagens"
          data={filteredTravels}
          columns={columns}
          setSearchbarText={setSearchbarText}
        />
      ) : (
        <div className="p-6 text-black">
          <h1 className=" text-2xl font-bold mb-4">Cards de Viagem</h1>
          <div className="flex items-center gap-2 w-[400px] mb-4">
            <input
              type="text"
              placeholder="Pesquise..."
              className="w-full p-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark dark:bg-black"
              onChange={handleSearchChange}
            />
            <FaMagnifyingGlass size={20}/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {filteredTravels.map((travel) => {
              console.log('Rendering travel:', travel);
              return <Card key={travel.id} data={travel} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Travels;
