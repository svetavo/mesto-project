(()=>{"use strict";var e=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".popup-edit"),r=(document.querySelector(".popup-delete"),document.querySelector(".profile__add-button")),o=document.querySelector(".popup-add-place"),c=document.querySelector(".popup-avatar"),a=(document.querySelector(".form__button_place"),document.querySelector(".places__items")),u=document.querySelectorAll(".popup"),i=document.forms.new_place,l=document.querySelector(".profile__name"),s=document.querySelector(".profile__description"),d=document.querySelector("#user_name"),f=document.querySelector("#user_description"),m=document.querySelector(".profile__pic"),p=document.querySelector(".profile__avatar-button"),_=(document.querySelector(".places"),document.querySelectorAll(".form__button"),document.forms.profile_data),v=(_.elements.name,_.elements.description,document.forms.avatar),y=v.elements.avatarUrl,h=document.querySelector("#place-item").content,b=document.querySelector("#placeImg"),S=document.querySelector("#placeName"),q=document.querySelector(".popup__image"),g=document.querySelector(".popup__image-content"),L=document.querySelector(".popup__image-title");function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить";t.textContent=e?"Сохранение...":n}function E(e){e.classList.add("form__button_disabled"),e.disabled=!0}var k={baseUrl:"https://nomoreparties.co/v1/plus-cohort-14",headers:{authorization:"ab97a0b5-b85e-4d41-b8f5-c80c0719b979","Content-Type":"application/json"}};function A(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}function x(e){e.classList.add("popup_opened"),document.addEventListener("keydown",w)}function U(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",w)}function w(e){"Escape"===e.key&&U(document.querySelector(".popup_opened"))}function T(e,t,n,r,o,c,a,u){var i=h.querySelector(".place").cloneNode(!0),l=i.querySelector(".place__img"),s=i.querySelector(".place__like-counter"),d=i.querySelector(".place__like-button");return l.src=t,i.querySelector(".place__name").textContent=e,l.alt=e,s.textContent=n.length,d.addEventListener("click",j(i,r,s)),n.some((function(e){return e._id===c}))&&d.classList.add("place__like-button_active"),o._id!==c&&i.querySelector(".place__delete-button").classList.add("place__delete-button_disabled"),i.querySelector(".place__delete-button").addEventListener("click",(function(e){var t;(t=r,fetch("".concat(k.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:k.headers}).then(A)).then((function(){e.target.closest(".place").remove()})).catch((function(e){console.log(e)}))})),l.addEventListener("click",(function(){x(q),g.src=t,L.textContent=e,g.alt=e})),i}var j=function(e,t,n){return function(r){var o=e.querySelector(".place__like-button");o.classList.contains("place__like-button_active")?function(e,t,n){var r;(r=t,fetch("".concat(k.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:k.headers}).then(A)).then((function(t){n.textContent=t.likes.length,e.classList.remove("place__like-button_active")})).catch((function(e){return console.log(e)}))}(o,t,n):function(e,t,n){var r;(r=t,fetch("".concat(k.baseUrl,"/cards/likes/").concat(r),{method:"PUT",headers:k.headers}).then(A)).then((function(t){n.textContent=t.likes.length,e.classList.add("place__like-button_active")})).catch((function(e){return console.log(e)}))}(o,t,n)}};function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O,P="";Promise.all([fetch("".concat(k.baseUrl,"/users/me"),{headers:k.headers}).then(A),fetch("".concat(k.baseUrl,"/cards"),{headers:k.headers}).then(A)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];l.textContent=o.name,s.textContent=o.about,m.src=o.avatar,P=o._id,function(e){e.forEach((function(e){a.append(T(e.name,e.link,e.likes,e._id,e.owner,P))}))}(c)})).catch((function(e){return console.log(e)})),O={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},Array.from(document.querySelectorAll(O.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(t,n){var r=Array.from(t.querySelectorAll(n.inputSelector)),o=t.querySelector(n.submitButtonSelector);e(r,o,n),r.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(t,c,n),e(r,o,n)}))}))}(t,O)})),u.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_opened")&&U(e),t.target.classList.contains("popup__close-button")&&U(e)}))})),t.addEventListener("click",(function(){d.value=l.textContent,f.value=s.textContent,x(n)})),_.addEventListener("submit",(function(e){var t,r;e.preventDefault(),C(!0,e.submitter),(t=d.value,r=f.value,fetch("".concat(k.baseUrl,"/users/me"),{method:"PATCH",headers:k.headers,body:JSON.stringify({name:t,about:r})}).then(A)).then((function(){l.textContent=d.value,s.textContent=f.value,U(n)})).catch((function(e){console.log(e)})).finally((function(){C(!1,e.submitter)}))})),p.addEventListener("click",(function(){x(c)})),v.addEventListener("submit",(function(e){e.preventDefault(),C(!0,e.submitter),function(e){return fetch("".concat(k.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:k.headers,body:JSON.stringify({avatar:e})}).then(A)}(y.value).then((function(){m.src=y.value,E(e.submitter),U(c),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){C(!1,e.submitter)}))})),r.addEventListener("click",(function(){x(o)})),i.addEventListener("submit",(function(e){var t,n;e.preventDefault(),C(!0,e.submitter),(t=S.value,n=b.value,fetch("".concat(k.baseUrl,"/cards"),{method:"POST",headers:k.headers,body:JSON.stringify({name:t,link:n})}).then(A)).then((function(t){var n=T(t.name,t.link,t.likes,t._id,t.owner,P);a.prepend(n),E(e.submitter),U(o),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){C(!1,e.submitter)}))}))})();