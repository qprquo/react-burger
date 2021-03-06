import React, { useEffect } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import WithLoader from '../with-loader/with-loader';
import CustomSwitch from '../custom-switch/custom-switch';
import useIngredients from '../../hooks/use-ingredients';
import { HelmetProvider } from 'react-helmet-async';
import Seo from '../seo/seo';

const App: React.FC = () => {
  const { isLoading, getUser } = useAuth();
  const { getItems } = useIngredients();

  useEffect(() => {
    getUser();
    getItems();
  }, []);

  return (
    <HelmetProvider>
      <Seo />
      <WithLoader isLoading={isLoading}>
        <Router>
          <CustomSwitch />
        </Router>
      </WithLoader>
    </HelmetProvider>
  );
};

export default App;
