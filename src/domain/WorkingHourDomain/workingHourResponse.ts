export type WorkingHourResponse = {
  id: number;
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
};

export type WorkingHourRequest = {
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
};
