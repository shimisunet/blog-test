<template>
  <div>
    <article v-for="post in posts" class="blog-article">
      <a v-bind:href="post.path">
        <section class="blog-section">
          <h2 class="blog-title">
            {{ post.title }}
          </h2>
          <p class="blog-description">
            {{ post.frontmatter.description }}
          </p>
        </section>
      </a>
    </article>
  </div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
            .filter( post => post.path.startsWith('/blog/') )
            .sort( ( a, b ) => new Date( b.frontmatter.date ) - new Date( a.frontmatter.date ) );
            }
        }
    }
</script>

<style lang="stylus" scoped>
.blog-article
  border-bottom 1px solid #eaecef
  
  &:first-child
    border-top 1px solid #eaecef
  
  &:last-child
    border-bottom none

.blog-section
  &:hover
    opacity 0.5

.blog-title
  border-bottom none
  margin 18px 0
  color navy 

.blog-description
  color #333
  
</style>