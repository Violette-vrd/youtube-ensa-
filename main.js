(function(window, document){"use strict";function applyCustomUi(jQuery, sk_youtube_channel_videos){

    // show navigation and search
    jQuery('.container_sk_ww_search_youtube_channel_videos').show();

    // hide 'loading animation' image
    sk_youtube_channel_videos.find(".loading-img").hide();

    // container width
    sk_youtube_channel_videos.css({ 'width' : '100%' });
    var sk_youtube_channel_videos_width=sk_youtube_channel_videos.innerWidth();

    if(getDsmSetting(sk_youtube_channel_videos, "layout") == 3){
        sk_youtube_channel_videos_width = sk_youtube_channel_videos.find('.swiper-container').innerWidth() - 1;
        sk_youtube_channel_videos_width = sk_youtube_channel_videos_width - (sk_youtube_channel_videos_width % 1);
    }

    var column_count=sk_youtube_channel_videos.find('.column_count').text();
    if(
        /* smartphones, iPhone, portrait 480x320 phones */
        sk_youtube_channel_videos_width<=320 ||

        /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
        sk_youtube_channel_videos_width<=481 ||

        /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
        sk_youtube_channel_videos_width<=641
    ){
        column_count=1;
    }

    var arrow_background_color = getDsmSetting(sk_youtube_channel_videos, "arrow_background_color");
    var arrow_color = getDsmSetting(sk_youtube_channel_videos, "arrow_color");
    var arrow_opacity = getDsmSetting(sk_youtube_channel_videos, "arrow_opacity");

    var css = ".mfp-arrow-right:before { border-left: 27px solid "+arrow_background_color+" !important; }";
    css+=".fp-arrow-right:before {border-left: 27px solid "+arrow_background_color+" !important;}.mfp-arrow:after {border-top-width: 13px;border-bottom-width: 13px;top: 8px;}";
    css+=".mfp-arrow-right:after {opacity: "+arrow_opacity+"; border-left: 17px solid "+arrow_color+" !important;margin-left: 39px!important;}";
    css+=".mfp-arrow-left:after {opacity: "+arrow_opacity+"; border-right: 17px solid "+arrow_color+" !important;margin-left: 31px!important;}";
    css+=".mfp-arrow-left:before {margin-left: 25px!important;border-right: 27px solid "+arrow_background_color+" !important;}";
    css+=".swiper-button-prev, .swiper-button-next{border: none !important;}";
    
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    // size settings
    var border_size=0;
    var background_color=sk_youtube_channel_videos.find('.details_bg_color').text();
    var space_between_images=sk_youtube_channel_videos.find('.space_between_images').text();
    var margin_between_images=parseFloat(space_between_images).toFixed(2) / 2;

    var total_space_between_images=parseFloat(space_between_images).toFixed(2)*(parseFloat(column_count));
    var pic_width=(parseFloat(sk_youtube_channel_videos_width).toFixed(2)-parseFloat(total_space_between_images).toFixed(2)) / parseFloat(column_count).toFixed(2);

    var sk_ig_all_posts_minus_spaces=parseFloat(sk_youtube_channel_videos_width).toFixed(2)-parseFloat(total_space_between_images).toFixed(2);
    var bottom_button_container_width=parseFloat(sk_youtube_channel_videos_width).toFixed(2)-(parseFloat(space_between_images).toFixed(2)*2);
    var bottom_button_width=parseFloat(sk_youtube_channel_videos_width).toFixed(2) / parseFloat(2).toFixed(2);

    // font & color settings
    var font_family=sk_youtube_channel_videos.find('.font_family').text();
    var details_bg_color=sk_youtube_channel_videos.find('.details_bg_color').text();
    var details_font_color=sk_youtube_channel_videos.find('.details_font_color').text();
    var details_link_color=sk_youtube_channel_videos.find('.details_link_color').text();
    var details_link_hover_color=sk_youtube_channel_videos.find('.details_link_hover_color').text();
    var button_bg_color=sk_youtube_channel_videos.find('.button_bg_color').text();
    var button_text_color=sk_youtube_channel_videos.find('.button_text_color').text();
    var button_hover_bg_color=sk_youtube_channel_videos.find('.button_hover_bg_color').text();
    var button_hover_text_color=sk_youtube_channel_videos.find('.button_hover_text_color').text();
    var post_item_type=sk_youtube_channel_videos.find('.post_item_type').text();
    var show_pop_up=sk_youtube_channel_videos.find('.show_pop_up').text();

    // resize the actual image as well
    /*
    sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item .sk-yt-post-img').css({
        'width' : pic_width + 'px'
    });
    */

    // video item
    var pic_height=(parseFloat(pic_width) / parseFloat(2)) + parseFloat(20);
    sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item').css({
        'width' : pic_width + 'px',
        'margin' : margin_between_images + 'px',
        'background-color' : background_color,
        'padding' : border_size,
    });
    sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item-content').css({
        'width' : pic_width + 'px',
        // 'margin' : margin_between_images + 'px',
        'background-color' : background_color,
        'padding' : border_size,
        'height' : pic_height + 'px'
    });

    // resize inline youtube video
    sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item .sk_inline_youtube_player').css({
        'width' : pic_width + 'px',
        'height' : pic_height + 'px'
    });

    // hover
    sk_youtube_channel_videos.find('.sk-yt-post-hover').css({
        'width' : pic_width + 'px',
        'margin' : 0,
        'padding' : 0,
        'height' : pic_height + 'px'
    });
    if(post_item_type == 0){
        // hover

        
        sk_youtube_channel_videos.find('.sk-ww-yt-video-info').css({
            // 'display' : 'none',
            'position' : 'absolute',
            'opacity' : 0.4,
            'background' : 'transparent',
            'z-index' :  '999',
            'width' : pic_width + 'px',
            'margin' : 0,
            'top' : 0,
            'height' : pic_height + 'px'
        });


        sk_youtube_channel_videos.find('.sk-ww-yt-description').css({
            'padding-right' : '10px'
            
        });
        
        sk_youtube_channel_videos.find('.sk-ww-yt-title,.sk-ww-yt-description').css({
            'padding' : '0px 10px'
        });

        sk_youtube_channel_videos.find('.sk-ww-yt-date,.sk-yt-likes-comments').css({
            'padding' : '10px'
        });
         
    }
    else{
        sk_youtube_channel_videos.find('.sk-ww-yt-title').css({
            'padding' : '4px 2px'
        });

        sk_youtube_channel_videos.find('.sk-ww-yt-date,.sk-yt-likes-comments').css({
            'padding' : '4px 2px',

        });

        sk_youtube_channel_videos.find('.sk-yt-actual-title').hide();
        sk_youtube_channel_videos.find('.sk-yt-title').css('background','none');
    }


    sk_youtube_channel_videos.find('.sk-ww-yt-description').addClass('limit-two-lines');
    sk_youtube_channel_videos.find('.sk-ww-yt-title').addClass('limit-one-line');
    sk_youtube_channel_videos.find('.limit-one-line,.limit-two-lines').css({
        'width' : pic_width - 15 +"px"
    });

    // apply font family
    sk_youtube_channel_videos.css({
        'font-family' : font_family,
        'background-color' : details_bg_color,
        'width' : sk_youtube_channel_videos_width
    });

    // pop up settings
    jQuery('.sk-pop-yt-post').css({
        'font-family' : font_family
    });

    applyPopUpColors(sk_youtube_channel_videos);

    // details
    sk_youtube_channel_videos.find('.youtube-user-root-container').css({
        'color' : details_font_color
    });

    
    // details link
    sk_youtube_channel_videos.find('.youtube-user-root-container a').css({
        'color' : details_link_color
    });

    $(".youtube-user-root-container a").mouseover(function() {
        $(this).css({'color' : details_link_hover_color});
    }).mouseout(function() {
        $(this).css({'color' : details_link_color});
    });

    $(".sk-ww-yt-video-info").click(function () {
        var clicked_element = this;
        $(clicked_element).find('.fa-youtube-play').addClass("fa fa-spinner fa-pulse fa-1x fa-fw stats_loading");
        $(clicked_element).find('.fa-youtube-play').removeClass("fa-youtube-play");
    });

    // buttons
    sk_youtube_channel_videos.find(".sk-yt-load-more-posts").css({
        'margin-bottom' : 8 + 'px'
    });

    sk_youtube_channel_videos.find(".youtube-user-container, .sk-yt-load-more-posts, .sk-yt-bottom-follow-btn")
        .css({
            'background-color' : button_bg_color,
            'border-color' : button_bg_color,
            'color' : button_text_color
        });

    $(".more-desc").click(function () {
        var el = this;
        if(el.innerText == "SHOW MORE"){
            el.innerText = "SHOW LESS";
            $(".complete-desc").css({'display':'block'});
        }
        else{
            el.innerText = "SHOW MORE";
            $(".complete-desc").css({'display':'none'});
        }
    });

    sk_youtube_channel_videos.find(".youtube-user-container, .sk-yt-load-more-posts, .sk-yt-bottom-follow-btn")
    .mouseover(function(){
        $(this).css({
            'background-color' : button_hover_bg_color,
            'border-color' : button_hover_bg_color,
            'color' : button_hover_text_color
        });
    }).mouseout(function(){
        $(this).css({
            'background-color' : button_bg_color,
            'border-color' : button_bg_color,
            'color' : button_text_color
        });
    });

    // bottom buttons container
    var padding_sk_ig_bottom_btn_container=margin_between_images;
    if(padding_sk_ig_bottom_btn_container==0){
        padding_sk_ig_bottom_btn_container=5;
    }
    sk_youtube_channel_videos.find(".sk-yt-bottom-btn-container").css({
        'padding' : padding_sk_ig_bottom_btn_container + 'px'
    });

    jQuery(".sk_yt_channel_feed_videowrapper, .sk_youtube_channel_player, .mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post")
        .mouseover(function(){
            jQuery(".mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post").attr("style", "opacity: 1 !important;");
    }).mouseout(function(){
            jQuery(".mfp-close, .prev_sk_yt_channel_post, .next_sk_yt_channel_post").attr("style", "opacity: 1 !important;");
    });

    jQuery(".sk-ww-yt-video-info")
        .mouseover(function(){
            $(this).css({
                // 'display' : 'none',
                'position' : 'absolute',
                'opacity' : 1,
                'background' : 'transparent',
                'z-index' :  '999',
                'width' : pic_width + 'px',
                'margin' : 0,
                'top' : 0,
                'height' : pic_height + 'px',
                'transition': '0.3s',
                'color' : '#fff'
            });
    }).mouseout(function(){
        $(this).css({
            // 'display' : 'none',
            'position' : 'absolute',
            'opacity' : 0.4,
            'background' : 'transparent',
            'z-index' :  '999',
            'width' : pic_width + 'px',
            'margin' : 0,
            'top' : 0,
            'height' : pic_height + 'px',
            'transition': '0.3s',
            'color' : '#fff'
        });
    });

    // watermark css
    jQuery('.sk_powered_by a').css({
        'background-color' : details_bg_color,
        'color' : details_font_color,
        'font-size' : getDsmSetting(sk_youtube_channel_videos, "details_font_size"),
    });
    
    // .sk-fb-event-item
    sk_youtube_channel_videos.find('.sk-fb-event-item, .sk_powered_by').css({ 'margin-bottom' : getDsmSetting(sk_youtube_channel_videos, "space_between_events") + 'px' });
    
    if(getDsmSetting(sk_youtube_channel_videos, "layout") == 3){
        skLayoutSliderArrowUI(sk_youtube_channel_videos);

        setTimeout(function(){
            skLayoutSliderArrowUI(sk_youtube_channel_videos,"block");
        },100);

        setTimeout(function(){
            skLayoutSliderArrowUI(sk_youtube_channel_videos,"block");
        },300);
    } 
        

    // custom css
    jQuery('head').append('<style type="text/css">' + getDsmSetting(sk_youtube_channel_videos, "custom_css")  + '</style>');

    makeResponsive(jQuery, sk_youtube_channel_videos)

}

