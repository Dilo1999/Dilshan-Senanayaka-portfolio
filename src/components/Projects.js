import React from "react";
import styled from "styled-components";

const Projects = () => {
  const projectList = [
    { name: "Actionplan.edb.gov.lk", description: "Website Enhancements (actionplan.edb.gov.lk): Added new features to the website using Laravel, managing both backend and frontend development, including updates to user account management" },
    { name: "Crm.edb.gov.lk", description: "Mobile App Development (crm.edb.gov.lk): Developed a React Native mobile application that replicates the functionality of the CRM system, integrating the same CRM features as the web version." },
    { name: "wed.edb.gov.lk", description: "Website Development (wed.edb.gov.lk): Designed and developed the webpage using Laravel. Created a user-friendly interface tailored for EDB staff, implemented backend functionalities for user management and secure access." },
    { name: "University Learning Management System App", description: "Developed an Android app with Firebase integration, enabling student feedback submission and lecturer responses. Key features include user authentication, course management, and a feedback system." },
    { name: "Greenhouse Automation App", description: "Developed a mobile app using Android Studio for full greenhouse automation.Integrated Firebase for data storage and API communication with a machine learning model.Enabled control of IoT devices for real-time environmental management" },
    { name: "Android Application For Sprinkles Bakery", description: "This Android application has been created using Android Studio, java, and Firebase." },
    { name: "Android Application for Milk Shop Management System", description: "This Android application has been created using android studio, java, and Local database (MySQL)." },
    { name: "Face Recognition System", description: "Automatically find all the faces in an image Recognize and manipulate faces from Python and Marking Attendance." },
    { name: "Support Vector Machine (SVM Model)", description: "Using machine learning algorithm and solve complex classification, regression, and outlier detection problems." },
    { name: "Hostel Management System App", description: "Developed an Android app for hostel management using Android Studio, integrating Firebase for real-time database and authentication, enabling features such as user registration, room allocation, fee tracking, and notifications." },
  ];

  return (
    <Section id="projects">
      <h2>My Projects</h2>
      <Grid>
        {projectList.map((project, index) => (
          <Card key={index}>
            <h3>{project.name}</h3>
            <Description projectName={project.name}>{project.description}</Description>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  h2 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 10px;
`;

const Description = styled.p`
  color: ${({ theme, projectName }) => {
    // Conditionally set colors based on the project name
    switch (projectName) {
      case "Actionplan.edb.gov.lk":
        return "#ff6347"; // Tomato red
      case "Crm.edb.gov.lk":
        return "#4682b4"; // Steel Blue
      case "wed.edb.gov.lk":
        return "#32cd32"; // Lime Green
        case "University Learning Management System App":
        return "#ff6347"; // Tomato red
      case "Greenhouse Automation App":
        return "#4682b4"; // Steel Blue
      case "Android Application For Sprinkles Bakery":
        return "#32cd32"; // Lime Green
        case "Android Application for Milk Shop Management System":
          return "#4682b4"; // Steel Blue
        case "Face Recognition System":
        return "#ff6347"; // Tomato red
      case "Support Vector Machine (SVM Model)":
        return "#4682b4"; // Steel Blue
      case "Hostel Management System App":
        return "#32cd32"; // Lime Green
      default:
        return theme.colors.text; // Default text color
    }
  }};
  background-color: ${({ theme }) => theme.colors.highlight};
  padding: 1rem;
  border-radius: 5px;
  font-style: italic;
  font-weight: bold;
`;

export default Projects;
