<style>
    footer {width: 100%; height: 50px; background: #222;}
    footer span {width: 30%; margin: 12.5px 5%; float: left; font-size: 14px; color:#fff;}
    #sub_logo {height:25px; margin: 12.5px 9.5%; float: left;}
    @media all and (max-width: 700px) {
        footer span {width: 50%; margin: 12.5px 0 0 3%;}
        #sub_logo {height:25px; margin: 12.5px 0 0 0;}
    }
</style>
<template>
    <footer>
        <span>© 2018 Fontamaing, Inc.</span>
        <img id="sub_logo" src="../assets/sub_logo.png" alt="sub_logo">
    </footer>
</template>
<script type="text/javascript">
    import eventBus from './EventBus.vue'

    export default {
        name : 'footer-component'
    }
</script>