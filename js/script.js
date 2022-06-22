function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=" + service;
}

function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}

function createRowOnemi(location, info, datetime, url) {
    return '<tr><td>' + location + '</td><td>' + info + '</td><td>' + datetime + '</td><td>' + url + '</td></tr>';
}