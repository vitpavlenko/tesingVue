<template lang="pug">
  .container
    .row
      .col-xs-12
        h2
          | {{ title }}
        router-link( :to="{ name: 'Posts' }" )
          | go to list of posts
</template>

<script>
  export default {
    name: 'StartPage',
    data () {
      return {
        title: 'Simple CRUD Application'
      }
    }
  }
</script>

