function htmlType(el) {
  switch (el.type) {
    case "image":
      return `<img class="item__image" src="${el.url}" alt="${el.title}"/>`;
    case "audio":
      let audioFile = new Audio(el.url);
      audioFile.controls = true;
      return `<div class="item__audio">${audioFile.outerHTML}</div>`;
    case "video":
      let videoFile = document.createElement("video");
      videoFile.controls = true;
      videoFile.src = el.url;
      videoFile.className = "video__item";
      return `<div class="video">${videoFile.outerHTML}</div>`;
  }
}

export function createTemplate(obj) {
  let tpl = "";
  obj.forEach(function (item, index) {
    tpl += `<div class="col-3"><div class="item" data-id="${index}">${htmlType(
      item
    )}<p class="item__title">${item.title}</p></div></div>`;
  });
  return tpl;
}
