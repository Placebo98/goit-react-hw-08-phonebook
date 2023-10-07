import { AuthNavLink, AuthNavContainer } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/SignInPage">Sign In</AuthNavLink>
      <AuthNavLink to="">Log In</AuthNavLink>
    </AuthNavContainer>
  );
};
