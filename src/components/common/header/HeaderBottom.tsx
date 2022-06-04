import React, { useState } from 'react';

export interface HeaderBottomProps {
	menusArr: { id: number; name: string }[];
}

export default function HeaderBottom({ menusArr }: HeaderBottomProps) {
	const [isMenu, setIsMenu] = useState('자유게시판');

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
