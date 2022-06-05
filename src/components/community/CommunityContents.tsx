import React, { useEffect, useState } from 'react';

import CommunityList from './CommunityList';
import CommunityNav from './CommunityNav';

export interface CMProps {
	isMenu: string;
}

export default function CommunityContents({ isMenu }: CMProps) {
	const [isMenuList, setIsMenuList] = useState([
		{
			postId: 0,
			category: '',
			menu: '',
			title: '',
			content: '',
			viewCount: '',
			heartCount: '',
			commentCount: '',
			uploadImg: '',
			writtenAt: '',
			writerNickName: '',
			writerProfileImg: '',
		},
	]);

	const items = [
		{
			postId: 1,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요',
			content: '자유게시판 내용이요',
			viewCount: '0',
			heartCount: '0',
			commentCount: '0',
			uploadImg: '업로드 img',
			writtenAt: '2022.06.05 20:25',
			writerNickName: '유저',
			writerProfileImg: '프로필 img',
		},
		{
			postId: 2,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요2',
			content: '자유게시판 내용이요2',
			viewCount: '2',
			heartCount: '2',
			commentCount: '2',
			uploadImg: '',
			writtenAt: '2022.06.05 20:30',
			writerNickName: '유저2',
			writerProfileImg: '',
		},
		{
			postId: 3,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요',
			content: '자유게시판 내용이요',
			viewCount: '0',
			heartCount: '0',
			commentCount: '0',
			uploadImg: '업로드 img',
			writtenAt: '2022.06.05 20:25',
			writerNickName: '유저',
			writerProfileImg: '프로필 img',
		},
		{
			postId: 4,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요2',
			content: '자유게시판 내용이요2',
			viewCount: '2',
			heartCount: '2',
			commentCount: '2',
			uploadImg: '',
			writtenAt: '2022.06.05 20:30',
			writerNickName: '유저2',
			writerProfileImg: '',
		},
		{
			postId: 5,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요',
			content: '자유게시판 내용이요',
			viewCount: '0',
			heartCount: '0',
			commentCount: '0',
			uploadImg: '업로드 img',
			writtenAt: '2022.06.05 20:25',
			writerNickName: '유저',
			writerProfileImg: '프로필 img',
		},
		{
			postId: 6,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요2',
			content: '자유게시판 내용이요2',
			viewCount: '2',
			heartCount: '2',
			commentCount: '2',
			uploadImg: '',
			writtenAt: '2022.06.05 20:30',
			writerNickName: '유저2',
			writerProfileImg: '',
		},
		{
			postId: 7,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요',
			content: '자유게시판 내용이요',
			viewCount: '0',
			heartCount: '0',
			commentCount: '0',
			uploadImg: '업로드 img',
			writtenAt: '2022.06.05 20:25',
			writerNickName: '유저',
			writerProfileImg: '프로필 img',
		},
		{
			postId: 8,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요2',
			content: '자유게시판 내용이요2',
			viewCount: '2',
			heartCount: '2',
			commentCount: '2',
			uploadImg: '',
			writtenAt: '2022.06.05 20:30',
			writerNickName: '유저2',
			writerProfileImg: '',
		},
		{
			postId: 9,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요',
			content: '자유게시판 내용이요',
			viewCount: '0',
			heartCount: '0',
			commentCount: '0',
			uploadImg: '업로드 img',
			writtenAt: '2022.06.05 20:25',
			writerNickName: '유저',
			writerProfileImg: '프로필 img',
		},
		{
			postId: 10,
			category: '커뮤니티',
			menu: '자유게시판',
			title: '자유게시판 제목이요2',
			content: '자유게시판 내용이요2',
			viewCount: '2',
			heartCount: '2',
			commentCount: '2',
			uploadImg: '',
			writtenAt: '2022.06.05 20:30',
			writerNickName: '유저2',
			writerProfileImg: '',
		},
	];

	useEffect(() => {
		setIsMenuList(items);
	}, [isMenu]);

	return (
		<section className="container mx-auto">
			<CommunityList isMenuList={isMenuList}></CommunityList>
			<CommunityNav></CommunityNav>
		</section>
	);
}