function applyPopUpColors(popup_container){

    var pop_up_bg_color = popup_container.find('.pop_up_bg_color').text();
    var pop_up_font_color = popup_container.find('.pop_up_font_color').text();
    var pop_up_link_color = popup_container.find('.pop_up_link_color').text();
    popup_container.find('.sk_youtube_channel_popup_container').css({
        'color': pop_up_font_color,
        'background': pop_up_bg_color
    })

    $('.sk-yt-pop-up-content').css({
        'color': pop_up_font_color,
        'background': pop_up_bg_color
    });

    $('.sk-yt-pop-up-content a').css({
        'color': pop_up_link_color
    });
}function loadBioInformation(sk_youtube_channel_videos,data, search_keyword){

// settings
var show_profile_picture=sk_youtube_channel_videos.find('.show_profile_picture').text();
var show_profile_follow_button=sk_youtube_channel_videos.find('.show_profile_follow_button').text();
var show_profile_posts_count=sk_youtube_channel_videos.find('.show_profile_posts_count').text();
var show_profile_follower_count=sk_youtube_channel_videos.find('.show_profile_follower_count').text();
var show_profile_following_count=sk_youtube_channel_videos.find('.show_profile_following_count').text();
var show_profile_name=sk_youtube_channel_videos.find('.show_profile_name').text();
var show_profile_description=sk_youtube_channel_videos.find('.show_profile_description').text();
var show_search_box=sk_youtube_channel_videos.find('.show_search_box').text();

// text settings
var videos_text=sk_youtube_channel_videos.find('.videos_text').text();
var subscribers_text=sk_youtube_channel_videos.find('.subscribers_text').text();
var views_text=sk_youtube_channel_videos.find('.views_text').text();
var subscribe_text=sk_youtube_channel_videos.find('.subscribe_text').text();
var use_youtube_channel_id=sk_youtube_channel_videos.find('.use_youtube_channel_id').text();

var post_items = "";

// this will be used in popup

post_items+="<input type='hidden' id='profile_img_hidden' value='"+data.bio.thumbnail+"'>";
post_items+="<input type='hidden' id='subs_count_hidden' value='"+data.bio.subscriber_count+"'>";

if(
    show_search_box == 0 && show_profile_picture==0 && show_profile_follow_button==0
    && show_profile_posts_count==0  && show_profile_follower_count==0 && show_profile_following_count==0
    && show_profile_name==0 && show_profile_description==0 
){
    // do not display buttons
} 
else {
    post_items+="<div class='content_container_sk_ww_youtube_channel_videos'>";
    

    post_items+="<div class='youtube-user-root-container'>";
        if(show_search_box == 1){
            // search box
            post_items+="<div class='container_sk_ww_search_youtube_channel_videos pull-right'>";
                post_items+="<div class='container_sk_ww_input_and_icon'>";
                    post_items+="<form class='sk_ww_search_youtube_channel_videos_form'>";
                        post_items+="<input type='text' class='sk_ww_search_youtube_channel_videos' placeholder='Search...' value=\"" + search_keyword + "\"/>";
                        post_items+="<i class='fa fa-search sk_ww_search_icon' aria-hidden='true'></i>";
                    post_items+="</form>";
                post_items+="</div>";
            post_items+="</div>";
        }
        
        if(show_profile_picture==1){
            post_items+="<div class='youtube-profile-pic' id='yt-prof-pic' data-embed='" + data.bio.embed_id + "' data-id='" + data.bio.id + "' style='background-image:url(" + data.bio.thumbnail + ");'></div>";
        }
        post_items+="<div class='sk-yt-profile-info'>";
            post_items+="<div>";
                if(show_profile_name==1){
                    post_items+="<span class='sk-yt-profile-usename'>" + data.bio.title + "</span>";
                }

                if(show_profile_follow_button==1){
                    if(use_youtube_channel_id=="1"){
                        post_items+="<button type='button' onclick=\"window.open('https://www.youtube.com/channel/" + data.bio.username + "?sub_confirmation=1');\" class='youtube-user-container'>";
                    }else{
                        post_items+="<button type='button' onclick=\"window.open('https://www.youtube.com/user/" + data.bio.username + "?sub_confirmation=1');\" class='youtube-user-container'>";
                    }
                        post_items+="<i class='fa fa-youtube-play' aria-hidden='true'></i> " + subscribe_text;
                    post_items+="</button>";
                }
            post_items+="</div>";
            post_items+="<div class='sk-yt-profile-counts'>";

                if(show_profile_posts_count==1){
                    post_items+="<span class='sk-yt-profile-count-item'><span class='f-w-b'>" + data.bio.video_count + "</span> " + videos_text + "</span>";
                }

                if(show_profile_follower_count==1){
                    post_items+="<span class='sk-yt-profile-count-item'><span class='f-w-b'>" + data.bio.subscriber_count + "</span> " + subscribers_text + "</span>";
                }

                if(show_profile_following_count==1){
                    post_items+="<span class='sk-yt-profile-count-item'><span class='f-w-b'>" + data.bio.view_count + "</span> " + views_text + "</span>";
                }
            post_items+="</div>";
            post_items+="<div>";

                if(show_profile_description==1){
                    post_items+=" <div class='sk-yt-channel-description display-default' >" + data.bio.description + "</div> ";
                }

            post_items+="</div>";
        post_items+="</div>";
    post_items+="</div>";
    
}

return post_items;
}


