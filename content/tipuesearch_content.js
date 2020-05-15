var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms. \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '課堂筆記', 'text': '計算機包含軟,硬體,RAM(記憶體),主機板,電源供應器,CPU,ROM,鍵盤,滑鼠,螢幕,RJ45.....等 \n 在系上可將proxy設為2001:288:6004:17::53(或42or17or7) \n IPv4 / IPv6:version(版本) 分別為4/6\xa0 \xa0IP:\xa0 4區段用 . 隔開 , 6區段則用 : 隔開. \n 英文單字:micro微 macro巨 public公開 rank等級 relation關系 repository倉儲 \n packet封包 transmit傳輸 protocol協定 data資料 hierarchy機構 prestige聲望\xa0 \n embedded嵌入式 definition定義 position位置\xa0 \n HTML :Hyper Text Markup Language \n 动态主机設定協定 是一個用于 IP 网络的 网络协议 ，位于 OSI模型 的 应用层 ，使用 UDP 协议工作，主要有兩個用途： \n \n 用于內部網路或網絡服務供應商自動分配 IP地址 給用戶 \n 用于內部網路管理員對所有電腦作中央管理 \n \n NAT :(Network Address Translation) \n 1990年代中期， NAT 是作为一种解决 IPv4地址短缺 以避免保留IP地址困难的方案而\xa0 \xa0 \xa0 流行起来的。网络地址转换在很多国家广泛使用。所以NAT就成了家庭和小型办公\xa0 \xa0 \xa0 \xa0 室网络连接上的路由器的一个标准特征，因为对他们来说，申请独立的IP地址的代\xa0 \xa0 \xa0 \xa0 价要高于所带来的效益。 \n 在一个典型的配置中，一个本地网络使用一个专有网络的指定子网（比如\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 192.168.x.x或10.x.x.x）和连在这个网络上的一个路由器。这个路由器占有这个网路 地址空间的一个专有地址（比如192.168.0.1），同时它还通过一个或多个 因特网服务提供商 提供的公有的 IP 地址（叫做“过载” NAT ）连接到因特网上。当信息由本地网络向因特网传递时，源地址从专有地址转换为公用地址。由路由器跟踪每个连接上的基本数据，主要是目的地址和端口。当有回复返回路由器时，它通过输出阶段记录的连接跟踪数据来决定该转发给内部网的哪个主机；如果有多个公用地址可用，当数据包返回时， TCP 或 UDP 客户机的端口号可以用来分解数据包。对于因特网上的通信，路由器本身充当源和目的。 \n 流行在网络上的一种看法认为， IPv6 的廣泛採用將使得NAT不再需要，因為NAT只是一個處理IPv4的地址空間不足的方法。 \n \n', 'tags': '', 'url': '課堂筆記.html'}, {'title': '上課內容', 'text': 'W6 \n portable obs \n google hangout meet \n streeming and recording \n \n 讓手機可以利用電腦熱點上網 \n 採用\xa0 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ \n 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網. \n 但是因為目前 Windows 10 並 未提供 IPv6 網路協定下的網路熱點功能 , 因此在純 IPv6 網路協定下無法使用"行動熱點"服務. \n \n 利用手機鏡頭當作 webcam: \n Android: \xa0 https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows \xa0 iPhone: \xa0 https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ \xa0 \n \n 需要 clone 個人倉儲時: \n git clone --recurse-submodules 倉儲_url.git \n 例如:\xa0git clone --recurse-submodules \xa0 https://github.com/mdecourse/wcmj2020.git \n 現場直播的 audio 錄音設定 \n 在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音 \n W7 \n grouping and meet. \n \n W8 \n 分組並決定組長 \n W9 \n 繳交期中考作業 \n W10 \n 使用putty讓登入網站不用打密碼 \n \n \n \n \n', 'tags': '', 'url': '上課內容.html'}, {'title': '第九週實習', 'text': '', 'tags': '', 'url': '第九週實習.html'}, {'title': '電腦軟硬體簡介:', 'text': '電腦的設計採用「軟硬體分離」原則，就像錄音機一樣，硬體的功能固定，放入不同的錄音帶便能播放不同的樂曲；電腦系統也是如此，相同的硬體執行不同的軟體時就能發揮不同的功能。 \n 而硬體大致上有CPU,記憶體,硬碟,光碟機,讀卡機,滑鼠,鍵盤,螢幕,喇叭等 \n 硬體只是機器,真正能讓電腦能夠運作的東西稱為軟體 \n 而軟體上則大致有:作業系統,應用軟體等 \n', 'tags': '', 'url': '電腦軟硬體簡介:.html'}, {'title': '網路架構與設定簡介:', 'text': '一般網路的架構可分為「防火牆」、「內部網路」、「外部網路」以及「DMZ 非軍事區（DMZ， DEMILITARIZED ZONE，以下簡稱 DMZ）」。 \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': '網路架構與設定簡介:.html'}]};