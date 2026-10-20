# আমাদের রুদ্রপাড়া — গ্রামভিত্তিক ওয়েবসাইট

HTML5, CSS3 ও Vanilla JavaScript দিয়ে তৈরি একটি Static ওয়েবসাইট। কোনো Backend, Admin Panel, Database বা Build Process নেই।

## ১. ফাইল ও ফোল্ডারের কাজ
| ফাইল/ফোল্ডার | কাজ |
|---|---|
| `*.html` (১১টি) | প্রতিটি পেজ: index, about, history, gallery, news, education, institutions, blood-donors, businesses, contact, id-card |
| `css/style.css` | মূল ডিজাইন, রঙ ও কম্পোনেন্ট |
| `css/responsive.css` | মোবাইল লেআউট |
| `css/id-card.css` | আইডি কার্ড পেজের ডিজাইন |
| `js/main.js` | মোবাইল মেনু, ছবি Fallback |
| `js/news.js`, `gallery.js`, `education.js`, `institutions.js`, `blood-donors.js`, `businesses.js` | প্রতিটির ডেটা তালিকা ও প্রদর্শন |
| `js/id-card.js` | আইডি কার্ড তৈরি, QR ও PNG ডাউনলোড |
| `assets/images/` | ছবি | 
| `assets/logo.svg` | লোগো |
| `vercel.json`, `.gitignore` | ডিপ্লয় ও Git কনফিগ |

## ২. গ্রামের তথ্য পরিবর্তন
`about.html` ও `history.html` খুলুন। হলুদ রঙের `[ ... ]` অংশগুলো Placeholder। সেগুলো নিশ্চিত তথ্য দিয়ে বদলান। নিশ্চিত না হলে কিছু বানিয়ে লিখবেন না।

## ৩. ছবি পরিবর্তন
- নিজের ছবি `assets/images/` ফোল্ডারে রাখুন (যেমন `my1.jpg`)।
- `js/gallery.js`-এর `GALLERY` তালিকায় `src:"assets/images/my1.jpg"` লিখুন।
- বর্তমান ছবিগুলো এই প্রজেক্টেই তৈরি করা সাধারণ SVG Placeholder (`photo1.svg`–`photo8.svg`, `hero.svg`); কোনো বাইরের উৎস থেকে নেওয়া নয়, তাই কপিরাইট সমস্যা নেই।
- ছবি পরিবর্তন করলে নিজের ছবির অনুমতি/কপিরাইট নিশ্চিত করুন। ছবি লোড না হলে স্বয়ংক্রিয়ভাবে Fallback দেখায়।
- হোমপেজের হিরো ব্যাকগ্রাউন্ড বদলাতে `css/style.css`-এ `.hero` অংশে `hero.svg`-এর নাম বদলান।

## ৪. সংবাদ যোগ করা
`js/news.js`-এর `NEWS` তালিকায় নতুন `{ title, date, category, summary, link, image }` যোগ করুন। বাস্তব সংবাদে `demo:true` লাইনটি মুছে দিন।

## ৫. ব্যবসাপ্রতিষ্ঠান যোগ করা
`js/businesses.js`-এর `BUSINESSES` তালিকায় নতুন `{ name, category, address, contact, image }` যোগ করুন। ক্যাটাগরি ফিল্টার নিজে থেকে তৈরি হবে।

## ৬. রক্তদাতার তথ্য
`js/blood-donors.js`-এর `DONORS` তালিকা সম্পাদনা করুন। **সব নমুনা তথ্য কাল্পনিক ডেমো — প্রকাশের আগে মুছুন।** কারও নাম বা মোবাইল নম্বর তার অনুমতি ছাড়া প্রকাশ করবেন না।
শিক্ষাপ্রতিষ্ঠান `js/education.js`, ধর্মীয়/সামাজিক প্রতিষ্ঠান `js/institutions.js`-এ একইভাবে পরিবর্তন করুন।

## ৭. যোগাযোগ পেজ
`contact.html`-এ ফোন, ইমেইল, WhatsApp (`https://wa.me/8801XXXXXXXXX`) ও সামাজিক মাধ্যমের লিংক Placeholder। নিজের তথ্য বসান।

## ৮. আইডি কার্ড
- সব ফিল্ড ঐচ্ছিক; শুধু পূরণ করা তথ্য কার্ডে আসে। ফাঁকা ফর্মেও কার্ড তৈরি হয়।
- তথ্য ও ছবি ব্রাউজারেই থাকে; সার্ভারে যায় না, সংরক্ষিতও হয় না।
- QR কোডে শুধু আইডি রেফারেন্স থাকে, ব্যক্তিগত তথ্য নয়। এটি যাচাইকৃত পরিচয় নয়।
- "PNG ডাউনলোড" বাটনে সরাসরি ফাইল নামে (`rudrapara-id-card.png`)।
- PNG ও QR-এর জন্য cdnjs থেকে `html2canvas` ও `qrcodejs` লোড হয়, তাই ইন্টারনেট লাগে। লোড না হলে পেজে স্পষ্ট বার্তা দেখায়।
- কার্ডে লেখা আছে: "ব্যক্তিগত ডিজিটাল পরিচিতি কার্ড — সরকারি পরিচয়পত্র নয়"।

## ৯. GitHub-এ আপলোড
1. github.com-এ নতুন Repository খুলুন (যেমন `rudrapara`)।
2. ZIP Extract করুন। `rudrapara` ফোল্ডারের **ভিতরের ফাইলগুলো** (index.html ইত্যাদি) নিন।
3. Repository-তে "Add file → Upload files" দিয়ে সব ফাইল ও ফোল্ডার টেনে আনুন, তারপর "Commit changes"।
4. (ঐচ্ছিক) GitHub Pages: Settings → Pages → Branch: `main` / root → Save।

## ১০. Vercel-এ Deploy
1. vercel.com-এ GitHub দিয়ে লগইন করুন।
2. "Add New → Project" থেকে Repository ইমপোর্ট করুন।
3. Framework Preset: **Other**। Build Command ও Output Directory খালি রাখুন।
4. "Deploy" চাপুন। কিছুক্ষণে লিংক পাবেন। পরে GitHub-এ ফাইল বদলালে স্বয়ংক্রিয়ভাবে আপডেট হবে।

## ১১. ভবিষ্যতে নতুন ফিচার
- নতুন পেজ: কোনো `.html` ফাইল কপি করে নাম বদলান এবং সব পেজের মেনুতে (`<ul class="nav">`) ও ফুটারে লিংক যোগ করুন।
- নতুন ডেটা তালিকার জন্য `js/` ফোল্ডারে নতুন ফাইল বানিয়ে পেজে `<script>` যোগ করুন।
- ভবিষ্যতে চাইলে Backend/ফর্ম সেবা যুক্ত করা যাবে; বর্তমান সংস্করণে তা বাধ্যতামূলক নয়।
