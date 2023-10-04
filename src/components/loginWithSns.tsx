import Image from 'next/image';

export default function LoginWithSns() {
	return (
		<div className='text-xs text-[#777] mt-4 text-center'>
			<ul className='p-4'>
				<li className='hover:cursor-pointer'>
					<Image
						priority
						src='/assets/kakao-login/kakao_login_large_narrow.png'
						width={1000}
						height={1000}
						alt='kakao login'
						className='fixed bottom-4 left-20 w-fit h-auto hover:border-2 hover:border-blue-500 rounded-xl'
					/>
				</li>
				{/* <li className='hover:text-[#555] hover:cursor-pointer'>
					<Image
						priority
						src='/assets/kakao-login/kakao_login_large_narrow.png'
						width={1000}
						height={1000}
						alt='kakao login'
						className='mx-auto w-auto h-auto border border-zinc-400 rounded-xl'
					/>
				</li>
				<li className='hover:text-[#555] hover:cursor-pointer'>3</li>
				<li className='hover:text-[#555] hover:cursor-pointer'>4</li> */}
			</ul>
		</div>
	);
}
