-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: blogs
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `userarticle`
--

DROP TABLE IF EXISTS `userarticle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userarticle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uid` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `tags` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `expla` varchar(255) DEFAULT NULL,
  `good` varchar(255) DEFAULT '',
  `watch` int DEFAULT '0',
  `version` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userid` (`uid`),
  CONSTRAINT `userid` FOREIGN KEY (`uid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userarticle`
--

LOCK TABLES `userarticle` WRITE;
/*!40000 ALTER TABLE `userarticle` DISABLE KEYS */;
INSERT INTO `userarticle` VALUES (6,13,'JS事件循环机制','# js事件循环机制7\n## 1.js线程\nJavaScript 是一门单线程语言（Web-Worker）。\n\n**主线程**：也就是 js 引擎执行的线程，这个线程只有一个，页面渲染、函数处理都在这个主线程上执行。\n\n**工作线程**：也称幕后线程，这个线程可能存在于浏览器或js引擎内，与主线程是分开的，处理文件读取、网络请求等异步事件。\n\n## 2.执行栈，任务队列\n* 同步任务执行时送入主线程，形成执行栈（调用栈）\n* web api执行异步代码时，处理完异步代码后将异步的回调函数推入任务队列（即异步代码运行环境）\n* 当主线程的栈中执行栈所有同步代码执行完毕后，调用栈为空，浏览器会将任务队列的异步任务依次压入栈中z执行（先进先出），当调用栈为空时，循环检查任务队列是否有异步任务需要执行。\n## 3.宏任务macrotask，微任务microtask\n![image](../src/assets/headImage.jpeg)\n## 微任务在任务队列的优先级大于宏队列，在宏队列前执行\n1. promise函数内部是同步处理的，不会放到队列中，放入队列中的是它的then或catch回调\n2. promise的then返回的还是promise，\n','前端,JS','技术','https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg','2022-10-27 06:42:31','JS事件循环机制','[13]',289,7),(26,15,'测试','# 请先清空示例内容\n## ? md编辑器示例\n\n### ? 基本演示\n\n**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>1</sub>，`inline code`，[超链接](https://imzbf.cc)\n\n> 引用：《I Have a Dream》\n\n1. So even though we face the difficulties of today and tomorrow, I still have a dream.\n2. It is a dream deeply rooted in the American dream.\n3. I have a dream that one day this nation will rise up.\n\n- [ ] 周五\n- [ ] 周六\n- [x] 周天\n\n![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)\n\n## ? 代码演示\n``` js\nconst y = 1\n```\n## ? 文本演示\n\n依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。\n\n## ? 表格演示\n\n| 昵称 | 来自      |\n| ---- | --------- |\n| 之间 | 中国-重庆 |,\n\n## ? 公式\n\n行内：$x+y^{2x}$\n\n$$\nsqrt[3]{x}\n$$\n## ? 图表\n\n```mermaid\nflowchart TD\n  Start --> Stop\n```\n\n','JS','测试','','2023-02-28 16:34:56','。。。。','[13]',27,0),(27,13,'输入URL全过程','# 从输入一个 URL 地址到浏览器完成渲染的整个过程\n\n流程:2\n\n## 1. 地址栏输入url并按下回车\n\n## 2. 浏览器查找url是否存在**缓存**，且缓存是否过期\n\n浏览器缓存策略\n\n- **DNS缓存**：浏览器对dns解析域名后的ip地址进行本地缓存，无则本地DNS服务器递归查询，仍无则DNS根服务器迭代查询。\n\n- **memory cache（本地缓存）**：不受控制，保证两相同请求不请求两次。\n\n- **http 缓存**：（可控制）\n  \n  - 强缓存\n    \n    服务器接受请求返回响应头，要求客户端缓存：\n    \n    expires --http1.0，cache-control --http 1.1,包括了缓存时间\n  \n  - 协商缓存\n    \n    当缓存过期无效时，客户端不会直接删除缓存，向服务端询问缓存是否仍能使用？\n    \n    失效：服务器返回正常响应（200）\n    \n    有效：服务器返回304（未更改），返回新的缓存指令。\n\n## 3. DNS解析url对应ip地址\n\nDNS解析\n\n- 本地查询--递归查询\n  \n  `:chrome://dns/` 查看chrome在本地的dns缓存（dns多重缓存）\n\n- 远程查询--迭代查询（[www.google.com）](http://www.google.com%EF%BC%89)\n  \n  .（根域名服务器）-> .com -> google.com -> [www.google.com](http://www.google.com)\n\n> DNS负载均衡：多个服务器支持访问一个域名，支持大量访问\n\n## 4. 根据ip地址进行tcp连接（三次握手）\n\n![1](https://gitee.com/rippleber/picgo/raw/master/img/202302220015599.png)\n\n增加可靠性\n\n## 5. 服务器处理请求，返回浏览器http响应（http缓存）\n\n状态码：\n\n- 1xx：指示信息–表示请求已接收，继续处理。\n\n- 2xx：成功–表示请求已被成功接收、理解、接受。\n  \n  + 201（无内容）：成功处理了请求，但没有返回。\n\n- 3xx：重定向–要完成请求必须进行更进一步的操作。\n  \n  + 301（永久移动）：网页已永久移动到新位置，服务区自动转到新位置。\n  \n  + 304（未更改）:请求的网页未修改，不返回内容\n\n- 4xx：客户端错误–请求有语法错误或请求无法实现。\n  \n  + 401（请求要求身份验证）\n  \n  + 403（服务区拒绝访问）--权限不够\n  \n  + 404\n\n- 5xx：服务器端错误–服务器未能实现合法的请求。\n  \n  常见状态码\n\n方法：\n\n- GET在浏览器回退时是无害的，而POST会再次提交请求。\n\n- GET产生的URL地址可以被Bookmark，而POST不可以。\n\n- GET请求会被浏览器主动cache，而POST不会，除非手动设置。\n\n- GET请求只能进行url编码，而POST支持多种编码方式。\n\n- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。\n\n- GET请求在URL中传送的参数是有长度限制的，而POST么有。\n\n- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。\n\n- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。\n\n- GET参数通过URL传递，POST放在Request body中。\n\n- **GET会产生一个TCP数据包，而POST会产生两个TCP数据包。**\n\n## 6. 浏览器解析响应，渲染页面\n\n浏览器渲染流程\n\n[什么是回流](css/%E4%BB%80%E4%B9%88%E6%98%AF%E5%9B%9E%E6%B5%81.md)\n\n## 7. 关闭tcp连接（四次挥手）\n\n![](https://gitee.com/rippleber/picgo/raw/master/img/202302220026901.png)\n\n## review：\n\n- [x] 2023-2-23\n- [x] 2023-2-25\n- [x] 2023-2-28\n','JS','技术','','2023-03-16 16:11:54','页面加载全过程','',1,3),(28,13,'事件冒泡捕获','# 什么是事件代理（事件委托） 有什么好处\n\n> 事件代理原理：不给每个节点单独设置事件监听器，而是在其父元素通过事件冒泡设置每个节点\n1\n```html\n<div id=\"outer\">\n <p id=\"inner\">Click me!</p>\n</div>\n```\n\n## 何为事件冒泡和事件捕获？\n\n分别由微软和网景提出，用于解决页面中事件流（事件发生的顺序)\n\n+ 事件冒泡\n  \n  事件由最内层元素向最外层冒泡，直到document对象\n  \n  p->div->body->html->document\n\n+ 事件捕获\n  \n  事件由最外层元素直到具体的元素\n  \n  document->html->body->div->p\n\n<img title=\"\" src=\"https://gitee.com/rippleber/picgo/raw/master/img/202302252357758.png\" alt=\"\" data-align=\"right\">\n\n1-5是捕获过程，5-6是目标阶段，6-10是冒泡阶段；\n\n## addEventListener 的第三个参数\n\n> dom2级事件中规定的事件流同时支持了事件冒泡和事件捕获阶段\n\n`element.addEventListener(event,function,useCapture)`\n\n| 参数         | 含义或取值                              |\n| ---------- |:----------------------------------:|\n| event      | 指定对元素需要监听的事件名(不使用onclick而是使用click) |\n| function   | 事件触发时执行的函数                         |\n| useCapture | true:在事件捕获阶段中执行，false:在事件冒泡阶段执行    |\n\n## 事件代理\n\n1. 为了避免对多个子元素同时全部绑上事件，使用父元素作为事件代理处理\n   \n   ```js\n   <ul class=\'color_list\'>\n   <li></li>\n   </ul>\n   //避免了在每一个li上全部绑定事件\n   color_list.addEventListener(\"click\",handle,false)\n   \n   function handle(event){\n       const e=event||window.event\n       //获取实际触发事件的节点名称\n       const ele=e.target.nodename\n   \n   }\n   ```\n\n> e.target.nodename :如果节点是元素节点,则 nodeName 属性返回标签名。如果节点是属性节点，则 nodeName 属性返回属性的名称。对于其他节点类型，nodeName 属性返回不同节点类型的不同名称\n\n## 如何阻止事件冒泡\n\n1. 在事件处理函数的e加上event.stopPropagation ( )，仅能阻止事件冒泡\n\n2. 在事件处理函数中`return false`不仅阻止了事件冒泡同时阻止了默认事件\n\n## 区分\n\n1. e.target ,e.currentTarget\n   \n   e.target是触发事件的元素，e.currrentTarget是绑定事件的元素（等同this）\n- [x] 2023-2-26\n','js','技术','','2023-03-16 16:21:05','事件冒泡捕获','[13]',1,1),(29,13,'事件冒泡捕获','# 什么是事件代理（事件委托） 有什么好处\n\n> 事件代理原理：不给每个节点单独设置事件监听器，而是在其父元素通过事件冒泡设置每个节点\n\n```html\n<div id=\"outer\">\n <p id=\"inner\">Click me!</p>\n</div>\n```\n\n## 何为事件冒泡和事件捕获？\n\n分别由微软和网景提出，用于解决页面中事件流（事件发生的顺序)\n\n+ 事件冒泡\n  \n  事件由最内层元素向最外层冒泡，直到document对象\n  \n  p->div->body->html->document\n\n+ 事件捕获\n  \n  事件由最外层元素直到具体的元素\n  \n  document->html->body->div->p\n\n<img title=\"\" src=\"https://gitee.com/rippleber/picgo/raw/master/img/202302252357758.png\" alt=\"\" data-align=\"right\">\n\n1-5是捕获过程，5-6是目标阶段，6-10是冒泡阶段；\n\n## addEventListener 的第三个参数\n\n> dom2级事件中规定的事件流同时支持了事件冒泡和事件捕获阶段\n\n`element.addEventListener(event,function,useCapture)`\n\n| 参数         | 含义或取值                              |\n| ---------- |:----------------------------------:|\n| event      | 指定对元素需要监听的事件名(不使用onclick而是使用click) |\n| function   | 事件触发时执行的函数                         |\n| useCapture | true:在事件捕获阶段中执行，false:在事件冒泡阶段执行    |\n\n## 事件代理\n\n1. 为了避免对多个子元素同时全部绑上事件，使用父元素作为事件代理处理\n   \n   ```js\n   <ul class=\'color_list\'>\n   <li></li>\n   </ul>\n   //避免了在每一个li上全部绑定事件\n   color_list.addEventListener(\"click\",handle,false)\n   \n   function handle(event){\n       const e=event||window.event\n       //获取实际触发事件的节点名称\n       const ele=e.target.nodename\n   \n   }\n   ```\n\n> e.target.nodename :如果节点是元素节点,则 nodeName 属性返回标签名。如果节点是属性节点，则 nodeName 属性返回属性的名称。对于其他节点类型，nodeName 属性返回不同节点类型的不同名称\n\n## 如何阻止事件冒泡\n\n1. 在事件处理函数的e加上event.stopPropagation ( )，仅能阻止事件冒泡\n\n2. 在事件处理函数中`return false`不仅阻止了事件冒泡同时阻止了默认事件\n\n## 区分\n\n1. e.target ,e.currentTarget\n   \n   e.target是触发事件的元素，e.currrentTarget是绑定事件的元素（等同this）\n- [x] 2023-2-26\n','js','技术','','2023-03-16 16:21:07','事件冒泡捕获','',0,0),(30,13,'测试','qqqq','te','test','','2023-03-16 16:24:12','test','',0,0),(31,13,'测试','qqqq','te','test','','2023-03-16 16:24:13','test','',0,0),(40,13,'git基本使用','# GIT使用\n\n## 1.什么是git\n\nGit是目前世界上最先进的分布式版本控制系统。  \n工作原理 / 流程：\n\n![](https://pic2.zhimg.com/v2-3bc9d5f2c49a713c776e69676d7d56c5_r.jpg)\n\nWorkspace：工作区  \nIndex / Stage：暂存区  \nRepository：仓库区（或本地仓库）  \nRemote：远程仓库\n\n## 2. 初始化设置\n\n```git\ngit init \ngit config --global user.name \"...\"\ngit config --global user.email \"...\" \n```\n\n## 3. 生成ssh key\n\n`ssh-keygen -t rsa -C \"email\"`\n\n## 4. 在git平台上传ssh key\n\n生成ssh key之后在 c:\\用户.ssh 中生成两个文件（id_rsa id_rsa.pub）\n\n复制id_rsa.pub内容到git仓库\n\n## 5. 基本使用\n\n### 5.1 创建版本库\n\n```git\ngit init\n#在当前目录下建立一个.git文件夹，git用来追踪版本变化\n\ngit init [project-name] \n#新建一个目录，将其初始化为Git代码库\n\ngit clone [url]\n#下载一个项目和它的整个代码历史\n```\n\n### 5.2 提交\n\n```git\ngit add xxx.txt /  .\n#添加xxx.txt修改文件 / 添加当前目录所有修改文件到暂存区（stage）\n\ngit commit \n#将暂存区内容提交到本地仓库\n\ngit status \n#查看目录文件状态\n\ngit push （-u）\n#将本地仓库内容推送至远程仓库（将本地的master分支和远程的master分支关联起来）\n```\n\n### 5.3 版本回退\n\n```git\ngit log （–pretty=oneline）\n#查看最近仓库的版本变动\n\ngit reset --hard HEAD^\n#回退到上一个版本，回退版本数跟head后^数量相关\n\ngit reset --hard HEAD~xxx\n#回退到上xxx个版本\n```\n\n### 5.4 远程仓库\n\n```git\n#注册账号，创建远程仓库\ngit remote add origin xxx\n#添加远程仓库\n```\n\n### 5.5 分支管理\n\n```git\n#查看分支：\ngit branch\n\n#创建分支：\ngit branch name\n\n#切换分支：\ngit checkout name\n\n#创建+切换分支：\ngit checkout –b name\n\n#合并某分支到当前分支：\ngit merge name\n\n#删除分支：\ngit branch –d name\n```\n\n## 6. git pull与git fetch区别\n\ngit fetch\n\n在拉取代码过程中，git fetch会首先检查本地仓库和远程仓库的差异，检查哪些不存在于本地仓库，然后将这些变动的提交拉取到本地。\n\n但是，这里请注意，它是把远程提交拉取到本地仓库，而不是本地工作目录，它不会自行将这些新数据合并到当前工作目录中，我们需要继续执行git merge才会把这些变动合并到当前工作目录。![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/27e408700e7d42bca90be8f4ca3b8291~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)\n\ngit pull\n\ngit pull和git fetch刚好相反，它直接获取远程的最新提交，直接拉取并合并到本地工作目录，而且在合并过程中不会经过我们的审查，如果不仔细检查，这样很容易遇到冲突。![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68d68690d3a64544acac5e86bdddbb6d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)\n\n如何选用？\n\n相比之下，git fetch是一个更安全的选择，因为它从你的远程仓库拉入所有的提交，但不会对你的本地文件做任何修改。\n\n这相当于给了个缓冲区，你有足够时间去发现远程仓库自从你上次拉取后到现在为止发生的变化。你可以在合并前检查哪些文件有变化，哪些文件可能导致冲突。\n\n而git pull相当于运行git fetch，然后立即将你的改动合并到本地仓库，即pull=fetch+merge。这样的确少了一个步骤，但是也会带来一些风险。','前端','技术','','2024-03-27 02:41:45','介绍了工作中协同开发时遇到的git使用问题','',1,0),(80,13,'11','# 请先清空示例内容\n## ? md编辑器示例\n\n### ? 基本演示\n\n**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>1</sub>，`inline code`，[超链接](https://imzbf.cc)\n\n> 引用：《I Have a Dream》\n\n1. So even though we face the difficulties of today and tomorrow, I still have a dream.\n2. It is a dream deeply rooted in the American dream.\n3. I have a dream that one day this nation will rise up.\n\n- [ ] 周五\n- [ ] 周六\n- [x] 周天\n\n![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)\n\n## ? 代码演示\n``` js\nconst y = 1\n```\n## ? 文本演示\n\n依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。\n\n## ? 表格演示\n\n| 昵称 | 来自      |\n| ---- | --------- |\n| 之间 | 中国-重庆 |,\n\n## ? 公式\n\n行内：$x+y^{2x}$\n\n$$\nsqrt[3]{x}\n$$\n## ? 图表\n\n```mermaid\nflowchart TD\n  Start --> Stop\n```\n\n','11','111','','2024-04-02 07:23:27','111','',0,0),(82,13,'112','# 请先清空示例内容\n## ? md编辑器示例\n\n### ? 基本演示\n\n**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>1</sub>，`inline code`，[超链接](https://imzbf.cc)\n\n> 引用：《I Have a Dream》\n\n1. So even though we face the difficulties of today and tomorrow, I still have a dream.\n2. It is a dream deeply rooted in the American dream.\n3. I have a dream that one day this nation will rise up.\n\n- [ ] 周五\n- [ ] 周六\n- [x] 周天\n\n![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)\n\n## ? 代码演示\n``` js\nconst y = 1\n```\n## ? 文本演示\n\n依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。\n\n## ? 表格演示\n\n| 昵称 | 来自      |\n| ---- | --------- |\n| 之间 | 中国-重庆 |,\n\n## ? 公式\n\n行内：$x+y^{2x}$\n\n$$\nsqrt[3]{x}\n$$\n## ? 图表\n\n```mermaid\nflowchart TD\n  Start --> Stop\n```\n\n','11','111','','2024-04-02 07:27:21','111','[13]',4,1),(83,13,'11','# 请先清空示例内容\n## ? md编辑器示例\n\n### ? 基本演示\n\n**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>1</sub>，`inline code`，[超链接](https://imzbf.cc)\n\n> 引用：《I Have a Dream》\n\n1. So even though we face the difficulties of today and tomorrow, I still have a dream.\n2. It is a dream deeply rooted in the American dream.\n3. I have a dream that one day this nation will rise up.\n\n- [ ] 周五\n- [ ] 周六\n- [x] 周天\n\n![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)\n\n## ? 代码演示\n``` js\nconst y = 1\n```\n## ? 文本演示\n\n依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。\n\n## ? 表格演示\n\n| 昵称 | 来自      |\n| ---- | --------- |\n| 之间 | 中国-重庆 |,\n\n## ? 公式\n\n行内：$x+y^{2x}$\n\n$$\nsqrt[3]{x}\n$$\n## ? 图表\n\n```mermaid\nflowchart TD\n  Start --> Stop\n```\n\n','11','111','','2024-04-03 01:37:16','1111','',0,0),(84,13,'项目启动时端口被占用','# 2024/3/12\n\n## 1. 关于前端项目启动时端口被占用的问题\n> 端口占用\n\n报错提示：11\n\n` listen EACCES: permission denied 0.0.0.0:80`\n\n解决办法：\n\n1. `netstat -ano | findstr 80` 查看本机80端口占用情况\n  \n2. `netsh http show servicestate` 找到使用了80端口的链接的PID\n  \n3. 打开任务管理器，勾选PID，结束正在使用80端口的应用进程，重新启动项目\n  \n\n## 2. 使用SwitchHosts解决前端项目跨域问题 （??）\n\nSwitchHosts 主要用于管理和一键切换多个hosts方案的工具\n\n> 关于使用过程中，提示无修改host权限，需要以管理员身份打开应用，重启host配置\n\nswitch相当于修改了本机默认的hosts文件\n\n- window默认hosts文件地址：C:\\\\Windows\\System32\\drivers\\etc\\hosts\n  \n- linux：/etc/hosts\n  \n\n```js\n//switchhost示例配置文件\nxxx.xxx.xxx.xxx   xxx.xxx.com//本机地址 --- 代理的远程地址\n127.0.0.1   baidu.com  \n//将本机默认端口代理到百度的地址，此时如果访问baidu.com的接口就不涉及到跨域问题\n```\n\n## 3. 关于vite环境变量（import.meta.env）\n\nvite在`import.meta.env` 对象上暴露环境变量\n\n### 3.1 以下为vite在所有情况下都可使用的内建变量：\n\n- **`import.meta.env.MODE`**: {string} 应用运行的[模式](https://cn.vitejs.dev/guide/env-and-mode#modes)。\n  \n\n- **`import.meta.env.BASE_URL`**: {string} 部署应用时的基本 URL。他由[`base` 配置项](https://cn.vitejs.dev/config/shared-options.html#base)决定。\n  \n- **`import.meta.env.PROD`**: {boolean} 应用是否运行在生产环境（使用 `NODE_ENV=\'production\'` 运行开发服务器或构建应用时使用 `NODE_ENV=\'production\'` ）。\n  \n- **`import.meta.env.DEV`**: {boolean} 应用是否运行在开发环境 (永远与 `import.meta.env.PROD`相反)。\n  \n- **`import.meta.env.SSR`**: {boolean} 应用是否运行在 [server](https://cn.vitejs.dev/guide/ssr.html#conditional-logic) 上。\n  \n\n### 3.2 使用.env文件配置环境变量\n\nvite使用**dotenv**从项目目录的以下文件加载额外的环境变量\n\n```\n.env                # 所有情况下都会加载\n.env.local          # 所有情况下都会加载，但会被 git 忽略\n.env.[mode]         # 只在指定模式下加载\n.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略\n```\n\n### 3.3 变量优先级及使用事项\n\n优先级：\n\n> 1. 用于指定模式的文件（.env.production）比通用模式下（.env）优先级高\n>   \n> 2. vite执行时已经存在的环境变量优先级最高，不会被.env文件覆盖\n>   \n> 3. .env类文件会在vite启动时加载，但是修改需要在重启服务器后生效\n>   \n\n使用事项：\n\n> 为了防止意外的环境变量泄露，只有以<mark>VITE_</mark>为前缀的变量才会暴露给经过vite处理的代码\n> \n> 只有VITE_SOME_KEY会暴露给import.meta.env作为环境变量，DB_PASSWORD不会\n> \n> `VITE_SOME_KEY = 123 生效` `DB_PASSWORD = 123 不生效`\n\n### 3.4 模式\n\npackage.json\n\n```json\n“script\":{\n    “dev\":\"vite\",  //development 开发模式\n    \"build\":\"vite build\", //production 生产模式\n    “xxx”：\"vite build --mode xxx\" //自定义模式\n}\n```\n\n`vite dev` mode为development，默认加载 .env.development 文件内的配置\n\n`vite build`mode为production，默认加载 .env.production 文件内的配置\n\n`vite build --mode xxx`，加载.env.xxx文件内的配置','端口','技术','','2024-04-09 03:28:45','111','',1,3),(85,13,'测试','# 请先清空示例内容\n## ? md编辑器示例\n\n### ? 基本演示\n\n**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>1</sub>，`inline code`，[超链接](https://imzbf.cc)\n\n> 引用：《I Have a Dream》\n\n1. So even though we face the difficulties of today and tomorrow, I still have a dream.\n2. It is a dream deeply rooted in the American dream.\n3. I have a dream that one day this nation will rise up.\n\n- [ ] 周五\n- [ ] 周六\n- [x] 周天\n\n![图片](https://imzbf.github.io/md-editor-rt/imgs/mark_emoji.gif)\n\n## ? 代码演示\n``` js\nconst y = 1\n```\n## ? 文本演示\n\n依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。\n\n## ? 表格演示\n\n| 昵称 | 来自      |\n| ---- | --------- |\n| 之间 | 中国-重庆 |,\n\n## ? 公式\n\n行内：$x+y^{2x}$\n\n$$\nsqrt[3]{x}\n$$\n## ? 图表\n\n```mermaid\nflowchart TD\n  Start --> Stop\n```\n\n','测试','11','','2024-04-11 03:23:22','111','',0,0);
/*!40000 ALTER TABLE `userarticle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-17 15:57:43