import { AuthNavLink, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/register">Sign In</AuthNavLink>
      <AuthNavLink to="/login">Log In</AuthNavLink>
    </AuthNavContainer>
  );
};