function loadYouTubeChannelVideos(jQuery, sk_youtube_channel_videos){

var embed_id = getDsmEmbedId(sk_youtube_channel_videos);
var json_url=app_url + "embed/youtube-channel-videos/widget_feed_json.php?embed_id=" + embed_id;

var search_keyword = sk_youtube_channel_videos.find(".sk_ww_search_youtube_channel_videos").val();
if(search_keyword!="" && search_keyword!=undefined){
    json_url=app_url + "embed/youtube-channel-videos/widget_feed_search_json.php?embed_id=" + embed_id + "&search=" + search_keyword;
}

// do not display undefined
else{ search_keyword=""; }

// settings
var show_load_more_button=sk_youtube_channel_videos.find('.show_load_more_button').text();
var show_bottom_follow_button=sk_youtube_channel_videos.find('.show_bottom_follow_button').text();
var post_count=sk_youtube_channel_videos.find('.post_count').text();

// text settings
var subscribe_text=sk_youtube_channel_videos.find('.subscribe_text').text();
var load_more_videos_text=sk_youtube_channel_videos.find('.load_more_videos_text').text();
var use_youtube_channel_id=sk_youtube_channel_videos.find('.use_youtube_channel_id').text();

// get events
fetch(json_url, { method: 'get' })
.then(function(response) {
    response.json().then(function(data) {
        
        sk_youtube_channel_videos.find('.content_container_sk_ww_youtube_channel_videos').remove();
        jQuery('.sk-yt-all-posts,.sk-yt-bottom-btn-container').html('');

        if(data.message=='load failed'){

            var sk_error_message= errorMessage();

            sk_youtube_channel_videos.find(".first_loading_animation").hide();
            sk_youtube_channel_videos.append(sk_error_message);

        }
        else{

            var post_items="";

            post_items+= loadBioInformation(sk_youtube_channel_videos,data,search_keyword);

            post_items+="<div class='sk-yt-all-posts'>";
                var item_counter=1;
    
                jQuery.each(data.posts, function(key, val){

                    post_items+=item_counter<=post_count
                        ? "<span class='sk-yt-post-item-holder'>"
                        : "<span class='sk-yt-post-item-holder display-none'>";
                        post_items+=getFeedItem(val, sk_youtube_channel_videos);
                    post_items+="</span>";

                    item_counter++;

                    var time_out = item_counter * 100;
                    
                    // request
                    setTimeout(
                        function() {
                            displayDuration(sk_youtube_channel_videos, val.id);
                    }, time_out);
                    
                });
            post_items+="</div>";



            if(show_load_more_button==0 && show_bottom_follow_button==0){
                // do not display buttons
            }
            else{
                post_items+="<div class='sk-yt-bottom-btn-container'>";
                    if(show_load_more_button==1 && (data.page_info.next_page_url!="" || item_counter>post_count)){
                        post_items+="<button type='button' class='sk-yt-load-more-posts'>" + load_more_videos_text + "</button>";
                    }

                    if(show_bottom_follow_button==1){

                        if(use_youtube_channel_id=="1"){
                            post_items+="<button type='button' class='sk-yt-bottom-follow-btn' onclick=\"window.open('https://www.youtube.com/channel/" + data.bio.username + "?sub_confirmation=1');\">";
                        }else{
                            post_items+="<button type='button' class='sk-yt-bottom-follow-btn' onclick=\"window.open('https://www.youtube.com/user/" + data.bio.username + "?sub_confirmation=1');\">";
                        }
                            post_items+="<i class='fa fa-youtube-play' aria-hidden='true'></i> " + subscribe_text;
                        post_items+="</button>";
                    }
                post_items+="</div>";
            }

            post_items+="<div class='sk-yt-next-page display-none'>" + data.page_info.next_page_url + "</div>";
        
            if(getDsmSetting(sk_youtube_channel_videos, "show_sociablekit_branding") == 1){
                post_items += getSociableKITBranding(sk_youtube_channel_videos, "YouTube channel <i class='fa fa-bolt'></i> by SociableKIT", "youtube channel");
            }
                
            post_items+="</div>";

            sk_youtube_channel_videos.append(post_items);
            applyCustomUi(jQuery, sk_youtube_channel_videos);
        }
    });
})
.catch(function(err) {
    console.log('GETTING IG FEEDS RETURN ERROR!');
    console.log(err);
});

}

function errorMessage(){
var sk_error_message="";
sk_error_message+="<ul class='sk_error_message'>";
    sk_error_message+="<li>Unable to load YouTube channel.</li>";
    sk_error_message+="<li>Make sure your <a href='https://www.sociablekit.com/find-youtube-channel-id/' target='_blank'>YouTube Channel ID</a> or <a href='https://www.sociablekit.com/find-youtube-channel-custom-name/' target='_blanke'>YouTube Custom Name</a> is correct.</li>";
    sk_error_message+="<li>Make sure your YouTube channel is public.</li>";
    sk_error_message+="<li>If you need help, <a href='https://www.sociablekit.com/support' target='_blank'>contact support here</a>.</li>";
sk_error_message+="</ul>";

return sk_error_message;
}

function getFeedItem(val, sk_youtube_channel_videos){
var details_font_color=sk_youtube_channel_videos.find('.details_font_color').text();
var thumbnail_size = sk_youtube_channel_videos.find('.thumbnail_size').text();
var show_pop_up = sk_youtube_channel_videos.find('.show_pop_up').text();
var post_item_type = sk_youtube_channel_videos.find('.post_item_type').text();
var show_post_date = sk_youtube_channel_videos.find('.show_post_date').text();
var show_post_title = sk_youtube_channel_videos.find('.show_post_title').text();
var show_post_hover = sk_youtube_channel_videos.find('.show_post_hover').text();
var show_duration = sk_youtube_channel_videos.find('.show_duration').text();

var embed_id=getDsmEmbedId(sk_youtube_channel_videos);

var post_items="";

post_items+="<div class='sk-ww-youtube-channel-videos-item' data-id='" + val.id + "'>";
    // post_items+="<div class='sk-ww-youtube-channel-videos-item-content'>";
        post_items+="<div class='sk-ww-youtube-channel-videos-item-content' data-id='" + val.id + "' style='background-image: url(" + val.thumbnail + ");'>";
            if(show_pop_up==0){
                post_items+="<iframe class='sk_inline_youtube_player' width='853' height='480' src='https://www.youtube.com/embed/" + val.id + "?showinfo=1&autoplay=0&enablejsapi=1' frameborder='0' allowfullscreen></iframe>";
            }

            post_items+="<div class='sk-yt-post-hover' data-video-id='" + val.id + "'>";

                /*
                if(show_duration == 1)
                    post_items+="<span class='sk-yt-duration' id='sk_yt_channel_vid_duration_" + val.id + "'>0:00</span> ";
                */
               
            post_items+="</div>";
        post_items+="</div>";

        if(show_post_title == 1)
            post_items+="<div style='color: "+details_font_color+"' class='sk-yt-actual-title'>" + encodeHtmlSpecialCharacter(val.title) + "</div>";

        if((show_pop_up == 1 || post_item_type == 1) && show_post_hover == 1){
            post_items+='<div style="text-align: center; font-size: 60px; color: white;" data-video-id="'+val.id+'" class="sk-ww-yt-video-info sk-ww-yt-video-info-'+val.id+'">';

            post_items+='<i style="position: relative; top: calc(50% - 35px);" class="fa fa-youtube-play"></i></div>';
        }
    
post_items+="</div>"; // END sk-ww-youtube-channel-videos-item
 

return post_items;
}// Localize jQuery variables
// var jQuery, $ = window.jQuery;
var app_url=getDsmAppUrl();

// loading animation
var el = document.getElementsByClassName('sk-ww-youtube-channel-videos')[0];
if(el==undefined){
    var el = document.getElementsByClassName('dsm-ww-youtube-channel-videos')[0];
    el.className = "sk-ww-youtube-channel-videos";
}

el.innerHTML = "<div class='first_loading_animation' style='text-align:center; width:100%;'><img src='" + app_url + "images/ripple.svg' class='loading-img' style='width:auto !important;' /></div>";

/// load css
loadCssFile(app_url + "libs/js/swiper/swiper.min.css");
loadCssFile(app_url + "libs/js/swiper/swiper.css?v=ranndomchars");

loadCssFile(app_url + "embed/libs/js/magnific-popup/magnific-popup.css");
loadCssFile(app_url + "embed/youtube-channel-videos/widget_css.php");
loadCssFile("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !=='2.1.1') {
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type","text/javascript");
    script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js");
    if (script_tag.readyState) {
      script_tag.onreadystatechange = function () { // For old versions of IE
          if (this.readyState == 'complete' || this.readyState == 'loaded') {
              scriptLoadHandler();
          }
      };
    } else {
      script_tag.onload = scriptLoadHandler;
    }
    // Try to find the head, otherwise default to the documentElement
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
    // The jQuery version on the window is the one we want to use
    jQuery = window.jQuery;
    scriptLoadHandler();
}

