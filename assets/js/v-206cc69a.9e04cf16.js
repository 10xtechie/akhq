"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28],{6869:(e,a,n)=>{n.r(a),n.d(a,{data:()=>s});const s={key:"v-206cc69a",path:"/docs/configuration/avro.html",title:"Avro deserialization",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"docs/configuration/avro.md",git:{updatedTime:1643231383e3,contributors:[{name:"Christof Lüthi",email:"christofluethi@users.noreply.github.com",commits:1}]}}},8152:(e,a,n)=>{n.r(a),n.d(a,{default:()=>A});var s=n(6252);const r=(0,s._)("h1",{id:"avro-deserialization",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#avro-deserialization","aria-hidden":"true"},"#"),(0,s.Uk)(" Avro deserialization")],-1),t=(0,s.Uk)("Avro messages using Schema registry are automatically decoded if the registry is configured (see "),o=(0,s.Uk)("Kafka cluster"),i=(0,s.Uk)(")."),l=(0,s.Uk)("You can also decode raw binary Avro messages, that is messages encoded directly with "),c={href:"https://avro.apache.org/docs/current/api/java/org/apache/avro/io/DatumWriter.html",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("DatumWriter"),p=(0,s.Uk)(" without any header. You must provide a "),m=(0,s._)("code",null,"schemas-folder",-1),d=(0,s.Uk)(" and mappings which associate a "),h=(0,s._)("code",null,"topic-regex",-1),b=(0,s.Uk)(" and a schema file name. The schema can be specified either for message keys with "),f=(0,s._)("code",null,"key-schema-file",-1),k=(0,s.Uk)(" and/or for values with "),g=(0,s._)("code",null,"value-schema-file",-1),v=(0,s.Uk)("."),q=(0,s.uE)('<p>Here is an example of configuration:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>akhq:\n  connections:\n    kafka:\n      properties:\n        # standard kafka properties\n        avro-raw:\n          schemas-folder: &quot;/app/avro_schemas&quot;\n          topics-mapping:\n            - topic-regex: &quot;album.*&quot;\n              value-schema-file: &quot;Album.avsc&quot;\n            - topic-regex: &quot;film.*&quot;\n              value-schema-file: &quot;Film.avsc&quot;\n            - topic-regex: &quot;test.*&quot;\n              key-schema-file: &quot;Key.avsc&quot;\n              value-schema-file: &quot;Value.avsc&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',2),U=(0,s.Uk)("Examples can be found in "),_={href:"https://github.com/tchiotludo/akhq/tree/dev/src/main/java/org/akhq/utils",target:"_blank",rel:"noopener noreferrer"},x=(0,s.Uk)("tests"),y=(0,s.Uk)("."),w={},A=(0,n(3744).Z)(w,[["render",function(e,a){const n=(0,s.up)("RouterLink"),w=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,(0,s._)("p",null,[t,(0,s.Wm)(n,{to:"/docs/configuration/brokers.html"},{default:(0,s.w5)((()=>[o])),_:1}),i]),(0,s._)("p",null,[l,(0,s._)("a",c,[u,(0,s.Wm)(w)]),p,m,d,h,b,f,k,g,v]),q,(0,s._)("p",null,[U,(0,s._)("a",_,[x,(0,s.Wm)(w)]),y])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[n,s]of a)e[n]=s;return e}}}]);