import {useState} from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
const SingleQuestion = ({id, title, info}) =>{
	const [show, setShow] =useState(false);
	return (
		<article className ='question'>
		<header>
			<h3> {title} </h3>
			<button className='btn' onClick= {() => setShow(!show)} >{
				show ? <AiOutlineMinus/> :<AiOutlinePlus/>
				}
			 </button>
			
		</header>
		{show &&<p> {info} </p> }
		</article>
		)
}
export default SingleQuestion;