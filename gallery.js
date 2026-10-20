/* ছবি যোগ করতে assets/images/ ফোল্ডারে ছবি রেখে নিচে src লিখুন। */
var GALLERY=[
 {src:"assets/images/photo1.svg",title:"গ্রামের প্রবেশপথ",cat:"প্রকৃতি"},
 {src:"assets/images/photo2.svg",title:"ধানক্ষেত",cat:"প্রকৃতি"},
 {src:"assets/images/photo3.svg",title:"গ্রামের মসজিদ",cat:"প্রতিষ্ঠান"},
 {src:"assets/images/photo4.svg",title:"বিদ্যালয়",cat:"প্রতিষ্ঠান"},
 {src:"assets/images/photo5.svg",title:"গ্রামের হাট",cat:"জীবন"},
 {src:"assets/images/photo6.svg",title:"উৎসব",cat:"জীবন"},
 {src:"assets/images/photo7.svg",title:"নদীর ঘাট",cat:"প্রকৃতি"},
 {src:"assets/images/photo8.svg",title:"খেলার মাঠ",cat:"জীবন"}
];
(function(){
  var box=document.getElementById('gallery-grid');if(!box)return;
  var limit=+box.dataset.limit||0,cur=[],idx=0;
  function draw(cat){
    cur=GALLERY.filter(function(g){return !cat||cat==='সব'||g.cat===cat});
    var list=limit?cur.slice(0,limit):cur;
    box.innerHTML=list.map(function(g,i){return '<button type="button" class="card gal" data-i="'+i+'"><img src="'+RP.esc(g.src)+'" alt="'+RP.esc(g.title)+'" loading="lazy"><span class="cap">'+RP.esc(g.title)+'</span></button>';}).join('')||RP.empty;
  }
  draw();
  var f=document.getElementById('gallery-filters');
  if(f){var cats=['সব'];GALLERY.forEach(function(g){if(cats.indexOf(g.cat)<0)cats.push(g.cat)});RP.chips(f,cats,draw);}
  var lb=document.getElementById('lb');if(!lb)return;
  var im=lb.querySelector('img'),cp=lb.querySelector('p'),last;
  function show(i){idx=(i+cur.length)%cur.length;im.src=cur[idx].src;im.alt=cur[idx].title;cp.textContent=cur[idx].title;}
  function open(i){last=document.activeElement;lb.classList.add('open');show(i);lb.querySelector('.x').focus();}
  function close(){lb.classList.remove('open');if(last)last.focus();}
  box.addEventListener('click',function(e){var b=e.target.closest('.gal');if(b)open(+b.dataset.i);});
  lb.querySelector('.x').onclick=close;lb.querySelector('.pv').onclick=function(){show(idx-1)};lb.querySelector('.nx').onclick=function(){show(idx+1)};
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(idx-1);if(e.key==='ArrowRight')show(idx+1);});
  var sx=0;lb.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  lb.addEventListener('touchend',function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(idx+(d<0?1:-1));});
})();
