window.onload=function() {
    var url = window.location.href
    switch (true) {
        case url.includes('/search'):
            document.location = url.replace('/search', '/s')
            break
        case url.includes('/ambient'):
            document.location = url.replace('/ambient', '/audio')
            break
        case url.includes('/tech/free_audio_plugins.html'):
            document.location = url.replace('/tech/free_audio_plugins.html', '/audio/free_audio_plugins.html')
            break
        case url.includes('/tech/free_virtual_instruments.html'):
            document.location = url.replace('/tech/free_virtual_instruments.html', '/audio/free_virtual_instruments.html')
            break
        case url.includes('px_pt_dp.html'):
            document.location = url.replace('px_pt_dp.html', 'css_width.html')
            break
    }
//    if (url.includes('/search')) {
//        document.location = url.replace('/search', '/s')
//    }
//    if (url.includes('/ambient')) {
//        document.location = url.replace('/ambient', '/audio')
//    }
//    if (url.includes('/tech/free_audio_plugins.html')) {
//        document.location = url.replace('/tech/free_audio_plugins.html', '/audio/free_audio_plugins.html')
//    }
//    if (url.includes('/tech/free_virtual_instruments.html')) {
//        document.location = url.replace('/tech/free_virtual_instruments.html', '/audio/free_virtual_instruments.html')
//    }
//    if (url.includes('px_pt_dp.html')) {
//        document.location = url.replace('px_pt_dp.html', 'css_width.html')
//    }
    
}