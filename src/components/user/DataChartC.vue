<script>
    import { Pie } from 'vue-chartjs'
    export default {
        name: "DataChartC",
        extends: Pie,
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['男', '女'],
                datasets: [{
                    backgroundColor: ['rgb(255, 99, 132)','rgb(54, 162, 235)'],
                    data: [
                        8,
                        5
                    ]
                }]
            },{
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '性别分布'
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
