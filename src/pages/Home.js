import styled from 'styled-components'


const Home = ({themeToggler}) => {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: royalblue;
  border: 2px solid royalblue;
`;
  return  (
  <>
  <Title>
    Try switching Themes!
  </Title>
  <div className="theme-btn">
  <Button onClick={themeToggler}>Switch Theme</Button>
  </div>
  
  </>
  );
}

export default Home;