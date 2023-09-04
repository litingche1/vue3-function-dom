<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
// import {ref} from "vue";
// import v
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
// const tableData = ref([])
// const tableHead = ref([
//   {
//     name: "省区",
//     prop: "province",
//     width: 80,
//     sortable: true
//   },
//   {
//     name: "地市",
//     prop: "city",
//     width: 80
//   },
//   {
//     name: "场站ID",
//     prop: "plantid",
//   },
//   {
//     name: "场站名称",
//     prop: "plantname"
//   },
//   {
//     name: "场站类型",
//     prop: "planttype",
//     width: 80
//   },
//   {
//     name: "断点次数(次)",
//     prop: "num",
//     width: 120,
//     sortable: true
//   },
//   {
//     name: "断点明细",
//     prop: "details"
//   },
//   {
//     name: "开始断点时刻",
//     prop: "starttime"
//   },
//   {
//     name: "最新起报时刻",
//     prop: "newtime",
//   },
// ])
</script>

<template>
  <section class="app-wrap">
    <article class="app-wrap-left">
      <el-row class="tac">
        <el-col :span="24">
          <h5 class="mb-2">工具组件库</h5>
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon>
                  <Location/>
                </el-icon>
                <span>表格组件</span>
              </template>
              <el-menu-item-group title="表格展示组件">
                <el-menu-item index="1-1">element普通表格组件</el-menu-item>
                <el-menu-item index="1-2">虚拟列表表格</el-menu-item>
                <el-menu-item index="1-3">编辑表格</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="表格导出方法">
                <el-menu-item index="1-5">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon>
                <icon-menu/>
              </el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon>
                <Document/>
              </el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon>
                <setting/>
              </el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </article>
    <article class="app-wrap-right">
      <router-view></router-view>
    </article>
  </section>
</template>

<style lang="less">
.app-wrap {
  display: flex;
  width: 100%;
  height: 100%;

  .app-wrap-left {
    width: 200px;
    background: #fff;
    margin-right: 10px;

    .mb-2 {
      text-align: center;
    }
  }

  .app-wrap-right {
    flex: 1;
    background: #f3f3f3;
  }
}
</style>
