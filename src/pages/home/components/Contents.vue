<template>
  <div class="contents">
     <div class="content">
        <span class="material-icons">home</span>
        <p class="content-text">首頁</p>
     </div>
     <div class="content">
        <span class="material-icons">place</span>
        <p class="content-text">地圖</p>
     </div>
     <div class="content">
        <span class="material-icons">local_grocery_store</span>
        <p class="content-text">訂單</p>
     </div>
     <div class="content">
        <span class="material-icons">group</span>
        <p class="content-text">好友</p>
     </div>
     <div class="content">
        <span class="material-icons">person_4</span>
        <p class="content-text">會員</p>
     </div>
  </div>
</template>

<script>
export default {
    name: 'HomeContents'
}
</script>

<style lang="sass" scoped>
    .contents
        border-top: 0.01rem #E7E3E3 solid
        position: fixed
        bottom: 0
        height:1.38rem
        width: 100%

        .content 
            float: left 
            width: 20%
            display: flex 
            flex-direction: column
            .material-icons 
                font-size: 0.8rem
                padding: 0.1rem
                margin: auto
            .content-text 
                line-height: 0.2rem
                height: 0.2rem
                font-weight: bold
                margin: auto
</style>