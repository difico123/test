module.exports = function (height, old) {
 let a = "Không hợp lệ"
 let b = "Không được vào"
 let c = "Hồ lớn"
 let d = "Hồ bé"
 let e = "25k"
 let f = "30k"
    if (height <= 0 || old <= 0) {
        return a
    }
   if (old > 60) {
        return b
   } else if (old >= 16) {
        return c + " và " + f
    } else {
    	if (height > 150) {
       		return c + " và " + e
    	} else {
       	    return d + " và " + e
    	}
    }
}

