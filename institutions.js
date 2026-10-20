/* ধর্মীয় ও সামাজিক প্রতিষ্ঠান: তালিকা সম্পাদনা করুন। */
var INSTITUTIONS=[
 {name:"[মসজিদের নাম]",type:"মসজিদ",address:"[ঠিকানা]",contact:"[যোগাযোগ]",about:"[সংক্ষিপ্ত তথ্য]",image:"assets/images/photo3.svg"},
 {name:"[সামাজিক সংগঠনের নাম]",type:"সামাজিক সংগঠন",address:"[ঠিকানা]",contact:"[যোগাযোগ]",about:"[সংক্ষিপ্ত তথ্য]",image:"assets/images/photo6.svg"},
 {name:"[অন্য প্রতিষ্ঠানের নাম]",type:"অন্যান্য",address:"[ঠিকানা]",contact:"[যোগাযোগ]",about:"[সংক্ষিপ্ত তথ্য]",image:"assets/images/photo8.svg"}
];
(function(){
  var box=document.getElementById('inst-list');if(!box)return;var e=RP.esc;
  function draw(t){box.innerHTML=INSTITUTIONS.filter(function(x){return !t||t==='সব'||x.type===t}).map(function(x){return '<article class="card"><img src="'+e(x.image)+'" alt="'+e(x.name)+'" loading="lazy"><div class="body"><span class="tag">'+e(x.type)+'</span><h3><span class="ph">'+e(x.name)+'</span></h3><p>'+e(x.about)+'</p><div class="meta">📍 '+e(x.address)+'<br>☎ '+e(x.contact)+'</div></div></article>';}).join('')||RP.empty;}
  draw();var f=document.getElementById('inst-filters');
  if(f){var c=['সব'];INSTITUTIONS.forEach(function(x){if(c.indexOf(x.type)<0)c.push(x.type)});RP.chips(f,c,draw);}
})();
