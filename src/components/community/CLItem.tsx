import React from 'react';

interface CLitemProps {
	item: {
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
	};
}

export default function CLitem({ item }: CLitemProps) {
	return (
		<li
			key={item.postId}
			className="py-6 px-6 border-solid border-b border-gray-200 text-basic flex justify-between"
		>
			<p className="w-600">
				{item.title} ({item.commentCount})<i className="fa-solid fa-n"></i>
				<i className="fa-solid fa-image"></i>
			</p>
			<div>
				<span>{item.writerNickName}</span>
				<span>
					<i className="fa-solid fa-heart"></i>
					{item.heartCount}
				</span>
				<span>
					<i className="fa-solid fa-clock"></i>
					{item.writtenAt}
				</span>
				<span>
					<i className="fa-solid fa-eye"></i>
					{item.viewCount}
				</span>
			</div>
		</li>
	);
}
