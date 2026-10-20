/* শিক্ষাপ্রতিষ্ঠান যোগ বা পরিবর্তন করতে এই তালিকা সম্পাদনা করুন। [ ] চিহ্নিত অংশ আপনার পূরণ করার জন্য। */
var EDU=[
 {name:"[বিদ্যালয়ের নাম]",type:"স্কুল",address:"[ঠিকানা]",contact:"[ফোন/ইমেইল]",about:"[সংক্ষিপ্ত পরিচিতি এখানে লিখুন]",image:"assets/images/photo4.svg"},
 {name:"[কলেজের নাম]",type:"কলেজ",address:"[ঠিকানা]",contact:"[ফোন/ইমেইল]",about:"[সংক্ষিপ্ত পরিচিতি এখানে লিখুন]",image:"assets/images/photo5.svg"},
 {name:"[মাদ্রাসার নাম]",type:"মাদ্রাসা",address:"[ঠিকানা]",contact:"[ফোন/ইমেইল]",about:"[সংক্ষিপ্ত পরিচিতি এখানে লিখুন]",image:"assets/images/photo6.svg"},
 {name:"[অন্যান্য প্রতিষ্ঠানের নাম]",type:"অন্যান্য",address:"[ঠিকানা]",contact:"[ফোন/ইমেইল]",about:"[সংক্ষিপ্ত পরিচিতি এখানে লিখুন]",image:"assets/images/photo7.svg"}
];
(function(){
  var box=document.getElementById('edu-list');if(!box)return;var limit=+box.dataset.limit||EDU.length,e=RP.esc;
  box.innerHTML=EDU.slice(0,limit).map(function(x){return '<article class="card"><img src="'+e(x.image)+'" alt="'+e(x.name)+'" loading="lazy"><div class="body"><span class="tag">'+e(x.type)+'</span><h3><span class="ph">'+e(x.name)+'</span></h3><p>'+e(x.about)+'</p><div class="meta">📍 '+e(x.address)+'<br>☎ '+e(x.contact)+'</div></div></article>';}).join('');
})();
