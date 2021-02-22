import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
	height: 120vh;
	padding-top: 3rem;
	background-color: #121212;
	display: flex;
	flex-direction: column;
	padding: 5rem;
`;

const Title = styled.span`
	color: white;
	font-size: 4rem;
`;

const LineSpan = styled.span`
	width: 20rem;
	display: inline-block;
	position: relative;
	opacity: 0.8;
	transform: rotate(-1deg);
	z-index: 0;
	border-bottom: 10px solid var(--color-blue);
	opacity: 0.6;
	bottom: 2.7rem;
`;

const TextLine = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
`;

const ProjectContent = styled.div`
	border: 1px solid white;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
`;

const Projects = props => {
	return (
		<ProjectsContainer id='projects'>
			<TextLine>
				<Title>PROJECTS</Title>
				<LineSpan></LineSpan>
			</TextLine>
			<ProjectContent>AWDAWD</ProjectContent>
		</ProjectsContainer>
	);
};
export default Projects;
