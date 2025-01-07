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
      id: "2b3c4d5e6f7g",
      tenantId: "1a2b3c4d756f",
      device: { type: "smartphone", model: "Pixel 7", vendor: "Google" },
      startTravel: "2024-12-15T09:00:00Z",
      endTravel: "2024-12-15T09:45:00Z",
      totalScore: 91,
      brakingScore: 85,
      accelerationScore: 88,
      speedScore: 92,
      distractionsScore: 94,
      turnsScore: 89,
    },
    {
      id: "6f5e4d3c2b2a",
      tenantId: "1a2b3c4d756f",
      device: { type: "tablet", model: "Galaxy Tab S8", vendor: "Samsung" },
      startTravel: "2024-12-15T11:00:00Z",
      endTravel: "2024-12-15T12:00:00Z",
      totalScore: 87,
      brakingScore: 82,
      accelerationScore: 84,
      speedScore: 89,
      distractionsScore: 91,
      turnsScore: 88,
    },
    {
      id: "6f5e4d3c2b3a",
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
      id: "6f5e4d3c2b4a",
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
      id: "6f5e4d3c2b5a",
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
      id: "6f5e4d3c2b6a",
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
  