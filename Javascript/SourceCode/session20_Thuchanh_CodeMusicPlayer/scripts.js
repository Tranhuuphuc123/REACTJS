// Phần script thực hành code music player
/*
 >>>>CÁC BƯỚC PHẢI LÀM THAO TÁC CHO ỨNG DỤNG<<<<
  1/ Render songs => load bài hát lên playList
  2/ Scroll top -> khi croll playList thì đĩa cd có thể thu nhỏ phóng to ẩn hiện
  3/ Play / Pause / seek (tua bài hát) -> bật/tắt/tua bài hát nhanh chậm
  4/ CD rotate -> 
  5/ Next/ Prev => bấm bài kề hay bài sau
  6/ Random -> phát ngẫu nhiên bài hát
  7/ Next / Repeat when ended
  8/ Active song: hiển thị css cho bài hát đang hát nhằm giúp ta biêt đc là bài
  hát đó đang đc chọn ở mục playList
  9/ Scroll active song into view: 
  10/ Play song when click
*/

// tạo biến lưu trữ các elements
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// get element playlist qua bên js
const playlist = $('.playlist')
// get element của class .cd & width
const cd = $('.cd')
// cách xem tất cả thuộc tính của element cd
console.log([cd])
// get element của header, cd-child và audio
const heading = $('header h2')
const cd_child = $('.cd-child')
const audio = $('#audio')

// get element toggle play
const playMusic = $('.btn-toggle-play')
// get element player(class có chứa các class con player kèm playing trong css để hiển thị nút play/pauser khi bật nhạc)
const player = $('.player')

// get element progress biểu thị tiến trình chạy audio
const progress = $('#progress')

// get element nút next - prev
const nexBtn = $('.btn-next')
const prevBtn = $('.btn-prev')

// get element nút random
const randomBtn = $('.btn-random')

// get element btn-repeat
const repeatBtn = $('.btn-repeat')


