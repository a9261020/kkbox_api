<template>
  <div class="layout">
    <!-- nav -->
    <nav>
      <ul>
        <li class="nav-title"><a href="">KK聽歌榜</a></li>
        <li>
          <input
            class="search-input"
            type="text"
            placeholder="請輸入關鍵字搜尋歌曲"
          />
        </li>
        <li>
          <button class="search-btn">搜尋</button>
        </li>
      </ul>
    </nav>

    <router-view />

    <!-- footer -->
    <footer>
      <div class="container">
        <div class="col-3 tech">
          <h3 class="col-3-title">技術運用</h3>
          <ul>
            <li><span>KKBOX Open API</span></li>
            <li><span>YouTube Data API</span></li>
            <li><span>Vue Cli 3</span></li>
          </ul>
        </div>
        <div class="col-3 source">
          <h3 class="col-3-title">參考資源</h3>
          <ul>
            <li><span>六角學院</span></li>
            <li><span>KKBOX API Reference</span></li>
            <li><span>Google API Reference</span></li>
          </ul>
        </div>

        <div class="col-6">
          <input
            class="search-input"
            type="text"
            placeholder="請輸入關鍵字搜尋歌曲"
          />
          <button class="search-btn">搜尋</button>
        </div>
      </div>
    </footer>
  </div>
</template>
