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
    <div className="p-6 dark:dark:bg-gray-700 h-full text-black dark:text-white rounded-xl">
      <div className="shadow-lg rounded-lg p-6 max-w-xs">
        <h3 className="text-lg font-semibold mb-2 dark:text-gray-300">
          Dispositivo: {data.device.model}
        </h3>
        <p className="text-sm">
          <span className="font-bold">Início:</span>{" "}
          {new Date(data.startTravel).toLocaleString()}
        </p>
        <p className="text-sm">
          <span className="font-bold">Término:</span>{" "}
          {new Date(data.endTravel).toLocaleString()}
        </p>
        <p className="text-sm">
          <span className="font-bold">Pontuação Total:</span> {data.totalScore}
        </p>
      </div>
    </div>
    
  );
};

export default Card;
