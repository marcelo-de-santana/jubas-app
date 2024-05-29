export enum QueryKeys {
  AppointmentGetSchedule = 'AppointmentGetSchedule',
  AppointmentGetAll = 'AppointmentGetAll',
  AppointmentGetById = 'AppointmentGetById',
  AppointmentGetByUserId = 'AppointmentGetByUserId',
  FeedbackGetById = 'FeedbackGetById',
  DaysOfAttendance = 'DaysOfAttendance',
  CategoryGetAll = 'CategoryGetAll',
  EmployeeGetAll = 'EmployeeGetAll',
  EmployeeGetAvailableSpecialties = 'EmployeeGetAvailableSpecialties',
  SpecialtyGetAll = 'SpecialtyGetAll',
  ProfileGetAll = 'ProfileGetAll',
  UserGetAll = 'UserGetAll',
  UserGetById = 'UserGetById',
  WorkingHourGetAll = 'WorkingHourGetAll',
  GetRangeOfAttendanceDays = 'GetRangeOfAttendanceDays',
  DaysWithoutAttendance = 'DaysWithoutAttendance',
  PaymentAccessToken = 'PaymentAccessToken',
}

export type QueryKeysType = keyof typeof QueryKeys;
