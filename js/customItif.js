/*menu handler*/
$(function(){
  function stripTrailingSlash(str) {
    if(str.indexOf("/") >= 0) {
      return str.substr(1, str.length - 6);
    }
    return str.substr(0, str.length - 5);
  }

  var url = window.location.pathname;
  var activePage = stripTrailingSlash(url);

  $('.nav li a').each(function(){
    var currentPage = stripTrailingSlash($(this).attr('href'));

    if (activePage == currentPage) {
      $(this).parent().addClass('active');
    }
  });
});

// var flag = false;

// $(window).scroll(function() {
//     if (flag = true) {
//         $("#a01").css("padding-top", "0px");
//         $("#a01").css("padding-top", "0px");
//         flag = false;
//     }
// });

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
        $('#navbar-hamburger').toggleClass('hidden');
        $('#navbar-close').toggleClass('hidden');

        // var href = $(e.target).attr('href');
        // if (href == "#a01") {
        //     // $(href).css("padding-top", "90px");
        //     var ss = $("#contact-info").offset().top;
        //     // alert(ss);
        //     $("html,body").animate({scrollTop: ss - 64},"slow");
        // } else if (href == "#a02") {
        //     var ss = $("#contact-gmap").offset().top;
        //     $("html,body").animate({scrollTop: ss - 64},"slow");
        // } else if (href == "#a03") {
        //     var ss = $("#contact-input-form").offset().top;
        //     $("html,body").animate({scrollTop: ss - 64},"slow");
        // }
    }
});

$(document).on('click','#dropdown-menu',function(e) {
    if( $(e.target).is('a') ) {
        var href = $(e.target).attr('href');
        if (href == "#a01") {
            // $(href).css("padding-top", "90px");
            var ss = $("#contact-info").offset().top;
            // alert(ss);
            $("html,body").animate({scrollTop: ss - 64},"slow");
        } else if (href == "#a02") {
            var ss = $("#contact-gmap").offset().top;
            $("html,body").animate({scrollTop: ss - 64},"slow");
        } else if (href == "#a03") {
            var ss = $("#contact-input-form").offset().top;
            $("html,body").animate({scrollTop: ss - 80},"slow");
        }
    }
});


$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name_kanji: {
                validators: {
                        stringLength: {
                        min: 2,
                        message: 'ご担当者様氏名の記述に誤りがあります'
                    },
                        notEmpty: {
                        // message: 'Please supply your first name'
                        message: 'ご担当者様氏名を入力してください'
                    }
                }
            },
            name_hurigana: {
                validators: {
                     stringLength: {
                        min: 2,
                        message: 'フリガナの記述に誤りがあります'
                    },
                    notEmpty: {
                        // message: 'Please supply your last name'
                        message: 'フリガナを入力してください'
                    }
                }
            },
            sex: {
                validators: {
                    // stringLength: {
                    //     min: 2,
                    // },
                    notEmpty: {
                        // message: 'Please supply your last name'
                        message: '性別を選択してください'
                    }
                }
            },

            email: {
                validators: {
                    notEmpty: {
                        // message: 'Please supply your email address'
                        message: 'メールアドレスを入力してください'
                    },
                    emailAddress: {
                        //message: 'Please supply a valid email address'
                        message: 'メールアドレスの記述に誤りがあります'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        // message: 'Please supply your phone number'
                        message: '電話番号を入力してください'
                    },
                    phone: {
                        country: 'JP',
                        // message: 'Please supply a vaild phone number with area code'
                        message: '電話番号の記述に誤りがあります'
                    }
                }
            },
            postal: {
                validators: {
                    stringLength: {
                        min: 7
                    },
                    notEmpty: {
                        message: '郵便番号を入力してください'
                        // message: 'Please supply your street address'
                    }
                }
            },

            zip: {
                validators: {
                    notEmpty: {
                        message: '郵便番号を入力してください'
                    },
                    zipCode: {
                        // country: 'US',
                        country: 'JP',
                        message: '郵便番号の記述に誤りがあります'
                    }
                }
            },

            address: {
                validators: {
                    // stringLength: {
                    //     min: 8,
                    // },
                    notEmpty: {
                        message: '住所を入力してください'
                        // message: 'Please supply your street address'
                    }
                }
            },
            // city: {
            //     validators: {
            //          stringLength: {
            //             min: 4,
            //         },
            //         notEmpty: {
            //             message: 'Please supply your city'
            //         }
            //     }
            // // },
            // state: {
            //     validators: {
            //         notEmpty: {
            //             message: 'Please select your state'
            //         }
            //     }
            // },

            comment: {
                validators: {
                      // stringLength: {
                      //   min: 10,
                      //   max: 200,
                        // message:'Please enter at least 10 characters and no more than 200'
                        // message: 'お問い合わせ詳細'
                        // },
                        notEmpty: {
                            // message: 'Please supply a description of your project'
                            message: 'お問い合わせ詳細を入力してください'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({opacity: "show"}, "slow"); // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});


$(document).ready(function () {/* activate sidebar */
    // $('#sidebar').affix({
    //     offset: {
    //         top: 235
    //     }
    // });

    /* activate scrollspy menu */
    var $body = $(document.body);
    var navHeight = $('.navbar').outerHeight(true) + 10;

    $body.scrollspy({
        target: '#myScrollspy',
        offset: navHeight
    });

    /* smooth scrolling sections */
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 85
                }, 500);
                return false;
            }
        }
    });
});
