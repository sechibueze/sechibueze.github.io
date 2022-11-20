import styled from 'styled-components';

const StyledExperience = styled.article`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  column-gap: 1rem;
  .details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const Experience = ({ company, role, period }) => {
  return (
    <StyledExperience>
      <div
        style={{
          fontSize: '3rem',
        }}
      >
        +
      </div>
      <div className='details'>
        {company && <p>{company}</p>}

        <p>
          {role && <span>{role} | </span>}
          {period && <small>{period}</small>}
        </p>
      </div>
    </StyledExperience>
  );
};

export default Experience;
