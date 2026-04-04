import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import Industries from './pages/industries/Industries';
import Company from './pages/company/Company';
import Contact from './pages/contact/Contact';
import Technology from './pages/technologies/Technology';
import Layout from './sections/Layout';
import Home from './pages/Home/Home';
import Projects from './pages/projects/Projects';
import TechnologyLayout from './sections/Technology/TechnologyLayout';
import { TechnologyRoutes } from './routes/TechnologyRoutes';
import { RoutePaths } from './routes/constant/path';
import { useTheme } from './context/ThemeContext';

const App = () => {
  
  const { theme } = useTheme();
  useEffect(() => {
    console.log('Theme:', theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.HOME} element={<Layout />}>
          <Route path={RoutePaths.HOME} element={<Home />} />
          <Route path={RoutePaths.SERVICES} element={<Services />} />
          <Route path={RoutePaths.INDUSTRIES} element={<Industries />} />
          <Route path={RoutePaths.PROJECTS} element={<Projects />} />
          <Route path={RoutePaths.COMPANY} element={<Company />} />
          <Route path={RoutePaths.CONTACT} element={<Contact />} />

          {/* Technologies index + detail routes (nested under main Layout Outlet) */}
          <Route path="technologies" element={<TechnologyLayout />}>
            <Route index element={<Technology />} />
            {TechnologyRoutes.flatMap((category) =>
              category.routes.map(({ path, component: Component }) => (
                <Route
                  key={path}
                  path={path.replace(`${RoutePaths.TECHNOLOGIES}/`, "")}
                  element={<Component />}
                />
              ))
            )}
          </Route>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
