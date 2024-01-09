export type WorkingHoursResponse = {
  id: number;
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
};

export type WorkingHoursRequest = {
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
};