function loadScript(url, callback){

    /* Load script from url and calls callback once it's loaded */
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", url);

    if (typeof callback !== "undefined") {
        if (scriptTag.readyState) {
            /* For old versions of IE */
            scriptTag.onreadystatechange = function(){
                if (this.readyState === 'complete' || this.readyState === 'loaded') {
                    callback();
                }
            };
        } else {
            scriptTag.onload = callback;
        }
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {

    loadScript(app_url + "embed/libs/js/magnific-popup/jquery.magnific-popup.js", function(){
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        $ = jQuery = window.jQuery.noConflict(true);

        // initialize pop up plugin
        initManificPopupPlugin(jQuery);

        // Call our main function
        loadSliderJs();
    });

}

function loadSliderJs(){

  var script = document.createElement("SCRIPT");
  script.setAttribute("src",app_url + "libs/js/swiper/swiper.min.js");
  script.setAttribute("type","text/javascript");
  script.onload = function() {
      main();

  };
  document.getElementsByTagName("head")[0].appendChild(script);
}

// load css file
function loadCssFile(filename){

    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);

    if(typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}function showDsmYouTubeChannelFeedPopUp(jQuery, content_src, clicked_element){
    var sk_youtube_channel_videos = jQuery(clicked_element).closest('.sk-ww-youtube-channel-videos');
    var show_pop_up_on_middle= sk_youtube_channel_videos.find('.show_pop_up_on_middle').text();
    var clicked_element_pos=jQuery(clicked_element).offset().top;
    var relative_pos=clicked_element_pos - jQuery(window).scrollTop() - 200;

    applyPopUpColors(sk_youtube_channel_videos);
    
    if(typeof jQuery.magnificPopup === "undefined")
        initManificPopupPlugin(jQuery);
    if(chosen_video == true)
    setTimeout(function(){
        jQuery.magnificPopup.open({
            items: { src: content_src },
            'type' : 'inline',
            callbacks: {
                open: function() {

                    // play video
                    if(jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0)!==undefined){
                        jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0).play();
                    }
                },
                close: function() {

                    // stop playing video
                    clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html("");

                    clicked_element.find('.fa-spinner').addClass("fa fa-youtube-play");
                    clicked_element.find('.fa-spinner').removeClass("fa-spinner fa-pulse fa-1x fa-fw stats_loading");

                }
            }
        });
    },1000);
    else{
        jQuery.magnificPopup.open({
            items: { src: content_src },
            'type' : 'inline',
            callbacks: {
                open: function() {

                    // play video
                    if(jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0)!==undefined){
                        jQuery('.mfp-content .sk_yt_channel_feed_videowrapper video').get(0).play();
                    }
                },
                close: function() {

                    // stop playing video
                    clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html("");

                    clicked_element.find('.fa-spinner').addClass("fa fa-youtube-play");
                    clicked_element.find('.fa-spinner').removeClass("fa-spinner fa-pulse fa-1x fa-fw stats_loading");

                }
            }
        });
    }

}

function hidePopUp(){
    if(jQuery.magnificPopup){
      jQuery.magnificPopup.close();
    }
}

function showSharePopup(jQuery, clicked_element, sk_facebook_feed){
    if(typeof jQuery.magnificPopup === "undefined")
        initManificPopupPlugin(jQuery);
    var post_to_share = clicked_element.attr('post-to-share');

    jQuery.magnificPopup.open({
        items: 
        {
            src: "<div style='width: 280px !important; padding: 30px; background-color: white !important;' class='white-popup'><h3 style='margin-top: 0px; text-align: center;'>Share this post</h3><div style='text-align: center;'><a class='fb-sharer-link fa fa-facebook-official' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u="+post_to_share+"'> Share on Facebook</a></div><div style='text-align: center;'><a target='_blank' href='https://twitter.com/share?url="+post_to_share+"' class='twitter-sharer-link fa fa-twitter'> Share on Twitter</a></div></div>",
            type: 'inline'
        },
        'type' : 'inline',
        callbacks: {
            open: function() {

            },
            close: function(){
                
            }
        }
    });

}// make widget responsive
function makeResponsive(jQuery, sk_youtube_channel_videos){

    var sk_youtube_channel_videos_width = sk_youtube_channel_videos.width();

    /* smartphones, iPhone, portrait 480x320 phones */
    if(sk_youtube_channel_videos_width<=320){

    }

    /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
    else if(sk_youtube_channel_videos_width<=481){

    }

    /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
    else if(sk_youtube_channel_videos_width<=641){

    }

    /* tablet, landscape iPad, lo-res laptops ands desktops */
    else if(sk_youtube_channel_videos_width<=961){

    }

    /* big landscape tablets, laptops, and desktops */
    else if(sk_youtube_channel_videos_width<=1025){

    }

    /* hi-res laptops and desktops */
    else if(sk_youtube_channel_videos_width<=1281){

    }

    /* wider screen */
    else if(sk_youtube_channel_videos_width>1281){

    }
}
function loadYouTubeChannelVideosSliderLayout(jQuery, sk_youtube_channel_videos){

    var embed_id = getDsmEmbedId(sk_youtube_channel_videos);
    var json_url=app_url + "embed/youtube-channel-videos/widget_feed_json.php?embed_id=" + embed_id;

    var search_keyword = sk_youtube_channel_videos.find(".sk_ww_search_youtube_channel_videos").val();
    if(search_keyword!="" && search_keyword!=undefined){
        json_url=app_url + "embed/youtube-channel-videos/widget_feed_search_json.php?embed_id=" + embed_id + "&search=" + search_keyword;
    }

    // do not display undefined
    else{ search_keyword=""; }

    // settings
    var show_load_more_button=sk_youtube_channel_videos.find('.show_load_more_button').text();
    var show_bottom_follow_button=sk_youtube_channel_videos.find('.show_bottom_follow_button').text();
    var post_count=sk_youtube_channel_videos.find('.post_count').text();

    // text settings
    var subscribe_text=sk_youtube_channel_videos.find('.subscribe_text').text();
    var load_more_videos_text=sk_youtube_channel_videos.find('.load_more_videos_text').text();
    var use_youtube_channel_id=sk_youtube_channel_videos.find('.use_youtube_channel_id').text();

    // get events
    fetch(json_url, { method: 'get' })
    .then(function(response) {
        response.json().then(function(data) {
            
            sk_youtube_channel_videos.find('.content_container_sk_ww_youtube_channel_videos').remove();
            jQuery('.sk-yt-all-posts,.sk-yt-bottom-btn-container').html('');

            if(data.message=='load failed'){

                var sk_error_message= errorMessage();

                sk_youtube_channel_videos.find(".first_loading_animation").hide();
                sk_youtube_channel_videos.append(sk_error_message);

            }
            else{

                var post_items="";

                post_items+= loadBioInformation(sk_youtube_channel_videos,data,search_keyword);

                    if(data.posts.length>0){
                        post_items+=  "<div class='sk_youtube_channel_videos_slider'>";
                        post_items+="<button type='button' class='swiper-button-next ' style='pointer-events: all;'>";
                                post_items+="<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>";
                            post_items+="</button>";
                            post_items+="<button type='button' class='swiper-button-next-trigger display-none' style='pointer-events: all;'>";
                                post_items+="<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>";
                            post_items+="</button>";
                            post_items+="<button type='button' class='swiper-button-prev' style='pointer-events: all;'>";
                                post_items+="<i class='mfp-arrow mfp-arrow-left' aria-hidden='true'></i>";
                            post_items+="</button>";
                        post_items+=  "<div class='swiper-container swiper-layout-slider'>";
                            post_items+=  "<div class='swiper-wrapper'>";
                                post_items += "<div class='swiper-slide swiper-slide-"+data.page+"' >";
                                    post_items += "<div class='sk-yt-all-posts'>";
                                    var load_more_videos_text=sk_youtube_channel_videos.find('.load_more_videos_text').text();
                                    var show_post_hover=sk_youtube_channel_videos.find('.show_post_hover').text();
                                    var post_count=sk_youtube_channel_videos.find('.post_count').text();
                                        var item_counter=1;
                                        jQuery.each(data.posts, function(key, val){

                                            val['load_more_videos_text']=load_more_videos_text;
                                            val['show_post_hover']=show_post_hover;
                                            val['display_none']=item_counter>post_count ? '' : '';

                                            post_items+=getFeedItem(val, sk_youtube_channel_videos);
                                            displayDuration(sk_youtube_channel_videos, val.id);
                                            item_counter++;
                                        });

                                    post_items += "</div>";
                                post_items += "</div>";
                                //for autoplay 

                                if(data.page_info.next_page_url!="" && getDsmSetting(sk_youtube_channel_videos, "autoplay") == 1){
                                    for(var i = 2; i <= data.page_info.pages ; i++){
                                        var base_url = data.page_info.base_url + i;
                                        post_items += "<div class='swiper-slide slide-page-"+i+"'>";
                                            console.log(data.page_info.next_page_url,getDsmSetting(sk_youtube_channel_videos, "autoplay"))
                                              getAutoplaySlider(sk_youtube_channel_videos,base_url);
                                            
                                        post_items+="</div>";
                                    }
                                }
                            post_items+=  "</div>";
                        post_items+=  "</div>";
                        post_items+="<div class='sk-ig-next-page display-none'>" + data.page_info.next_page_url + "</div>";
                    }else{
                        post_items+="<div style='margin:10px; text-align:center;'>No posts found.</div>";
                    }

                    
                    if(getDsmSetting(sk_youtube_channel_videos, "show_sociablekit_branding") == 1){
                        post_items += getSociableKITBranding(sk_youtube_channel_videos, "YouTube channel <i class='fa fa-bolt'></i> by SociableKIT", "youtube channel");
                    }
                    sk_youtube_channel_videos.append(post_items);
                    applyCustomUi(jQuery, sk_youtube_channel_videos);
                    if(getDsmSetting(sk_youtube_channel_videos, "autoplay") == 0){
                        skLayoutSliderSetting(sk_youtube_channel_videos);
                    }
                post_items+="</div>";
            }
        });
    })
    .catch(function(err) {
        console.log('GETTING IG FEEDS RETURN ERROR!');
        console.log(err);
    });
}


