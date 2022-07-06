search_ = document.querySelector('.search_')
search = document.querySelector('.search')
search_b = document.querySelector('.search_b')
order_= document.querySelector('.order_')
order_s = document.querySelector('.order_s')
notification_s= document.querySelector('.notification_s')

search_.addEventListener('click',()=>{
    search.classList.toggle('se');
    search_b.classList.toggle('search_');
    order_s.classList.toggle('order_');
    order_s.classList.toggle('order_b');
    notification_s.classList.toggle('notification_');
    notification_s.classList.toggle('notification_b');
})






order_ = document.querySelector('.order_')
order = document.querySelector('.order')
order_b = document.querySelector('.order_b')
search_b = document.querySelector('.search_b')
search_s = document.querySelector('.search_s')
notification_s = document.querySelector('.notification_s')



order_.addEventListener('click',()=>{
    order.classList.toggle('or');
    order_b.classList.toggle('order_');
    search_s.classList.toggle('search_');
    search_s.classList.toggle('search_b');
    notification_s.classList.toggle('notification_');
    notification_s.classList.toggle('notification_b');
})






notification_ = document.querySelector('.notification_')
notification= document.querySelector('.notification')
notification_b= document.querySelector('.notification_b')
search_s= document.querySelector('.search_s')
order_s= document.querySelector('.order_s')

notification_.addEventListener('click',()=>{
    notification.classList.toggle('no');
    notification_b.classList.toggle('notification_');
    search_s.classList.toggle('search_');
    search_s.classList.toggle('search_b');
    order_s.classList.toggle('order_');
    order_s.classList.toggle('order_b');

})




cb1 = document.querySelector('.cb1')
cb2= document.querySelector('.cb2')
cli= document.querySelector('.cli')
clients= document.querySelector('.clients')

cb2.addEventListener('click',()=>{
    cb2.classList.toggle('cb1');
    clients.classList.toggle('cli');

})


fb1 = document.querySelector('.fb1')
fb2= document.querySelector('.fb2')
foll= document.querySelector('.foll')
followers= document.querySelector('.followers')

fb2.addEventListener('click',()=>{
    fb2.classList.toggle('fb1');
    followers.classList.toggle('foll');

})
