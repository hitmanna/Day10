const SignIn = () => {

return (

<form method="POST" action="/auth/signin">
    <input name="email" placeholder="e-mail" type="email"/>
    <input name="password" placeholder="password" type="password"/>
    <button>Войти</button>
</form>

)

}

export default SignIn
