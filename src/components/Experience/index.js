import styled from 'styled-components';

const StyledExperience = styled.article`
  border-bottom: 0.5px solid #ccc;
  width: 100%;
  .experience-box {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.25rem;
    border-radius: 0.25rem;
    column-gap: 1rem;
  }
  img {
    width: 1.5rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .company {
      font-family: 'font__bold';
    }

    .role {
      font-family: 'font__medium';
    }

    .duration {
      font-size: 0.85rem;
    }
  }

  .job-details {
    font-size: 0.85rem;
    padding-bottom: 0.85rem;
  }
`;
const Experience = ({ company, role, period, jobInfo, imgSrc }) => {
  return (
    <StyledExperience>
      <div className='experience-box'>
        <div
          style={{
            fontSize: '3rem',
          }}
        >
          {imgSrc ? <img src={imgSrc} alt={`${company} logo`} /> : '+'}
        </div>
        <div className='details'>
          {company && <p className='company'>{company}</p>}

          <p>
            {role && <span className='role'>{role} | </span>}
            {period && <small className='duration'>{period}</small>}
          </p>
        </div>
      </div>
      {jobInfo && <p className='job-details'>{jobInfo}</p>}
    </StyledExperience>
  );
};

export default Experience;
