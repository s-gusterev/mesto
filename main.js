(()=>{"use strict";var e={764:(e,t,n)=>{e.exports=n.p+"677b6b9c9c4ce0fc2a99.jpg"},630:(e,t,n)=>{e.exports=n.p+"75952dfa5b7a8c172922.jpg"},898:(e,t,n)=>{e.exports=n.p+"a941da488a77a307a520.jpg"},661:(e,t,n)=>{e.exports=n.p+"c25b54911fc9c16a01eb.jpg"},246:(e,t,n)=>{e.exports=n.p+"2ea67b32ff2904557b85.jpg"},737:(e,t,n)=>{e.exports=n.p+"774e10de672560694d7c.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.p="",(()=>{n(630),n(661),n(898),n(246),n(737),n(764);var e=document.querySelector(".profile__btn-edit-profile"),t=document.querySelector(".profile__btn-add-place"),r=document.querySelector(".profile__btn-edit-avatar"),o=document.querySelector("#form-edit-profile"),i=document.querySelector("#form-add-card"),a=document.querySelector("#form-edit-avatar"),c=document.querySelector("#input-name"),s=document.querySelector("#input-about"),u=document.querySelector("#input-avatar"),l={formSelector:".popup__container_type_form",inputSelector:".popup__input",submitButtonSelector:".popup__btn",inactiveButtonClass:"popup__btn_disabled",inputErrorClass:"popup__input-error_active",errorClass:"popup__input_type_error"};function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.errorClass),n.textContent=t,n.classList.add(this._settings.inputErrorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.errorClass),t.classList.remove(this._settings.inputErrorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._settings.inactiveButtonClass),t.setAttribute("disabled","disabled")):(t.classList.remove(this._settings.inactiveButtonClass),t.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState(e._inputList,e._buttonElement)}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o,i){var a,c,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c=function(){s._cardBody.remove(),s._cardBody=null},(a="deleteCard")in this?Object.defineProperty(this,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[a]=c,this._cardTemplate=document.querySelector(n).content,this._name=t.name,this._link=t.link,this._likes=t.likes,this._userId=t.userId,this._ownerId=t.ownerId,this._id=t.id,this._handleCardClick=r,this._handleDelClick=o,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"_addCardLike",value:function(){this._cardLike.classList.add("card__like_active")}},{key:"_removeCardLike",value:function(){this._cardLike.classList.remove("card__like_active")}},{key:"setLikeCount",value:function(e){this._likes=e,this._cardLikeCount.textContent=this._likes.length,this.isLiked()?this._addCardLike():this._removeCardLike()}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._cardDel.addEventListener("click",(function(){return e._handleDelClick(e._id)})),this._cardImg.addEventListener("click",this._handleCardClick)}},{key:"getCard",value:function(){return this._cardBody=this._cardTemplate.querySelector(".card").cloneNode(!0),this._cardTitle=this._cardBody.querySelector(".card__title"),this._cardImg=this._cardBody.querySelector(".card__img"),this._cardLike=this._cardBody.querySelector(".card__like"),this._cardDel=this._cardBody.querySelector(".card__del"),this._cardLikeCount=this._cardBody.querySelector(".card__like-info"),this._cardTitle.textContent=this._name,this._cardImg.setAttribute("src",this._link),this._cardImg.setAttribute("alt",this._name),this._setEventListeners(),this.setLikeCount(this._likes),this._ownerId!==this._userId&&(this._cardDel.style.display="none"),this._cardBody}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItemAppend",value:function(e){this._container.append(e)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){var e=this;this._selector.classList.add("popup_opened"),document.addEventListener("keydown",(function(t){e._handleEscClose(t)}))}},{key:"close",value:function(){var e=this;this._selector.classList.remove("popup_opened"),document.removeEventListener("keydown",(function(t){e._handleEscClose(t)}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._selector.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(){return k(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"open",value:function(e,t){var n=this._selector.querySelector(".popup__img"),r=this._selector.querySelector(".popup__img-description");n.src=e,n.alt=t,r.textContent=t,w(E(a.prototype),"open",this).call(this)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function T(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submit=t,n._form=n._selector.querySelector(".popup__container"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;I(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())}))}},{key:"close",value:function(){I(B(a.prototype),"close",this).call(this),this._form.reset()}},{key:"changeSubmitHandler",value:function(e){this._submit=e}},{key:"_getInputValues",value:function(){var e=this;return this._value={},this._inputList.forEach((function(t){e._value[t.name]=t.value})),this._value}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(b);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.titleSelector,r=t.subtitleSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=document.querySelector(n),this._subtitle=document.querySelector(r),this.__avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this.user={name:this._title.textContent,about:this._subtitle.textContent,avatar:this.__avatar.src},this.user}},{key:"setUserAvatar",value:function(e){this.__avatar.src=e.avatar}},{key:"setUserInfo",value:function(e){this._title.textContent=e.name,this._subtitle.textContent=e.about}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V,H=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"delCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"7acf6c30-5a1b-438f-b665-1a702578f3ba","Content-Type":"application/json"}}),N=new d(l,o);N.enableValidation();var J=new d(l,i);J.enableValidation();var z=new d(l,a);z.enableValidation();var M=new R({titleSelector:".profile__title",subtitleSelector:".profile__subtitle",avatarSelector:".profile__img"}),F=new U(".popup_type_profile",(function(e){var t=e.name,n=e.about;document.querySelector(".popup__btn_type_profile").textContent="Сохранение...",H.editProfile(t,n).then((function(e){return M.setUserInfo(e)})).finally((function(){document.querySelector(".popup__btn_type_profile").textContent="Сохранить",F.close()}))}));F.setEventListeners();var G=new U(".popup_type_edit-avatar",(function(e){document.querySelector(".popup__btn_type_edit-avatar").textContent="Сохранение...",H.updateAvatar(e.avatar).then((function(e){return M.setUserAvatar(e)})).finally((function(){document.querySelector(".popup__btn_type_edit-avatar").textContent="Сохранить",G.close()}))}));G.setEventListeners();var K=new U(".popup_type_confirm",(function(){H.delCard()}));function Q(e){var t=new h(e,"#card",(function(){Y.open(e.link,e.name)}),(function(e){console.log(e),K.open(),K.changeSubmitHandler((function(){H.delCard(e).then((function(e){t.deleteCard(),K.close()}))}))}),(function(e){t.isLiked()?H.deleteLike(e).then((function(e){t.setLikeCount(e.likes)})):H.addLike(e).then((function(e){t.setLikeCount(e.likes)}))}));return t.getCard()}K.setEventListeners();var W=new y({items:[],renderer:function(e){W.addItem(Q(e))}},".cards"),X=new U(".popup_type_card-add",(function(e){document.querySelector(".popup__btn_type_add-card").textContent="Сохранение...",H.addCard(e.place,e.image).then((function(e){var t=Q({name:e.name,link:e.link,id:e._id,likes:e.likes,userId:V,ownerId:e.owner._id});W.addItemPrepend(t)})).finally((function(){document.querySelector(".popup__btn_type_add-card").textContent="Создать",X.close()}))}));X.setEventListeners();var Y=new j(".popup_type_picture");Y.setEventListeners(),e.addEventListener("click",(function(){var e=M.getUserInfo();c.value=e.name,s.value=e.about,F.open(),N.resetValidation()})),t.addEventListener("click",(function(){X.open(),J.resetValidation()})),r.addEventListener("click",(function(){var e=M.getUserInfo();u.value=e.avatar,G.open(),z.resetValidation()})),H.getProfile().then((function(e){console.log(e),M.setUserInfo(e),M.setUserAvatar(e),V=e._id,console.log(V)})),H.getInitialCards().then((function(e){console.log(e),e.forEach((function(e){var t=Q({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:V,ownerId:e.owner._id});W.addItemAppend(t)}))}))})()})();