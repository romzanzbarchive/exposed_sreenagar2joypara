/* রক্তদাতা: শুধু অনুমতি নিয়েই কারও তথ্য যোগ করুন। নিচের তথ্য কাল্পনিক ডেমো — প্রকাশের আগে মুছে ফেলুন। */
var DONORS=[
 {name:"ডেমো দাতা ১",group:"A+",contact:"০১XXX-XXXXXX",demo:true},
 {name:"ডেমো দাতা ২",group:"B+",contact:"০১XXX-XXXXXX",demo:true},
 {name:"ডেমো দাতা ৩",group:"O+",contact:"০১XXX-XXXXXX",demo:true},
 {name:"ডেমো দাতা ৪",group:"AB+",contact:"০১XXX-XXXXXX",demo:true},
 {name:"ডেমো দাতা ৫",group:"O-",contact:"০১XXX-XXXXXX",demo:true}
];
(function(){
  var box=document.getElementById('donor-list');if(!box)return;var e=RP.esc;
  function draw(g){box.innerHTML=DONORS.filter(function(d){return !g||g==='সব'||d.group===g}).map(function(d){return '<article class="card"><div class="body"><div class="row"><div class="blood">'+e(d.group)+'</div><div><h3>'+e(d.name)+'</h3><span class="meta">'+e(d.contact)+'</span></div></div>'+(d.demo?'<span class="tag demo">ডেমো তথ্য</span>':'')+'</div></article>';}).join('')||RP.empty;}
  draw();RP.chips(document.getElementById('donor-filters'),['সব','A+','A-','B+','B-','AB+','AB-','O+','O-'],draw);
})();
