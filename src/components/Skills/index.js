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
  width: 95%; // Use a percentage to ensure padding on very small devices
  max-width: 1100px;
  
  gap: 30px;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 28px; // Smaller font size for very small devices
  }
`;

export const Desc = styled.p`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px; // Smaller font size for very small devices
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; // Slightly reduce the gap for very small devices

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Skill = styled.article`
  width: 100%;
  max-width: 350px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 20px;
  padding: 20px;
  border: 0.1px solid #854CE6;

  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    max-width: 90%; // Allows for more flexible layout on tablets
  }

  @media (max-width: 480px) {
    max-width: 95%; // Further flexibility for very small devices
    padding: 15px; // Slightly reduce padding
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
  border-radius: 12px;
  padding: 10px 16px;
  margin: 0 4px 4px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    padding: 1px; // Adjust based on your preference
    background: linear-gradient(45deg, rgba(23, 92, 230, 0.6), rgba(23, 192, 230, 0.6));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;



const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1) rotate(10deg); // Adding rotation for dynamic effect
    filter: brightness(0) invert(1) hue-rotate(90deg); // Change hue on hover for a color shift
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
