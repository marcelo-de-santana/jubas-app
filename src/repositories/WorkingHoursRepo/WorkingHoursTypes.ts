export type WorkingHoursResponseDTO = {
  id: number;
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
};

export type WorkingHoursRequestDTO = {
  id?: number;
  startTime?: string;
  startInterval?: string;
  endInterval?: string;
  endTime?: string;
};
