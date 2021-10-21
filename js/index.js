$(function () {
    // 首页跳p1规则弹层
    $('.home-card').click(function () {
        $('.home').fadeOut();
        $('.p1-poster').fadeIn();
        $('.poster-rule').fadeIn();
    })

    // p1规则弹层消失
    $('.poster-cha').click(function () {
        $('.poster-rule').fadeOut();
    })

    // p1规则说明出现
    $('.rule-btn').click(function () {
        $('.poster-rule').fadeIn();
    })

    // 点击生成海报出现上传页
    $('.p1-create-poster').click(function () {
        $('.p1-poster').fadeOut();
        $('.up').fadeIn();
    })

    // 上传页tab切换
    $('.up-ul li').click(function () {
        $(this).children('img:last-child').show();
        $(this).siblings().children('img:first-child').show()
        $(this).siblings().children('img:last-child').hide()
        // console.log();
        var index = $(this).index();
        $('.p2-center-box>div').eq(index).show().siblings().hide();
    })

    // 点击up页上传按钮跳转保存页
    $('.qrup-btn').click(function () {
        $('.up').fadeOut();
        $('.save').fadeIn();
    })

    // 点击保存页的排行榜出现排行榜单
    $('.save-phbbtn').click(function () {
        $('.save').fadeOut();
        $('.ranking').fadeIn();
    })

    // 点击榜单页返回按钮返回保存页
    $('.r-fh').click(function () {
        $('.ranking').fadeOut();
        $('.save').fadeIn();
    })

    // 榜单页爱心点亮
    $('.love').click(function () {
        $(this).children('img:first-child').fadeOut();
        $(this).children('img:last-child').fadeIn();
    })
})

$(function () {
    //获取用户上传的文件
    // files 数组
    var files = document.getElementById('file1').files;
    // console.log(files);
    //判断用户是否上传文件
    if (files.length <= 0) {
        return false
    }

    //下面的操作 目的 : 将文件上传到服务器
    var fd = new FormData();

    fd.append('avatar', files[0]);

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'http://www.liulongbin.top:3006/api/upload/avatar');
    xhr.send(fd);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // console.log(xhr.responseText);
            var res = JSON.parse(xhr.responseText);
            if (res.status == 200) {
                document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + res.url;
            } else {
                alert('上传失败')
            }
        }
    }
})