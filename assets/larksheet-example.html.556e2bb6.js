import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as n,b as s,d as a,w as r,e as u,r as e}from"./app.91dddb49.js";const i={},k=n("h1",{id:"larksheet-connector-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#larksheet-connector-examples","aria-hidden":"true"},"#"),s(" LarkSheet connector examples")],-1),d=n("hr",null,null,-1),v=n("h2",{id:"读连接器示例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#读连接器示例","aria-hidden":"true"},"#"),s(" 读连接器示例")],-1),m=n("p",null,"要读的表格如下",-1),q={href:"https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq",target:"_blank",rel:"noopener noreferrer"},h={href:"https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=FJhAlN",target:"_blank",rel:"noopener noreferrer"},b=u(`<p>示例任务配置如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sheet_urls&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq,https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=FJhAlN&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;app_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_app_id&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;app_secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_app_secret&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;batch_size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skip_nums&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;year&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;month&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;日期&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function _(g,y){const o=e("RouterLink"),t=e("ExternalLinkIcon");return c(),l("div",null,[k,d,n("p",null,[s("父目录: "),a(o,{to:"/zh/documents/connectors/larksheet/larksheet.html"},{default:r(()=>[s("飞书表格连接器")]),_:1})]),v,m,n("ul",null,[n("li",null,[n("a",q,[s("test_sheet_1"),a(t)])]),n("li",null,[n("a",h,[s("test_sheet_2"),a(t)])])]),b])}const x=p(i,[["render",_],["__file","larksheet-example.html.vue"]]);export{x as default};
