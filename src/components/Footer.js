import styled from 'styled-components'



const Footer = (props) => {
  const Section = styled.section`
color: white;

  padding: 3em;
  background: ${props => props.background};
`
  return <Section className="footer" background="cornflowerblue">Made by Sandeep Nukala</Section>;
}

export default Footer;