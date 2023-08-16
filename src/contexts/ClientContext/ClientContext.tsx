import {createContext, useContext, useState} from 'react';
import {ClientContexType, IClient} from './types.Client';

const ClientContext = createContext<ClientContexType | null>(null);

// export function ClientContextProvider({children}: any) {
//     const [client, setClient] = useState<IClient>()
//   return (
//     <ClientContext.Provider value={{client}}>{children}</ClientContext.Provider>
//   );
// }
