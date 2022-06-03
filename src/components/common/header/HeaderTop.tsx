import React from 'react';

export interface HeaderTopProps {
	category: string;
}

export default function HeaderTop({ category }: HeaderTopProps) {
	return (
		<div className="flex justify-between mb-8">
			<h1 className="text-5xl">{category}</h1>
			<div className="flex items-center">
				<button
					className="h-3/4 px-4 text-base font-bold rounded-full border border-solid border-sky-900 text-sky-900  transition-all duration-300 hover:bg-sky-900 hover:text-white"
					type="button"
				>
					로그인
				</button>
			</div>
		</div>
	);
}
