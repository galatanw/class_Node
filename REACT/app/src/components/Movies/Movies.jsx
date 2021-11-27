import { Component } from 'react'
import Movie from '../Movie/Movie'

export default class Movies extends Component {
    state = {
        movies: [

            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },
            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },
            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },
            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },
            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },
            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },
            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },
            {
                title: "sing 2",
                description: "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show."
                , year: 2021,
                trailer: "https://player.vimeo.com/external/629172467.hd.mp4?s=e71b1315dd040782d33db8e5e68055c645a1f4a2&profile_id=170"
            },


        ]
    }
    render() {
        
        return (
            <div>
                {this.state.movies.map((item,i)=>{
                return <Movie key={i} movie={item} />
                })}
            </div>
        )
    }
}
