$('.filter-btn').on('click', function(){
    let type = $(this).attr('id');
    let boxes = $('.calendario-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'seg-btn'){
        eachBoxes('seg', boxes)
    } else if(type == 'ter-btn'){
        eachBoxes('ter',boxes);
    }else if(type == 'qua-btn'){
        eachBoxes('qua',boxes);
    }else if(type == 'qui-btn'){
        eachBoxes('qui',boxes);
    }else if(type == 'sex-btn'){
        eachBoxes('sex',boxes);
    }else if(type == 'sab-btn'){
        eachBoxes('sab',boxes);
    }else if(type == 'dom-btn'){
        eachBoxes('dom',boxes);
    }else{
        eachBoxes('all',boxes);
    }
});
function eachBoxes(type, boxes){
    if(type == 'all') {
        $(boxes).fadeIn();
    }else {
        $(boxes).each(function(){
            if(!$(this).hasClass(type)) {
                $(this).fadeOut('slow');
            }else{
                $(this).fadeIn();
            }
        });
    }
}