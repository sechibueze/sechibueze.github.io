import styled from 'styled-components';
import heroImagePath from 'assets/images/me.jpg';
import SocialIcons from '../SocialIcons';
import { StyledH1 } from 'assets/styles';

const Heading = styled(StyledH1)`
  font-size: 1.85rem;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and (min-width: 980px) {
    font-size: 3.5rem;
  }
`;
const StyledHeroBackground = styled.div``;

const StyledHeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 1.5rem;
    padding: 2rem 0;
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > img {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
      border: 0.5rem dotted ${({ theme }) => theme.colors.primary};
      @media screen and (min-width: 768px) {
        width: 20rem;
        height: 20rem;
      }
    }
  }

  .hero-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text-bit {
      display: inline-block;
      text-align: center;
      width: 100%;
      @media screen and (min-width: 768px) {
        text-align: left;
        margin-top: 1rem;
      }
    }

    h3 {
      font-family: 'font__medium';
      font-size: 1.2rem;
      @media screen and (min-width: 988px) {
        font-size: 1.5rem;
      }
    }
    .intro-content {
      font-size: 1rem;
      text-align: center;
      margin: 0.85rem 0;
      @media screen and (min-width: 768px) {
        text-align: justify;
      }
    }
    @media screen and (min-width: 768px) {
      align-items: flex-start;
    }
  }
`;
const HeroHeader = () => {
  return (
    <StyledHeroBackground>
      <div className='container'>
        <StyledHeroContainer>
          <div className='hero-content'>
            <span className='text-bit'>Hello 👋</span>
            <Heading>Samuel Chibueze</Heading>
            <h3>Software & Cloud DevOps Engineer</h3>
            <p className='intro-content'>
              Everything I do begins with a vision, and proceed by a blend of
              faith and fact, to deliver value to stakeholders, impacting
              communities and ecosystem
            </p>
            <SocialIcons heading={"Let's Connect"} />
          </div>
          <figure>
            <img src={heroImagePath} alt='see Samuel Chibueze' />
          </figure>
        </StyledHeroContainer>
      </div>
    </StyledHeroBackground>
  );
};

export default HeroHeader;
