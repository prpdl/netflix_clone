import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    background: url(${ props  => props.src ? `../images/misc/${props.src}.jpg` : '../images/misc/home-bg.jpg'}) top left / cover;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  padding-top: 20px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Frame = styled.div`

`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 48px;

    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const ButtonLink = styled(ReactRouterLink)`
display: block;
background-color: #e50914;
width: 84px;
height: fit-content;
color: white;
border: 0;
font-size: 15px;
border-radius: 3px;
padding: 8px 17px;
cursor: pointer;
text-decoration: none;
box-sizing: border-box;

&:hover {
    background-color: #f40612;
}
`;

export const Feature = styled(Container)`
padding: 150ps 0 500px 0;
flex-direction: column;
align-items: normal;
width: 50%;

@media (max-width: 1100px) {
  display: none;
}
`;

export const Text = styled.p`
color: white;
font-size: 22px;
line-height: normal;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
margin: 0;
`;

