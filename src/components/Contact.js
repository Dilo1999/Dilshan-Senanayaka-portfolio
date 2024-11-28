import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Import Axios for API requests
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import facebookIcon from "../assets/facebook.png";
import instaIcon from "../assets/insta.png";

const Contact = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSendMessageClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      alert(response.data.message); // Show success message
      setFormData({ name: "", email: "", message: "" }); // Clear form
      setIsPopupOpen(false); // Close popup
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <p>Email: Nimeshdilshan440@gmail.com</p>
      <p>Mobile: +94-769230572</p>

      <br />

      <StyledButton onClick={handleSendMessageClick}>Send Mail</StyledButton>

      {isPopupOpen && (
        <Popup>
          <PopupContent>
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <SubmitButton type="submit">Submit</SubmitButton>
            </form>
            <CloseButton onClick={handleClosePopup}>Close</CloseButton>
          </PopupContent>
        </Popup>
      )}

      <Socials>
        <a
          href="https://www.linkedin.com/in/dilshan-senanayaka-7a78a9211/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://www.facebook.com/share/vRds34QyJNByUCCF/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={facebookIcon} alt="Facebook" />
        </a>
        <a
          href="https://github.com/Dilo1999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={instaIcon} alt="Instagram" />
        </a>
      </Socials>
    </Section>
  );
};

// Styled components
const Section = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accent},
      transparent
    );
    animation: comet-trail 3s linear infinite;
  }

  h2 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
  }

  p {
    font-weight: bold;
  }

  @keyframes comet-trail {
    0% {
      left: -100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.4);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: rgba(65, 90, 200, 0.8);
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(65, 90, 200, 1);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    text-align: left;
    font-weight: bold;
  }

  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #ff6f61, #f86a8b);
  color: white;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    background: linear-gradient(45deg, #f86a8b, #ff6f61);
    transform: scale(1.05);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  background: linear-gradient(45deg, #4e73df, #1f4d9e);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(45deg, #1f4d9e, #4e73df);
    transform: scale(1.05);
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }
`;

export default Contact;
