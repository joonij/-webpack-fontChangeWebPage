<style>
    #content {width: 100%;}
    .font_box {width: 25%; float: left;}
    .font_box:nth-child(1) {width: 50%; background: #eee;}
    .font_box:nth-child(2) {width: 50%; background: #ddd;}
    .font_box:nth-child(3) {background: rgb(230, 230, 230);}
    .font_box:nth-child(4) {background: rgb(220, 220, 220);}
    .font_box:nth-child(5) {background: rgb(210, 210, 210);}
    .font_box:nth-child(6) {background: rgb(200, 200, 200);}
    .font_box:nth-child(7) {float: right; background: rgb(190, 190, 190);}
    .font_box:nth-child(8) {background: rgb(180, 180, 180);}
    .font_box:nth-child(9) {background: rgb(170, 170, 170);}
    .font_box:nth-child(10) {background: rgb(160, 160, 160);}
    .font_box:nth-child(11) {background: rgb(150, 150, 150);}
    .font_box:nth-child(12) {background: rgb(140, 140, 140);}
    .font_box:nth-child(13) {background: rgb(130, 130, 130);}
    .font_box:nth-child(14) {background: rgb(120, 120, 120);}
    .font_box:nth-child(15) {background: rgb(110, 110, 110);}
    .font_box:nth-child(16) {background: rgb(100, 100, 100);}
    .font_box:nth-child(17) {width:50%; background: rgb(90, 90, 90);}
    .font_box .infor {font-size: 25px; font-family: 'Nanum Gothic', sans-serif;}
    .font_box .example {font-size: 25px;}
    .font_box .font {display: block; font-size: 35px;}
    @media all and (max-width: 1360px) {
        .font_box:nth-child(5) {width: 50%;}
        .font_box:nth-child(7) {width: 50%; float: left;}
        .font_box:nth-child(11) {width: 50%;}
        .font_box:nth-child(12) {width: 50%;}
    }
    @media all and (max-width: 800px) {
        .font_box {width: 100%;}
        .font_box:nth-child(1) {width: 100%;}
        .font_box:nth-child(2) {width: 100%;}
        .font_box:nth-child(5) {width: 100%;}
        .font_box:nth-child(7) {width: 100%;}
        .font_box:nth-child(11) {width: 100%;}
        .font_box:nth-child(12) {width: 100%;}
        .font_box:nth-child(17) {width: 100%;}
        .font_box .infor {font-size: 20px;}
        .font_box .example {font-size: 20px;}
        .font_box .font {font-size: 30px;}
    }
</style>
<template>
    <div id="content">
        <div class="font_box" v-for="n in 17">
            <span class="infor"></span>
            <span class="example">ABC</span>
            <span class="font">{{font}}</span>
        </div>
    </div>
</template>
<script type="text/javascript">
    import eventBus from './EventBus.vue'
    
    export default {
        name : 'list-component',
        props: ['font']
    }
</script>