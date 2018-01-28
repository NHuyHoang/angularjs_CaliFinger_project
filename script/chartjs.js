var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["IQ", "FLEX", "HANDSOME", "MUSCLE", "SOMETHING", "ANOTHER"],
        datasets: [{
            label: '# of Votes',
            data: [12, 30, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderColor: [
                'rgb(255,99,132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(255, 159, 64, 1)",
                    zeroLineColor: "rgba(255,255,255,0.5)"
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(255, 159, 64, 1)",
                    zeroLineColor: "rgba(255, 159, 64, 1)"
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx2 = document.getElementById("myRadarChart");
ctx2.height = 400;
ctx2.width = 400;
var data = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [{
        label: "My First dataset",
        backgroundColor: "rgba(255, 206, 86, 0.4)",
        borderColor: "rgba(255, 206, 86, 1)",
        pointBorderColor: "rgba(255, 206, 86, 1)",
        pointBackgroundColor: "rgba(255, 206, 86, 1)",
        pointHoverBackgroundColor: "#FFCE56",
        pointHoverBorderColor: "rgba(255, 206, 86, 1)",
        data: [65, 59, 90, 81, 56, 55, 40]
    }, {
        label: "My Second dataset",
        backgroundColor: "rgba(38, 185, 154, 0.2)",
        borderColor: "rgba(38, 185, 154, 0.85)",
        pointColor: "rgba(38, 185, 154, 0.85)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28, 48, 40, 19, 96, 27, 100]
    }]
};

Chart.defaults.global.defaultFontColor = 'rgba(255, 159, 64, 1)';

var myRadarChart = new Chart(ctx2, {
    type: 'radar',
    data: data,
    options: {
        maintainAspectRatio: false,
        defaultColor: "#E86A0C",
        
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'red'
            }
        },
        scale: {
            angleLines: {
                color: "#E86A0C"
            },
            gridLines:{
                color: "#E86A0C"
            },
        },
        elements:{
            arc:{
                backgroundColor: "#E86A0C",
                borderColor: "#E86A0C",
            }
        },
        chartArea: {
            backgroundColor: '#E86A0C'
        }
    }
});

console.log(myRadarChart);