/*******xây dựng app chức năng chính hoạt động của ứng ụn********/
const app = {
    songs: [
        {
            name: 'Neveda',
            singer: 'Vicetone',
            path: './assets/music/Neveda.mp3',
            image: './assets/img/Neveda.jpg'
        },
        {
            name: 'Dua nhau di tron',
            singer: 'Suny - Nhi',
            path: './assets/music/Duanhauditron.mp3',
            image: './assets/img/duanhauditron.jpg'
        },
        {
            name: 'Buong doi tay nhau ra',
            singer: 'Sontung Mtp',
            path: './assets/music/Buongdoitaynhaura.mp3',
            image: './assets/img/buongdoitaynhaura.jpg'
        },
        {
            name: 'Mo mat',
            singer: 'Den vau',
            path: './assets/music/Momat.mp3',
            image: './assets/img/momat.jpg'
        },
        {
            name: 'Neveda',
            singer: 'Vicetone',
            path: './assets/music/Neveda.mp3',
            image: './assets/img/Neveda.jpg'
        },
        {
            name: 'Dua nhau di tron',
            singer: 'Suny - Nhi',
            path: './assets/music/Duanhauditron.mp3',
            image: './assets/img/duanhauditron.jpg'
        },
        {
            name: 'Buong doi tay nhau ra',
            singer: 'Sontung Mtp',
            path: './assets/music/Buongdoitaynhaura.mp3',
            image: './assets/img/buongdoitaynhaura.jpg'
        },
        {
            name: 'Mo mat',
            singer: 'Den vau',
            path: './assets/music/Momat.mp3',
            image: './assets/img/momat.jpg'
        }
    ],
    
    /*******01 =>  tạo hàm  render songs(load các bài hát vào playList)********/
    render: function () {
        // tạo biến lưu trữ playlist songs-> dùng map ghi nhận sự biến đổi của các element trong songs
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex?'active':''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                         <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        // 01-01 =>  render playlist trên đổ ra html nè  
        playlist.innerHTML = htmls.join('')
    },







    // đặt key: xét nó bằng false để xét đk xử lý play-pause-seek music (tạo bật tắt nút play music)
    isPlaying: false,
    // tạo key isRandom cho mặc định bừng false
    isRandom: false,
    // tạo key isRepeat mặc định là false
    isRepeat: false,
   /***xây dựng handleEvent chứ giải quyết tất cả các sự kiện */
    handleEvents: function () {
      /**********************************xử lý thu nhỏ phóng to cd khi croll PlayList****************************** */   
     /****02 tiến hành xấy dựng chức năng xử lý scroll top -> tạo các giá trị cuộn khi croll playlist
     * nhằm sử dụng các giá trị cuộn cho các mục đích là dùng giá trị đó tính toán kết hợp
     * với kích thước gốc của đĩa cd.. tính toán tăng giảm (phóng to thu nhỏ) để khi scroll playlist sẽ giảm giá
     * trị kích thước của đĩa cd/ hay tăng kích thước ->  đến ẩn lun đĩa cd ******* */
        // lấy kích thước mặc định(kt gốc) của class cd
        const cdWidth = cd.offsetWidth

        document.onscroll = function () {
            // windown: là biến của js đại diện cửa sổ trình duyệt
            // scrollY là biến js Y ở đây là verticall là scroll theo chiều dọc ấy
            // document.documentElement.scrollTop: là một cách tg tự windown.scrollY thui -> đưa 2 th cho chắc ăn
            //=> mục đích tạo ra biến scroll top là để ghi nhận các giá trị kích thước khi scroll các bài hát trong playlist
            const scrolltop = window.scrollY || document.documentElement.scrollTop  
            console.log(scrolltop)

            // tạo biến mới tính toán kích thước khi croll playlist để có thể ẩn cd đi khi crolltop
            const newCdWidth = cdWidth - scrolltop

            // xét sự thay đổi kích thước trên vào element cd để nó có thể ẩn hiện(thu nhỏ/phóng to) đĩa cd khi scroll top playlist
            // xét đk nếu newCdWidth > 0 thì newCdWidth tăng kích thước còn nếu <0 thì nó trở về 0 không tuột xuống âm
            //=> mục đích là tránh th mà nếu croll nhanh quá đôi khi nó vụt kích thước xuống âm nên nó khoogn thu nhỏ đc hoàn toàn
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            
            // dùng Opacity tạo hiệu ứng mờ dần khi thu nhỏ phóng to khi ta croll playlist
            // lấy kích thước mới chia cũ là ra tỷ lệ
            cd.style.opacity = newCdWidth / cdWidth
        }  


        /***************************03_01 Event Xử lý Play/Pause music nhạc************************************* */
           /*****03_01: xử lý handleEvent chức năng click play/pause nhạc******* */ 
        playMusic.onclick = () => {    
            // cách 01
            // this đang trỏ đến đối tượng chứa hàm playMusic.onclick, tức là đối tượng app.
            // Nói cách khác, this trong hàm playMusic.onclick đại diện cho đối tượng app
            if (this.isPlaying) {
                // cập nhật xét lại trạng thái 
                this.isPlaying = false
                // tắt nhạc
                audio.pause()
                // add class playing vào element có class player để css bật tắt nút play/pause (xem thiết kế của nó bên css sẽ rõ hơn)
                player.classList.remove('playing')     
                // khi nhạc dừng đĩa cd dừng
                cdChildAnimate.pause()
            } else {
                // cập nhật xét lại trạng thái 
                this.isPlaying = true
                // bật nhạc
                audio.play()
                // add class playing vào element có class player để css bật tắt nút play/pause (xem thiết kế của nó bên css sẽ rõ hơn)
                player.classList.add('playing')
                // khi click nhạc chạy đĩa cd chạy theo quay theo
                cdChildAnimate.play()
            }
            
            //cách 2 xử lý play/pause -> xử lý với hàm onPlay của chính js chuyên nghiệp hơnb
            // playMusic.onclick = () => {
            //     if (this.isPlaying) {
            //         audio.pause()
            //     } else {
            //         audio.play()
            //     }
            // }

            // // khi audio play
            // audio.onplay = () => {
            //     this.isPlaying = true
            //     player.classList.add('playing')
            // }
            // // khi audio pause
            // audio.onpause = () => {
            //     this.isPlaying = false
            //     player.classList.remove('playing')
            // }
            
        }



        /**************03_ 02 Khởi chạy progress thanh time của audio bài hát(bài hát chạy thì thành progress chạy theo để hiển thị đc nhiêu time của audio đó)***************** */
        // khi tiến độ bài hát thay đổi-> gõ tiềm kiếm ontimeupdate trong w3shcool về js sẽ hiểu rõ chức năng hàm này
        /* ontimeupdate sẽ cập nhật thời gian khi tua nhanh chậm bài hát
        => chính xác hơn audio.ontimeupdate là một sự kiện được kích hoạt khi thời gian của một phương tiện phương tiện audio thay đổi,
         nghĩa là khi bài hát đang phát và thời gian đang thay đổi.*/
        audio.ontimeupdate = () => {
            // tiềm hiểu currenTime trong html/css audiovideo -> đễ rõ hơn (mở w3shcool - html/css audio/video)
            /* -> audio.currentTime là thuộc tính của đối tượng audio, nó đại diện cho thời gian hiện tại (trong giây)
             của bản ghi âm thanh hoặc video. Nó cho biết thời gian đã phát qua trong bản ghi. 
             
              -> audio.duration cũng là một thuộc tính của đối tượng audio, nó đại diện cho tổng thời gian của bản ghi âm thanh hoặc video (tính bằng giây).
               Nó cho biết tổng thời gian của bản ghi.
               
              ==> audio.currentTime / audio.duration * 100 tính toán phần trăm tiến trình phát của bản ghi hiện tại bằng cách chia thời gian hiện tại cho tổng thời gian 
              và sau đó nhân với 100 để chuyển đổi thành phần trăm. */
            if (audio.duration) {
                const progressPercent = parseFloat(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent
            }
        }

        /*************03_03 xử lý tua seek(tua nhanh chậm) audio bài hát*********** */
        progress.onchange = (e) => {
            // tính toán time để ghi nhận thời gian ở mỗi đoạn mình kéo trên thanh progress
            //=> lấy tổng thời gian bài hát / 100  và * nó với   / 
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
            /*
            e.target.value trong đoạn mã JavaScript trích dẫn của bạn đang truy cập giá trị của phần tử HTML mà sự kiện đã xảy ra trên đó.
            => cụ thể: Khi người dùng tương tác với phần tử progress bằng cách kéo thanh trượt hoặc thay đổi giá trị của nó, sự kiện onchange được kích hoạt và e.target
             đại diện cho phần tử mà sự kiện đang xảy ra trên đó */
        }
        


        /*****************04/ xử lý cd rotate(khi nhạc phát đĩa cd sẽ quay theo)****************************** */
        /*
         >>Hiểu rõ về cấu trúc animate trong Html Dom(Dom Event)<<
          => animate là một method của DOM 
          => sử dụng để tạo và điều khiển các hoạt ảnh CSS trong trình duyệt. 
          => Nó cho phép bạn tạo và quản lý hoạt ảnh dựa trên thuộc tính CSS của các phần tử HTML.
          => syntax của animate:
             const animation = element.animate(
                keyframes, // Danh sách trạng thái
                options    // Tùy chọn hoạt ảnh
             );

             # trong đó:
              + element:  là phần tử HTML mà bạn muốn thực hiện hoạt ảnh lên.
              + keyframes: Đây là một mảng chứa các trạng thái (keyframes) của hoạt ảnh. 
              Mỗi trạng thái là một đối tượng CSS chứa các thuộc tính mà bạn muốn thay đổi
              + options: Đây là một đối tượng chứa các tùy chọn để định cấu hình hoạt ảnh
              => xem phần code bên dưới sẽ rõ...

        */
        const cdChildAnimate = cd_child.animate([
           /* tranforms là tt trong css, là thuộc tính dùng thay đổi hình dạng với
           rotate(): Xoay phần tử theo một góc xác định */
             {transform: 'rotate(360deg)'}  
        ], {
            duration: 10000, // duration(tổng thồi gian) thiết lặp quay hết 1 vòng là 10s
            iterations: Infinity //iterations: xác định số lần lặp của hoạt ảnh, Infinity:  lặp vô hạn
        })
        // lúc chưa nhấn gì thì đĩa cd dừng 
        cdChildAnimate.pause()

        // ****05_01: xử lý event khi nhấn nút nextBtn()****
        nexBtn.onclick = () => {
            if (this.isRandom) {
              // nếu israndom = false thì gọi playRandom để phủ định isRandom và phát ngẫu nhiên khi next
             this.playRandom() 
            } else {   
                // ngc lại thì tực hiện next tuần tự như bt
             this.nextSongs()
            }
            audio.play()
            // next thì load lại render(load lại PlayList bài hát)
            this.render()
            //09- 01 thực thi scroll active song
            this.ScrollActive()
            
        }
        prevBtn.onclick = () => {
            if (this.isRandom) {
                // nếu israndom = false thì gọi playRandom để phủ định isRandom và phát ngẫu nhiên khi next
               this.playRandom() 
              } else {   
                  // ngc lại thì tực hiện prev tuần tự như bt
               this.prevSongs()
              }
            audio.play()
            // prev thì load lại render(load lại PlayList bài hát)
            this.render()
            //09- 01 thực thi scroll active song
            this.ScrollActive()
        }


        /****************06: tạo chức năng random cho nút randomBtn***********************/
        randomBtn.onclick = (e) => {
            //## b1: tạo hiệu ứng click bật tắt hiển thị màu sắc với nút randombtn và icon fa-random
            // thực hiện phủ định lại isRandom thành true
            this.isRandom = !this.isRandom
            /*=> Lúc này toggle sẽ kiểm tra nếu israndom true thì nó tiến hành xem xét cái element randombtn
            có class active không nếu có thì xóa đi nếu không thì thêm vào
            <=> tương ứng với việc click thì hiển thị active còn click lần nữa thì tắt đi active hiệu ứng css cho
            element randomBtn và icon fa-random */
            randomBtn.classList.toggle('active', this.isRandom)
            //=> lưu ý khi bật tính năng random thì bấm nút next hay prev mới phát ngẫu nhiên nha
            //=> còn tắt random thì nút next và prev sẽ hoạt động tuần tự lại bt
        }


        /*****07_ xử lý sự kiện repeat/next(lặp lại khi hết bài hát)********** */
        //#b1: viết hàm thực thi chức năng repeat
        // xử lý nút nhấn repeat -> bật tắt tính năng repeat (bật đổi màu css/tắt thì ẩn màu css active ấy)
        repeatBtn.onclick = (e) => {
            this.isRepeat = !this.isRepeat
            repeatBtn.classList.toggle('active', this.isRepeat)
        }
         /*Khi sự kiện onended được kích hoạt, bạn có thể thực hiện các hành động xử lý, như bắt đầu phát lại video 
        từ đầu hoặc thực hiện các tác vụ liên quan đến kết thúc phát lại âm thanh hoặc video. 
        --> Điều này thường hữu ích trong việc tạo các trình đơn điều hướng phương tiện hoặc quảng cáo tự động khi 
        phương tiện hoàn thành phát lại.
        =>> tóm lại là phần này ý nghĩa: là khi bài hát nó chạy hết time thì ta thực thi phát lại,
        .. hay một cv khác tùy ý
         */
        audio.onended = function () {  
            // lặp luận logic như sau: nếu nhấn nút repeat thì phát lại bài hát dù có nhấn next
            // còn nếu tắt repeat thì thực hiện next bình thường
            this.isRepeat = !this.isRepeat
            if (this.isRepeat) {
                audio.play()
            } else {
                nexBtn.click()
            }
        }


        /*********08: Active songs(nghĩa là khi hát bài nào thì bài hát đó 
         * trong PlaList sẽ hiện thị là đang đc chọn, đang chạy ********* */
        /*
         => ${index === this.currentIndex?'active':''}
         sử dụng toán tử 3 ngôi để text đk ở mục render.. nếu chỉ số mảng đúng = với giá trị
         curentIndex tức giá trị mà ta đang click chọn bài đó. Thì nó thêm css active để
         tô màu khối cho ngay cái mục playList đó nhằm biểu thị là đang hát bài hát đó vậy

         => ở mục nextBtn và prevBtn ta nhớ load render lại bài hát
         this.render()
         để nó update lại sự thay đổi
        */

        
        
        /************10 Xử lý sự kiện Play song when click************ */
        /*=> đây là xử lý sưj kiện khi click vào baì hát nào đó
        thì bài hát đó nó sẽ bật chứ không còn phụ thuộc vào nút next - prev 
        */
        playlist.onclick = (e) => {
            /*e.target đại diện cho phần tử HTML mà sự kiện (event) được kích hoạt trên
            => Khi bạn nhấp vào phần tử HTML có id là "playlist" (hoặc khi bạn kích hoạt 
            sự kiện click trên nó), đối tượng sự kiện e sẽ chứa thông tin về sự kiện, và 
            e.target sẽ là phần tử HTML mà bạn đã nhấp vào.
            
            ==> hiểu nhanh và đúng target giúp chỉ ra đc tp tường ứng khi click trực tiếp nó vào*/

            /*e.target.closest('.song') là một phần của một điều kiện (if statement) để kiểm tra xem phần
            tử mà người dùng đã tương tác (bằng cách nhấp vào) có phải là một phần tử con của phần tử có 
            lớp CSS (class) có tên "song" không. 
            
            => vậy closest là gì:
             - Hàm closest trong JavaScript DOM (Document Object Model) được sử dụng để tìm phần tử tổ tiên gần nhất
              (chứa) của phần tử mà bạn truyền vào. 
             -> Trong trường hợp này, bạn đang kiểm tra xem phần tử mà người dùng đã tương tác (được lưu trữ trong e.target)
              có phải là một phần tử con của một phần tử có class là "song" hay không v
             -> và đồng thời thèn class nào có song mà còn có active thì loại biên nó ra(nghĩa là thèn nào mà đang chạy bài hát
                thì không click đc nữa còn thèn nào chưa chạy thì click chạy đc) .*/
            const songNote = e.target.closest('.song:not(.active)')
            if (songNote || e.target.closest('.option')) {
                // thỏa đk thì chuyển đến bài khi click ngay nó
                // xử lý khi click vào song bài hát
                if (songNote) {
                    // sét index giá trị hiện tại đang click
                    this.currentIndex = Number(songNote.dataset.index)
                    //tải lại tt bài hát và đẩy nó lên khi chạy ứng dụng
                    this.loadCurrentSong()
                     //load lại danh sách các bài hát
                     this.render()
                    // bật chạy nhạc
                    audio.play()  
                }
                // xử lý khi click vào option 
                if (e.target.closest('.song:not(.option)')) {
                    
                }
            }
        }

    },// end handleEvents











    /**********03: thực hiện xây dựng hàm play-pause-seek(tua) bài hát playlist****************/
     /* thực hiện lấy ra đc bài hát trong playlist rồi đổ vào mục audio -> để khi click chọn bài nào nó hiện ra 
     tên và hình ảnh bài đó trong đĩa cd và mục tên bài hát ở đầu ứng dụng*/
    
    // ý nghĩa là lấy ra chỉ mục đầu tiên của mảng songs
    currentIndex: 0,

    getCurrentSong: function () {
        /*
         => Object.defineProperty là một phương thức trong JavaScript cho phép bạn định nghĩa (define) hoặc 
         cấu hình các thuộc tính (properties) cho một đối tượng (object). Phương thức này cho phép bạn cụ 
         thể kiểm soát cách một thuộc tính của đối tượng hoạt động, bao gồm cách nó được đọc (get) và cách
         nó được gán (set).
         => syntax: Object.defineProperty(object, propertyName, descriptor);
            + trong đó:
             ++ objet: đối tượng bạn muốn định nghĩa
             ++ propertyName: tên thuộc tính đại diện cho object cần câu hình(tên tự đặt)
             ++ descriptor: sử dụng các tt get, set.. để mô tả luận lý logic code cụ thể đối tượng
        */
        // currentIndex: có nhiệm vụ xác định chỉ mục (index) của bài hát hiện tại trong danh sách các bài hát 
        // nó theo dõi và xác định bài hát hiện đang được phát trong ứng dụng âm nhạc. Bằng cách sử dụng chỉ mục này, ứng dụng có thể lấy thông tin về bài hát hiện tại
        Object.defineProperty(this, 'currentSong',{
            get: function() {
                return this.songs[this.currentIndex]
            } 
        })
    },
    

    // hàm load currentSong:xây dựng hàm này chính là tải tt bài hát và đẩy nó lên khi chạy ứng dụng
    loadCurrentSong: function () {
        // get tên bài hát khi click chọn đúng bài đó
        heading.textContent = this.currentSong.name
        cd_child.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },



    /********************05: xây dựng hàm xử lý next - prev playList bài hát****************************/
    //= mục này mứi tạo key: function thực thi ghi nhận khi nhấn nút next
    //=> vào event xem tiếp xử lý sự kiện
    nextSongs: function () {
      //=> lưu ý this là đại diện của nextSongs dọi đến const app
      // sử dụng key curentIndex(key chứa giá trị hiện tại của bài hát)
      this.currentIndex++
      //lập luận nếu bài cúi thì next sẽ quay lại bài đầu
      if (this.currentIndex >= this.songs.length) {
          this.currentIndex = 0
      }
      // loadCurrentSong để tải tt bài hát vừa nhấn next
      this.loadCurrentSong()
    },
    
    // tương tự làm key prevSongs
    prevSongs: function () {
        this.currentIndex--
        if (this.currentIndex <0) {
            this.currentIndex = this.songs.length - 1
        }
         // loadCurrentSong để tải tt bài hát vừa nhấn next
        this.loadCurrentSong()
    },

    /************06_01: xây dựng hàm cho chức năng event randomBtn***************** */
    //tạo hàm luận lý logic xử lý cho sự kiện event randomBtn.onclick ở trên
    playRandom: function () {
        //#b2 tiếp trên: xấy dựng giá trị hiện tại ghi nhận sẽ là các giá trị ngẫu nhiên đc xuất hiện
        let newCurrentIndex
        do {
            /* Thực hiện tính toán lấy giá trị ngẫu nhiên như sau:
            + Math.floor: nghĩa là nó làm tròn xuống từ kw tính toán.. -> luôn ra kw là số nguyên
            + Math.random(): hàm toán học nó sẽ phát tán các giá trị ngẫu nhiên
            + this.songs.length: nghĩa là nó sẽ lấy các số dựa vào tổng số values bài hát trong mảng songs
            để phát ngẫu nhiên nhưng chỉ phát ngẫu nhiên các bài hát có trong PlayList mà thui*/
            newCurrentIndex = Math.floor(Math.random() * this.songs.length)    
        } while (newCurrentIndex === this.currentIndex)
        /* lưu ý đk trong while để kt vòng lặp là giá trị hông đc trùng nếu trùng vi phạm với giá trị cũ thì kết thúc*/
        // set lại ghi nhânj giá trị newCurrentIndex cho curentIndex
        this.currentIndex = newCurrentIndex
        // load lại bài hát
        this.loadCurrentSong()
    },

    /*************09-> thực thi chức năng Scroll Active Songs**********************/
    ScrollActive: function () {
       
    },



    
        


  /*******************************************XÂY DỰNG START THỰC THI************************************************** */
    /******tạo method start -> chạy ứng dụng load các playlist bài hát*****/
    start: function () {
        // lấy getCurrentSong từ Playlist của object Songs -> định nghĩa các thuộc tính cho Object
        this.getCurrentSong()
        // lôi xử lý hiệu ứng scroll vào start
        this.handleEvents()
        // tải tt loadCurrentSong lên khi chạy ứng dungh
        this.loadCurrentSong()
        // lôi render các playlist xuống start để chạy
        this.render()
    }

}// end const App
    


// gọi Object app và thực thi ứng dụng với key chứa function start()
app.start()

