/* Token expires after 60 minutes. 
Get a new one at https://developer.spotify.com/web-api/console/get-search-item/ */

const token = 'BQDWTBUsRa9v24XAHR4q9oZrgCgd0bwa0-5o3bMeQvONKuijo1zOvprrL7yg-iHNo2axPEgrewguKODydtL-5HofJu9j33DnVONW4afsj5YUQRZkEroJndC2_pVKVOXd6MxY';

$('#submit').on('click', function(e) {
    e.stopImmediatePropagation();
    var artistUrl = 'https://api.spotify.com/v1/search?type=artist&query=' + $('#search').val();

    $.ajax({
            url: artistUrl,
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .done(function(oData) {

            $('#artistList').empty();
            $('#artistList').fadeIn();
            $('#titleRes').css('visibility', 'visible');

            console.log('SUCCESS!');
            console.log(oData);
            $('#artistList').css('visibility', 'visible');

            $('#artist-pic').attr('src', oData.artists.items[0].images[0].url);


            oData.artists.items.forEach(function(item) {
                $('#artistList').append('<option class="artistItem" value="https://api.spotify.com/v1/artists/' + item.id + '/albums">' + item.name + '</option>');
                return false;
            });

            $('#artistList').on('change', function(e) {
                e.stopImmediatePropagation();
                $('#albumList').empty();
                var albumUrl = this.value;

                $.ajax({
                        url: albumUrl,
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    })
                    .done(function(oData) {
                        console.log('SUCCESS!');
                        console.log(oData);
                        oData.items.forEach(function(item) {
                            $('#albumList').append('<div class="albumItem" data-id="' + item.id + '"><img class="album-pic" src="' + item.images[0].url + '"><h5 id="albumTitle">' + item.name + '</h5></div>');
                            return false;
                        });


                        $('.albumItem').on('click', function(e) {
                            e.stopImmediatePropagation();
                            $('#songsList').empty();
                            var title = $('#albumTitle').text();

                            $('.modal-title').text(title);

                            var songsUrl = 'https://api.spotify.com/v1/albums/' + $(this).attr('data-id') + '/tracks';


                            $.ajax({
                                    url: songsUrl,
                                    headers: {
                                        Authorization: 'Bearer ' + token
                                    }
                                })
                                .done(function(oData) {
                                    console.log('SUCCESS!');
                                    console.log(oData);
                                    oData.items.forEach(function(item) {
                                        $('#songsList').append('<li><a href="" class="song-item" data-id=' + item.id + '>' + item.name + '</a></li>');
                                        return false;
                                    });

                                    $('#myModal').modal('show');

                                        $('.song-item').on('click', function(e) {
                                            e.stopImmediatePropagation();
                                            console.log('song clicked');

                                            var themeUrl = 'https://api.spotify.com/v1/tracks/' + $(this).attr('data-id');
                                            
                                            $.ajax({
                                                    url: themeUrl,
                                                    headers: {
                                                        Authorization: 'Bearer ' + token
                                                    }
                                                })
                                                .done(function(oData) {
                                                    console.log('SUCCESS!');
                                                    console.log(oData);
                                                    window.open(oData.preview_url, 'player');
                                                    return false;
                                                    
                                                })
                                                .fail(function() {
                                                    console.log('FAIL!')
                                                })
                                                return false;
                                        });

                                })
                                .fail(function() {
                                    console.log('FAIL!')
                            })
                            return false;
                        })
                    })
                    .fail(function() {
                        console.log('FAIL!')
                    })
                    return false;
            });
        })
        .fail(function() {
            console.log('CONNECTION FAIL')
        });
        return false;
});