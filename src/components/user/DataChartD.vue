<script>
    import { Pie } from 'vue-chartjs'
    export default {
        name: "DataChartC",
        extends: Pie,
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['曝光', '分享'],
                datasets: [{
                    backgroundColor: ['rgb(255, 99, 132)','rgb(54, 162, 235)'],
                    data: [
                        10,
                        20
                    ]
                }]
            },{
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '帖子分布'
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
