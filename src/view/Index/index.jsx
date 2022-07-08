import "./index.scss";
import React from "react";
import { useNavigate } from 'react-router-dom';
import articleList from '../../data/article' // 文章列表Data

import pageIcon from './img/page-icon.png'
import bgGif from './img/bg.gif'

const Index = () => {
  
  // 路由跳转
  const navigateTo = useNavigate()
  const changePath = (path) => {
    navigateTo(path)
  }

  return (
    <div className="page">
      <div className="bg-gif-content">
        <img className="bg-gif" src={bgGif} alt="" />
      </div>
      <div className="article-time-list">
        {
          articleList.map((item, index) => {
            return (
              <div className="article-time-item">
                <div onClick={changePath.bind(this, item.path)} className="article-time-item-left">
                  <img className="article-time-item-icon" src={pageIcon} alt="" />
                  <div className="article-time-item-title">{ item.title }</div>
                </div>
                <div className="article-time-item-right">
                  <div className="article-time-item-time">{ item.time }</div>
                  <div className={['article-time-item-type', `pill-${item.typeColor}`].join(' ')}>{ item.type }</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Index;
