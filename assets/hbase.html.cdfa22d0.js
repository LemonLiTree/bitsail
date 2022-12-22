import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,b as t,d as a,w as s,e as p,r}from"./app.91dddb49.js";const c={},d=n("h1",{id:"hbase-connector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hbase-connector","aria-hidden":"true"},"#"),t(" HBase connector")],-1),u=p(`<p><em><strong>Bitsail</strong></em> HBase can be used to read and write HBase tables. The main function points are as follows:</p><ul><li>Support scanning HBase tables.</li><li>Support set RowKey while writing HBase tables.</li></ul><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-hbase<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hbase-reader" tabindex="-1"><a class="header-anchor" href="#hbase-reader" aria-hidden="true">#</a> HBase reader</h2><h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3><p>HBase reader supports transform binary data from HBase into following formats of data:</p><ul><li>string</li><li>boolean</li><li>int</li><li>short</li><li>long</li><li>bigint</li><li>double</li><li>float</li><li>date</li><li>bytes</li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.reader</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.hbase.source.HBaseInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hbase_conf&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;hbase.zookeeper.quorum&quot;</span><span class="token operator">:</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hbase.zookeeper.property.clientPort&quot;</span><span class="token operator">:</span><span class="token string">&quot;2181&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hbase.mapreduce.splittable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cf1:str1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cf1:int1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">HBase reader class name, <code>com.bytedance.bitsail.connector.legacy.hbase.source.HBaseInputFormat</code></td></tr><tr><td style="text-align:left;">table</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Target HBase table to read.</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types. The format should be: <code>columnFamily:columnName</code>.</td></tr><tr><td style="text-align:left;">hbase_conf</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Configurations for creating HBase connection.</td></tr></tbody></table><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Read parallelism num</td></tr><tr><td style="text-align:left;">encoding</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">The encoding style when decoding binary data from HBase. Default utf-8.</td></tr></tbody></table><h2 id="hbase-writer" tabindex="-1"><a class="header-anchor" href="#hbase-writer" aria-hidden="true">#</a> HBase writer</h2><h3 id="supported-data-types-1" tabindex="-1"><a class="header-anchor" href="#supported-data-types-1" aria-hidden="true">#</a> Supported data types</h3><p>HBase writer supports transform the following formats of data into binary data:</p><ul><li>varchar</li><li>string</li><li>boolean</li><li>short</li><li>int</li><li>long</li><li>bigint</li><li>double</li><li>decimal</li><li>float</li><li>date</li><li>timestamp</li><li>binary</li></ul><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.writer</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.hbase.sink.HBaseOutputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hbase_conf&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;hbase.zookeeper.quorum&quot;</span><span class="token operator">:</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;hbase.zookeeper.property.clientPort&quot;</span><span class="token operator">:</span><span class="token string">&quot;2181&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;row_key_column&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id_$(cf1:str1)&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cf1:str1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cf1:int1&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bigint&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters-1" tabindex="-1"><a class="header-anchor" href="#necessary-parameters-1" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">HBase writer class name, <code>com.bytedance.bitsail.connector.legacy.hbase.sink.HBaseOutputFormat</code></td></tr><tr><td style="text-align:left;">table</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Target table to write.</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types. The format should be: <code>columnFamily:columnName</code>.</td></tr><tr><td style="text-align:left;">hbase_conf</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Configurations for creating HBase connection.</td></tr><tr><td style="text-align:left;">row_key_column</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Determine the RowKey for each row.</td></tr></tbody></table><p>The format of <code>row_key_column</code> is as follows:</p><ul><li><code>$(XX)</code> means using the value of <code>XX</code> defined in <code>columns</code>.</li><li><code>md5(...)</code> means the md5 operation.</li></ul><p>For example: <code>$(cf:name)_md5($(cf:id)_split_$(cf:age))</code></p><h4 id="optional-parameters-1" tabindex="-1"><a class="header-anchor" href="#optional-parameters-1" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Writer parallelism num. No larger than the region number of table.</td></tr><tr><td style="text-align:left;">encoding</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">The encoding style when encoding data. Default utf-8.</td></tr><tr><td style="text-align:left;">null_mode</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">How to process null value. <br>&quot;skip&quot; means this value will not be inserted.<br>&quot;empty&quot; means set the row to empty bytes.<br>Default &quot;empty&quot;.</td></tr><tr><td style="text-align:left;">wal_flag</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">If enable Write-ahead logging. Default false.</td></tr><tr><td style="text-align:left;">write_buffer_size</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">The buffer size of mutate operation. Default 8MB.</td></tr><tr><td style="text-align:left;">version_column</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Determine the timestamp of inserted rows.</td></tr></tbody></table><p>The usage of version_column is as follow:</p><ul><li>If not set, use the runtime timestamp as cells&#39; timestamp.</li><li>If <code>&quot;version_column&quot; = {&quot;index&quot;:x}</code>, then use the value of the x-th (begin from 0) column as cells&#39; timestamp. For example:<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token punctuation">{</span>
    <span class="token property">&quot;version_column&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token number">1</span>      <span class="token comment">// Use the second column defined in \`job.writer.columns\`</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>If <code>&quot;version_column&quot; = {&quot;value&quot;:xxx}</code> or <code>&quot;version_column&quot; = {&quot;value&quot;:&quot;xxx&quot;}</code>, then use the give value as cells&#39; timestamp. For example:<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token punctuation">{</span>
    <span class="token property">&quot;version_column&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span>       <span class="token comment">// Cells&#39; timestamp: 1234567890</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>`,32);function m(k,b){const e=r("RouterLink");return o(),i("div",null,[d,n("p",null,[t("Parent document: "),a(e,{to:"/en/documents/connectors/"},{default:s(()=>[t("connectors")]),_:1})]),u,n("p",null,[t("Configuration examples: "),a(e,{to:"/en/documents/connectors/hbase/hbase-example.html"},{default:s(()=>[t("hbase-connector-example")]),_:1})])])}const v=l(c,[["render",m],["__file","hbase.html.vue"]]);export{v as default};
