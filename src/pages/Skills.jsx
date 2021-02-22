import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
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

const SkillsContent = styled.div`
	border: 1px solid white;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
`;

const FrontendArea = styled.div`
	display: flex;
`;

const StackImages = styled.img`
	width: 3em;
	height: 3em;
`;

const Skills = props => {
	return (
		<SkillsContainer id='skills'>
			<TextLine>
				<Title>SKILLS</Title>
				<LineSpan></LineSpan>
			</TextLine>
			<SkillsContent>
				<StackImages src='https://img.icons8.com/color/96/000000/typescript.png' />
			</SkillsContent>
		</SkillsContainer>
	);
};

export default Skills;
