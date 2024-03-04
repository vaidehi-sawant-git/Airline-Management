function compareTime(timeString1,timeString2)
{
    const arr_time = new Date(timeString1);
    const dep_time = new Date(timeString2);
    return arr_time.getTime() > dep_time.getTime();
}

module.exports = {
    compareTime
}