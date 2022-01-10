import {useState, useEffect} from 'react'
import axios from 'axios'

function SearchAPI() {
    const [text, setText] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(() =>{
        const getText = async () =>{
            const res = await axios.get('/api/brands/all')
            setText(res.data.brands)
        }

        getText()
    },[callback])
    return {
        text: [text, setText],
        callback: [callback, setCallback]
    }
}

export default SearchAPI
