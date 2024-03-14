export interface WorkingHourCreateRequest {
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
}

export interface WorkingHourUpdateRequest {
  id: string;
  startTime: string;
  startInterval: string;
  endInterval: string;
  endTime: string;
}
