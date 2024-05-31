var owner = "FARHAN-ISLAM"
var caption = "☆《HUMAIYUN SIR》☆"
exports.name = '/video/humaiyun';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/humaiyun.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();
        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            nayan: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}