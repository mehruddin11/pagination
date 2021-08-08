const Allusers = ({avatar_url, html_url, login}) => {
	return (
		<section className='card'>
		<img src= {avatar_url } alt ={login }/>
		<h4> {login } </h4>
		<a href = {html_url } className='btn'>
		 user profile 
		 </a>

		</section>

		)
}
export default Allusers;