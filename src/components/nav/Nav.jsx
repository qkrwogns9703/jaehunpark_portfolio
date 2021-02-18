import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 6rem;
	background-color: var(--color-main);
`;

const MenuList = styled.ul`
	list-style: none;
	display: flex;
`;

const MenuItem = styled.li`
	font-size: 2rem;
	color: white;
`;

const Nav = props => {
	return (
		<NavContainer>
			<MenuList>
				<MenuItem>About</MenuItem>
				<MenuItem>Projects</MenuItem>
			</MenuList>
		</NavContainer>
	);
};

export default Nav;
