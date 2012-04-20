$.address.change(function (event) {
    console.log(event);
    //var url = 'http://substance.io' + event.value + '.html';
    var url = '.' + event.value + '.html';
    $.get(url, function (data) {
      $('#document').html(templates.document.render({html:data}));
    });
});

function render(settings) {
    var user = {
        posts: []
    };
    $('.header').html(templates.header.render(settings));

    user.posts.push({
        _id: 'debugging-native-modules',
        name: 'debugging-native-modules',
        creator: 'wearefractal',
        active: 'active',
        timeago: '2 days ago',
        title: 'Debugging native modules',
        lead: ''
    });
    $('#documents').html(templates.documents.render(user));

    $.get('http://substance.io/documents/' + settings.substance, function (data) {
        var path, post, _ref;
        _ref = data.graph;
        for (path in _ref) {
          post = _ref[path];
          user.posts.push(posts);
        }
        $('#documents').html(templates.documents.render(user));
    });
}

function teaser(str) {
    if (!str) return "";
    return str.length > 90 ? str.trim().substring(0, 89) + " ..." : str;
}