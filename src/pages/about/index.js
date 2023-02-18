import styled from 'styled-components';
import person from 'assets/images/me.jpg';
import Experience from 'components/Experience';
import Skill from 'components/Skill';
import projectIcon from 'assets/images/project__icon.png';
import { CARD_SHADOW } from 'constants/style.constant';
import { EXPERIENCE } from 'constants/about.constant';
const StyledAbout = styled.div`
  background: aliceblue;
`;
const StyledPersonal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
const StyledPersoanlContent = styled.div`
  width: 100%;
  > h1 {
    @media screen and (min-width: 768px) {
      font-size: 2.8rem;
    }
  }
  .data-line-container {
    display: grid;
    grid-template-columns: 5rem auto;
    grid-template-rows: repeat(5, 2.5rem);
    column-gap: 0.85rem;
    padding: 1rem;
    border: 0.5rem solid #555;
    border-left: 0;
    border-right: 0;

    .label {
      justify-self: end;
      font-family: 'font__medium';
      font-size: 0.85rem;
      font-weight: bolder;
      &::after {
        content: '  /';
      }
    }
    .value {
      justify-self: start;
      font-size: 0.95rem;
      font-family: 'font__regular';
    }
  }
`;
const StyledPersonalFigure = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;
const StyledSection = styled.section`
  padding: 1.2rem 0;
`;
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > div {
    border-radius: 0.85rem;
    background: #fff;
    box-shadow: ${CARD_SHADOW};
    padding: 1.2rem;
  }

  @media screen and (min-width: 960px) {
    flex-direction: row;

    > div {
      width: 50%;
    }
  }
`;
const StyledSkillsSection = styled.div`
  border-radius: 0.85rem;
  background: #fff;
  box-shadow: ${CARD_SHADOW};
  padding: 1.2rem;
  .skill-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem 0.5rem;
  }
`;

const StyledH3 = styled.h3`
  font-family: 'font__bold';
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 0.5rem 0;
`;
const About = () => {
  return (
    <StyledAbout>
      <StyledSection>
        <div className='container'>
          <StyledPersonal>
            <StyledPersoanlContent>
              <StyledH3>About</StyledH3>
              <div className='data-line-container'>
                <span className='label'>WHO</span>
                <span className='value'>Samuel Chibueze</span>
                <span className='label'>WHAT</span>
                <span className='value'>Software Engineer</span>
                <span className='label'>WHERE</span>
                <span className='value'>Lagos, Nigeria</span>
                <span className='label'>WHEN</span>
                <span className='value'>2017 - Present</span>
                <span className='label'>WHY</span>
                <span className='value'>Impact and Transformation</span>
              </div>
            </StyledPersoanlContent>
            <StyledPersonalFigure>
              <figure>
                <img
                  style={{ borderRadius: '1rem', maxHeight: '25rem' }}
                  src={person}
                  alt='Samuel Chibueze'
                />
              </figure>
            </StyledPersonalFigure>
          </StyledPersonal>
        </div>
      </StyledSection>
      <StyledSection>
        <div className='container'>
          <StyledContainer>
            <div>
              <StyledH3>Experience</StyledH3>
              <div>
                {EXPERIENCE.map((experience) => {
                  const { company, role, period, logo, jobInfo } =
                    experience || {};
                  const id = `${company}-${role}`;
                  return (
                    <Experience
                      key={id}
                      company={company}
                      role={role}
                      period={period}
                      imgSrc={logo || projectIcon}
                      jobInfo={jobInfo}
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <StyledH3>Education</StyledH3>
              <div>
                <Experience
                  company={'Udacity'}
                  role='Cloud DevOps Engineer'
                  period={'March, 2022 - Present'}
                />
                <Experience
                  company={'Raenest'}
                  role='Frontend Engineer'
                  period={'June, 2021 - March, 2022'}
                />
              </div>
            </div>
          </StyledContainer>
        </div>
      </StyledSection>
      <StyledSection>
        <div className='container'>
          <StyledSkillsSection>
            <StyledH3>Skills</StyledH3>

            <div className='skill-container'>
              <Skill label='JavaScript' />
              <Skill label='Python' />
              <Skill label='Reactjs' />
              <Skill label='Styled Compnents' />
              <Skill label='React Query' />
              <Skill label='Nodejs' />
              <Skill label='MySQL' />
              <Skill label='PostgreSQL' />
              <Skill label='MongoDB' />
              <Skill label='Git/GitHub' />
              <Skill label='AWS' />
              <Skill label='CircleCI' />
              <Skill label='CloudFormation' />
              <Skill label='RESTful APIs' />
            </div>
          </StyledSkillsSection>
        </div>
      </StyledSection>
    </StyledAbout>
  );
};

export default About;
