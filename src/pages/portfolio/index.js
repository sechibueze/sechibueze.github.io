import Work from 'components/Work';
import styled from 'styled-components';
import ef4aIcon from 'assets/images/ef4a-screenshot.png';
import transitIcon from 'assets/images/transit-screenshot.png';
import glorankrIcon from 'assets/images/glorankr-screenshot.png';
const StyledBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.85rem;
`;

const Portfolio = () => {
  return (
    <div className='container'>
      <StyledBox>
        {getWorks().map((work) => {
          const { title, description, timeline, screenShotUrl, url, ...rest } =
            work;

          return (
            <Work
              title={title}
              description={description}
              screenShotUrl={screenShotUrl}
              url={url}
              timeline={timeline}
              {...rest}
            />
          );
        })}
      </StyledBox>
    </div>
  );
};

export default Portfolio;
function getWorks() {
  return [
    {
      title: 'Education Fund For Africa',
      description:
        'Education Fund For Africa is a platform for social innovators and educators in Africa to access public funding for social good',

      url: 'https://ef4a.netlify.app/',
      screenShotUrl: ef4aIcon,
      skills: ['RESTful API', 'Nextjs'],
    },
    {
      title: 'Transital',
      description:
        'Transital allows road users to report traffic situation thereby helping traffic unit to proactively intervene and remedy undesirable traffic situation such as break downs, road blockage, accidents among others.',
      url: 'https://winners-traffic-watch.netlify.app/',
      screenShotUrl: transitIcon,
      skills: ['Nodejs', 'TypeScript', 'RESTful API', 'TypeORM', 'Nextjs'],
    },
    {
      title: 'Glorankr',
      timeline: '',
      description:
        'With Glorankr, users can access information about places of interests',
      url: 'https://glorankr.vercel.app/',
      screenShotUrl: glorankrIcon,
      skills: ['Nextjs'],
    },
  ];
}
