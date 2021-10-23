document.getElementById("upper-case").addEventListener("click", function() {
    document.getElementById("textarea").value = document.getElementById("textarea").value.toUpperCase();
})

document.getElementById("lower-case").addEventListener("click", function() {
    document.getElementById("textarea").value = document.getElementById("textarea").value.toLowerCase();
})

document.getElementById("proper-case").addEventListener("click", function() {
    let originalText = document.getElementById("textarea").value.toLowerCase();
    let originalArray = originalText.split(" ");
    let newArray = [];
    
    for (let i = 0; i < originalArray.length; i++) {
        let oldWord = originalArray[i];
        let newWord = oldWord[0].toUpperCase() + oldWord.slice(1);
        newArray.push(newWord);
    }
    let newText = newArray.join(" ");
    document.getElementById("textarea").value = newText;
})

document.getElementById("sentence-case").addEventListener("click", function() {
    let originalText = document.getElementById("textarea").value.toLowerCase();
    let originalArray = originalText.split(". ");
    let newArray = [];
    
    for (let i = 0; i < originalArray.length; i++) {
        let oldWord = originalArray[i];
        let newWord = oldWord[0].toUpperCase() + oldWord.slice(1);
        newArray.push(newWord);
    }
    let newText = newArray.join(". ");
    document.getElementById("textarea").value = newText;
})

document.getElementById("copy-button").addEventListener("click", function() {
    document.getElementById("textarea").select();
    let text = document.getElementById("textarea").value;
    navigator.clipboard.writeText(text);
})

document.getElementById("save-button").addEventListener("click", function() {
    let text = document.getElementById("textarea").value;
    let filename = text.slice(0, 10) + ".txt";
    download(filename, text);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }