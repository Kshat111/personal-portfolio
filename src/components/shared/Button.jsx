import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  to,
  href,
  onClick,
  disabled,
  type = 'button',
  fullWidth,
  ...props
}, ref) => {
  
  // Styles based on variant
  const getButtonElement = () => {
    // Button is a Link (internal)
    if (to) {
      return (
        <StyledLink
          ref={ref}
          to={to}
          variant={variant}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
          {...props}
        >
          {children}
        </StyledLink>
      );
    }
    
    // Button is an anchor (external)
    if (href) {
      return (
        <StyledAnchor
          ref={ref}
          href={href}
          variant={variant}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </StyledAnchor>
      );
    }
    
    // Regular button
    return (
      <StyledButton
        ref={ref}
        type={type}
        variant={variant}
        size={size}
        disabled={disabled}
        onClick={onClick}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </StyledButton>
    );
  };
  
  return getButtonElement();
});

// Shared styles
const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-primary);
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  text-decoration: none;
  border: 2px solid transparent;
  
  ${({ fullWidth }) => fullWidth && `
    width: 100%;
  `}
  
  /* Size variations */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          font-size: 0.875rem;
          padding: 8px 16px;
          height: 36px;
        `;
      case 'large':
        return `
          font-size: 1.125rem;
          padding: 12px 24px;
          height: 52px;
        `;
      default: // medium
        return `
          font-size: 1rem;
          padding: 10px 20px;
          height: 44px;
        `;
    }
  }}
  
  /* Variant styles */
  ${({ variant, disabled }) => {
    if (disabled) {
      return `
        opacity: 0.6;
        cursor: not-allowed;
        background-color: var(--background-secondary);
        color: var(--text-secondary);
        border-color: var(--border);
        pointer-events: none;
      `;
    }
    
    switch (variant) {
      case 'secondary':
        return `
          background-color: transparent;
          color: var(--accent);
          border: 2px solid var(--accent);
          
          &:hover {
            background-color: var(--accent);
            color: white;
          }
          
          &:focus {
            box-shadow: 0 0 0 3px var(--accent-secondary);
            outline: none;
          }
        `;
      case 'text':
        return `
          background-color: transparent;
          color: var(--text-primary);
          padding-left: 0;
          padding-right: 0;
          height: auto;
          
          &:hover {
            color: var(--accent);
            background-color: transparent;
          }
          
          &:focus {
            outline: none;
            text-decoration: underline;
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: var(--text-primary);
          
          &:hover {
            background-color: var(--background-secondary);
          }
          
          &:focus {
            outline: none;
            box-shadow: 0 0 0 3px var(--border);
          }
        `;
      default: // primary
        return `
          background-color: var(--accent);
          color: white;
          
          &:hover {
            background-color: var(--accent-secondary);
          }
          
          &:focus {
            outline: none;
            box-shadow: 0 0 0 3px var(--accent-secondary);
          }
        `;
    }
  }}
`;

const StyledButton = styled.button`
  ${buttonStyles}
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
`;

const StyledAnchor = styled.a`
  ${buttonStyles}
`;

export default Button; 