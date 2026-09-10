const fs = require('fs');
const path = require('path');
const https = require('https');

const rawCsv = `"Submission ID","Respondent ID","Submitted at","Full Name","Phone Number","Email Address","LinkedIn Profile URL","Twitter/X Profile URL","Portfolio","Professional Picture (1:1)"
"DqWXojq","q4qA5A9","2026-09-03 17:28:14","Pratham Yadav","+919302929645","iiprathamyadav@gmail.com","https://www.linkedin.com/in/prathamyadavv","https://x.com/insanekrishnaa","https://prathm.me/","https://storage.tally.so/private/IMG_20250923_211432.jpg?id=QpW2Lg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlFwVzJMZyIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.-oagzXhyfcr0zUcuMsKzwdgzEPRcGJCccRWlqI-GbNc&signature=d644b5d155eab3dcdf9704269cb2341375a87176443261006f68a7e1f9c6d0ce"
"Vpx97BN","68Y2DBk","2026-09-03 17:30:58","Urvaksh Tirle","+919329017929","urvakshtirle@gmail.com","https://www.linkedin.com/in/urvaksh-tirle","https://x.com/urvakshtirle","https://seenly.tech/urvaksh","https://storage.tally.so/private/IMG_3197.HEIC.jpg?id=NvQp7p&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik52UXA3cCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.va4go5lEUnw28gOl-rJ0ISE98TkjEesVIl8TZbBgVpg&signature=fd2c2035d058c6d38264a07bc004d6c30c4bb7756209c86ffb1cb77ba992538b"
"X5NRAdz","EkGQqO4","2026-09-03 17:31:01","sumit ","+917222944058","isumitrathore1971@gmail.com","https://www.linkedin.com/in/rathore-sumit/","https://x.com/Awxara_","https://sumitrathore.me","https://storage.tally.so/private/X.jpg?id=VXAL0M&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZYQUwwTSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0._OyxiqkzZz1uGYSIjldiQ7PBWG1A-3rI9LMt8RlaLHQ&signature=0d1cb5266969295c9b8d27a736f9b8a5544983552de0dcc627197d62d5956ef3"
"OQVjMrg","obZMDAM","2026-09-03 17:36:45","Adarsh Singh","+919589618406","adarshsinghcommit@gmail.com","https://www.linkedin.com/in/adarshxzsingh/","https://x.com/Adarshxz","","https://storage.tally.so/private/WhatsApp-Image-2026-09-03-at-23.05.07.jpeg?id=WXBOae&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldYQk9hZSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.ayRWWbju9A7wrfXglImfSm-jji63UclamM2N8-vUMC8&signature=152f44fb48bb1ab690b8ef08618cd211f79f885e72642ae166b282dda22fbd83"
"9Nr6KQQ","b5Mx9Ee","2026-09-03 17:38:38","Rajpal Pawar ","+919171658984","rajpalpawar708@gmail.com","https://www.linkedin.com/in/rajpal-pawar-530682325?utm_source=share_via&utm_content=profile&utm_medium=member_android","https://x.com/hencerajpal","https://rajpal-pawar.github.io/Portfolio/","https://storage.tally.so/private/1000117501.png?id=BqlE4N&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkJxbEU0TiIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.4C2k-157C4gi42dHzgHL8Ohxrf8zQnN96LwD-tffSkI&signature=fbe4bb9b7c597693fb22a1b74a06b9215d758c73f61489248690ee270711239c"
"Ge7oZko","D4odpXb","2026-09-03 17:46:54","Somya Tanwar","+918839686215","somyatanwar1978@gmail.com","https://www.linkedin.com/in/somya-tanwar","https://x.com/0xSomyaa","somyaa.me","https://storage.tally.so/private/1000000281.png?id=0zyV49&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB6eVY0OSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.jQS2HdOUfrRWqiqoCZ8OE4X4YpRWEPoYTilMcxQi_VQ&signature=304ce679ae33579593476a320ac539248f79f6f51277bc1db79db7732b5ed868"
"NqO4zgl","9qYD77X","2026-09-03 17:50:26","Rashi Malviya ","+919131574415","rashimalviya80@gmail.com","https://www.linkedin.com/in/rashi-malviya-0a3643375?utm_source=share_via&utm_content=profile&utm_medium=member_android","","","https://storage.tally.so/private/1000253783.jpg?id=vV1MBd&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZWMU1CZCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.iw33RFpQjLCdpTKvzmitn-lt_1MTYOtqch5dw2ygfjw&signature=dc4f183c0d11514f85d07b4cf3d14e4817759baaf170a24210a131d7def99c42"
"jeE0O94","ZjA66ay","2026-09-03 18:00:20","Ayush sonakpuriya","+919753093388","ayushsonakpuriya@gmail.com","https://www.linkedin.com/in/ayush-sonakpuriya?utm_source=share_via&utm_content=profile&utm_medium=member_android","","","https://storage.tally.so/private/1000097340.jpg?id=9PyXDQ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlQeVhEUSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.bwy48C6eeI0TuJ5WUd1InVGaW96PGlKtHzXJ-UB-J1Q&signature=918b78d605df248d34f8656aeb776cfdd7644a31e7c0ca191e710c0bcc4b66bb"
"OQV8aBa","2EYNk2e","2026-09-03 18:18:37","Sadikcha Chhetri ","+918509723004","sadikchac@gmail.com","https://www.linkedin.com/in/sadikcha-chhetri-405285357?utm_source=share_via&utm_content=profile&utm_medium=member_android","","https://sadikcha1.netlify.app/","https://storage.tally.so/private/1000283736.png?id=gX1qjd&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImdYMXFqZCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.1rUHUGfihECKbqCLO94NT33AX4n5kUuCyxavRpoKW3s&signature=0e0be5bfca3a7e767b4c178665741842f0effb2bdfb52b780c5b15cd4bde49e3"
"xV6Ro7J","44Y2J7Y","2026-09-04 02:34:06","Lakshya Pandagre ","+917067996141","lakshyapandagre@gmail.com","https://www.linkedin.com/in/lakshya-pandagre-937a3b328?utm_source=share_via&utm_content=profile&utm_medium=member_android","https://x.com/Its_lakshya_ai","https://itslakshya.vercel.app/","https://storage.tally.so/private/1000349060.jpg?id=pX1aqZ&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBYMWFxWiIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.8AKK5xpFI85g5m3XRafgY_iFA0olaemZs_Qilg9shSQ&signature=94f2661e07cde3268b010144cd6076d1075d70c43599155b140ed78b2f52726a"
"J1BWlrR","dWoY8Xq","2026-09-04 04:35:10","Riya Singh","+917869748753","riyasingh5667parihar@gmail.com","https://www.linkedin.com/in/riya-singh-00505b294/","https://x.com/Riys5667","https://riya-singh-lily.vercel.app/","https://storage.tally.so/private/riyaaaaaaaaaa.jpg?id=PLWDkV&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBMV0RrViIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.28FEcpYDfgNbLopTzD_NHATB6fPuVAS55dRPwmtHEig&signature=0da77da46dc9a8ee1b17074a6cba65580d643b5014cf32fb55b32746703b22b5"
"QoEO87X","obZAY95","2026-09-04 05:35:16","Paridhi Jain","+919770514235","jainparidhi2875@gmail.com","https://www.linkedin.com/in/paridhi-jain-240a69297?utm_source=share_via&utm_content=profile&utm_medium=member_android","","","https://storage.tally.so/private/1000319575.jpg?id=e8jR0e&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4alIwZSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.mf5mfvXc2zWDUSJRcgC3n5YB2Z6MXojIwLxV7sjaW1w&signature=a2a98a06e5e22523c1ec7236382633f1877f585e23fbcfe8809f1bed00e69964"
"2jRDyzA","ODZA66p","2026-09-04 06:19:54","Angel Hidau","+919770754702","hidauangel@gmail.com","http://linkedin.com/in/angel-hidau-6250b836b","","","https://storage.tally.so/private/84ca41bf-9b43-4840-a085-fafb9df4c775.jpeg?id=0zgEWB&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB6Z0VXQiIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.uD8Qmr97A9T_bfnsfUl3tlpjfFNUrQRKAzI1I4hiq7w&signature=91d7ef9a889626a9fbe83b9bea99c0b69bfc614e53816b10848124ca8bc3d807"
"8NEMall","ZjAV6bA","2026-09-04 07:37:28","Yukti Vishwakarma","+918640084533","yuktivishwakarma530@gmail.com","https://www.linkedin.com/public-profile/settings/","","","https://storage.tally.so/private/1000100570.jpg?id=YXKol5&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IllYS29sNSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.82uKwAx-acr2J-Z-pLXtq6zyArwwpeLqC7bhju53dro&signature=e3ddf4a15af39c5bb730427c6783b25faa59f723cfd2d1331425c7e5bdcde617"
"4aGzRxo","Xx7GyoL","2026-09-04 09:13:58","Ravi Shankar Prasad","+918345987542","prasadravi643@gmail.com","https://www.linkedin.com/in/ravi-prasad-2b7a3234a?utm_source=share_via&utm_content=profile&utm_medium=member_ios","https://x.com/fxxxxxx7777?s=11","","https://storage.tally.so/private/20260330_174622_Original-2-.jpg?id=R16l0K&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlIxNmwwSyIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.X6Qz5-D3FGF1yURR-31CtIPT14NA-d9uAcDRI9Q0QBo&signature=6710aa99b469624cb9edb9c0eed7429d4cf5a23564e851ca5e89e47dc5c49289"
"4aGOGed","RGQLzv9","2026-09-04 11:33:48","Kamaksha Raghuwanshi ","+918889747038","kamaksha13@gmail.com","https://www.linkedin.com/in/kamaksha-raghuwanshi","","","https://storage.tally.so/private/1000375520.png?id=XdvKLj&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlhkdktMaiIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.05EENnxjSuK33M1hUGLoFVpGRfW3C8aehfF7keNnics&signature=4220ebf6224f572e80f16346c0c24a79f6073a65fff79db619646da8b58b6782"
"OQVrreY","J9rLxBJ","2026-09-04 16:15:39","Priyesh Singh ","+919039083230","alwayspriyesh@gmail.com","https://linkedin.com/in/alwayspriyesh","https://x.com/alwayspriyesh","https://priyesh.tech/","https://storage.tally.so/private/1000061390.png?id=4RRqzY&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRSUnF6WSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.6xVzEZlFERHFMPtXLO1usHD-Nsj2KN6nlPpgtt_-wTE&signature=7833580ded7ee3bf171be05f8a4f32a92f5b798d3aa6275ad7b37dbdda234d84"
"xV6ooMr","2EYvxP9","2026-09-04 18:54:15","Pavan Sahu","+916265615073","phsahu50@gmail.com","https://www.linkedin.com/in/pavan-sahu?utm_source=share_via&utm_content=profile&utm_medium=member_android","","","https://storage.tally.so/private/1000228571.png?id=D99gxp&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkQ5OWd4cCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.GN80xxAwOxEBhdsd0izMRGUKx23aDABqaJeol5AVLis&signature=546495b779c9cb841992d8f76e0841ebfb856ddfdbc39407fbda710f69ccb99a"
"zEbOO6q","7RYv9O0","2026-09-04 18:57:08","Suyash Verma","+919343941061","suyashverma0023@gmail.com","www.linkedin.com/in/suyash-codez","x.com/suyash_codez","suyashsites.vercel.app","https://storage.tally.so/private/1000185777.png?id=0zzNb0&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB6ek5iMCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.pxrR_BRpKNi8Vt6IVSc7903TMI3uIbvrdVglZvSPuf4&signature=49654c711a3284c70a29b1c87e8a898ccb61b5bf56ac8d49f6f7f55ee6471e80"
"RWrgN1Q","dWojRqV","2026-09-04 19:38:55","Aarya yadav ","+918839035535","yadavaarya010@gmail.com","https://www.linkedin.com/public-profile/settings?trk=public-profile","","","https://storage.tally.so/private/IMG_20260905_010802.jpg?id=6GYJ9k&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZHWUo5ayIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.3wNCrbSnObuhcApwQtxt7flP0N4DgUu8DVx53IP9N5k&signature=2700e12758d225c5b529290fd09be9d6fa2b3b76d05257012368d1e58631cbd2"
"WJZB1Bk","obZ7ZVe","2026-09-05 02:41:40","Yashika kushwah ","+919201520103","Yashikakushwah60@gmail.com","https://www.linkedin.com/in/yashika-kushwah-136054314?utm_source=share_via&utm_content=profile&utm_medium=member_android","","","https://storage.tally.so/private/InShot_20260905_081054665.jpg?id=KA4kYK&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IktBNGtZSyIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.JzQ1Adlf9AotnsQMc5_VLcMKMTUGcb4hvmVgLOXwqFk&signature=be4b3f08e3804ca1ba57a8e13c37b5071699149a8e7939790774647d95530671"
"EqaEaEo","NpxJNjp","2026-09-05 02:54:57","Shruti singh","+918319403417","singhshruti0821@gmail.com","https://www.linkedin.com/in/shruti-singh-307159327/","","","https://storage.tally.so/private/shruti-singh.jpg?id=bXMv8g&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJYTXY4ZyIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.Raxwvc2jDYDlbuNz1B1OOCQie5FNgGjLCTyzAT7VICg&signature=ce631cb64ad36bab035cf728fe6597a587f7346c2c74a726399e02bf8a87073b"
"o9xaPvN","QKqBa0G","2026-09-05 08:05:06","Kartik Prajapat","+919669466562","kartikprajapat2005@gmail.com","https://www.linkedin.com/in/kartik-prajapat01/","https://x.com/prajapat35773","https://www.karrtik.me/","https://storage.tally.so/private/file_000000007ef471fa8da6b8c7ca5229e6.png?id=qXq6R5&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFYcTZSNSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.IIjj9TKGxVw0KURTGiNZTpghf4rDnrNO_Aw_vqsV6X4&signature=73ee98546c6f641edae4daa44ce7eabc3366a3501e0e6e783decb07c46cb6db4"
"NqO9Geb","EkGbVA2","2026-09-05 08:26:29","Khushi yadav ","+917415970788","ky9974536@gmail.com","www.linkedin.com/in/","","","https://storage.tally.so/private/1000574252.jpg?id=9PYbJ5&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlQWWJKNSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.rhPUP7u1URCPUgprRonnMOeoJNv9U1-_bEco6UTnVq0&signature=ccb8a7bbf31a561bbc5ae8a6164c31905db048c40a8691bfca9d8cdfd2c381b7"
"zEb466M","Npx4BvQ","2026-09-05 11:36:33","Anish Sarkar","+919589534294","anish99sarkar@gmail.com","https://www.linkedin.com/in/anishsarkar-","https://x.com/anishsarkars","https://t.co/zHQDkEepvg","https://storage.tally.so/private/IMG_20260530_154702_698-1-.jpg?id=e8Oe7k&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU4T2U3ayIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.OzDzHc3Gj8h8_-O5mUmLFBgz4xsaccn16eeHH4re1DI&signature=3a80c56fe2557c075835a1eea505fcc928c1f63a8beca9bf1db02b1e569b0382"
"q5NX9kg","9qY66z1","2026-09-05 11:44:34","Vishal Maratha","+917354238547","vishalmaratha286@gmail.com","https://www.linkedin.com/in/vishal-maratha2002","","https://vishal-portfolio-site-tawny.vercel.app/","https://storage.tally.so/private/0vzLytgo.jpg?id=7O02G0&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdPMDJHMCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.RICIB-8Wd6xGuIKZkZBWr3zvC-YGTFQ4EhQmeK7PYXw&signature=415fd5f0cfdb54a02f2bec96bae65b990ed4ef83f81b91d91699ce0621e61b72"
"EqaG6vA","aQ1jVEB","2026-09-05 13:40:05","Nilesh Prajapat ","+919340236043","nilesh.devv@gmail.com","https://www.linkedin.com/in/nilesh-prajapat","","itsnilesh.vercel.app","https://storage.tally.so/private/IMG_0126.jpeg?id=EeVBkX&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVlVkJrWCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.OoWsSQim1_MAXOHEXad7Bcj_qYfn_8TcfYMoo9qhFoE&signature=31fc0eae9aaff3580fba6655dfaccdb9670ebfe564be20dc73406ee38b07b6d6"
"Ge7E9Op","dWoQlaz","2026-09-05 15:10:11","Anushka Rathode","+918305266878","anushkarathode09@gmail.com","https://www.linkedin.com/in/anushka-rathode-719122320/","https://x.com/AnushkaRathode","","https://storage.tally.so/private/ChatGPT-Image-Sep-5-2026-08_39_34-PM.png?id=LBxobl&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkxCeG9ibCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.7TvOPMPHIyIUCZd98rFB5veJ1_pHxQRbcl4srYgIJWY&signature=5dcf103a503aac97c4aa67623d4aeb3558b73bb92e6be71886442420062371fa"
"NqONgGB","9qYD77X","2026-09-05 16:32:10","Rashi Malviya","+919131574415","rashimalviya80@gmail.com","https://www.linkedin.com/in/rashi-malviya-0a3643375?utm_source=share_via&utm_content=profile&utm_medium=member_android","","","https://storage.tally.so/private/1000329664.jpg?id=lX2XJV&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImxYMlhKViIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.hSRztrp0QUqhTMck98IAVcek4APZFF_9lPaXK0otQf4&signature=0517a7424c003d90a27a3bab2d44148916bfae9489630c24989f10356455ea0f"
"BE9ovg1","dWoQlaz","2026-09-05 17:16:49","Anushka Rathode","+918305266878","anushkarathode09@gmail.com","https://www.linkedin.com/in/anushka-rathode-719122320/","https://x.com/AnushkaRathode","","https://storage.tally.so/private/Gemini_Generated_Image_kvgbvekvgbvekvgb.png?id=2zdGrg&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJ6ZEdyZyIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.ZF7gFGVJPng0czSUAGEklgiurtbSYjUtp1o5VYsa5kE&signature=8bf6362db7273beec912a0967e108d982b0ca39529d076e24d3267cd2e49d806"
"DqWOgP5","QKqBa0G","2026-09-05 17:24:51","Kartik Prajapat","+919669466562","kartikprajapat2005@gmail.com","https://www.linkedin.com/in/kartik-prajapat01/","https://x.com/prajapat35773","https://www.karrtik.me/","https://storage.tally.so/private/passport-1-.png?id=VX7Ok6&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZYN09rNiIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.ZxTY94tBlpEHip_NbW2s7unqi4V96D_51z9VGVR7Q_c&signature=6621e42abd02c50ef1b24d5063c8550b8d9505e44d0797c19adaa050793c4618"
"0VAqj50","b5Mx9Ee","2026-09-05 18:46:24","Rajpal Pawar","+919171658984","rajpalpawar708@gmail.com","https://www.linkedin.com/in/rajpal-pawar-530682325?utm_source=share_via&utm_content=profile&utm_medium=member_android","https://x.com/hencerajpal","https://rajpal-pawar.github.io/Portfolio/","https://storage.tally.so/private/1000154757.png?id=vV6od8&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZWNm9kOCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0._V_MkuoGyJvJqRvXZKzwOBvhNlzZzT3ZnMDKpnZfXC4&signature=d06d392a2fa582915b839d274974abfdfebef915a8a5fdaca508f3958033439a"
"aOlpKYb","9qYpdop","2026-09-05 18:58:53","Tapan Porwal","+919111144799","tapanynporwal@gmail.com","https://www.linkedin.com/in/tapan-porwal-b46826205","https://x.com/PorwalTapan","","https://storage.tally.so/private/IMG_2715.jpeg?id=1z0q41&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjF6MHE0MSIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.gYVgKalDc1bjgleqzOuA6Hy4QIhfMjYuz2wXqVX50cc&signature=97653936c54f48c01ce3abb21761dd0df93c72f5de285ddbea8d1e6b21e8b762"
"4aG6rrk","ZjAV6bA","2026-09-06 07:41:04","Yukti Vishwakarma","+918640084533","yuktivishwakarma530@gmail.com","https://www.linkedin.com/public-profile/settings/","","","https://storage.tally.so/private/1000108177.png?id=yr8Red&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InlyOFJlZCIsImZvcm1JZCI6InZHOTlNZCIsImlhdCI6MTc4ODcxNDIwNH0.KEO8rElVxRIKymcYJYdbrvLFI0NuP_WWZqJcKr5MIkY&signature=56e3199bfacb710b7f15b0a471dffc2f1f16873ef1ec22a04b8fcd09308454a8"`;

