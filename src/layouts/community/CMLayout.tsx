import React from 'react';

import CommunityMain from '../../components/community/CommunityMain';

import { CMProps } from '../../components/community/CommunityMain';

export default function CMLayout({ isMenu }: CMProps) {
	return (
		<main>
			<CommunityMain isMenu={isMenu}></CommunityMain>
		</main>
	);
}
