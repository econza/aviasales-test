export function pluralizeStop(x) {
    switch (true) {
        case x === 0:
            return "без пересадок"
        case x === 1:
            return "1 пересадка";
        case x > 1 && x <= 4:
            return `${x} пересадки`;
        case x > 4:
            return `${x} пересадок`;
        default:
            return "";
    }
};

export function setValue(obj, path, value) {
    var ref = obj;

    path.split('.').forEach(function (key, index, arr) {
        ref = ref[key] = index === arr.length - 1 ? value : {};
    });

    return obj;
}
