import { useState, useEffect } from 'react'
import axios from 'axios'

function ClimateApi () {
    const [postData, setPostData] = useState([]);
    const fetchData = async () => {
        try {
            const posts = await axios.get('/api/posts')
              console.log('CliamteApi', posts.data.data);
              setPostData(posts.data.data);
        } catch (err) {
              console.log('error fetching /posts', err)
        }
    };
    
    useEffect(() => {
        fetchData()
    }, [])
    return postData
}

export default ClimateApi
