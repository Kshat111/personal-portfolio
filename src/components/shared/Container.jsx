import styled from 'styled-components';

const Container = ({ children, size = 'default', className }) => {
  return (
    <StyledContainer size={size} className={className}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `max-width: 768px;`;
      case 'large':
        return `max-width: 1440px;`;
      default:
        return `max-width: 1200px;`;
    }
  }}
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }
`;

export default Container; 