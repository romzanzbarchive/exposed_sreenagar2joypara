/* নতুন সংবাদ যোগ করতে নিচের তালিকায় একটি নতুন {…} যোগ করুন। demo:true সরিয়ে দিলে "ডেমো" ট্যাগ চলে যাবে। */
var NEWS=[
 {title:"সংবাদের শিরোনাম এখানে লিখুন",date:"তারিখ যোগ করুন",category:"ঘোষণা",summary:"এটি একটি ডেমো প্লেসহোল্ডার। প্রকৃত সংবাদের সারাংশ এখানে লিখুন।",link:"#",image:"assets/images/photo1.svg",demo:true},
 {title:"গ্রামের অনুষ্ঠানের খবর (ডেমো)",date:"তারিখ যোগ করুন",category:"সামাজিক",summary:"এটি বাস্তব সংবাদ নয়। আপনার সংবাদ দিয়ে এই অংশ প্রতিস্থাপন করুন।",link:"#",image:"assets/images/photo2.svg",demo:true},
 {title:"শিক্ষা সংক্রান্ত বিজ্ঞপ্তি (ডেমো)",date:"তারিখ যোগ করুন",category:"শিক্ষা",summary:"এটি শুধু নমুনা। বাস্তব বিজ্ঞপ্তি এখানে যোগ করুন।",link:"#",image:"assets/images/photo3.svg",demo:true}
];
(function(){
  var box=document.getElementById('news-list');if(!box)return;
  var limit=+box.dataset.limit||NEWS.length;
  box.innerHTML=NEWS.slice(0,limit).map(function(n){var e=RP.esc;
   return '<article class="card"><img src="'+e(n.image)+'" alt="'+e(n.title)+'" loading="lazy"><div class="body"><span class="tag'+(n.demo?' demo':'')+'">'+e(n.category)+(n.demo?' · ডেমো':'')+'</span><h3>'+e(n.title)+'</h3><div class="meta">'+e(n.date)+'</div><p>'+e(n.summary)+'</p><a class="btn btn-ghost" style="margin-top:auto;align-self:flex-start" href="'+e(n.link)+'">আরও পড়ুন</a></div></article>';}).join('')||RP.empty;
})();
