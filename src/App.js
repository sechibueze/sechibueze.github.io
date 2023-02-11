import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react';
import fontBlack from 'assets/fonts/Poppins-Black.ttf';
import fontMedium from 'assets/fonts/Poppins-Medium.ttf';
import fontRegular from 'assets/fonts/Poppins-Regular.ttf';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
]);

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
}

@font-face {
  font-family: 'font__bold' ;
  src: url(${fontBlack});
}
@font-face {
  font-family: 'font__regular' ;
  src: url(${fontRegular});
}
@font-face {
  font-family: 'font__medium' ;
  src: url(${fontMedium});
}
html{
  font-size: 16px;
}
body{
  width: 100%;
  font-family: 'font__regular', Verdana,  sans-serif;
  margin-bottom: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  background:#f0f0f0;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
}

.container{
  width: 100%;
  padding: 0 .5rem;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
}
`;
const StyledApp = styled.div`
  width: 100%;
`;
const theme = {
  colors: {
    primary: '#01257D',
    text: '#111439',
    dark: '#3d0000',
    light: '#F8F8F9',
  },
};
const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('light-theme');
  const handleThemeChange = () => {
    let activeTheme = 'light-theme';
    if (selectedTheme === 'light-theme') {
      activeTheme = 'dark-theme';
    }
    localStorage.setItem('active-theme', JSON.stringify(activeTheme));
    setSelectedTheme(activeTheme);
  };
  useEffect(() => {
    const activeTheme = JSON.parse(localStorage.getItem('active-theme'));
    if (activeTheme) {
      setSelectedTheme(activeTheme);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <StyledApp>
          <div style={{ width: '100%', background: `${theme.colors.light}` }}>
            <div className='container'>
              <Navbar handleThemeChange={handleThemeChange} />
            </div>
          </div>
          <main>
            <RouterProvider router={routes} />
          </main>
        </StyledApp>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
