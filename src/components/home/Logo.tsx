import React from 'react';

import logoPng from './../../assets/logo.png';
import logoWebp from './../../assets/logo.webp';

export default function Logo() {
	return (
		<picture>
			<source srcSet={logoWebp} type="image/webp"></source>
			<img src={logoPng} alt="넥슨 커뮤니티 로고 이미지"></img>
		</picture>
	);
}
