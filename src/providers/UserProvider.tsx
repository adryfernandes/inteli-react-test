import { PropsWithChildren, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

export function UserProvider({ children }: PropsWithChildren) {
  const [user] = useState<string>('Adryane Fernandes');

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
