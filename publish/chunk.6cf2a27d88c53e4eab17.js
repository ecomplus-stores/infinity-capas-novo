(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{256:function(t,a,e){"use strict";e.r(a);e(4),e(101);var s=e(22),i=e(31),l={name:"APagination",props:{totalItems:{type:Number,required:!0},page:{type:Number,default:1},pageSize:{type:Number,default:24}},computed:{i19next:()=>Object(i.a)(s.uc),i19previous:()=>Object(i.a)(s.ad),totalPages(){return Math.ceil(this.totalItems/this.pageSize)},pageNums(){const t=[];if(this.totalPages>0){let a;for(let e=-2;e<=2;e++)if(a=this.page+e,a>=1){if(!(a<=this.totalPages))break;t.push(a)}3===t[0]?t.unshift(1,2):2===t[0]&&t.unshift(1),a===this.totalPages-2?t.push(a+1,a+2):a===this.totalPages-1&&t.push(a+1)}return t},lastPageNum(){return this.pageNums[this.pageNums.length-1]}},methods:{go(t){t>=1&&t<=this.totalPages&&this.$emit("update:page",t)}}},n=e(40),r=Object(n.a)(l,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"d-flex"},[e("ul",{staticClass:"pagination mr-2"},[e("li",{staticClass:"page-item",class:t.page<=1?"disabled":null},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-disabled":t.page<=1||null},on:{click:function(a){return a.preventDefault(),t.go(t.page-1)}}},[t._v(" « "+t._s(t.i19previous)+" ")])]),e("li",{staticClass:"page-item",class:t.page>=t.totalPages?"disabled":null},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-disabled":t.page>=t.totalPages||null},on:{click:function(a){return a.preventDefault(),t.go(t.page+1)}}},[t._v(" "+t._s(t.i19next)+" » ")])])]),e("ul",{staticClass:"pagination d-none d-lg-flex"},[t.pageNums[0]>1?[e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.go(1)}}},[t._v(" 1 ")])]),t._m(0)]:t._e(),t._l(t.pageNums,(function(a){return e("li",{key:"p"+a,staticClass:"page-item",class:t.page===a?"active":null},[t.page!==a?e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.go(a)}}},[t._v(" "+t._s(a)+" ")]):e("span",{staticClass:"page-link",attrs:{"aria-current":"page"}},[t._v(" "+t._s(a)+" ")])])})),t.lastPageNum<t.totalPages?[t._m(1),e("li",{staticClass:"page-item"},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.go(t.totalPages)}}},[t._v(" "+t._s(t.totalPages)+" ")])])]:t._e()],2)])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"page-item disabled"},[e("span",{staticClass:"page-link"},[t._v(" ... ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"page-item disabled"},[e("span",{staticClass:"page-link"},[t._v(" ... ")])])}],!1,null,null,null);a.default=r.exports}}]);