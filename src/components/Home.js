import React from "react";
import styled from "styled-components";
import profilePic from "../assets/5.png"; // Add your profile picture here
import backgroundImg from "../assets/background1.jpg"; // Add your background image here
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// A simple rotating cube for the background
const RotatingCube = () => {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="#4a90e2" metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

const Home = () => {
  return (
    <Section id="home">
      <CanvasContainer>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <RotatingCube />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </CanvasContainer>
      <ProfileImageContainer>
        <ProfileImage src={profilePic} alt="Profile Picture" />
      </ProfileImageContainer>
      <Content>
        <h1>
          Hi, I'm <span>Dilshan Senanayaka</span>
        </h1>
        <p>I'm a passionate Web and Mobile app Developer.</p>
        <Button href="#projects">View My Projects</Button>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover; /* Ensures the image covers the entire section */
  background-attachment: fixed; /* Optional: for a parallax scrolling effect */
  background-blend-mode: overlay; /* Optional: blend the image with a color */
  background-color: ${({ theme }) => theme.colors.background}; /* Fallback color */
`;

const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const ProfileImageContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 70px;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20%;
  /* Removed the border property */
`;

const Content = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
    margin-top: 1rem;
    span {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  p {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

const Button = styled.a`
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 0.9;
  }
`;

export default Home;
