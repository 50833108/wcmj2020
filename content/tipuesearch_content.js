var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms. \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'W6', 'text': 'portable obs \n google hangout meet \n streeming and recording \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': 'grouping and meet. \n', 'tags': '', 'url': 'W7.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': '課堂筆記', 'text': '計算機包含軟,硬體,RAM(記憶體),主機板,電源供應器,CPU,ROM,鍵盤,滑鼠,螢幕,RJ45.....等 \n IPv4 / IPv6:version(版本) 分別為4/6\xa0 \xa0IP:\xa0 4區段用 . 隔開 , 6區段則用 : 隔開 \n HTML:Hyper Text Markup Language \n 动态主机設定協定 是一個用于 IP 网络的 网络协议 ，位于 OSI模型 的 应用层 ，使用 UDP 协议工作，主要有兩個用途： \n \n 用于內部網路或網絡服務供應商自動分配 IP地址 給用戶 \n 用于內部網路管理員對所有電腦作中央管理 \n \n NAT:(Network Address Translation) \n 1990年代中期， NAT 是作为一种解决 IPv4地址短缺 以避免保留IP地址困难的方案而流行起来的。网络地址转换在很多国家广泛使用。所以NAT就成了家庭和小型办公室网络连接上的路由器的一个标准特征，因为对他们来说，申请独立的IP地址的代价要高于所带来的效益。 \n 在一个典型的配置中，一个本地网络使用一个专有网络的指定子网（比如192.168.x.x或10.x.x.x）和连在这个网络上的一个路由器。这个路由器占有这个网络地址空间的一个专有地址（比如192.168.0.1），同时它还通过一个或多个 因特网服务提供商 提供的公有的 IP 地址（叫做“过载” NAT ）连接到因特网上。当信息由本地网络向因特网传递时，源地址从专有地址转换为公用地址。由路由器跟踪每个连接上的基本数据，主要是目的地址和端口。当有回复返回路由器时，它通过输出阶段记录的连接跟踪数据来决定该转发给内部网的哪个主机；如果有多个公用地址可用，当数据包返回时， TCP 或 UDP 客户机的端口号可以用来分解数据包。对于因特网上的通信，路由器本身充当源和目的。 \n 流行在网络上的一种看法认为， IPv6 的廣泛採用將使得NAT不再需要，因為NAT只是一個處理IPv4的地址空間不足的方法。 \n', 'tags': '', 'url': '課堂筆記.html'}]};