
export function getTime(target) {
    // Verifica se foi passado um Date como parâmetro
    if (!(target instanceof Date)) {
        throw new Error('O parâmetro target deve ser uma instância de Date');
    }

    var now = new Date();
    
    var difference = target - now;

    if(difference > 0) {
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }
}

export function freeze() {
    while(true) {
        var time = new Date();
        var seconds = Math.floor((time % (1000 * 60)) / 1000);

        // Só finaliza o loop quando os milisegundos for igual a 0 (segundo completo)
        if(((time % (1000 * 60)) / 1000) == seconds)
            break;
    }
}

export function format(time) {
    let result = "";

    if (time.days > 0) {
        result += time.days.toString().padStart(2, '0') + ":";
    }
    if (time.hours > 0 || result.length > 0) {
        result += time.hours.toString().padStart(2, '0') + ":";
    }
    if (time.minutes > 0 || result.length > 0) {
        result += time.minutes.toString().padStart(2, '0') + ":";
    }
    result += time.seconds.toString().padStart(2, '0');
    return result;
}

export function getSecond(target) {
    // Verifica se foi passado um Date como parâmetro
    if (!(target instanceof Date)) {
        throw new Error('O parâmetro target deve ser uma instância de Date');
    }

    var now = new Date();
    
    var difference = target - now;

    return Math.floor(difference / 1000);
}