import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 30px; // Consistent gap size
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 30px; // Add some space before the list of skills

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; // Increased gap for better visual separation
`;

const Skill = styled.article`
  width: 100%;
  max-width: 350px; // Slightly reduced max-width for better fit
  
  
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 20px; // Increased border-radius for a more modern look
  padding: 20px;
  text-align: center; // Center text for better readability
 
  border: px solid ${({ theme }) => theme.primary}; // Thicker border for more emphasis
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; // Smooth transition for hover effects

  &:hover {
    transform: translateY(-5px); // Slightly lift the card on hover for a dynamic effect
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18); // Enhanced shadow on hover for a 'pop' effect
  }
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px;
  }
`;


const SkillTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #854CE6;
  margin-bottom: 20px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(23, 92, 230, 0.2); // A more subtle border
  border-radius: 12px;
  padding: 10px 16px;
  margin: 0 4px 4px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Soft shadow for depth
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15); // Enhanced shadow on hover
  }
`;


const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  /* Adjust the filter to make sure the image is visible and matches your design */
  filter: brightness(0) invert(1); // This will make images white
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); // Example hover effect, scaling up the icon
  }
`;


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>
         
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={itemIndex}>
                    <SkillImage  src={item.image} alt={`${item.name} icon`} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
