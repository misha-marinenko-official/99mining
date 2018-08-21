
$(function(){
    var f=$('iframe')
    f.load(function(){ 
        f.contents().find('body > div.nofification-sec').hide(); 
    })
})