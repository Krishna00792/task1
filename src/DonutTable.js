import React from 'react';
import './styles.css';

const DonutTable = ({ data }) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Price per Unit</th>
                        <th>Batters</th>
                        <th>Toppings</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((donut) => (
                        donut.batters.batter.map((batter) => (
                            <tr key={donut.id}>
                                <td>{donut.id}</td>
                                <td>{donut.type}</td>
                                <td>{donut.name}</td>
                                <td>{donut.ppu}</td>
                                <td>
                                    <ul>
                                        <li key={batter.id}>{batter.type}</li>
                                    </ul>
                                </td>
                                <td>
                                    <p>
                                        {donut.topping.map((topping, index) => (
                                            <React.Fragment key={topping.id}>
                                                {index !== 0 && ", "}
                                                {topping.type}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonutTable;
