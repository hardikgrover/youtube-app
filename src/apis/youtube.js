import axios from 'axios'


const KEY = 'AIzaSyD7CHdZBNq1p6HnNiINDP13dYfNBabNZaI' ;

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part :'snippet',
        maxResults :5,
        key : KEY
    }
})

