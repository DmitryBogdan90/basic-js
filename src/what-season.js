module.exports = function getSeason(date) {
    if(!date) {
        return 'Unable to determine the time of year!';
    }

    if (!date.getTime()) {
        throw 'Error'
    }

    let month = date.getMonth();
    let season = '';
    switch (true) {
        case ((month >= 0 && month <= 1) || month === 11 ):
            season = 'winter';
            break;
        case (month >= 2 && month <= 4 ):
            season = 'spring';
            break;
        case (month >= 5 && month <= 7 ):
            season = 'summer';
            break;
        case (month >= 8 && month <= 10):
            season = 'autumn';
            break;
    }
    return season;
}
