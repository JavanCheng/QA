# QA
## 介绍
基于 React Hook + TypeScript + Ant Design 实现的 QA 组件
## 解决的问题
在 Ant Design Pro 的 Protable 中，column 和 search 有自带的 Tooltip 方法可以实现 QA 功能，但存在以下问题：
>1. Tooltip 会在 column 和 search 都带上 QA 提示，无法分开，无法满足需要单独展示的需求
>2. Tooltip 默认使用感叹号作为提示信息，无法自定义图标

本 QA 组件可解决以上两问题
## 效果演示
![QA](./src/images/final.png)
## 组件划分
    1. App 组件
    2. QA 组件
    3. 使用了部分 Ant Design 已有的组件和矢量图标
## 下载
```js
git clone git@github.com:JavanCheng/QA.git
```

## 使用

```js
npm i
npm start
```