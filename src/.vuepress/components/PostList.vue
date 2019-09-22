<template>
    <div>
        <article v-for="post in posts" class="article">
            <a v-bind:href="post.path">{{ post.title }}</a>
            <p>{{ post.frontmatter.description }}</p>
        </article>
    </div>
    
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter( post => post.path.startsWith('/blog/') )
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>

<style lang="stylus" scoped>
.article
    border 1px solid #333
</style>