function getAutoplaySlider(sk_youtube_channel_videos,base_url){
    var count_swiper = sk_youtube_channel_videos.find('.swiper-slide-active').length;
    var json_url = base_url;
    // get events
    fetch(json_url, { method: 'get' })
    .then(function(response) {
        response.json().then(function(data) {
            
            var post_items = "";
            post_items += "<div class='sk-yt-all-posts'>";
                var load_more_videos_text=sk_youtube_channel_videos.find('.load_more_videos_text').text();
                var show_post_hover=sk_youtube_channel_videos.find('.show_post_hover').text();
                var post_count=sk_youtube_channel_videos.find('.post_count').text();
                var item_counter=1;
                jQuery.each(data.posts, function(key, val){

                    val['load_more_videos_text']=load_more_videos_text;
                    val['show_post_hover']=show_post_hover;
                    val['display_none']=item_counter>post_count ? '' : '';

                    post_items+=getFeedItem(val, sk_youtube_channel_videos);
                    displayDuration(sk_youtube_channel_videos, val.id);
                    item_counter++;
                    
                });

            post_items += "</div>";
            sk_youtube_channel_videos.find('.slide-page-'+data.page_info.current_page).html(post_items);
            applyCustomUi(jQuery, sk_youtube_channel_videos);
            


            if(count_swiper == 0){
                skLayoutSliderSetting(sk_youtube_channel_videos);
            }  
        });
    })
    .catch(function(err) {
        console.log('GETTING IG FEEDS RETURN ERROR!');
        console.log(err);
    });
}

function skLayoutSliderSetting(sk_youtube_channel_videos){
    if(getDsmSetting(sk_youtube_channel_videos, "autoplay") == 1){
        let delay = getDsmSetting(sk_youtube_channel_videos, "delay") * 1000;
        var swiper = new Swiper('.swiper-layout-slider.swiper-container', {
            loop: true,
            autoplay: {
                delay: delay,
            },
            navigation: {
                nextEl: '.swiper-button-next-trigger',
                prevEl: '.swiper-button-prev',
            },

        });
    }
    else{
        var swiper = new Swiper('.swiper-layout-slider.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next-trigger',
                prevEl: '.swiper-button-prev',
            },
           
        });
    }

    sk_youtube_channel_videos.find('.swiper-button-next').click({swiper:swiper,sk_youtube_channel_videos:sk_youtube_channel_videos},skSliderLayoutNextClickEvent);
    sk_youtube_channel_videos.find('.swiper-button-prev').click({swiper:swiper,sk_youtube_channel_videos:sk_youtube_channel_videos},skSliderLayoutPrevClickEvent);
}

function skSliderLayoutPrevClickEvent(event)
{
    clickEventSlider(event.data.sk_youtube_channel_videos);
    event.data.sk_youtube_channel_videos.find('.swiper-button-next').html("<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>");
}
function clickEventSlider(sk_youtube_channel_videos)
{   
    var clicker = sk_youtube_channel_videos.find('.swiper-button-next-trigger');
    var next_page=sk_youtube_channel_videos.find('.sk-ig-next-page').text();
    var next_slide=sk_youtube_channel_videos.find('.swiper-slide-next').text();
    if(next_page == "" && next_slide == ""){
        sk_youtube_channel_videos.find('.sk_youtube_channel_videos_slider .swiper-button-next').css('visibility','hidden')
    }
    else{
        sk_youtube_channel_videos.find('.sk_youtube_channel_videos_slider .swiper-button-next').css('visibility','visible')
    }
}
    function skSliderLayoutNextClickEvent(event){

        var sk_youtube_channel_videos = event.data.sk_youtube_channel_videos;
        var swiper = event.data.swiper;
         
        var next_page=sk_youtube_channel_videos.find('.sk-ig-next-page').text();
        
        var json_url=next_page;
        var next_btn = jQuery(this);
        var current_icon = next_btn.html();
            sk_youtube_channel_videos.find('.swiper-button-next').css({"margin-right": "20px"});
            next_btn.html("<i class='fa fa-spinner fa-pulse swiper-button-spinner' aria-hidden='true'></i>");
        var text = sk_youtube_channel_videos.find(".swiper-layout-slider .swiper-slide-next").text(); 
        if(text == "" && next_page !="")
        { 
            fetch(json_url, { method: 'get' })
            .then(function(response) {
                response.json().then(function(data) {
                    
                    var post_items = "";
                
                   
                        post_items += "<div class='sk-yt-all-posts'>";
                            var load_more_videos_text=sk_youtube_channel_videos.find('.load_more_videos_text').text();
                            var show_post_hover=sk_youtube_channel_videos.find('.show_post_hover').text();
                            var post_count=sk_youtube_channel_videos.find('.post_count').text();
                            var item_counter=1;
                            jQuery.each(data.posts, function(key, val){
                                val['load_more_videos_text']=load_more_videos_text;
                                val['show_post_hover']=show_post_hover;
                                val['display_none']=item_counter>post_count ? '' : '';

                                post_items+=getFeedItem(val, sk_youtube_channel_videos);
                                displayDuration(sk_youtube_channel_videos, val.id);
                                item_counter++;
                                
                            });

                        post_items += "</div>";
                    
                    event.preventDefault();
                    swiper.appendSlide('<div class="swiper-slide swiper-slide-next"></div>');
                    sk_youtube_channel_videos.find('.swiper-slide-next').html(post_items);
                    sk_youtube_channel_videos.find('.swiper-button-next').css({"margin-right": "0px"});
                    next_btn.html(current_icon);
                    
                    sk_youtube_channel_videos.find('.sk-ig-next-page').text(data.page_info.next_page_url);
                    sk_youtube_channel_videos.find('.swiper-button-next-trigger').removeClass('swiper-button-disabled').removeAttr('aria-disabled');
                    sk_youtube_channel_videos.find('.swiper-button-next-trigger').click();
                    if(data.page_info.next_page_url == ""){
                        sk_youtube_channel_videos.find('.sk_youtube_channel_videos_slider .swiper-button-next').css('visibility','hidden')
                    }
                    applyCustomUi(jQuery, sk_youtube_channel_videos);
                });
            })
            .catch(function(err) {
                console.log('GETTING IG FEEDS RETURN ERROR!');
                console.log(err);
            });
        }
        else
        {
            sk_youtube_channel_videos.find('.swiper-button-next-trigger').click();
            clickEventSlider(sk_youtube_channel_videos);
            sk_youtube_channel_videos.find('.swiper-button-next').css({"margin-right": "0px"});
            next_btn.html(current_icon);
        }
    }
