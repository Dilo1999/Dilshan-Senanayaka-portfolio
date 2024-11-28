import React, { useState } from "react";
import styled from "styled-components";
import DilshanCV from "../../src/assets/Dilshan Senanayaka .pdf"; // Import the PDF

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleViewMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDownloadClick = () => {
    // Use the imported file's path
    window.open(DilshanCV, "_blank");
  };

  return (
    <Section id="about">
      <Content>
        <h2>About Me</h2>
        <p>
          I am an <span>enthusiastic and self-motivated web and Mobile app developer</span> with a strong focus on creating <strong>beautiful</strong> and <strong>functional</strong> websites. With a deep passion for solving complex problems, I specialize in <span>React</span> and modern front-end technologies, striving to build seamless, user-centric experiences. Currently, 
          as a final-year undergraduate specializing in software technology,
          {!isExpanded && (
            <>
              ... <ViewMore onClick={handleViewMoreClick}>View More</ViewMore>
            </>
          )}
          {isExpanded && (
            <>
              {" "}
              I combine my technical expertise and creativity to craft innovative solutions, always aiming for excellence in every project I undertake.
              <ViewMore onClick={handleViewMoreClick}>View Less</ViewMore>
            </>
          )}
        </p>
        <ButtonWrapper>
          <Button href="#contact">Contact Me</Button>
          <DownloadButton onClick={handleDownloadClick}>
            Download CV
          </DownloadButton>
        </ButtonWrapper>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  max-width: 600px;
  text-align: center;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.accent};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin: 1rem 0;
    span {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
    strong {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const ViewMore = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const DownloadButton = styled(Button)`
  background: ${({ theme }) => theme.colors.accent};
`;

export default About;
