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
          <Title>Login</Title>
          <Inputbox class="inputbox">
            {/* <ion-icon name="accessibility-outline"></ion-icon> */}
            <Input type="name" required />
            <Label for="">Username</Label>
          </Inputbox>
          <Inputbox class="inputbox">
            {/* <ion-icon name="mail-outline"></ion-icon> */}
            <Input type="email" required />
            <Label for="">Email</Label>
          </Inputbox>
          <Inputbox class="inputbox">
            {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
            <Input type="password" required />
            <Label for="">Password</Label>
          </Inputbox>

          <Button>Log in</Button>
        </form>
      </Section>
    </Cont>
  );
};
