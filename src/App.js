import { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import routes from './Utils/routes';
import Fallback from './Components/Fallback';
import Layout from './Components/Layout';
import Navigation from './Components/Navigation';
import ProductContext from './Context/Product';
import CartContext from './Context/Cart';
import Alert from './HOC/Alert';

const LandingPage = lazy(() => import('./Pages/LandingPage'))

function App() {
  return (
    // <Alert portal="#portal-root">
    <Layout>
      <ProductContext>
        <CartContext>
          <Route path={[routes.landingPage]}>
            <Navigation />
          </Route>
          <Suspense fallback={<Fallback />}>
            <Switch>
              <Route exact path={routes.landingPage}>
                <LandingPage />
              </Route>
            </Switch>
          </Suspense>
        </CartContext>
      </ProductContext>
    </Layout>

    // </Alert>
  );
}

export default App;
