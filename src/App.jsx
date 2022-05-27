import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Tailwind from './pages/Tailwind';
import NotFound from './pages/NotFound';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Alert from './components/layout/Alert';
import UnsplashUser from './pages/UnsplashUser';

import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import { UnsplashProvider } from './context/unsplash/UnsplashContext';

function App() {
  return (
    <GithubProvider>
      <UnsplashProvider>
        <AlertProvider>
          <Router>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />

              <main className="container mx-auto px-3 pb-12">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Alert />
                        <Home />
                      </>
                    }
                  />
                  <Route
                    path="/about"
                    element={
                      <>
                        <Alert />
                        <About />
                      </>
                    }
                  />
                  <Route path="tailwind" element={<Tailwind />} />
                  <Route path="/user/:login" element={<User />} />
                  <Route path="/unsplashuser/:login" element={<UnsplashUser />} />
                  <Route path="/notfound" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AlertProvider>
      </UnsplashProvider>
    </GithubProvider>
  );
}

export default App;
