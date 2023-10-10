import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/auth.operations';
import { Container, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <Text>Welcome, {user.name}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Container>
  );
};
