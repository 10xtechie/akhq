"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[816],{4204:(a,s,n)=>{n.r(s),n.d(s,{data:()=>e});const e={key:"v-7a378e84",path:"/docs/configuration/authentifications/aws-iam-auth.html",title:"AWS MSK IAM Auth",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"References",slug:"references",children:[]}],filePathRelative:"docs/configuration/authentifications/aws-iam-auth.md",git:{updatedTime:1643231383e3,contributors:[{name:"Christof Lüthi",email:"christofluethi@users.noreply.github.com",commits:1}]}}},7345:(a,s,n)=>{n.r(s),n.d(s,{default:()=>l});const e=(0,n(6252).uE)('<h1 id="aws-msk-iam-auth" tabindex="-1"><a class="header-anchor" href="#aws-msk-iam-auth" aria-hidden="true">#</a> AWS MSK IAM Auth</h1><ul><li>The libraries required for IAM authentication have already been loaded.</li></ul><p>Configure aws-msk-iam-auth connection in AKHQ</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">connections</span><span class="token punctuation">:</span>\n    <span class="token key atrule">docker-kafka-server</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">bootstrap.servers</span><span class="token punctuation">:</span> msk<span class="token punctuation">-</span>broker<span class="token punctuation">:</span><span class="token number">9098</span>\n        <span class="token key atrule">security.protocol</span><span class="token punctuation">:</span> SASL_SSL\n        <span class="token key atrule">sasl.mechanism</span><span class="token punctuation">:</span> AWS_MSK_IAM\n        <span class="token key atrule">sasl.jaas.config</span><span class="token punctuation">:</span> software.amazon.msk.auth.iam.IAMLoginModule required awsDebugCreds=true;\n        <span class="token key atrule">sasl.client.callback.handler.class</span><span class="token punctuation">:</span> software.amazon.msk.auth.iam.IAMClientCallbackHandler\n        <span class="token key atrule">ssl.truststore.location</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>JAVA_HOME<span class="token punctuation">}</span>/lib/security/cacerts\n        <span class="token key atrule">ssl.truststore.password</span><span class="token punctuation">:</span> changeit\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><p>https://docs.aws.amazon.com/msk/latest/developerguide/iam-access-control.html https://github.com/aws/aws-msk-iam-auth/blob/main/README.md</p>',6),t={},l=(0,n(3744).Z)(t,[["render",function(a,s){return e}]])},3744:(a,s)=>{s.Z=(a,s)=>{for(const[n,e]of s)a[n]=e;return a}}}]);