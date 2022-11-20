import styled from 'styled-components';

const StyledDataLine = styled.div`
  width: 100%;
  /* display: flex;
  justify-content: center;
  column-gap: 1rem; */

  .key {
    justify-self: flex-end;
  }
  .vaalue {
    justify-self: flex-start;
  }
`;
const DataLine = ({ label, value }) => {
  return (
    <StyledDataLine>
      {label && <span className='key'>{label}</span>}
      {value && <span className='value'>{value}</span>}
    </StyledDataLine>
  );
};

export default DataLine;
