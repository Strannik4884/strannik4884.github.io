(function(e){function t(t){for(var a,o,u=t[0],n=t[1],l=t[2],d=0,m=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,u=1;u<s.length;u++){var n=s[u];0!==i[n]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/task5/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],n=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=n;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0cb5":function(e,t,s){},"1f4e":function(e,t,s){"use strict";s("8e04")},2311:function(e,t,s){},"2bf5":function(e,t,s){},"2fdf":function(e,t,s){"use strict";s("2311")},"44f0":function(e,t,s){"use strict";s("2bf5")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=s("ee98"),r=s.n(i),o=s("8c4f"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:" mt-2 mb-2 text-center"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/task5/add"}},[e._v("Добавить резюме")])],1),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("resume-list",{attrs:{title:"Новый",resumes:e.resumesNew,"resumes-accepted":e.resumesAccepted,"resumes-fault":e.resumesFault,"resumes-assigned":e.resumesAssigned,"resumes-new":e.resumesNew}})],1),s("div",{staticClass:"col-3"},[s("resume-list",{attrs:{title:"Назначено собеседование",resumes:e.resumesAssigned,"resumes-accepted":e.resumesAccepted,"resumes-fault":e.resumesFault,"resumes-assigned":e.resumesAssigned,"resumes-new":e.resumesNew}})],1),s("div",{staticClass:"col-3"},[s("resume-list",{attrs:{title:"Принят",resumes:e.resumesAccepted,"resumes-accepted":e.resumesAccepted,"resumes-fault":e.resumesFault,"resumes-assigned":e.resumesAssigned,"resumes-new":e.resumesNew}})],1),s("div",{staticClass:"col-3"},[s("resume-list",{attrs:{title:"Отказ",resumes:e.resumesFault,"resumes-accepted":e.resumesAccepted,"resumes-fault":e.resumesFault,"resumes-assigned":e.resumesAssigned,"resumes-new":e.resumesNew}})],1)])])])},n=[],l=(s("4de4"),s("bc3a")),c=s.n(l),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h4",{staticClass:"text-center"},[e._v(e._s(e.title+" ("+e.resumes.length+")"))]),s("draggable",{attrs:{list:e.resumes,group:"user"},on:{change:e.changeStatus}},e._l(e.resumes,(function(t,a){return s("div",{key:a},[s("resume-item",{attrs:{photoUrl:t.photoUrl,name:t.name,profession:t.profession,age:e.getAge(t.birthday)},nativeOn:{click:function(s){return e.itemClick(t.id)}}})],1)})),0)],1)},m=[],p=(s("7db0"),s("5e15")),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("div",{staticClass:"field"},[s("div",{staticClass:"photo"},[e.photoUrl?s("div",[s("img",{staticClass:"resume-image rounded-circle",attrs:{src:e.photoUrl}})]):e._e(),""!==e.photoUrl&&e.photoUrl?e._e():s("div",[s("img",{staticClass:"resume-image rounded-circle",attrs:{src:"/person.jpg"}})])]),s("div",[e._v(e._s(e.name))]),s("div",[e._v(e._s(e.profession))]),s("div",[e._v("Возраст: "+e._s(e.age))]),s("hr")])])])},h=[],f={name:"ResumeItem",props:["name","profession","age","photoUrl"]},g=f,b=(s("6fc5"),s("2877")),w=Object(b["a"])(g,v,h,!1,null,"644911e2",null),y=w.exports,C={name:"ResumeList",components:{draggable:p["a"],ResumeItem:y},props:["title","resumes","resumesNew","resumesAssigned","resumesAccepted","resumesFault"],methods:{changeStatus:function(e){var t=this,s=e.added;if("undefined"!==typeof s){var a="",i=this.resumesNew.find((function(e){return e.id===s.element.id}));"undefined"!==typeof i&&(a="Новый"),i=this.resumesAssigned.find((function(e){return e.id===s.element.id})),"undefined"!==typeof i&&(a="Назначено собеседование"),i=this.resumesAccepted.find((function(e){return e.id===s.element.id})),"undefined"!==typeof i&&(a="Принят"),i=this.resumesFault.find((function(e){return e.id===s.element.id})),"undefined"!==typeof i&&(a="Отказ"),c.a.post("http://lstu-app.ru/api/cv/"+s.element.id+"/status/update",'{"new_status": "'+a+'"}').catch((function(){t.$notify({group:"message",type:"error",title:"Произошла ошибка при обновлении статуса!"})}))}},itemClick:function(e){this.$router.push({name:"edit",params:{id:e}})},getAge:function(e){var t=parseInt(e.substring(0,2)),s=parseInt(e.substring(3,5)),a=parseInt(e.substring(6,10)),i=new Date,r=new Date(a,s-1,t),o=i.getFullYear()-r.getFullYear(),u=i.getMonth()-r.getMonth();return(u<0||0===u&&i.getDate()<r.getDate())&&o--,o}}},_=C,x=Object(b["a"])(_,d,m,!1,null,"40ac1622",null),S=x.exports,E={name:"ResumeMain",components:{ResumeList:S},data:function(){return{resumes:[],resumesNew:[],resumesAssigned:[],resumesAccepted:[],resumesFault:[]}},watch:{resumesNew:function(){this.updateList(this.resumesNew,"Новый")},resumesAssigned:function(){this.updateList(this.resumesAssigned,"Назначено собеседование")},resumesAccepted:function(){this.updateList(this.resumesAccepted,"Принят")},resumesFault:function(){this.updateList(this.resumesFault,"Отказ")}},mounted:function(){var e=this;c.a.get("http://lstu-app.ru/api/cv/").then((function(t){200===t.status?(e.resumes=t.data,e.resumesNew=e.filterResumes(e.resumes,"Новый"),e.resumesAssigned=e.filterResumes(e.resumes,"Назначено собеседование"),e.resumesAccepted=e.filterResumes(e.resumes,"Принят"),e.resumesFault=e.filterResumes(e.resumes,"Отказ")):e.$notify({group:"message",type:"error",title:"Произошла ошибка!",text:t.request})}))},methods:{filterResumes:function(e,t){function s(e){var s=!1;return e["resumeStatus"]===t&&(s=!0),s}return e.filter(s)},updateList:function(e,t){var s=this;c.a.get("http://lstu-app.ru/api/cv/").then((function(e){200===e.status?s.filterResumes(e.data,t):s.$notify({group:"message",type:"error",title:"Произошла ошибка!",text:e.request})}))}}},V=E,F=Object(b["a"])(V,u,n,!1,null,"c3f003c4",null),k=F.exports,L=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:" mt-2 mb-2 text-center"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/task5/"}},[e._v("На главную страницу")])],1),s("div",{staticClass:"form container",staticStyle:{display:"inline"}},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"left-col form-input col"},[s("resume-form",{attrs:{resume:e.resume,"resume-view":e.resumeView,"education-levels":e.educationLevels,"resume-statuses":e.resumeStatuses}})],1),s("div",{staticClass:"right-col form-output col"},[s("resume-template",{attrs:{resume:e.resume,"resume-view":e.resumeView,"education-levels":e.educationLevels}})],1)])])])},P=[],$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"text-center form-col-title"},[e._v("Форма резюме")]),e.showResumeForm?s("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.applyResumeForm(t)},reset:function(t){return t.preventDefault(),e.clearResumeForm(t)}}},[0!==this.resumeFormErrors.length?s("div",e._l(this.resumeFormErrors,(function(t){return s("div",{key:t,staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"}),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"input-control bg-danger text-white pb-2 pt-2"},[s("div",{staticClass:"pl-2"},[e._v(e._s(t))])])])])})),0):e._e(),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Профессия:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.profession,expression:"resume.profession"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Программист",required:""},domProps:{value:e.resume.profession},on:{input:function(t){t.target.composing||e.$set(e.resume,"profession",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Город:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.city,expression:"resume.city"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Липецк",required:"",list:"vkCities"},domProps:{value:e.resume.city},on:{input:[function(t){t.target.composing||e.$set(e.resume,"city",t.target.value)},e.cityInputHandler]}}),s("datalist",{attrs:{id:"vkCities"}},e._l(e.cities,(function(t){return s("option",{key:t.id},[e._v(e._s(t.title))])})),0)])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Фото (URL):")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.photoUrl,expression:"resume.photoUrl"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.resume.photoUrl},on:{input:function(t){t.target.composing||e.$set(e.resume,"photoUrl",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("ФИО:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.name,expression:"resume.name"}],staticClass:"form-control",attrs:{type:"text",maxlength:"150",placeholder:"Петров Пётр Петрович",required:""},domProps:{value:e.resume.name},on:{input:function(t){t.target.composing||e.$set(e.resume,"name",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Номер телефона:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.phone,expression:"resume.phone"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10",placeholder:"9876543210",required:""},domProps:{value:e.resume.phone},on:{input:function(t){t.target.composing||e.$set(e.resume,"phone",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Email:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.email,expression:"resume.email"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",maxlength:"255",placeholder:"mail@example.ru",required:""},domProps:{value:e.resume.email},on:{input:function(t){t.target.composing||e.$set(e.resume,"email",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Дата рождения:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.birthday,expression:"resume.birthday"}],staticClass:"form-control",attrs:{type:"date",placeholder:e.birthdayPlaceholder,required:""},domProps:{value:e.resume.birthday},on:{input:function(t){t.target.composing||e.$set(e.resume,"birthday",t.target.value)}}})])]),e._l(e.resume.educations,(function(t,a){return s("education",{key:a,attrs:{city:e.resume.city,education:t,index:a,"education-levels":e.educationLevels},on:{removeEducation:e.removeEducation}})})),s("button",{staticClass:"btn btn-primary add-education-button",attrs:{type:"button"},on:{click:e.addEducation}},[e._v("Добавить образование ")]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Желаемая зарплата:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.resume.desiredSalary,expression:"resume.desiredSalary"}],staticClass:"form-control",attrs:{type:"text",maxlength:"10",placeholder:"50000",required:""},domProps:{value:e.resume.desiredSalary},on:{input:function(t){t.target.composing||e.$set(e.resume,"desiredSalary",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Навыки:")]),s("div",{staticClass:"col-lg-8"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.resume.skills,expression:"resume.skills"}],staticClass:"form-control form-text-area",attrs:{maxlength:"500",rows:"3",required:""},domProps:{value:e.resume.skills},on:{input:function(t){t.target.composing||e.$set(e.resume,"skills",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("О себе:")]),s("div",{staticClass:"col-lg-8"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.resume.about,expression:"resume.about"}],staticClass:"form-control form-text-area",attrs:{maxlength:"500",rows:"3"},domProps:{value:e.resume.about},on:{input:function(t){t.target.composing||e.$set(e.resume,"about",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Статус:")]),s("div",{staticClass:"col-lg-8"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.resume.resumeStatus,expression:"resume.resumeStatus"}],staticClass:"form-control",attrs:{required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.resume,"resumeStatus",t.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:""}},[e._v("Выберите один из вариантов")]),e._l(e.resumeStatuses,(function(t){return s("option",{key:t},[e._v(e._s(t))])}))],2)])]),s("button",{staticClass:"btn btn-danger",attrs:{type:"reset"}},[e._v("Очистить форму")]),s("button",{staticClass:"btn btn-primary apply-btn-style",attrs:{type:"submit"}},[e._v("Применить")])],2):e._e()])},D=[],R=(s("c975"),s("fb6a"),s("a434"),s("b0c0"),s("4d63"),s("ac1f"),s("25f0"),s("5319"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Образование:")]),s("div",{staticClass:"col-lg-8"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.education.educationLevel,expression:"education.educationLevel"}],staticClass:"form-control",attrs:{required:""},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.education,"educationLevel",t.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:""}},[e._v("Выберите один из вариантов")]),e._l(e.educationLevels,(function(t){return s("option",{key:t},[e._v(e._s(t))])}))],2)])]),e.education.educationLevel!==e.educationLevels[0]&&""!==e.education.educationLevel?s("div",[s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Учебное заведение:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.education.educationPlace,expression:"education.educationPlace"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Липецкий Государственный Технический Университет",required:"",list:"educationPlaces-"+e.index},domProps:{value:e.education.educationPlace},on:{input:[function(t){t.target.composing||e.$set(e.education,"educationPlace",t.target.value)},e.universiteInputHandler]}}),s("datalist",{attrs:{id:"educationPlaces-"+e.index}},e._l(e.places,(function(t){return s("option",{key:t.id},[e._v(e._s(t.title))])})),0)])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Факультет:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.education.educationFaculty,expression:"education.educationFaculty"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Автоматизации и информатики",required:""},domProps:{value:e.education.educationFaculty},on:{input:function(t){t.target.composing||e.$set(e.education,"educationFaculty",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Специализация:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.education.educationSpecialization,expression:"education.educationSpecialization"}],staticClass:"form-control",attrs:{type:"text",maxlength:"100",placeholder:"Математическое обеспечение и администрирование информационных систем",required:""},domProps:{value:e.education.educationSpecialization},on:{input:function(t){t.target.composing||e.$set(e.education,"educationSpecialization",t.target.value)}}})])]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"},[e._v("Год окончания:")]),s("div",{staticClass:"col-lg-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.education.educationEndDate,expression:"education.educationEndDate"}],staticClass:"form-control",attrs:{type:"text",maxlength:"4",placeholder:"2021",required:""},domProps:{value:e.education.educationEndDate},on:{input:function(t){t.target.composing||e.$set(e.education,"educationEndDate",t.target.value)}}})])])]):e._e(),0!==e.index?s("button",{staticClass:"btn btn-danger remove-education-button",attrs:{type:"button"},on:{click:e.removeEducation}},[e._v(" Удалить образование ")]):e._e(),e._m(0)])}),N=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-3 col-form-label"}),s("div",{staticClass:"col-lg-8"},[s("hr")])])}],U=s("f2e8"),A=s.n(U),O={name:"Education",props:["city","education","index","educationLevels"],data:function(){return{places:[]}},methods:{universiteInputHandler:function(){var e=this;A()("https://api.vk.com/method/database.getCities?country_id=1&need_all=1&count=10&v=5.126&access_token=d8a02bc4d8a02bc4d8a02bc474d8d60b14dd8a0d8a02bc4b8b051d31123e891068fad68&lang=ru&q="+this.city,null,(function(t,s){if(t)console.error(t.message);else{var a=s.response.items[0].id;A()("https://api.vk.com/method/database.getUniversities?city_id="+a+"&country_id=1&count=10&v=5.126&access_token=d8a02bc4d8a02bc4d8a02bc474d8d60b14dd8a0d8a02bc4b8b051d31123e891068fad68&q="+e.education.educationPlace,null,(function(t,s){t?console.error(t.message):e.places=s.response.items}))}}))},removeEducation:function(){this.$emit("removeEducation",this.education)}}},j=O,z=(s("2fdf"),Object(b["a"])(j,R,N,!1,null,"74972392",null)),q=z.exports,I=s("f2e8"),T={name:"ResumeForm",props:["resume","resumeView","educationLevels","resumeStatuses"],data:function(){return{cities:[],birthdayPlaceholder:new Date(Date.now()).toLocaleString().slice(0,10),showResumeForm:!0,resumeFormErrors:[]}},components:{education:q},created:function(){var e=this;if(void 0!==this.$route.params.id){var t=this;c.a.get("http://lstu-app.ru/api/cv/"+this.$route.params.id).catch((function(e){if(e.response){var s="";400===e.response.status?s="Некорректный id резюме":404===e.response.status&&(s="Данное резюме не найдено"),t.$notify({group:"message",type:"error",title:"Произошла ошибка!",text:s}),he.push({path:"/"})}})).then((function(t){if(200===t.status){e.resume.profession=t.data["profession"],e.resume.city=t.data["city"],e.resume.photoUrl=t.data["photoUrl"],e.resumeView.photoUrl=t.data["photoUrl"],e.resume.name=t.data["name"],e.resume.phone=t.data["phone"],e.resume.email=t.data["email"],e.resume.birthday=t.data["birthday"].replace(/(\d{2}).(\d{2}).(\d{4})/,"$3-$2-$1"),e.resume.educations=[],e.resumeView.educations=[];for(var s=0;s<t.data["educations"].length;++s)t.data["educations"][s]["educationLevel"]!==e.educationLevels[0]?e.resume.educations.push({educationLevel:t.data["educations"][s]["educationLevel"],educationPlace:t.data["educations"][s]["educationPlace"],educationFaculty:t.data["educations"][s]["educationFaculty"],educationSpecialization:t.data["educations"][s]["educationSpecialization"],educationEndDate:t.data["educations"][s]["educationEndDate"]}):e.resume.educations.push({educationLevel:t.data["educations"][s]["educationLevel"],educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}),e.resumeView.educations.push({educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""});e.resume.desiredSalary=t.data["desiredSalary"],e.resume.skills=t.data["skills"],e.resume.about=t.data["about"],e.resume.resumeStatus=t.data["resumeStatus"]}}))}},methods:{cityInputHandler:function(){var e=this;I("https://api.vk.com/method/database.getCities?country_id=1&need_all=1&count=10&v=5.126&access_token=d8a02bc4d8a02bc4d8a02bc474d8d60b14dd8a0d8a02bc4b8b051d31123e891068fad68&lang=ru&q="+this.resume.city,null,(function(t,s){t?console.error(t.message):e.cities=s.response.items}))},addEducation:function(){this.resume.educations.push({educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}),this.resumeView.educations.push({educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""})},removeEducation:function(e){var t=this.resume.educations.indexOf(e);this.resume.educations.splice(t,1),this.resumeView.educations.splice(t,1)},clearResumeForm:function(){var e=this;this.resumeFormErrors=[],this.resume.profession="",this.resume.city="",this.resume.photoUrl="",this.resume.name="",this.resume.phone="",this.resume.email="",this.resume.birthday="",this.resume.educations=[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],this.resume.desiredSalary="",this.resume.skills="",this.resume.about="",this.resume.resumeStatus="Новый",this.resumeView.educations=[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],this.showResumeForm=!1,this.$nextTick((function(){e.showResumeForm=!0}))},applyResumeForm:function(){this.resumeFormErrors=[];var e=new RegExp("\\d{"+this.resume.phone.length+"}","gim"),t=new RegExp("\\d{"+this.resume.desiredSalary.length+"}","gim");(this.resume.phone.length<6||this.resume.phone.length>10||!e.test(this.resume.phone))&&this.resumeFormErrors.push("Номер телефона должен состоять из цифр и быть в длину от 6 до 10 символов");for(var s=0;s<this.resume.educations.length;++s){var a=this.resume.educations[s];if(a.educationLevel!==this.educationLevels[0]){var i=new RegExp("\\d{"+a.educationEndDate.length+"}","gim");(""===a.educationEndDate||parseInt(a.educationEndDate)<1945||parseInt(a.educationEndDate)>2030||!i.test(a.educationEndDate))&&this.resumeFormErrors.push("Укажите корректную дату окончания обучения")}}t.test(this.resume.desiredSalary)||this.resumeFormErrors.push("Укажите корректный размер желаемой зарплаты"),0===this.resumeFormErrors.length&&this.renderResumeTemplate()},renderResumeTemplate:function(){var e=this;this.resumeView.profession=this.resume.profession,this.resumeView.city=this.resume.city,this.resumeView.photoUrl=this.resume.photoUrl,this.resumeView.name=this.resume.name,this.resumeView.phone=this.resume.phone,this.resumeView.email=this.resume.email,this.resumeView.birthday=new Date(this.resume.birthday).toLocaleDateString(),this.resumeView.educations=[];for(var t=0;t<this.resume.educations.length;++t)this.resumeView.educations.push({educationLevel:this.resume.educations[t].educationLevel,educationPlace:this.resume.educations[t].educationPlace,educationFaculty:this.resume.educations[t].educationFaculty,educationSpecialization:this.resume.educations[t].educationSpecialization,educationEndDate:this.resume.educations[t].educationEndDate});this.resumeView.desiredSalary=this.resume.desiredSalary,this.resumeView.skills=this.resume.skills,this.resumeView.about=this.resume.about,this.resumeView.resumeStatus=this.resume.resumeStatus,void 0!==this.$route.params.id?c.a.post("http://lstu-app.ru/api/cv/"+this.$route.params.id+"/edit",this.resumeView).then((function(t){200===t.status?e.$notify({group:"message",type:"info",title:"Резюме успешно обновлено!"}):e.$notify({group:"message",type:"error",title:"Произошла ошибка!",text:t.request})})):c.a.post("http://lstu-app.ru/api/cv/add",this.resumeView).then((function(t){201===t.status?(e.$notify({group:"message",type:"info",title:"Резюме успешно создано!"}),he.push({path:"/"})):e.$notify({group:"message",type:"error",title:"Произошла ошибка!",text:t.request})}))}}},M=T,H=(s("44f0"),Object(b["a"])(M,$,D,!1,null,"7aeead28",null)),J=H.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",{staticClass:"text-center form-col-title"},[e._v("Сформированное резюме")]),s("div",[s("div",{staticClass:"d-flex justify-content-center"},[s("img",{staticClass:"resume-image rounded-circle mb-2",attrs:{src:e.resumeView.photoUrl,alt:"Image not found",onerror:"this.src='/person.jpg';"}})]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Профессия: "+e._s(e.resumeView.profession))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Город: "+e._s(e.resumeView.city))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("ФИО: "+e._s(e.resumeView.name))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Номер телефона: "+e._s(e.resumeView.phone))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Email: "+e._s(e.resumeView.email))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Дата рождения: "+e._s(e.resumeView.birthday))])])]),e._l(e.resumeView.educations,(function(t,a){return s("div",{key:a},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Образование: "+e._s(t.educationLevel))])])]),e.resume.educations[a].educationLevel!==e.educationLevels[0]&&""!==e.resume.educations[a].educationLevel?s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Учебное заведение: "+e._s(t.educationPlace))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Факультет: "+e._s(t.educationFaculty))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Специализация: "+e._s(t.educationSpecialization)+" ")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Год окончания: "+e._s(t.educationEndDate))])])])]):e._e(),e.resumeView.educations.length>1?s("hr"):e._e()])})),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Желаемая зарплата: "+e._s(e.resumeView.desiredSalary))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Навыки: "+e._s(e.resumeView.skills))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("О себе: "+e._s(e.resumeView.about))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("div",{staticClass:"text-wrap mb-2",staticStyle:{width:"100%"}},[e._v("Статус: "+e._s(e.resumeView.resumeStatus))])])]),s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.clearResumeTemplate}},[e._v("Очистить резюме")])],2)])},B=[],G={name:"ResumeTemplate",props:["resume","resumeView","educationLevels"],methods:{clearResumeTemplate:function(){this.resumeView.profession="",this.resumeView.city="",this.resumeView.photoUrl="",this.resumeView.name="",this.resumeView.phone="",this.resumeView.email="",this.resumeView.birthday="";for(var e=0;e<this.resumeView.educations.length;++e)this.resumeView.educations[e].educationLevel="",this.resumeView.educations[e].educationPlace="",this.resumeView.educations[e].educationFaculty="",this.resumeView.educations[e].educationSpecialization="",this.resumeView.educations[e].educationEndDate="";this.resumeView.desiredSalary="",this.resumeView.skills="",this.resumeView.about="",this.resumeView.resumeStatus=""}}},K=G,Q=(s("1f4e"),Object(b["a"])(K,Y,B,!1,null,"82d652ee",null)),W=Q.exports,X={data:function(){return{resume:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educations:[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],desiredSalary:"",skills:"",about:"",resumeStatus:"Новый"},resumeView:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educations:[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],desiredSalary:"",skills:"",about:"",resumeStatus:""},educationLevels:["Среднее","Среднее специальное","Неоконченное высшее","Высшее"],resumeStatuses:["Новый","Назначено собеседование","Принят","Отказ"]}},components:{resumeForm:J,resumeTemplate:W}},Z=X,ee=(s("84f8"),Object(b["a"])(Z,L,P,!1,null,"de3d55ca",null)),te=ee.exports,se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:" mt-2 mb-2 text-center"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/task5/"}},[e._v("На главную страницу")])],1),s("div",{staticClass:"form container",staticStyle:{display:"inline"}},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"left-col form-input col-5"},[s("resume-form",{attrs:{resume:e.resume,"resume-view":e.resumeView,"education-levels":e.educationLevels,"resume-statuses":e.resumeStatuses}})],1),s("div",{staticClass:"right-col form-output col"},[s("resume-template",{attrs:{resume:e.resume,"resume-view":e.resumeView,"education-levels":e.educationLevels}})],1)])])])},ae=[],ie={data:function(){return{resume:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educations:[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],desiredSalary:"",skills:"",about:"",resumeStatus:"Новый"},resumeView:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educations:[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],desiredSalary:"",skills:"",about:"",resumeStatus:""},educationLevels:["Среднее","Среднее специальное","Неоконченное высшее","Высшее"],resumeStatuses:["Новый","Назначено собеседование","Принят","Отказ"]}},components:{resumeForm:J,resumeTemplate:W}},re=ie,oe=(s("7a5b"),Object(b["a"])(re,se,ae,!1,null,"dcbc0114",null)),ue=oe.exports,ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:" mt-2 mb-2 text-center"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/"}},[e._v("На главную страницу")])],1),e._m(0)])},le=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:" mt-2 mb-2 text-center"},[s("h2",[e._v("К сожалению, страница не найдена")])])}],ce={name:"NotFoundPage"},de=ce,me=Object(b["a"])(de,ne,le,!1,null,"e20b012a",null),pe=me.exports;a["default"].use(o["a"]);var ve=[{path:"/task5/",name:"home",component:k},{path:"/task5/add",name:"add",component:ue},{path:"/task5/edit/:id",name:"edit",component:te},{path:"/task5/*",name:"error",component:pe}],he=new o["a"]({mode:"history",routes:ve}),fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("notifications",{attrs:{position:"top center",group:"message"}}),s("router-view")],1)},ge=[],be={data:function(){return{resume:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educations:[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],desiredSalary:"",skills:"",about:"",resumeStatus:"Новый"},resumeView:{profession:"",city:"",photoUrl:"",name:"",phone:"",email:"",birthday:"",educations:[{educationLevel:"",educationPlace:"",educationFaculty:"",educationSpecialization:"",educationEndDate:""}],desiredSalary:"",skills:"",about:"",resumeStatus:""},educationLevels:["Среднее","Среднее специальное","Неоконченное высшее","Высшее"],resumeStatuses:["Новый","Назначено собеседование","Принят","Отказ"]}}},we=be,ye=(s("99b6"),Object(b["a"])(we,fe,ge,!1,null,"28ad9264",null)),Ce=ye.exports;a["default"].use(r.a),new a["default"]({router:he,render:function(e){return e(Ce)}}).$mount("#app")},"6fc5":function(e,t,s){"use strict";s("91e9")},"7a5b":function(e,t,s){"use strict";s("f5b1")},"84f8":function(e,t,s){"use strict";s("0cb5")},"8e04":function(e,t,s){},"91e9":function(e,t,s){},"99b6":function(e,t,s){"use strict";s("e3b3")},e3b3:function(e,t,s){},f5b1:function(e,t,s){}});
//# sourceMappingURL=app.2bf90c59.js.map