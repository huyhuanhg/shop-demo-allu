/* USF file - DO NOT MODIFY THIS FILE. THIS FILE IS REGULARLY CHANGED BY USF APP AND **ANY DIRECT CHANGES WILL BE LOST**. Use our in-app customization if you need to update CSS and JS code. Auto modified at: 2/8/2022 1:01:51 AM*/
!function(){function e(e){return"[object Function]"===Object.prototype.toString.call(e)}function t(e){return"string"==typeof e||e instanceof String}function r(r){var n;r={config:r}.config;var s=new XMLHttpRequest,i=r.type||"GET",a="GET"===i?function(r){var n,s,i=r.data;if(!i)return r.url;if(e(i)&&(i=i()),!t(i)){var a=[];for(var o in i)a.push(o+"="+encodeURIComponent(i[o]));i=a.join("&")}return n=r.url,(s=i)?n.includes("?")?n+"&"+s:n+"?"+s:n}(r):r.url;s.open(i,a,!0),s.timeout=r.timeout,s.setRequestHeader("Content-Type",r.contentType||"application/x-www-form-urlencoded");var o=r.error,u=!1,l=!1,c={abort:function(){u=!0,l=!0,s.abort(),r.abort&&r.abort.apply(r,[s])}};s.onreadystatechange=function(){4==s.readyState&&(s.status>=200&&s.status<400?r.success&&r.success.apply(r,[function(e,t){switch(e.dataType){case"json":return JSON.parse(t.responseText);default:return t.responseText}}(r,s),{xhr:s,redirected:function(e,t){for(var r=0,n=t.response;r<n.length;){var s=n[r++];if("\t"!==s&&" "!==s&&"\r"!==s&&"\n"!==s)return"<"===s&&-1!==n.indexOf("<html")}}(0,s),config:r}]):o&&!u&&(u=!0,o.apply(r,[s,s.status,null,{xhr:s,config:r}])))},s.onerror=function(e){o&&!u&&(u=!0,o.apply(r,[s,s.status,e]))},s.ontimeout=function(e){o&&!u&&(u=!0,o.apply(r,[s,"timeout",e]))},s.onabort=function(e){l||(u=!0,l=!0,r.abort&&r.abort.apply(r,[s]))};var f=r.data;e(f)&&(f=f());try{s.send(f)}catch(n){o&&!u&&(u=!0,o.apply(r,[s,s.status,n]))}return c}var n,s=function(){this.list={}};s.prototype={add(e,t){if(Array.isArray(e))for(var r=e.length,n=0;n<r;n++)this.add(e[n],t);else{var s=this.list[e];s||(this.list[e]=s=[]),s.push(t)}},remove(e,t){t||delete this.list[e];var r=this.list[e];r.splice(r.indexOf(t),1)},raise(e,t,r){if(window.usf_container||"rerender"!==e){var n=this.list[e];if(n)for(var s=0;s<n.length;s++)n[s](t,r);else;}}},window.usf||(window.usf={}),usf.components={},usf.collectionsByUrlName={},usf.EventHub=s,usf.event=n=new s;var i=usf.settings={"online":1,"version":"1.0.2.4112","storeId":"huyhuan.myshopify.com","siteId":"c04bc6a5-ea4a-4ff5-9708-621574d86883","resUrl":"//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/","analyticsApiUrl":"https://analytics-usf.hotyon.com/set","searchSvcUrl":"https://svc-2-usf.hotyon.com/","enabledPlugins":['preview-usf'],"currency":"JPY","priceLongFormat":"¥{0} JPY","priceFormat":"¥{0}","showGotoTop":1,"mobileBreakpoint":767,"decimals":2,"decimalDisplay":".","thousandSeparator":",","plugins":{},"revision":33222578,"searchSvcUrl":"https://svc-2-usf.hotyon.com/","filters":{},"instantSearch":{"online":1,"searchBoxSelector":"input[name=q]","numOfSuggestions":6,"numOfProductMatches":4,"numOfCollections":3,"numOfPages":3},"search":{"online":1,"sortFields":["r","title","-title","date","-date","price","-price","-discount"],"searchResultsUrl":"/pages/search-results","more":"more","itemsPerPage":28,"imageSizeType":"fixed","imageSize":"600,350","showSearchInputOnSearchPage":1,"showAltImage":1,"showVendor":1,"showSale":1,"showSoldOut":1,"canChangeUrl":1},"collections":{"online":1,"collectionsPageUrl":"/pages/collections"},"filterNavigation":{"showFilterArea":1,"showSingle":1,"showProductCount":1},"translation_en":{"viewAllResultsFor":"view all results for <span class=\u0022usf-highlight\u0022>{0}</span>","viewAllResults":"view all results","noMatchesFoundFor":"No matches found for \u0022<b>{0}</b>\u0022. Please try again with a different term.","productSearchResultWithTermSummary":"<b>{0}</b> results for \u0027<b>{1}</b>\u0027","productSearchResultSummary":"<b>{0}</b> products","productSearchNoResults":"<h2>No matching for \u0027<b>{0}</b>\u0027.</h2><p>But don\u0027t give up – check the filters, spelling or try less specific search terms.</p>","productSearchNoResultsEmptyTerm":"<h2>No results found.</h2><p>But don\u0027t give up – check the filters or try less specific terms.</p>","clearAll":"Clear all","clear":"Clear","clearAllFilters":"Clear all filters","clearFiltersBy":"Clear filters by {0}","filterBy":"Filter by {0}","sort":"Sort","sortBy_r":"Relevance","sortBy_title":"Title: A-Z","sortBy_-title":"Title: Z-A","sortBy_date":"Date: Old to New","sortBy_-date":"Date: New to Old","sortBy_price":"Price: Low to High","sortBy_-price":"Price: High to Low","sortBy_-discount":"Discount: High to Low","sortBy_bestselling":"Best selling","sortBy_-available":"Inventory: High to Low","filters":"Filters","filterOptions":"Filter options","clearFilterOptions":"Clear all filter options","youHaveViewed":"You\u0027ve viewed {0} of {1} products","loadMore":"Load more","loadPrev":"Load previous","productMatches":"Product matches","trending":"Trending","didYouMean":"Sorry, nothing found for \u0027<b>{0}</b>\u0027.<br>Did you mean \u0027<b>{1}</b>\u0027?","searchSuggestions":"Search suggestions","quantity":"Quantity","selectedVariantNotAvailable":"The selected variant is not available.","addToCart":"Add to cart","seeFullDetails":"See full details","chooseOptions":"Choose options","quickView":"Quick view","sale":"Sale","save":"Save","soldOut":"Sold out","viewItems":"View items","more":"More","all":"All","prevPage":"Previous page","gotoPage":"Go to page {0}","nextPage":"Next page","from":"From","collections":"Collections","pages":"Pages"}};i.currencyRate=1;var a,o,u=i.instantSearch.online,l=i.search.online,c=function(e){if(this.list=[],e)for(var t=0;t<e.length;t++)this.push(e[t]);var r=this,n=!1;function s(){if(!n){var e=i.analyticsApiUrl;if(void 0!==navigator.sendBeacon){var t=navigator.sendBeacon(e,JSON.stringify({events:r.list,time:new Date}));n=t}else{var s="events="+encodeURIComponent(JSON.stringify(r.list))+"&time="+(new Date).toISOString(),a=new XMLHttpRequest;a.open("POST",e,!1),a.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),a.send(s)}}}window.addEventListener(usf._ios?"pagehide":"beforeunload",s),window.addEventListener("unload",s)};c.prototype={push(e){"function"==typeof e&&(e=e.apply(this)),e.length&&this[e[0]].apply(this,e.slice(1,e.length)),this.list.push(e)},track(e,t){t.event=e,t.siteId=i.siteId,t.time=new Date,this.list.push(t)}},window._usfaq=new c(window._usfaq);var f,d,h,p,g,m,y,_,w={List:0,Box:1,Swatch:2};function b(e){if(e&&!d){var t=document.createElement("div");t.innerHTML=e,usf_container.parentNode.insertBefore(t,usf_container),d=1,P.redirectToOriginalView()}}function S(e,t,r){var s;function u(i){if(r)if(f){var o=f;f=i,o()}else f=i;else!function(i){a=null,e.loader=!1;var o=i.data.redirect;o&&e.onRedirect(o);t&&e.result&&c?1===t?e.result.items=e.result.items.concat(i.data.items):e.result.items.unshift(...i.data.items):(e.result={},Object.assign(e.result,i.data));r||n.raise("sr_dataReceived",e,i.data,e.result.items);var u=i.data.facets;if(e.hasFacets=u&&u.length,e.hasFacets){for(var l=!1,f=0;f<u.length;f++){var d=u[f];(d.labels.length||void 0!==d.min||d.navigationCollectionsKeepMain&&d.navigationCollectionsMenu.length)&&(l=!0),d.displayMode=w[d.display]}l||(e.hasFacets=!1)}2===t||(e.itemsLoaded+=i.data.items.length);var p=i.data.extra;if(p){var v=p.collections;if(v)for(var g=usf.collectionsByUrlName={},f=0;f<v.length;f++){var m=v[f];g[m.urlName]=m}b(p.message)}document.body.classList[e.noFacets?"add":"remove"]("usf-has-no-facets"),r||e.$nextTick(()=>{n.raise("sr_updated",e,i.data),s&&window.addEventListener("load",()=>C(s)),!h&&usf._ios&&(h=1,window.addEventListener("pageshow",function(){var e=sessionStorage.getItem("usfVP");e&&C(e=JSON.parse(e))}))})}(i=JSON.parse(i))}var l=i.search.more,c="more"===l||"infinite"===l;if((s=sessionStorage.getItem("usfVP"))&&(s=JSON.parse(s),!p&&c&&s.take!==N.take))return N.take=s.take,void(p=1);if(e.loader||(e._refreshTime=(new Date).getTime()),c&&!t){var d=0,v=N.take,g=i.search.itemsPerPage;v>g&&(d=Math.floor((v-1)/g)*g,e.itemsOffset=d),e.itemsLoaded=d}if(r||(e.loader=1===t?"more":2!==t||"prev",n.raise("sr_updating",e,null)),r)f=null;else if(void 0!==f){function m(){u(f),f=void 0}return void(null===f?f=m:m())}var y={q:E(e.term),apiKey:i.siteId},_=P.locale;_&&(y.locale=_),window._usfGetProductDescription||(y.getProductDescription=0);var k=P.customerTags;k&&k.length&&(y.customerTags=k.join(","));var T,O=e.facetFilters,U={query:y,filters:O};P.onSearch(U),(O=U.filters)&&(y.facetFilters=JSON.stringify(O)),c?(T=2===t?e.itemsOffset:e.itemsLoaded,v=e.itemsPerPage):(T=(e.page-1)*e.itemsPerPage,v=e.itemsPerPage),y.skip=T,y.take=v,e.sortBy&&"r"!==e.sortBy&&(y.sort=e.sortBy),e.itemsLoaded||o===e.term||(o=e.term,e.term&&_usfaq.track("search",{term:e.term,isEmpty:e.result&&!e.result.items.length})),a&&a.abort(),a=usf.utils.send({url:i.searchSvcUrl+"search",data:y,startTime:e._refreshTime,success:u,error:function(r,n,s){403!==n?setTimeout(()=>{f=void 0;var r=usf.search;r._refreshTime=e._refreshTime,S(r,t)},3e3):b(JSON.parse(r.response).meta.description)}})}function C(e){sessionStorage.removeItem("usfVP"),setTimeout(function(){var t=usf_container.querySelector('.usf-results [data-usf-pid="'+e.id+'"]');if(t&&!function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(t)){var r=t.getBoundingClientRect();window.scrollBy(0,r.top-e.y)}},200)}function E(e){for(var t=0;t<e.length&&" "===e[t];)t++;return t>0&&(e=e.substr(t)),e.toLocaleLowerCase().replace(/[*\?]/g,"")}usf._refineTerm=E;var k=location.pathname.toLowerCase();usf.platform={name:"shopify",termVar:"q",isCollectionPage:-1!==k.indexOf("/collections/")&&-1===k.indexOf("/products/"),get collection(){if(y)return y;var e=P.collectionWithParams;if(e){var t=e.lastIndexOf("/");-1!==t&&(e=e.substring(0,t)),y=e}return e},set collection(e){y=e},get locale(){if(!g){var e=k,t=e.indexOf("/collections/");-1===t&&(t=e.endsWith("/search")?e.length-7:e.indexOf("/pages/")),g=t>0?e.substring(1,t).replace(/[\/\\]/g,"_"):Shopify.locale.toLowerCase()}return g},get baseUrl(){if(void 0===m){var e=k,t="/"+P.locale;e.startsWith(t)||(t=""),m=t}return m},get collectionWithParams(){var e=k,t=P.baseUrl;if(e.startsWith(t+"/collections/"))return decodeURIComponent(e.substring(t.length+13))},get tagUrlName(){if(void 0===_){var e=P.collectionWithParams;if(e){var t=e.lastIndexOf("/");_=-1!==t?e.substring(t+1):null}}return _},get customerTags(){return _usfCustomerTags},onSearch(e){if("vendors"===P.collection){var t=Q.get("q");t&&(e.query.q="",e.filters||(e.filters={}),e.filters._usf_vendor=["vendor",[t]])}var r=_usfCollectionId||"",n=P.tagUrlName;n&&(r+="/"+n),(r||P.isCollectionPage)&&(e.query.collection=r)},init(){_usfTheme.applied&&(i.search.searchResultsUrl="/search")},redirectToOriginalView(){var e=location.href;-1===e.indexOf("no-usf")&&(location=e+(-1===e.indexOf("?")?"?":"&")+"view=no-usf")}};var P=usf.platform;const T="_usf_";var O=function(e){this.canChangeUrl=e,this.changed=[];var t=this;function r(){t.changed.forEach(e=>e())}history.pushState=(e=>(function(){var t=e.apply(this,arguments);return r(),t}))(history.pushState),history.replaceState=(e=>(function(){var t=e.apply(this,arguments);return r(),t}))(history.replaceState),window.addEventListener("popstate",()=>{r()})};function U(e){return e=e.replace(/\+/g," "),decodeURIComponent(e)}var L=function(e){for(var t=e?e.substring(1).split("&"):[],r=[],n=0;n<t.length;n++){var s=t[n].split("="),i=s[1];if(void 0!==i){var a,o=i.split(T);a=o.length>1?o.map(e=>U(e)):U(i),r.push([U(s[0]),a])}}this.entries=r};L.prototype={get(e,t){var r=this.entries.find(t=>t[0]===e);return r?r[1]:t},append(e,t){this.entries.find(r=>r[0]===e&&r[1]===t)||this.entries.push([e,t])},set(e,t){var r=this.entries.find(t=>t[0]===e);r?r[1]=t:this.entries.push([e,t])},toString(){var e,t=this.entries.map(t=>encodeURIComponent(t[0])+"="+(e=t[1],Array.isArray(e)?e.map(e=>encodeURIComponent(e)).join(T):encodeURIComponent(e))).join("&");return t?"?"+t:""},delete(e,t){for(var r=this.entries.length-1;r>=0;r--){var n=this.entries[r];x(e,decodeURIComponent(n[0]))&&(t&&decodeURIComponent(n[1])!==t||this.entries.splice(r,1))}}},usf.URLSearchParams=L;var R=location.search;function I(e,t,r,n){if(!1!==r){if(n.canChangeUrl){var s=U(location.search)!==U(e);return r||s?(e=location.pathname+e,t||!s?history.replaceState({},"",e):history.pushState({},"",e),!0):void 0}e!==R&&(R=e,n.changed.forEach(e=>e()))}}function x(e,r){return t(e)?e===r:e.test(r)}function A(e,t,r){Object.keys(t).forEach(n=>{(function(t,r){for(var n=0;n<e.entries;n++){var s=e.entries[n];if(s[0]===t&&s[1]===r)return!0}})(n,t[n])||e[r.append?"append":"set"](n,t[n])})}O.prototype={get(e,t){return new L(this.getSearch()).get(e,t)},entries(){return new L(this.getSearch()).entries},snapshot(){this._snapshot=this.entries()},getSearch(){return this.canChangeUrl?location.search:R},getChanges(){var e=this.entries(),t=this._snapshot;if(!t)return e;var r=[];return e.forEach(e=>{t.find(t=>t[0]===e[0]&&t[1]===e[1])||r.push(e)}),t.forEach(t=>{e.find(e=>e[0]===t[0])||r.push([t[0]])}),r},update(e,t,r){var n=new L(this.getSearch());if(r||(r={}),t)if(t.length)t.forEach(e=>n.delete(e));else for(var s=n.entries.length-1;s>=0;s--){var i=n.entries[s],a=i[0];if(t.hasOwnProperty(a)){var o=t[a];i[1]===o&&n.delete(a,o)}}return e&&A(n,e,r),I(n.toString(),r.replace,r.force,this)},add(e,t){var r=new L(this.getSearch());return t||(t={}),A(r,e,t),I(r.toString(),t.replace,t.force,this)},remove(e){var r,n=new L(this.getSearch()),s=arguments.length;if(s>=2&&"object"==typeof(r=arguments[s-1])&&r&&s--,2===s&&(u=arguments[1]))for(var i=0;i<n.entries.length;i++){if((a=n.entries[i])[0]===e&&a[1]===u){n.delete(e,u);break}}else if(t(e))for(i=0;i<n.entries.length;i++){if((a=n.entries[i])[0]===e){n.delete(e);break}}else if(e.length)e.forEach(e=>{e&&(Array.isArray(e)?n.delete(e[0],e[1]):n.delete(e))});else for(i=n.entries.length-1;i>=0;i--){var a,o=(a=n.entries[i])[0];if(e.hasOwnProperty(o)){var u=e[o];a[1]===u&&n.delete(o,u)}}return r||(r={}),I(n.toString(),r.replace,r.force,this)}},usf.Query=O;function F(){}F.prototype={get term(){return Q.get(P.termVar,"")},set term(e){var t={};t[P.termVar]=e,Q.update(t,[/uff_.*/,/usf_.*/,"page"],{force:!0})},getTermQuery:e=>P.termVar+"="+encodeURIComponent(e),get page(){return parseInt(Q.get("page"))||1},set page(e){if(e<=1)Q.remove("page");else{var t={};t.page=e,Q.add(t)}},get take(){return parseInt(Q.get("usf_take"))||i.search.itemsPerPage},set take(e){e?(v={},v.usf_take=e,Q.update(v)):Q.remove("usf_take")},get itemsPerPage(){return function(e,t){var r=parseInt(e)||t;r>t&&(r=t);return r}(Q.get("usf_ipp"),i.search.itemsPerPage)},getPageUrl(e){if(this.p===this.page)return"javascript:void(0)";var t=new URL(window.location.href),r=t.searchParams;return!e||e<=1?r.delete("page"):r.set("page",e),t.toString()},get facetFilters(){var e,t={};return Q.entries().forEach(r=>{var n=r[0];if(n.startsWith("uff_")){var s="uff_".length,i=n.indexOf("_",s),a=n.substring(s,i);a=parseInt(a,36);var o=n.substr(i+1),u=r[1];Array.isArray(u)||(u=[u]),t[a]=[o,u],e=!0}}),e?t:null},set facetFilters(e){if(Object.keys(e).length){var t,r={};for(var n in e){var s=e[n];r["uff_"+(t=n,parseInt(t).toString(36))+"_"+s[0]]=s[1]}Q.update(r,[/uff_.*/,"page"])}else this.removeAllFacetFilters()},get view(){return Q.get("usf_view","grid")},set view(e){if(e){var t={};t.usf_view=e,Q.add(t)}else Q.remove("usf_view")},isViewChanged:e=>1!==e.length||"usf_view"!==e[0][0],get sort(){var e=Q.get("usf_sort");if(e)return e;var t=i.search.sortFields;return t?t[0]:""},set sort(e){if(e){var t={};t.usf_sort=e,Q.add(t)}else Q.remove("usf_sort")},removeAllFacetFilters(){Q.remove([/uff_.*/,"page"])}};var N=new F;usf.queryRewriter=N;var q=function(e){if(this.plugins=[],e)for(var t=0;t<e.length;t++)this.push(e[t])};function B(e,t,r){var n,s,i;for(s=document.getElementsByTagName("link"),i=0;i<s.length;i++)if(s[i].href.endsWith(e))return!1;return(n=document.createElement("link")).setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),t&&(n.onload=t),r&&(n.onerror=r),document.head.appendChild(n),!0}function j(e,t,r,n){var s,i,a;for(i=document.getElementsByTagName("script"),a=0;a<i.length;a++){var o=i[a].src;if(o&&o.endsWith(e))return!1}return(s=document.createElement("script")).setAttribute("type","text/javascript"),s.setAttribute("src",e),s.async=!0,n&&Object.keys(n).forEach(function(e){s.setAttribute(e,n[e])}),t&&(s.onload=t),r&&(s.onerror=r),document.head.appendChild(s),!0}function M(e,t,r,n){for(var s=0,i=0,a=0;a<t.length;a++){var o,u=t[a];n?(0,o=j):o=B,u.startsWith("http")||u.startsWith("//")||(u=e+u),o(u,function(){++s===i&&r()})&&i++}i===s&&r()}function W(e,t){for(;e;){if(!e||e===document.body)return;if((e=e.parentNode)&&e.classList.contains(t))return e}}function H(e,t,r,n){if(!e)throw new Error("Element must be set.");if(e.length)for(var s=0;s<e.length;s++)H(e[s],t,r,n);else if(e._r_events||(e._r_events={}),"string"==typeof t)r&&(n||(n={}),function(e,t,r,n){var s,i=e._r_events[t];i||(e._r_events[t]=i=[]);s=function(t){return r.call(e,t)},e.addEventListener(t,s,n),i[i.length]={handler:r,browserHandler:s,options:n}}(e,t,r,n));else for(var i in t){H(e,i,t[i],r)}}function V(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}function D(e){z&&(z=[],delete z),n.raise("is_hide",e)}function J(e,t){Y(function(){!function(e,t){if(W(e,"usf-sr-inputbox")&&usf.platform.collection)return;(t||e.value)&&n.raise("is_show",e)}(e,t)})}q.prototype={push(e){this.plugins.push(e)},invoke(e,t){return function e(t,r,n,s){if(!(r>=t.length)){var i=t[r],a=i[n];if(a){var o=s.slice(0,s.length);return o.push(function(){if(r<t.length-1)return e(t,r+1,n,s)}),a.apply(i,o)}return e(t,r+1,n,s)}}(this.plugins,0,e,t)},has(e){for(var t=this.plugins,r=0;r<t.length;r++)if(t[r][e])return!0}},usf.plugins=new q(usf.plugins)/* Begin plugin code */
/* End plugin code */
usf.utils={on:H,off:function(e,t,r){if(e._r_events&&t){var n=null,s=e._r_events[t]||[];if(void 0!==r){for(var i=0,a=s.length;i<a;i++)if(s[i].handler===r){n=s[i].browserHandler;break}e.removeEventListener(t,n),s.splice(i,1)}else if("string"==typeof t){for(i=0,a=s.length;i<a;i++)n=s[i].browserHandler,e.removeEventListener(t,n);delete e._r_events[t]}else for(var o in t){for(r=t[o],i=0,a=(s=e._r_events[o]||[]).length;i<a;i++)if(s[i].handler===r){n=s[i].browserHandler;break}e.removeEventListener(o,n),s.splice(i,1)}}},closest:W,loadJsFile:j,loadFiles:M,ready:V,installSearchInput:$,hideInstantSearch:D,loadAndShowInstantSearch:J,stopEvent:(e,t)=>!!e&&(e.preventDefault&&e.preventDefault(),t||(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0),e.returnValue=!1,!1),send(e,t){var n=e.startTime||(new Date).getTime();if(!e._errorModified){var s=6e3,i=e.error;e.timeout=s,e._errorModified=1,e.error=function(r){var a;if((new Date).getTime()-n>=s)return e.url=(a=e.url).includes("fallback")?a:a.replace(/svc-(\d+)-/,"svc-$1-fallback-"),delete e.timeout,setTimeout(()=>usf.utils.send.apply(this,[e,t]),200),void(s=1500);i.apply(this,arguments)}}if(!t){var a=usf.plugins.invoke("send",[e]);if(void 0!==a)return a}return r(e)}},usf.fetch=S;window.performance&&(window.performance.navigation.type,window.performance.navigation.TYPE_BACK_FORWARD);usf.query=new O(i.search.canChangeUrl);var G,K,z,Q=usf.query;function X(e){if(!e.target._usf_no_popup){var t=e.target;t.value?J(t):D(t)}}function $(e,t){if(e&&(u||l)){var r=e.parentNode;if(!r.classList.contains("usf-sr-inputbox")){var n=e.cloneNode(!0);r.replaceChild(n,e),e=n}for(;"FORM"!==r.tagName;)if((r=r.parentNode)===document.body){r=null;break}if(G=P.baseUrl+i.search.searchResultsUrl,r&&l&&(r.action=G,r.onsubmit=function(t){var r=window.usf_container;return location.pathname.includes(G)||r&&W(e,"usf-sr-inputbox")?(N.term=e.value,r&&r.click(),D(e)):location=G+"?"+P.termVar+"="+encodeURIComponent(e.value),usf.utils.stopEvent(t)}),e._usf_no_popup=t,e.setAttribute("autocomplete","off"),u)H(e,{input:X,keydown:function(e){13===e.keyCode&&(usf.utils.stopEvent(e),r&&l?r.onsubmit():location=G+"?"+P.termVar+"="+encodeURIComponent(e.target.value))},click:t?null:function(e){if(usf.isMobile)return J(e.target,!0),usf.utils.stopEvent(e);J(e.target)}})}}function Y(e){if(2!==K)if(1!==K){var t;K=1;var r=[(t=_usfTheme.assetUrl.replace("usf-boot.js","{0}")).replace("{0}","usf.js")],s=[t.replace("{0}","usf.css")];n.raise("preinit"),e||S({term:N.term,itemsPerPage:N.itemsPerPage,page:N.page,facetFilters:N.facetFilters,sortBy:N.sort},0,!0),M(t,r,function(){K=2,z&&(z.forEach(e=>e()),delete z),G=P.baseUrl+i.search.searchResultsUrl,e&&e(),V(function(){n.raise("init");var e=document.body.classList;document.body.addEventListener("keyup",function(t){9==t.keyCode&&e.add("usf-wc")}),document.addEventListener("click",function(t){e.remove("usf-wc")})})},1),M(t,s,function(){},0)}else e&&(z||(z=[]),z.push(e));else e&&e()}if(i.online){/* Begin theme init code */
/* End theme init code */
P.init();var Z=location.pathname,ee=usf._canLoadContainer=(P.isCollectionPage?i.collections.online:-1!==Z.indexOf(i.search.searchResultsUrl)&&i.search.online)||window._usfHasContainer;ee&&Y(),V(function(){var e=document.body.classList;function t(){u&&i.instantSearch.searchBoxSelector.split(",").forEach(e=>{for(var t=document.body.querySelectorAll(e),r=0;r<t.length;r++)$(t[r])})}(usf.isMobile=document.body.clientWidth<i.mobileBreakpoint)&&e.add("usf-mobile"),i.darkMode&&e.add("usf-dark"),ee&&window.usf_container&&(e.add("usf-has-container"),P.isCollectionPage&&e.add("usf-collections-page"),e.add(i.filters.horz?"usf-horz-layout":"usf-vert-layout"))/* Begin theme ready code */

if (usf.isMobile && usf.settings.instantSearch.online) {
    var searchIcon = document.querySelector('.header__icon--search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function (e) {
            var target = document.querySelector('input[name="q"]') || document.createElement('input');
            usf.utils.loadAndShowInstantSearch(target, true);
            usf.utils.stopEvent(e);
        })
    }

    // still register to 'is_show' event to hide the drawer.
    usf.event.add('is_show', function () {
        // close the theme search box
        var btn = document.querySelector('.search-modal__close-button');
        if (btn)
            btn.click();
    });
}
/* End theme ready code */
usf.isMobile?window.addEventListener("load",t):t()})}}();