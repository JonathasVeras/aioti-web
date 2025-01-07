"use client"

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

interface CardProps {
  data: Travel;
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
    <div className="p-6 bg-white dark:bg-black h-full text-black dark:text-white">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Dispositivo: {data.device.model}
        </h3>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Início:</span>{" "}
          {new Date(data.startTravel).toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Término:</span>{" "}
          {new Date(data.endTravel).toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-bold">Pontuação Total:</span> {data.totalScore}
        </p>
      </div>
    </div>
    
  );
};

export default Card;
