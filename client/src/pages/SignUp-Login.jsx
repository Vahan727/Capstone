import React, { useState } from 'react';
// import UserContext from '../Context';
import { useHistory } from 'react-router-dom'
import {useFormik} from "formik"
import * as yup from "yup"

// function SignUp() {
// const {user, setUser} = useContext(UserContext);
// const [username, setUsername] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const history = useHistory()

// const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
// };

// const handleEmailChange = (event) => {
//     setEmail(event.target.value);
// };

// const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
// };

// const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('/api/users/signup', {
//         method: 'POST',
//         body: JSON.stringify({ username, email, password }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         })
//         .then(response => response.json())
//         .then((user) => {
//         setUser(user);
//         history.push("/");
//     })
//     .catch((err) => console.error(err));
// };
// //             if (data.user) {
// //             const { id } = data.user; 
// //             const updatedUserState = {
// //                 id: id,
// //                 username: username,
// //                 email: email,
// //                 signedIn: true
// //             };
// //             updateUserState(updatedUserState);
// //             console.log(updatedUserState);
// //             }
// //         })
// //     .catch(error => console.error(error));;
// //     // Reset the form fields
// //     setUsername('');
// //     setEmail('');
// //     setPassword('');
// // };

// return (
//     <div>
//         <h2>Sign Up</h2>
//         <form onSubmit={handleSubmit}>
//         <div>
//         <label htmlFor="username">Username:</label>
//         <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//         />
//         </div>
//         <div>
//         <label htmlFor="email">Email:</label>
//         <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//         />
//         </div>
//         <div>
//         <label htmlFor="password">Password:</label>
//         <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             />
//         </div>
//         <button type="submit">Register</button>
//         </form>
//     </div>
//     );
// }

// export default SignUp;
// import React, { useState } from "react";
// import UserContext from './Context.jsx'
// import Login from '../components/Login.jsx'
// import SignUp from '../components/SignUp.jsx'


function Process({updateUser}){
//     const[showLogin, setShowLogin] = useState(false)
//     const[showSignup, setShowSignup] = useState(false)

//     const handleLoginClick = () => {
//         setShowLogin(!showLogin)
//     };
    
//     const handleSignupClick = () => {
//         setShowSignup(!showSignup)
//     };
    
// return (
//     <div>
//         <h1 onClick={handleLoginClick}>
//         Login
//         </h1>
//         {showLogin && <Login updateUser={updateUser}/>}
//         <h1 onClick={handleSignupClick}>
//         Signup
//         </h1>
//         {showSignup && <SignUp updateUser={updateUser}/>}
//     </div>
// );
const [signup, setSignup] = useState(true);

	const history = useHistory();
	const toggleSignup = () => setSignup((prev) => !prev);

	const formSchema = yup.object().shape({
		email: yup.string("Enter an email address"),
		username: yup.string().required("Enter a username"),
		password: yup.string().required("Enter a password"),
	});
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validationSchema: formSchema,
		onSubmit: (values, actions) => {
			fetch(signup ? "/api/users/signup" : "/api/users/login", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(values),
			}).then((res) => {
				if (res.ok) {
					res.json().then((data) => {
						actions.resetForm();
						updateUser(data);
						history.push("/");
					});
				} 
                else {
					console.log("Error trying to signup/login")
				}
			});
		},
	});

	return (
		<section>
			{signup ? (
				<form className="form" onSubmit={formik.handleSubmit}>
					<label>Email</label>
					<input
						type="text"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<label>Username</label>
					<input
						type="text"
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{/* formik.touched is enabled with onBlur */}
					{/* 
						1. onBlur events - toggles formik.touched
						2. conditional: if formik.touched and formik.errors 
					*/}
					{formik.touched.username && formik.errors.username ? (
						<h3>{formik.errors.username}</h3>
					) : (
						""
					)}
					<label>Password</label>

					<input
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? (
						<h3>{formik.errors.password}</h3>
					) : (
						""
					)}
					<input type="submit" value="Sign Up" className="button" />
				</form>
			) : (
				<form className="form" onSubmit={formik.handleSubmit}>
					<label>Username</label>

					<input
						type="text"
						name="username"
						value={formik.values.username}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.username && formik.errors.username ? (
						<h3>{formik.errors.username}</h3>
					) : (
						""
					)}
					<label>Password</label>

					<input
						type="password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.password && formik.errors.password ? (
						<h3>{formik.errors.password}</h3>
					) : (
						""
					)}
					<input type="submit" value="Log In" className="button" />
				</form>
			)}
			<section>
				<p>{signup ? "Already have an account?" : "Not a member?"}</p>
				<button className="button" onClick={toggleSignup}>
					{signup ? "Login" : "Sign Up"}
				</button>
			</section>
		</section>
	);
}

export default Process