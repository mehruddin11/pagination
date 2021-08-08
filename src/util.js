const Paginate = (users) => {
	const itemPerPage =9;
	const page = Math.ceil(users.length/itemPerPage);
	const newArray = Array.from({length:page} , (_, index) =>{
		 
		const start = index * itemPerPage;
		return users.slice(start, start+itemPerPage);
	});
	return newArray;
}
export default  Paginate;