import React from 'react';

import CommunityMain from '../../components/community/CommunityContents';

import { CMProps } from '../../components/community/CommunityContents';

export default function CMLayout({ isMenu }: CMProps) {
	return (
		<main>
			<CommunityMain isMenu={isMenu}></CommunityMain>
		</main>
	);
}
