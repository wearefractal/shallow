function loadDocument(event) {
    var route = event.value ? event.value : event;
    var url = 'http://substance.io/' + route + '.html';
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
                var post = data.graph[path];
                if (path.indexOf('/user/') != 0) {
                    post.author = post.creator.split('/user/')[1];
                    post.timeago = prettyData(post.published_on);
                    user.posts.push(post);
                }
            }
        }
        $('#documents').html(templates.documents.render(user));
        if (user.posts.length > 0) {
            console.log(user.posts[0]);
            loadDocument(user.posts[0].author + '/' + user.posts[0].name);
        }
    });
}

function prettyDate(time){
    var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400);
            
    if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 31 )
        return;
            
    return day_diff == 0 && (
            diff < 60 && "just now" ||
            diff < 120 && "1 minute ago" ||
            diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
            diff < 7200 && "1 hour ago" ||
            diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago";
}