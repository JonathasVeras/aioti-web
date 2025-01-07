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
      id: "3c4d5e6f7g8h",
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
      id: "4d5e6f7g8h9i",
      tenantId: "2b3c4d5e6f7g",
      device: { type: "smartphone", model: "OnePlus 9", vendor: "OnePlus" },
      startTravel: "2024-12-15T12:15:00Z",
      endTravel: "2024-12-15T13:00:00Z",
      totalScore: 84,
      brakingScore: 80,
      accelerationScore: 85,
      speedScore: 88,
      distractionsScore: 87,
      turnsScore: 83,
    },
    {
      id: "5e6f7g8h9i1j",
      tenantId: "3c4d5e6f7g8h",
      device: { type: "smartphone", model: "Xperia 1 III", vendor: "Sony" },
      startTravel: "2024-12-15T13:30:00Z",
      endTravel: "2024-12-15T14:00:00Z",
      totalScore: 92,
      brakingScore: 89,
      accelerationScore: 91,
      speedScore: 95,
      distractionsScore: 93,
      turnsScore: 90,
    },
    {
      id: "6f7g8h9i1j2k",
      tenantId: "4d5e6f7g8h9i",
      device: { type: "smartphone", model: "Motorola Edge 30", vendor: "Motorola" },
      startTravel: "2024-12-15T14:30:00Z",
      endTravel: "2024-12-15T15:15:00Z",
      totalScore: 90,
      brakingScore: 86,
      accelerationScore: 90,
      speedScore: 92,
      distractionsScore: 94,
      turnsScore: 88,
    },
    {
      id: "7g8h9i1j2k3l",
      tenantId: "5e6f7g8h9i1j",
      device: { type: "smartphone", model: "Huawei P40", vendor: "Huawei" },
      startTravel: "2024-12-15T15:30:00Z",
      endTravel: "2024-12-15T16:00:00Z",
      totalScore: 93,
      brakingScore: 90,
      accelerationScore: 92,
      speedScore: 94,
      distractionsScore: 95,
      turnsScore: 91,
    },
  ];
  