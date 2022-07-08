import "./index.scss";
import React from "react";
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

import searchIcon from './img/search-icon.png'

// 功能未开通提示
const warning = () => {
  message.warning('功能暂未开通，敬请期待...');
};

const Index = () => {

  // 路由跳转
  const navigateTo = useNavigate()
  const changePath = (path) => {
    navigateTo(path)
  }

  return (
    <div className="header">
      <div onClick={changePath.bind(this, '/')} className="header-index">MY BLOG</div>
      <div className="header-content">
        <div onClick={warning} className="header-item">文章</div>
        <div onClick={warning} className="header-item">分类</div>
        <div onClick={warning} className="header-item">读书</div>
        <div onClick={warning} className="header-item">归档</div>
        <div onClick={warning} className="header-item">个人介绍</div>
      </div>
      <img className="header-search" src={searchIcon} alt="" />
    </div>
  );
};

export default Index;
