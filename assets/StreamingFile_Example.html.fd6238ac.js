import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as e,a as n,b as s,d as p,w as u,e as i,r}from"./app.91dddb49.js";const l={},c=n("h2",{id:"hdfs-s-example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hdfs-s-example","aria-hidden":"true"},"#"),s(" HDFS's Example")],-1),d=i(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;hdfs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;replication&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dump_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdfs.dump_type.json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;compression_codec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dump&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;output_dir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file:///tmp/streaming_file_hdfs/&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdfs&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.streamingfile.sink.FileSystemSinkFunctionDAGBuilder&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;partition_infos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;date\\&quot;,\\&quot;type\\&quot;:\\&quot;TIME\\&quot;},{\\&quot;name\\&quot;:\\&quot;hour\\&quot;,\\&quot;type\\&quot;:\\&quot;TIME\\&quot;}]&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;enable_event_time&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;event_time_fields&quot;</span><span class="token operator">:</span> <span class="token string">&quot;timestamp&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-example-static-partition" tabindex="-1"><a class="header-anchor" href="#hive-example-static-partition" aria-hidden="true">#</a> HIVE&#39; Example (Static Partition)</h2><h3 id="job-writer-s-configuration" tabindex="-1"><a class="header-anchor" href="#job-writer-s-configuration" aria-hidden="true">#</a> job writer&#39;s configuration</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bitsail_test_static&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hdfs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dump_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdfs.dump_type.json&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dump&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hive&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift:localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;partition_infos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;date\\&quot;,\\&quot;type\\&quot;:\\&quot;TIME\\&quot;},{\\&quot;name\\&quot;:\\&quot;hour\\&quot;,\\&quot;type\\&quot;:\\&quot;TIME\\&quot;}]&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;enable_event_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;event_time_fields&quot;</span><span class="token operator">:</span> <span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.streamingfile.sink.FileSystemSinkFunctionDAGBuilder&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;source_schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;id\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;text\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;},{\\&quot;name\\&quot;:\\&quot;timestamp\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;}]&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sink_schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;id\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;text\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;},{\\&quot;name\\&quot;:\\&quot;timestamp\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;}]&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-s-example-table-ddl" tabindex="-1"><a class="header-anchor" href="#job-s-example-table-ddl" aria-hidden="true">#</a> job&#39;s example table ddl.</h3><div class="language-hiveql line-numbers-mode" data-ext="hiveql"><pre class="language-hiveql"><code>CREATE TABLE IF NOT EXISTS \`default\`.\`bitsail_test_static\`
(
    \`id\`        bigint,
    \`text\`      string,
    \`timestamp\` bigint
) PARTITIONED BY (\`date\` string, \`hour\` string)
    ROW FORMAT SERDE &#39;org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe&#39;
    STORED AS INPUTFORMAT &#39;org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat&#39;
        OUTPUTFORMAT &#39;org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-example-dynamic-partition" tabindex="-1"><a class="header-anchor" href="#hive-example-dynamic-partition" aria-hidden="true">#</a> HIVE&#39; Example (Dynamic Partition)</h2><h3 id="job-writer-s-configuration-dynamic" tabindex="-1"><a class="header-anchor" href="#job-writer-s-configuration-dynamic" aria-hidden="true">#</a> job writer&#39;s configuration(dynamic)</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bitsail_test_dynamic&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;hdfs&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;dump_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdfs.dump_type.json&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dump&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hive&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift:localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;partition_infos&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;date\\&quot;,\\&quot;type\\&quot;:\\&quot;TIME\\&quot;},{\\&quot;name\\&quot;:\\&quot;hour\\&quot;,\\&quot;type\\&quot;:\\&quot;TIME\\&quot;},{\\&quot;name\\&quot;:\\&quot;app_name\\&quot;,\\&quot;type\\&quot;:\\&quot;DYNAMIC\\&quot;}]&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;enable_event_time&quot;</span><span class="token operator">:</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;event_time_fields&quot;</span><span class="token operator">:</span> <span class="token string">&quot;timestamp&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.streamingfile.sink.FileSystemSinkFunctionDAGBuilder&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;source_schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;id\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;text\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;},{\\&quot;name\\&quot;:\\&quot;timestamp\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;app_name\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;}]&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sink_schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[{\\&quot;name\\&quot;:\\&quot;id\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;text\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;},{\\&quot;name\\&quot;:\\&quot;timestamp\\&quot;,\\&quot;type\\&quot;:\\&quot;bigint\\&quot;},{\\&quot;name\\&quot;:\\&quot;app_name\\&quot;,\\&quot;type\\&quot;:\\&quot;string\\&quot;}]&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-s-example-table-ddl-dynamic" tabindex="-1"><a class="header-anchor" href="#job-s-example-table-ddl-dynamic" aria-hidden="true">#</a> job&#39;s example table ddl (dynamic).</h3><div class="language-hiveql line-numbers-mode" data-ext="hiveql"><pre class="language-hiveql"><code>CREATE TABLE IF NOT EXISTS \`default\`.\`bitsail_test_dynamic\`
(
    \`id\`        bigint,
    \`text\`      string,
    \`timestamp\` bigint
) PARTITIONED BY (\`date\` string, \`hour\` string, \`app_name\` string)
    ROW FORMAT SERDE &#39;org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe&#39;
    STORED AS INPUTFORMAT &#39;org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat&#39;
        OUTPUTFORMAT &#39;org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function q(m,v){const a=r("RouterLink");return o(),e("div",null,[c,n("p",null,[s("Parent document: "),p(a,{to:"/zh/documents/connectors/StreamingFile/StreamingFile.html"},{default:u(()=>[s("StreamingFile-connector")]),_:1})]),d])}const h=t(l,[["render",q],["__file","StreamingFile_Example.html.vue"]]);export{h as default};
