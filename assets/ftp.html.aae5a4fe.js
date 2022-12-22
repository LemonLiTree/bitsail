import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as e,b as t,d as l,w as n,e as s,r}from"./app.91dddb49.js";const c={},p=e("h1",{id:"ftp-sftp-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ftp-sftp-connector","aria-hidden":"true"},"#"),t(" FTP/SFTP connector")],-1),f=s(`<h2 id="main-functionalities" tabindex="-1"><a class="header-anchor" href="#main-functionalities" aria-hidden="true">#</a> Main functionalities</h2><p>This connector can be used to read files from FTP/SFTP servers in batch scenarios. Its functionalities mainly include:</p><ul><li>Support reading files in multiple directories</li><li>Support reading files of various formats</li></ul><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-ftp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h2><ul><li>Basic data types supported: <ul><li>Integer type: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>Float type: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>Time type: <ul><li>timestamp</li><li>date</li></ul></li><li>String type: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>Bool type: <ul><li>boolean</li></ul></li><li>Binary type: <ul><li>binary</li></ul></li></ul></li><li>Composited data types supported: <ul><li>map</li><li>array</li></ul></li></ul><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2>`,8),u=e("code",null,"job.reader",-1),h=s('<h3 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h3><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Class name of connector,<code>com.bytedance.bitsail.connector.legacy.ftp.source.FtpInputFormat</code></td></tr><tr><td style="text-align:left;">path_list</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Specifies the path of the read in file. Multiple paths can be specified, separated by <code>&#39;,&#39;</code></td></tr><tr><td style="text-align:left;">content_type</td><td style="text-align:left;">Yes</td><td style="text-align:left;">JSON/CSV</td><td style="text-align:left;">Specify the format of the read in file. For details, refer to <a href="#jump_format">Supported formats</a></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types</td></tr><tr><td style="text-align:left;">port</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Server port，normally FTP is 21, SFTP is 22</td></tr><tr><td style="text-align:left;">host</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Server host</td></tr><tr><td style="text-align:left;">user</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Username</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Password</td></tr><tr><td style="text-align:left;">protocol</td><td style="text-align:left;">Yes</td><td style="text-align:left;">FTP/SFTP</td><td style="text-align:left;">Protocol</td></tr><tr><td style="text-align:left;">success_file_path</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Path to SUCCESS tag file</td></tr></tbody></table><h3 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h3><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Default value</th><th>Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">connect_pattern</td><td style="text-align:left;">No</td><td style="text-align:left;">PASV if FTP, NULL if SFTP</td><td>PASV/PORT/NULL</td><td style="text-align:left;">In ftp mode, connect pattern can be PASV or PORT. In sftp mode, connect pattern is NULL</td></tr><tr><td style="text-align:left;">time_out</td><td style="text-align:left;">No</td><td style="text-align:left;">5000ms</td><td></td><td style="text-align:left;">Connection timeout</td></tr><tr><td style="text-align:left;">enable_success_file_check</td><td style="text-align:left;">No</td><td style="text-align:left;">True</td><td></td><td style="text-align:left;">Enabled by default, the job will not start if SUCCESS tag doesn&#39;t exist</td></tr><tr><td style="text-align:left;">max_retry_time</td><td style="text-align:left;">No</td><td style="text-align:left;">60</td><td></td><td style="text-align:left;">Max time to check for SUCCESS tag file</td></tr><tr><td style="text-align:left;">retry_interval_ms</td><td style="text-align:left;">No</td><td style="text-align:left;">60s</td><td></td><td style="text-align:left;">Retry interval to check for SUCCESS tag file</td></tr></tbody></table><h2 id="supported-formats" tabindex="-1"><a class="header-anchor" href="#supported-formats" aria-hidden="true">#</a> <span id="jump_format">Supported formats</span></h2><p>Support the following formats(configured by <code>content_type</code>):</p><ul><li><a href="#jump_json">JSON</a></li><li><a href="#jump_csv">CSV</a></li></ul><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> <span id="jump_json">JSON</span></h3><p>It supports parsing text files in json format. Each line is required to be a standard json string.</p><p>The following parameters are supported to adjust the json parsing stype:</p><table><thead><tr><th>Parameter name</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td><code>job.common.case_insensitive</code></td><td>true</td><td>Whether to be sensitive to the case of the key in the json field</td></tr><tr><td><code>job.common.json_serializer_features</code></td><td></td><td>Specify the mode when &#39;FastJsonUtil&#39; is parsed. The format is <code>&#39;,&#39;</code> separated string, for example <code>&quot;QuoteFieldNames,UseSingleQuotes&quot;</code></td></tr><tr><td><code>job.common.convert_error_column_as_null</code></td><td>false</td><td>Whether to set the field with parsing error to null</td></tr></tbody></table><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> <span id="jump_csv">CSV</span></h3><p>Support parsing of text files in csv format. Each line is required to be a standard csv string.</p><p>The following parameters are supported to adjust the csv parsing style:</p><table><thead><tr><th>Parameter name</th><th>Default value</th><th>Description</th></tr></thead><tbody><tr><td><code>job.common.csv_delimiter</code></td><td><code>&#39;,&#39;</code></td><td>csv delimiter</td></tr><tr><td><code>job.common.csv_escape</code></td><td></td><td>escape character</td></tr><tr><td><code>job.common.csv_quote</code></td><td></td><td>quote character</td></tr><tr><td><code>job.common.csv_with_null_string</code></td><td></td><td>Specify the conversion value of null field. It is not converted by default</td></tr></tbody></table>',15);function g(m,y){const a=r("RouterLink");return i(),o("div",null,[p,e("p",null,[t("Parent document: "),l(a,{to:"/en/documents/connectors/"},{default:n(()=>[t("connectors")]),_:1})]),f,e("p",null,[t("The following mentioned parameters should be added to "),u,t(" block when using, for example: "),l(a,{to:"/en/documents/connectors/ftp/ftp-example.html"},{default:n(()=>[t("ftp-connector-example")]),_:1})]),h,e("p",null,[t("Configuration examples: "),l(a,{to:"/en/documents/connectors/ftp/ftp-example.html"},{default:n(()=>[t("ftp-connector-example")]),_:1})])])}const _=d(c,[["render",g],["__file","ftp.html.vue"]]);export{_ as default};
