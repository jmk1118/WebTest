function onClickInfo(){
    var key = $('#key').val();

    $.ajax({
        method: "GET",
        type: "GET",
        url: 'https://public.api.nexon.com/openapi/maplestory/v1/cube-use-results',
        data: {
            count: 100,
            date: '2022-11-25',
            cursor: ''
        },
        beforeSend: function(xhr){
            xhr.setRequestHeader('Authorization', key);
        },
    }).done(function(msg){
        console.log(msg);
    });
}