import React from 'react';

import { CHProps } from '../../components/community/CommunityHeader';

import CommunityHeader from '../../components/community/CommunityHeader';

export default function CHLayout({ isMenu, setIsMenu }: CHProps) {
	return (
		<>
			<header className="container mx-auto mt-12">
				<CommunityHeader
					isMenu={isMenu}
					setIsMenu={setIsMenu}
				></CommunityHeader>
			</header>
			<hr></hr>
		</>
	);
}
