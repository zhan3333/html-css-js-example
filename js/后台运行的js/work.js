var i = 0
function iCount() {
    i ++ 
    postMessage(i)
    setTimeout("iCount()", 500)
}
iCount()