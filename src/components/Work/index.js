import { StyledWork } from './work.style';

const Work = ({ title, description, url, screenShotUrl, skills }) => {
  return (
    <StyledWork>
      <img src={screenShotUrl} alt={title} />
      <div>
        {title && <h4>{title}</h4>}
        <span>February, 2020</span>
        {description && <p>{description}</p>}
        {url && <a href={url}>See project</a>}
      </div>
    </StyledWork>
  );
};

export default Work;
