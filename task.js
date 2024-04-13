const progress = document.getElementById('progress');
document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            console.log(xhr.responseText)
        }
    })
    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            const percentComplete = (e.loaded / e.total);
            progress.value += percentComplete
        }
    })
    xhr.open('POST', document.forms[0].action, true)
    const formData = new FormData(document.forms[0])
    xhr.send(formData)
})