function parseCsv(csv) {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split('","').map(h => h.replace(/^"|"$/g, ''));
  const records = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    // Simple CSV parser split on ","
    const values = line.split('","').map(v => v.replace(/^"|"$/g, ''));
    const rec = {};
    headers.forEach((h, idx) => {
      rec[h] = values[idx] || '';
    });
    records.push(rec);
  }
  return records;
}

const records = parseCsv(rawCsv);

// Group by Email Address (or Full Name cleaned)
const latestMap = new Map();

records.forEach(rec => {
  const key = rec['Email Address'].trim().toLowerCase() || rec['Full Name'].trim().toLowerCase();
  if (!latestMap.has(key)) {
    latestMap.set(key, rec);
  } else {
    const existing = latestMap.get(key);
    // Compare dates
    if (new Date(rec['Submitted at']) > new Date(existing['Submitted at'])) {
      latestMap.set(key, rec);
    }
  }
});

const deduplicated = Array.from(latestMap.values());
console.log(`Total unique members: ${deduplicated.length}`);

// Download function
function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // handle redirect
        return downloadFile(response.headers.location, destPath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(destPath));
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function run() {
  const targetDir = path.join(__dirname, '../public/teamPhoto');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const teamList = [];

  for (let i = 0; i < deduplicated.length; i++) {
    const item = deduplicated[i];
    const fullName = item['Full Name'].trim();
    const cleanName = fullName.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/s, ' ');
    const url = item['Professional Picture (1:1)'];
    
    // determine extension
    let ext = '.jpg';
    if (url.includes('.png')) ext = '.png';
    else if (url.includes('.jpeg')) ext = '.jpeg';
    else if (url.includes('.heic') || url.includes('.HEIC')) ext = '.jpg';
    
    const fileName = `${cleanName.replace(/\s+/g, '_')}${ext}`;
    const filePath = path.join(targetDir, fileName);
    const publicPath = `/teamPhoto/${fileName}`;

    console.log(`Downloading (${i+1}/${deduplicated.length}): ${fullName} -> ${fileName}`);
    try {
      if (url && url.startsWith('http')) {
        await downloadFile(url, filePath);
      }
    } catch (e) {
      console.error(`Failed downloading image for ${fullName}:`, e.message);
    }

    // Format social links
    let linkedin = item['LinkedIn Profile URL'].trim();
    if (linkedin && !linkedin.startsWith('http')) linkedin = 'https://' + linkedin;
    let twitter = item['Twitter/X Profile URL'].trim();
    if (twitter && !twitter.startsWith('http')) twitter = 'https://' + twitter;
    let portfolio = item['Portfolio'].trim();
    if (portfolio && !portfolio.startsWith('http')) portfolio = 'https://' + portfolio;

    teamList.push({
      id: i + 1,
      name: fullName,
      role: "Team Member",
      image: publicPath,
      category: "team",
      social: {
        ...(linkedin ? { linkedin } : {}),
        ...(twitter ? { twitter } : {}),
        ...(portfolio ? { portfolio } : {})
      }
    });
  }

  fs.writeFileSync(path.join(__dirname, 'processed_team.json'), JSON.stringify(teamList, null, 2));
  console.log('Saved processed_team.json');
}

run();
