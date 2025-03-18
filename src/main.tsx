import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import GlobalStyle from './style/globalStyle.ts';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './providers/UserProvider.tsx';
import { PageActiveProvider } from './providers/PageActiveContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <UserProvider>
        <PageActiveProvider>
          <App />
        </PageActiveProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
