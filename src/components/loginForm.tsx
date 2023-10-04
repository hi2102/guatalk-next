export default function LoginForm() {
	return (
		<form className='w-full flex flex-col gap-2 mt-4'>
			<input
				className='w-full h-12 border rounded py-2 px-4'
				name='input_id'
				type='text'
				placeholder='과톡계정'
				autoComplete='username'
			/>

			<input
				className='w-full h-12 border rounded py-2 px-4 '
				name='input_pw'
				type='password'
				placeholder='비밀번호'
				autoComplete='current-password'
			/>
			<button
				className='px-4 py-2 rounded bg-stone-50 hover:bg-stone-500 hover:text-amber-100 '
				type='button'>
				로그인
			</button>
			<div className='text-xs flex justify-start items-center h-5 gap-1 text-[#777]'>
				<input id='checkbox' type='checkbox' name='autoLogin' />
				<label
					htmlFor='checkbox'
					className='hover:cursor-pointer hover:font-semibold'>
					실행시 자동 로그인
				</label>
			</div>
		</form>
	);
}
