// function gameLtoJ(lahmu) {
    
// }

// function gameJtoL(japanese) {
    
// }

// const gameButton = document.getElementById("gameSubmit")
// gameButton.onclick = function() {
//     const lahmu = document.getElementById("gameLahmu");
//     const japanese = document.getElementById("gameJapanese");
//     if (lahmu.value !== "" && japanese.value !== "") {
//         return;
//     }
//     if (japanese.value === "") {
//         japanese.value = gameLtoJ(lahmu.value)
//     } else {
//         lahmu.value = gameJtoL(japanese.value)
//     }
// }

const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉっゃゅょ";

function animeLtoJ(lahmu) {
    let japanese = "";
    for (let i = 0; i < lahmu.length; i++) {
        japanese += hiragana.charAt(hiragana.indexOf(lahmu.charAt(i)) - 2);
    }
    return japanese;
}

function animeJtoL(japanese) {
    let lahmu = "";
    for (let i = 0; i < japanese.length; i++) {
        lahmu += hiragana.charAt(hiragana.indexOf(japanese.charAt(i)) + 2);
    }
    return lahmu;
}

const animeButton = document.getElementById("animeSubmit")
animeButton.onclick = function() {
    const lahmu = document.getElementById("animeLahmu");
    const japanese = document.getElementById("animeJapanese");
    if (lahmu.value !== "" && japanese.value !== "") {
        return;
    }
    if (japanese.value === "") {
        japanese.value = animeLtoJ(lahmu.value);
    } else {
        lahmu.value = animeJtoL(japanese.value);
    }
}