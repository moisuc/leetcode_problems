function isPangram (sentence:string) :boolean {
    let letters = new Set<string>();

    for (let i = 0; i < sentence.length; i++){
        if (/^[a-zA-Z]/.test(sentence[i])) {
            letters.add(sentence[i].toLowerCase());
        }
    }

    if (letters.size == 27) {
        return true;
    }
    return false;

};
