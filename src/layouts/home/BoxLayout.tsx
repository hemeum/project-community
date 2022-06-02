import React from 'react';

import LogoLayout from './LogoLayout';
import StartButtonLayout from './StartButtonLayout';

export default function BoxLayout() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div>
				<LogoLayout />
				<StartButtonLayout />
			</div>
		</div>
	);
}
