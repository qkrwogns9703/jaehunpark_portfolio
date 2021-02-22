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
	font-weight: 200;
	cursor: pointer;
	&:hover {
		border-bottom: 1px solid #fff;
	}
`;

const Park = styled.span`
	font-size: 3rem;
	color: var(--color-blue);
	margin-right: 2rem;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		border-bottom: 2px solid var(--color-blue);
	}
`;

const Nav = props => {
	return (
		<NavContainer>
			<MenuList>
				<Link to='about'>
					<MenuItem>ABOUT.</MenuItem>
				</Link>
				<Link to='skills'>
					<MenuItem>SKILLS.</MenuItem>
				</Link>
				<Link to='projects'>
					<MenuItem>PROJECT.</MenuItem>
				</Link>
			</MenuList>
			<Link to='main' activeClass='active'>
				<Park>&lt;PARK/&gt;</Park>
			</Link>
		</NavContainer>
	);
};

export default Nav;
