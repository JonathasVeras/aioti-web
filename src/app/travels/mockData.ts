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
  
export const mockData: Travel[] = [
    {
      id: "1a2b3c4d5e6f",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "iPhone 13", vendor: "Apple" },
      startTravel: "2024-12-15T08:30:00Z",
      endTravel: "2024-12-15T09:15:00Z",
      totalScore: 95,
      brakingScore: 92,
      accelerationScore: 94,
      speedScore: 96,
      distractionsScore: 98,
      turnsScore: 90,
    },
    {
      id: "6f5e4d3c2b1a",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "Galaxy S22", vendor: "Samsung" },
      startTravel: "2024-12-15T10:00:00Z",
      endTravel: "2024-12-15T11:00:00Z",
      totalScore: 89,
      brakingScore: 87,
      accelerationScore: 88,
      speedScore: 85,
      distractionsScore: 91,
      turnsScore: 86,
    },
    {
      id: "6f5e4d3c2b1a",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "Galaxy S22", vendor: "Samsung" },
      startTravel: "2024-12-15T10:00:00Z",
      endTravel: "2024-12-15T11:00:00Z",
      totalScore: 89,
      brakingScore: 87,
      accelerationScore: 88,
      speedScore: 85,
      distractionsScore: 91,
      turnsScore: 86,
    },
    {
      id: "6f5e4d3c2b1a",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "Galaxy S22", vendor: "Samsung" },
      startTravel: "2024-12-15T10:00:00Z",
      endTravel: "2024-12-15T11:00:00Z",
      totalScore: 89,
      brakingScore: 87,
      accelerationScore: 88,
      speedScore: 85,
      distractionsScore: 91,
      turnsScore: 86,
    },
    {
      id: "6f5e4d3c2b1a",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "Galaxy S22", vendor: "Samsung" },
      startTravel: "2024-12-15T10:00:00Z",
      endTravel: "2024-12-15T11:00:00Z",
      totalScore: 89,
      brakingScore: 87,
      accelerationScore: 88,
      speedScore: 85,
      distractionsScore: 91,
      turnsScore: 86,
    },
    {
      id: "6f5e4d3c2b1a",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "Galaxy S22", vendor: "Samsung" },
      startTravel: "2024-12-15T10:00:00Z",
      endTravel: "2024-12-15T11:00:00Z",
      totalScore: 89,
      brakingScore: 87,
      accelerationScore: 88,
      speedScore: 85,
      distractionsScore: 91,
      turnsScore: 86,
    },
    {
      id: "6f5e4d3c2b1a",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "Galaxy S22", vendor: "Samsung" },
      startTravel: "2024-12-15T10:00:00Z",
      endTravel: "2024-12-15T11:00:00Z",
      totalScore: 89,
      brakingScore: 87,
      accelerationScore: 88,
      speedScore: 85,
      distractionsScore: 91,
      turnsScore: 86,
    },
  ];