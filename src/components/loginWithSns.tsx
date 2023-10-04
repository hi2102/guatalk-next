export default function LoginWithSns() {
	return (
		<div className='text-xs text-[#777] absolute bottom-4'>
			<div className='hover:cursor-pointer hover:text-[#555] transition-all '>
				sns로 로그인
			</div>
			<hr className='border-[#777] w-20' />
			<ul className='flex justify-between w-16'>
				<li className='hover:text-[#555] hover:cursor-pointer'>1</li>
				<li className='hover:text-[#555] hover:cursor-pointer'>2</li>
				<li className='hover:text-[#555] hover:cursor-pointer'>3</li>
				<li className='hover:text-[#555] hover:cursor-pointer'>4</li>
			</ul>
		</div>
	);
}
