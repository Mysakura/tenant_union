<script>
    import { Doughnut } from 'vue-chartjs'
    export default {
        name: "DataChartB",
        extends: Doughnut,
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['20岁以下', '20~30', '30~40', '40以上','未知'],
                datasets: [{
                    backgroundColor: ['#26A69A','#29B6F6','#FFEE58','#EF5350','#FAFAFA'],
                    data: [
                        10,
                        20,
                        30,
                        40,
                        50
                    ]
                }]
            },{
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '年龄分布'
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
