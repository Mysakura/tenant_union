<script>
    import { Bar } from 'vue-chartjs'
    export default {
        name: "DataChartA",
        extends: Bar,
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                // datasets: [
                //     {
                //         label: 'GitHub Commits',
                //         backgroundColor: '#f87979',
                //         data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                //     }
                // ]
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    type: 'line',
                    label: '用户增长率',
                    backgroundColor: 'rgb(54, 162, 235)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 2,
                    fill: false,
                    data: [
                        10,
                        125,
                        101,
                        15,
                        190,
                        150,
                        70,
                        53,
                        68,
                        35,
                        23,
                        126
                    ]
                }, {
                    type: 'line',
                    label: '帖子增长率',
                    backgroundColor: 'rgb(255, 205, 86)',
                    borderColor: 'rgb(255, 205, 86)',
                    borderWidth: 2,
                    fill: false,
                    data: [
                        102,
                        125,
                        50,
                        15,
                        90,
                        60,
                        70,
                        65,
                        135,
                        47,
                        89,
                        46
                    ]
                }, {
                    type: 'bar',
                    label: '用户数',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: [
                        100,
                        200,
                        300,
                        400,
                        500,
                        600,
                        700,
                        800,
                        900,
                        1000,
                        1100,
                        1200
                    ],
                    borderColor: 'white',
                    borderWidth: 2
                }, {
                    type: 'bar',
                    label: '帖子数',
                    backgroundColor: 'rgb(75, 192, 192)',
                    data: [
                        10,
                        20,
                        30,
                        40,
                        50,
                        60,
                        70,
                        80,
                        90,
                        100,
                        110,
                        120
                    ],
                    borderColor: 'white',
                    borderWidth: 2
                }]
            },{
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '趋势分布'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            })
        }
    }
</script>

<style scoped>

</style>
