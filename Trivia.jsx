import React, {useState,useEffect}from 'react'
import '../index.css'

 

export default function Trivia() {
    
    const [state, setState] = useState({
        value:'',
        show:''
    });

    const handleChange = (e) => {
        setState({value: e.target.value})

    }

    const submit = () => {
    setState({show: state.value})
    
    }


  const [data, setData] = useState(null)
  const fetchURL = "https://jservice.io/api/random"
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())
 
  useEffect(() => {
    getData().then((data) => 
    setData(data))
  }, [])

  
 
        return (
            <div>
            {data?.map((item) => 
                <div>
                <h4>{item.question}</h4>
                <input
                type="text" value={item.answer} onChange={(e)=>handleChange(e)} 
                className="form-control" placeholder="Answer"/>
            </div>
            )}
            <form onSubmit={e => e.preventDefault()}   >
                 
         <button onClick = {() =>submit()}
         
          type="" className="btn btn-primary mb-3">Confirm identity</button>
            </form>
                
        <h2>{state.show}</h2>
            </div>
        )
        }
