import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/auth.operations';
import {
  Section,
  Title,
  Inputbox,
  Label,
  Input,
  Button,
  Cont,
} from './SignIn.styled';
export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Cont>
      <Section>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Title>Sign In</Title>
          <Inputbox>
            {/* <ion-icon name="accessibility-outline"></ion-icon> */}
            <Input type="text" name="name" />
            <Label>Username</Label>
          </Inputbox>
          <Inputbox>
            {/* <ion-icon name="mail-outline"></ion-icon> */}
            <Input type="email" name="email" />
            <Label>Email</Label>
          </Inputbox>
          <Inputbox>
            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
            <Input type="password" name="password" />
            <Label>Password</Label>
          </Inputbox>

          <Button type="submit">Log in</Button>
        </form>
      </Section>
    </Cont>
  );
};
