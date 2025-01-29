import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import Industries from './pages/industries/Industries';
import Company from './pages/company/Company';
import Contact from './pages/contact/Contact';
import Technology from './pages/technologies/Technology';
import Layout from './components/Layout';
import HomeLayout from './pages/Home/HomeLayout';
import Projects from './pages/projects/Projects';
import TechnologyLayout from './pages/technologies/TechnologyLayout';
import { TechnologyRoutes } from './routes/TechnologyRoutes';
import { RoutePaths } from './routes/constant/path';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.HOME} element={<Layout />}>
          <Route path={RoutePaths.HOME} element={<HomeLayout />} />
          <Route path={RoutePaths.SERVICES} element={<Services />} />
          <Route path={RoutePaths.TECHNOLOGIES} element={<Technology />} />
          <Route path={RoutePaths.INDUSTRIES} element={<Industries />} />
          <Route path={RoutePaths.PROJECTS} element={<Projects />} />
          <Route path={RoutePaths.COMPANY} element={<Company />} />
          <Route path={RoutePaths.CONTACT} element={<Contact />} />

          {/* Technology Routes */}
          <Route path={RoutePaths.TECHNOLOGIES} element={<TechnologyLayout />}>
            {TechnologyRoutes.flatMap((category) =>
              category.routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))
            )}
          </Route>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
