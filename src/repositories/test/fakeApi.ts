import {UserType} from '../repoTypes';

export function authUserFake(userData: UserType) {
  return new Promise(resolver => {
    setTimeout(() => {
      resolver({
        data: {
          user: {
            id: '2d9f5652-3984-11ee-be56-0242ac120002',
            email: 'admin@jubas.com',
            userPermission: {
              id: 1,
              type: 'ADMIN',
            },
          },
        },
      });
    }, 2000);
  });
}
