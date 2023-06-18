<template>
    <Layout>
        <router-view></router-view>

        <router-link :to="{name: 'movie_index'}">Movies</router-link>
        <router-link :to="{name: 'movie_create'}"> Create New Movie</router-link>


    </Layout>
</template>


<script>    
    import Layout from "./components/Layout.vue";

    export default {
        name: 'App',
        components: {
            Layout,
            //    HelloWorld
        },
        methods: {
            redirectTo() {
                this.$router.push({ path: '/movies'})
            }
        }
    }
</script>

<!--npx webpack --config=webpack.config.js-->