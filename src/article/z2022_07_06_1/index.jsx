import "../common/index.scss";
import React from "react";

const Index = () => {
  return (
    <div className="page">
      
      {/* 通用样式 */}
      <div className="blog-title">前端工程化绪论</div>
      <div className="blog-time-item">
        <div className="blog-time-item-time">2022-07-06</div>
        <div className="blog-time-item-type pill-yellow">前端工程化</div>
      </div>

      <div className="blog-text">为什么我想先写一下工程化绪论呢，因为我想让你明白工程化的历史</div>
      <div className="blog-text">明白没有工程化的时候 想做一些事情是多么的困难，而有了工程化，想做一些事情是多么简单</div>
      <div className="blog-text">这样有助于我们 接收未来新的工程化技术</div>
      <div className="blog-text">希望你通过阅读这篇内容，能够从之前页面仔的思想，过渡到一名工程师的角度</div>
      <div className="blog-text"></div>
      <div className="blog-text blog-h2">🍱 第一部分：工程化发展历史</div>
      <div className="blog-text"></div>
      <div className="blog-text">现代前端技术不再是以前刀耕火种的年代了，任何简单机械的重复劳动都应该让机器去完成。</div>
      <div className="blog-text"></div>
      <div className="blog-text blog-h3">第一阶段：模块化</div>
      <div className="blog-text"></div>
      <div className="blog-text">最开始的时候 HTML/CSS/JS 掌握三者，然后写个页面和交互，就称之为前端工程师（也称之为页面仔）</div>
      <div className="blog-text">后来随着前端能做的事情越来越多（因为浏览器能做的事情变多了），前端代码越写越多，最开始受到影响的就是JS</div>
      <div className="blog-text">因为JS太多了，于是人们就想模块化的使用JS，用于解耦和复用，于是 这时候JS模块化思想出现，各种JS模块化规范出现。</div>
      <div className="blog-text">现在比较流行的就是 <span className="blog-blod ">ES Module & Commonjs</span> 两种规范</div>
      <div className="blog-text">备注：后来CSS也具有模块化，就是CSS预处理器的出现</div>
      <div className="blog-text"></div>
      <div className="blog-text blog-h3">第二阶段：工程化工具</div>
      <div className="blog-text"></div>
      <div className="blog-text">因为模块化使得一个技术火了起来Node（或者说Node使Commonjs模块规范火了起来）</div>
      <div className="blog-text">因为前端有了Node，所以能做的事情越来越多，出现了CSS预处理器（Less,Sass,Style...）,CSS后处理器（Postcss），Babel等等</div>
      <div className="blog-text">这时候人们想做事情越来越多，例如，想让CSS更强大，于是又了CSS预处理器，不行写CSS的兼容性代码，于是CSS后处理器出现，想用ES6语法，而又不想担心其兼容性，Babel就出现了</div>
      <div className="blog-text">这时候人们越来越贪婪，还想压缩文件，压缩图片，MD5自动命名等等</div>
      <div className="blog-text">这时候就出现了构建工具（其实FIS是百度很早推出的构建工具），构建工具能统筹这些技术（插件或者Loder），让其经由Webpack这个打包工具，产出你想要的样子</div>
      <div className="blog-text">最近最火的工程化工具，不用说了，就是<span className="blog-blod ">webpack</span></div>
      <div className="blog-text"></div>
      <div className="blog-text"></div>
    </div>
  );
};

export default Index;
