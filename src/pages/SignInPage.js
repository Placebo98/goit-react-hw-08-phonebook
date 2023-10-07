import { SignInForm } from 'components/SignInForm/SignIn';
import { Helmet } from 'react-helmet';

export default function SignInPage() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <SignInForm />
    </div>
  );
}
