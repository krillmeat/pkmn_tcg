// TYPE ICONS

const buildTypeIcon = (types,index, scale) => {
    let svg;

    let offset = index == 0 ? "0,0" : TOP_TYPE_TWO_OFFSET;

    svg = `<g class='TYPE ${types[index].toUpperCase()}' transform='translate(${offset}) scale(${scale})'><g>${svgData.typeIcons[types[index].toLowerCase()]}</g></g>`;

    return svg;
};

const getAllIndex = (char, string) => {
    let a = []; let i = 0;
    while((i=string.indexOf(char,i+1)) >= 0) a.push(i);
    return a;
};

const downloader = (data, filename, type) => {
    var file = new Blob([data],{type: type});
    
    var a = document.createElement("a");
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}

const createIMG = node => {
    var canvas = node;
    var img = canvas.toDataURL("image/jpg");

    return img;
}

const ttsRender = () => {
    let linkElem = document.createElement("link");
    linkElem.rel = 'stylesheet';
    linkElem.href = "CSS/tss_out.css";

    document.getElementsByTagName('head')[0].appendChild(linkElem);
}