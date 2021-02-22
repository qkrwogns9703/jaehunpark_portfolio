import React from 'react';
import styled from 'styled-components';
import backGround from '../images/porfoliomain.jpg';
import Typewriter from 'typewriter-effect';

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #121212;
	height: auto;
`;

const FirstContent = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #121212;
	background-image: url(${backGround});
	background-size: 100% 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TypeingArea = styled.div`
	color: white;
	font-size: 5rem;
	text-align: center;
	font-weight: 400;
`;

const Main = props => (
	<MainContainer id='main'>
		<FirstContent>
			<TypeingArea>
				<Typewriter
					options={{
						strings: [`성장을 멈추지 않는`],
						autoStart: true,
						loop: true,
						delay: '100',
						pauseFor: 500000,
					}}
				/>
				<Typewriter
					options={{
						strings: [`프론트엔드 엔지니어 박재훈입니다.`],
						autoStart: true,
						loop: true,
						delay: '100',
						pauseFor: 500000,
					}}
				/>
			</TypeingArea>
		</FirstContent>
	</MainContainer>
);

export default Main;
