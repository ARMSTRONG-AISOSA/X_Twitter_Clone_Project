import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { PostProvider } from "./context/PostContext.tsx";
import { UserProvider } from './context/UserContext.tsx';
import { CommunityProvider } from './context/CommunityContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <UserProvider>
        <PostProvider>
          <CommunityProvider>
            <App />
          </CommunityProvider>
        </PostProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
