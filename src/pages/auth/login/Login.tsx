import React from 'react';
import './login.scss';

export const Login: React.FC = (): React.JSX.Element => {
  return (
		<div className="login">
			<input type="text" className="login__input" placeholder='Email address'/>
			<input type="text" className="login__input"  placeholder='Set A Password'/>
		</div>
  );
}
