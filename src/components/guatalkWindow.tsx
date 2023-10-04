import Image from 'next/image';
import { forwardRef, MouseEvent } from 'react';
import LoginWithSns from './loginWithSns';
import LoginForm from './loginForm';

interface Props {
	onMouseDown: (e: MouseEvent) => void;
	onMouseMove: (e: MouseEvent) => void;
	onMouseUp: () => void;
	position: { x: number; y: number };
	isMouseDown: boolean;
}

const GuaTalkWindow = forwardRef<HTMLParagraphElement | null, Props>(
	(
		{ onMouseDown, onMouseMove, onMouseUp, position, isMouseDown }: Props,
		ref,
	) => {
		return (
			<div
				onMouseDown={onMouseDown}
				onMouseMove={onMouseMove}
				onMouseUp={onMouseUp}
				className='w-1/3 h-[40rem] bg-[#FEE500] p-5 rounded-xl'
				style={{
					transform: `translate(${position.x}px, ${position.y}px)`,
					cursor: isMouseDown ? 'grabbing' : 'grab',
				}}
				ref={ref}>
				<>
					<div className='mb-4'>
						<Image
							priority
							width={1000}
							height={100}
							alt='logo'
							src='/assets/gua.png'
							className='w-full h-auto rounded-xl'
						/>
					</div>

					<LoginForm />
					<LoginWithSns />
				</>
			</div>
		);
	},
);

GuaTalkWindow.displayName = 'GuaTalkWindow';

export default GuaTalkWindow;
