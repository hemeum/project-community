import React from 'react';

import CommunityHeader from '../../components/community/CommunityHeader';

export default function CHLayout() {
	return (
		<>
			<div className="container mx-auto mt-12">
				<CommunityHeader></CommunityHeader>
			</div>
			<hr></hr>
		</>
	);
}
