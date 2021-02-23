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
	margin-right: 3rem;
	font-weight: 500;
	cursor: pointer;
`;

const LineSpan = styled.span`
	width: 11rem;
	display: inline-block;
	position: relative;
	transform: rotate(-2deg);
	z-index: 0;
	border-bottom: 3px solid #fff;
	right: 1.5rem;
	bottom: 2rem;
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
					<MenuItem>
						ABOUT<span>.</span>
					</MenuItem>
				</Link>
				<Link to='skills' activeClass='active' spy={true}>
					<MenuItem>
						SKILLS<span>.</span>
					</MenuItem>
				</Link>
				<Link to='projects' activeClass='active' spy={true}>
					<MenuItem>
						PROJECTS<span>.</span>
					</MenuItem>
				</Link>
			</MenuList>
			<Link to='main' activeClass='active' spy={true}>
				<TextLine>
					<Park>PARK.</Park>
					<LineSpan></LineSpan>
				</TextLine>
			</Link>
		</NavContainer>
	);
};

export default Nav;
