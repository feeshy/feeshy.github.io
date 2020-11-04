var res0 = document.getElementById("res0")
var res1 = document.getElementById("res1")
var res2 = document.getElementById("res2")
var res3 = document.getElementById("res3")
var res4 = document.getElementById("res4")
var res5 = document.getElementById("res5")
var res6 = document.getElementById("res6")
var res7 = document.getElementById("res7")

function resPreset(btn){
    switch(btn){
        case "L8x1":
            res0.options[0].selected = true
            res1.options[1].selected = true
            res2.options[2].selected = true
            res3.options[2].selected = true
            res4.options[3].selected = true
            res5.options[3].selected = true
            res6.options[4].selected = true
            res7.options[4].selected = true
            break
        case "L8x2":
            res0.options[0].selected = true
            res1.options[0].selected = true
            res2.options[1].selected = true
            res3.options[1].selected = true
            res4.options[2].selected = true
            res5.options[2].selected = true
            res6.options[2].selected = true
            res7.options[2].selected = true
            break
        case "L8x3":
            res0.options[0].selected = true
            res1.options[0].selected = true
            res2.options[0].selected = true
            res3.options[1].selected = true
            res4.options[1].selected = true
            res5.options[1].selected = true
            res6.options[2].selected = true
            res7.options[2].selected = true
            break
        case "L8x4":
            res0.options[0].selected = true
            res1.options[0].selected = true
            res2.options[0].selected = true
            res3.options[0].selected = true
            res4.options[1].selected = true
            res5.options[1].selected = true
            res6.options[1].selected = true
            res7.options[1].selected = true
            break
        case "L8x8":
            res0.options[0].selected = true
            res1.options[0].selected = true
            res2.options[0].selected = true
            res3.options[0].selected = true
            res4.options[0].selected = true
            res5.options[0].selected = true
            res6.options[0].selected = true
            res7.options[0].selected = true
            break
        case "L8+L7":
            res0.options[0].selected = true
            res1.options[1].selected = true
            res2.options[1].selected = true
            res3.options[2].selected = true
            res4.options[2].selected = true
            res5.options[2].selected = true
            res6.options[2].selected = true
            res7.options[3].selected = true
            break
    }
    calculate()
}

var mod0 = document.getElementById("mod0")
var mod1 = document.getElementById("mod1")
var mod2 = document.getElementById("mod2")
var mod3 = document.getElementById("mod3")

function laPreset(btn){
    switch(btn){
        case "LAx2":
            mod0.options[2].selected = true
            mod1.options[2].selected = true
            mod2.options[6].selected = true
            mod3.options[6].selected = true
            break
        case "SBULx2":
            mod0.options[1].selected = true
            mod1.options[1].selected = true
            mod2.options[6].selected = true
            mod3.options[6].selected = true
            break
        case "LAx4":
            mod0.options[2].selected = true
            mod1.options[2].selected = true
            mod2.options[2].selected = true
            mod3.options[2].selected = true
            break
        case "SBULx4":
            mod0.options[1].selected = true
            mod1.options[1].selected = true
            mod2.options[1].selected = true
            mod3.options[1].selected = true
            break
        case "Reset":
            mod0.options[6].selected = true
            mod1.options[6].selected = true
            mod2.options[6].selected = true
            mod3.options[6].selected = true
            break
    }
    calculate()
}

function sortNumber(a,b) {
    return b - a
}

function calculate(){
    var resLvl = 
        Number(res0.options[res0.selectedIndex].value) +
        Number(res1.options[res1.selectedIndex].value) +
        Number(res2.options[res2.selectedIndex].value) +
        Number(res3.options[res3.selectedIndex].value) +
        Number(res4.options[res4.selectedIndex].value) +
        Number(res5.options[res5.selectedIndex].value) +
        Number(res6.options[res6.selectedIndex].value) +
        Number(res7.options[res7.selectedIndex].value)
    var la = new Array(4)
        la[0] = Number(mod0.options[mod0.selectedIndex].value)
        la[1] = Number(mod1.options[mod1.selectedIndex].value)
        la[2] = Number(mod2.options[mod2.selectedIndex].value)
        la[3] = Number(mod3.options[mod3.selectedIndex].value)
    la.sort(sortNumber)
    var laFactor = la[0] + la[1] / 4 + la[2] / 8 + la[3] / 8
    if (laFactor == 0) {
        laFactor = 1
    }
    if (resLvl > 0) {
        var range = parseInt(1.6 * Math.pow(resLvl/8 , 4) * laFactor) / 10
        document.getElementById("range").innerHTML = range
    }
}

document.addEventListener("change", calculate)