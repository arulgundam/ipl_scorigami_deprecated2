fetch('/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);

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
            type: 'scatter',
            text: data.map(d => `<i>${d.description}</i><br><span>${d.name} | <b>${d.result}</b> | 1st: ${d.first_innings_score}, 2nd: ${d.second_innings_score}<span>`), // Updated hover text format
            hoverinfo: 'text',
            hoverlabel: { bgcolor: 'white', bordercolor: 'black', font: { size: 12, color: 'black' }, namelength: 0 }, // Set namelength to 0 to remove "Trace 0" label
            hovertemplate: '%{text}' // Display hover text
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
