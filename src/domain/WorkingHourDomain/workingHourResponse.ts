export type WorkingHourResponse = {
  id: string;
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
