import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
	height: 100vh;
	padding-top: 3rem;
	background-color: #000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	transform: rotate(-2deg);
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

const AboutContent = styled.div`
	height: 70vh;
	width: 80%;
	border: 1px solid white;
	display: flex;
	justify-content: center;
`;

const About = props => {
	return (
		<AboutContainer id='about'>
			<TextLine>
				<Title>ABOUT</Title>
				<LineSpan></LineSpan>
			</TextLine>
			<AboutContent></AboutContent>
		</AboutContainer>
	);
};

export default About;
