import React from 'react';

import CLItem from './CLItem';

interface CommunityListProps {
	isMenuList: {
		postId: number;
		category: string;
		menu: string;
		title: string;
		content: string;
		viewCount: string;
		heartCount: string;
		commentCount: string;
		uploadImg: string;
		writtenAt: string;
		writerNickName: string;
		writerProfileImg: string;
	}[];
}

export default function CommunityList({ isMenuList }: CommunityListProps) {
	const list = isMenuList.map((item) => {
		return <CLItem item={item}></CLItem>;
	});
	return <ul className="border-solid border-t border-gray-300">{list}</ul>;
}
