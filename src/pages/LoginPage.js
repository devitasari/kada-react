const LoginPage = ({ name, handleOnchange }) => {
    return (
        <div>
            <h1>Login</h1>
            <input type='text' value={name} onChange={handleOnchange} placeholder="Input your email"></input>
            <input type='text' value={name} onChange={handleOnchange} placeholder="Input your password"></input>
            <button>Submit</button>
        </div>
    )
}

export default LoginPage