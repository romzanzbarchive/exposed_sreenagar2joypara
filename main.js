(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰';});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){b.click();b.focus();}});}
  var y=document.getElementById('year');if(y)y.textContent=new Date().toLocaleDateString('bn-BD',{year:'numeric'});
  // broken image fallback
  document.addEventListener('error',function(e){var t=e.target;if(t.tagName==='IMG'&&!t.dataset.fb){t.dataset.fb=1;t.src=(window.RP_ROOT||'')+'assets/images/fallback.svg';}},true);
})();
// shared helpers
window.RP={
  esc:function(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});},
  chips:function(box,list,cb){box.innerHTML='';list.forEach(function(l,i){var c=document.createElement('button');c.type='button';c.className='chip'+(i?'':' on');c.textContent=l;c.addEventListener('click',function(){box.querySelectorAll('.chip').forEach(function(x){x.classList.remove('on')});c.classList.add('on');cb(l,i);});box.appendChild(c);});},
  empty:'<p class="empty">কোনো তথ্য পাওয়া যায়নি।</p>'
};
