import {useState, useEffect} from 'react';
import {useFetch} from './fetch';
import Allusers from './users';
function App() {
  const {loading ,fetchdata} = useFetch();
  const  [page, setpage] = useState(0);
  const [users, setUsers] =useState([])
  useEffect(()=>{
    if(loading) return ;
    setUsers(fetchdata[page]);
  }, [loading,fetchdata, page])
  const handlePage = (index)=>{
    return setpage(index)
  }
  const nextPage = () => {
    setpage((oldpage)=>{
      let  newPage = oldpage+1;
      if(newPage > fetchdata.length-1){
        newPage= 0
      }
      return newPage;
    })
  }
  const prevPage = () => {
    setpage((prevpage)=>{
      let prev = prevpage-1;
      if(prev < 0){
        prev = fetchdata.length-1;
      }
      return prev;
    })
  }
  return (
    <section>
      <div className= 'section-title'>
      <h1> {loading? 'Loading...' : 'Pagination'} </h1>
      <div className='underline'> 
      </div> 
      {!loading &&  <div  className='btn-container mt5 mb0'> 
      <button  className='prev-btn'  onClick = {prevPage}> <h4>Prev</h4> </button>
      {
        fetchdata.map((item ,index)=>{
          return <button key ={index} className= {`page-btn ${index === page ? 'active-btn':null} `} onClick = {()=> handlePage(index)} > {index + 1}</button>
        })
      }
      <button className='next-btn'  onClick = {nextPage}><h4> Next</h4> </button>
      </div> }
      <div className='newusesr'>
      <article className='container'>
      {
        users.map((data)=>{
          return <Allusers key = {data.id} {...data}/>
        })
      }
      </article>
      {!loading &&  <div className='btn-container'> 
      <button className='prev-btn' onClick = {prevPage}> Prev </button>
      {
        fetchdata.map((item ,index)=>{
          return <button key ={index} className= {`page-btn ${index === page ? 'active-btn':null} `} onClick = {()=> handlePage(index)} > {index + 1}</button>
        })
      }
      <button className='next-btn' onClick = {nextPage}> Next </button>
      </div> }
      </div>
      </div>
    </section>
  );
}
export default App;
