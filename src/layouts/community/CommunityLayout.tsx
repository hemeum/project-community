import React, { useState } from 'react';

import CHLayout from './CHLayout';
import CMLayout from './CMLayout';

export default function CommunityLayout() {
	const [isMenu, setIsMenu] = useState('자유게시판');
	return (
		<>
			<CHLayout isMenu={isMenu} setIsMenu={setIsMenu} />
			<CMLayout isMenu={isMenu} />
		</>
	);
}
