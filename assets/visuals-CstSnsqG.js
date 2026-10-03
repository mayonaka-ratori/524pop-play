import{a as e,i as t,n,o as r,r as i,t as a}from"./art-7ibs92xh.js";var o=i,s=`M12 44 C16 32 34 29 50 30 C69 29 86 33 90 45 C95 58 88 71 76 75 C61 79 38 80 24 76 C11 73 7 56 12 44 Z`,c=0;function l(t,r){if(t.dataset.pose===r)return;let i=t.querySelector(`[data-body-shape]`),a=t.querySelector(`[data-body-clip] path`);if(!i||!a)return;let o=n(r,t.dataset.waru===`true`);i.setAttribute(`d`,o),a.setAttribute(`d`,o),t.querySelector(`[data-costume-shape]`)?.setAttribute(`d`,e(r)),t.dataset.pose=r}function u(i,l={}){let u=typeof l==`boolean`?{assist:l}:l,d=`sling-sprite-${++c}`,f=o[i],p=u.pose??`idle`,m=n(p,!!u.waru),h=u.type===`pierce`?`<g data-type="pierce" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" opacity=".85"><path d="M4 44 L12 50 L4 56 M0 38 L12 50 L0 62"/></g>`:u.type===`bounce`?`<g data-type="bounce" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" opacity=".85"><path d="M4 40 Q-2 50 4 60 M9 43 Q5 50 9 57"/></g>`:``,g=u.waru?`
    <g data-costume="waru">
      <circle cx="32.4" cy="20" r="7.5" fill="url(#${d}-hood)"/>
      <circle cx="61.2" cy="19" r="7.7" fill="url(#${d}-hood)"/>
      <ellipse cx="8" cy="55" rx="6.5" ry="11" fill="#38455F"/>
      <ellipse cx="93" cy="53" rx="5.5" ry="10" fill="#38455F"/>
      <path data-costume-shape="true" d="${e(p)}" fill="url(#${d}-hood)"/>
      <path d="M20 37 C35 26 61 25 78 34" fill="none" stroke="#A0ABBC" stroke-width="3.2" stroke-linecap="round" opacity=".2"/>
      <path d="${s}" fill="#222B40"/>
      <path d="${s}" fill="${f}" transform="translate(4 3) scale(.92)"/>
      <path d="M23 77 Q50 90 79 76" fill="none" stroke="#111A2E" stroke-width="3" opacity=".27"/>
    </g>`:``;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r}" data-sprite="524" data-color="${i}" data-pose="${p}" data-waru="${!!u.waru}" data-boss="${!!u.boss}" data-assist="${!!u.assist}" aria-hidden="true" focusable="false" style="color:${f}">
    <defs>
      <linearGradient id="${d}-body" x1=".25" y1="0" x2=".75" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="${f}"/><stop offset=".6" stop-color="${f}"/><stop offset="1" stop-color="${f}"/></linearGradient>
      <linearGradient id="${d}-hood" x1="0" y1="0" x2=".3" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="#5A6782"/><stop offset=".45" stop-color="#414E6A"/><stop offset="1" stop-color="#27344E"/></linearGradient>
      <clipPath id="${d}-clip" data-body-clip="true"><path d="${m}"/></clipPath>
    </defs>
    <ellipse data-shadow="true" cx="50" cy="91" rx="37" ry="6" fill="#769DB0" opacity=".17"/>
    ${h}
    <g data-body="true">
      <path data-body-shape="true" d="${m}" fill="url(#${d}-body)"/>
      <g clip-path="url(#${d}-clip)">
        <path d="M6 63 C16 81 37 85 69 79 C89 75 98 62 100 52 L105 105 H0 Z" fill="#324E68" opacity=".055"/>
        <path d="M24 28 C26 20 29 16 32 16 M56 22 C59 14 62 12 64 15 M75 29 C84 33 88 41 90 49" fill="none" stroke="#FFFDF4" stroke-width="3" stroke-linecap="round" opacity=".16"/>
      </g>
      ${g}
    </g>
    ${t}
    ${u.assist?a(i):``}
  </svg>`}export{l as n,u as r,o as t};