/* স্থানীয় ব্যবসা: নতুন ব্যবসা যোগ করতে একটি নতুন {…} যোগ করুন। */
var BUSINESSES=[
 {name:"[দোকানের নাম]",category:"মুদি দোকান",address:"[ঠিকানা]",contact:"[ফোন]",image:"assets/images/photo5.svg"},
 {name:"[ফার্মেসির নাম]",category:"ফার্মেসি",address:"[ঠিকানা]",contact:"[ফোন]",image:"assets/images/photo2.svg"},
 {name:"[রেস্টুরেন্ট/চায়ের দোকান]",category:"খাবার",address:"[ঠিকানা]",contact:"[ফোন]",image:"assets/images/photo6.svg"},
 {name:"[কাপড়ের দোকান]",category:"পোশাক",address:"[ঠিকানা]",contact:"[ফোন]",image:"assets/images/photo1.svg"}
];
(function(){
  var box=document.getElementById('biz-list');if(!box)return;var e=RP.esc,limit=+box.dataset.limit||0,cat='সব',q='';
  function draw(){var l=BUSINESSES.filter(function(b){return(cat==='সব'||b.category===cat)&&(b.name+b.category+b.address).toLowerCase().indexOf(q)>-1});if(limit)l=l.slice(0,limit);
   box.innerHTML=l.map(function(b){return '<article class="card"><img src="'+e(b.image)+'" alt="'+e(b.name)+'" loading="lazy"><div class="body"><span class="tag">'+e(b.category)+'</span><h3><span class="ph">'+e(b.name)+'</span></h3><div class="meta">📍 '+e(b.address)+'<br>☎ '+e(b.contact)+'</div></div></article>';}).join('')||RP.empty;}
  draw();var f=document.getElementById('biz-filters'),s=document.getElementById('biz-search');
  if(f){var c=['সব'];BUSINESSES.forEach(function(b){if(c.indexOf(b.category)<0)c.push(b.category)});RP.chips(f,c,function(l){cat=l;draw();});}
  if(s)s.addEventListener('input',function(){q=s.value.trim().toLowerCase();draw();});
})();
