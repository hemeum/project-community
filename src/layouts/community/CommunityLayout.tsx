import React, { useState } from 'react';

import CHLayout from './CHLayout';
import CCLayout from './CCLayout';

export default function CommunityLayout() {
	const [isMenu, setIsMenu] = useState('자유게시판');
	return (
		<>
			<CHLayout isMenu={isMenu} setIsMenu={setIsMenu} />
			<CCLayout isMenu={isMenu} />
		</>
	);
}
