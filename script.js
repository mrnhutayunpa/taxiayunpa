document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật các liên kết từ config
    document.querySelector('.facebook').href = `https://www.facebook.com/${(CONFIG.FACEBOOK_ID)}`;
    document.querySelector('.line').href = `https://line.me/ti/p/~${CONFIG.LINE_ID}`;
    document.querySelector('.zalo').href = `zalo://chat?phone=${CONFIG.ZALO_PHONE}`;
    document.querySelector('.phone').href = `tel:${CONFIG.PHONE_NUMBER}`;

    function handleSocialClick(e) {
        const link = e.currentTarget;
        const href = link.getAttribute('href');
        
        // Xử lý Facebook
        if (href.includes('facebook.com')) {
            e.preventDefault();
            if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                // Chỉ thử mở app với tên người dùng
                window.location.href = `fb://profile/${CONFIG.FACEBOOK_ID}`;
            } else {
                window.location.href = `https://www.facebook.com/${(CONFIG.FACEBOOK_ID)}`;
            }
        }
        
        if (href.includes('zalo.me')) {
            e.preventDefault();
            if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                // Chỉ thử mở app Zalo với ID người dùng
                window.location.href = `zalolink://chat?uid=${CONFIG.ZALO_ID}`;
            } else {
                window.location.href = `https://zalo.me/${CONFIG.ZALO_ID}`;
            }
        }
        

    }

    document.querySelectorAll('.social-btn').forEach(link => {
        link.addEventListener('click', handleSocialClick);
    });
});

