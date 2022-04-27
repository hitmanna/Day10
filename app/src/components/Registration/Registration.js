const Registration = () => {

	return (

<form method="POST" action="/auth/signup">
    <input name="email" placeholder="e-mail" type="email"/>
    <input name="name" placeholder="name" type="text"/>
    <input name="password" placeholder="password" type="password"/>
<button>Зарегистрироваться</button>
</form>

    )
}

export default Registration; 

