window.onload=function() {
    var url = window.location.pathname
    switch (true) {
        case url.includes('/search'):
            document.location = url.replace('/search', '/s')
            break
        case url.includes('/ambient'):
            document.location = url.replace('/ambient', '/sounds')
            break
        case url.includes('/tech/free_audio_plugins.html'):
        case url.includes('/tech/free_virtual_instruments.html'):
            document.location = url.replace('/tech', '/sounds')
            break
        case url.includes('px_pt_dp.html'):
            document.location = url.replace('px_pt_dp', 'css_width')
            break
    }
}