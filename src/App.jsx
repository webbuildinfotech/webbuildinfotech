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
import ReactJsLayout from './components/Technology/Frontend/ReactJs/ReactLayout';
import VueJsLayout from './components/Technology/Frontend/VueJs/VueJsLayout';
import AngularLayout from './components/Technology/Frontend/Angular/AngularLayout';
import HTML5Layout from './components/Technology/Frontend/HTML5/HTML5Layout';
import NodeJsLayout from './components/Technology/Backend/NodeJs/NodeJsLayout';
import ExpressJsLayout from './components/Technology/Backend/ExpressJs/ExpressJsLayout';
import GraphQLLayout from './components/Technology/Backend/GraphQL/GraphQLLayout';
import NestJsLayout from './components/Technology/Backend/NestJs/NestJsLayout';
import PostgreSQLLayout from './components/Technology/Database/PostGresQl/PostgreSQLLayout';
import MongoDBLayout from './components/Technology/Database/MongoDb/MongoDBLayout';
import FirebaseLayout from './components/Technology/Database/Firebase/FirebaseLayout';
import MySQLLayout from './components/Technology/Database/MySQL/MySQLLayout';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/services" element={<Services />} />
         
          {/* FrontEnd Technology */}
          <Route path="/technologies" element={<Technology />} />
          <Route path="/technologies/react-info" element={<ReactJsLayout />} />
          <Route path="/technologies/vue-info" element={<VueJsLayout />} />
          <Route path="/technologies/angular-info" element={<AngularLayout />} />
          <Route path="/technologies/html5-info" element={<HTML5Layout />} />

          {/* BackEnd Technology */}
          <Route path="/technologies/node-info" element={<NodeJsLayout />} />
          <Route path="/technologies/express-info" element={<ExpressJsLayout />} />
          <Route path="/technologies/graphql-info" element={<GraphQLLayout />} />
          <Route path="/technologies/nest-info" element={<NestJsLayout />} />

          {/* Database Technology */}
          <Route path="/technologies/mongo-info" element={<MongoDBLayout />} />
          <Route path="/technologies/firebase-info" element={<FirebaseLayout/>} />
          <Route path="/technologies/postgres-info" element={<PostgreSQLLayout />} />
          <Route path="/technologies/mysql-info" element={<MySQLLayout />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;