// Translate hexadecimal to human-readable text
function hex2str(hex){
    hex = hex || '';
    var out = '';
    var hx = hex.match(/.{1,4}/g) || [];
    for(var i = 0; i < hx.length; i++) {
        out += String.fromCharCode(parseInt(hx[i], 16));
    } return out;
}
