function getResolution() {
    document.getElementById("pixelW").value = Math.round(window.screen.width * window.devicePixelRatio);
    document.getElementById("pixelH").value = Math.round(window.screen.height * window.devicePixelRatio);
}
window.onload = getResolution()

function calc() {
        
    var pixelW, pixelH, inchD    
    pixelW = document.getElementById("pixelW").value
    pixelH = document.getElementById("pixelH").value
    inchD = document.getElementById("inchD").value

    if (inchD != 0) {

        //calculate ppi & physical size
        
        var ppi, scaledPPI, mmW, mmH, equivPPI
        ppi = Math.sqrt(Math.pow(pixelW, 2) + Math.pow(pixelH, 2)) / inchD
        scaledPPI = Math.sqrt(Math.pow(window.screen.width, 2) + Math.pow(window.screen.height, 2)) / inchD
        mmW = pixelW / ppi * 25.4
        mmH = pixelH / ppi * 25.4
        if (document.getElementById("isPenTile").checked == false) {
            equivPPI = ppi
        }   else {
            equivPPI = ppi * Math.sqrt(2/3)
        }
        document.getElementById("cmW").innerHTML = "（" + Math.round(mmW) / 10 + " 厘米）"
        document.getElementById("cmH").innerHTML = "（" + Math.round(mmH) / 10  + " 厘米）"
        document.getElementById("cmD").innerHTML = "（" + Math.round(inchD * 25.4) / 10 + " 厘米）"
        document.getElementById("result").innerHTML = "PPI=" + Math.round(equivPPI)
        
        //calculate scale factors

        var mmShorter, scaleFacLgr, scaleFacMore, meterRetina, meterImmerse, meterMax
        if (parseFloat(mmW) <= parseFloat(mmH)) {
            mmShorter = mmW
        }   else {
            mmShorter = mmH
        }

        switch (true) {
        case mmShorter >= 40 && mmShorter < 90:         //Mobile Phone
            var phoneFactors = [/*240p*/0.75, /*320p*/1.0, /*480p*/1.5, /*576p,640p,720p*/2.0, /*720p,SurfaceDuo*/2.5, /*1080p*/2.625, /*1080p*/2.75, /*1080p,palm*/3.0, /*1440p*/3.5, /*1440p*/3.66, /*1440p*/4.0, /*2160p*/5.25, /*2160p*/5.5, /*2160p*/6.0]
            scaleFacLgr = roundToArray(ppi / 144, phoneFactors) * 100
            scaleFacMore = roundToArray(ppi / 160, phoneFactors) * 100
            break
        case mmShorter >= 90 && mmShorter < 135:        //7~9" Tab
            scaleFacLgr = Math.round(ppi / 132 * 4) * 25
            scaleFacMore = Math.round(ppi / 150 * 4) * 25
            break
        case mmShorter >= 135 && mmShorter < 155:       //10" Tab
            scaleFacLgr = Math.round(ppi / 128 * 4) * 25
            scaleFacMore = Math.round(ppi / 144 * 4) * 25
            break
        case mmShorter >= 155 && mmShorter < 245:       //Laptop
            scaleFacLgr = Math.round(ppi / 120 * 4) * 25
            scaleFacMore = Math.round(ppi / 135 * 4) * 25
            break
        case mmShorter >= 245 && mmShorter < 450:       //Desktop Monitor
            scaleFacLgr = Math.round(ppi / 96 * 4) * 25
            scaleFacMore = Math.round(ppi / 120 * 4) * 25
/*          meterRetina = 
            meterImmerse = 
            meterMAX = 
*/          break
        case mmShorter >= 450:                          //TV, Projector, IMAX...
            scaleFacMore = scaleFacLgr = 100
/*          meterRetina = 
            meterImmerse = 
            meterMAX = 
*/          break
        default:
            scaleFacMore = scaleFacLgr = 100
        }

        // this device section

        var isThisDevice = Math.abs(pixelW - Math.round(window.screen.width * window.devicePixelRatio)) + Math.abs(pixelH - Math.round(window.screen.height * window.devicePixelRatio))             // this will allow deviations
        if (  isThisDevice <= 2 ) {
            document.getElementById("cssRes").innerHTML = window.screen.width + "×" + window.screen.height
            var ua = navigator.userAgent
            switch (true) {
                case ua.includes('Windows NT 10'):
                case ua.includes('Windows NT 6.3'):
                case ua.includes('Windows NT 6.2'):
                case ua.includes('Windows NT 6.1'):
                    document.getElementById("officeScaleFac").innerHTML = Math.round(scaledPPI / 96 * 100) + "%"
                    document.getElementById("officeScale").style.cssText = "visibility:inherit;"
                    break
                default:
                    document.getElementById("officeScale").style.cssText = "visibility:hidden;"
            }
            document.getElementById("thisDevice").style.cssText = "visibility:visible;"
        }   else {
            document.getElementById("thisDevice").style.cssText = "visibility:hidden;"
        }

        // recommend seciton

        if (scaleFacLgr > 100) {                  //hidpi device
            document.getElementById("tooLow").innerHTML = ""
            
            if (scaleFacMore < 100) {
                scaleFacMore = 100
            }
            document.getElementById("scaleFacLgr").innerHTML = scaleFacLgr + "%"
            document.getElementById("scaleFacMore").innerHTML = scaleFacMore + "%"
            document.getElementById("resLgr").innerHTML = Math.round(pixelW / scaleFacLgr * 100) + "x" + Math.round(pixelH / scaleFacLgr * 100)
            document.getElementById("resMore").innerHTML = Math.round(pixelW / scaleFacMore * 100) + "x" + Math.round(pixelH / scaleFacMore * 100)
            
            document.getElementById("recommend").style.cssText = "visibility:visible;"

        }   else {                  //lowdpi device
            document.getElementById("recommend").style.cssText = "visibility:hidden;"
            switch (true) {          //dpi too low
            case ppi < 42 && mmShorter >= 450:
                document.getElementById("tooLow").innerHTML = "<br>建议拉远距离观看"
                break
            case ppi < 85 && mmShorter < 450:
                document.getElementById("tooLow").innerHTML = "<br>建议升级高分屏"
                break
            default:
                document.getElementById("tooLow").innerHTML = ""
            }
        }
    }   else {          //if diagonal size not set
        document.getElementById("recommend").style.cssText = "visibility:hidden;"
        document.getElementById("result").innerHTML = "请输入屏幕对角线长度"
    }
}

document.addEventListener("change", calc)

/*
  Thx to Gav & ncepuzs for the following function
  https://www.gavsblog.com/blog/find-closest-number-in-array-javascript
  https://meta.appinn.net/t/javascript/19118/3
*/

function roundToArray(needle, haystack) {
    return haystack.reduce((a, b) => {
        let aDiff = Math.abs(a - needle);
        let bDiff = Math.abs(b - needle);

        if (aDiff == bDiff) {
            return a > b ? a : b;
        } else {
            return bDiff < aDiff ? b : a;
        }
    });
}

if ('serviceWorker' in navigator) {
    // register service worker
    navigator.serviceWorker.register('ppi_calc_service-worker.js');
}