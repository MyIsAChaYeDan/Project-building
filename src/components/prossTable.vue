<template>
    <div class="prossTable">
        <ul>
            <li v-for="(i,index) in rowLength" :key="i" v-bind:class="{'no_right':i%2==0,'no_left':i%2==1,'no_button':i>0}">
                <div class="round_tip" v-if="index==0">
                    <div class="round_small"></div>
                </div>
                <div class="round_tip" v-if="index==rowLength-1" v-bind:class="{'round_tip_last':index==rowLength-1&&index%2==0}">
                    <div class="round_small"></div>
                </div>
                <div class="box_father" v-for="item in newArray[i-1]" :key="item.time">
                    <!-- <div class="round_tip end_round" v-if="item[0]&&item[0].type=='end'||item[1]&&item[1].type=='end'">
                        <div class="round_small"></div>
                    </div> -->
                    <div class="box box_top" v-bind:class="{'left_move':i%2==1,'no_left':i%2==0}" v-if="item[0]&&Array.isArray(item[0].buttonList)">
                        <span class="time_text" v-if="item[0].time">{{item[0].time}}</span>
                        <div class="line up_line" v-if="item[0].type!='push'" v-bind:style="{'height':20+(item[0].buttonList.length*30)+'px'}"></div>
                        <!-- <div class="line up_line" v-if="item[0].type!='push'&&item[0].type!='lastPush'" v-bind:style="{'height':20+(item[0].buttonList.length*30)+'px'}"></div> -->
                        <span class="button_box">
                        <!-- <span class="button_box" v-bind:class="{'cover_line':item[0].type=='push'||item[0].type=='lastPush'}"> -->
                        <!-- <span class="button_box"> -->
                            <el-button class="box_botton" size="mini" v-for="(button,index) in item[0].buttonList" v-bind:style="{'top':185-(index+1)*35+'px'}" :key="index">
                                {{button.name}}
                            </el-button>
                        </span>
                    </div>
                    <div class="box box_buttom" v-bind:class="{'right_move':i%2==0,'no_right':i%2==1}" v-if="item[1]&&Array.isArray(item[1].buttonList)">
                        <span class="time_text" v-if="item[1].time">{{item[1].time}}</span>
                        <div class="line down_line" v-if="item[1].type!='push'" v-bind:style="{'height':10+(item[1].buttonList.length*30)+'px'}"></div>
                        <!-- <div class="line down_line" v-if="item[1].type!='push'&&item[1].type!='lastPush'" v-bind:style="{'height':10+(item[1].buttonList.length*30)+'px'}"></div> -->
                        <span class="button_box">
                        <!-- <span class="button_box" v-bind:class="{'cover_line':item[1].type=='push'||item[1].type=='lastPush'}"> -->
                        <!-- <span class="button_box"> -->
                            <el-button class="box_botton" size="mini" v-for="(button,index) in item[1].buttonList" v-bind:style="{'margin-top':(index+1)*35-20+'px!important'}" :key="index">
                                {{button.name}}
                            </el-button>
                        </span>
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
                    time:'2019-01-01',
                    buttonList:[
                        {name:'我是第一个按钮啊'},{name:'按钮2'},{name:'按钮3'},{name:'按钮4'},
                    ]
                },
                {
                    time:'2019-01-02',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'}
                    ]
                },
                {
                    time:'2019-01-03',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'},{name:'按钮3'}
                    ]
                },
                {
                    time:'2019-01-04',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'}
                    ]
                },
                {
                    time:'2019-01-05',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-06',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'},{name:'按钮3'},{name:'按钮4'},
                    ]
                },
                {
                    time:'2019-01-07',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'}
                    ]
                },
                {
                    time:'2019-01-08',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'},{name:'按钮3'}
                    ]
                },
                {
                    time:'2019-01-09',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'}
                    ]
                },
                {
                    time:'2019-01-10',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-11',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'},{name:'按钮3'},{name:'按钮4'},
                    ]
                },
                {
                    time:'2019-01-12',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'}
                    ]
                },
                {
                    time:'2019-01-13',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'},{name:'按钮3'}
                    ]
                },
                {
                    time:'2019-01-14',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'}
                    ]
                },
                {
                    time:'2019-01-15',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-16',
                    buttonList:[
                        {name:'按钮1'},{name:'按钮2'},{name:'按钮3'},{name:'按钮4'},{name:'按钮5'},{name:'按钮6'}
                    ]
                },
                {
                    time:'2019-01-17',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-18',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-19',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-20',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-21',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-22',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-23',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-24',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-25',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-26',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-27',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-28',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-29',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-30',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-01-31',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-01',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-02',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-03',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-04',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-05',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-06',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-07',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-08',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                },
                {
                    time:'2019-02-09',
                    buttonList:[
                        {name:'按钮1'}
                    ]
                }  
            ],
            rowLength:0,//行数
            newArray:[],//为chunk后的数组，每个元素必须包含12个元素 如没有补进去
        }
    },
    methods:{
        // 改变数组
        chunkData(arrayData){
            let newData=[]
            let data=this.library.cloneObject(arrayData).chunk(11)
            for(let i=0;i<data.length;i++){
                if(i%2!=0&&i>0){
                    data[i]=data[i].reverse()
                }
                if(data[i].length==11){
                    let insertData={type:'insert'}
                    data[i].push(insertData)
                }
                let pushArray=[]
                if(data[i].length<11){
                    for(let j=0;j<11-data[i].length;j++){
                        let pushData={type:'push',buttonList:[]}
                        pushArray.push(pushData)
                    }
                    data[i][0].type='end'
                    if(i%2!=0&&i>0){
                        data[i]=pushArray.concat(data[i])
                    }else{
                        data[i].push(...pushArray)
                    }
                }
                newData.push(...data[i])
            }
            this.rowLength=Math.ceil(newData.length/12) //因为一个li只能放11个按钮 最后一个被隐藏
            if(newData.length%2!=0){
                let pushData={type:'push',buttonList:[]}
                newData.push(pushData)
            }
            // for(let i=0;i<newData.length;i++){
            //     if(newData[i].type=='push'&&i!=newData.length-1){
            //         newData[i].type='lastPush'
            //         break
            //     }
            // } 
            this.newArray=this.library.cloneObject(newData).chunk(2).chunk(6)
        },
    },
    created(){
        this.chunkData(this.data)
    }
}
</script>
<style scoped>
.prossTable{
    margin: 175px 50px 0 0;
    position: relative;
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
    height: 350px;
    border: 1px solid red; /*修改线的样式*/
    display: flex;
}
.prossTable li:last-child{
    border-left: none;
    border-right: none;
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
.prossTable li .box_father:last-child .box_buttom .line {
    display: none;
}

.box_father{
    height: 400px;
    width: 100%;
    margin-top: -200px;
    position: relative;
}
.box{
    width: 100%;
    height: 200px;
    border-top:none!important;
    border-bottom:none!important;
    text-align: right;
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
/* 修改按钮的样式 注意高度变化 */
.box_botton{
    position: absolute;
    z-index: 10;
    padding: 0 10px!important;
    height: 30px;
    margin: 0!important;
    margin-left: -15px!important;
}
.line{
    width: 2px;
    background: red;/*修改短线的样式*/
    height: 20px;
    position: absolute;
    right: 0;
}
.up_line{
    right: 50%;
    bottom: 50%;
}
.down_line{
    top: 50%;
}
.button_box{
    display: block;
    height: 100%;
}
/* 修改日期样式 注意高度变化 */
.time_text{
    font-size: 14px;
    display: block;
    position: absolute;
    margin-top: 130px;
    transform:rotate(90deg);
    -webkit-transform:rotate(270deg);
    right: 50%;
    z-index: 10;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.box_buttom .time_text{
    margin-top: 50px;
    right: 0;
}
.round_tip{
    width: 15px;
    height: 15px;
    background: green;
    border-radius: 100%;
    position: absolute;
    margin-top:calc(-15px / 2);
    margin-left:calc(-15px / 2);
    z-index: 10;
}
.round_small{
    width: 5px;
    height: 5px;
    background: #00FF00;
    border-radius: 100%;
    margin: 0 auto;
    margin-top: 5px;
}
.round_tip_last{
    right:0;
}
.cover_line{
    background: #fff;
}
.end_round{
    margin-top:calc(100% - 15px)
}
</style>
