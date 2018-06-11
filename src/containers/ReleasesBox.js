import React, {Component} from 'react';
import ReleasesList from '../components/ReleasesList';

class ReleasesBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, title: "Jurassic Park", year: "1993", url: "https://www.imdb.com/title/tt0107290/"},
        {id: 2, title: "The Lost World", year: "1997", url: "https://www.imdb.com/title/tt0119567/?ref_=tt_rec_tti"},
        {id: 3, title: "Jurassic Park III", year: "2001", url: "https://www.imdb.com/title/tt0163025/?ref_=tt_rec_tt"},
        {id: 4, title: "Jurassic World", year: "2015", url: "https://www.imdb.com/title/tt0369610/?ref_=tt_rec_tt"},
        {id: 5, title: "Fallen Kingdom", year: "2018", url: "https://www.imdb.com/title/tt4881806/?ref_=tt_rec_tt"}
      ]
    }
  }

  render(){
    return (
      <div className="release-box">
        <p>Jurassic Park Films</p>
        <ReleasesList data={this.state.data}/>
      </div>
    )
  }
}



export default ReleasesBox;
