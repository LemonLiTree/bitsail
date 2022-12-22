import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as i,a as e,b as t,d as n,w as s,e as o,r as c}from"./app.91dddb49.js";const r={},p=e("h1",{id:"rocketmq连接器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rocketmq连接器","aria-hidden":"true"},"#"),t(" RocketMQ连接器")],-1),u=o(`<p><em><strong>BitSail</strong></em> RocketMQ连接器支持写指定的RocketMQ topic。</p><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-rocketmq<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rocketmq写入" tabindex="-1"><a class="header-anchor" href="#rocketmq写入" aria-hidden="true">#</a> RocketMQ写入</h2><h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3><ul><li>int, bigint</li><li>float, double, decimal</li><li>timestamp, date</li><li>string, char</li><li>boolean</li><li>binary</li></ul><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>写连接器参数在<code>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.rocketmq.sink.RocketMQOutputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name_server_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:9876&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;producer_group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_producer_group&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;topic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_topic&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">RocketMQ写连接器类型, <code>com.bytedance.bitsail.connector.legacy.rocketmq.sink.RocketMQOutputFormat</code></td></tr><tr><td style="text-align:left;">name_server_address</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">RocketMQ的name server地址</td></tr><tr><td style="text-align:left;">topic</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">要写入的topic</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">指定写入的字段名和字段类型</td></tr></tbody></table><h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定RocketMQ写并发</td></tr><tr><td style="text-align:left;">producer_group</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">任务的生产组。若不指定，则为一随机字符串</td></tr><tr><td style="text-align:left;">tag</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">生产消息的tag</td></tr><tr><td style="text-align:left;">enable_batch_flush</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">是否开启batch发送。默认 true</td></tr><tr><td style="text-align:left;">batch_size</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">Batch发送的数量，默认100</td></tr><tr><td style="text-align:left;">log_failures_only</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">当send出错时:<br>1. true: 仅日志打印错误<br>2. false: 抛出异常<br>默认 false</td></tr><tr><td style="text-align:left;">enable_sync_send</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">是否使用同步发送。默认 false</td></tr><tr><td style="text-align:left;">access_key</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">用于鉴权的Access key</td></tr><tr><td style="text-align:left;">secret_key</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">用于鉴权的Secret key</td></tr><tr><td style="text-align:left;">send_failure_retry_times</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">最大失败重试次数, 默认 3</td></tr><tr><td style="text-align:left;">send_message_timeout_ms</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">消息发送的最大超时, 默认 3000 ms</td></tr><tr><td style="text-align:left;">max_message_size_bytes</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">最大消息体积, 默认 4194304 bytes</td></tr><tr><td style="text-align:left;">key</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定column中的一个或几个字段作为消息的key</td></tr><tr><td style="text-align:left;">partition_fields</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定column中的一个或几个字段用于选择消息发送到的queue</td></tr></tbody></table><h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>`,14);function g(y,f){const a=c("RouterLink");return d(),i("div",null,[p,e("p",null,[t("上级文档: "),n(a,{to:"/zh/documents/connectors/"},{default:s(()=>[t("connectors")]),_:1})]),u,e("p",null,[t("配置示例文档: "),n(a,{to:"/zh/documents/connectors/rocketmq/rocketmq-example.html"},{default:s(()=>[t("rocketmq-connector-example")]),_:1})])])}const h=l(r,[["render",g],["__file","rocketmq.html.vue"]]);export{h as default};
