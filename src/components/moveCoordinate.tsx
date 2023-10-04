import { MouseEvent } from 'react';

interface Props {
	show: boolean;
	position: { x: number; y: number };
	onClick: (e: MouseEvent<HTMLOListElement>) => void;
}

export default function MoveCoordinate({ onClick, show, position }: Props) {
	return (
		<ol
			className='absolute bottom-4 right-4 bg-blue-500 text-slate-50 p-2 rounded-xl hover:cursor-pointer text-xs'
			onClick={onClick}>
			{show ? (
				<div className='relative flex'>
					<span className='animate-ping absolute -right-1 -top-1 h-3 w-3 rounded-full bg-fuchsia-100 opacity-75'></span>
					<li>이동 위치 열기</li>
				</div>
			) : (
				<>
					<li className='mb-1'>이동 위치 닫기</li>
					<li>x : {Math.floor(position.x)}</li>
					<li>y : {Math.floor(position.y)}</li>
				</>
			)}
		</ol>
	);
}
