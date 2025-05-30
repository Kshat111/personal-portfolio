import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Container from '../shared/Container';
import Button from '../shared/Button';
import ThreeDObject from '../shared/ThreeDObject';

const ContactPage = () => {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focusedInput, setFocusedInput] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle input focus
  const handleFocus = (input) => {
    setFocusedInput(input);
  };
  
  // Handle input blur
  const handleBlur = () => {
    setFocusedInput(null);
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
      
      // Form animation
      gsap.from(formRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out'
      });
      
      // Info animation
      gsap.from(infoRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out'
      });
      
      // Inputs animation
      gsap.from('.form-group', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out'
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  // Effect for input focus animation
  useEffect(() => {
    if (focusedInput) {
      gsap.to(`.input-border-${focusedInput}`, {
        width: '100%',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  }, [focusedInput]);
  
  return (
    <ContactContainer>
      <Container>
        <ContactHeader ref={headerRef}>
          <h1>Get in Touch</h1>
          <p>Let's discuss on something or just say hello!</p>
        </ContactHeader>
        
        <ContactGrid>
          <ContactFormWrapper ref={formRef}>
            {submitted ? (
              <SuccessMessage>
                <SuccessIcon>✓</SuccessIcon>
                <h3>Message Sent!</h3>
                <p>Thank you for your message. I'll get back to you soon.</p>
              </SuccessMessage>
            ) : (
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup className="form-group">
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <InputWrapper>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                    />
                    <InputBorder className={`input-border input-border-name ${focusedInput === 'name' ? 'active' : ''}`} />
                  </InputWrapper>
                </FormGroup>
                
                <FormGroup className="form-group">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <InputWrapper>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                    />
                    <InputBorder className={`input-border input-border-email ${focusedInput === 'email' ? 'active' : ''}`} />
                  </InputWrapper>
                </FormGroup>
                
                <FormGroup className="form-group">
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <InputWrapper>
                    <FormInput
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      required
                    />
                    <InputBorder className={`input-border input-border-subject ${focusedInput === 'subject' ? 'active' : ''}`} />
                  </InputWrapper>
                </FormGroup>
                
                <FormGroup className="form-group">
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <InputWrapper>
                    <FormTextarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      rows="5"
                      required
                    />
                    <InputBorder className={`input-border input-border-message ${focusedInput === 'message' ? 'active' : ''}`} />
                  </InputWrapper>
                </FormGroup>
                
                <FormSubmit>
                  <Button type="submit" size="large">Send Message</Button>
                </FormSubmit>
              </ContactForm>
            )}
          </ContactFormWrapper>
          

        </ContactGrid>
      </Container>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: var(--spacing-xl) 0;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
  
  h1 {
    margin-bottom: var(--spacing-xs);
    font-size: 3rem;
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 500px;
    margin: 0 auto;
  }
`;

const ContactGrid = styled.div`
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 var(--spacing-md);
  }
`;

const ContactFormWrapper = styled.div`
  background-color: var(--background-secondary);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  width: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  width: 100%;
`;

const FormGroup = styled.div`
  width: 100%;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-align: left;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  background-color: var(--background);
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  background-color: var(--background);
  border: 2px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const InputBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--accent), var(--accent-secondary));
  transition: width var(--transition-fast);
  
  &.active {
    width: 100%;
  }
`;

const FormSubmit = styled.div`
  margin-top: var(--spacing-md);
  display: flex;
  justify-content: center;
  
  button {
    min-width: 200px;
  }
`;

const ContactInfo = styled.div`
  position: relative;
  border-radius: var(--radius-md);
  height: 100%;
  min-height: 450px;
  overflow: hidden;
`;

const ContactInfoContent = styled.div`
  position: relative;
  z-index: 1;
  padding: var(--spacing-lg);
  color: white;
  
  h2 {
    margin-bottom: var(--spacing-md);
    font-size: 1.75rem;
  }
  
  p {
    margin-bottom: var(--spacing-lg);
    opacity: 0.9;
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const ContactInfoIcon = styled.div`
  font-size: 1.5rem;
`;

const ContactInfoLabel = styled.span`
  font-size: 0.75rem;
  opacity: 0.8;
  display: block;
  margin-bottom: 2px;
`;

const ContactInfoText = styled.span`
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  transition: opacity var(--transition-fast);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width var(--transition-normal);
  }
  
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const ContactScene = styled(ThreeDObject)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: var(--spacing-xl) 0;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
    background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    color: var(--text-secondary);
  }
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent), var(--accent-secondary));
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto var(--spacing-md);
  box-shadow: 0 8px 24px rgba(111, 66, 193, 0.3);
  animation: success-pulse 2s infinite;
  
  @keyframes success-pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 8px 24px rgba(111, 66, 193, 0.3);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 12px 32px rgba(111, 66, 193, 0.4);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 8px 24px rgba(111, 66, 193, 0.3);
    }
  }
`;

export default ContactPage; 