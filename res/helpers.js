function loadDocument(event) {
    var route = event.value ? event.value : '/' + event;
    var url = 'http://substance.io' + route + '.html';
    //var url = '.' + route + '.html';
    $.get(url, function (data) {
        $('#document').html(templates.document.render({
            html: data
        }));
    });
}

$.address.change(loadDocument);

function render(settings) {
    var user = {
        posts: []
    };
    $('.header').html(templates.header.render(settings));
    $.get('http://substance.io/documents/' + settings.substance, function (data) {
        if (data.graph) {
            for (var path in data.graph) {
                if (path.indexOf('/user/') != 0) {
                    user.posts.push(data.graph[path]);
                }
            }
        }
        $('#documents').html(templates.documents.render(user));
        if (user.posts.length > 0) {
            console.log(user.posts[0]);
            loadDocument(user.posts[0].name);
        }
    });
}

function teaser(str) {
    if (!str) return "";
    return str.length > 90 ? str.trim().substring(0, 89) + " ..." : str;
}