// function gameLtoJ(lahmu) {
    
// }

// function gameJtoL(japanese) {
    
// }

// const gameButton = document.getElementById("gameSubmit");
// gameButton.onclick = () => {
//     const lahmu = document.getElementById("gameLahmu");
//     const japanese = document.getElementById("gameJapanese");
//     if (lahmu.value !== "" && japanese.value !== "") {
//         return;
//     }
//     if (japanese.value === "") {
//         japanese.value = gameLtoJ(lahmu.value);
//     } else {
//         lahmu.value = gameJtoL(japanese.value);
//     }
// }

const hiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";
const dakuon = "あいうえおがぎぐげござじずぜぞだぢづでどなにぬねのばびぶべぼまみむめもやゆよらりるれろわをん"
const handakuon = "あいうえおかきくけこさしすせそたちつてとなにぬねのぱぴぷぺぽまみむめもやゆよらりるれろわをん"
const small = "ぁぃぅぇぉかきくけこさしすせそたちってとなにぬねのはひふへほまみむめもゃゅょらりるれろわをん"

function animeLtoJ(lahmu) {
    let japanese = "";
    for (let i = 0; i < lahmu.length; i++) {
        let l = lahmu.charAt(i);
        let shift = (kind) => {
            let num = kind.indexOf(l) - 2;
            if (num < 0) num += kind.length;
            japanese += kind.charAt(num);
        }
        if (hiragana.indexOf(l) !== -1) {
            shift(hiragana);
        } else if (dakuon.indexOf(l) !== -1) {
            shift(dakuon);
        } else if (handakuon.indexOf(l) !== -1) {
            shift(handakuon);
        } else if (small.indexOf(l) !== -1) {
            shift(small);
        } else {
            japanese += " ";
        }
    }
    return japanese;
}

function animeJtoL(japanese) {
    let lahmu = "";
    for (let i = 0; i < japanese.length; i++) {
        let j = japanese.charAt(i);
        let shift = (kind) => {
            let num = kind.indexOf(j) + 2;
            if (num >= kind.length) num -= kind.length;
            lahmu += kind.charAt(num);
        }
        if (hiragana.indexOf(j) !== -1) {
            shift(hiragana);
        } else if (dakuon.indexOf(j) !== -1) {
            shift(dakuon);
        } else if (handakuon.indexOf(j) !== -1) {
            shift(handakuon);
        } else if (small.indexOf(j) !== -1) {
            shift(small);
        } else {
            lahmu += " ";
        }
    }
    return lahmu;
}

const animeButton = document.getElementById("animeSubmit");
animeButton.onclick = () => {
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

const animeLahmuResetButton = document.getElementById("animeLahmuReset");
animeLahmuResetButton.onclick = () => {
    document.getElementById("animeLahmu").value = "";
}

const animeJapaneseResetButton = document.getElementById("animeJapaneseReset");
animeJapaneseResetButton.onclick = () => {
    document.getElementById("animeJapanese").value = "";
}