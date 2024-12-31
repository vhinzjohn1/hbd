$(function () {
    let dom = document.createElement("span");
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs && config.imgs[item]) {
            let fileExt = config.imgs[item].split('.').pop().toLowerCase();
            if (fileExt === 'mp4') {
                let video = document.createElement("video");
                video.src = config.imgs[item];
                video.setAttribute("class", 'text-video');
                video.setAttribute("autoplay", "");
                video.setAttribute("loop", "");
                video.setAttribute("muted", "");
                video.setAttribute("playsinline", "");
                p.appendChild(video);
            } else {
                let img = document.createElement("img");
                img.src = config.imgs[item];
                img.setAttribute("class", 'text-img');
                p.appendChild(img);
            }
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
});

$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
