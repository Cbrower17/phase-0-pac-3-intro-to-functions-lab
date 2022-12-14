function shout(string){
    //todo
    return string.toUpperCase();
}

function whisper(string){
    //todo
    return string.toLowerCase();
}

function logShout(string){
    //todo
    console.log(string.toUpperCase());
}

function logWhisper(string){
    //todo
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if(string === "Let\'s have dinner together!"){
        return "I would love to!";
    } else if(string != string.toUpperCase() || string === string.toLowerCase()){
        return "I can\'t hear you!";
    } else if(string === string.toUpperCase()){
        return "YES INDEED!";
    }

}