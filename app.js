setInterval(() => {
    d = new Date();
    hou = d.getHours();
    minu = d.getMinutes();
    seco = d.getSeconds();
    hrotation = 30*hou + minu/2;
    mrotation = 6*minu;
    srotation = 6*seco;
    hour.style.transform = `rotate(${hou}deg)`;
    minute.style.transform = `rotate(${minu}deg)`;
    second.style.transform = `rotate(${seco}deg)`;
}, 1000);