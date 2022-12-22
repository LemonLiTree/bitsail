import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as i,a as e,b as t,d as l,w as n,e as o,r}from"./app.91dddb49.js";const u={},c=e("h1",{id:"kudu-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kudu-connector","aria-hidden":"true"},"#"),t(" Kudu connector")],-1),p=o(`<p><em><strong>BitSail</strong></em> Kudu connector supports reading and writing kudu tables.</p><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>connector-kudu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="kudu-reader" tabindex="-1"><a class="header-anchor" href="#kudu-reader" aria-hidden="true">#</a> Kudu Reader</h2><p>Kudu reader us scanner to read table, supporting common Kudu data types:</p><ul><li>Integer: <code>int8, int16, int32, int64</code>&#39;</li><li>Float number: <code>float, double, decimal</code></li><li>Bool: <code>boolean</code></li><li>Date &amp; Time: <code>date, timestamp</code></li><li>String: <code>string, varchar</code></li><li>Binary: <code>binary, string_utf8</code></li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.reader</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.kudu.source.KuduSource&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;kudu_table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kudu_test_table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;kudu_master_address_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:1234&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:4321&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu reader&#39;s class name, <code>com.bytedance.bitsail.connector.kudu.source.KuduSource</code></td></tr><tr><td style="text-align:left;">kudu_table_name</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu table to read</td></tr><tr><td style="text-align:left;">kudu_master_address_list</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu master addresses in list format</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">The name and type of columns to read</td></tr><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">reader parallelism</td></tr></tbody></table><h4 id="kuduclient-related-parameters" tabindex="-1"><a class="header-anchor" href="#kuduclient-related-parameters" aria-hidden="true">#</a> KuduClient related parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">kudu_admin_operation_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu client admin operation&#39;s timeout. Unit is ms, default 30000ms</td></tr><tr><td style="text-align:left;">kudu_operation_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu client operation&#39;s timeout. Unit is ms, default 30000ms</td></tr><tr><td style="text-align:left;">kudu_connection_negotiation_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Unit is ms，default 10000ms</td></tr><tr><td style="text-align:left;">kudu_disable_client_statistics</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">If to enable statistics in kudu client</td></tr><tr><td style="text-align:left;">kudu_worker_count</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">client worker number.</td></tr><tr><td style="text-align:left;">sasl_protocol_name</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Default &quot;kudu&quot;</td></tr><tr><td style="text-align:left;">require_authentication</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">If to enable authentication.</td></tr><tr><td style="text-align:left;">encryption_policy</td><td style="text-align:left;">no</td><td style="text-align:left;">OPTIONAL<br>REQUIRED_REMOTE<br>REQUIRED</td><td style="text-align:left;">encryption polocy.</td></tr></tbody></table><h4 id="kuduscanner-related-parameters" tabindex="-1"><a class="header-anchor" href="#kuduscanner-related-parameters" aria-hidden="true">#</a> KuduScanner related parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">read_mode</td><td style="text-align:left;">no</td><td style="text-align:left;">READ_LATEST<br>READ_AT_SNAPSHOT</td><td style="text-align:left;">read mode</td></tr><tr><td style="text-align:left;">snapshot_timestamp_us</td><td style="text-align:left;">yes if read_mode=READ_AT_SNAPSHOT</td><td style="text-align:left;"></td><td style="text-align:left;">specify which snapshot to read</td></tr><tr><td style="text-align:left;">enable_fault_tolerant</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">If to enable fault tolerant</td></tr><tr><td style="text-align:left;">scan_batch_size_bytes</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Max bytes number in single batch</td></tr><tr><td style="text-align:left;">scan_max_count</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Max number of rows to scan</td></tr><tr><td style="text-align:left;">enable_cache_blocks</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">If to enable cache blocks, default true</td></tr><tr><td style="text-align:left;">scan_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">scan timeout. Unit is ms, default 30000ms</td></tr><tr><td style="text-align:left;">scan_keep_alive_period_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr></tbody></table><h4 id="split-related-parameters" tabindex="-1"><a class="header-anchor" href="#split-related-parameters" aria-hidden="true">#</a> Split related parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">split_strategy</td><td style="text-align:left;">no</td><td style="text-align:left;">SIMPLE_DIVIDE</td><td style="text-align:left;">Split strategy. Only support SIMPLE_DIVIDE now.</td></tr><tr><td style="text-align:left;">split_config</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Split configuration for each strategy.</td></tr></tbody></table><h5 id="simple-divide-split-strategy" tabindex="-1"><a class="header-anchor" href="#simple-divide-split-strategy" aria-hidden="true">#</a> SIMPLE_DIVIDE split strategy</h5><p>SIMPLE_DIVIDE strategy uses the following format of split_config:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;{\\&quot;name\\&quot;: \\&quot;key\\&quot;, \\&quot;lower_bound\\&quot;: 0, \\&quot;upper_bound\\&quot;: \\&quot;10000\\&quot;, \\&quot;split_num\\&quot;: 3}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>name</code>: the name of split column, only support int8, int16, int32, int64 type.</li><li><code>lower_bound</code>: The min value of the split column (Scan table to get the min value if it is not set).</li><li><code>upper_bound</code>: The max value of the split column (Scan table to get the max value if it is not set).</li><li><code>split_num</code>: Number of split (Use the reader parallelism if it is not set).</li></ul><p>SIMPLE_DIVIDE strategy will evenly divide the range <code>[lower_bound, upper_bound]</code> into split_num sub ranges, and each range is a split.</p><hr><h2 id="kudu-writer" tabindex="-1"><a class="header-anchor" href="#kudu-writer" aria-hidden="true">#</a> Kudu Writer</h2><h3 id="supported-data-type" tabindex="-1"><a class="header-anchor" href="#supported-data-type" aria-hidden="true">#</a> Supported data type</h3><p>Support common Kudu data types:</p><ul><li>Integer: <code>int8, int16, int32, int64</code>&#39;</li><li>Float number: <code>float, double, decimal</code></li><li>Bool: <code>boolean</code></li><li>Date &amp; Time: <code>date, timestamp</code></li><li>String: <code>string, varchar</code></li><li>Binary: <code>binary, string_utf8</code></li></ul><h3 id="supported-operation-type" tabindex="-1"><a class="header-anchor" href="#supported-operation-type" aria-hidden="true">#</a> Supported operation type</h3><p>Support the following operations:</p><ul><li>INSERT, INSERT_IGNORE</li><li>UPSERT</li><li>UPDATE, UPDATE_IGNORE</li></ul><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.writer</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.kudu.sink.KuduSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;kudu_table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kudu_test_table&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;kudu_master_address_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:1234&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:4321&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;kudu_worker_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters-1" tabindex="-1"><a class="header-anchor" href="#necessary-parameters-1" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu writer&#39;s class name, <code>com.bytedance.bitsail.connector.kudu.sink.KuduSink</code></td></tr><tr><td style="text-align:left;">kudu_table_name</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu table to write</td></tr><tr><td style="text-align:left;">kudu_master_address_list</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu master addresses in list format</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">The name and type of columns to write</td></tr><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">writer parallelism</td></tr></tbody></table><h4 id="kuduclient-related-parameters-1" tabindex="-1"><a class="header-anchor" href="#kuduclient-related-parameters-1" aria-hidden="true">#</a> KuduClient related parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">kudu_admin_operation_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu client admin operation&#39;s timeout. Unit is ms, default 30000ms</td></tr><tr><td style="text-align:left;">kudu_operation_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Kudu client operation&#39;s timeout. Unit is ms, default 30000ms</td></tr><tr><td style="text-align:left;">kudu_connection_negotiation_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Unit is ms，default 10000ms</td></tr><tr><td style="text-align:left;">kudu_disable_client_statistics</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">If to enable statistics in kudu client</td></tr><tr><td style="text-align:left;">kudu_worker_count</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">client worker number.</td></tr><tr><td style="text-align:left;">sasl_protocol_name</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Default &quot;kudu&quot;</td></tr><tr><td style="text-align:left;">require_authentication</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">If to enable authentication.</td></tr><tr><td style="text-align:left;">encryption_policy</td><td style="text-align:left;">no</td><td style="text-align:left;">OPTIONAL<br>REQUIRED_REMOTE<br>REQUIRED</td><td style="text-align:left;">encryption polocy.</td></tr></tbody></table><h4 id="kudusession-related-parameters" tabindex="-1"><a class="header-anchor" href="#kudusession-related-parameters" aria-hidden="true">#</a> KuduSession related parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">kudu_session_flush_mode</td><td style="text-align:left;">no</td><td style="text-align:left;">AUTO_FLUSH_SYNC<br>AUTO_FLUSH_BACKGROUND</td><td style="text-align:left;">Session&#39;s flush mode. Default AUTO_FLUSH_BACKGROUND</td></tr><tr><td style="text-align:left;">kudu_mutation_buffer_size</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">The number of operations that can be buffered</td></tr><tr><td style="text-align:left;">kudu_session_flush_interval</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">session flush interval，unit is ms</td></tr><tr><td style="text-align:left;">kudu_session_timeout_ms</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Timeout for operations. The default timeout is 0, which disables the timeout functionality.</td></tr><tr><td style="text-align:left;">kudu_session_external_consistency_mode</td><td style="text-align:left;">no</td><td style="text-align:left;">CLIENT_PROPAGATED<br>COMMIT_WAIT</td><td style="text-align:left;">External consistency mode for kudu session, default CLIENT_PROPAGATED</td></tr><tr><td style="text-align:left;">kudu_ignore_duplicate_rows</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Whether ignore all the row errors if they are all of the AlreadyPresent type. Throw exceptions if false. Default false.</td></tr></tbody></table><hr><h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>`,42);function f(y,g){const a=r("RouterLink");return d(),i("div",null,[c,e("p",null,[t("Parent document: "),l(a,{to:"/en/documents/connectors/"},{default:n(()=>[t("connectors")]),_:1})]),p,e("p",null,[t("Configuration example: "),l(a,{to:"/en/documents/connectors/kudu/kudu-example.html"},{default:n(()=>[t("kudu-connector-example")]),_:1})])])}const m=s(u,[["render",f],["__file","kudu.html.vue"]]);export{m as default};
