import { HomePageLink, ContactLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <HomePageLink to="/">Home</HomePageLink>
      {isLoggedIn && <ContactLink to="/contacts">Contacts</ContactLink>}
    </nav>
  );
};
