//スクロール量を取得する関数
function getScrolled() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById('top-nav');

//トップに移動する関数
function scrollToTop() {
  var scrolled = getScrolled();
  window.scrollTo(0, Math.floor(scrolled / 2));
  if (scrolled > 0) {
    window.setTimeout(scrollToTop, 30);
  }
};

//イベント登録
topButton.onclick = function () {
  scrollToTop();
};

let mySwiper = new Swiper('.swiper-container', {
  // 以下にオプションを設定
  loop: true, //最後に達したら先頭に戻る

  //ページネーション表示の設定
  pagination: {
    el: '.swiper-pagination', //ページネーションの要素
    type: 'bullets', //ページネーションの種類
    clickable: true, //クリックに反応させる
  }
})

//ハンバーガーメニュー 
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('nav_btn');
  var blackBg = document.getElementById('nav_bg');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav_open'); //メニュークリックでnav-openというクラスがbodyに付与
  });
  blackBg.addEventListener('click', function () {
    body.classList.remove('nav_open'); //もう一度クリックで解除
  });
}
toggleNav();