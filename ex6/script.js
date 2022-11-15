

/*------------------------------------------------------------
--------------------VIEW1----------------------------
--------------------------------------------------------------*/

view1("http://webapi19sa-1.course.tamk.cloud/v1/weather");

function view1(url) {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let output = `<h1> Weather data from the last  30 measurements</h1>
        <br>
        <table class ="header">
        <thead>
        <tr>
            <th class="space">---------</th>
            <th>Row</th>
            <th class="space">------------------------</th>
            <th>Date</th>
            <th class="space">-------------------------------</th>
            <th>Time</th>
            <th class="space">-------------------</th>
            <th>Measurement Type</th>
            <th class="space">-------------</th>
            <th>Measured value</th>
        </tr>
        </thead>
        </table>
        `;
        for(let i = 0; i < 30; i++) {
            let row = i + 1;
            let measurements = data[i];
            let dateAndtime = measurements.date_time;
            let date = dateAndtime.split("T");
            let time = date[1].slice(0, -1);

            output += `
            <table class ="Weather">
                <tr>
                    <td>${row}</td>
                    <td>${date[0]}</td>
                    <td>${time}</td>
                    <td>${Object.keys(measurements.data)}</td>
                    <td>${Object.values(measurements.data)}</td>
                </tr>
            </table>
            `;
        } document.getElementById('output').innerHTML = output;
    })
}
