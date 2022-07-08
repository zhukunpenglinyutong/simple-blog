import Index from '../view/Index' // 首页
import articleList from '../data/article'

const routes = [
  {
    path: "/",
    component: Index
  },
  ...articleList
];

export default routes