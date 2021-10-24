module.exports = function (height, old) {

    const invalidation = "Không hợp lệ"
    const withhold = "Không được vào"
    if (height <= 0 || old <= 0) {
        return invalidation
    }
    if (old > 60) {
        return withhold
    }
    const fee25 = "vé 25k"
    const fee30 = "vé 30k"
    const largePool = "Hồ lớn"
    const smallPool = "Hồ bé"
    let result = "";

    if (old >= 16) {
        result = height > 150 ? `${largePool} và ${fee30}` : `${smallPool} và ${fee30}`
        return result;
    }
    result = height > 150 ? `${largePool} và ${fee25}` : `${smallPool} và ${fee25}`
    return result;
}