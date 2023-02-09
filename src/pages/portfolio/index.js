import Work from 'components/Work';
import styled from 'styled-components';
import projectIcon from 'assets/images/project__icon.png';
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
          const { title, description, screenshotUrl, url } = work;

          return (
            <Work
              title={title}
              description={description}
              screenShotUrl={screenshotUrl}
              url={url}
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
      title: 'Hellow',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fi',

      url: '#',
      screenShotUrl: projectIcon,
      skills: [''],
    },
    {
      title: 'Hellow',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only fi',
      url: '',
      screenShotUrl: '#',
      skills: [''],
    },
  ];
}
