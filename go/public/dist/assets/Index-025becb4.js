import{i as e}from"./main-429c1dad.js";import{i}from"./ipcRenderer-5e19eaee.js";import{_ as n,h as o,r as a,o as l,b as t,g as s,a as d,w,e as c,p as u,f as m}from"./index-4492cee0.js";const p={data:()=>({views:[{type:"web",content:"https://www.bilibili.com/",windowName:"window-web",windowTitle:"bilibili"},{type:"html",content:"/public/html/view_example.html",windowName:"window-html",windowTitle:"html window"},{type:"vue",content:"#/special/subwindow",windowName:"window-vue",windowTitle:"vue window"}]}),methods:{createWindow(n){i.invoke(e.createWindow,o(this.views[n])).then((e=>{console.log(e)}))}}},r=e=>(u("data-v-f82edd5f"),e=e(),m(),e),b={id:"app-base-window"},v=r((()=>s("div",{class:"one-block-1"},[s("span",null," 1. 新窗口中加载web内容 ")],-1))),f={class:"one-block-2"},h=r((()=>s("div",{class:"one-block-1"},[s("span",null," 2. 新窗口中加载html内容 ")],-1))),k={class:"one-block-2"},_=r((()=>s("div",{class:"one-block-1"},[s("span",null," 3. 新窗口中加载当前项目页面 ")],-1))),W={class:"one-block-2"};const j=n(p,[["render",function(e,i,n,o,u,m){const p=a("a-button"),r=a("a-space");return l(),t("div",b,[v,s("div",f,[d(r,null,{default:w((()=>[d(p,{onClick:i[0]||(i[0]=e=>m.createWindow(0))},{default:w((()=>[c("打开哔哩哔哩")])),_:1})])),_:1})]),h,s("div",k,[d(r,null,{default:w((()=>[d(p,{onClick:i[1]||(i[1]=e=>m.createWindow(1))},{default:w((()=>[c("打开html页面")])),_:1})])),_:1})]),_,s("div",W,[d(r,null,{default:w((()=>[d(p,{onClick:i[2]||(i[2]=e=>m.createWindow(2))},{default:w((()=>[c("打开vue页面")])),_:1})])),_:1})])])}],["__scopeId","data-v-f82edd5f"]]);export{j as default};
