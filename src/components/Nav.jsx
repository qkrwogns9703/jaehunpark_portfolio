import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
`;

const Park = styled.span`
	font-size: 3rem;
	color: #3faffe;
	margin-right: 2rem;
	font-weight: 500;
`;

const Nav = props => {
	return (
		<NavContainer>
			<MenuList>
				<NavLink to='/about'>
					<MenuItem>ABOUT.</MenuItem>
				</NavLink>
				<NavLink to='/projects'>
					<MenuItem>PROJECTS.</MenuItem>
				</NavLink>
			</MenuList>
			<NavLink exact to='/'>
				<Park>PARK.</Park>
			</NavLink>
		</NavContainer>
	);
};

export default Nav;
