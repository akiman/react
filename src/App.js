import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FetchData from "./service/FetchData";

import './style.css';
import Calendar from "./components/Calendar/Calendar";
import Details from "./components/Details/Details";

class App extends React.Component {

    fetchData = new FetchData(); // объект со всеми методами

    //срабатывает ДО рендера
    componentDidMount() {
        this.updateRocket();
        this.updateCompany();
    }

    state = {
        rocket: 'Falcon 1',
        // rocketFeatures: null,
        rocketFeatures: null, // вытаскиваем параметры каждой ракеты
        rockets: [], // вытаскиваем имена ракет
        company: null,
    };

    changeRocket = rocket => {
        this.setState({
            rocket
        }, this.updateRocket);
    }

    updateRocket() {
        console.log(this.state); // Видим, что сначала пусто

        this.fetchData.getRocket()
            .then(data => {
                this.setState({rockets: data.map(item => item.name)}); // попутно получаем имена ракет
                return data // пробрасываем данные дальше в следующий then
            })
            .then(data => data.find(item => item.name === this.state.rocket))
            .then(rocketFeatures => {
                this.setState({rocketFeatures}, () => console.log(this.state));
            });

    }

    updateCompany = () => {
        console.log(this.state); // Видим, что сначала пусто

        this.fetchData.getCompany()
            .then(company => this.setState({company}));
    }


    render() {

        console.log(this.state);

        return (
            <BrowserRouter>
                <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>

                <Route exact path='/'>
                    {this.state.company && <Home company={this.state.company} />}

                </Route>

                <Route path='/rocket'>
                    <Main rocket={this.state.rocket}/>
                    {this.state.rocketFeatures && <Features {...this.state.rocketFeatures} />}
                </Route>

                <Route path='/calendar'>
                    <Main />
                    <Calendar />
                </Route>

                <Route path='/details'>
                    <Main />
                    <Details />
                </Route>

                    {this.state.company && <Footer {...this.state.company}/>}
            </BrowserRouter>
        );
    }
}

export default App;
