import React from 'react';
import { Link } from 'react-router-dom';

export default function StartButton() {
	return (
		<Link to="/community">
			<button
				className="text-xl font-bold rounded-lg border border-solid border-sky-900 text-sky-900 py-3 px-4 hover:bg-sky-900 hover:text-white transition-all duration-300"
				type="button"
			>
				커뮤니티 시작하기
			</button>
		</Link>
	);
}
