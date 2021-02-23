import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import bitdaMain from '../images/bitdaMain2.gif';
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

const BitdaTitleArea = styled.div`
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
	position: fixed;
	right: 3rem;
	font-size: 3rem;
	top: 2rem;
	cursor: pointer;
`;

const BitdaMainImg = styled.img`
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

const BitdaContent = styled.div`
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

const Bitda = ({ close }) => {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = 'unset';
		};
	}, []);

	const bitdaLink = () => {
		window.open('https://www.bitda.ga', '_blank');
	};

	const bitdaGithubLink = () => {
		window.open('https://github.com/codestates/BITDA_Client', '_blank');
	};

	const bitdaTistoryLink = () => {
		window.open('https://kkopark73.tistory.com/65', '_blank');
	};

	return (
		<Modal onClick={close}>
			<ModalContent
				onClick={e => {
					e.stopPropagation();
				}}>
				<BitdaTitleArea>
					<TextLine>
						<Title>취향을 빚다</Title>
						<LineSpan></LineSpan>
					</TextLine>
					<CloseButton onClick={close}>&times;</CloseButton>
				</BitdaTitleArea>
				<BitdaMainImg src={bitdaMain} />
				<LinkArea>
					<LinkButton onClick={bitdaLink}>서비스 링크</LinkButton>
					<LinkButton onClick={bitdaGithubLink}>서비스 소개</LinkButton>
					<LinkButton onClick={bitdaTistoryLink}>프로젝트 회고</LinkButton>
				</LinkArea>
				<BitdaContent>
					<ProjectTitle>취향을 빚다</ProjectTitle>
					<ProjectText>취향 기반의 전통주 추천 서비스입니다.</ProjectText>
					<ProjectText>2021.01 - 2021.02</ProjectText>
					<ProjectText>Position : Full-Stack</ProjectText>
					<ProjectTitle>Stacks</ProjectTitle>
					<ProjectText>Language : Typescript</ProjectText>
					<ProjectText>
						Client : React, React-Hooks, Redux, Axios, Styled-Components
					</ProjectText>
					<ProjectText>
						Server : Express, MySQL, Typeorm, JWT, Multer
					</ProjectText>
					<ProjectText>Deploy : AWS(S3, EC2, RDS)</ProjectText>
					<ProjectTitle>Works</ProjectTitle>
					<ProjectText>[Front-end]</ProjectText>
					<ProjectText>
						• Styled-Component를 활용한 페이지 레이아웃 디자인 및 작업
					</ProjectText>
					<ProjectText>
						• Axios 요청 및 Oauth를 통한 로그인, 회원가입
					</ProjectText>
					<ProjectText>
						• file-reader와 form-data를 활용한 전통주 등록 페이지
					</ProjectText>
					<ProjectText>
						• 전통주 리스트, 상세 페이지 Axios 요청시 로딩 모달창 구현
					</ProjectText>
					<ProjectText>
						• JavaScript를 통한 스크롤에 반응하는 애니메이션 효과
					</ProjectText>
					<br />
					<ProjectText>[Back-end]</ProjectText>
					<ProjectText>• JWT를 적용한 로컬, 소셜 로그인 기능</ProjectText>
					<ProjectText>
						• Multer S3를 통한 사용자 프로필 이미지 변경
					</ProjectText>
					<ProjectText>
						• TypeORM jointable을 통한 사용자 리뷰 등록, 삭제
					</ProjectText>
					<ProjectText>
						• 사용자가 선택한 조건에 맞는 전통주 리스트 필터링
					</ProjectText>
					<ProjectText>
						• TypeORM을 활용한 인피니티 스크롤 페이지네이션 적용
					</ProjectText>
				</BitdaContent>
			</ModalContent>
		</Modal>
	);
};

export default Bitda;
