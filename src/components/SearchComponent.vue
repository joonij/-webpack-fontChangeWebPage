<style>
    header {width: 100%; height: 100px; background: #555; font-family: 'Nanum Gothic', sans-serif;}
    #main_logo {height:50px; margin: 25px 7.5% 0 7.5%; float: left;}
    #check_box {margin: 45px 0 0 13%; float: left;}
    header span {margin: 40px 5% 0 0; float: left;}
    #search_bar {margin: 30px 10px 0 0; float: left; font-size: 26px;}
    #research_btn {margin-top: 30px; float: left; border:none; color: #fff; font-size: 34px;}
    @media all and (max-width: 1360px) {
        #check_box {margin: 45px 0 0 5%;}
    }
    @media all and (max-width: 800px) {
        #main_logo {margin: 25px 0 0 7.5%;}
    }
    @media all and (max-width: 700px) {
        #main_logo {height:50px; margin: 25px 5% 0 5%;}
        #check_box {margin: 20px 0 0 0; float: none; display: inline-block;}
        header span {margin: 15px 20% 0 0; float: none; display: inline-block;}
        #search_bar {width: 40%; margin: 15px 2% 0 0; float: none; display: inline-block; font-size: 18px;}
        #research_btn {margin: 15px 0 0 0; float: none; display: inline-block;font-size: 26px;}
    }
</style>
<template>
    <header>
        <img id="main_logo" src="../assets/main_logo.png" alt="main_logo">
        <input id="check_box" type="checkbox" /><span>only korea</span>
        <input id="search_bar" type="text" v-model="fontsearch" placeholder="Please write." v-on:keyup="keyupEvent" />
        <font-awesome-icon icon="redo" id="research_btn" />
    </header>
</template>
<script type="text/javascript">
    import eventBus from './EventBus.vue'

    export default {
        name : 'search-component',
        data: function() {
            return {
                fontsearch: ''
            }
        },
        methods: {
            keyupEvent: function(e) {
                var val = e.target.value;
                this.$emit('search', val);
            }
        }
    }
</script>