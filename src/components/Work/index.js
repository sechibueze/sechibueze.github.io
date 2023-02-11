import Skill from 'components/Skill';
import { StyledWork } from './work.style';

const Work = ({ title, timeline, description, url, screenShotUrl, skills }) => {
  return (
    <StyledWork>
      {screenShotUrl && <img src={screenShotUrl} alt={title} />}
      <div>
        {title && <h4>{title}</h4>}
        {timeline && <span>{timeline}</span>}
        {description && <p>{description}</p>}
        {!!skills && skills.length > 0 && (
          <div
            style={{
              display: 'flex',
              width: '100%',
              flexWrap: 'wrap',
            }}
          >
            {skills.map((skill) => (
              <Skill label={skill} />
            ))}
          </div>
        )}
        {url && (
          <a href={url} target='_blank' rel='noopener noreferrer'>
            See project
          </a>
        )}
      </div>
    </StyledWork>
  );
};

export default Work;
