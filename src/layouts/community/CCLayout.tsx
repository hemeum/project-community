import React from 'react';

import CommunityContents from '../../components/community/CommunityContents';

import { CMProps } from '../../components/community/CommunityContents';

export default function CMLayout({ isMenu }: CMProps) {
	return (
		<main className="my-12">
			<section className="container mx-auto">
				<CommunityContents isMenu={isMenu}></CommunityContents>
			</section>
		</main>
	);
}
