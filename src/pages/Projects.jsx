import React, { useState } from 'react';
import styled from 'styled-components';
import bitdaMain from '../images/bitda_main.png';
import goldenTimeMain from '../images/main2.png';
import Bitda from '../components/Bitda';
import GoldenTime from '../components/GoldenTime';
const ProjectsContainer = styled.div`
	height: 110vh;
	padding-top: 3rem;
	background-color: #000;
	display: flex;
	flex-direction: column;
	padding: 5rem;
`;

const Title = styled.span`
	color: white;
	font-size: 4rem;
`;

const LineSpan = styled.span`
	width: 25rem;
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

const ProjectContent = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 50vh;
	align-items: center;
	margin-top: 2rem;
	transition: transform 1.5s, opacity 1s;
`;

const BitdaArea = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	height: 80%;
`;

const BitdaImageArea = styled.div`
	color: white;
	width: 80%;
	background-image: url(${bitdaMain});
	background-size: 100% 100%;
	cursor: pointer;
	border-radius: 12px;
`;

const GoldenTimeArea = styled.div`
	flex: 1;
	display: flex;
	height: 80%;
	justify-content: center;
`;

const GoldenTimeImageArea = styled.div`
	color: white;
	width: 80%;
	background-image: url(${goldenTimeMain});
	background-size: 100% 100%;
	cursor: pointer;
	border-radius: 12px;
`;

const MakeDark = styled.div`
	background: rgba(0, 0, 0, 0.1);
	width: 100%;
	height: 100%;
	&:hover {
		background: rgba(0, 0, 0, 0.4);
	}
`;

const ProjectTextArea = styled.div`
	color: white;
	font-weight: 400;
	font-size: 1.3rem;
	padding: 1rem;
`;

const ProjectText = styled.p`
	font-size: 1rem;
	margin-left: 0.8rem;
`;

const Projects = props => {
	const [bitdaModal, setBitdaModal] = useState(false);
	const [goldenTimeModal, setGoldenTimeModal] = useState(false);

	const bitdaOpen = () => {
		setBitdaModal(true);
	};

	const goldenTimeOpen = () => {
		setGoldenTimeModal(true);
	};

	const modelClose = () => {
		setGoldenTimeModal(false);
		setBitdaModal(false);
	};

	const isElementUnderBottom = (el, triggerDiff) => {
		const { top } = el.getBoundingClientRect();
		const { innerHeight } = window;
		return top > innerHeight + (triggerDiff || 0);
	};

	const handleScroll = () => {
		const elems = document.querySelectorAll('.up-on-scroll1');
		elems.forEach(el => {
			if (isElementUnderBottom(el, -400)) {
				el.style.opacity = '0';
				el.style.transform = 'translateX(1000px)';
			} else {
				el.style.opacity = '1';
				el.style.transform = 'translateX(0px)';
			}
		});
	};

	window.addEventListener('scroll', handleScroll);

	return (
		<ProjectsContainer id='projects'>
			<TextLine>
				<Title>PROJECTS</Title>
				<LineSpan></LineSpan>
			</TextLine>
			<Subject>
				<Quotes>"</Quotes>진행한 프로젝트 안내입니다<Quotes>"</Quotes>
			</Subject>
			<ProjectContent className='up-on-scroll1'>
				<BitdaArea>
					<BitdaImageArea onClick={bitdaOpen}>
						<MakeDark></MakeDark>
						<ProjectTextArea>
							<Quotes>"</Quotes>취향을 빚다<Quotes>"</Quotes>
							<ProjectText>FULL-STACK</ProjectText>
							<ProjectText>코드스테이츠 파이널 프로젝트 4인 4주</ProjectText>
						</ProjectTextArea>
					</BitdaImageArea>
				</BitdaArea>
				<GoldenTimeArea>
					<GoldenTimeImageArea onClick={goldenTimeOpen}>
						<MakeDark></MakeDark>
						<ProjectTextArea>
							<Quotes>"</Quotes>GOLDENTIME<Quotes>"</Quotes>
							<ProjectText>FRONT-END</ProjectText>
							<ProjectText>코드스테이츠 퍼스트 프로젝트 4인 2주</ProjectText>
						</ProjectTextArea>
					</GoldenTimeImageArea>
				</GoldenTimeArea>
			</ProjectContent>
			{bitdaModal && <Bitda close={modelClose} />}
			{goldenTimeModal && <GoldenTime close={modelClose} />}
		</ProjectsContainer>
	);
};
export default Projects;
