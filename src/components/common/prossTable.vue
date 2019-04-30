<template>
    <div class="prossTable">
        <ul>
            <li v-for="i in 5" :key="i" v-bind:class="{'no_right':i%2==0,'no_left':i%2==1,'no_button':i>0}">
                <div class="box_father" v-for="j in 6" :key="j">
                    <div class="box box_top" v-bind:class="{'left_move':i%2==1,'no_left':i%2==0}">
                        <el-button class="box_botton" type="primary">由于数据更改导致</el-button>
                    </div>
                    <div class="box box_buttom" v-bind:class="{'right_move':i%2==0,'no_right':i%2==1}">
                        <el-button class="box_botton" type="primary">由于数据更改导致</el-button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'prossTable',
    data(){
        return{
            data:[
                {
                    time:2019-1-1,
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'},{name:'按钮3'},{name:'按钮4'},
                    ]
                }
            ]
        }
    }
}
</script>
<style scoped>
.prossTable{
    margin: 175px 50px;
}
.no_right{
    border-right: none!important;
}
.no_left{
    border-left: none!important;
}
.no_button{
    border-bottom: none!important;
}
.prossTable li{
    height: 400px;
    border: 1px solid red;
    display: flex;
}
.prossTable li:nth-child(2n) .box_father .box_top{
    margin-left: -50%;
}

.prossTable li .box_father:first-child .box_buttom {
    border-left: none;
}
.prossTable li .box_father:last-child .box_buttom .box_botton {
    display: none;
}

.box_father{
    height: 350px;
    width: 100%;
    margin-top: -175px;
}
.box{
    width: 100%;
    height: 175px;
    border-top:none!important;
    border-bottom:none!important;
    text-align: right;
}
.box_top{   
    border: 1px solid blue;
}
.box_buttom{
    border: 1px solid black;
}
.left_move{
    margin-left: -50%;
    border-left: none;
}
.right_move{
    margin-right: -50%;
    border-right: none;
}
.no_left{
    border-left: none!important;
}
.no_right{
    border-right: none!important;
}
.box_botton{
    margin-left: 90%;
}
.box_top .box_botton{
    margin-top: 95px;
}
.box_buttom .box_botton{
    margin-top: 40px;
}
</style>
