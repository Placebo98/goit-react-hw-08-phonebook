// import { ContactForm } from './Form/Form';
// import { Application } from './App.styled';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// import { ContactForm } from '../Form/Form';
// import { Application, FormTitle } from './App.styled';
import { Route, Routes } from 'react-router-dom';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { getAllContacts } from 'redux/operations';
import { Layout } from 'components/Layout';
// import HomePage from 'pages/HomePage';
// import HomePage from 'pages/HomePage/HomePage';
import { RestrictedRoute } from 'components/RestrictedRoute';
// import SignInPage from 'pages/SignInPage';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/Auth/auth.operations';
import { PrivateRoute } from 'components/PrivatRoute';

const HomePage = lazy(() => import('../../pages/HomePage'));
const SignInPage = lazy(() => import('../../pages/SignInPage'));
const LogInPage = lazy(() => import('../../pages/LogInPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<SignInPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogInPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
