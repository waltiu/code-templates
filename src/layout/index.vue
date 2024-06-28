<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container class="main">
        <el-aside class="left">Aside</el-aside>
        <el-container class="right">
          <RouterView />
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup></script>
<style lang="less" scoped>
.common-layout {
  display: flex;
  height: 100%;
  .header {
    background-color: #36f;
    display: flex;
    align-items: center;
    padding: 16px;
    height: 64px;
    width: 100%;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 16px;
  }
  .main {
    flex: 1;
    .left {
      height: 100%;
      width: 68px;
      margin: 0px 16px;
      padding: 8px;
      border-radius: 8px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .right {
    }
  }
}
</style>
