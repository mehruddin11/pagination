import {useState, useEffect, useCallback} from 'react';
import Paginate from './util';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'
export const useFetch =  () => {
		const [loading  ,setLoading ] =useState(true);
		const [fetchdata ,setFetchdata] = useState([]);
	const fetusers = useCallback(async() => {
		const response = await fetch(url);
		const getdata =  await response.json();
		setFetchdata(Paginate(getdata));
		setLoading(false)

	}, []);
useEffect(()=>{
	fetusers();
}, [ fetusers]);
	return {loading, fetchdata}

}
