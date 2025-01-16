<script>
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let second = new Date().getSeconds();
    setInterval(() => (second = second + 1), 1000)
</script>

<header>
    <div class="info-bar">
      <div class="info-bar__time">{hour}:{min}:{second}</div>
      <div class="info-bar__icons">
        <img src="assets/chart-bar.svg" alt="chart-bar" />
        <img src="assets/wifi.svg" alt="wifi" />
        <img src="assets/battery.svg" alt="battery" />
      </div>
    </div>
    <div class="menu-bar">
      <div class="menu-bar__location">
        <div>역삼1동</div>
        <div class="menu-bar__location-icon">
          <img src="assets/arrow-down.svg" alt="" />
        </div>
      </div>
      <div class="menu-bar__icons">
        <img src="assets/search.svg" alt="" />
        <img src="assets/menu.svg" alt="" />
        <img src="assets/alert.svg" alt="" />
      </div>
    </div>
  </header>
  <main>
    <div class="item-list">
      <div class="item-list__img"><img src="assets/img.svg" alt="" /></div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>

    <div class="item-list">
      <div class="item-list__img"><img src="assets/img.svg" alt="" /></div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img"><img src="assets/img.svg" alt="" /></div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img"><img src="assets/img.svg" alt="" /></div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img"><img src="assets/img.svg" alt="" /></div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <div class="item-list">
      <div class="item-list__img"><img src="assets/img.svg" alt="" /></div>
      <div class="item-list__info">
        <div class="item-list__info-title">게이밍 PC 팝니다</div>
        <div class="item-list__info-meta">역삼동 19초 전</div>
        <div class="item-list__info-price">100만원</div>
      </div>
    </div>
    <a class="write-btn" href="/#/write">+글쓰기</a>
  </main>
  <footer>
    <div class="footer-block">
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/home.svg" alt="" />
        </div>
        <span class="footer-icons__desc">홈</span>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/doc.svg" alt="" />
        </div>
        <span class="footer-icons__desc">동네생활</span>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/location.svg" alt="" />
        </div>
        <span class="footer-icons__desc">내 근처</span>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/chat.svg" alt="" />
        </div>
        <span class="footer-icons__desc">채팅</span>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/user.svg" alt="" />
        </div>
        <span class="footer-icons__desc">나의 당근</span>
      </div>
    </div>
  </footer>
  <div class="media-info-msg">화면 사이즈를 줄여주세요.</div>

  <style>
    .info-bar__time{
        color: blue;
    }
  </style>