function skLayoutSliderArrowUI(sk_youtube_channel_videos, display = "none"){

    var arrow_background_color = getDsmSetting(sk_youtube_channel_videos, "arrow_background_color");
    var arrow_color = getDsmSetting(sk_youtube_channel_videos, "arrow_color");
    var arrow_opacity = getDsmSetting(sk_youtube_channel_videos, "arrow_opacity");

    // // Apply Opacity
    jQuery(".swiper-button-next,.swiper-button-prev")
        .mouseover(function(){
            jQuery(this).css({
              "opacity":"1"
            });

        }).mouseout(function(){
            jQuery(this).css({
              "opacity":arrow_opacity
            });
    });

    jQuery(".swiper-button-next,.swiper-button-prev")
        .css("display",display);
    // // Get the height
    var feed_h = sk_youtube_channel_videos.find('.swiper-slide-active .sk-yt-all-posts').innerHeight();
    if(!feed_h){
        var feed_h = sk_youtube_channel_videos.find('.sk-yt-all-posts').innerHeight();
    }
    var feed_h = sk_youtube_channel_videos.find('.sk-yt-all-posts').height();

    sk_youtube_channel_videos.find('.sk_youtube_channel_videos_slider').height(feed_h);
    
    sk_youtube_channel_videos.css("width","100%");
    var feed_h_2 = feed_h / 2;
    sk_youtube_channel_videos.find(".swiper-button-prev,.swiper-button-next").css({
        "top":feed_h_2 +"px",
        "background-color": "transparent",
        "opacity":arrow_opacity,
        "color":arrow_background_color 
    });
}
    
    





function displayDuration(sk_youtube_channel_videos, video_id){

    /*
    var embed_id = getDsmEmbedId(sk_youtube_channel_videos);
    var read_one_url=app_url + "embed/youtube-channel-videos/widget_read_one_json.php?video_id=" + video_id + "&embed_id=" + embed_id;
    var sk_youtube_channel_videos = jQuery('.sk-ww-youtube-channel-videos');
    var character_limit = sk_youtube_channel_videos.find('.character_limit').text();
    
    fetch(read_one_url, { method: 'get' })
    .then(function(response) {
        response.json().then(function(data) {
            
            jQuery("#sk_yt_channel_vid_duration_" + video_id).html(data.duration);
            var base_element = jQuery(".sk-ww-yt-video-info-" + video_id);
            // base_element.find('.sk-ww-yt-title strong').html(encodeHtmlSpecialCharacter(data.title));
            base_element.find('.sk-yt-likes').html(numberFormatter(data.like_count)+' likes');
            base_element.find('.sk-yt-comments').html(numberFormatter(data.comment_count)+' comments');
            base_element.find('.sk-yt-views').html(numberFormatter(data.view_count)+' views');
            var description = characterLimit(data.description,character_limit)
            base_element.find('.sk-ww-yt-description').html(description);
            
            base_element.find('.sk-ww-yt-date').html(getDateFormat(sk_youtube_channel_videos,data.published_at));

            applyCustomUi(jQuery, sk_youtube_channel_videos);
        });
    })
    .catch(function(err) {
        console.log('GETTING IG FEEDS RETURN ERROR!');
        console.log(err);
    });
    */
}

// get date today ymd
function getDateFormat(sk_youtube_channel_videos,date) {
    
    var today = new Date(date);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    var date = dd + '/' + mm + '/' + yyyy;

    // check settings for translation
    if(getDsmSetting(sk_youtube_channel_videos,'translation') == "English - US"){
        date = mm + '/' + dd + '/' + yyyy;
    }

    return date;
}


function encodeHtmlSpecialCharacter(html) {
    if(html){


        var el = document.createElement("div");
        el.innerHTML = html;
        return el.firstChild.data;
    }
}


function characterLimit(text,limit) {
    if(text.length > limit && limit > 0){
        
        text = text.substr(0, limit)+ "...";
        var el = document.createElement("div");
        el.innerHTML = text;
        return el.firstChild.data;
    }
    else{
        return text;
    }
}


function numberFormatter(num) {
    num = num.replace(',','');
    if(num > 0)
    {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
    }
    else{
        return num;
    }
}





function alignSpinner(jQuery, sk_youtube_channel_videos){
    /*
    // hover
    var hover_width=sk_youtube_channel_videos.find('.sk-ww-youtube-channel-videos-item').width();

    sk_youtube_channel_videos.find('.sk-yt-post-hover .fa').css({
        'height' : hover_width + 'px',
        'line-height' : hover_width + 'px'
    });
    */
}



function getDsmAppUrl(){

    // auto detect live and dev version
    var scripts = document.getElementsByTagName("script");
    var scripts_length=scripts.length;
    var search_result=-1;
    var app_url="";

    for(var i=0; i<scripts_length; i++){
        var src_str=scripts[i].getAttribute('src');

        if(src_str!=null){
          search_result=src_str.search("embed/youtube-channel-videos/widget");

          // app-dev found if greater than or equal to 1
          if(search_result>=1){ 
            var src_arr=src_str.split("embed/youtube-channel-videos/widget");
            app_url=src_arr[0];

            // replace if displaysocialmedia.com
            app_url = app_url.replace("displaysocialmedia.com", "sociablekit.com");
          }
        }
    }
    
    return app_url;
}

function getDsmEmbedId(sk_youtube_channel_videos){
    var embed_id = sk_youtube_channel_videos.attr('embed-id');
    if(embed_id==undefined){
        embed_id = sk_youtube_channel_videos.attr('data-embed-id');
    }

    return embed_id;
}

function getDsmSetting(sk_youtube_channel_videos, key){
    return sk_youtube_channel_videos.find("." + key).text();
}function setCookieSameSite(){
    document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 2025 23:59:59 GMT;path=/;HttpOnly;SameSite=Lax";
}

setCookieSameSite();

function getIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");

    // If IE, return version number.
    if (Idx > 0) 
    return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./)) 
        return 11;
    else
    return 0; //It is not IE
}

function isSafariBrowser() {
    var ua = navigator.userAgent.toLowerCase(); 
    if (ua.indexOf('safari') != -1) { 
        if (ua.indexOf('chrome') > -1) {
            return 0; // Chrome
        } else {
            return 1; // Safari
        }
    }
}

if(getIEVersion() > 0 || isSafariBrowser() > 0) {
    /* Load script from url and calls callback once it's loaded */
    loadIEScript('https://cdn.jsdelivr.net/bluebird/3.5.0/bluebird.min.js');
    loadIEScript('https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.js');
}

function loadIEScript(url){

    /* Load script from url and calls callback once it's loaded */
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute("type", "text/javascript");
    scriptTag.setAttribute("src", url);
    
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag);
}

function updateUserViews(app_url,embed_id){

    // update views
    var update_views_url = app_url + "embed/update_views.php?embed_id=" + embed_id;
    fetch(update_views_url, { method: 'get' })
    .then(function(response) {
        response.json().then(function(data) {
            // console.log(data)
        });
    })
    .catch(function(err) {
        console.log('UPDATE VIEWS ERROR');
        console.log(err);
    });
}

function getSociableKITBranding(sk_, label, tutorial_link){
    var html="";
    if(getDsmSetting(sk_, "show_sociablekit_branding")=="1"){
        var fontFamily = getDsmSetting(sk_, "font_family");
        var link_color = getDsmSetting(sk_, "details_link_color");
        html += "<div class='sk_branding' style='padding:10px; display:block; text-align:center; text-decoration:underline; color:#555; font-family:"+fontFamily+"; font-size:15px;'>";
            html += "<a href='"+getTutorialLink(tutorial_link)+"' target='_blank' style='text-underline-position:under; color:"+link_color+";' title='Powered by SociableKIT'>";
                html += label;
            html += "</a>";
        html += "</div>";
    }
    return html;
}

function getTutorialLink(listFunction){
    if(listFunction == "facebook page videos"){
        return "https://www.sociablekit.com/embed-facebook-page-videos-on-website/";
    }
    else if(listFunction == "private instagram feed"){
        return "https://www.sociablekit.com/embed-private-instagram-feed-on-website/";
    }
    else if(listFunction == "facebook one photo album"){
        return "https://www.sociablekit.com/embed-facebook-page-photo-album-on-website/";
    }
    else if(listFunction == "facebook photo albums"){
        return "https://www.sociablekit.com/embed-facebook-page-photo-albums-on-website/";
    }
    else if(listFunction == "instagram feed"){
        return "https://www.sociablekit.com/embed-instagram-feed-on-website/";
    }
    else if(listFunction == "facebook page events"){
        return "https://www.sociablekit.com/embed-facebook-page-events-on-website/";
    }
    else if(listFunction == "facebook page post"){
        return "https://www.sociablekit.com/embed-facebook-page-posts-on-website/";
    }
    else if(listFunction == "facebook page videos(one video)"){
        return "https://www.sociablekit.com/embed-facebook-page-video-on-website/";
    }
    else if(listFunction == "facebook page live video"){
        return "https://www.sociablekit.com/embed-facebook-page-live-video-on-website/";
    }
    else if(listFunction == "twitter feed"){
        return "https://www.sociablekit.com/embed-twitter-feed-on-website/";
    }
    else if(listFunction == "google reviews"){
        return "https://www.sociablekit.com/how-to-embed-google-reviews-on-website/";
    }
    else if(listFunction == "twitter hashtag feed"){
        return "https://www.sociablekit.com/embed-twitter-hashtag-feed-on-website/";
    }
    else if(listFunction == "facebook page event (one event)"){
        return "https://www.sociablekit.com/embed-facebook-page-event-on-website/";
    }
    else if(listFunction == "google calendar"){
        return "https://www.sociablekit.com/customize-embed-google-calendar-on-website/";
    }
    else if(listFunction == "medium publication feed"){
        return "https://www.sociablekit.com/embed-medium-publication-feed-on-website/";
    }
    else if(listFunction == "youtube channel"){
        return "https://www.sociablekit.com/embed-youtube-channel-on-website/";
    }
    else if(listFunction == "youtube playlist"){
        return "https://www.sociablekit.com/embed-youtube-playlist-on-website/";
    }
    else if(listFunction == "instagram hashtag feed"){
        return "https://www.sociablekit.com/embed-instagram-hashtag-feed-on-website/";
    }

    else if(listFunction == "facebook page reviews"){
        return "https://www.sociablekit.com/embed-facebook-page-reviews-on-website/";
    }
    else if(listFunction == "Medium Post"){
        return "https://www.sociablekit.com/customize-embed-medium-post-on-website/";
    }

    else {
        return "https://www.sociablekit.com/";
    }
}

