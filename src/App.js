import React from 'react';
import DonutTable from './DonutTable';


const App = () => {
  const donutData = [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters": {
        "batter": [
          {
            "id": "1001",
            "type": "Regular"
          },
          {
            "id": "1002",
            "type": "Chocolate"
          },
          {
            "id": "1003",
            "type": "Blueberry"
          }
        ]
      },
      "topping": [
        {
          "id": "5001",
          "type": "None"
        },
        {
          "id": "5002",
          "type": "Glazed"
        },
        {
          "id": "5005",
          "type": "Sugar"
        },
        {
          "id": "5007",
          "type": "Powdered Sugar"
        }
      ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters": {
        "batter": [
          {
            "id": "1001",
            "type": "Blueberry"
          }
        ]
      },
      "topping": [
        {
          "id": "5001",
          "type": "None"
        },
        {
          "id": "5002",
          "type": "Glazed"
        }
      ]
    }
  ]
    ;

  return (
    <div>
      <h1>Donut Table</h1>
      <DonutTable data={donutData} />
    </div>
  );
};

export default App;
