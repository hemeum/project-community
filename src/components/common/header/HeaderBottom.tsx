import React from 'react';

import { CHProps } from '../../community/CommunityHeader';

export interface HeaderBottomProps extends CHProps {
	menusArr: { id: number; name: string }[];
}

export default function HeaderBottom({
	menusArr,
	isMenu,
	setIsMenu,
}: HeaderBottomProps) {
	const handleIsMenu = (e: any) => {
		setIsMenu(e.target.textContent);
	};

	const menus = menusArr.map((menu) => {
		return (
			<li
				className={`text-gray-500 cursor-pointer ${
					isMenu === menu.name
						? 'text-black pb-6 border-b-8 border-black border-solid'
						: undefined
				}`}
				key={menu.id}
				onClick={handleIsMenu}
			>
				{menu.name}
			</li>
		);
	});

	return <ul className="flex gap-8">{menus}</ul>;
}
