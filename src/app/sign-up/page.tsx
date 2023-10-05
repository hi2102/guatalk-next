import Link from 'next/link';

export default function SignUp() {
	return (
		<div className='bg-neutral-100 w-screen h-screen '>
			<h1 className='min-w-[46rem] text-center text-2xl pt-20'>회원 가입</h1>
			<form>
				<div className='min-w-[36rem] mx-20 my-10 pl-10 pr-16 py-20 border border-gray-500 rounded-xl grid grid-cols-2 gap-8 bg-neutral-200 '>
					<div className='min-w-[14rem]'>
						<label htmlFor='email' className='mx-2'>
							이메일
						</label>
						<input
							required
							className='w-full border border-gray-400 px-4 py-2 mx-2 rounded-lg'
							id='email'
							type='email'
							placeholder='name'
						/>
					</div>
					<div className='min-w-[14rem]'>
						<label htmlFor='user_id' className='mx-2'>
							아이디
						</label>
						<input
							required
							className='w-full border border-gray-400 px-4 py-2 mx-2 rounded-lg'
							type='text'
							id='user_id'
							placeholder='id'
						/>
					</div>
					<div className='min-w-[14rem]'>
						<label htmlFor='password' className='mx-2'>
							비밀번호
						</label>
						<input
							required
							className='w-full border border-gray-400 px-4 py-2 mx-2 rounded-lg'
							type='password'
							id='password'
							placeholder='password'
						/>
					</div>
					<div className='min-w-[14rem]'>
						<label htmlFor='confirm_password' className='mx-2'>
							비밀번호 확인
						</label>
						<input
							required
							className='w-full border border-gray-400 px-4 py-2 mx-2 rounded-lg'
							type='password'
							id='confirm_password'
							placeholder='confirm password'
						/>
					</div>
				</div>
			</form>
			<Link
				href='/'
				className='bg-green-500 text-slate-100 px-4 py-2 rounded-lg fixed bottom-20 left-20 hover:bg-slate-200 hover:text-slate-700 '>
				처음 화면으로 가기
			</Link>
		</div>
	);
}
