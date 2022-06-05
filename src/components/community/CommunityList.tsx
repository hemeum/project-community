import React from 'react';

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
		return <li key={item.postId}>{item.title}</li>;
	});
	return <>{list}</>;
}
