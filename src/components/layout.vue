<template>
    <div class="layout">
        最大的父组件，此组件用来包含子组件，所有的公共接口 建议在改组件调用 然后推送到  vuex
        这样刷新 vuex就不会消失
        <router-view/>
    </div>
</template>
<script>
export default {
    name:'layout'
}
</script>
