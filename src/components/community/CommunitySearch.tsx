import React, { useState } from 'react';

export default function CommunitySearch() {
	const [menuToggle, setMenuToggle] = useState(false);
	const [optionToggle, setOptionToggle] = useState(false);

	const handleMenu = () => {
		setMenuToggle(!menuToggle);
		setOptionToggle(false);
	};

	const handleOption = () => {
		setOptionToggle(!optionToggle);
		setMenuToggle(false);
	};

	return (
		<div className="flex h-10">
			<span className="cursor-pointer text-sm" onClick={handleMenu}>
				<div
					className={`w-32 border border-solid border-box border-gray-300 h-full px-2 flex justify-between items-center`}
				>
					자유게시판
					<i className="fa-solid fa-angle-down"></i>
				</div>
				<ul
					className={`w-32 px-2 py-3 border border-solid border-t-0 border-box border-gray-300 ${
						menuToggle ? 'opacity-1 visible' : 'opacity-0 invisible'
					}`}
				>
					<li className="py-1">커뮤니티 전체</li>
					<li className="py-1">자유게시판</li>
					<li className="py-1">정보게시판</li>
					<li className="py-1">토론게시판</li>
				</ul>
			</span>
			<span className="relative cursor-pointer text-sm" onClick={handleOption}>
				<div
					className={`w-24 flex justify-between items-center border border-solid  border-box border-r-0 border-l-0 border-gray-300 h-full px-2`}
				>
					제목
					<i className="fa-solid fa-angle-down ml-8"></i>
				</div>
				<ul
					className={`w-full px-2 py-3 border border-solid border-t-0 border-box border-gray-300 ${
						optionToggle ? 'opacity-1 visible' : 'opacity-0 invisible'
					}`}
				>
					<li className="py-1">제목</li>
					<li className="py-1">작성자</li>
					<li className="py-1">태그</li>
				</ul>
			</span>
			<span className="relative">
				<input
					className="text-left leading-7 border border-solid border-gray-300 border-box h-full px-4 text-sm"
					type="text"
				></input>
				<i className="fa-solid fa-magnifying-glass absolute right-2 top-1/2  -translate-y-1/2 cursor-pointer"></i>
			</span>
		</div>
	);
}
