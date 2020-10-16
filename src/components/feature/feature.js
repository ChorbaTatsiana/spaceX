import React from 'react';
import './feature.css';
import RellaxWrapper from 'react-rellax-wrapper'

const rocketImage = {
    'Falcon 1': 'falcon-1',
    'Falcon 9':'falcon-9',
    'Falcon Heavy': 'falcon-heavy',
    'Starship': 'starship',

}
function Feature(props) {
    console.log(props);
    const { payload_weights } = props;
    return (
        <section className="features">
            <h2 className="features-title">
                {props.name} <br />Overview
		    </h2>
            <div className="overview">

                <table className="table">
                    <caption className="table-title">
                        Size
				</caption>
                    <thead>
                        <tr>
                            <td className="table-column">HEIGHT</td>
                            <td className="table-column">{props.height.meters}
                            </td>
                        </tr>
                        <tr>
                            <td className="table-column">DIAMETER</td>
                            <td className="table-column">{props.diameter.meters} m / {props.diameter.feet} ft</td>
                        </tr>
                        <tr>
                            <td className="table-column">MASS</td>
                            <td className="table-column">{props.mass.kg} kg / {props.mass.lb} lb</td>
                        </tr>
                        {payload_weights.map(item => (
                            <tr key={item.id}>
                                <td className="table-column">PAYLOAD TO LEO {item.id.toUpperCase()}</td>
                                <td className="table-column">{item.kg} kg / {item.lb} lb</td>
                            </tr>
                        ))}

                    </thead>
                </table>
                <RellaxWrapper speed={14}>
                    <img
                        src={`img/${rocketImage[props.name]}.png`}
                        alt="rocket"
                        className="rocket"
                        data-rellax-speed="14"
                    />
                </RellaxWrapper>
                <article>
                    <h3 className="features-subtitle">DESCRIPTION</h3>
                    <p className="features-text">
                        {props.description}
                    </p>
                </article>
            </div>
        </section>
    )
};
export default Feature;

