var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,l=!1;function a(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function u(t,e){l?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const c=a(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[c]+1;const i=c+1;n[i]=t,r=Math.max(i,r)}const c=[],i=[];let l=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(c.push(e[t-1]);l>=t;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);c.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<c.length&&i[e].claim_order>=c[n].claim_order;)n++;const o=n<c.length?c[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function s(t){t.parentNode.removeChild(t)}function d(t){i=t}const f=[],h=[],p=[],m=[],g=Promise.resolve();let _=!1;function $(t){p.push(t)}let y=!1;const b=new Set;function x(){if(!y){y=!0;do{for(let t=0;t<f.length;t+=1){const e=f[t];d(e),v(e.$$)}for(d(null),f.length=0;h.length;)h.pop()();for(let t=0;t<p.length;t+=1){const e=p[t];b.has(e)||(b.add(e),e())}p.length=0}while(f.length);for(;m.length;)m.pop()();_=!1,y=!1,b.clear()}}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}const k=new Set;function j(t,e){-1===t.$$.dirty[0]&&(f.push(t),_||(_=!0,g.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(c,a,u,f,h,p,m=[-1]){const g=i;d(c);const _=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:a.context||[]),callbacks:n(),dirty:m,skip_bound:!1};let y=!1;if(_.ctx=u?u(c,a.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return _.ctx&&h(_.ctx[t],_.ctx[t]=o)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](o),y&&j(c,t)),e})):[],_.update(),y=!0,o(_.before_update),_.fragment=!!f&&f(_.ctx),a.target){if(a.hydrate){l=!0;const t=function(t){return Array.from(t.childNodes)}(a.target);_.fragment&&_.fragment.l(t),t.forEach(s)}else _.fragment&&_.fragment.c();a.intro&&((b=c.$$.fragment)&&b.i&&(k.delete(b),b.i(v))),function(t,n,c,i){const{fragment:l,on_mount:a,on_destroy:u,after_update:s}=t.$$;l&&l.m(n,c),i||$((()=>{const n=a.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),s.forEach($)}(c,a.target,a.anchor,a.customElement),l=!1,x()}var b,v;d(g)}function w(e){let n;return{c(){var t,e,o,r;t="main",n=document.createElement(t),e=n,o="class",null==(r="svelte-2ijjjk")?e.removeAttribute(o):e.getAttribute(o)!==r&&e.setAttribute(o,r)},m(t,e){!function(t,e,n){l&&!n?u(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&s(n)}}}function A(t){return[]}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}("main.svelte-2ijjjk{height:100%;width:100%}");return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),E(this,t,A,w,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
