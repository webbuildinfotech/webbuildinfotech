import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './pages/services/Services';
import ServiceDetail from './pages/services/ServiceDetail';
import Industries from './pages/industries/Industries';
import Company from './pages/company/Company';
import Contact from './pages/contact/Contact';
import Technology from './pages/technologies/Technology';
import Layout from './sections/Layout';
import Home from './pages/Home/Home';
import Projects from './pages/projects/Projects';
import Blog from './pages/blog/Blog';
import BlogDetail from './pages/blog/BlogDetail';
import TechnologyLayout from './sections/Technology/TechnologyLayout';
import { TechnologyRoutes } from './routes/TechnologyRoutes';
import { RoutePaths } from './routes/constant/path';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [pathname]);
  return null;
}

const AppRoutes = () => (
  <Routes>
    <Route path={RoutePaths.HOME} element={<Layout />}>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.SERVICES} element={<Services />} />
      <Route path={`${RoutePaths.SERVICES}/:serviceSlug`} element={<ServiceDetail />} />
      <Route path={RoutePaths.INDUSTRIES} element={<Industries />} />
      <Route path={RoutePaths.PROJECTS} element={<Projects />} />
      <Route path={RoutePaths.BLOG} element={<Blog />} />
      <Route path={`${RoutePaths.BLOG}/:slug`} element={<BlogDetail />} />
      <Route path={RoutePaths.COMPANY} element={<Company />} />
      <Route path={RoutePaths.CONTACT} element={<Contact />} />

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
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
};

export default App;
