const readableDate = function(createdAtVal) {
    return new Date(createdAtVal).toLocaleString();
};
module.exports = readableDate;