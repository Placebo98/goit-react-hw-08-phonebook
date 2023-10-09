import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/auth.operations';
import {
  Section,
  Inputbox,
  Label,
  Input,
  Button,
  Cont,
} from '../SignInForm/SignIn.styled';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
