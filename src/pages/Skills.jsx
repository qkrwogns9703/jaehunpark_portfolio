import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
	height: 120vh;
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

const SkillsContent = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
	flex-direction: column;
`;

const FrontendArea = styled.div`
	display: flex;
	height: 30rem;
	width: 100%;
	align-items: center;
	transition: transform 1.5s, opacity 1s;
`;

const BackendArea = styled.div`
	display: flex;
	height: 30rem;
	width: 100%;
	align-items: center;
	transition: transform 1.5s, opacity 1s;
`;

const SkillTitle = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	color: white;
	font-size: 2.5em;
`;

const SkillLine = styled.span`
	width: 32rem;
	display: inline-block;
	position: absolute;
	opacity: 0.8;
	transform: rotate(-2deg);
	z-index: 0;
	border-bottom: 4px solid var(--color-blue);
	opacity: 0.8;
	margin-top: 4rem;
`;

const SkillArea = styled.div`
	flex: 1;
`;

const StackImages = styled.img`
	width: 3em;
	height: 3em;
`;

const StackText = styled.span`
	color: white;
	font-size: 0.5em;
`;

const StackList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
`;

const StackItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 2rem;
	text-align: center;
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

const Skills = props => {
	const isElementUnderBottom = (el, triggerDiff) => {
		const { top } = el.getBoundingClientRect();
		const { innerHeight } = window;
		return top > innerHeight + (triggerDiff || 0);
	};

	const handleScroll = () => {
		const elems = document.querySelectorAll('.up-on-scroll');
		elems.forEach(el => {
			if (isElementUnderBottom(el, -250)) {
				el.style.opacity = '0';
				el.style.transform = 'translateY(200px)';
			} else {
				el.style.opacity = '1';
				el.style.transform = 'translateY(0px)';
			}
		});
	};

	window.addEventListener('scroll', handleScroll);

	return (
		<SkillsContainer id='skills'>
			<TextLine>
				<Title>SKILLS</Title>
				<LineSpan></LineSpan>
			</TextLine>

			<Subject>
				<Quotes>"</Quotes>프로젝트와 개인 학습을 통해 습득한 스택입니다
				<Quotes>"</Quotes>
			</Subject>

			<SkillsContent>
				<FrontendArea className='up-on-scroll'>
					<SkillTitle>
						<TextLine>FRONTEND</TextLine>
						<SkillLine></SkillLine>
					</SkillTitle>
					<SkillArea>
						<StackList>
							<StackItem>
								<StackImages src='https://img.icons8.com/color/96/000000/typescript.png' />
								<StackText>
									TS를 활용한 <br />
									정적 타이핑 경험이 <br />
									있습니다.
								</StackText>
							</StackItem>
							<StackItem>
								<StackImages src='https://img.icons8.com/color/96/000000/react-native.png' />
								<StackText>
									TSX · Hook 로 <br />
									SPA를 제작합니다.
								</StackText>
							</StackItem>
							<StackItem>
								<StackImages src='https://img.icons8.com/color/96/000000/redux.png' />
								<StackText>
									Redux를 활용하여 <br /> state를 관리합니다.
								</StackText>
							</StackItem>
							<StackItem>
								<StackImages src='https://img.icons8.com/color/96/000000/sass.png' />
								<StackText>
									Sass와 Styled-Component를 <br /> 활용하여 스타일링을 합니다.
								</StackText>
							</StackItem>
						</StackList>
					</SkillArea>
				</FrontendArea>
				<BackendArea className='up-on-scroll'>
					<SkillArea>
						<StackList>
							<StackItem>
								<StackImages src='https://img.icons8.com/color/96/000000/nodejs.png' />
								<StackText>
									Express 프레임워크로 <br /> REST API 구축합니다.
								</StackText>
							</StackItem>
							<StackItem>
								<StackImages src='https://img.icons8.com/ios-filled/100/ffffff/mysql-logo.png' />
								<StackText>
									RDBMS 중 <br />
									MYSQL을 사용합니다.
								</StackText>
							</StackItem>
							<StackItem>
								<StackImages src='https://img.icons8.com/color/96/ffffff/amazon-web-services.png' />
								<StackText>
									AWS(EC2,RDS,S3)를 <br /> 활용한 프로젝트 <br />
									배포 경험이 있습니다.
								</StackText>
							</StackItem>
						</StackList>
					</SkillArea>
					<SkillTitle>
						<TextLine>BACKEND</TextLine>
						<SkillLine></SkillLine>
					</SkillTitle>
				</BackendArea>
			</SkillsContent>
		</SkillsContainer>
	);
};

export default Skills;
