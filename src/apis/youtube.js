import axios from 'axios'

const KEY = 'Access_Key'

export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults:10,
        key:KEY
    }
})