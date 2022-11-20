import styled from 'styled-components';
const cardShadow = '0.25rem 0.1rem 0.2rem #ccc;';

const StyledSkill = styled.div`
  box-shadow: ${cardShadow};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
`;
const Skill = ({ label }) => {
  return <StyledSkill>{label && <span>{label}</span>}</StyledSkill>;
};

export default Skill;
