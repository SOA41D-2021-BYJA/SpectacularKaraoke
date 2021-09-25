import React, { Component } from "react";
import Lyrics from './Lyrics.component'

export default class Music extends Component {
    constructor(){
        super();
        this.state = {
        play: false
        }
        this.audio='a'
        this.lyric=`
        Every night in my dreams
        I see you, I feel you
        That is how I know you, go on
        Far across the distance   
        And spaces between us
        You have come to show you, go on
        Near, far, wherever you are
        I believe that the heart does go on
        Once more you open the door
        And you're here in my heart and my heart will go on and on
        Love can touch us one time
        And last for a lifetime
        And never let go till we're gone
        Love was when I loved you
        One true time I hold you
        In my life we'll always go on
        Near, far, wherever you are
        I believe that the heart does go on
        Once more you open the door
        And you're here in my heart
        And my heart will go on and on
        You're here, there's nothing I fear
        And I know that my heart will go on
        We'll stay forever this way
        You are safe in my heart and my heart will go on and on`
    }
    
    componentDidMount() {
        this.audio = new Audio(this.props.url)
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }
    
    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }
  
    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <>
        <div class="card-header">
        <i class="fas fa-music me-1"> </i>
          Current song <span type="button" class="badge bg-primary rounded-pill">Sync</span>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: 400}} aria-valuenow="00" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <button class="list-group-item d-flex justify-content-center align-items-start" onClick={this.togglePlay}> {this.state.play ? 'Pause ⏸︎' :'Play ▶' } </button>
          <div class="list-group list-group-flush">
            <Lyrics lyrics={this.lyric} speed={200}></Lyrics>
        </div>
        </>
      );
    }
  }