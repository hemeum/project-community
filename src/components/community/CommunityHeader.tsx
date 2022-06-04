import React from 'react';

import HeaderTop from '../common/header/HeaderTop';
import HeaderBottom from '../common/header/HeaderBottom';

export interface CHProps {
	isMenu: string;
	setIsMenu: (isMenu: string) => void;
}

export default function CommunityHeader({ isMenu, setIsMenu }: CHProps) {
	const arr = [
		{ id: 1, name: '자유게시판' },
		{ id: 2, name: '정보게시판' },
		{ id: 3, name: '토론게시판' },
	];

	return (
		<>
			<HeaderTop category="커뮤니티" />
			<HeaderBottom menusArr={arr} isMenu={isMenu} setIsMenu={setIsMenu} />
		</>
	);
}
