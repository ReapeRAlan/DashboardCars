document.addEventListener('DOMContentLoaded', (event) => {
    const carsPerDayCtx = document.getElementById('carsPerDayChart').getContext('2d');
    const waitTimeCtx = document.getElementById('waitTimeChart').getContext('2d');
    const relevantDataCtx = document.getElementById('relevantDataChart').getContext('2d');

    const carsPerDayChart = new Chart(carsPerDayCtx, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Cars per Day',
                data: [120, 150, 180, 200, 170, 220, 250],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const waitTimeChart = new Chart(waitTimeCtx, {
        type: 'line',
        data: {
            labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
            datasets: [{
                label: 'Wait Time (minutes)',
                data: [5, 10, 8, 15, 12, 7, 5],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const relevantDataChart = new Chart(relevantDataCtx, {
        type: 'pie',
        data: {
            labels: ['S4', 'S3', 'S2', 'S1', 'N1', 'N2', 'N3', 'N4'],
            datasets: [{
                label: 'Usage by Level',
                data: [26, 24, 24, 24, 17, 24, 20, 26],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(199, 199, 199, 0.2)',
                    'rgba(83, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Parking Level Usage'
                }
            }
        }
    });
});
