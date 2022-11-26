// import DataLine from 'components/DataLine';
import styled from 'styled-components';
import person from 'assets/images/me.jpg';
import Experience from 'components/Experience';
import Skill from 'components/Skill';
const cardShadow = '0.25rem 0.1rem 0.25rem #ccc;';
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
      &::after {
        content: '  /';
      }
    }
    .value {
      justify-self: start;
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
    box-shadow: ${cardShadow};
    padding: 1.2rem;
  }
`;
const StyledSkillsSection = styled.div`
  border-radius: 0.85rem;
  background: #fff;
  box-shadow: ${cardShadow};
  padding: 1.2rem;
  .skill-container {
    display: flex;
    gap: 0.85rem;
  }
`;
const About = () => {
  return (
    <StyledAbout>
      <StyledSection>
        <div className='container'>
          <StyledPersonal>
            <StyledPersoanlContent>
              <h1>About</h1>
              <div className='data-line-container'>
                <span className='label'>WHO</span>
                <span>Samuel Chibueze</span>
                <span className='label'>WHAT</span>
                <span>Software Engineer</span>
                <span className='label'>WHERE</span>
                <span>Lagos, Nigeria</span>
                <span className='label'>WHEN</span>
                <span>2017 - Present</span>
                <span className='label'>WHY</span>
                <span>Impact and Transformation</span>
              </div>
            </StyledPersoanlContent>
            <StyledPersonalFigure>
              <figure>
                <img
                  style={{ borderRadius: '1rem', maxHeight: '25rem' }}
                  src={person}
                  alt='Actioning'
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
              <h2>Experience</h2>
              <div>
                <Experience
                  company={'ICTG'}
                  role='Fullstack Software Engineer'
                  period={'March, 2022 - Present'}
                />
                <Experience
                  company={'Raenest'}
                  role='Frontend Engineer'
                  period={'June, 2021 - March, 2022'}
                />
              </div>
            </div>
            <div>
              <h2>Education</h2>
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
            {/* Group skills:
            Programming langs: React, Nodejs,TypeScript, Python, 
            Tools: Github, CircleCI, AWS, Git & Github
            Certification: Udacity, Google Certs, Meta, LinkedIn, Udemy
            */}
            <h2>Skills</h2>
            <div className='skill-container'>
              <Skill label='React' />
              <Skill label={'Nodejs'} />
              <Skill label={'Git & github'} />
              <Skill label={'SQL/Postgresql/MongoDB'} />
            </div>
          </StyledSkillsSection>
        </div>
      </StyledSection>
    </StyledAbout>
  );
};

export default About;