// our main function
var chosen_video = true;
function main(){

    // manipulate page using jQuery
    jQuery(document).ready(function($) {
        jQuery('.sk-ww-youtube-channel-videos').each(function() {
            // know what to show
            var sk_youtube_channel_videos=jQuery(this);

            // get embed id for global use
            var embed_id = getDsmEmbedId(sk_youtube_channel_videos);

            // update views - custom_script.php
            updateUserViews(app_url,embed_id);

            // change height to be more than current window
            //var new_sk_youtube_channel_videos_height=jQuery(window).height() + 100;
            //sk_youtube_channel_videos.height(new_sk_youtube_channel_videos_height);

            var json_url=app_url + "embed/youtube-channel-videos/widget_settings_json.php?embed_id=" + embed_id;

            fetch(json_url, { method: 'get' })
            .then(function(response) {
                response.json().then(function(data) {
                    
                    // load google font
                    var web_safe_fonts = [
                        "Inherit", "Impact, Charcoal, sans-serif", "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
                        "Century Gothic, sans-serif", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", "Verdana, Geneva, sans-serif",
                        "Copperplate, 'Copperplate Gothic Light', fantasy", "'Courier New', Courier, monospace", "Georgia, Serif"
                    ];

                    var is_font_included = web_safe_fonts.indexOf(data.font_family);
                    if(is_font_included<0){ loadCssFile("https://fonts.googleapis.com/css?family=" + data.font_family); }
                    
                    
                    if(data.show_feed==false){
                        sk_youtube_channel_videos.prepend(data.message);
                        sk_youtube_channel_videos.find('.loading-img').hide();
                        sk_youtube_channel_videos.find('.first_loading_animation').hide();
                    }

                    else{

                        // save some settings in html
                        var settings_html="";

                        // settings for easy access
                        settings_html+="<div class='display-none sk-yt-settings' style='display:none;'>";
                            settings_html+="<div class='sk_youtube_channel_white_pop_up sk_pop_up_content sk-pop-yt-post'></div>";
                            // loop through settings from dsm server
                            jQuery.each(data, function(key, value){ settings_html+="<div class='" + key + "'>" + value + "</div>"; });
                        settings_html+="</div>";

                        if(sk_youtube_channel_videos.find('.sk-yt-settings').length){ }
                        else{ sk_youtube_channel_videos.prepend(settings_html); }

                        // empty settings
                        settings_html="";


                        var layout = getDsmSetting(sk_youtube_channel_videos, "layout");
                        if(layout == 3){
                            loadYouTubeChannelVideosSliderLayout(jQuery, sk_youtube_channel_videos);
                        }else{
                            loadYouTubeChannelVideos(jQuery, sk_youtube_channel_videos);
                        }
                    }
                });
            })
            .catch(function(err) {
                console.log('GETTING DATA RETURN ERROR!');
                console.log(err);
            });
        });

        // resize elements in real time
        jQuery(window).resize(function(){
            jQuery('.sk-ww-youtube-channel-videos').each(function(){
                var sk_youtube_channel_videos=jQuery(this);
                applyCustomUi(jQuery, sk_youtube_channel_videos);
            });
        });

        jQuery(document).on('submit', '.sk-ww-youtube-channel-videos .sk_ww_search_youtube_channel_videos_form', function(){
            
            var sk_ww_search_youtube_channel_videos=jQuery(this).find(".sk_ww_search_youtube_channel_videos");
            var sk_youtube_channel_videos=sk_ww_search_youtube_channel_videos.closest('.sk-ww-youtube-channel-videos');
            
            var layout = getDsmSetting(sk_youtube_channel_videos, "layout");
            if(layout == 3){
                loadYouTubeChannelVideosSliderLayout(jQuery, sk_youtube_channel_videos);
            }else{
                loadYouTubeChannelVideos(jQuery, sk_youtube_channel_videos);
            }

            return false;
        });

        jQuery(document).on('keyup', '.sk-ww-youtube-channel-videos .sk_ww_search_youtube_channel_videos_form', function(){
            
            var sk_ww_search_youtube_channel_videos=jQuery(this).find(".sk_ww_search_youtube_channel_videos");
            var sk_ww_search_youtube_channel_videos_val = sk_ww_search_youtube_channel_videos.val();

            if(sk_ww_search_youtube_channel_videos_val==""){
                var sk_youtube_channel_videos=sk_ww_search_youtube_channel_videos.closest('.sk-ww-youtube-channel-videos');
                var layout = getDsmSetting(sk_youtube_channel_videos, "layout");
                if(layout == 3){
                    loadYouTubeChannelVideosSliderLayout(jQuery, sk_youtube_channel_videos);
                }else{
                    loadYouTubeChannelVideos(jQuery, sk_youtube_channel_videos);
                }

            }

            return false;
        });
        var chosen_element = 0;
        jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-yt-post-hover', function(){
            var clicked_element=jQuery(this);
            showDsmYouTubeVideo(clicked_element);
        });

        jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-ww-yt-video-info', function(){
            var clicked_element=jQuery(this);
            chosen_element = showDsmYouTubeVideo(clicked_element);
            chosen_video = true;

        });

        jQuery(document).on('click', '.next_sk_yt_channel_post', function(){
            var clicked_element=$('.sk-ww-youtube-channel-videos .sk-ww-yt-video-info')[chosen_element+1];
            chosen_element = showDsmYouTubeVideo($(clicked_element));
            chosen_video = false;
        });

        jQuery(document).on('click', '.prev_sk_yt_channel_post', function(){
            var clicked_element=$('.sk-ww-youtube-channel-videos .sk-ww-yt-video-info')[chosen_element-1];
            chosen_element = showDsmYouTubeVideo($(clicked_element));
            chosen_video = false;
        });


        jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-yt-load-more-posts', function(){

            var current_btn=jQuery(this);
            var current_btn_text=current_btn.text();
            var sk_youtube_channel_videos=jQuery(this).closest('.sk-ww-youtube-channel-videos')
            var next_page=sk_youtube_channel_videos.find('.sk-yt-next-page').text();
            var json_url=next_page;
            var end_of_posts_text=sk_youtube_channel_videos.find('.end_of_posts_text').text();
            var view_on_youtube_text=sk_youtube_channel_videos.find('.view_on_youtube_text').text();

            // show loading animation
            jQuery(this).html("<i class='fa fa-spinner fa-pulse' aria-hidden='true'></i>");

            if(next_page==""){
                sk_youtube_channel_videos.find(".sk-yt-post-item-holder").show();
                sk_youtube_channel_videos.find('.sk-yt-load-more-posts').hide();
            }

            else{

                // get events
                jQuery.getJSON(json_url, function(data){
               
                        var post_items="";

                        jQuery.each(data.posts, function(key, val){
                            post_items+="<span class='sk-yt-post-item-holder'>"
                                post_items+=getFeedItem(val, sk_youtube_channel_videos);
                            post_items+="</span>";
                            displayDuration(sk_youtube_channel_videos, val.id);
                        });

                        // add posts to current posts
                        sk_youtube_channel_videos.find('.sk-yt-all-posts').append(post_items);

                        // go back to previous button text
                        current_btn.html(current_btn_text);
                        
                        // change next page value
                        sk_youtube_channel_videos.find('.sk-yt-next-page').text(data.page_info.next_page_url);

                        // hide load more button if next page is empty
                        if(data.page_info.next_page_url==""){
                            sk_youtube_channel_videos.find(".sk-yt-load-more-posts").hide();
                        }

                        // if no next page, disable load more button
                        if(data.next_page==""){
                            sk_youtube_channel_videos.find('.sk-yt-load-more-posts').hide();
                        }

                        // show hidden videos
                        sk_youtube_channel_videos.find('.sk-yt-post-item-holder').show();

                        // apply customizations and sizings
                        applyCustomUi(jQuery, sk_youtube_channel_videos);


                });
            }
        });

        jQuery(document).on('click', '.sk-ww-youtube-channel-videos .sk-watermark', function(){
            jQuery('.sk-ww-youtube-channel-videos .sk-message').slideToggle();
        });

        jQuery(document).on('click', '.share-action', function(){

            // required variables
            var clicked_element = jQuery(this);
            var sk_youtube_playlist_videos=jQuery(this).closest('.sk-ww-youtube-playlist-videos');

            // show content on pop up
            showSharePopup(jQuery, clicked_element, sk_youtube_playlist_videos);

        });

    }); // end document ready

    function showDsmYouTubeVideo(clicked_element){

        // remove all selected post
        let profile_pic_owner="";
        let profile_img_hidden_el = document.getElementById("profile_img_hidden");
        if(typeof(profile_img_hidden_el) != 'undefined' && profile_img_hidden_el != null){
            profile_pic_owner = document.getElementById("profile_img_hidden").value;
        }

        let subs_count_hidden="";
        let subs_count_hidden_el = document.getElementById("subs_count_hidden");
        if(typeof(subs_count_hidden_el) != 'undefined' && subs_count_hidden_el != null){
            subs_count_hidden = document.getElementById("subs_count_hidden").value;
        }

        jQuery('.sk_selected_ig_post').removeClass('sk_selected_ig_post');

        // activate selected post
        clicked_element.addClass('sk_selected_ig_post');

        var sk_youtube_channel_videos=clicked_element.closest('.sk-ww-youtube-channel-videos');
        var video_id=clicked_element.attr('data-video-id');

        var embed_id = getDsmEmbedId(sk_youtube_channel_videos);
        var json_url=app_url + "embed/youtube-channel-videos/widget_read_one_json.php?video_id=" + video_id + "&embed_id=" + embed_id;
        var post_html="";
        var mobile_view = jQuery(document).width() <= 440;

        // read one post
        jQuery.getJSON(json_url, function(data){
            if(data.title==""){
                post_html+="<div class='sk-yt-pop-up-content' style='padding:10px; text-align:center;'>";
                    post_html+="<p>Sorry, video is unavailable.</p>";
                post_html+="</div>";
            }

            else{
                post_html+="<div class='sk_youtube_channel_popup_container'>";
                    post_html+="<div class='sk_yt_channel_feed_videowrapper'>";
                        post_html+="<iframe class='sk_youtube_channel_player' width='853' height='480' src='https://www.youtube.com/embed/" + video_id + "?showinfo=0&autoplay=1&mute=0&enablejsapi=1&rel=0' allow='autoplay' frameborder='0' allowfullscreen></iframe>";

                        if(clicked_element.closest('.sk-yt-post-item-holder').prev().length){
                            post_html+="<button type='button' class='prev_sk_yt_channel_post'>";
                                post_html+="<i class='mfp-arrow mfp-arrow-left' aria-hidden='true'></i>";
                            post_html+="</button>";
                        }
                        if(clicked_element.closest('.sk-yt-post-item-holder').next().length){
                            post_html+="<button type='button' class='next_sk_yt_channel_post'>";
                                post_html+="<i class='mfp-arrow mfp-arrow-right' aria-hidden='true'></i>";
                            post_html+="</button>";
                        }

                    post_html+="</div>";
                    post_html+="<div class='sk-yt-pop-up-content'>";
                        post_html+="<h2 class='sk_yt_video_title'><b>" + data.title + "</b></h2>";
                        post_html+="<p class='video-info'>";
                            post_html+="<span>";
                                post_html+=" " + data.view_count + " views â€¢";
                            post_html+="</span>";
                            var display_date = new Date(data.published_at);
                            display_date = display_date.toString().split(" ");
                            display_date = display_date[1] + " " + display_date[2] + ", " + display_date[3];
                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+=" " + display_date;
                            post_html+="</span>";

                            post_html+="<a class='tooltip-fb href_status_trigger_post share-action' post-to-share='https://www.youtube.com/watch?v="+video_id+"' style='cursor: pointer; color: grey;'><i class='fa fa-share' aria-hidden='true'></i><span class='tooltip-fbtext'>Share video</span></a>";
                            if(mobile_view){
                                post_html+="<div class='mobile_stats'>";
                            }else{
                                post_html+="<a class='stats_style'><span class='sk-yt-feed-m-r-15px'>";
                            }
                                post_html+="<i class='fa fa-comments' aria-hidden='true'></i> " + data.comment_count ;
                            post_html+="</span>";

                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+=" <i class='fa fa-thumbs-up' aria-hidden='true'></i> " + data.like_count;
                            post_html+="</span>";

                            post_html+="<span class='sk-yt-feed-m-r-15px'>";
                                post_html+="<i class='fa fa-thumbs-down' aria-hidden='true'></i> " + data.dislike_count;
                            post_html+="</span>";
                            if(mobile_view){
                                post_html+="</div>";
                            }else{
                                post_html+="</a>";
                            }

                        post_html+="</p>";
                        post_html+="<p class='yt-video-owner'>";
                            post_html+="<a href='https://www.youtube.com/channel/"+data.channel_id+"' style='text-decoration: none; display: flex; align-items:center;' target='_blank' rel='nofollow'><img style='border-radius: 50%; margin-right: 10px;' width='48' src='"+profile_pic_owner+"'><span>"+data.channel_title+"<br><span style='color: #606060 !important; font-size: 12px;'>"+subs_count_hidden+" subscribers</span></span></a>";
                            post_html+="<a href='https://www.youtube.com/channel/"+data.channel_id+"' class='yt_subscribe_btn' target='_blank'>SUBSCRIBE</a>";
                        post_html+="</p>";
                        var lines = data.description.split("\n");
                        var teaser = "";
                        var complete = "";

                        for(var newline_ctr = 0; newline_ctr<lines.length; newline_ctr++){
                            if(newline_ctr>2){
                                complete = complete+lines[newline_ctr]+"\n";
                            }else{
                                teaser = teaser+lines[newline_ctr]+"\n";
                            }
                        }
                        
                        if(teaser.trim().length>0){
                            post_html+="<p class='sk-yt-pic-text'><pre class='yt-vid-desc-container'><span class='teaser'>" + teaser + "</span><span class='complete-desc'>" + complete + "</span></pre></p>";
                            
                            if(complete)
                                post_html+="<h6 class='more-desc yt-vid-desc-container' style='cursor: pointer;'>SHOW MORE</h6><p class='show_more_container'></p>";
                        }
                        
                    if(data.comments != undefined){
                        if(data.comments.length>0)
                            post_html+="<h5>COMMENTS</h5>";
                        for(var comment_ctr=0; comment_ctr<data.comments.length; comment_ctr++){
                            var name = data.comments[comment_ctr].snippet.topLevelComment.snippet.authorDisplayName;
                            var text_display = data.comments[comment_ctr].snippet.topLevelComment.snippet.textDisplay;
                            var youtube_channel_link = data.comments[comment_ctr].snippet.topLevelComment.snippet.authorChannelUrl;
                            var past_time = timeSince(new Date(data.comments[comment_ctr].snippet.topLevelComment.snippet.updatedAt));
                            var profile_picture = data.comments[comment_ctr].snippet.topLevelComment.snippet.authorProfileImageUrl;
                            post_html+="<div class='yt-v-comments-item'><div class='yt-v-comments-item-profile-image'> <a href='"+youtube_channel_link+"' target='_blank' rel='nofollow'><img src='"+profile_picture+"'></a></div>";
                            post_html+="<div class='yt-v-comments-item-info'><div class='yt-v-comments-item-header'><div class='yt-v-comments-item-name'> <a href='"+youtube_channel_link+"' target='_blank' rel='nofollow'>"+name+"</a></div>";
                            post_html+="<div class='yt-v-comments-item-past-time'>"+past_time+"</div></div><div class='yt-v-comments-item-comment'>"+text_display+"</div></div></div>";
                        }
                    }
                    
                post_html+="</div></div>";

            }

            // close current pop up
            hidePopUp();

            // put html in pop up div
            clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content').html(post_html);

            // then show pop up
            var content_src=clicked_element.closest('.sk-ww-youtube-channel-videos').find('.sk_pop_up_content');

            var show_pop_up=clicked_element.closest('.sk-ww-youtube-channel-videos').find('.show_pop_up').text();

            if(show_pop_up == 1){
                showDsmYouTubeChannelFeedPopUp(jQuery, content_src, clicked_element);
            }

            // apply customizations and sizings
            applyCustomUi(jQuery, sk_youtube_channel_videos);

        });
        return $('.sk-ww-youtube-channel-videos .sk-ww-yt-video-info').index(clicked_element);
    }
}

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}}(window, document));
