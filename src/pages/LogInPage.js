import { LogInForm } from 'components/LogInForm/LogInForm';

import { Helmet } from 'react-helmet';

export default function LogInPage() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LogInForm />
    </div>
  );
}
