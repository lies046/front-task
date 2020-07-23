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

//swiper
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

//メインビジュアル用Swiper
var mySwiper1 = new Swiper('.mainv-swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

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

var bg = document.getElementById('loader-bg'),
  loader = document.getElementById('loader');
/* ロード画面の非表示を解除 */
bg.classList.remove('is-hide');
loader.classList.remove('is-hide');

/* 読み込み完了 */
window.addEventListener('load', stopload);

/* 10秒経ったら強制的にロード画面を非表示にする */
setTimeout('stopload()', 10000);

/* ロード画面を非表示にする処理 */
function stopload() {
  bg.classList.add('fadeout-bg');
  loader.classList.add('fadeout-loader');
}