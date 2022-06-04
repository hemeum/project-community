import React from 'react';

export interface CMProps {
	isMenu: string;
}

export default function CommunityMain({ isMenu }: CMProps) {
	return <>{isMenu}</>;
}
