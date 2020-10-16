import React from 'react';

import Header from './components/header/header';
import Main from './components/main/main';
import Feature from './components/feature/feature';
import Footer from './components/footer/footer';
// import Calendar from './components/calendar/calendar';
// import Detail from './components/detail/detail';
import RellaxWrapper from 'react-rellax-wrapper';

import FetchData from './service/FetchData';
import './style.css';


class App extends React.Component {

  FetchData = new FetchData();
  state = {
    rocket: 'Falcon-1',
    rocketFeatures: null,
    rockets: [],
    company: null,
  }

  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
  }

  updateRocket() {
    this.FetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures });
      });
  }

  updateCompany = () => {
    this.FetchData.getCompany()
    .then(data => this.setState({ company: data }))
  }

  changeRocket = (rocket) => {
    this.setState({
      rocket
    }, this.updateRocket);
  }
 
  render() {

    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket} />
        {this.state.rocketFeatures && <Feature {...this.state.rocketFeatures}/>}
       {this.state.company &&  <Footer  {...this.state.company.links}/>}
      </>
    );
  }
}



export default App;

