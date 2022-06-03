import React from 'react';

export interface HeaderBottomProps {
	menusArr: { id: number; name: string }[];
}

export default function HeaderBottom({ menusArr }: HeaderBottomProps) {
	const menus = menusArr.map((menu) => {
		return <li key={menu.id}>{menu.name}</li>;
	});

	return <ul className="flex gap-8">{menus}</ul>;
}
