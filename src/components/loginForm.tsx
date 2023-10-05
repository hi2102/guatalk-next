'use client';

import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';

export default function LoginForm() {
	// 메인화면 로그인 상태
	const [userId, setUserId] = useState('');
	const [userPassword, setUserPassword] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === 'input_id') {
			setUserId(e.target.value);
		} else if (e.target.name === 'input_pw') {
			setUserPassword(e.target.value);
		}
	};

	const handleSubmit = (e: FormEvent) => e.preventDefault();
	return (
		<form className='w-full flex flex-col gap-2 mt-4' onSubmit={handleSubmit}>
			<input
				className='w-full h-12 border rounded py-2 px-4'
				name='input_id'
				type='text'
				placeholder='과톡계정'
				autoComplete='username'
				value={userId}
				onChange={handleChange}
			/>

			<input
				className='w-full h-12 border rounded py-2 px-4 '
				name='input_pw'
				type='password'
				placeholder='비밀번호'
				value={userPassword}
				autoComplete='current-password'
			/>
			<button
				className='px-4 py-2 rounded bg-stone-50 hover:bg-stone-500 hover:text-amber-100 '
				type='button'>
				로그인
			</button>
			<div className='text-xs flex justify-between items-center h-5 text-[#777]'>
				<div className='flex justify-start items-center'>
					<input id='checkbox' type='checkbox' name='autoLogin' />
					<label
						htmlFor='checkbox'
						className='hover:cursor-pointer hover:font-semibold ml-0.5'>
						실행시 자동 로그인
					</label>
				</div>
				<GotoSignUp />
			</div>
		</form>
	);
}

function GotoSignUp() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				{session?.user?.name} <br />
				<button onClick={() => signOut()}>Sign Out</button>
			</>
		);
	}
	return (
		<Link
			href='http://localhost:3000/api/auth/signin'
			className='hover:cursor-pointer hover:text-[#555] transition-all '>
			회원 가입 | SNS로 로그인
		</Link>
	);
}
