import githubIcon from 'assets/images/github.png';
import twitterIcon from 'assets/images/twitter.png';
import linkedinIcon from 'assets/images/linkedin.png';
import whatsappIcon from 'assets/images/whatsapp.png';
import styled from 'styled-components';
const socialMedia = [
  {
    href: 'https://linkedin.com/in/sechibueze',
    label: 'LinkedIn',
    icon: linkedinIcon,
  },
  {
    href: 'https://github.com/sechibueze',
    label: 'Github',
    icon: githubIcon,
  },
  {
    href: 'https://wa.me/2348136363673',
    label: 'Whatsapp',
    icon: whatsappIcon,
  },
  {
    href: 'https://twitter.com/sechibueze',
    label: 'Twitter',
    icon: twitterIcon,
  },
];

const StyledSocialIcons = styled.div`
  .title {
    font-family: 'font__medium';
    text-align: center;
    font-weight: bolder;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }
  .icons-container {
    padding: 1.5rem 0;
    display: flex;
    column-gap: 0.85rem;
    img {
      width: 2rem;
    }
  }
`;
const SocialIcons = ({ heading }) => {
  return (
    <StyledSocialIcons>
      {heading && <p className='title'>{heading}</p>}
      <div className='icons-container'>
        {socialMedia.map((medium) => {
          const { icon, href, label } = medium;
          return (
            <a href={href} title={label} rel='noreferrer' target='_blank'>
              <img src={icon} alt={label} />
            </a>
          );
        })}
      </div>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
