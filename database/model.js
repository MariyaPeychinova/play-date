const db = require('./connection');

function getAllMeetupsData() {
    const selectMeetups = `
    SELECT * FROM meetups
    `;
    return db.query(selectMeetups)
    .then((res) => {
        return res.rows;
    });
}


module.exports = { getAllMeetupsData };