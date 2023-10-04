'use client';

import { MouseEvent, useRef, useState } from 'react';
import MoveCoordinate from '@/components/moveCoordinate';
import GuaTalkWindow from '@/components/guatalkWindow';

interface PositionProps {
	x: number;
	y: number;
}

export default function Home() {
	const [isMouseDown, setIsMouseDown] = useState(false);
	const pRef = useRef<HTMLParagraphElement | null>(null);
	const [startPosition, setStartPosition] = useState<PositionProps | null>(
		null,
	);
	const [position, setPosition] = useState<PositionProps>({
		x: 0,
		y: 0,
	});

	function handleMouseDown(e: MouseEvent) {
		e.preventDefault();
		if (pRef.current) {
			const { left, top } = pRef.current.getBoundingClientRect();
			// 클릭 이벤트의 시작 위치 저장
			setStartPosition({ x: e.clientX - left, y: e.clientY - top });
		}
		setIsMouseDown(true);
	}

	function handleMouseMove(e: MouseEvent) {
		if (startPosition) {
			// 클릭 이벤트의 시작 위치와 현재 마우스 위치의 차이 계산
			const deltaX = e.clientX - startPosition.x;
			const deltaY = e.clientY - startPosition.y;
			setPosition({ x: deltaX, y: deltaY });
		}
	}

	function handleMouseUp() {
		// 클릭 이벤트 종료 시 시작 위치 초기화
		setStartPosition(null);
		setIsMouseDown(false);
	}

	const [show, setShow] = useState(false);
	function handleClick(e: MouseEvent<HTMLOListElement>) {
		e.preventDefault();
		setShow((show) => !show);
	}

	return (
		<div className='relative w-screen h-screen'>
			<GuaTalkWindow
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				position={position}
				isMouseDown={isMouseDown}
				ref={pRef}
			/>

			<MoveCoordinate show={show} position={position} onClick={handleClick} />
		</div>
	);
}
