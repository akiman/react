import React from 'react';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import FetchData from "./service/FetchData";

import './style.css';

class App extends React.Component {

    fetchData = new FetchData(); // объект со всеми методами

    //срабатывает ДО рендера
    componentDidMount() {
        this.updateRocket();
    }

    state = {
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [], // вытаскиваем имена ракет
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

    render() {

        console.log(this.state);

        return (
            <>
                <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
                <Main rocket={this.state.rocket}/>
                <Features /> {/*ДЗ вывести рокетФичи и поменять ракету на взлёте*/}
                <Footer/>
            </>
        );
    }
}

export default App;
