(function(){
  var F=['name','idno','father','mother','dob','mobile','blood','email','village','address'];
  var L={father:'পিতা',mother:'মাতা',dob:'জন্মতারিখ',mobile:'মোবাইল',blood:'রক্তের গ্রুপ',email:'ইমেইল',village:'গ্রাম',address:'ঠিকানা'};
  var form=document.getElementById('idform'),card=document.getElementById('idcard'),msg=document.getElementById('idmsg');
  var photo='',sig='',ref='',qr=null;
  function $(id){return document.getElementById(id)}
  function genRef(){var a='ABCDEFGHJKLMNPQRSTUVWXYZ23456789',s='';for(var i=0;i<6;i++)s+=a[Math.floor(Math.random()*a.length)];return 'RP-'+s;}
  function val(k){var el=form.elements[k];return el?el.value.trim():''}
  function fmtDate(v){if(!v)return'';var p=v.split('-');return p.length===3?p[2]+'/'+p[1]+'/'+p[0]:v}
  function render(){
    var name=val('name'),idn=val('idno')||ref;
    $('c-name').textContent=name;$('c-name').style.display=name?'':'none';
    $('c-num').textContent=idn;
    var h='';['father','mother','dob','mobile','blood','email','village','address'].forEach(function(k){
      var v=k==='dob'?fmtDate(val(k)):val(k);if(!v)return;
      h+='<div class="'+(k==='address'||k==='email'?'w':'')+'"><small>'+L[k]+'</small>'+RP.esc(v)+'</div>';});
    $('c-rows').innerHTML=h;
    $('c-photo').style.backgroundImage=photo?'url('+photo+')':'none';
    $('c-photo').style.display=photo?'':'none';
    $('c-sig').style.backgroundImage=sig?'url('+sig+')':'none';
    $('c-sig').style.display=sig?'':'none';
    fit();
  }
  function fit(){var st=$('stage'),w=st.clientWidth,s=Math.min(1,w/600);card.parentNode.style.transform='scale('+s+')';st.style.height=(380*s)+'px';}
  function makeQR(){
    var box=$('c-qr');box.innerHTML='';box.classList.remove('on');
    if(typeof QRCode==='undefined'){note('QR কোড লাইব্রেরি লোড হয়নি (ইন্টারনেট সংযোগ দরকার)। কার্ড QR ছাড়াই তৈরি হয়েছে।',1);return;}
    try{qr=new QRCode(box,{text:val('idno')||ref,width:136,height:136,correctLevel:QRCode.CorrectLevel.M});box.classList.add('on');}
    catch(e){note('QR কোড তৈরি করা যায়নি।',1);}
  }
  function note(t,bad){msg.textContent=t;msg.className='idmsg'+(bad?' bad':'');}
  function validate(){
    var ok=true;['email','mobile'].forEach(function(k){$('e-'+k).textContent='';});
    var em=val('email'),mb=val('mobile');
    if(em&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){$('e-email').textContent='ইমেইল সঠিক নয়।';ok=false;}
    if(mb&&!/^[0-9০-৯+\-\s]{6,16}$/.test(mb)){$('e-mobile').textContent='মোবাইল নম্বর সঠিক নয়।';ok=false;}
    return ok;
  }
  function readImg(input,cb){
    var f=input.files[0];if(!f){cb('');return;}
    if(!/^image\//.test(f.type)){note('শুধু ছবির ফাইল দিন।',1);input.value='';cb('');return;}
    if(f.size>5*1024*1024){note('ছবির আকার ৫ MB-এর কম হতে হবে।',1);input.value='';cb('');return;}
    var r=new FileReader();r.onload=function(){cb(r.result)};r.readAsDataURL(f);
  }
  form.addEventListener('input',function(e){if(e.target.type!=='file')render();});
  form.elements.photo.addEventListener('change',function(e){readImg(e.target,function(d){photo=d;render()})});
  form.elements.sign.addEventListener('change',function(e){readImg(e.target,function(d){sig=d;render()})});
  $('gen').addEventListener('click',function(){
    if(!validate()){note('ফর্মের ত্রুটি ঠিক করুন।',1);return;}
    ref=genRef();render();makeQR();note('কার্ড তৈরি হয়েছে। এখন PNG ডাউনলোড করতে পারেন।');
  });
  $('dl').addEventListener('click',function(){
    if(typeof html2canvas==='undefined'){note('PNG তৈরির লাইব্রেরি লোড হয়নি। ইন্টারনেট সংযোগ দিয়ে পেজ রিলোড করুন।',1);return;}
    var fit0=card.parentNode,old=fit0.style.transform;fit0.style.transform='none';
    html2canvas(card,{scale:2,backgroundColor:null,useCORS:true}).then(function(cv){
      fit0.style.transform=old;
      cv.toBlob(function(b){var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='rudrapara-id-card.png';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(a.href)},2000);note('PNG ডাউনলোড শুরু হয়েছে।');},'image/png');
    }).catch(function(){fit0.style.transform=old;note('PNG তৈরি করা যায়নি। আবার চেষ্টা করুন।',1);});
  });
  $('rs').addEventListener('click',function(){form.reset();photo=sig='';['email','mobile'].forEach(function(k){$('e-'+k).textContent='';});ref=genRef();render();makeQR();note('ফর্ম রিসেট হয়েছে।');});
  window.addEventListener('resize',fit);
  ref=genRef();render();makeQR();
  window.addEventListener('load',function(){if(!$('c-qr').classList.contains('on'))makeQR();fit();});
})();
