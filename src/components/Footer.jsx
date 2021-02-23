import React from 'react';
import styled from 'styled-components';
import tistory from '../images/tistory.svg';
const SideMenuContainer = styled.div`
	position: fixed;
	bottom: 2rem;
	left: 2rem;
	margin: auto;
	height: 3rem;
	color: white;
	display: flex;
	align-items: center;
`;

const Icon = styled.i`
	color: white;
	font-size: 2.5rem;
	margin-left: 2rem;
	cursor: pointer;
	&:hover {
		opacity: 0.6;
	}
`;

const TistoryContainer = styled.span`
	border-radius: 50%;
	background-color: white;
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 2rem;
	cursor: pointer;
	&:hover {
		opacity: 0.6;
	}
`;

const TIstoryIcon = styled.img`
	width: 60%;
	height: 60%;
`;

const Footer = props => {
	const gitHubLink = () => {
		window.open('https://github.com/qkrwogns9703', '_blank');
	};

	const tistoryLink = () => {
		window.open('https://kkopark73.tistory.com', '_blank');
	};

	return (
		<SideMenuContainer>
			<a href='mailto:jaehunb350@gmail.com' title='jaehunb350@gmail.com'>
				<Icon className='far fa-envelope' />
			</a>
			<Icon className='fab fa-github' onClick={gitHubLink} />
			<TistoryContainer onClick={tistoryLink}>
				<TIstoryIcon src={tistory} alt='티스토리로고' />
			</TistoryContainer>
		</SideMenuContainer>
	);
};

export default Footer;
