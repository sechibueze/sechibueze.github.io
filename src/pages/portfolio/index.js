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
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fi',

      url: 'https://ef4a.netlify.app/',
      screenShotUrl: ef4aIcon,
      skills: ['RESTful API', 'Nextjs'],
    },
    {
      title: 'Transital',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fi',
      url: 'https://winners-traffic-watch.netlify.app/',
      screenShotUrl: transitIcon,
      skills: [],
    },
    {
      title: 'Glorankr',
      timeline: '',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fi',
      url: 'https://glorankr.vercel.app/',
      screenShotUrl: glorankrIcon,
      skills: [],
    },
  ];
}
