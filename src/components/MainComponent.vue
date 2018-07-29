<style>
    /*RESET CSS*/

    * {padding:0px; margin:0px;}
    ul,ol {list-style:none;}
    a {text-decoration:none;}
    img,fieldset,iframe {border:0;}
    img,fieldset,section { border:none; }
    hr {display:none;}

    /* Main CSS */
    @import url('https://fonts.googleapis.com/css?family=Black+And+White+Picture|Black+Han+Sans|Cute+Font|Do+Hyeon|Dokdo|East+Sea+Dokdo|Gaegu|Gamja+Flower|Gothic+A1|Gugi|Hi+Melody|Jua|Kirang+Haerang|Nanum+Brush+Script|Nanum+Gothic|Nanum+Gothic+Coding|Nanum+Myeongjo|Nanum+Pen+Script|Poor+Story|Song+Myung|Stylish|Sunflower:300|Yeon+Sung');
    @import url('https://fonts.googleapis.com/css?family=Anton|Arimo|Bitter|Cabin|Crimson+Text|Do+Hyeon|Dosis|Eczar|Fira+Sans|Gaegu|Hanalei+Fill|Inconsolata|Indie+Flower|Josefin+Sans|Kirang+Haerang|Lato|Lora|Merienda|Merriweather|Montserrat|Muli|Nanum+Brush+Script|Nanum+Gothic|Nanum+Gothic+Coding|Nanum+Myeongjo|Nanum+Pen+Script|Noto+Sans|Noto+Serif|Nunito|Open+Sans|Open+Sans+Condensed:300|Oswald|Oxygen|PT+Sans|PT+Sans+Narrow|PT+Serif|Playfair+Display|Poppins|Quicksand|Raleway|Roboto|Roboto+Condensed|Roboto+Mono|Roboto+Slab|Slabo+27px|Source+Sans+Pro|Sunflower:300|Titillium+Web|Ubuntu|Work+Sans');

    body {overflow: hidden;}
    @media all and (max-width: 800px) {
        body {overflow: auto;}
    }
</style>
<template>
    <div id="maincomponent">
        <search-component v-on:search="searchEvent"></search-component>
        <list-component v-bind:font="fontfind"></list-component>
        <footer-component></footer-component>
    </div>
</template>
<script type="text/javascript">
    import SearchComponent from './SearchComponent.vue';
    import ListComponent from './ListComponent.vue';
    import FooterComponent from './FooterComponent.vue';

    export default {
        name : 'main-component',
        components : {SearchComponent, ListComponent, FooterComponent},
        data: function() {
            return {
                fontfind: ''
            }
        },
        methods: {
            searchEvent: function(fontsearch) {
                this.fontfind = fontsearch;
            }
        }
    }
</script>