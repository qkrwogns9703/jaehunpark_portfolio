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
	margin-top: 2rem;
`;

const AboutContent = styled.div`
	height: 70vh;
	width: 60%;
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
`;

const FirstContent = styled.div`
	display: flex;
	color: #fff;
	justify-content: flex-start;
	height: 15rem;
	flex-direction: column;
	transition: transform 1.5s, opacity 1s;
`;

const SecondContent = styled.div`
	display: flex;
	color: #fff;
	height: 15rem;
	flex-direction: column;
	text-align: right;
	transition: transform 1.5s, opacity 1s;
`;

const ThirdContent = styled.div`
	display: flex;
	color: #fff;
	justify-content: flex-start;
	height: 15rem;
	flex-direction: column;
	transition: transform 1.5s, opacity 1s;
`;

const AboutSubject = styled.div`
	color: var(--color-blue);
	margin-bottom: 1rem;
`;

const AboutText = styled.div`
	color: #fff;
	font-size: 1.5rem;
	font-weight: 200;
`;

const Subject = styled.div`
	margin-top: 2rem;
	font-size: 1.5rem;
	color: white;
	text-align: center;
	font-weight: 200;
`;

const Quotes = styled.span`
	color: var(--color-blue);
	font-size: 1.5rem;
	font-weight: bold;
`;

const About = props => {
	const isElementUnderBottom = (el, triggerDiff) => {
		const { top } = el.getBoundingClientRect();
		const { innerHeight } = window;
		return top > innerHeight + (triggerDiff || 0);
	};

	const handleScroll = () => {
		const elems = document.querySelectorAll('.up-on-scroll2');
		elems.forEach(el => {
			if (isElementUnderBottom(el, -100)) {
				el.style.opacity = '0';
				el.style.transform = 'translateY(100px)';
			} else {
				el.style.opacity = '1';
				el.style.transform = 'translateY(0px)';
			}
		});
	};

	window.addEventListener('scroll', handleScroll);

	return (
		<AboutContainer id='about'>
			<TextLine>
				<Title>ABOUT</Title>
				<LineSpan></LineSpan>
			</TextLine>
			<Subject>
				<Quotes>"</Quotes>개발하는 것에 즐거움과 보람을 느낍니다
				<Quotes>"</Quotes>
			</Subject>
			<AboutContent>
				<FirstContent className='up-on-scroll2'>
					<AboutSubject>ReadMe.</AboutSubject>
					<AboutText>
						안녕하세요 🙂
						<br />
						주니어 프론트엔드 엔지니어 박재훈입니다.
						<br /> 프로젝트를 수행하면서 개발 역량을 쌓아왔고, <br />
						리액트를 활용한 웹 프론트엔드 개발에 가장 익숙합니다.
					</AboutText>
				</FirstContent>
				<SecondContent className='up-on-scroll2'>
					<AboutSubject>Curiosity.</AboutSubject>
					<AboutText>
						개발을 재미로, 취미로, 놀이로,
						<br />
						호기심을 갖고 성장하기 위해
						<br />
						끊임없는 공부를 진행하고 있습니다.
					</AboutText>
				</SecondContent>
				<ThirdContent className='up-on-scroll2'>
					<AboutSubject>Responsible.</AboutSubject>
					<AboutText>
						다양한 도전을 시도하며, <br />
						책임감과 열정으로 맡은 일은 꼭 자신있게 해내고자 노력합니다.
					</AboutText>
				</ThirdContent>
			</AboutContent>
		</AboutContainer>
	);
};

export default About;
