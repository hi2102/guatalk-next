'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
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
		<>
			Not Signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	);
}

export default AuthButton;
