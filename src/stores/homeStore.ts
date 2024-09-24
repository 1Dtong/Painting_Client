import type { HomeViewItem } from "@/types/home"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useHomeStore = defineStore("home", () => {
  const topBarState =  ref<HomeViewItem[]>([
    {
      title: "动漫头像",
      cover: "https://img2.baidu.com/it/u=4066281047,626666328&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
    },
    {
      title: "图片推理",
      cover: "https://img1.baidu.com/it/u=270823348,3999531063&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    },
    {
      title: "手绘图片",
      cover: "https://t9.baidu.com/it/u=2309533806,512567447&fm=193",
    },
    {
      title: "提示词库",
      cover: "https://pic.616pic.com/ys_bnew_img/00/12/19/S5EVXy5U2j.jpg",
    },
    {
      title: "上传图片",
      cover: "https://i.52112.com/icon/jpg/256/20181002/22449/1098516.jpg",
    },
    {
      title: "下载图片",
      cover: "https://bpic.51yuansu.com/pic3/cover/02/33/95/59c15e2226303_610.jpg",
    },
  ])

  return {
    topBarState,
  }
})