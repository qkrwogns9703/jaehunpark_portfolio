import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import goldenTimeMain from '../images/goldenTimeMain.gif';
const boxFade = keyframes`
from {
		opacity: 0;
		transform: translateY(0);
	}
	to {
		opacity: 1;
		transform: translateY(50px);
	}
`;

const Modal = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 101;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const ModalContent = styled.div`
	width: 70rem;
	height: 50rem;
	background-color: #000;
	position: relative;
	z-index: 100;
	box-sizing: border-box;
	transform: translateY(0);
	animation: ${boxFade} 0.5s forwards;
	border-radius: 6px;
	bottom: 3rem;
	padding: 3rem;
	border: 1px solid gray;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 5px;
		background-color: white;
	}
	&::-webkit-scrollbar-thumb {
		background-color: gray;
		border-radius: 10px;
	}
`;

const TitleArea = styled.div`
	display: flex;
	padding-bottom: 1rem;
	border-bottom: 1px solid gray;
`;

const Title = styled.span`
	color: #fff;
	font-size: 2rem;
	font-weight: 400;
`;

const TextLine = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
`;
const LineSpan = styled.span`
	width: 15rem;
	display: inline-block;
	position: relative;
	opacity: 0.8;
	transform: rotate(-2deg);
	z-index: 0;
	border-bottom: 5px solid var(--color-blue);
	opacity: 0.6;
	bottom: 1.5rem;
`;

const CloseButton = styled.div`
	color: var(--color-blue);
	font-size: 3rem;
	cursor: pointer;
`;
const ButtonArea = styled.div`
	display: flex;
	width: 68rem;
	justify-content: flex-end;
`;

const GoldenTimeImage = styled.img`
	width: 100%;
	height: 90%;
	margin-top: 3rem;
`;

const LinkArea = styled.div`
	display: flex;
	margin-top: 2rem;
`;

const LinkButton = styled.span`
	align-items: center;
	justify-content: center;
	display: flex;
	color: #fff;
	border: 2px solid lightgray;
	width: 9rem;
	height: 2.5rem;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	margin-right: 1rem;
	border-radius: 6px;
	&:hover {
		color: var(--color-blue);
	}
`;

const GoldenTimeContent = styled.div`
	display: flex;
	font-size: 0.9rem;
	flex-direction: column;
`;

const ProjectTitle = styled.div`
	font-size: 1.2rem;
	margin-top: 3rem;
	font-weight: 500;
	color: var(--color-blue);
	margin-bottom: 0.5rem;
`;

const ProjectText = styled.p`
	margin-bottom: 0.5rem;
	padding-left: 1rem;
	font-size: 1rem;
	color: #fff;
`;

const GoldenTime = ({ close }) => {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'unset';
		};
	}, []);

	const goldenTimeLink = () => {
		window.open('https://d1ghlpfq71z9hf.cloudfront.net', '_blank');
	};

	const goldenTImeGithubLink = () => {
		window.open('https://github.com/codestates/golden-time-client', '_blank');
	};

	return (
		<Modal onClick={close}>
			<ButtonArea>
				<CloseButton onClick={close}>&times;</CloseButton>
			</ButtonArea>
			<ModalContent
				onClick={e => {
					e.stopPropagation();
				}}>
				<TitleArea>
					<TextLine>
						<Title>GoldenTime</Title>
						<LineSpan></LineSpan>
					</TextLine>
				</TitleArea>
				<GoldenTimeImage src={goldenTimeMain} />
				<LinkArea>
					<LinkButton onClick={goldenTimeLink}>서비스 링크</LinkButton>
					<LinkButton onClick={goldenTImeGithubLink}>서비스 소개</LinkButton>
				</LinkArea>
				<GoldenTimeContent>
					<ProjectTitle>GoldenTime</ProjectTitle>
					<ProjectText>위치 기반의 중고 물품 경매 서비스입니다.</ProjectText>
					<ProjectText>2020.12 - 2021.01</ProjectText>
					<ProjectText>Position : Front-end</ProjectText>
					<ProjectTitle>Stacks</ProjectTitle>
					<ProjectText>Language : Javascript</ProjectText>
					<ProjectText>Client : React, Axios, Styled-Components</ProjectText>
					<ProjectText>
						Server : Express, MySQL, Sequelize, JWT, Multer
					</ProjectText>
					<ProjectText>Deploy : AWS(S3, EC2, RDS)</ProjectText>
					<ProjectTitle>Works</ProjectTitle>
					<ProjectText>[Front-end]</ProjectText>
					<ProjectText>• react-router-dom을 이용한 라우팅</ProjectText>
					<ProjectText>
						• 로그인, 회원가입 모달 디자인, 애니메이션 구현
					</ProjectText>
					<ProjectText>
						• Axios 요청 및 Oauth를 통한 로그인, 회원가입 기능
					</ProjectText>
					<ProjectText>
						• React-Datepicker를 활용한 경매 종료 일시 선택
					</ProjectText>
					<ProjectText>
						• File-reader와 Form-data를 활용한 다중 이미지 미리보기 및 업로드
					</ProjectText>
				</GoldenTimeContent>
			</ModalContent>
		</Modal>
	);
};

export default GoldenTime;
