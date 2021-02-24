import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 6rem;
	justify-content: center;
	z-index: 100;
	background: rgba(0, 0, 0, 0.5);
`;

const MenuList = styled.ul`
	list-style: none;
	display: flex;
	width: 100%;
`;

const MenuItem = styled.li`
	font-size: 2rem;
	color: #fff;
	margin: 0 3rem;
	font-weight: 100;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid #fff;
	}
`;

const Park = styled.span`
	font-size: 3rem;
	color: var(--color-blue);
	margin-right: 3rem;
	font-weight: 500;
	cursor: pointer;
`;

const TextLine = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
`;

const Nav = props => {
	return (
		<NavContainer>
			<MenuList>
				<Link to='about' activeClass='active' spy={true}>
					<MenuItem>ABOUT.</MenuItem>
				</Link>
				<Link to='skills' activeClass='active' spy={true}>
					<MenuItem>SKILLS.</MenuItem>
				</Link>
				<Link to='projects' activeClass='active' spy={true}>
					<MenuItem>PROJECTS.</MenuItem>
				</Link>
			</MenuList>
			<Link to='main' activeClass='active' spy={true}>
				<TextLine>
					<Park>PARK.</Park>
				</TextLine>
			</Link>
		</NavContainer>
	);
};

export default Nav;
