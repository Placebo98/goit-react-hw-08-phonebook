import { HomePageContainer, Title } from './HomePage.styled';

export default function HomePage() {
  return (
    <HomePageContainer>
      <Title>
        Welcome to your Phonebook
        <span role="img" aria-label="Greeting icon">
          🙂
        </span>
      </Title>
    </HomePageContainer>
  );
}
