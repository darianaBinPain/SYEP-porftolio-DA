const reviews = [
   {
       id: 1,
       name: 'Abigail Robinson',
       img:'https://mail.google.com/mail/u/1?ui=2&ik=885fcada53&attid=0.1&permmsgid=msg-f:1840209762508268950&th=1989bd077682e596&view=fimg&fur=ip&permmsgid=msg-f:1840209762508268950&sz=s0-l75-ft&attbid=ANGjdJ8Vsn6LTW4VMGuYciH5nIt4nDJ88oCyJDKcm6xashryoaZabMSkPbjCOyfDZ0hpGUv2gDlmdItG2nV69zLQ_Clx17kSe9abuM5GPDjnVzXextfdG5Uy7ZaioC4&disp=emb&realattid=ii_1989bd03d2d33c722f01&zw',
       text: 'Ean has an unique personality, one minute he would make you upset then the next he’s making you cry of laughter. He shows a lot of consistency whether it goes for working as a team or individually. Ean is a hard worker and determined human being who thrives to see greatness'
   }, 
  
   {
       id: 2,
       name: 'Layla Negron',
       img:'https://mail.google.com/mail/u/1?ui=2&ik=885fcada53&attid=0.1&permmsgid=msg-f:1840205488029602416&th=1989b9243bba9270&view=fimg&fur=ip&permmsgid=msg-f:1840205488029602416&sz=s0-l75-ft&attbid=ANGjdJ8HAKOcxsXPfkF5p3cHCbuj5mO_W5udT79RkZJVAeKJGGuSRc7rE72sBqdWmKYz50ciKfe2epaf2L2cidsXHgjic-8peo1UA1z_CmzAV7UcDMUET-tcqLbP1ak&disp=emb&realattid=ii_1989b920185d003b3f41&zw',
       text: 'Ean is cool. He is really nice and helps me when I get stuck. He knows a lot and explains stuff so anyone can understand it. I like working with him because he is funny. He smiles at me and says hi. And If you need help he will stop and show you how to do it.'
   },  
  
   {
       id: 3,
       name: 'Leah guthrie',
       img:'https://mail.google.com/mail/u/1?ui=2&ik=885fcada53&attid=0.1&permmsgid=msg-f:1840206396567031022&th=1989b9f7c4c78cee&view=fimg&fur=ip&permmsgid=msg-f:1840206396567031022&sz=s0-l75-ft&attbid=ANGjdJ_THDhQFhscAg1c9SLH0hEUt-janTLtI32FiSVr7VASCifmweVJJyZPgpggo7uBws9FqSOrAF4Xh9SNMwxlW-udePMlursUAkY2lxpcSjDBFix82f1gvlUkQt0&disp=emb&realattid=ii_1989b9f4637284a4ee41&zw',
       text: 'Ean is one of my close friends and a quality about him that I really adore is his helpfulness. Ean is a person that would literally drop anything to help out friend in need. Because of this I know that I could turn to him if I have a problem and if he is able to help me he will.'
   },
];


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
   const item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
});


function showPerson(person){
   const item = reviews[person];
    img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
}


nextBtn.addEventListener('click', function(){
   currentItem++;
   if (currentItem > reviews.length - 1){
       currentItem = 0;
   }
   showPerson(currentItem);
});


prevBtn.addEventListener('click', function (){
   currentItem--;
   if(currentItem < 0){
       currentItem = reviews.lenght -1;
   }
   showPerson(currentItem);
});