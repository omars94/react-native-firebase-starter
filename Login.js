import Login from 'react-native-simple-login'
 
 
const onLogin = (email, password) => {
  console.log(email, password) // user credentials
}
 
const onResetPassword = (email) => {
  console.log(email)
}
 
default class Login {
	<Login
		onLogin={onLogin}
		onResetPassword={onResetPassword}
	   />
}