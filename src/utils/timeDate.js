export function getHours(n) {
    var d = new Date(n)
    if (d.getUTCHours() < 10) return "0" + d.getUTCHours();
    return d.getUTCHours()
};

export function getMinutes(n) {
    var d = new Date(n)
    if (d.getUTCMinutes() < 10) return "0" + d.getUTCMinutes();
    return d.getUTCMinutes()
};

export function flyDurationHours(n, b) {
    var d = new Date(n)
    d.setUTCSeconds(d.getUTCSeconds() + b)
    if (d.getUTCHours() < 10) return "0" + d.getUTCHours();
    return d.getUTCHours()
};

export function flyDurationMinutes(n, b) {
    var d = new Date(n)
    d.setUTCSeconds(d.getUTCSeconds() + b)
    if (d.getUTCMinutes() < 10) return "0" + d.getUTCMinutes();
    return d.getUTCMinutes()
};

export function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    // var s = Math.floor((d % 3600) % 60);
  
    var hDisplay = h > 0 ? h + ("Ч ") : "";
    var mDisplay = m > 0 ? m + ("М") : "";
    // var sDisplay = s > 0 ? s + ("C") : "";
    return hDisplay + mDisplay;
  }