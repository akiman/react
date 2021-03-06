import React from "react";
import RelaxWrapper from 'react-rellax-wrapper';
import './features.css';

const img = {
    'Falcon 1': 'falcon-1',
    'Falcon 9': 'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    'Starship': 'starship',
}

const Features = ({name, height, diameter, mass, payload_weights, description}) => { // ��� ����������� ��� ��������, {} �� ����

    // const {name, height, diameter, mass, payload_weights, description} = props;

    return (
        <section className="features">
            <h2 className="features-title">
                {name}
                <br/>Overview
            </h2>
            <div className="overview">

                <table className="table">
                    <caption className="table-title">
                        Size
                    </caption>
                    <thead>

                    <tr>
                        <td className="table-column">HEIGHT</td>
                        <td className="table-column">{height.meters}. m
                            / {height.feet} ft
                        </td>
                    </tr>
                    <tr>
                        <td className="table-column">DIAMETER</td>
                        <td className="table-column">{diameter.meters} m
                            / {diameter.feet} ft
                        </td>
                    </tr>
                    <tr>
                        <td className="table-column">MASS</td>
                        <td className="table-column">{mass.kg} kg
                            / {mass.lb} lb
                        </td>
                    </tr>
                    <tr>
                        <td className="table-column">PAYLOAD TO LEO</td>
                        <td className="table-column">{payload_weights[0].kg} kg
                            / {payload_weights[0].lb} lb
                        </td>
                    </tr>
                    </thead>
                </table>
                <RelaxWrapper speed={14}><img
                    src={`./img/${img[name]}.png`}
                    alt="rocket"
                    className="rocket"
                />
                </RelaxWrapper>
                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">
                        {description}
                    </p>
                </article>
            </div>
        </section>
    )
};

export default Features;