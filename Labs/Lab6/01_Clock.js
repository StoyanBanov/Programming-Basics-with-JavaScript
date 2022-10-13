function clock() {
    for (let i = 0; i < 24 * 60; i++) {
        if(i < 60){
            if(i < 10){console.log(`00:0${i}`)}
            else{console.log(`00:${i}`);}
        }else{
            if(i / 60 < 10){
                if(i % 60 < 10){console.log(`0${Math.floor(i / 60)}:0${i % 60}`)}
                else{console.log(`0${Math.floor(i / 60)}:${i % 60}`);}
            }
            else{
                if(i % 60 < 10){console.log(`${Math.floor(i / 60)}:0${i % 60}`)}
                else{console.log(`${Math.floor(i / 60)}:${i % 60}`);}
            }
        }
    }
}

function clockFormattedToMatchTask() {
    for (let i = 0; i < 24 * 60; i++) {
        if(i < 60){
            console.log(`0:${i}`)
        }else{
            console.log(`${Math.floor(i / 60)}:${i % 60}`)
        }
    }
}

function clockWithNestedLoops() {
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            console.log(`${h}:${m}`);
        }
    }
}

clockWithNestedLoops()