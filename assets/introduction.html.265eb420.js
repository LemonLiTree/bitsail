import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a,b as n,d as i,w as c,e as l,r as p}from"./app.91dddb49.js";const r={},d=a("h1",{id:"bitsail-component-clients",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#bitsail-component-clients","aria-hidden":"true"},"#"),n(" bitsail-component-clients")],-1),u=a("hr",null,null,-1),k=l(`<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2><p>在应用开发过程中，应用往往需要和各种各样的组件进行连接交互，例如Kafka、rds数据库等。 本模块用于提供连接多种大数据组件的客户端。 开发者可通过引入相应依赖后方便地创建客户端。</p><p>目前本模块提供如下客户端的创建：</p><table><thead><tr><th>子模块</th><th>相关的大数据组件</th><th>支持的功能</th><th>链接</th></tr></thead><tbody><tr><td><code>bitsail-components-client-kafka</code></td><td><code>Kafka</code></td><td>创建KafkaProducer</td><td><a href="#jump_kafka">link</a></td></tr></tbody></table><hr><h2 id="子模块-bitsail-components-client-kafka" tabindex="-1"><a class="header-anchor" href="#子模块-bitsail-components-client-kafka" aria-hidden="true">#</a> <span id="jump_kafka">子模块: bitsail-components-client-kafka</span></h2><h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h3><div class="language-j line-numbers-mode" data-ext="j"><pre class="language-j"><code><span class="token verb keyword">&lt;</span>dependency<span class="token verb keyword">&gt;</span>
    <span class="token verb keyword">&lt;</span>groupId<span class="token verb keyword">&gt;</span>com<span class="token conjunction variable">.</span>bytedanc<span class="token verb keyword">e.</span>bitsail<span class="token verb keyword">&lt;</span><span class="token adverb builtin">/</span>groupId<span class="token verb keyword">&gt;</span>
    <span class="token verb keyword">&lt;</span>artifactId<span class="token verb keyword">&gt;</span>bitsail<span class="token verb keyword">-</span>component<span class="token verb keyword">-</span>client<span class="token verb keyword">-</span>kafka<span class="token verb keyword">&lt;</span><span class="token adverb builtin">/</span>artifactId<span class="token verb keyword">&gt;</span>
    <span class="token verb keyword">&lt;</span>version<span class="token verb keyword">&gt;</span><span class="token verb keyword">$</span><span class="token verb keyword">{</span>revision<span class="token adverb builtin">}</span><span class="token verb keyword">&lt;</span><span class="token adverb builtin">/</span>version<span class="token verb keyword">&gt;</span>
<span class="token verb keyword">&lt;</span><span class="token adverb builtin">/</span>dependency<span class="token verb keyword">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h3><p>本模块基于<code>org.apache.kafka.clients.producer.KafkaProducer</code>提供了一个封装过的<code>KafkaProducer</code>，支持连接到指定的kafka集群，并以同步或者异步的方式发送数据到指定topic。</p><h4 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h4><p>构造函数接受以下参数：</p><ol><li><code>bootstrap.servers</code>: 连接kafka集群的地址</li><li><code>topic</code>: 要写入的topic</li><li><code>userConfigs</code>（可选）: 用户自定义的producer构建属性</li></ol><p>此构造函数支持以下默认属性 (具体属性定义可查看org.apache.kafka.clients.producer.ProducerConfig):</p><ol><li><code>acks</code>: all</li><li><code>retries</code>: 0</li><li><code>batch_size</code>: 16384</li><li><code>linger.ms</code>: 1000</li><li><code>buffer.memory</code>: 33554432</li><li><code>key.serializer</code>: org.apache.kafka.common.serialization.StringSerializer</li><li><code>value.serializer</code>: org.apache.kafka.common.serialization.StringSerializer</li></ol><p>使用示例如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String bootstrapAddr = &quot;localhost:9092&quot;;
String topic = &quot;testTopic&quot;;
Map&lt;String, String&gt; userConfigs = ImmutableMap.of(
  &quot;group.id&quot;, &quot;test_group&quot;,
  &quot;batch.size&quot;, 16384
);
KafkaProducer kafkaProducer = new KafkaProducer(bootstrapAddr, topic, userConfigs);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同步-异步发送" tabindex="-1"><a class="header-anchor" href="#同步-异步发送" aria-hidden="true">#</a> 同步/异步发送</h4><p>开发者可使用同步发送，或者传入回调方法使用异步发送。方法分别如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 同步发送
public Future&lt;RecordMetadata&gt; send(String value);
public Future&lt;RecordMetadata&gt; send(String value, int partitionId);
public Future&lt;RecordMetadata&gt; send(String key, String value);

// 异步发送
public Future&lt;RecordMetadata&gt; send(String value, Callback callback);
public Future&lt;RecordMetadata&gt; send(String value, int partitionId, Callback callback);
public Future&lt;RecordMetadata&gt; send(String key, String value, Callback callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4><p>如下是一份完整的、可运行的使用此KafkaProducer的示例代码，发送300条指定数据到topic中。 你可以在替换相关kafka集群参数后在本地测试运行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>bytedance<span class="token punctuation">.</span>bitsail<span class="token punctuation">.</span>component<span class="token punctuation">.</span>client<span class="token punctuation">.</span>kafka</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KafkaProducerExample</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">assert</span> args<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> bootstrapServer <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> topic <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">KafkaProducer</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KafkaProducer</span><span class="token punctuation">(</span>bootstrapServer<span class="token punctuation">,</span> topic<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;key_&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
      <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token string">&quot;value_&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
      producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    producer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function v(b,m){const s=p("RouterLink");return t(),o("div",null,[d,u,a("p",null,[n("上级文档: "),i(s,{to:"/zh/documents/components/"},{default:c(()=>[n("bitsail-components")]),_:1})]),k])}const f=e(r,[["render",v],["__file","introduction.html.vue"]]);export{f as default};
