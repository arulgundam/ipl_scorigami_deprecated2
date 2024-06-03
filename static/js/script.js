// script.js
fetch('/data')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const firstInningsScores = data.map(d => parseInt(d.first_innings_score));
        const secondInningsScores = data.map(d => parseInt(d.second_innings_score));

        const trace = {
            x: firstInningsScores,
            y: secondInningsScores,
            mode: 'markers',
            marker: {
                size: 8,
                symbol: 'square',
                line: {
                    color: 'rgb(30, 136, 229)',
                    width: 0.5
                },
                opacity: 0.8
            },
            type: 'scatter'
        };

        const layout = {
            title: 'IPL Scorigami',
            xaxis: {
                title: 'First Innings Score',
                range: [40, 300]
            },
            yaxis: {
                title: 'Second Innings Score',
                range: [40, 300]
            },
            hovermode: 'closest',
            height: 600,
            dragmode: false,
            selectdirection: 'none'
        };

        Plotly.newPlot('plot', [trace], layout);
    });