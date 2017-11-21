  var idx = lunr(function () {
    this.pipeline.remove(lunr.stopWordFilter)
    this.pipeline.remove(lunr.trimmer)
    this.ref('id')
    this.field('label_eng')
    this.field('label_ka')
    
    // authors
    
      this.add({
        label_eng: "Asada Icchō",
        label_ka: "浅田一鳥",
        id: 0
      })
      
    
      this.add({
        label_eng: "Ashikawa Teruha",
        label_ka: "芦川照葉",
        id: 1
      })
      
    
      this.add({
        label_eng: "Chikamatsu Hanji",
        label_ka: "近松半二",
        id: 2
      })
      
    
      this.add({
        label_eng: "Chikamatsu Kosuiken",
        label_ka: "近松湖水軒",
        id: 3
      })
      
    
      this.add({
        label_eng: "Chikamatsu Monzaemon",
        label_ka: "近松門左衛門",
        id: 4
      })
      
    
      this.add({
        label_eng: "Chikamatsu Sen'yōken",
        label_ka: "近松千葉軒",
        id: 5
      })
      
    
      this.add({
        label_eng: "Chikamatsu Yasuzō",
        label_ka: "近松保蔵",
        id: 6
      })
      
    
      this.add({
        label_eng: "Fukuda Kakei",
        label_ka: "",
        id: 7
      })
      
    
      this.add({
        label_eng: "Hasegawa Senshi",
        label_ka: "長谷川千四",
        id: 8
      })
      
    
      this.add({
        label_eng: "Hōjō Hideji",
        label_ka: "",
        id: 9
      })
      
    
      this.add({
        label_eng: "Ki Kaion",
        label_ka: "紀海音",
        id: 10
      })
      
    
      this.add({
        label_eng: "Kino Jōtarō",
        label_ka: "紀上太郎",
        id: 11
      })
      
    
      this.add({
        label_eng: "Kinoshita Junji",
        label_ka: "木下順二",
        id: 12
      })
      
    
      this.add({
        label_eng: "Kyokutei Bakin",
        label_ka: "",
        id: 13
      })
      
    
      this.add({
        label_eng: "Matsuda Baku",
        label_ka: "松田ばく",
        id: 14
      })
      
    
      this.add({
        label_eng: "Matsuda Bunkōdō",
        label_ka: "文耕堂",
        id: 15
      })
      
    
      this.add({
        label_eng: "Mishima Yukio",
        label_ka: "三島由紀夫",
        id: 16
      })
      
    
      this.add({
        label_eng: "Miyoshi Shōraku",
        label_ka: "三好松洛",
        id: 17
      })
      
    
      this.add({
        label_eng: "Nakamura Akei",
        label_ka: "中邑阿契",
        id: 18
      })
      
    
      this.add({
        label_eng: "Nakawa Kamesuke",
        label_ka: "",
        id: 19
      })
      
    
      this.add({
        label_eng: "Nakawa Shimesuke",
        label_ka: "奈河七五三助",
        id: 20
      })
      
    
      this.add({
        label_eng: "Nanba Shōzō",
        label_ka: "",
        id: 21
      })
      
    
      this.add({
        label_eng: "Namiki Geiji",
        label_ka: "並木鯨児",
        id: 22
      })
      
    
      this.add({
        label_eng: "Namiki Senryū (See also Namiki Namiki Sōsuke)",
        label_ka: "並木千柳",
        id: 23
      })
      
    
      this.add({
        label_eng: "Namiki Shōzō",
        label_ka: "並木正三",
        id: 24
      })
      
    
      this.add({
        label_eng: "Namiki Sōsuke (See also Namiki Senryū)",
        label_ka: "並木宗輔",
        id: 25
      })
      
    
      this.add({
        label_eng: "Namiki Jōsuke",
        label_ka: "並木丈輔",
        id: 26
      })
      
    
      this.add({
        label_eng: "Namioka Geiji",
        label_ka: "浪岡鯨児",
        id: 27
      })
      
    
      this.add({
        label_eng: "Nozawa Katsuhei",
        label_ka: "野澤勝平",
        id: 28
      })
      
    
      this.add({
        label_eng: "Nozawa Matsunosuke",
        label_ka: "野澤松之輔",
        id: 29
      })
      
    
      this.add({
        label_eng: "Senzenken",
        label_ka: "",
        id: 30
      })
      
    
      this.add({
        label_eng: "Shiba Shisō",
        label_ka: "司馬芝叟",
        id: 31
      })
      
    
      this.add({
        label_eng: "Suga Sensuke",
        label_ka: "菅専助",
        id: 32
      })
      
    
      this.add({
        label_eng: "Takeda Izumo, I",
        label_ka: "竹田出雲",
        id: 33
      })
      
    
      this.add({
        label_eng: "Takeda Hanshichi",
        label_ka: "",
        id: 34
      })
      
    
      this.add({
        label_eng: "Takeda Inaba",
        label_ka: "竹田因幡",
        id: 35
      })
      
    
      this.add({
        label_eng: "Takeda Koide",
        label_ka: "竹田小出",
        id: 36
      })
      
    
      this.add({
        label_eng: "Takeda Koizumo",
        label_ka: "竹田小出雲",
        id: 37
      })
      
    
      this.add({
        label_eng: "Takemoto Saburobei",
        label_ka: "竹本三郎兵衛",
        id: 38
      })
      
    
      this.add({
        label_eng: "Tanaka Chikao",
        label_ka: "田中千禾夫",
        id: 39
      })
      
    
      this.add({
        label_eng: "Toyotake Jinroku",
        label_ka: "豊竹甚六",
        id: 40
      })
      
    
      this.add({
        label_eng: "Toyotake Ōritsu",
        label_ka: "豊竹応律",
        id: 41
      })
      
    
      this.add({
        label_eng: "Tsutsui Hanko",
        label_ka: "",
        id: 42
      })
      
    
      this.add({
        label_eng: "Uchimura Naoya",
        label_ka: "内村直也",
        id: 43
      })
      
    
      this.add({
        label_eng: "Umeno Shitakaze",
        label_ka: "梅野下風",
        id: 44
      })
      
    
      this.add({
        label_eng: "Utei Enba",
        label_ka: "烏亭焉馬",
        id: 45
      })
      
    
      this.add({
        label_eng: "Yamada Kakashi",
        label_ka: "山田案山子",
        id: 46
      })
      
    
      this.add({
        label_eng: "Yō Yōtai",
        label_ka: "容楊黛",
        id: 47
      })
      
    
      this.add({
        label_eng: "Takeda Izumo, II",
        label_ka: "竹田出雲",
        id: 48
      })
      
    
      this.add({
        label_eng: "Takizawa Bakin",
        label_ka: "滝沢馬琴",
        id: 49
      })
      
    
      this.add({
        label_eng: "Satō Aiko",
        label_ka: "佐藤靄子",
        id: 50
      })
      
    
      this.add({
        label_eng: "Sumi Fusako",
        label_ka: "鷲見房子",
        id: 51
      })
      
    
      this.add({
        label_eng: "Namiki Gohei",
        label_ka: "並木五瓶",
        id: 52
      })
      
    
      this.add({
        label_eng: "Matsuda Wakichi",
        label_ka: "松田和吉",
        id: 53
      })
      
    
      this.add({
        label_eng: "Wakatake Fuemi",
        label_ka: "若竹笛躬",
        id: 54
      })
      
    
      this.add({
        label_eng: "Kitamado Goichi",
        label_ka: "北窓後一",
        id: 55
      })
      
    
      this.add({
        label_eng: "Nihodō",
        label_ka: "二歩堂",
        id: 56
      })
      
    
      this.add({
        label_eng: "Chikamatsu Yanagi",
        label_ka: "近松柳",
        id: 57
      })
      
    
      this.add({
        label_eng: "Koku Zōsu",
        label_ka: "黒蔵主",
        id: 58
      })
      
    
      this.add({
        label_eng: "Mitsu",
        label_ka: "",
        id: 59
      })
      
    
      this.add({
        label_eng: "Sagawa Tōta",
        label_ka: "佐川藤太",
        id: 60
      })
      
    
      this.add({
        label_eng: "Chikamatsu Baishiken",
        label_ka: "近松梅枝軒",
        id: 61
      })
      
    
      this.add({
        label_eng: "Yoshida Shingo",
        label_ka: "吉田新吾",
        id: 62
      })
      
    
      this.add({
        label_eng: "Nakamura Gyogan",
        label_ka: "中村漁岸",
        id: 63
      })
      
    
      this.add({
        label_eng: "Yatami Heishichi",
        label_ka: "八民平七",
        id: 64
      })
      
    
      this.add({
        label_eng: "Tamaki [Fudeji?]",
        label_ka: "玉木筆二",
        id: 65
      })
      
    
      this.add({
        label_eng: "Tankō Tazō",
        label_ka: "亶侯多蔵",
        id: 66
      })
      
    
      this.add({
        label_eng: "Tsutsui Hanbei",
        label_ka: "筒井半平",
        id: 67
      })
      
    
      this.add({
        label_eng: "Asada Kakei",
        label_ka: "浅田可啓",
        id: 68
      })
      
    
      this.add({
        label_eng: "Chikamatsu Kazō",
        label_ka: "近松加造",
        id: 69
      })
      
    
      this.add({
        label_eng: "Chikamatsu Manju",
        label_ka: "近松万寿",
        id: 70
      })
      
    
      this.add({
        label_eng: "Takeda Heishichi",
        label_ka: "竹田平七",
        id: 71
      })
      
    
      this.add({
        label_eng: "Naniwa Sanzō",
        label_ka: "難波三蔵",
        id: 72
      })
      
    
      this.add({
        label_eng: "Chikamatsu Tokuzō",
        label_ka: "近松徳三",
        id: 73
      })
      
    
      this.add({
        label_eng: "Terada Heizō",
        label_ka: "寺田兵蔵",
        id: 74
      })
      
    
      this.add({
        label_eng: "Takeda Bunkichi",
        label_ka: "竹田文吉",
        id: 75
      })
      
    
      this.add({
        label_eng: "Matsu Kanshi",
        label_ka: "松貫四",
        id: 76
      })
      
    
      this.add({
        label_eng: "Yoshida Kakumaru",
        label_ka: "吉田角丸",
        id: 77
      })
      
    
      this.add({
        label_eng: "Kujō Takeko",
        label_ka: "九條武子",
        id: 78
      })
      
    
      this.add({
        label_eng: "Fukumatsu Tōsuke",
        label_ka: "福松藤助",
        id: 79
      })
      
    
      this.add({
        label_eng: "Namiki Eisuke",
        label_ka: "並木永輔",
        id: 80
      })
      
    
      this.add({
        label_eng: "Yoshida Kanshi",
        label_ka: "吉田冠子",
        id: 81
      })
      
    
      this.add({
        label_eng: "Kimura Tomiko",
        label_ka: "木村富子",
        id: 82
      })
      
    
      this.add({
        label_eng: "Sakurada Jisuke, III",
        label_ka: "櫻田治助",
        id: 83
      })
      
    
      this.add({
        label_eng: "Tamenaga Tarobei",
        label_ka: "為永太郎兵衛",
        id: 84
      })
      
    
      this.add({
        label_eng: "Amano Shirō",
        label_ka: "雨野士郎",
        id: 85
      })
      
    
      this.add({
        label_eng: "Takahashi Buhei",
        label_ka: "高橋武兵衛",
        id: 86
      })
      
    
      this.add({
        label_eng: "Oda Sakunosuke",
        label_ka: "織田作之助",
        id: 87
      })
      
    
      this.add({
        label_eng: "Yamaguchi Kōichi",
        label_ka: "山口廣一",
        id: 88
      })
      
    
      this.add({
        label_eng: "Yamada Shōichi",
        label_ka: "山田庄一",
        id: 89
      })
      
    
      this.add({
        label_eng: "Uno Chiyo",
        label_ka: "宇野千代",
        id: 90
      })
      
    
      this.add({
        label_eng: "Matsuda Saiji",
        label_ka: "松田才二",
        id: 91
      })
      
    
      this.add({
        label_eng: "Takeda [Shinmatsu?]",
        label_ka: "竹田新松",
        id: 92
      })
      
    
      this.add({
        label_eng: "Chikamatsu Tōnan",
        label_ka: "近松東南",
        id: 93
      })
      
    
      this.add({
        label_eng: "Kikuchi Hiroshi",
        label_ka: "菊池寛",
        id: 94
      })
      
    
      this.add({
        label_eng: "Takeda Izumi",
        label_ka: "竹田和泉",
        id: 95
      })
      
    
      this.add({
        label_eng: "Kako Chika",
        label_ka: "加古千賀",
        id: 96
      })
      
    
      this.add({
        label_eng: "Ōno Keizō",
        label_ka: "大野惠造",
        id: 97
      })
      
    
      this.add({
        label_eng: "Toyota Shōzō",
        label_ka: "豊田正蔵",
        id: 98
      })
      
    
      this.add({
        label_eng: "Ogawa Hanbei",
        label_ka: "小川半平",
        id: 99
      })
      
    
      this.add({
        label_eng: "Fukuuchi Kigai",
        label_ka: "福内鬼外",
        id: 100
      })
      
    
      this.add({
        label_eng: "Takemoto Nishikidayū",
        label_ka: "竹本錦太夫",
        id: 101
      })
      
    
      this.add({
        label_eng: "Tanizaki Junichirō",
        label_ka: "谷崎潤一郎",
        id: 102
      })
      
    
      this.add({
        label_eng: "Tsukuda Heishichi",
        label_ka: "筑田平七",
        id: 103
      })
      
    
      this.add({
        label_eng: "Takami Jun",
        label_ka: "高見順",
        id: 104
      })
      
    
      this.add({
        label_eng: "Ariyoshi Sawako",
        label_ka: "有吉佐和子",
        id: 105
      })
      
    
      this.add({
        label_eng: "Takeshiba Genzō",
        label_ka: "竹柴諺蔵",
        id: 106
      })
      
    
      this.add({
        label_eng: "Tamekawa Sōsuke",
        label_ka: "為川宗輔",
        id: 107
      })
      
    
      this.add({
        label_eng: "Tsutsukawa Hanji",
        label_ka: "筒川半二",
        id: 108
      })
      
    
      this.add({
        label_eng: "Toyozawa Danpei, II",
        label_ka: "豊沢団平",
        id: 109
      })
      
    
      this.add({
        label_eng: "Nozawa Kichibei, III",
        label_ka: "野沢吉兵衛",
        id: 110
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Jūzō, IV",
        label_ka: "鶴澤重造",
        id: 111
      })
      
    
      this.add({
        label_eng: "Chikamatsu Kasaku",
        label_ka: "近松加作",
        id: 112
      })
      
    
      this.add({
        label_eng: "Sakae Zenpei",
        label_ka: "栄善平",
        id: 113
      })
      
    
      this.add({
        label_eng: "Yamada Shōichi",
        label_ka: "山田庄一",
        id: 114
      })
      
    
      this.add({
        label_eng: "Takeshiba Kamesuke",
        label_ka: "",
        id: 115
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Dōhachi, I",
        label_ka: "鶴澤 道八",
        id: 116
      })
      
    
    // characters
    
      this.add({
        label_eng: "Farmer",
        label_ka: "おやじ",
        id: 117
      })
      
    
      this.add({
        label_eng: "Farmer's wife",
        label_ka: "女房",
        id: 118
      })
      
    
      this.add({
        label_eng: "Magotaro, a horse",
        label_ka: "孫太郎（馬）",
        id: 119
      })
      
    
      this.add({
        label_eng: "Local governor",
        label_ka: "お代官",
        id: 120
      })
      
    
      this.add({
        label_eng: "Local governor's assistant",
        label_ka: "お代官のこぶん",
        id: 121
      })
      
    
      this.add({
        label_eng: "Village headman",
        label_ka: "庄屋さま",
        id: 122
      })
      
    
      this.add({
        label_eng: "Local governor's wife",
        label_ka: "奥方",
        id: 123
      })
      
    
      this.add({
        label_eng: "Urazato",
        label_ka: "女郎浦里",
        id: 124
      })
      
    
      this.add({
        label_eng: "Midori",
        label_ka: "禿みどり",
        id: 125
      })
      
    
      this.add({
        label_eng: "Tokijiro Kasuga",
        label_ka: "春日時次郎",
        id: 126
      })
      
    
      this.add({
        label_eng: "Otatsu",
        label_ka: "髪結おたつ",
        id: 127
      })
      
    
      this.add({
        label_eng: "Okaya",
        label_ka: "遣り手おかや",
        id: 128
      })
      
    
      this.add({
        label_eng: "Kambei",
        label_ka: "亭主勘兵衛",
        id: 129
      })
      
    
      this.add({
        label_eng: "Hikoroku",
        label_ka: "手代彦六",
        id: 130
      })
      
    
      this.add({
        label_eng: "Chuzaemon, Chief retainer",
        label_ka: "老家老忠左衛門",
        id: 131
      })
      
    
      this.add({
        label_eng: "Kunimochi, Feudal lord",
        label_ka: "大名国持",
        id: 132
      })
      
    
      this.add({
        label_eng: "Hanasode, a courtesan",
        label_ka: "花袖太夫",
        id: 133
      })
      
    
      this.add({
        label_eng: "Courtesan",
        label_ka: "遊女",
        id: 134
      })
      
    
      this.add({
        label_eng: "Ukon",
        label_ka: "近習右近",
        id: 135
      })
      
    
      this.add({
        label_eng: "Sakyo",
        label_ka: "近習左京",
        id: 136
      })
      
    
      this.add({
        label_eng: "Madam",
        label_ka: "女将",
        id: 137
      })
      
    
      this.add({
        label_eng: "Crown Prince Sakuragi",
        label_ka: "桜木親王",
        id: 138
      })
      
    
      this.add({
        label_eng: "Motokata",
        label_ka: "左大将元方",
        id: 139
      })
      
    
      this.add({
        label_eng: "Yoshifuru",
        label_ka: "小野好古",
        id: 140
      })
      
    
      this.add({
        label_eng: "Sakaki",
        label_ka: "榊の前",
        id: 141
      })
      
    
      this.add({
        label_eng: "Jibu",
        label_ka: "岩倉治部大輔",
        id: 142
      })
      
    
      this.add({
        label_eng: "Taro",
        label_ka: "左近太郎",
        id: 143
      })
      
    
      this.add({
        label_eng: "Yasunori Kamo's widow",
        label_ka: "加茂の後室",
        id: 144
      })
      
    
      this.add({
        label_eng: "Heima",
        label_ka: "乾平馬",
        id: 145
      })
      
    
      this.add({
        label_eng: "Yasuna",
        label_ka: "安倍保名",
        id: 146
      })
      
    
      this.add({
        label_eng: "Yokambei",
        label_ka: "奴与勘平",
        id: 147
      })
      
    
      this.add({
        label_eng: "Kuzunoha",
        label_ka: "葛の葉姫",
        id: 148
      })
      
    
      this.add({
        label_eng: "Akuemon",
        label_ka: "石川悪右衛門",
        id: 149
      })
      
    
      this.add({
        label_eng: "Fox-Kuzunoha",
        label_ka: "女房葛の葉",
        id: 150
      })
      
    
      this.add({
        label_eng: "Yasuna's son",
        label_ka: "安倍童子",
        id: 151
      })
      
    
      this.add({
        label_eng: "Dampachi",
        label_ka: "木綿買実は荏柄段八",
        id: 152
      })
      
    
      this.add({
        label_eng: "Shoji",
        label_ka: "信田庄司",
        id: 153
      })
      
    
      this.add({
        label_eng: "Shoji's wife",
        label_ka: "庄司の妻",
        id: 154
      })
      
    
      this.add({
        label_eng: "Unzo",
        label_ka: "信楽雲蔵",
        id: 155
      })
      
    
      this.add({
        label_eng: "Toji",
        label_ka: "落合藤治",
        id: 156
      })
      
    
      this.add({
        label_eng: "Yakambei",
        label_ka: "奴野干平",
        id: 157
      })
      
    
      this.add({
        label_eng: "Tanuki",
        label_ka: "狸",
        id: 158
      })
      
    
      this.add({
        label_eng: "Kawataro",
        label_ka: "川太郎",
        id: 159
      })
      
    
      this.add({
        label_eng: "Rokurohime",
        label_ka: "ろくろ姫",
        id: 160
      })
      
    
      this.add({
        label_eng: "Aosaginoshin",
        label_ka: "青鷺之進",
        id: 161
      })
      
    
      this.add({
        label_eng: "Yukionna",
        label_ka: "雪女",
        id: 162
      })
      
    
      this.add({
        label_eng: "Kawauso",
        label_ka: "かわうそ",
        id: 163
      })
      
    
      this.add({
        label_eng: "Kamaitachi",
        label_ka: "かまいたち",
        id: 164
      })
      
    
      this.add({
        label_eng: "Kamaitachi's retainer",
        label_ka: "いたちの家来",
        id: 165
      })
      
    
      this.add({
        label_eng: "Kyosei",
        label_ka: "喬生",
        id: 166
      })
      
    
      this.add({
        label_eng: "Old man, a neighbor",
        label_ka: "隣ノ爺",
        id: 167
      })
      
    
      this.add({
        label_eng: "Old Woman, a neighbor",
        label_ka: "隣ノ婆",
        id: 168
      })
      
    
      this.add({
        label_eng: "Neighbor",
        label_ka: "近所の人",
        id: 169
      })
      
    
      this.add({
        label_eng: "Kinren",
        label_ka: "金連",
        id: 170
      })
      
    
      this.add({
        label_eng: "Reikei",
        label_ka: "麗卿",
        id: 171
      })
      
    
      this.add({
        label_eng: "Reikei doll",
        label_ka: "麗卿藁人形",
        id: 172
      })
      
    
      this.add({
        label_eng: "Kinren doll",
        label_ka: "金連藁人形",
        id: 173
      })
      
    
      this.add({
        label_eng: "Suikan",
        label_ka: "酔漢",
        id: 174
      })
      
    
      this.add({
        label_eng: "Priest at Koshinji",
        label_ka: "湖心寺の僧",
        id: 175
      })
      
    
      this.add({
        label_eng: "Yojiro",
        label_ka: "猿廻し与次郎",
        id: 176
      })
      
    
      this.add({
        label_eng: "Oshun",
        label_ka: "娘おしゅん",
        id: 177
      })
      
    
      this.add({
        label_eng: "Dembei",
        label_ka: "井筒屋伝兵衛",
        id: 178
      })
      
    
      this.add({
        label_eng: "Kanzaemon",
        label_ka: "横淵官左衛門",
        id: 179
      })
      
    
      this.add({
        label_eng: "Yojiro's mother",
        label_ka: "与次郎の母",
        id: 180
      })
      
    
      this.add({
        label_eng: "Kyuhachi",
        label_ka: "廻しの久八",
        id: 181
      })
      
    
      this.add({
        label_eng: "Otsuru",
        label_ka: "稽古娘おつる",
        id: 182
      })
      
    
      this.add({
        label_eng: "Kanzo",
        label_ka: "仲買勘蔵",
        id: 183
      })
      
    
      this.add({
        label_eng: "Tametomo",
        label_ka: "鎮西八郎為朝",
        id: 184
      })
      
    
      this.add({
        label_eng: "Kiheiji",
        label_ka: "八町礫紀平治太夫",
        id: 185
      })
      
    
      this.add({
        label_eng: "Takama",
        label_ka: "高間太郎原鑑",
        id: 186
      })
      
    
      this.add({
        label_eng: "Sasarae",
        label_ka: "簓江",
        id: 187
      })
      
    
      this.add({
        label_eng: "Isohagi",
        label_ka: "磯萩",
        id: 188
      })
      
    
      this.add({
        label_eng: "Tameyori",
        label_ka: "為頼",
        id: 189
      })
      
    
      this.add({
        label_eng: "Shimagimi",
        label_ka: "島君",
        id: 190
      })
      
    
      this.add({
        label_eng: "Spy",
        label_ka: "忍び",
        id: 191
      })
      
    
      this.add({
        label_eng: "Mutoda",
        label_ka: "武藤太",
        id: 192
      })
      
    
      this.add({
        label_eng: "Ghost of retired Emperor Sutoku",
        label_ka: "崇徳上皇の霊",
        id: 193
      })
      
    
      this.add({
        label_eng: "Ghost of Yorinaga",
        label_ka: "左大臣頼長の霊",
        id: 194
      })
      
    
      this.add({
        label_eng: "Ghost of Tameyoshi",
        label_ka: "六条判官為義の霊",
        id: 195
      })
      
    
      this.add({
        label_eng: "Crow",
        label_ka: "烏天狗",
        id: 196
      })
      
    
      this.add({
        label_eng: "Shiranui",
        label_ka: "白縫姫",
        id: 197
      })
      
    
      this.add({
        label_eng: "Chigusa, a maid",
        label_ka: "腰元千種",
        id: 198
      })
      
    
      this.add({
        label_eng: "Yamahagi, a maid",
        label_ka: "腰元山萩",
        id: 199
      })
      
    
      this.add({
        label_eng: "Takihei, a servant",
        label_ka: "郎党滝平",
        id: 200
      })
      
    
      this.add({
        label_eng: "Sutemaru (Shunten, later known as Sutemaru)",
        label_ka: "舜天丸後に舜天王",
        id: 201
      })
      
    
      this.add({
        label_eng: "Riyu",
        label_ka: "紫巾官利勇",
        id: 202
      })
      
    
      this.add({
        label_eng: "Wanzu",
        label_ka: "王子",
        id: 203
      })
      
    
      this.add({
        label_eng: "Neiwannyo",
        label_ka: "寧王女",
        id: 204
      })
      
    
      this.add({
        label_eng: "Kumagimi",
        label_ka: "巫女阿公",
        id: 205
      })
      
    
      this.add({
        label_eng: "Tsuru",
        label_ka: "鶴",
        id: 206
      })
      
    
      this.add({
        label_eng: "Kame",
        label_ka: "亀",
        id: 207
      })
      
    
      this.add({
        label_eng: "Komaki",
        label_ka: "小巻",
        id: 208
      })
      
    
      this.add({
        label_eng: "Sukekuni",
        label_ka: "助国",
        id: 209
      })
      
    
      this.add({
        label_eng: "Osan",
        label_ka: "女房おさん",
        id: 210
      })
      
    
      this.add({
        label_eng: "Ishun",
        label_ka: "大経師以春",
        id: 211
      })
      
    
      this.add({
        label_eng: "Sukeyemon",
        label_ka: "手代助右衛門",
        id: 212
      })
      
    
      this.add({
        label_eng: "Tama",
        label_ka: "下女玉",
        id: 213
      })
      
    
      this.add({
        label_eng: "Osan's mother",
        label_ka: "おさん母",
        id: 214
      })
      
    
      this.add({
        label_eng: "Mohei",
        label_ka: "手代茂兵衛",
        id: 215
      })
      
    
      this.add({
        label_eng: "Shichisuke, a servant",
        label_ka: "下男七介",
        id: 216
      })
      
    
      this.add({
        label_eng: "Denkichi, a servant",
        label_ka: "下男伝吉",
        id: 217
      })
      
    
      this.add({
        label_eng: "Bairyu",
        label_ka: "赤松梅龍",
        id: 218
      })
      
    
      this.add({
        label_eng: "Dojun",
        label_ka: "岐阜屋道順",
        id: 219
      })
      
    
      this.add({
        label_eng: "Street entertainer",
        label_ka: "万歳",
        id: 220
      })
      
    
      this.add({
        label_eng: "Government official",
        label_ka: "役人",
        id: 221
      })
      
    
      this.add({
        label_eng: "Farmer",
        label_ka: "百姓",
        id: 222
      })
      
    
      this.add({
        label_eng: "Pumpkin",
        label_ka: "かぼちゃ",
        id: 223
      })
      
    
      this.add({
        label_eng: "Bottle gourd",
        label_ka: "夕顔",
        id: 224
      })
      
    
      this.add({
        label_eng: "Kinezo",
        label_ka: "団子売杵造",
        id: 225
      })
      
    
      this.add({
        label_eng: "Ousu",
        label_ka: "団子売お臼",
        id: 226
      })
      
    
      this.add({
        label_eng: "Akoya",
        label_ka: "遊君阿古屋",
        id: 227
      })
      
    
      this.add({
        label_eng: "Shigetada",
        label_ka: "秩父庄司重忠",
        id: 228
      })
      
    
      this.add({
        label_eng: "Iwanaga",
        label_ka: "岩永左衛門",
        id: 229
      })
      
    
      this.add({
        label_eng: "Hanzawa",
        label_ka: "榛沢六郎",
        id: 230
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "水奴",
        id: 231
      })
      
    
      this.add({
        label_eng: "Kichisaburo",
        label_ka: "小姓吉三郎",
        id: 232
      })
      
    
      this.add({
        label_eng: "Osugi",
        label_ka: "下女お杉",
        id: 233
      })
      
    
      this.add({
        label_eng: "Oshichi",
        label_ka: "娘お七",
        id: 234
      })
      
    
      this.add({
        label_eng: "Kyubei",
        label_ka: "親久兵衛",
        id: 235
      })
      
    
      this.add({
        label_eng: "Kyubei's wife",
        label_ka: "久兵衛女房",
        id: 236
      })
      
    
      this.add({
        label_eng: "Yasaku",
        label_ka: "丁稚弥作",
        id: 237
      })
      
    
      this.add({
        label_eng: "Buhei",
        label_ka: "武兵衛 (釜屋武兵衛 )",
        id: 238
      })
      
    
      this.add({
        label_eng: "Tazaemon",
        label_ka: "太左衛門",
        id: 239
      })
      
    
      this.add({
        label_eng: "Harunaga",
        label_ka: "尾田春長",
        id: 240
      })
      
    
      this.add({
        label_eng: "Hisayoshi",
        label_ka: "真柴久吉(旅僧実は)",
        id: 241
      })
      
    
      this.add({
        label_eng: "Mitsuhide",
        label_ka: "武智光秀",
        id: 242
      })
      
    
      this.add({
        label_eng: "Priest Abe",
        label_ka: "安倍法印",
        id: 243
      })
      
    
      this.add({
        label_eng: "Priest Futen",
        label_ka: "普天坊",
        id: 244
      })
      
    
      this.add({
        label_eng: "Naniwa-Chunagon Kanefuyu",
        label_ka: "浪花中納言",
        id: 245
      })
      
    
      this.add({
        label_eng: "Rammaru",
        label_ka: "森の蘭丸",
        id: 246
      })
      
    
      this.add({
        label_eng: "Jujiro",
        label_ka: "武智十次郎",
        id: 247
      })
      
    
      this.add({
        label_eng: "Samboshi",
        label_ka: "三法師丸",
        id: 248
      })
      
    
      this.add({
        label_eng: "Lady Ano",
        label_ka: "阿野の局",
        id: 249
      })
      
    
      this.add({
        label_eng: "Shinobu",
        label_ka: "腰元しのぶ",
        id: 250
      })
      
    
      this.add({
        label_eng: "Rikimaru",
        label_ka: "森の力丸",
        id: 251
      })
      
    
      this.add({
        label_eng: "Sogi",
        label_ka: "宗祇坊",
        id: 252
      })
      
    
      this.add({
        label_eng: "Kanroku, a soldier",
        label_ka: "珍分勘六",
        id: 253
      })
      
    
      this.add({
        label_eng: "Masakiyo",
        label_ka: "加藤正清",
        id: 254
      })
      
    
      this.add({
        label_eng: "Tamatsuyu",
        label_ka: "玉露",
        id: 255
      })
      
    
      this.add({
        label_eng: "Ekei",
        label_ka: "安徳寺恵瓊",
        id: 256
      })
      
    
      this.add({
        label_eng: "Yamasaburo",
        label_ka: "浦辺山三郎",
        id: 257
      })
      
    
      this.add({
        label_eng: "Chozaemon",
        label_ka: "清水長左衛門",
        id: 258
      })
      
    
      this.add({
        label_eng: "Yariume",
        label_ka: "妻やり梅",
        id: 259
      })
      
    
      this.add({
        label_eng: "Takakage",
        label_ka: "小梅川隆景",
        id: 260
      })
      
    
      this.add({
        label_eng: "Satsuki",
        label_ka: "母皐月",
        id: 261
      })
      
    
      this.add({
        label_eng: "Shioten",
        label_ka: "四王天田島頭 (百姓長兵衛実は四王天田島頭) (四王天但馬守)",
        id: 262
      })
      
    
      this.add({
        label_eng: "Misao",
        label_ka: "妻操",
        id: 263
      })
      
    
      this.add({
        label_eng: "Hatsugiku",
        label_ka: "嫁初菊",
        id: 264
      })
      
    
      this.add({
        label_eng: "Yukinoya",
        label_ka: "妻雪の谷",
        id: 265
      })
      
    
      this.add({
        label_eng: "Matsuyo",
        label_ka: "姉松代",
        id: 266
      })
      
    
      this.add({
        label_eng: "Shigenari",
        label_ka: "鱸重成",
        id: 267
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "小姓",
        id: 268
      })
      
    
      this.add({
        label_eng: "Keikaku",
        label_ka: "慶覚君",
        id: 269
      })
      
    
      this.add({
        label_eng: "Hachiro",
        label_ka: "鷺森八郎",
        id: 270
      })
      
    
      this.add({
        label_eng: "Magoichi",
        label_ka: "鱸孫市",
        id: 271
      })
      
    
      this.add({
        label_eng: "Rokuro",
        label_ka: "是角六郎",
        id: 272
      })
      
    
      this.add({
        label_eng: "Shigewaka",
        label_ka: "重若丸",
        id: 273
      })
      
    
      this.add({
        label_eng: "Kiyohide Nakagawa",
        label_ka: "中川清秀",
        id: 274
      })
      
    
      this.add({
        label_eng: "Kenketsu",
        label_ka: "僧献穴",
        id: 275
      })
      
    
      this.add({
        label_eng: "Sota, in fact Shichiro",
        label_ka: "猿嶋惣太実は淡路七郎",
        id: 276
      })
      
    
      this.add({
        label_eng: "Karaito",
        label_ka: "惣太女房から糸",
        id: 277
      })
      
    
      this.add({
        label_eng: "Sajitayu",
        label_ka: "蠅頭の左次太夫",
        id: 278
      })
      
    
      this.add({
        label_eng: "Bozuko",
        label_ka: "坊主子",
        id: 279
      })
      
    
      this.add({
        label_eng: "Mutsu",
        label_ka: "六",
        id: 280
      })
      
    
      this.add({
        label_eng: "Suika",
        label_ka: "すいか(すいくわ)",
        id: 281
      })
      
    
      this.add({
        label_eng: "Yazo",
        label_ka: "はねわなの弥蔵(弥次)",
        id: 282
      })
      
    
      this.add({
        label_eng: "Umewakamaru",
        label_ka: "吉田梅若丸",
        id: 283
      })
      
    
      this.add({
        label_eng: "Takekuni",
        label_ka: "県の権正武国",
        id: 284
      })
      
    
      this.add({
        label_eng: "Hanjogozen",
        label_ka: "班女御前",
        id: 285
      })
      
    
      this.add({
        label_eng: "Hokaibo, in fact Tengu",
        label_ka: "山伏法界坊実は天狗",
        id: 286
      })
      
    
      this.add({
        label_eng: "Matsuwakamaru",
        label_ka: "吉田松若丸",
        id: 287
      })
      
    
      this.add({
        label_eng: "Chogoro Nuregami",
        label_ka: "濡髪長五郎",
        id: 288
      })
      
    
      this.add({
        label_eng: "Tea stall proprietor",
        label_ka: "茶店亭主",
        id: 289
      })
      
    
      this.add({
        label_eng: "Chokichi Hanaregoma",
        label_ka: "放駒長吉",
        id: 290
      })
      
    
      this.add({
        label_eng: "Oseki",
        label_ka: "姉お関",
        id: 291
      })
      
    
      this.add({
        label_eng: "Geta-no-Ichi",
        label_ka: "下駄の市",
        id: 292
      })
      
    
      this.add({
        label_eng: "Node-no-San",
        label_ka: "野手の三",
        id: 293
      })
      
    
      this.add({
        label_eng: "Rokubei",
        label_ka: "同行六兵衛",
        id: 294
      })
      
    
      this.add({
        label_eng: "Myorin",
        label_ka: "尼妙林",
        id: 295
      })
      
    
      this.add({
        label_eng: "Gonzaemon Hiraoka",
        label_ka: "平岡郷左衛門",
        id: 296
      })
      
    
      this.add({
        label_eng: "Ariemon Mihara",
        label_ka: "三原有右衛門",
        id: 297
      })
      
    
      this.add({
        label_eng: "Yogoro Yamazaki",
        label_ka: "山崎与五郎",
        id: 298
      })
      
    
      this.add({
        label_eng: "Azuma",
        label_ka: "藤屋吾妻",
        id: 299
      })
      
    
      this.add({
        label_eng: "Oteru",
        label_ka: "嫁お照",
        id: 300
      })
      
    
      this.add({
        label_eng: "Oyoshi",
        label_ka: "下女およし",
        id: 301
      })
      
    
      this.add({
        label_eng: "Jimbei",
        label_ka: "駕籠舁甚兵衛",
        id: 302
      })
      
    
      this.add({
        label_eng: "Tasuke",
        label_ka: "駕籠舁太助",
        id: 303
      })
      
    
      this.add({
        label_eng: "Jibuemon Hashimoto",
        label_ka: "橋本治部右衛門",
        id: 304
      })
      
    
      this.add({
        label_eng: "Yojibei Yamazaki",
        label_ka: "山崎与次兵衛",
        id: 305
      })
      
    
      this.add({
        label_eng: "Shohachi, a senior employee",
        label_ka: "手代庄八",
        id: 306
      })
      
    
      this.add({
        label_eng: "Junior employee",
        label_ka: "丁稚",
        id: 307
      })
      
    
      this.add({
        label_eng: "Ohaya",
        label_ka: "女房お早",
        id: 308
      })
      
    
      this.add({
        label_eng: "Chogoro's mother",
        label_ka: "長五郎母(十次兵衛母)",
        id: 309
      })
      
    
      this.add({
        label_eng: "Jujibei Nampo",
        label_ka: "南方十次兵衛",
        id: 310
      })
      
    
      this.add({
        label_eng: "Tampei Hiraoka",
        label_ka: "平岡丹平",
        id: 311
      })
      
    
      this.add({
        label_eng: "Denzo Mihara",
        label_ka: "三原伝蔵",
        id: 312
      })
      
    
      this.add({
        label_eng: "Naritada, a court noble",
        label_ka: "大納言成忠",
        id: 313
      })
      
    
      this.add({
        label_eng: "Suemune, a Heike clansman",
        label_ka: "長田太郎末宗",
        id: 314
      })
      
    
      this.add({
        label_eng: "Yoshikata, a Genji general",
        label_ka: "木曾先生義賢",
        id: 315
      })
      
    
      this.add({
        label_eng: "Emperor Goshirakawa",
        label_ka: "後白河天皇",
        id: 316
      })
      
    
      this.add({
        label_eng: "Kiyomori, Head of the Heike clan",
        label_ka: "安芸守平清盛",
        id: 317
      })
      
    
      this.add({
        label_eng: "Tsunetoshi, a Heike clansman",
        label_ka: "難波六郎常俊",
        id: 318
      })
      
    
      this.add({
        label_eng: "Shigemori, Son of Kiyomori",
        label_ka: "平重盛 (小松内府重盛)",
        id: 319
      })
      
    
      this.add({
        label_eng: "Nagatsune",
        label_ka: "高橋判官長常",
        id: 320
      })
      
    
      this.add({
        label_eng: "Yukitsuna, a Genji warrior",
        label_ka: "多田蔵人行綱",
        id: 321
      })
      
    
      this.add({
        label_eng: "Aoi-Gozen, Yoshikata's wife",
        label_ka: "葵御前",
        id: 322
      })
      
    
      this.add({
        label_eng: "Matsuyoi, Yoshikata's daughter",
        label_ka: "待宵姫",
        id: 323
      })
      
    
      this.add({
        label_eng: "Kurosuke, a farmer",
        label_ka: "百姓九郎助",
        id: 324
      })
      
    
      this.add({
        label_eng: "Koman, Kurosuke's daughter",
        label_ka: "女房小まん",
        id: 325
      })
      
    
      this.add({
        label_eng: "Tarokichi, Koman's son",
        label_ka: "伜太郎吉",
        id: 326
      })
      
    
      this.add({
        label_eng: "Munemasa, a Heike warrior",
        label_ka: "進野次郎宗政",
        id: 327
      })
      
    
      this.add({
        label_eng: "Heinai, Munemasa's retainer",
        label_ka: "横田平内",
        id: 328
      })
      
    
      this.add({
        label_eng: "Gunzo, Munemasa's retainer",
        label_ka: "軍蔵",
        id: 329
      })
      
    
      this.add({
        label_eng: "Chuta, a Heike warrior",
        label_ka: "塩見忠太",
        id: 330
      })
      
    
      this.add({
        label_eng: "Munemori, Son of Shigemori",
        label_ka: "平宗盛",
        id: 331
      })
      
    
      this.add({
        label_eng: "Saemon, a Heike general",
        label_ka: "飛騨左衛門",
        id: 332
      })
      
    
      this.add({
        label_eng: "Sanemori, a Heike general",
        label_ka: "斎藤実盛",
        id: 333
      })
      
    
      this.add({
        label_eng: "Koyoshi, Kurosuke's wife",
        label_ka: "九郎助女房小よし",
        id: 334
      })
      
    
      this.add({
        label_eng: "Nisota, Kurosuke's nephew",
        label_ka: "矢橋二惣太",
        id: 335
      })
      
    
      this.add({
        label_eng: "Seno-o, a Heike warrior",
        label_ka: "瀬尾十郎",
        id: 336
      })
      
    
      this.add({
        label_eng: "Village headman",
        label_ka: "庄屋",
        id: 337
      })
      
    
      this.add({
        label_eng: "Matsunami Kengyo",
        label_ka: "松波検校",
        id: 338
      })
      
    
      this.add({
        label_eng: "Reisui, a highway robber",
        label_ka: "谷川冷水",
        id: 339
      })
      
    
      this.add({
        label_eng: "Kozakura, Yukitsuna's daughter",
        label_ka: "娘小桜",
        id: 340
      })
      
    
      this.add({
        label_eng: "Wakaba, a lady-in-waiting",
        label_ka: "若葉局",
        id: 341
      })
      
    
      this.add({
        label_eng: "Momiji, a lady-in-waiting",
        label_ka: "紅葉局",
        id: 342
      })
      
    
      this.add({
        label_eng: "Moritsugu, a Heike clansman (Etchu Jiro)",
        label_ka: "越中次郎盛次",
        id: 343
      })
      
    
      this.add({
        label_eng: "Tadamitsu, a Heike clansman (Kazusa Goro)",
        label_ka: "上総五郎忠光",
        id: 344
      })
      
    
      this.add({
        label_eng: "Shinsaku",
        label_ka: "新作",
        id: 345
      })
      
    
      this.add({
        label_eng: "Otsuyu",
        label_ka: "娘お露",
        id: 346
      })
      
    
      this.add({
        label_eng: "Mokuzo (Kizo)",
        label_ka: "どすの木蔵",
        id: 347
      })
      
    
      this.add({
        label_eng: "Tsubute-no-san",
        label_ka: "礫の三",
        id: 348
      })
      
    
      this.add({
        label_eng: "Kanta",
        label_ka: "勘太",
        id: 349
      })
      
    
      this.add({
        label_eng: "Teruwaka",
        label_ka: "輝若君",
        id: 350
      })
      
    
      this.add({
        label_eng: "Jiju",
        label_ka: "乳人侍従",
        id: 351
      })
      
    
      this.add({
        label_eng: "Osaji",
        label_ka: "母お匕",
        id: 352
      })
      
    
      this.add({
        label_eng: "Gumpei, in fact Masakiyo",
        label_ka: "十河軍平実は加藤正清",
        id: 353
      })
      
    
      this.add({
        label_eng: "Zesai",
        label_ka: "小西是斎",
        id: 354
      })
      
    
      this.add({
        label_eng: "Mochibei",
        label_ka: "庄屋持兵衛",
        id: 355
      })
      
    
      this.add({
        label_eng: "Tokichi, later known as Hisayoshi",
        label_ka: "此下東吉後に真柴久吉",
        id: 356
      })
      
    
      this.add({
        label_eng: "Kojibei",
        label_ka: "小次兵衛",
        id: 357
      })
      
    
      this.add({
        label_eng: "Daizen",
        label_ka: "松永大膳",
        id: 358
      })
      
    
      this.add({
        label_eng: "Kitota",
        label_ka: "松永鬼藤太",
        id: 359
      })
      
    
      this.add({
        label_eng: "Yukihime",
        label_ka: "雪姫",
        id: 360
      })
      
    
      this.add({
        label_eng: "Naonobu",
        label_ka: "狩野之介直信",
        id: 361
      })
      
    
      this.add({
        label_eng: "Keijuin",
        label_ka: "慶寿院",
        id: 362
      })
      
    
      this.add({
        label_eng: "Shingo Ishihara",
        label_ka: "石原新五",
        id: 363
      })
      
    
      this.add({
        label_eng: "Tanzo Inui",
        label_ka: "乾丹蔵",
        id: 364
      })
      
    
      this.add({
        label_eng: "Chuji Kawashima",
        label_ka: "川嶋忠治",
        id: 365
      })
      
    
      this.add({
        label_eng: "Okaya",
        label_ka: "女房おかや",
        id: 366
      })
      
    
      this.add({
        label_eng: "Yasaku, a farmer",
        label_ka: "百姓弥作",
        id: 367
      })
      
    
      this.add({
        label_eng: "Wasuke Kayano",
        label_ka: "萱野和助",
        id: 368
      })
      
    
      this.add({
        label_eng: "Shichidayu",
        label_ka: "芝村七太夫",
        id: 369
      })
      
    
      this.add({
        label_eng: "Kakubei",
        label_ka: "狸の角兵衛",
        id: 370
      })
      
    
      this.add({
        label_eng: "Rikiya",
        label_ka: "大星力弥",
        id: 371
      })
      
    
      this.add({
        label_eng: "Okahei, in fact Heiemon Teraoka",
        label_ka: "奴岡平実は寺岡平右衛門",
        id: 372
      })
      
    
      this.add({
        label_eng: "Acolyte",
        label_ka: "所化",
        id: 373
      })
      
    
      this.add({
        label_eng: "Pilgrim",
        label_ka: "巡礼",
        id: 374
      })
      
    
      this.add({
        label_eng: "Packhorse driver",
        label_ka: "馬方",
        id: 375
      })
      
    
      this.add({
        label_eng: "Traveling priest",
        label_ka: "高野聖",
        id: 376
      })
      
    
      this.add({
        label_eng: "Courier",
        label_ka: "飛脚",
        id: 377
      })
      
    
      this.add({
        label_eng: "Yuranosuke",
        label_ka: "大星由良之介",
        id: 378
      })
      
    
      this.add({
        label_eng: "Yuranosuke's wife",
        label_ka: "由良之介妻",
        id: 379
      })
      
    
      this.add({
        label_eng: "Yuranosuke's mother",
        label_ka: "由良之介母",
        id: 380
      })
      
    
      this.add({
        label_eng: "Onatsu",
        label_ka: "娘お夏",
        id: 381
      })
      
    
      this.add({
        label_eng: "Oshun",
        label_ka: "おしゅん",
        id: 382
      })
      
    
      this.add({
        label_eng: "Osan",
        label_ka: "おさん",
        id: 383
      })
      
    
      this.add({
        label_eng: "Hyosuke's mother",
        label_ka: "母お幸",
        id: 384
      })
      
    
      this.add({
        label_eng: "Hyosuke",
        label_ka: "寺子屋兵助",
        id: 385
      })
      
    
      this.add({
        label_eng: "Fudematsu",
        label_ka: "伜筆松",
        id: 386
      })
      
    
      this.add({
        label_eng: "Otsuru, Tobei's wife",
        label_ka: "女房おつる",
        id: 387
      })
      
    
      this.add({
        label_eng: "Ohaya",
        label_ka: "手習子お早",
        id: 388
      })
      
    
      this.add({
        label_eng: "Ohana",
        label_ka: "手習子お花",
        id: 389
      })
      
    
      this.add({
        label_eng: "Omaki, Hyosuke's wife",
        label_ka: "女房お牧",
        id: 390
      })
      
    
      this.add({
        label_eng: "Gambei",
        label_ka: "兄眼兵衛",
        id: 391
      })
      
    
      this.add({
        label_eng: "Dampachi",
        label_ka: "手代段八",
        id: 392
      })
      
    
      this.add({
        label_eng: "Tobei",
        label_ka: "朝日奈藤兵衛",
        id: 393
      })
      
    
      this.add({
        label_eng: "Kyonokimi",
        label_ka: "卿の君",
        id: 394
      })
      
    
      this.add({
        label_eng: "Hananoi",
        label_ka: "妻花の井",
        id: 395
      })
      
    
      this.add({
        label_eng: "Shinobu",
        label_ka: "腰元信夫",
        id: 396
      })
      
    
      this.add({
        label_eng: "Owasa",
        label_ka: "母おわさ",
        id: 397
      })
      
    
      this.add({
        label_eng: "Taro",
        label_ka: "侍従太郎",
        id: 398
      })
      
    
      this.add({
        label_eng: "Benkei",
        label_ka: "武蔵坊弁慶",
        id: 399
      })
      
    
      this.add({
        label_eng: "Joetsu",
        label_ka: "宇治常悦",
        id: 400
      })
      
    
      this.add({
        label_eng: "Tanigoro",
        label_ka: "金江谷五郎",
        id: 401
      })
      
    
      this.add({
        label_eng: "Daishichi",
        label_ka: "志賀台七",
        id: 402
      })
      
    
      this.add({
        label_eng: "Kampei",
        label_ka: "家来貫平",
        id: 403
      })
      
    
      this.add({
        label_eng: "Tansuke",
        label_ka: "家来丹介",
        id: 404
      })
      
    
      this.add({
        label_eng: "Yomosaku",
        label_ka: "百姓与茂作",
        id: 405
      })
      
    
      this.add({
        label_eng: "Onobu",
        label_ka: "妹おのぶ",
        id: 406
      })
      
    
      this.add({
        label_eng: "Shichirobei",
        label_ka: "庄屋七郎兵衛",
        id: 407
      })
      
    
      this.add({
        label_eng: "Osayo",
        label_ka: "女房おさよ",
        id: 408
      })
      
    
      this.add({
        label_eng: "Shichisuke, a farmer",
        label_ka: "百姓七助",
        id: 409
      })
      
    
      this.add({
        label_eng: "Oune",
        label_ka: "女房おうね",
        id: 410
      })
      
    
      this.add({
        label_eng: "Dojo",
        label_ka: "豆蔵どぜう (手品師豆造ことどじょう)",
        id: 411
      })
      
    
      this.add({
        label_eng: "Soroku",
        label_ka: "大黒屋宗六",
        id: 412
      })
      
    
      this.add({
        label_eng: "Tea stall proprietor",
        label_ka: "茶店亭主",
        id: 413
      })
      
    
      this.add({
        label_eng: "Kankuro",
        label_ka: "観九郎 (金貸勘九郎)",
        id: 414
      })
      
    
      this.add({
        label_eng: "Miyagino",
        label_ka: "傾城宮城野",
        id: 415
      })
      
    
      this.add({
        label_eng: "Girl attendant to Miyagino",
        label_ka: "禿しげり",
        id: 416
      })
      
    
      this.add({
        label_eng: "Miyazato",
        label_ka: "新造宮里 (女郎)",
        id: 417
      })
      
    
      this.add({
        label_eng: "Miyashiba",
        label_ka: "新造宮柴 (女郎)",
        id: 418
      })
      
    
      this.add({
        label_eng: "Ryuko",
        label_ka: "劉洪",
        id: 419
      })
      
    
      this.add({
        label_eng: "Rihyo",
        label_ka: "李彪",
        id: 420
      })
      
    
      this.add({
        label_eng: "Chinkozui",
        label_ka: "陳光蕊",
        id: 421
      })
      
    
      this.add({
        label_eng: "Hakuren",
        label_ka: "女房白蓮",
        id: 422
      })
      
    
      this.add({
        label_eng: "King of Hell",
        label_ka: "閻魔大王",
        id: 423
      })
      
    
      this.add({
        label_eng: "Ogre",
        label_ka: "鬼",
        id: 424
      })
      
    
      this.add({
        label_eng: "Dead man",
        label_ka: "亡者",
        id: 425
      })
      
    
      this.add({
        label_eng: "Songoku",
        label_ka: "孫悟空",
        id: 426
      })
      
    
      this.add({
        label_eng: "Ungai",
        label_ka: "僧雲外",
        id: 427
      })
      
    
      this.add({
        label_eng: "Genjo, later known as Sanzohoshi",
        label_ka: "玄奘後に三蔵法師",
        id: 428
      })
      
    
      this.add({
        label_eng: "Fuyo, in fact Ginkaku",
        label_ka: "娘芙蓉実は銀角",
        id: 429
      })
      
    
      this.add({
        label_eng: "Friend of Fuyo's",
        label_ka: "芙蓉の友達",
        id: 430
      })
      
    
      this.add({
        label_eng: "Priest Homei",
        label_ka: "法明上人",
        id: 431
      })
      
    
      this.add({
        label_eng: "Saikakuen",
        label_ka: "才覚延",
        id: 432
      })
      
    
      this.add({
        label_eng: "Teremen",
        label_ka: "医者竹林テレメン",
        id: 433
      })
      
    
      this.add({
        label_eng: "Ryuko's wife",
        label_ka: "劉洪の妻",
        id: 434
      })
      
    
      this.add({
        label_eng: "Chogohachi, later known as Chohakkai",
        label_ka: "猪悟八後に猪八戒",
        id: 435
      })
      
    
      this.add({
        label_eng: "Gaikotsu, later known as Sagojo",
        label_ka: "骸骨後に沙悟浄",
        id: 436
      })
      
    
      this.add({
        label_eng: "Jagatara-no-gon",
        label_ka: "手下じゃがたらの権",
        id: 437
      })
      
    
      this.add({
        label_eng: "Shabbily-clothed woman",
        label_ka: "賤の女",
        id: 438
      })
      
    
      this.add({
        label_eng: "Boatman",
        label_ka: "船人",
        id: 439
      })
      
    
      this.add({
        label_eng: "Buddha",
        label_ka: "釈迦如来",
        id: 440
      })
      
    
      this.add({
        label_eng: "Flower peddler",
        label_ka: "花売女",
        id: 441
      })
      
    
      this.add({
        label_eng: "Donketsu",
        label_ka: "手下どん穴",
        id: 442
      })
      
    
      this.add({
        label_eng: "Townsman",
        label_ka: "里人",
        id: 443
      })
      
    
      this.add({
        label_eng: "Rasetsujo",
        label_ka: "羅刹女",
        id: 444
      })
      
    
      this.add({
        label_eng: "Gyumao",
        label_ka: "牛魔王",
        id: 445
      })
      
    
      this.add({
        label_eng: "Masakiyo Kato",
        label_ka: "加藤肥多守正清",
        id: 446
      })
      
    
      this.add({
        label_eng: "Yoshinari Mori",
        label_ka: "森三左衛門義成",
        id: 447
      })
      
    
      this.add({
        label_eng: "Hayase, a maid",
        label_ka: "腰元早瀬",
        id: 448
      })
      
    
      this.add({
        label_eng: "Saeda, a maid",
        label_ka: "腰元左枝",
        id: 449
      })
      
    
      this.add({
        label_eng: "Hinaginu",
        label_ka: "娘雛絹",
        id: 450
      })
      
    
      this.add({
        label_eng: "Gemba Marikawa",
        label_ka: "鞠川玄蕃",
        id: 451
      })
      
    
      this.add({
        label_eng: "Shigarami",
        label_ka: "妻柵",
        id: 452
      })
      
    
      this.add({
        label_eng: "Kazuenosuke Kato",
        label_ka: "加藤主計之介清郷",
        id: 453
      })
      
    
      this.add({
        label_eng: "Tokimasa Hojo",
        label_ka: "北条時政",
        id: 454
      })
      
    
      this.add({
        label_eng: "Imperial messenger",
        label_ka: "山蔭中納言",
        id: 455
      })
      
    
      this.add({
        label_eng: "Kyuma Hayabuchi",
        label_ka: "早淵久馬",
        id: 456
      })
      
    
      this.add({
        label_eng: "Spy",
        label_ka: "忍び",
        id: 457
      })
      
    
      this.add({
        label_eng: "Teruha, a maid",
        label_ka: "腰元照葉",
        id: 458
      })
      
    
      this.add({
        label_eng: "Miyuki, a maid",
        label_ka: "腰元深雪",
        id: 459
      })
      
    
      this.add({
        label_eng: "Yoshihiro Ouchi",
        label_ka: "大内冠者義弘",
        id: 460
      })
      
    
      this.add({
        label_eng: "Hazue",
        label_ka: "奥方葉末",
        id: 461
      })
      
    
      this.add({
        label_eng: "Nadaemon, in fact Motobei Kojima",
        label_ka: "船頭灘右衛門実は児嶋元兵衛政次",
        id: 462
      })
      
    
      this.add({
        label_eng: "Shinobu",
        label_ka: "娘信夫",
        id: 463
      })
      
    
      this.add({
        label_eng: "Mameshiro",
        label_ka: "磯の上豆四郎",
        id: 464
      })
      
    
      this.add({
        label_eng: "Gosaku",
        label_ka: "亭主五作",
        id: 465
      })
      
    
      this.add({
        label_eng: "Nyohachi",
        label_ka: "鉦の鐃八",
        id: 466
      })
      
    
      this.add({
        label_eng: "Tenzen",
        label_ka: "代官川島典膳",
        id: 467
      })
      
    
      this.add({
        label_eng: "Osaki",
        label_ka: "文字摺売りお咲",
        id: 468
      })
      
    
      this.add({
        label_eng: "Otani",
        label_ka: "文字摺売りお谷",
        id: 469
      })
      
    
      this.add({
        label_eng: "Koyoshi",
        label_ka: "母小よし",
        id: 470
      })
      
    
      this.add({
        label_eng: "Aritsune",
        label_ka: "紀有常",
        id: 471
      })
      
    
      this.add({
        label_eng: "Narihira",
        label_ka: "在原業平",
        id: 472
      })
      
    
      this.add({
        label_eng: "Izutsu",
        label_ka: "井筒姫",
        id: 473
      })
      
    
      this.add({
        label_eng: "Sankatsu",
        label_ka: "美濃屋三勝",
        id: 474
      })
      
    
      this.add({
        label_eng: "Hanshichi's mother",
        label_ka: "半七の母",
        id: 475
      })
      
    
      this.add({
        label_eng: "Chota",
        label_ka: "丁稚長太",
        id: 476
      })
      
    
      this.add({
        label_eng: "Hambei's wife",
        label_ka: "半兵衛女房",
        id: 477
      })
      
    
      this.add({
        label_eng: "Otsu",
        label_ka: "娘お通",
        id: 478
      })
      
    
      this.add({
        label_eng: "Hambei",
        label_ka: "舅半兵衛",
        id: 479
      })
      
    
      this.add({
        label_eng: "Leader of the five-man group",
        label_ka: "五人組の頭",
        id: 480
      })
      
    
      this.add({
        label_eng: "Sogan",
        label_ka: "親宗岸",
        id: 481
      })
      
    
      this.add({
        label_eng: "Osono",
        label_ka: "嫁お園",
        id: 482
      })
      
    
      this.add({
        label_eng: "Hanshichi",
        label_ka: "茜屋半七",
        id: 483
      })
      
    
      this.add({
        label_eng: "Gentazaemon",
        label_ka: "森口源太左衛門",
        id: 484
      })
      
    
      this.add({
        label_eng: "Kanzo, Gentazaemon's retainer",
        label_ka: "門弟官蔵 (勘蔵)",
        id: 485
      })
      
    
      this.add({
        label_eng: "Kazuma, Naiki's Retainer",
        label_ka: "門弟数馬",
        id: 486
      })
      
    
      this.add({
        label_eng: "Juzo, Naiki's Retainer",
        label_ka: "門弟十蔵",
        id: 487
      })
      
    
      this.add({
        label_eng: "Naiki",
        label_ka: "槌屋内記",
        id: 488
      })
      
    
      this.add({
        label_eng: "Chief priest",
        label_ka: "方丈",
        id: 489
      })
      
    
      this.add({
        label_eng: "Suganoya, Naiki's wife",
        label_ka: "内記妻菅の谷",
        id: 490
      })
      
    
      this.add({
        label_eng: "Unchiku, an acolyte",
        label_ka: "弟子僧雲竹",
        id: 491
      })
      
    
      this.add({
        label_eng: "Nensai, an acolyte",
        label_ka: "弟子僧念西",
        id: 492
      })
      
    
      this.add({
        label_eng: "Otsuji",
        label_ka: "乳母お辻",
        id: 493
      })
      
    
      this.add({
        label_eng: "Botaro",
        label_ka: "民谷坊太郎",
        id: 494
      })
      
    
      this.add({
        label_eng: "Danemon",
        label_ka: "門弟団右衛門",
        id: 495
      })
      
    
      this.add({
        label_eng: "Tayu",
        label_ka: "太夫",
        id: 496
      })
      
    
      this.add({
        label_eng: "Saizo",
        label_ka: "才蔵",
        id: 497
      })
      
    
      this.add({
        label_eng: "Fisherwoman",
        label_ka: "海女",
        id: 498
      })
      
    
      this.add({
        label_eng: "Sekidera Komachi",
        label_ka: "関寺小町",
        id: 499
      })
      
    
      this.add({
        label_eng: "Sagimusume",
        label_ka: "鷺娘",
        id: 500
      })
      
    
      this.add({
        label_eng: "Saigyo",
        label_ka: "西行",
        id: 501
      })
      
    
      this.add({
        label_eng: "Nun",
        label_ka: "尼",
        id: 502
      })
      
    
      this.add({
        label_eng: "Daughter",
        label_ka: "娘",
        id: 503
      })
      
    
      this.add({
        label_eng: "Ghost of Shoi",
        label_ka: "少尉の亡霊",
        id: 504
      })
      
    
      this.add({
        label_eng: "Satonoko",
        label_ka: "里の子",
        id: 505
      })
      
    
      this.add({
        label_eng: "Girl",
        label_ka: "女の子",
        id: 506
      })
      
    
      this.add({
        label_eng: "Azumaya",
        label_ka: "俊寛妻あづまや",
        id: 507
      })
      
    
      this.add({
        label_eng: "Lady-in-waiting",
        label_ka: "上臈",
        id: 508
      })
      
    
      this.add({
        label_eng: "Moritsugu",
        label_ka: "越中次郎兵衛盛次",
        id: 509
      })
      
    
      this.add({
        label_eng: "Noritsune",
        label_ka: "能登守教経",
        id: 510
      })
      
    
      this.add({
        label_eng: "Kikuo",
        label_ka: "童菊王",
        id: 511
      })
      
    
      this.add({
        label_eng: "Kiyomori",
        label_ka: "平相国清盛",
        id: 512
      })
      
    
      this.add({
        label_eng: "Ario",
        label_ka: "有王丸",
        id: 513
      })
      
    
      this.add({
        label_eng: "Tomokata",
        label_ka: "下司次郎友方",
        id: 514
      })
      
    
      this.add({
        label_eng: "Shunkan",
        label_ka: "俊寛僧都",
        id: 515
      })
      
    
      this.add({
        label_eng: "Yasuyori",
        label_ka: "平判官康頼",
        id: 516
      })
      
    
      this.add({
        label_eng: "Naritsune",
        label_ka: "丹波少将成経",
        id: 517
      })
      
    
      this.add({
        label_eng: "Chidori",
        label_ka: "蜑千鳥",
        id: 518
      })
      
    
      this.add({
        label_eng: "Seno-o",
        label_ka: "瀬尾太郎兼康",
        id: 519
      })
      
    
      this.add({
        label_eng: "Motoyasu",
        label_ka: "丹左衛門元康",
        id: 520
      })
      
    
      this.add({
        label_eng: "Former Emperor Goshirkawa",
        label_ka: "後白河法皇",
        id: 521
      })
      
    
      this.add({
        label_eng: "Boatman",
        label_ka: "船頭",
        id: 522
      })
      
    
      this.add({
        label_eng: "Ukifune",
        label_ka: "浮舟",
        id: 523
      })
      
    
      this.add({
        label_eng: "Kirinoya",
        label_ka: "桐の谷",
        id: 524
      })
      
    
      this.add({
        label_eng: "Lady Iwane",
        label_ka: "岩根御前",
        id: 525
      })
      
    
      this.add({
        label_eng: "Kakunai, a servant",
        label_ka: "奴角内",
        id: 526
      })
      
    
      this.add({
        label_eng: "Takunai, a servant",
        label_ka: "奴宅内",
        id: 527
      })
      
    
      this.add({
        label_eng: "Hirotsugu",
        label_ka: "大貮広嗣",
        id: 528
      })
      
    
      this.add({
        label_eng: "Chujohime",
        label_ka: "中将姫",
        id: 529
      })
      
    
      this.add({
        label_eng: "Toyonari",
        label_ka: "父豊成卿",
        id: 530
      })
      
    
      this.add({
        label_eng: "Kiyohime",
        label_ka: "娘清姫",
        id: 531
      })
      
    
      this.add({
        label_eng: "Odamaki",
        label_ka: "おだ巻姫",
        id: 532
      })
      
    
      this.add({
        label_eng: "Priest Gojaku",
        label_ka: "剛寂僧都",
        id: 533
      })
      
    
      this.add({
        label_eng: "Juta",
        label_ka: "鹿瀬十太",
        id: 534
      })
      
    
      this.add({
        label_eng: "Village headman",
        label_ka: "真那古庄司",
        id: 535
      })
      
    
      this.add({
        label_eng: "Anchin, in fact Crown Prince Sakuragi",
        label_ka: "白川の安珍実は桜木親王",
        id: 536
      })
      
    
      this.add({
        label_eng: "Boatman",
        label_ka: "渡し守 (船頭)",
        id: 537
      })
      
    
      this.add({
        label_eng: "Yasaburo",
        label_ka: "衣川弥三郎",
        id: 538
      })
      
    
      this.add({
        label_eng: "Okiku",
        label_ka: "腰元お菊",
        id: 539
      })
      
    
      this.add({
        label_eng: "Mayumi",
        label_ka: "奥方真弓の方",
        id: 540
      })
      
    
      this.add({
        label_eng: "Rindayu, a Shinto priest",
        label_ka: "祝部山上倫太夫",
        id: 541
      })
      
    
      this.add({
        label_eng: "Mokusokan, in fact Shihoden",
        label_ka: "車騎将軍木曾官実は四方田但馬守",
        id: 542
      })
      
    
      this.add({
        label_eng: "Rokusuke",
        label_ka: "毛谷村六助",
        id: 543
      })
      
    
      this.add({
        label_eng: "Enami, a warrior",
        label_ka: "榎並一学",
        id: 544
      })
      
    
      this.add({
        label_eng: "Hayakawa, a warrior",
        label_ka: "早川兎毛",
        id: 545
      })
      
    
      this.add({
        label_eng: "Dengoemon",
        label_ka: "轟伝五右衛門",
        id: 546
      })
      
    
      this.add({
        label_eng: "Ichimisai",
        label_ka: "吉岡一味斎",
        id: 547
      })
      
    
      this.add({
        label_eng: "Yasamatsu",
        label_ka: "一子弥三松",
        id: 548
      })
      
    
      this.add({
        label_eng: "Tomohei",
        label_ka: "若党友平",
        id: 549
      })
      
    
      this.add({
        label_eng: "Yasazaemon",
        label_ka: "衣川弥三左衛門",
        id: 550
      })
      
    
      this.add({
        label_eng: "Takumi",
        label_ka: "京極内匠",
        id: 551
      })
      
    
      this.add({
        label_eng: "Tozo",
        label_ka: "春風藤蔵",
        id: 552
      })
      
    
      this.add({
        label_eng: "Otonari",
        label_ka: "郡大守音成",
        id: 553
      })
      
    
      this.add({
        label_eng: "Hisayoshi",
        label_ka: "真柴久吉",
        id: 554
      })
      
    
      this.add({
        label_eng: "Shingo Sakurai",
        label_ka: "桜井新吾",
        id: 555
      })
      
    
      this.add({
        label_eng: "Sasen",
        label_ka: "医者柴左仙",
        id: 556
      })
      
    
      this.add({
        label_eng: "Kotomi, a lady-in-waiting",
        label_ka: "腰元小富",
        id: 557
      })
      
    
      this.add({
        label_eng: "Omatsu, a lady-in-waiting",
        label_ka: "腰元お松",
        id: 558
      })
      
    
      this.add({
        label_eng: "Sannojo",
        label_ka: "弟三之丞",
        id: 559
      })
      
    
      this.add({
        label_eng: "Oko",
        label_ka: "母お幸",
        id: 560
      })
      
    
      this.add({
        label_eng: "Osono",
        label_ka: "娘お園",
        id: 561
      })
      
    
      this.add({
        label_eng: "Sagohei",
        label_ka: "若党佐吾平",
        id: 562
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "小姓",
        id: 563
      })
      
    
      this.add({
        label_eng: "Minamoto-no-Yoshitsune",
        label_ka: "源義経",
        id: 564
      })
      
    
      this.add({
        label_eng: "Kagetoki Kajiwara",
        label_ka: "梶原平三景時",
        id: 565
      })
      
    
      this.add({
        label_eng: "Takatsuna Sasaki",
        label_ka: "佐々木高綱",
        id: 566
      })
      
    
      this.add({
        label_eng: "Shigetada Hatakeyama",
        label_ka: "畠山重忠",
        id: 567
      })
      
    
      this.add({
        label_eng: "Yoshimori Wada",
        label_ka: "和田義盛",
        id: 568
      })
      
    
      this.add({
        label_eng: "Old woodcutter",
        label_ka: "杣の老人",
        id: 569
      })
      
    
      this.add({
        label_eng: "Yoshinaka Kiso",
        label_ka: "木曽義仲(朝日将軍義仲)",
        id: 570
      })
      
    
      this.add({
        label_eng: "Ofude",
        label_ka: "腰元お筆",
        id: 571
      })
      
    
      this.add({
        label_eng: "Yamabuki-Gozen",
        label_ka: "山吹御前",
        id: 572
      })
      
    
      this.add({
        label_eng: "Tomoe-Gozen",
        label_ka: "巴御前",
        id: 573
      })
      
    
      this.add({
        label_eng: "Kamada (Kamata) Haito",
        label_ka: "鎌田隼人",
        id: 574
      })
      
    
      this.add({
        label_eng: "Landlord Rokubei",
        label_ka: "家主六兵衛",
        id: 575
      })
      
    
      this.add({
        label_eng: "Bamba-no-Chuta",
        label_ka: "番場忠太",
        id: 576
      })
      
    
      this.add({
        label_eng: "Gonshiro",
        label_ka: "船頭権四郎",
        id: 577
      })
      
    
      this.add({
        label_eng: "Oyoshi",
        label_ka: "およし",
        id: 578
      })
      
    
      this.add({
        label_eng: "Innkeeper",
        label_ka: "宿屋亭主",
        id: 579
      })
      
    
      this.add({
        label_eng: "Komawaka",
        label_ka: "駒若君",
        id: 580
      })
      
    
      this.add({
        label_eng: "Tsuchimatsu",
        label_ka: "槌松",
        id: 581
      })
      
    
      this.add({
        label_eng: "Matsuemon, in fact Kanemitsu Matsuemon",
        label_ka: "松右衛門実は樋口次郎兼光",
        id: 582
      })
      
    
      this.add({
        label_eng: "Mataroku, a boatman",
        label_ka: "船頭又六",
        id: 583
      })
      
    
      this.add({
        label_eng: "Tomizo, a boatman",
        label_ka: "船頭富蔵",
        id: 584
      })
      
    
      this.add({
        label_eng: "Kurosaku, a boatman",
        label_ka: "九郎作",
        id: 585
      })
      
    
      this.add({
        label_eng: "Genta Kajiwara",
        label_ka: "梶原源太景季",
        id: 586
      })
      
    
      this.add({
        label_eng: "Heiji Kajiwara",
        label_ka: "梶原平次景高",
        id: 587
      })
      
    
      this.add({
        label_eng: "Chidori, later known as Umegae",
        label_ka: "腰元千鳥後に傾城梅ヶ枝(傾城梅ヶ枝)",
        id: 588
      })
      
    
      this.add({
        label_eng: "Enju",
        label_ka: "母延寿",
        id: 589
      })
      
    
      this.add({
        label_eng: "Gunnai Yokosuka",
        label_ka: "横須賀軍内",
        id: 590
      })
      
    
      this.add({
        label_eng: "Fortune teller",
        label_ka: "辻法印",
        id: 591
      })
      
    
      this.add({
        label_eng: "Fortune teller's wife",
        label_ka: "法印女房",
        id: 592
      })
      
    
      this.add({
        label_eng: "Tea house proprietor",
        label_ka: "揚屋亭主",
        id: 593
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "仲居",
        id: 594
      })
      
    
      this.add({
        label_eng: "Pawn shop employee",
        label_ka: "質屋の男",
        id: 595
      })
      
    
      this.add({
        label_eng: "Man-yohime",
        label_ka: "萬代姫",
        id: 596
      })
      
    
      this.add({
        label_eng: "Mosuke Horio",
        label_ka: "堀尾茂助義晴",
        id: 597
      })
      
    
      this.add({
        label_eng: "Tokichi Konoshita",
        label_ka: "木下藤吉",
        id: 598
      })
      
    
      this.add({
        label_eng: "Gorosuke, in fact Kiyotada Kato",
        label_ka: "鍛冶屋五郎助実は加藤清忠",
        id: 599
      })
      
    
      this.add({
        label_eng: "Takematsu",
        label_ka: "伜竹松",
        id: 600
      })
      
    
      this.add({
        label_eng: "Omasa",
        label_ka: "女房お政",
        id: 601
      })
      
    
      this.add({
        label_eng: "Gorosuke's wife",
        label_ka: "五郎助女房",
        id: 602
      })
      
    
      this.add({
        label_eng: "Hayata Nagai",
        label_ka: "永井早太",
        id: 603
      })
      
    
      this.add({
        label_eng: "Nureginu",
        label_ka: "腰元濡衣",
        id: 604
      })
      
    
      this.add({
        label_eng: "Lady Tokiwai",
        label_ka: "奥方常盤井",
        id: 605
      })
      
    
      this.add({
        label_eng: "Yoshikiyo Murakami",
        label_ka: "村上義清",
        id: 606
      })
      
    
      this.add({
        label_eng: "Blind Katsuyori",
        label_ka: "盲勝頼",
        id: 607
      })
      
    
      this.add({
        label_eng: "Hyobu Itagaki",
        label_ka: "板垣兵部",
        id: 608
      })
      
    
      this.add({
        label_eng: "Minosaku, in fact Takeda Katsuyori",
        label_ka: "簑作実は武田勝頼",
        id: 609
      })
      
    
      this.add({
        label_eng: "Shingen Takeda",
        label_ka: "武田信玄",
        id: 610
      })
      
    
      this.add({
        label_eng: "Kakusuke, a servant",
        label_ka: "奴角助",
        id: 611
      })
      
    
      this.add({
        label_eng: "Hakibeii (Hakubei), a servant",
        label_ka: "奴掃兵衛",
        id: 612
      })
      
    
      this.add({
        label_eng: "Sekibei, in fact Dosan",
        label_ka: "花守関兵衛実は斎藤道三",
        id: 613
      })
      
    
      this.add({
        label_eng: "Kenshin Nagao",
        label_ka: "長尾謙信",
        id: 614
      })
      
    
      this.add({
        label_eng: "Kagekatsu Nagao",
        label_ka: "長尾景勝",
        id: 615
      })
      
    
      this.add({
        label_eng: "Yaegaki",
        label_ka: "八重垣姫",
        id: 616
      })
      
    
      this.add({
        label_eng: "Rokuro",
        label_ka: "白須賀六郎",
        id: 617
      })
      
    
      this.add({
        label_eng: "Kobunji",
        label_ka: "原小文治",
        id: 618
      })
      
    
      this.add({
        label_eng: "Kansuke",
        label_ka: "山本勘助",
        id: 619
      })
      
    
      this.add({
        label_eng: "Otane",
        label_ka: "女房お種",
        id: 620
      })
      
    
      this.add({
        label_eng: "Ofuji",
        label_ka: "妹お藤",
        id: 621
      })
      
    
      this.add({
        label_eng: "Bunroku",
        label_ka: "伜文六",
        id: 622
      })
      
    
      this.add({
        label_eng: "Gen-emon",
        label_ka: "宮地源右衛門",
        id: 623
      })
      
    
      this.add({
        label_eng: "Kakuzo",
        label_ka: "中間角蔵",
        id: 624
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "下女",
        id: 625
      })
      
    
      this.add({
        label_eng: "Yukaemon",
        label_ka: "磯部床右衛門",
        id: 626
      })
      
    
      this.add({
        label_eng: "Rin",
        label_ka: "下女りん",
        id: 627
      })
      
    
      this.add({
        label_eng: "Hikokuro",
        label_ka: "小倉彦九郎",
        id: 628
      })
      
    
      this.add({
        label_eng: "Sangohei's messanger",
        label_ka: "三五平使者",
        id: 629
      })
      
    
      this.add({
        label_eng: "Yura",
        label_ka: "妹ゆら",
        id: 630
      })
      
    
      this.add({
        label_eng: "Bean curd peddler",
        label_ka: "豆腐売",
        id: 631
      })
      
    
      this.add({
        label_eng: "Stone peddler",
        label_ka: "石売",
        id: 632
      })
      
    
      this.add({
        label_eng: "Young Man",
        label_ka: "若い者",
        id: 633
      })
      
    
      this.add({
        label_eng: "Tamaori",
        label_ka: "玉織姫",
        id: 634
      })
      
    
      this.add({
        label_eng: "Hirayama",
        label_ka: "平山武者所",
        id: 635
      })
      
    
      this.add({
        label_eng: "Atsumori, in fact Kojiro",
        label_ka: "敦盛実は熊谷小次郎直家",
        id: 636
      })
      
    
      this.add({
        label_eng: "Kumagai",
        label_ka: "熊谷次郎直実",
        id: 637
      })
      
    
      this.add({
        label_eng: "Atsumori in the distance",
        label_ka: "遠見の敦盛",
        id: 638
      })
      
    
      this.add({
        label_eng: "Kumagai in the distance",
        label_ka: "遠見の熊谷",
        id: 639
      })
      
    
      this.add({
        label_eng: "Midaroku, in fact Munekiyo",
        label_ka: "石屋弥陀六実は弥平兵衛宗清",
        id: 640
      })
      
    
      this.add({
        label_eng: "Koyuki",
        label_ka: "娘小雪",
        id: 641
      })
      
    
      this.add({
        label_eng: "Fuji-no-tsubone",
        label_ka: "藤の局(藤の方)",
        id: 642
      })
      
    
      this.add({
        label_eng: "Chuta",
        label_ka: "番場忠太",
        id: 643
      })
      
    
      this.add({
        label_eng: "Umpei",
        label_ka: "須股運平",
        id: 644
      })
      
    
      this.add({
        label_eng: "Magosaku",
        label_ka: "庄屋孫作",
        id: 645
      })
      
    
      this.add({
        label_eng: "Sagami",
        label_ka: "妻相模",
        id: 646
      })
      
    
      this.add({
        label_eng: "Gunji",
        label_ka: "堤軍次",
        id: 647
      })
      
    
      this.add({
        label_eng: "Kajiwara",
        label_ka: "梶原平次景高",
        id: 648
      })
      
    
      this.add({
        label_eng: "Yoshitsune Minamoto",
        label_ka: "源義経",
        id: 649
      })
      
    
      this.add({
        label_eng: "Shibagaki",
        label_ka: "母柴垣",
        id: 650
      })
      
    
      this.add({
        label_eng: "Otani",
        label_ka: "娘お谷",
        id: 651
      })
      
    
      this.add({
        label_eng: "Matagoro",
        label_ka: "沢井股五郎",
        id: 652
      })
      
    
      this.add({
        label_eng: "Yukie",
        label_ka: "和田行家",
        id: 653
      })
      
    
      this.add({
        label_eng: "Jitsunai",
        label_ka: "奴実内",
        id: 654
      })
      
    
      this.add({
        label_eng: "Dainaiki",
        label_ka: "誉田大内記",
        id: 655
      })
      
    
      this.add({
        label_eng: "Goemon",
        label_ka: "宇佐見五右衛門",
        id: 656
      })
      
    
      this.add({
        label_eng: "Rinzaemon",
        label_ka: "桜田林左衛門",
        id: 657
      })
      
    
      this.add({
        label_eng: "Busuke",
        label_ka: "石留武助",
        id: 658
      })
      
    
      this.add({
        label_eng: "Masaemon",
        label_ka: "唐木政右衛門",
        id: 659
      })
      
    
      this.add({
        label_eng: "Okura",
        label_ka: "乳母おくら",
        id: 660
      })
      
    
      this.add({
        label_eng: "Onochi",
        label_ka: "娘おのち",
        id: 661
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "小姓",
        id: 662
      })
      
    
      this.add({
        label_eng: "Heisaku",
        label_ka: "親平作 (雲助平作)",
        id: 663
      })
      
    
      this.add({
        label_eng: "Jubei",
        label_ka: "呉服屋十兵衛 (重兵衛)",
        id: 664
      })
      
    
      this.add({
        label_eng: "Yasubei",
        label_ka: "荷持安兵衛",
        id: 665
      })
      
    
      this.add({
        label_eng: "Oyone",
        label_ka: "娘お米",
        id: 666
      })
      
    
      this.add({
        label_eng: "Magohachi",
        label_ka: "池添孫八",
        id: 667
      })
      
    
      this.add({
        label_eng: "Shizuma",
        label_ka: "和田志津馬",
        id: 668
      })
      
    
      this.add({
        label_eng: "Osode",
        label_ka: "娘お袖",
        id: 669
      })
      
    
      this.add({
        label_eng: "Sukehei",
        label_ka: "奴助平",
        id: 670
      })
      
    
      this.add({
        label_eng: "Gampachi",
        label_ka: "蛇の目の眼八",
        id: 671
      })
      
    
      this.add({
        label_eng: "Kobei's wife",
        label_ka: "幸兵衛女房",
        id: 672
      })
      
    
      this.add({
        label_eng: "Kobei",
        label_ka: "山田幸兵衛",
        id: 673
      })
      
    
      this.add({
        label_eng: "Chief constable",
        label_ka: "捕手の小頭",
        id: 674
      })
      
    
      this.add({
        label_eng: "Messanger Kosuke",
        label_ka: "歩きの小助",
        id: 675
      })
      
    
      this.add({
        label_eng: "Minosuke, Otani's son",
        label_ka: "伜巳之助",
        id: 676
      })
      
    
      this.add({
        label_eng: "Night watchman",
        label_ka: "夜回り",
        id: 677
      })
      
    
      this.add({
        label_eng: "Segawa",
        label_ka: "傾城瀬川",
        id: 678
      })
      
    
      this.add({
        label_eng: "Postman",
        label_ka: "飛脚",
        id: 679
      })
      
    
      this.add({
        label_eng: "Osaga",
        label_ka: "柏屋おさが",
        id: 680
      })
      
    
      this.add({
        label_eng: "Rustic customer",
        label_ka: "田舎客",
        id: 681
      })
      
    
      this.add({
        label_eng: "Palanquin bearer",
        label_ka: "駕屋",
        id: 682
      })
      
    
      this.add({
        label_eng: "Tea house madam",
        label_ka: "花車",
        id: 683
      })
      
    
      this.add({
        label_eng: "Kaheiji",
        label_ka: "茶碗屋嘉平次",
        id: 684
      })
      
    
      this.add({
        label_eng: "Kaheiji's elder sister",
        label_ka: "嘉平次姉",
        id: 685
      })
      
    
      this.add({
        label_eng: "Ikumatsu",
        label_ka: "弟幾松",
        id: 686
      })
      
    
      this.add({
        label_eng: "Otake",
        label_ka: "飯炊きお竹",
        id: 687
      })
      
    
      this.add({
        label_eng: "Chosaku",
        label_ka: "印伝屋長作",
        id: 688
      })
      
    
      this.add({
        label_eng: "Apprentice",
        label_ka: "迎いの丁稚",
        id: 689
      })
      
    
      this.add({
        label_eng: "Clerk",
        label_ka: "紺屋の手代",
        id: 690
      })
      
    
      this.add({
        label_eng: "Seisuke",
        label_ka: "若い者清介",
        id: 691
      })
      
    
      this.add({
        label_eng: "Gohei",
        label_ka: "親五兵衛",
        id: 692
      })
      
    
      this.add({
        label_eng: "Okiwa",
        label_ka: "許婚おきわ",
        id: 693
      })
      
    
      this.add({
        label_eng: "Koganosuke",
        label_ka: "久我之助",
        id: 694
      })
      
    
      this.add({
        label_eng: "Hinadori",
        label_ka: "雛鳥",
        id: 695
      })
      
    
      this.add({
        label_eng: "Kogiku",
        label_ka: "腰元小菊",
        id: 696
      })
      
    
      this.add({
        label_eng: "Kikyo",
        label_ka: "腰元桔梗",
        id: 697
      })
      
    
      this.add({
        label_eng: "Gemba",
        label_ka: "宮越玄蕃",
        id: 698
      })
      
    
      this.add({
        label_eng: "Uneme",
        label_ka: "采女",
        id: 699
      })
      
    
      this.add({
        label_eng: "Emperor Tenji",
        label_ka: "天智帝",
        id: 700
      })
      
    
      this.add({
        label_eng: "Kaneaki",
        label_ka: "大納言兼秋",
        id: 701
      })
      
    
      this.add({
        label_eng: "Tankai",
        label_ka: "藤原淡海",
        id: 702
      })
      
    
      this.add({
        label_eng: "Imperial Court messanger",
        label_ka: "禁庭の使",
        id: 703
      })
      
    
      this.add({
        label_eng: "Shibaroku",
        label_ka: "猟師芝六",
        id: 704
      })
      
    
      this.add({
        label_eng: "Sansaku",
        label_ka: "伜三作",
        id: 705
      })
      
    
      this.add({
        label_eng: "Okiji",
        label_ka: "女房お雉",
        id: 706
      })
      
    
      this.add({
        label_eng: "Shin-emon",
        label_ka: "米屋新右衛門",
        id: 707
      })
      
    
      this.add({
        label_eng: "Sugimatsu",
        label_ka: "伜杉松",
        id: 708
      })
      
    
      this.add({
        label_eng: "Official in charge of deer",
        label_ka: "鹿役人",
        id: 709
      })
      
    
      this.add({
        label_eng: "Buddhist devotee",
        label_ka: "興福寺衆徒",
        id: 710
      })
      
    
      this.add({
        label_eng: "Kamatari",
        label_ka: "藤原鎌足",
        id: 711
      })
      
    
      this.add({
        label_eng: "Sadaka",
        label_ka: "後室定高",
        id: 712
      })
      
    
      this.add({
        label_eng: "Kiyozumi",
        label_ka: "大判事清澄",
        id: 713
      })
      
    
      this.add({
        label_eng: "Iruka",
        label_ka: "蘇我入鹿",
        id: 714
      })
      
    
      this.add({
        label_eng: "Yatoji",
        label_ka: "荒巻弥藤次",
        id: 715
      })
      
    
      this.add({
        label_eng: "Messenger",
        label_ka: "注進",
        id: 716
      })
      
    
      this.add({
        label_eng: "Netaro",
        label_ka: "丁稚子太郎",
        id: 717
      })
      
    
      this.add({
        label_eng: "Dozaemon",
        label_ka: "土左衛門",
        id: 718
      })
      
    
      this.add({
        label_eng: "Toroku",
        label_ka: "藤六",
        id: 719
      })
      
    
      this.add({
        label_eng: "Yahei (Nohei)",
        label_ka: "野平",
        id: 720
      })
      
    
      this.add({
        label_eng: "Omiwa's mother",
        label_ka: "お三輪母",
        id: 721
      })
      
    
      this.add({
        label_eng: "Landlord",
        label_ka: "家主 (家主茂次兵衛)",
        id: 722
      })
      
    
      this.add({
        label_eng: "Motome, in fact Tankai Fujiwara",
        label_ka: "求馬実は藤原淡海",
        id: 723
      })
      
    
      this.add({
        label_eng: "Tachibana",
        label_ka: "橘姫",
        id: 724
      })
      
    
      this.add({
        label_eng: "Omiwa",
        label_ka: "お三輪",
        id: 725
      })
      
    
      this.add({
        label_eng: "Bean curd buyer",
        label_ka: "豆腐買 (豆腐の御用)",
        id: 726
      })
      
    
      this.add({
        label_eng: "Okon",
        label_ka: "女郎お紺",
        id: 727
      })
      
    
      this.add({
        label_eng: "Manno",
        label_ka: "仲居万野",
        id: 728
      })
      
    
      this.add({
        label_eng: "Mitsugi",
        label_ka: "福岡貢",
        id: 729
      })
      
    
      this.add({
        label_eng: "Kisuke",
        label_ka: "料理人喜助",
        id: 730
      })
      
    
      this.add({
        label_eng: "Iwaji",
        label_ka: "徳島岩次",
        id: 731
      })
      
    
      this.add({
        label_eng: "Kitaroku",
        label_ka: "藍玉屋北六",
        id: 732
      })
      
    
      this.add({
        label_eng: "Oshika",
        label_ka: "女郎お鹿",
        id: 733
      })
      
    
      this.add({
        label_eng: "Night watchman",
        label_ka: "起番男",
        id: 734
      })
      
    
      this.add({
        label_eng: "Waitress",
        label_ka: "仲居",
        id: 735
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "下女",
        id: 736
      })
      
    
      this.add({
        label_eng: "Junior courtesan",
        label_ka: "小女郎",
        id: 737
      })
      
    
      this.add({
        label_eng: "Tea house guest",
        label_ka: "泊り客",
        id: 738
      })
      
    
      this.add({
        label_eng: "Courtesan",
        label_ka: "相方女郎",
        id: 739
      })
      
    
      this.add({
        label_eng: "Matasuke",
        label_ka: "鳥井又助",
        id: 740
      })
      
    
      this.add({
        label_eng: "Lord of Taga",
        label_ka: "多賀大領 (前田大領)",
        id: 741
      })
      
    
      this.add({
        label_eng: "Sanzaemon, a page",
        label_ka: "近習山左衛門",
        id: 742
      })
      
    
      this.add({
        label_eng: "Odai, wife of Matasuke",
        label_ka: "女房お大",
        id: 743
      })
      
    
      this.add({
        label_eng: "Tarosaku, a messanger",
        label_ka: "歩き太郎作",
        id: 744
      })
      
    
      this.add({
        label_eng: "Saibei, Proprietor of the tea house Kutsuwa",
        label_ka: "亭主才兵衛 (くつわの亭主)",
        id: 745
      })
      
    
      this.add({
        label_eng: "Motome",
        label_ka: "谷沢求馬",
        id: 746
      })
      
    
      this.add({
        label_eng: "Jirosaku, Village headman",
        label_ka: "庄屋治郎作",
        id: 747
      })
      
    
      this.add({
        label_eng: "Matakichi, son of Matasuke",
        label_ka: "伜又吉",
        id: 748
      })
      
    
      this.add({
        label_eng: "Shoji Yasuda, chief retainer",
        label_ka: "安田庄司",
        id: 749
      })
      
    
      this.add({
        label_eng: "Iwafuji, chief lady-in-waiting",
        label_ka: "局岩藤",
        id: 750
      })
      
    
      this.add({
        label_eng: "Onoe, lady-in-waiting",
        label_ka: "中老尾上",
        id: 751
      })
      
    
      this.add({
        label_eng: "Zenroku, a merchant",
        label_ka: "鷲の善六",
        id: 752
      })
      
    
      this.add({
        label_eng: "Onaka, a maid",
        label_ka: "腰元お仲(お夏)",
        id: 753
      })
      
    
      this.add({
        label_eng: "Ofuyu, a maid",
        label_ka: "腰元お冬",
        id: 754
      })
      
    
      this.add({
        label_eng: "Ohatsu, Onoe's maid",
        label_ka: "召使お初",
        id: 755
      })
      
    
      this.add({
        label_eng: "Danjo, Iwafuji's uncle",
        label_ka: "伯父弾正",
        id: 756
      })
      
    
      this.add({
        label_eng: "Toma",
        label_ka: "忍び当馬",
        id: 757
      })
      
    
      this.add({
        label_eng: "Shinzaemon",
        label_ka: "古郡新左衛門",
        id: 758
      })
      
    
      this.add({
        label_eng: "Rokuro",
        label_ka: "富田六郎",
        id: 759
      })
      
    
      this.add({
        label_eng: "Tokimasa",
        label_ka: "北條時政",
        id: 760
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "小姓",
        id: 761
      })
      
    
      this.add({
        label_eng: "Tozaburo, in fact Takatsuna",
        label_ka: "安達藤三郎実は高綱 (藤三郎実は佐々木高綱)",
        id: 762
      })
      
    
      this.add({
        label_eng: "Kagaribi",
        label_ka: "妻篝火",
        id: 763
      })
      
    
      this.add({
        label_eng: "Yagoro",
        label_ka: "土肥弥五郎",
        id: 764
      })
      
    
      this.add({
        label_eng: "Okuru",
        label_ka: "女房おくる",
        id: 765
      })
      
    
      this.add({
        label_eng: "Miuranosuke's mother",
        label_ka: "三浦之助母",
        id: 766
      })
      
    
      this.add({
        label_eng: "Orachi",
        label_ka: "女房おらち",
        id: 767
      })
      
    
      this.add({
        label_eng: "Lady-in-waiting Sanuki",
        label_ka: "讃岐の局",
        id: 768
      })
      
    
      this.add({
        label_eng: "Lady-in-waiting Awa",
        label_ka: "阿波の局",
        id: 769
      })
      
    
      this.add({
        label_eng: "Tokihime",
        label_ka: "北條時姫",
        id: 770
      })
      
    
      this.add({
        label_eng: "Miuranosuke",
        label_ka: "三浦之助",
        id: 771
      })
      
    
      this.add({
        label_eng: "Shigarami",
        label_ka: "腰元柵",
        id: 772
      })
      
    
      this.add({
        label_eng: "Sakuragi",
        label_ka: "腰元桜木",
        id: 773
      })
      
    
      this.add({
        label_eng: "Shigure",
        label_ka: "腰元時雨",
        id: 774
      })
      
    
      this.add({
        label_eng: "Gemba",
        label_ka: "飯盛玄番",
        id: 775
      })
      
    
      this.add({
        label_eng: "Yoshitoki",
        label_ka: "北條義時",
        id: 776
      })
      
    
      this.add({
        label_eng: "Gompachi",
        label_ka: "番頭権八",
        id: 777
      })
      
    
      this.add({
        label_eng: "Eizaburo's mother (Myosan)",
        label_ka: "母妙三",
        id: 778
      })
      
    
      this.add({
        label_eng: "Eizaburo",
        label_ka: "大文字屋栄三郎",
        id: 779
      })
      
    
      this.add({
        label_eng: "Chubei",
        label_ka: "手代忠兵衛",
        id: 780
      })
      
    
      this.add({
        label_eng: "Apprentice",
        label_ka: "丁稚",
        id: 781
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "下女",
        id: 782
      })
      
    
      this.add({
        label_eng: "Omatsu",
        label_ka: "嫁お松",
        id: 783
      })
      
    
      this.add({
        label_eng: "Sukeemon",
        label_ka: "万屋助右衛門",
        id: 784
      })
      
    
      this.add({
        label_eng: "Denkuro",
        label_ka: "手代伝九郎",
        id: 785
      })
      
    
      this.add({
        label_eng: "Tadayoshi",
        label_ka: "足利直義",
        id: 786
      })
      
    
      this.add({
        label_eng: "Moronao",
        label_ka: "高師直",
        id: 787
      })
      
    
      this.add({
        label_eng: "Hangan",
        label_ka: "塩谷判官",
        id: 788
      })
      
    
      this.add({
        label_eng: "Wakasanosuke",
        label_ka: "桃井若狭助",
        id: 789
      })
      
    
      this.add({
        label_eng: "Kaoyo",
        label_ka: "顔世御前",
        id: 790
      })
      
    
      this.add({
        label_eng: "Bannai",
        label_ka: "鷺坂伴内",
        id: 791
      })
      
    
      this.add({
        label_eng: "Honzo",
        label_ka: "加古川本蔵",
        id: 792
      })
      
    
      this.add({
        label_eng: "Kampei",
        label_ka: "早野勘平",
        id: 793
      })
      
    
      this.add({
        label_eng: "Okaru",
        label_ka: "腰元(遊女,女房, 娘)おかる",
        id: 794
      })
      
    
      this.add({
        label_eng: "Chinsai",
        label_ka: "茶道珍才",
        id: 795
      })
      
    
      this.add({
        label_eng: "Rikiya",
        label_ka: "大星力弥",
        id: 796
      })
      
    
      this.add({
        label_eng: "Goemon",
        label_ka: "原郷右衛門",
        id: 797
      })
      
    
      this.add({
        label_eng: "Kudayu",
        label_ka: "斧九太夫",
        id: 798
      })
      
    
      this.add({
        label_eng: "Ishido",
        label_ka: "石堂右馬丞",
        id: 799
      })
      
    
      this.add({
        label_eng: "Yakushiji",
        label_ka: "薬師寺次郎左衛門",
        id: 800
      })
      
    
      this.add({
        label_eng: "Ōboshi Yuranosuke",
        label_ka: "大星由良助",
        id: 801
      })
      
    
      this.add({
        label_eng: "Yagoro",
        label_ka: "千崎弥五郎",
        id: 802
      })
      
    
      this.add({
        label_eng: "Yoichibei",
        label_ka: "百姓与市兵衛",
        id: 803
      })
      
    
      this.add({
        label_eng: "Sadakuro",
        label_ka: "斧定九郎",
        id: 804
      })
      
    
      this.add({
        label_eng: "Yoichibei's wife",
        label_ka: "与市兵衛女房",
        id: 805
      })
      
    
      this.add({
        label_eng: "Saibei",
        label_ka: "一文字屋才兵衛",
        id: 806
      })
      
    
      this.add({
        label_eng: "Yahachi",
        label_ka: "めっぽう弥八",
        id: 807
      })
      
    
      this.add({
        label_eng: "Roku",
        label_ka: "種ヶ島の六",
        id: 808
      })
      
    
      this.add({
        label_eng: "Kakubei",
        label_ka: "狸の角兵衛",
        id: 809
      })
      
    
      this.add({
        label_eng: "Tea house proprietor",
        label_ka: "一力亭主",
        id: 810
      })
      
    
      this.add({
        label_eng: "Jutaro",
        label_ka: "矢間十太郎",
        id: 811
      })
      
    
      this.add({
        label_eng: "Kitahachi",
        label_ka: "竹森喜太八",
        id: 812
      })
      
    
      this.add({
        label_eng: "Heiemon",
        label_ka: "寺岡平右衛門",
        id: 813
      })
      
    
      this.add({
        label_eng: "Yasubei",
        label_ka: "織部安兵衛",
        id: 814
      })
      
    
      this.add({
        label_eng: "Yomoshichi",
        label_ka: "佐藤与茂七",
        id: 815
      })
      
    
      this.add({
        label_eng: "Bungo",
        label_ka: "大鷲文吾",
        id: 816
      })
      
    
      this.add({
        label_eng: "Matanojo",
        label_ka: "小汐田又之丞",
        id: 817
      })
      
    
      this.add({
        label_eng: "Konami",
        label_ka: "娘小浪",
        id: 818
      })
      
    
      this.add({
        label_eng: "Tonase",
        label_ka: "妻(母)戸無瀬",
        id: 819
      })
      
    
      this.add({
        label_eng: "Rin, a maid",
        label_ka: "下女りん",
        id: 820
      })
      
    
      this.add({
        label_eng: "Oishi",
        label_ka: "妻お石",
        id: 821
      })
      
    
      this.add({
        label_eng: "Benkei",
        label_ka: "武蔵坊弁慶",
        id: 822
      })
      
    
      this.add({
        label_eng: "Togashi",
        label_ka: "富樫左衛門 (富樫之介正広)",
        id: 823
      })
      
    
      this.add({
        label_eng: "Yoshitsune Minamoto",
        label_ka: "源義経",
        id: 824
      })
      
    
      this.add({
        label_eng: "Ise",
        label_ka: "伊勢三郎",
        id: 825
      })
      
    
      this.add({
        label_eng: "Suruga",
        label_ka: "駿河次郎",
        id: 826
      })
      
    
      this.add({
        label_eng: "Hachiro Kataoka",
        label_ka: "片岡八郎",
        id: 827
      })
      
    
      this.add({
        label_eng: "Hitachibo",
        label_ka: "常陸坊 (常陸坊海尊)",
        id: 828
      })
      
    
      this.add({
        label_eng: "Barrier guards",
        label_ka: "番卒",
        id: 829
      })
      
    
      this.add({
        label_eng: "Yoshihiro",
        label_ka: "大内之助義弘",
        id: 830
      })
      
    
      this.add({
        label_eng: "Hayato",
        label_ka: "関口隼人",
        id: 831
      })
      
    
      this.add({
        label_eng: "Yushide",
        label_ka: "娘ゆうしで",
        id: 832
      })
      
    
      this.add({
        label_eng: "Shindosaemon",
        label_ka: "多々羅新洞左衛門",
        id: 833
      })
      
    
      this.add({
        label_eng: "Yoshihiro's wife",
        label_ka: "大内の御台",
        id: 834
      })
      
    
      this.add({
        label_eng: "Zenkyo Sue",
        label_ka: "陶全姜",
        id: 835
      })
      
    
      this.add({
        label_eng: "Daigaku Tomokata",
        label_ka: "友方大学",
        id: 836
      })
      
    
      this.add({
        label_eng: "Shikibu Kaigetsu",
        label_ka: "海月式部",
        id: 837
      })
      
    
      this.add({
        label_eng: "Taro",
        label_ka: "監物太郎",
        id: 838
      })
      
    
      this.add({
        label_eng: "Makinokata",
        label_ka: "御台牧の方",
        id: 839
      })
      
    
      this.add({
        label_eng: "Ishidomaru",
        label_ka: "石動丸",
        id: 840
      })
      
    
      this.add({
        label_eng: "Hashidate",
        label_ka: "妻橋立",
        id: 841
      })
      
    
      this.add({
        label_eng: "Onnanosuke",
        label_ka: "女之助",
        id: 842
      })
      
    
      this.add({
        label_eng: "Shundo Sukedayu",
        label_ka: "春藤助太夫",
        id: 843
      })
      
    
      this.add({
        label_eng: "Sahei, Suketayu's servant",
        label_ka: "若党佐兵衛",
        id: 844
      })
      
    
      this.add({
        label_eng: "Dempachi, a broker",
        label_ka: "熊手の伝八",
        id: 845
      })
      
    
      this.add({
        label_eng: "Rokuroemon Sudo",
        label_ka: "須藤六郎右衛門",
        id: 846
      })
      
    
      this.add({
        label_eng: "Jinroku Hikosaka",
        label_ka: "彦坂甚六",
        id: 847
      })
      
    
      this.add({
        label_eng: "Oteru, a dancing girl",
        label_ka: "舞子おてる",
        id: 848
      })
      
    
      this.add({
        label_eng: "Katsuno, a dancing girl",
        label_ka: "舞子かつの",
        id: 849
      })
      
    
      this.add({
        label_eng: "Ikuyo, a dancing girl",
        label_ka: "舞子いく世",
        id: 850
      })
      
    
      this.add({
        label_eng: "Suketaro Shundo",
        label_ka: "春藤助太郎",
        id: 851
      })
      
    
      this.add({
        label_eng: "Shinshichi Shundo",
        label_ka: "春藤新七",
        id: 852
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "小坊主",
        id: 853
      })
      
    
      this.add({
        label_eng: "Oshimo, Rokuroemon's sister",
        label_ka: "須藤妹お霜",
        id: 854
      })
      
    
      this.add({
        label_eng: "Oyana, a cook",
        label_ka: "賄おやな",
        id: 855
      })
      
    
      this.add({
        label_eng: "Okatsu, a housewife",
        label_ka: "女房おかつ",
        id: 856
      })
      
    
      this.add({
        label_eng: "Otsuya, a housewife",
        label_ka: "女房おつや",
        id: 857
      })
      
    
      this.add({
        label_eng: "Jiroemon Shundo",
        label_ka: "春藤次郎右衛門",
        id: 858
      })
      
    
      this.add({
        label_eng: "Oharu, Jiroemon's wife",
        label_ka: "妻お春",
        id: 859
      })
      
    
      this.add({
        label_eng: "Sukedayu's wife",
        label_ka: "助太夫妻",
        id: 860
      })
      
    
      this.add({
        label_eng: "Ihei, a servant",
        label_ka: "若党伊兵衛",
        id: 861
      })
      
    
      this.add({
        label_eng: "Oshimo's mother",
        label_ka: "須藤母",
        id: 862
      })
      
    
      this.add({
        label_eng: "Udaemon (Utaemon) Kamura",
        label_ka: "加村宇田右衛門",
        id: 863
      })
      
    
      this.add({
        label_eng: "Yoroku",
        label_ka: "与六",
        id: 864
      })
      
    
      this.add({
        label_eng: "Buemon Takaichi",
        label_ka: "高市武右衛門",
        id: 865
      })
      
    
      this.add({
        label_eng: "Shonosuke, Buemon's son",
        label_ka: "伜庄之助",
        id: 866
      })
      
    
      this.add({
        label_eng: "Samurai",
        label_ka: "修行者",
        id: 867
      })
      
    
      this.add({
        label_eng: "Chokichi",
        label_ka: "丁稚長吉",
        id: 868
      })
      
    
      this.add({
        label_eng: "Ohan",
        label_ka: "娘お半",
        id: 869
      })
      
    
      this.add({
        label_eng: "Rin",
        label_ka: "下女りん",
        id: 870
      })
      
    
      this.add({
        label_eng: "Choemon",
        label_ka: "帯屋長右衛門",
        id: 871
      })
      
    
      this.add({
        label_eng: "Proprietor of the inn",
        label_ka: "宿屋亭主",
        id: 872
      })
      
    
      this.add({
        label_eng: "Maid at the debaya inn",
        label_ka: "出刃屋の女中",
        id: 873
      })
      
    
      this.add({
        label_eng: "Okinu",
        label_ka: "女房お絹",
        id: 874
      })
      
    
      this.add({
        label_eng: "Gihei",
        label_ka: "弟儀兵衛",
        id: 875
      })
      
    
      this.add({
        label_eng: "Otose",
        label_ka: "母おとせ",
        id: 876
      })
      
    
      this.add({
        label_eng: "Hansai",
        label_ka: "親繁斎",
        id: 877
      })
      
    
      this.add({
        label_eng: "Oyumi",
        label_ka: "女房お弓",
        id: 878
      })
      
    
      this.add({
        label_eng: "Postman",
        label_ka: "飛脚",
        id: 879
      })
      
    
      this.add({
        label_eng: "Otsuru",
        label_ka: "娘おつる",
        id: 880
      })
      
    
      this.add({
        label_eng: "Jurobei",
        label_ka: "阿波十郎兵衛",
        id: 881
      })
      
    
      this.add({
        label_eng: "Shurinosuke",
        label_ka: "修理之介",
        id: 882
      })
      
    
      this.add({
        label_eng: "Mitsunobu",
        label_ka: "土佐将監(光信）",
        id: 883
      })
      
    
      this.add({
        label_eng: "Mitsunobu's wife",
        label_ka: "将監奥方",
        id: 884
      })
      
    
      this.add({
        label_eng: "Matahei",
        label_ka: "吃又平 (浮世又平 後に 土佐光起)",
        id: 885
      })
      
    
      this.add({
        label_eng: "Otoku",
        label_ka: "女房おとく",
        id: 886
      })
      
    
      this.add({
        label_eng: "Utanosuke",
        label_ka: "雅楽之介 (狩野雅楽之助)",
        id: 887
      })
      
    
      this.add({
        label_eng: "Chuzaburo's wife (Chuza's wife)",
        label_ka: "忠三女房",
        id: 888
      })
      
    
      this.add({
        label_eng: "Hachiemon",
        label_ka: "八右衛門",
        id: 889
      })
      
    
      this.add({
        label_eng: "Chubei",
        label_ka: "亀屋忠兵衛",
        id: 890
      })
      
    
      this.add({
        label_eng: "Umegawa",
        label_ka: "傾城(遊女, 槌屋) 梅川",
        id: 891
      })
      
    
      this.add({
        label_eng: "Mizuemon",
        label_ka: "樋の口の水右衛門",
        id: 892
      })
      
    
      this.add({
        label_eng: "Dengababa",
        label_ka: "伝が婆",
        id: 893
      })
      
    
      this.add({
        label_eng: "Okizukin",
        label_ka: "置頭巾",
        id: 894
      })
      
    
      this.add({
        label_eng: "Tojibei",
        label_ka: "弦掛の藤治兵衛",
        id: 895
      })
      
    
      this.add({
        label_eng: "Doan",
        label_ka: "道庵",
        id: 896
      })
      
    
      this.add({
        label_eng: "Magoemon",
        label_ka: "親孫右衛門",
        id: 897
      })
      
    
      this.add({
        label_eng: "Chief constable",
        label_ka: "捕手小頭",
        id: 898
      })
      
    
      this.add({
        label_eng: "Komaki",
        label_ka: "小巻",
        id: 899
      })
      
    
      this.add({
        label_eng: "Sukekuni",
        label_ka: "助国",
        id: 900
      })
      
    
      this.add({
        label_eng: "Kiyomori",
        label_ka: "平清盛",
        id: 901
      })
      
    
      this.add({
        label_eng: "Hiromori",
        label_ka: "播磨大掾広盛",
        id: 902
      })
      
    
      this.add({
        label_eng: "Tankai Kasahara",
        label_ka: "笠原湛海",
        id: 903
      })
      
    
      this.add({
        label_eng: "Minazuru",
        label_ka: "皆鶴姫",
        id: 904
      })
      
    
      this.add({
        label_eng: "Kobata",
        label_ka: "腰元木幡",
        id: 905
      })
      
    
      this.add({
        label_eng: "Chienai, in fact Kisanta",
        label_ka: "奴智恵内実は吉岡鬼三太",
        id: 906
      })
      
    
      this.add({
        label_eng: "Kiichi",
        label_ka: "吉岡鬼一法眼",
        id: 907
      })
      
    
      this.add({
        label_eng: "Torazo, in fact Ushiwakamaru",
        label_ka: "奴虎蔵実は牛若丸",
        id: 908
      })
      
    
      this.add({
        label_eng: "Benkei",
        label_ka: "武蔵坊弁慶",
        id: 909
      })
      
    
      this.add({
        label_eng: "Maiko",
        label_ka: "舞妓",
        id: 910
      })
      
    
      this.add({
        label_eng: "Woman fulling cloth",
        label_ka: "砧の女",
        id: 911
      })
      
    
      this.add({
        label_eng: "Asahina",
        label_ka: "朝比奈三郎義秀",
        id: 912
      })
      
    
      this.add({
        label_eng: "Hyoe",
        label_ka: "飯原兵衛",
        id: 913
      })
      
    
      this.add({
        label_eng: "Fujimaki",
        label_ka: "妻藤巻",
        id: 914
      })
      
    
      this.add({
        label_eng: "Yomosaku",
        label_ka: "百姓与茂作",
        id: 915
      })
      
    
      this.add({
        label_eng: "Hayatonosuke",
        label_ka: "飯原隼人之助",
        id: 916
      })
      
    
      this.add({
        label_eng: "Osoyo",
        label_ka: "娘おそよ",
        id: 917
      })
      
    
      this.add({
        label_eng: "Tsukasa",
        label_ka: "司姫",
        id: 918
      })
      
    
      this.add({
        label_eng: "Kakunai, a servant",
        label_ka: "奴角内",
        id: 919
      })
      
    
      this.add({
        label_eng: "Sekinai, a servant",
        label_ka: "奴関内",
        id: 920
      })
      
    
      this.add({
        label_eng: "Okoma",
        label_ka: "娘お駒",
        id: 921
      })
      
    
      this.add({
        label_eng: "Saizaburo Obana",
        label_ka: "尾花才三郎",
        id: 922
      })
      
    
      this.add({
        label_eng: "Rokuroemon Obana",
        label_ka: "尾花六郎右衛門",
        id: 923
      })
      
    
      this.add({
        label_eng: "Johachi",
        label_ka: "番頭丈八",
        id: 924
      })
      
    
      this.add({
        label_eng: "Okiku",
        label_ka: "下女おきく",
        id: 925
      })
      
    
      this.add({
        label_eng: "Santa, an apprentice",
        label_ka: "丁稚三太",
        id: 926
      })
      
    
      this.add({
        label_eng: "Shobei, Okoma's father",
        label_ka: "城木屋庄兵衛",
        id: 927
      })
      
    
      this.add({
        label_eng: "Tsukudaya Kizo",
        label_ka: "佃屋喜蔵",
        id: 928
      })
      
    
      this.add({
        label_eng: "Shobei's wife",
        label_ka: "城木屋女房 (庄兵衛女房)",
        id: 929
      })
      
    
      this.add({
        label_eng: "Yatoda Tsutsumi",
        label_ka: "堤弥藤太",
        id: 930
      })
      
    
      this.add({
        label_eng: "Watchman",
        label_ka: "番太",
        id: 931
      })
      
    
      this.add({
        label_eng: "Saemon Yurugi",
        label_ka: "由留木左衛門",
        id: 932
      })
      
    
      this.add({
        label_eng: "Sanai Sagisaka",
        label_ka: "鷺坂左内",
        id: 933
      })
      
    
      this.add({
        label_eng: "Yosabei Date",
        label_ka: "伊達与三兵衛",
        id: 934
      })
      
    
      this.add({
        label_eng: "Ohana, a maid",
        label_ka: "腰元お花",
        id: 935
      })
      
    
      this.add({
        label_eng: "Oharu, a maid",
        label_ka: "腰元お春",
        id: 936
      })
      
    
      this.add({
        label_eng: "Oyuki, a maid",
        label_ka: "腰元お雪",
        id: 937
      })
      
    
      this.add({
        label_eng: "Shigenoi",
        label_ka: "乳人重の井",
        id: 938
      })
      
    
      this.add({
        label_eng: "Priest",
        label_ka: "脇僧",
        id: 939
      })
      
    
      this.add({
        label_eng: "Sadanoshin Takemura",
        label_ka: "竹村定之進",
        id: 940
      })
      
    
      this.add({
        label_eng: "Hachizo, a pack horse driver",
        label_ka: "馬方八蔵",
        id: 941
      })
      
    
      this.add({
        label_eng: "Jirosaku, a pack horse driver",
        label_ka: "馬方治郎作",
        id: 942
      })
      
    
      this.add({
        label_eng: "Hachizo's mother",
        label_ka: "八蔵の母",
        id: 943
      })
      
    
      this.add({
        label_eng: "Rice dealer",
        label_ka: "掛乞米屋",
        id: 944
      })
      
    
      this.add({
        label_eng: "Cloth dealer",
        label_ka: "掛乞布屋",
        id: 945
      })
      
    
      this.add({
        label_eng: "Yonosuke",
        label_ka: "伜与之助",
        id: 946
      })
      
    
      this.add({
        label_eng: "Keimasa, a blind masseur",
        label_ka: "座頭慶政 (座頭慶政実は伊達与八郎)",
        id: 947
      })
      
    
      this.add({
        label_eng: "Yaheiji (Happeiji) Washizuka",
        label_ka: "鷲塚八平次",
        id: 948
      })
      
    
      this.add({
        label_eng: "Highway robber",
        label_ka: "悪者",
        id: 949
      })
      
    
      this.add({
        label_eng: "Shirabe",
        label_ka: "調姫",
        id: 950
      })
      
    
      this.add({
        label_eng: "Ofuku, a maid",
        label_ka: "腰元お福",
        id: 951
      })
      
    
      this.add({
        label_eng: "Dancer",
        label_ka: "踊り子",
        id: 952
      })
      
    
      this.add({
        label_eng: "Transport manager",
        label_ka: "宰領",
        id: 953
      })
      
    
      this.add({
        label_eng: "Yasazaemon Honda",
        label_ka: "本田弥三左衛門",
        id: 954
      })
      
    
      this.add({
        label_eng: "The Inari God",
        label_ka: "老翁実は稲荷明神",
        id: 955
      })
      
    
      this.add({
        label_eng: "Munechika",
        label_ka: "三条小鍛冶宗近",
        id: 956
      })
      
    
      this.add({
        label_eng: "Michinari",
        label_ka: "勅使道成",
        id: 957
      })
      
    
      this.add({
        label_eng: "Emperor Shisoretsu",
        label_ka: "大明皇帝",
        id: 958
      })
      
    
      this.add({
        label_eng: "Ri Toten",
        label_ka: "右軍将李蹈天",
        id: 959
      })
      
    
      this.add({
        label_eng: "Prince Bairoku",
        label_ka: "使者梅勒王",
        id: 960
      })
      
    
      this.add({
        label_eng: "Go Sankei",
        label_ka: "司馬将軍呉三桂",
        id: 961
      })
      
    
      this.add({
        label_eng: "Princess Sendan",
        label_ka: "栴檀皇女",
        id: 962
      })
      
    
      this.add({
        label_eng: "Ryukakun",
        label_ka: "柳哥君",
        id: 963
      })
      
    
      this.add({
        label_eng: "An Taijin",
        label_ka: "安大人",
        id: 964
      })
      
    
      this.add({
        label_eng: "Watonai",
        label_ka: "和藤内",
        id: 965
      })
      
    
      this.add({
        label_eng: "Komutsu",
        label_ka: "女房小むつ",
        id: 966
      })
      
    
      this.add({
        label_eng: "Ro Ikkan",
        label_ka: "鄭芝龍老一官",
        id: 967
      })
      
    
      this.add({
        label_eng: "Ro Ikkan's wife",
        label_ka: "老一官妻",
        id: 968
      })
      
    
      this.add({
        label_eng: "Kinshojo",
        label_ka: "錦祥女",
        id: 969
      })
      
    
      this.add({
        label_eng: "Gojogun Kanki",
        label_ka: "五常軍甘輝",
        id: 970
      })
      
    
      this.add({
        label_eng: "Omodakahime",
        label_ka: "沢瀉姫",
        id: 971
      })
      
    
      this.add({
        label_eng: "Lady Fujinami",
        label_ka: "局藤浪",
        id: 972
      })
      
    
      this.add({
        label_eng: "Sarashina",
        label_ka: "腰元更科",
        id: 973
      })
      
    
      this.add({
        label_eng: "Kamon, a maid",
        label_ka: "腰元歌門",
        id: 974
      })
      
    
      this.add({
        label_eng: "Genshichi, in fact Tokiyuki",
        label_ka: "煙草屋源七実は坂田蔵人時行",
        id: 975
      })
      
    
      this.add({
        label_eng: "Yaegiri",
        label_ka: "荻野屋八重桐",
        id: 976
      })
      
    
      this.add({
        label_eng: "Taro Ota",
        label_ka: "太田太郎",
        id: 977
      })
      
    
      this.add({
        label_eng: "Tayu",
        label_ka: "太夫",
        id: 978
      })
      
    
      this.add({
        label_eng: "Saizo",
        label_ka: "才三",
        id: 979
      })
      
    
      this.add({
        label_eng: "Oume",
        label_ka: "娘お梅",
        id: 980
      })
      
    
      this.add({
        label_eng: "Tazaemon",
        label_ka: "手代太左衛門",
        id: 981
      })
      
    
      this.add({
        label_eng: "Seijuro",
        label_ka: "手代清十郎",
        id: 982
      })
      
    
      this.add({
        label_eng: "Hanroku",
        label_ka: "小半の親方",
        id: 983
      })
      
    
      this.add({
        label_eng: "Sajibei (Sajihei)",
        label_ka: "親佐治兵衛",
        id: 984
      })
      
    
      this.add({
        label_eng: "Onatsu",
        label_ka: "娘お夏",
        id: 985
      })
      
    
      this.add({
        label_eng: "Okane",
        label_ka: "母おかね",
        id: 986
      })
      
    
      this.add({
        label_eng: "Tokujiro",
        label_ka: "徳次郎",
        id: 987
      })
      
    
      this.add({
        label_eng: "Kohan",
        label_ka: "女郎小半",
        id: 988
      })
      
    
      this.add({
        label_eng: "Tokuemon",
        label_ka: "親徳右衛門",
        id: 989
      })
      
    
      this.add({
        label_eng: "Chokichi",
        label_ka: "丁稚長吉",
        id: 990
      })
      
    
      this.add({
        label_eng: "Omatsu",
        label_ka: "下女お松",
        id: 991
      })
      
    
      this.add({
        label_eng: "Senzai",
        label_ka: "千歳",
        id: 992
      })
      
    
      this.add({
        label_eng: "Okina",
        label_ka: "翁",
        id: 993
      })
      
    
      this.add({
        label_eng: "Sambaso",
        label_ka: "三番叟",
        id: 994
      })
      
    
      this.add({
        label_eng: "Otomobo",
        label_ka: "大伴坊",
        id: 995
      })
      
    
      this.add({
        label_eng: "Azumibo",
        label_ka: "安曇坊",
        id: 996
      })
      
    
      this.add({
        label_eng: "Kume-no-Sennin",
        label_ka: "粂仙人",
        id: 997
      })
      
    
      this.add({
        label_eng: "Hanamasu",
        label_ka: "花ます",
        id: 998
      })
      
    
      this.add({
        label_eng: "Kikuno",
        label_ka: "桜風呂の菊野",
        id: 999
      })
      
    
      this.add({
        label_eng: "Okishi",
        label_ka: "仲居お岸",
        id: 1000
      })
      
    
      this.add({
        label_eng: "Kojoro, a maid",
        label_ka: "小女郎",
        id: 1001
      })
      
    
      this.add({
        label_eng: "Iheita",
        label_ka: "若党伊平太",
        id: 1002
      })
      
    
      this.add({
        label_eng: "Hatsuemon",
        label_ka: "八柴初右衛門",
        id: 1003
      })
      
    
      this.add({
        label_eng: "Nisaburo",
        label_ka: "絵屋仁三郎",
        id: 1004
      })
      
    
      this.add({
        label_eng: "Chushichi (Tadashichi), a jester",
        label_ka: "太鼓持忠七",
        id: 1005
      })
      
    
      this.add({
        label_eng: "Tea house proprietor",
        label_ka: "大重の亭主",
        id: 1006
      })
      
    
      this.add({
        label_eng: "Gennosuke",
        label_ka: "弟源之助",
        id: 1007
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "迎いの奴",
        id: 1008
      })
      
    
      this.add({
        label_eng: "Omisu",
        label_ka: "許嫁おみす",
        id: 1009
      })
      
    
      this.add({
        label_eng: "Busuke",
        label_ka: "悪者武助",
        id: 1010
      })
      
    
      this.add({
        label_eng: "Kizaemon",
        label_ka: "吉田屋喜左衛門",
        id: 1011
      })
      
    
      this.add({
        label_eng: "Otsuru, a maid",
        label_ka: "仲居お鶴",
        id: 1012
      })
      
    
      this.add({
        label_eng: "Okame, a maid",
        label_ka: "仲居お亀",
        id: 1013
      })
      
    
      this.add({
        label_eng: "Gondayu",
        label_ka: "権太夫",
        id: 1014
      })
      
    
      this.add({
        label_eng: "Shishidayu",
        label_ka: "獅子太夫",
        id: 1015
      })
      
    
      this.add({
        label_eng: "Izaemon",
        label_ka: "藤屋伊左衛門",
        id: 1016
      })
      
    
      this.add({
        label_eng: "Okisa, Kizaemon's wife",
        label_ka: "女房おきさ",
        id: 1017
      })
      
    
      this.add({
        label_eng: "Yugiri",
        label_ka: "扇屋夕霧",
        id: 1018
      })
      
    
      this.add({
        label_eng: "Professional jester",
        label_ka: "太鼓持",
        id: 1019
      })
      
    
      this.add({
        label_eng: "Little girl attendant",
        label_ka: "禿",
        id: 1020
      })
      
    
      this.add({
        label_eng: "Tokutayu (Tokudayu)",
        label_ka: "祖父徳太夫",
        id: 1021
      })
      
    
      this.add({
        label_eng: "Kosen",
        label_ka: "祖母小仙",
        id: 1022
      })
      
    
      this.add({
        label_eng: "Dumpling peddler",
        label_ka: "団子売",
        id: 1023
      })
      
    
      this.add({
        label_eng: "Fugitive Warrior",
        label_ka: "落武者",
        id: 1024
      })
      
    
      this.add({
        label_eng: "Firewood gatherer (woodcutter)",
        label_ka: "柴刈男",
        id: 1025
      })
      
    
      this.add({
        label_eng: "Otowa",
        label_ka: "女房おとわ",
        id: 1026
      })
      
    
      this.add({
        label_eng: "Sentaro",
        label_ka: "伜千太郎",
        id: 1027
      })
      
    
      this.add({
        label_eng: "Utsunomiya Kintsuna",
        label_ka: "宇都宮公綱",
        id: 1028
      })
      
    
      this.add({
        label_eng: "Teriha",
        label_ka: "妻照葉",
        id: 1029
      })
      
    
      this.add({
        label_eng: "Midori",
        label_ka: "娘みどり",
        id: 1030
      })
      
    
      this.add({
        label_eng: "Masashige Kusunoki",
        label_ka: "楠正成",
        id: 1031
      })
      
    
      this.add({
        label_eng: "Messenger",
        label_ka: "注進",
        id: 1032
      })
      
    
      this.add({
        label_eng: "Yappachi",
        label_ka: "やっ八(八作)",
        id: 1033
      })
      
    
      this.add({
        label_eng: "Kamagoro",
        label_ka: "鎌五郎",
        id: 1034
      })
      
    
      this.add({
        label_eng: "Ominaeshi",
        label_ka: "小侍従女郎花",
        id: 1035
      })
      
    
      this.add({
        label_eng: "Matsuomaru",
        label_ka: "侍童松王丸",
        id: 1036
      })
      
    
      this.add({
        label_eng: "Priest",
        label_ka: "山法師",
        id: 1037
      })
      
    
      this.add({
        label_eng: "Nun",
        label_ka: "尼",
        id: 1038
      })
      
    
      this.add({
        label_eng: "Kowakubi",
        label_ka: "武蔵の強頸",
        id: 1039
      })
      
    
      this.add({
        label_eng: "Kirara",
        label_ka: "きらら",
        id: 1040
      })
      
    
      this.add({
        label_eng: "Yukimune, Imperial messenger",
        label_ka: "勅使葛城の行宗",
        id: 1041
      })
      
    
      this.add({
        label_eng: "Koromonogo, Head of upper village",
        label_ka: "連衫子",
        id: 1042
      })
      
    
      this.add({
        label_eng: "Kawachinosuke",
        label_ka: "河内介",
        id: 1043
      })
      
    
      this.add({
        label_eng: "Koen",
        label_ka: "端下女小えん",
        id: 1044
      })
      
    
      this.add({
        label_eng: "Hillbilly",
        label_ka: "山男",
        id: 1045
      })
      
    
      this.add({
        label_eng: "Takemaro",
        label_ka: "竹麿",
        id: 1046
      })
      
    
      this.add({
        label_eng: "White-robed priest",
        label_ka: "白衣の行人",
        id: 1047
      })
      
    
      this.add({
        label_eng: "Yokoshiba",
        label_ka: "執事横芝",
        id: 1048
      })
      
    
      this.add({
        label_eng: "Queer-shaped man",
        label_ka: "異形の男",
        id: 1049
      })
      
    
      this.add({
        label_eng: "Tayu",
        label_ka: "太夫",
        id: 1050
      })
      
    
      this.add({
        label_eng: "Saizo",
        label_ka: "才蔵",
        id: 1051
      })
      
    
      this.add({
        label_eng: "Feudal lord",
        label_ka: "大名",
        id: 1052
      })
      
    
      this.add({
        label_eng: "Retainer",
        label_ka: "太郎冠者",
        id: 1053
      })
      
    
      this.add({
        label_eng: "Monkey trainer",
        label_ka: "猿曳",
        id: 1054
      })
      
    
      this.add({
        label_eng: "Kasane",
        label_ka: "累",
        id: 1055
      })
      
    
      this.add({
        label_eng: "Kinugawa, later known as Yoemon",
        label_ka: "絹川谷蔵後に与右衛門",
        id: 1056
      })
      
    
      this.add({
        label_eng: "Takao's ghost",
        label_ka: "高尾の亡霊",
        id: 1057
      })
      
    
      this.add({
        label_eng: "Sabu",
        label_ka: "豆腐屋(兄)三婦",
        id: 1058
      })
      
    
      this.add({
        label_eng: "Yonokichi",
        label_ka: "百姓与之吉",
        id: 1059
      })
      
    
      this.add({
        label_eng: "Okoma",
        label_ka: "お駒",
        id: 1060
      })
      
    
      this.add({
        label_eng: "Kingoro",
        label_ka: "金五郎",
        id: 1061
      })
      
    
      this.add({
        label_eng: "Brothel owner",
        label_ka: "女郎屋亭主",
        id: 1062
      })
      
    
      this.add({
        label_eng: "Utakata",
        label_ka: "歌潟姫",
        id: 1063
      })
      
    
      this.add({
        label_eng: "Masaoka",
        label_ka: "乳人政岡",
        id: 1064
      })
      
    
      this.add({
        label_eng: "Tsurukiyo",
        label_ka: "鶴喜代君",
        id: 1065
      })
      
    
      this.add({
        label_eng: "Senmatsu",
        label_ka: "千松",
        id: 1066
      })
      
    
      this.add({
        label_eng: "Yashio",
        label_ka: "八汐",
        id: 1067
      })
      
    
      this.add({
        label_eng: "Okinoi",
        label_ka: "沖の井",
        id: 1068
      })
      
    
      this.add({
        label_eng: "Komaki",
        label_ka: "小巻",
        id: 1069
      })
      
    
      this.add({
        label_eng: "Secret agent",
        label_ka: "忍び",
        id: 1070
      })
      
    
      this.add({
        label_eng: "Lady Sakae",
        label_ka: "栄御前",
        id: 1071
      })
      
    
      this.add({
        label_eng: "Setsunosuke Matsugae",
        label_ka: "松ヶ枝節之助",
        id: 1072
      })
      
    
      this.add({
        label_eng: "Kageyu Kaita (Kaida)",
        label_ka: "貝田勘解由",
        id: 1073
      })
      
    
      this.add({
        label_eng: "Ihei",
        label_ka: "手代伊兵衛",
        id: 1074
      })
      
    
      this.add({
        label_eng: "Jinnai",
        label_ka: "国侍甚内",
        id: 1075
      })
      
    
      this.add({
        label_eng: "Myokan",
        label_ka: "母妙閑",
        id: 1076
      })
      
    
      this.add({
        label_eng: "Chubei",
        label_ka: "亀屋忠兵衛",
        id: 1077
      })
      
    
      this.add({
        label_eng: "Man",
        label_ka: "下女まん",
        id: 1078
      })
      
    
      this.add({
        label_eng: "Hachiemon",
        label_ka: "丹波屋八右衛門",
        id: 1079
      })
      
    
      this.add({
        label_eng: "Baggage transport manager",
        label_ka: "宰領",
        id: 1080
      })
      
    
      this.add({
        label_eng: "Supervisor of courtesans",
        label_ka: "花車",
        id: 1081
      })
      
    
      this.add({
        label_eng: "Courtesan Umegawa",
        label_ka: "傾城(遊女)梅川",
        id: 1082
      })
      
    
      this.add({
        label_eng: "Courtesan Chiyotose",
        label_ka: "傾城(遊女)千代歳",
        id: 1083
      })
      
    
      this.add({
        label_eng: "Courtesan Narutose",
        label_ka: "傾城(遊女)鳴渡瀬",
        id: 1084
      })
      
    
      this.add({
        label_eng: "Girl attendant to a courtesan",
        label_ka: "禿",
        id: 1085
      })
      
    
      this.add({
        label_eng: "Jester Gohei",
        label_ka: "太鼓持五兵衛",
        id: 1086
      })
      
    
      this.add({
        label_eng: "Palanquin bearer",
        label_ka: "駕屋",
        id: 1087
      })
      
    
      this.add({
        label_eng: "Mask peddler",
        label_ka: "面売り(娘)",
        id: 1088
      })
      
    
      this.add({
        label_eng: "Professional chatterbox",
        label_ka: "おしゃべり案山子",
        id: 1089
      })
      
    
      this.add({
        label_eng: "Ryukichi",
        label_ka: "柳吉",
        id: 1090
      })
      
    
      this.add({
        label_eng: "Choko",
        label_ka: "蝶子",
        id: 1091
      })
      
    
      this.add({
        label_eng: "Kimpachi",
        label_ka: "朋輩芸者金八",
        id: 1092
      })
      
    
      this.add({
        label_eng: "Tomeko",
        label_ka: "おちょぼとめ子",
        id: 1093
      })
      
    
      this.add({
        label_eng: "Taneichi",
        label_ka: "父種吉",
        id: 1094
      })
      
    
      this.add({
        label_eng: "Otatsu",
        label_ka: "母お辰",
        id: 1095
      })
      
    
      this.add({
        label_eng: "Wodden lunch box maker's wife",
        label_ka: "折箱屋女房",
        id: 1096
      })
      
    
      this.add({
        label_eng: "Okin",
        label_ka: "周旋屋おきん",
        id: 1097
      })
      
    
      this.add({
        label_eng: "Kyoko",
        label_ka: "娘京子",
        id: 1098
      })
      
    
      this.add({
        label_eng: "Kozue",
        label_ka: "娘こずえ",
        id: 1099
      })
      
    
      this.add({
        label_eng: "Old female cormorant",
        label_ka: "鵜の婆",
        id: 1100
      })
      
    
      this.add({
        label_eng: "Yohei",
        label_ka: "与兵衛",
        id: 1101
      })
      
    
      this.add({
        label_eng: "Santaro",
        label_ka: "三太郎",
        id: 1102
      })
      
    
      this.add({
        label_eng: "Ino",
        label_ka: "猪乃",
        id: 1103
      })
      
    
      this.add({
        label_eng: "Yozaemon",
        label_ka: "与左衛門",
        id: 1104
      })
      
    
      this.add({
        label_eng: "Chief cormorant",
        label_ka: "鵜の尉",
        id: 1105
      })
      
    
      this.add({
        label_eng: "Yozaemon's wife",
        label_ka: "与左衛門女房",
        id: 1106
      })
      
    
      this.add({
        label_eng: "Comorants",
        label_ka: "鵜の鳥",
        id: 1107
      })
      
    
      this.add({
        label_eng: "Ouno",
        label_ka: "お鵜乃 実は鵜の女",
        id: 1108
      })
      
    
      this.add({
        label_eng: "Tsuna Watanabe",
        label_ka: "渡辺源吾綱",
        id: 1109
      })
      
    
      this.add({
        label_eng: "Ugenta",
        label_ka: "右源太",
        id: 1110
      })
      
    
      this.add({
        label_eng: "Sagenta",
        label_ka: "左源太",
        id: 1111
      })
      
    
      this.add({
        label_eng: "Wakana, in fact a demon",
        label_ka: "扇折娘若菜実は悪鬼",
        id: 1112
      })
      
    
      this.add({
        label_eng: "Jirosaku",
        label_ka: "浪花次郎作",
        id: 1113
      })
      
    
      this.add({
        label_eng: "Azumano Yoshiro",
        label_ka: "吾妻与四郎",
        id: 1114
      })
      
    
      this.add({
        label_eng: "Girl attendant to a courtesan",
        label_ka: "禿",
        id: 1115
      })
      
    
      this.add({
        label_eng: "Fukunoichi",
        label_ka: "福の市",
        id: 1116
      })
      
    
      this.add({
        label_eng: "Tokunoichi",
        label_ka: "徳の市",
        id: 1117
      })
      
    
      this.add({
        label_eng: "Tamanoichi",
        label_ka: "玉の市",
        id: 1118
      })
      
    
      this.add({
        label_eng: "Koremochi Taira",
        label_ka: "平維茂",
        id: 1119
      })
      
    
      this.add({
        label_eng: "Princess Sarashina, in fact a demoness",
        label_ka: "更科姫実は鬼女",
        id: 1120
      })
      
    
      this.add({
        label_eng: "Lady-in-waiting",
        label_ka: "腰元",
        id: 1121
      })
      
    
      this.add({
        label_eng: "God of Mountain",
        label_ka: "山神",
        id: 1122
      })
      
    
      this.add({
        label_eng: "Wife of Hanabishiya's proprietor",
        label_ka: "花菱屋女房",
        id: 1123
      })
      
    
      this.add({
        label_eng: "Hanabishiya's proprietor",
        label_ka: "花菱屋長",
        id: 1124
      })
      
    
      this.add({
        label_eng: "Sajitayu",
        label_ka: "肝煎左治太夫",
        id: 1125
      })
      
    
      this.add({
        label_eng: "Itotaki",
        label_ka: "娘糸滝",
        id: 1126
      })
      
    
      this.add({
        label_eng: "Prostitute",
        label_ka: "遊君",
        id: 1127
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "遣り手",
        id: 1128
      })
      
    
      this.add({
        label_eng: "Cook",
        label_ka: "飯焚き女",
        id: 1129
      })
      
    
      this.add({
        label_eng: "Kyuzo",
        label_ka: "久三",
        id: 1130
      })
      
    
      this.add({
        label_eng: "Kojoro",
        label_ka: "小女郎",
        id: 1131
      })
      
    
      this.add({
        label_eng: "Kagekiyo",
        label_ka: "悪七兵衛景清",
        id: 1132
      })
      
    
      this.add({
        label_eng: "Shiro",
        label_ka: "天野四郎",
        id: 1133
      })
      
    
      this.add({
        label_eng: "Gunnai",
        label_ka: "土屋軍内",
        id: 1134
      })
      
    
      this.add({
        label_eng: "Boatman",
        label_ka: "船頭",
        id: 1135
      })
      
    
      this.add({
        label_eng: "Sabu",
        label_ka: "釣船三婦",
        id: 1136
      })
      
    
      this.add({
        label_eng: "Ichimatsu",
        label_ka: "伜市松",
        id: 1137
      })
      
    
      this.add({
        label_eng: "Okaji",
        label_ka: "団七女房お梶",
        id: 1138
      })
      
    
      this.add({
        label_eng: "Koppa-no-gon",
        label_ka: "こっぱの権",
        id: 1139
      })
      
    
      this.add({
        label_eng: "Namako-no-hachi",
        label_ka: "なまこの八 (なまの八)",
        id: 1140
      })
      
    
      this.add({
        label_eng: "Isonojo",
        label_ka: "玉島磯之丞 (清七実は磯之丞)",
        id: 1141
      })
      
    
      this.add({
        label_eng: "Danshichi",
        label_ka: "団七九郎兵衛",
        id: 1142
      })
      
    
      this.add({
        label_eng: "Government official",
        label_ka: "役人",
        id: 1143
      })
      
    
      this.add({
        label_eng: "Kotoura",
        label_ka: "傾城琴浦",
        id: 1144
      })
      
    
      this.add({
        label_eng: "Sagaemon",
        label_ka: "大鳥佐賀右衛門",
        id: 1145
      })
      
    
      this.add({
        label_eng: "Tokubei",
        label_ka: "一寸徳兵衛",
        id: 1146
      })
      
    
      this.add({
        label_eng: "Onaka",
        label_ka: "娘お中",
        id: 1147
      })
      
    
      this.add({
        label_eng: "Giheiji",
        label_ka: "三河屋義平次",
        id: 1148
      })
      
    
      this.add({
        label_eng: "Dempachi",
        label_ka: "番頭伝八",
        id: 1149
      })
      
    
      this.add({
        label_eng: "Yaichi",
        label_ka: "仲買弥市",
        id: 1150
      })
      
    
      this.add({
        label_eng: "Magoemon",
        label_ka: "道具屋孫右衛門",
        id: 1151
      })
      
    
      this.add({
        label_eng: "Otsugi",
        label_ka: "三婦女房おつぎ",
        id: 1152
      })
      
    
      this.add({
        label_eng: "Otatsu",
        label_ka: "徳兵衛女房お辰",
        id: 1153
      })
      
    
      this.add({
        label_eng: "Sazen",
        label_ka: "代官左膳",
        id: 1154
      })
      
    
      this.add({
        label_eng: "Asaka",
        label_ka: "浅香姫",
        id: 1155
      })
      
    
      this.add({
        label_eng: "Chidori",
        label_ka: "腰元千鳥",
        id: 1156
      })
      
    
      this.add({
        label_eng: "Koroku",
        label_ka: "郎党くるみ割の小六",
        id: 1157
      })
      
    
      this.add({
        label_eng: "Chuchu Gonnokami",
        label_ka: "若殿忠冑権の頭",
        id: 1158
      })
      
    
      this.add({
        label_eng: "Girl attendant to a courtesan",
        label_ka: "禿",
        id: 1159
      })
      
    
      this.add({
        label_eng: "Geisha",
        label_ka: "芸者",
        id: 1160
      })
      
    
      this.add({
        label_eng: "Madame Butterfly",
        label_ka: "お蝶夫人",
        id: 1161
      })
      
    
      this.add({
        label_eng: "Pinkerton",
        label_ka: "ピンカートン",
        id: 1162
      })
      
    
      this.add({
        label_eng: "Kate",
        label_ka: "夫人ケート",
        id: 1163
      })
      
    
      this.add({
        label_eng: "Suzuki",
        label_ka: "召使鈴木",
        id: 1164
      })
      
    
      this.add({
        label_eng: "Goro",
        label_ka: "仲人業五郎",
        id: 1165
      })
      
    
      this.add({
        label_eng: "Yamadori",
        label_ka: "ならず者山鳥",
        id: 1166
      })
      
    
      this.add({
        label_eng: "Child",
        label_ka: "子供",
        id: 1167
      })
      
    
      this.add({
        label_eng: "False Hanagaki Gonnokami",
        label_ka: "贋の花垣権頭",
        id: 1168
      })
      
    
      this.add({
        label_eng: "Chunagon Takafusa",
        label_ka: "中納言高房",
        id: 1169
      })
      
    
      this.add({
        label_eng: "Sannokimi",
        label_ka: "三の君",
        id: 1170
      })
      
    
      this.add({
        label_eng: "Watanabe-no-Tsuna",
        label_ka: "渡辺綱",
        id: 1171
      })
      
    
      this.add({
        label_eng: "Hanagaki Gonnokami",
        label_ka: "花垣権頭",
        id: 1172
      })
      
    
      this.add({
        label_eng: "Tsuna's aunt, in fact Ibarakidoji",
        label_ka: "綱の伯母実は茨木童子",
        id: 1173
      })
      
    
      this.add({
        label_eng: "Minamoto-no-Yorimitsu",
        label_ka: "源頼光",
        id: 1174
      })
      
    
      this.add({
        label_eng: "Urabe-no-Suetake",
        label_ka: "占部季武",
        id: 1175
      })
      
    
      this.add({
        label_eng: "Usui-no-Sadamitsu",
        label_ka: "碓井定光",
        id: 1176
      })
      
    
      this.add({
        label_eng: "Sadaiben Sanechika",
        label_ka: "左大弁実親卿",
        id: 1177
      })
      
    
      this.add({
        label_eng: "Abe-no-Seimei",
        label_ka: "安倍晴明",
        id: 1178
      })
      
    
      this.add({
        label_eng: "Hosho Hirai",
        label_ka: "平井保昌",
        id: 1179
      })
      
    
      this.add({
        label_eng: "Sakata-no-Kintoki",
        label_ka: "坂田金時",
        id: 1180
      })
      
    
      this.add({
        label_eng: "Woodcutter",
        label_ka: "樵夫",
        id: 1181
      })
      
    
      this.add({
        label_eng: "Girl washing clothes",
        label_ka: "衣洗いの娘",
        id: 1182
      })
      
    
      this.add({
        label_eng: "Shutendoji",
        label_ka: "酒呑童子",
        id: 1183
      })
      
    
      this.add({
        label_eng: "Red ogre",
        label_ka: "赤鬼",
        id: 1184
      })
      
    
      this.add({
        label_eng: "Green ogre",
        label_ka: "青鬼",
        id: 1185
      })
      
    
      this.add({
        label_eng: "Divine child",
        label_ka: "神童",
        id: 1186
      })
      
    
      this.add({
        label_eng: "Red ogre",
        label_ka: "赤鬼",
        id: 1187
      })
      
    
      this.add({
        label_eng: "Green ogre",
        label_ka: "青鬼",
        id: 1188
      })
      
    
      this.add({
        label_eng: "Kintoki Sakata",
        label_ka: "坂田公時",
        id: 1189
      })
      
    
      this.add({
        label_eng: "Ground spider, in fact Kidomaru",
        label_ka: "土蜘蛛実は鬼童丸",
        id: 1190
      })
      
    
      this.add({
        label_eng: "Yorimitsu",
        label_ka: "源頼光",
        id: 1191
      })
      
    
      this.add({
        label_eng: "Yoshichi",
        label_ka: "与七",
        id: 1192
      })
      
    
      this.add({
        label_eng: "Satoru",
        label_ka: "一子悟",
        id: 1193
      })
      
    
      this.add({
        label_eng: "Housewife in the neighborhood",
        label_ka: "おばはん",
        id: 1194
      })
      
    
      this.add({
        label_eng: "Ohan",
        label_ka: "おはん",
        id: 1195
      })
      
    
      this.add({
        label_eng: "Okayo",
        label_ka: "おかよ",
        id: 1196
      })
      
    
      this.add({
        label_eng: "Moritsuna",
        label_ka: "佐々木盛綱 (佐々木三郎兵衛盛綱)",
        id: 1197
      })
      
    
      this.add({
        label_eng: "Takatsuna",
        label_ka: "佐々木高綱 (佐々木四郎左衛門高綱)",
        id: 1198
      })
      
    
      this.add({
        label_eng: "Kagaribi",
        label_ka: "妻篝火",
        id: 1199
      })
      
    
      this.add({
        label_eng: "Shinzaemon",
        label_ka: "古郡新左衛門",
        id: 1200
      })
      
    
      this.add({
        label_eng: "Koshiro",
        label_ka: "小四郎 (小四郎高重)",
        id: 1201
      })
      
    
      this.add({
        label_eng: "Kosaburo",
        label_ka: "小三郎 (小三郎盛清)",
        id: 1202
      })
      
    
      this.add({
        label_eng: "Mimyo",
        label_ka: "母微妙",
        id: 1203
      })
      
    
      this.add({
        label_eng: "Hayase",
        label_ka: "妻早瀬",
        id: 1204
      })
      
    
      this.add({
        label_eng: "Shitobei, in fact Byoe",
        label_ka: "駕籠舁四斗兵衛実は和田兵衛秀盛",
        id: 1205
      })
      
    
      this.add({
        label_eng: "First messenger",
        label_ka: "注進",
        id: 1206
      })
      
    
      this.add({
        label_eng: "Second messenger",
        label_ka: "二度の注進",
        id: 1207
      })
      
    
      this.add({
        label_eng: "Tokimasa",
        label_ka: "北條時政",
        id: 1208
      })
      
    
      this.add({
        label_eng: "Magohachi",
        label_ka: "竹下孫八",
        id: 1209
      })
      
    
      this.add({
        label_eng: "Juro",
        label_ka: "榛谷十郎",
        id: 1210
      })
      
    
      this.add({
        label_eng: "Bonta",
        label_ka: "ぼん太",
        id: 1211
      })
      
    
      this.add({
        label_eng: "Sonobenosuke",
        label_ka: "花岡園部之介",
        id: 1212
      })
      
    
      this.add({
        label_eng: "Kotoji",
        label_ka: "谷村小藤治",
        id: 1213
      })
      
    
      this.add({
        label_eng: "Rokuro",
        label_ka: "四宮六郎",
        id: 1214
      })
      
    
      this.add({
        label_eng: "Tokimasa's double",
        label_ka: "贋時政",
        id: 1215
      })
      
    
      this.add({
        label_eng: "Helmeted warrior",
        label_ka: "鎧武者",
        id: 1216
      })
      
    
      this.add({
        label_eng: "Spy",
        label_ka: "忍び",
        id: 1217
      })
      
    
      this.add({
        label_eng: "Toda",
        label_ka: "藤太",
        id: 1218
      })
      
    
      this.add({
        label_eng: "Okichi",
        label_ka: "女房お吉",
        id: 1219
      })
      
    
      this.add({
        label_eng: "Okiyo",
        label_ka: "姉娘お清",
        id: 1220
      })
      
    
      this.add({
        label_eng: "Tea stall proprietor",
        label_ka: "茶店の亭主",
        id: 1221
      })
      
    
      this.add({
        label_eng: "Yohei",
        label_ka: "河内屋与兵衛",
        id: 1222
      })
      
    
      this.add({
        label_eng: "Yagoro",
        label_ka: "刷毛の弥五郎",
        id: 1223
      })
      
    
      this.add({
        label_eng: "Zembei",
        label_ka: "皆朱の善兵衛",
        id: 1224
      })
      
    
      this.add({
        label_eng: "Kogiku",
        label_ka: "天王寺屋小菊",
        id: 1225
      })
      
    
      this.add({
        label_eng: "Brothel Supervisor",
        label_ka: "天王寺屋花車",
        id: 1226
      })
      
    
      this.add({
        label_eng: "Millionaire escort to Kogiku",
        label_ka: "会津の大尽蝋九",
        id: 1227
      })
      
    
      this.add({
        label_eng: "Moriemon",
        label_ka: "山本森右衛門",
        id: 1228
      })
      
    
      this.add({
        label_eng: "Hachiya",
        label_ka: "小栗八弥",
        id: 1229
      })
      
    
      this.add({
        label_eng: "Shichizaemon",
        label_ka: "豊島屋七左衛門",
        id: 1230
      })
      
    
      this.add({
        label_eng: "Pilgrimage leader",
        label_ka: "山上講先達",
        id: 1231
      })
      
    
      this.add({
        label_eng: "Tokubei",
        label_ka: "河内屋徳兵衛",
        id: 1232
      })
      
    
      this.add({
        label_eng: "Osawa",
        label_ka: "徳兵衛女房お沢",
        id: 1233
      })
      
    
      this.add({
        label_eng: "Tahei",
        label_ka: "河内屋太兵衛",
        id: 1234
      })
      
    
      this.add({
        label_eng: "Priest",
        label_ka: "稲荷法印",
        id: 1235
      })
      
    
      this.add({
        label_eng: "Okachi",
        label_ka: "妹おかち",
        id: 1236
      })
      
    
      this.add({
        label_eng: "Kohei",
        label_ka: "綿屋小兵衛",
        id: 1237
      })
      
    
      this.add({
        label_eng: "Gorokuro",
        label_ka: "帳紙屋五郎九郎",
        id: 1238
      })
      
    
      this.add({
        label_eng: "Okichi's second daughter",
        label_ka: "中娘",
        id: 1239
      })
      
    
      this.add({
        label_eng: "Head of police unit",
        label_ka: "捕手頭",
        id: 1240
      })
      
    
      this.add({
        label_eng: "Yoshiie",
        label_ka: "八幡太郎義家",
        id: 1241
      })
      
    
      this.add({
        label_eng: "Kagenari",
        label_ka: "鎌倉権守景成",
        id: 1242
      })
      
    
      this.add({
        label_eng: "Shiro",
        label_ka: "瓜割四郎糺",
        id: 1243
      })
      
    
      this.add({
        label_eng: "Koretoki",
        label_ka: "大江大将維時",
        id: 1244
      })
      
    
      this.add({
        label_eng: "Koiginu",
        label_ka: "傾城恋絹",
        id: 1245
      })
      
    
      this.add({
        label_eng: "Ichiya, girl attendant to a courtesan",
        label_ka: "禿市弥",
        id: 1246
      })
      
    
      this.add({
        label_eng: "Prince Tamaki, in fact Yatsuwaka",
        label_ka: "環の宮実は義家一子八若",
        id: 1247
      })
      
    
      this.add({
        label_eng: "Lady-in-waiting Kushige, in fact Yoshimitsu",
        label_ka: "匣の内侍実は新羅三郎義光",
        id: 1248
      })
      
    
      this.add({
        label_eng: "Ikomanosuke",
        label_ka: "志賀崎生駒之助",
        id: 1249
      })
      
    
      this.add({
        label_eng: "Street entertainer, in fact Abe's retainer",
        label_ka: "鳥刺し実は安倍の家来",
        id: 1250
      })
      
    
      this.add({
        label_eng: "Naokata",
        label_ka: "平傔仗直方",
        id: 1251
      })
      
    
      this.add({
        label_eng: "Hazakura, a maid",
        label_ka: "腰元葉桜",
        id: 1252
      })
      
    
      this.add({
        label_eng: "Mihashi, a maid",
        label_ka: "腰元みはし",
        id: 1253
      })
      
    
      this.add({
        label_eng: "Kaede, a maid",
        label_ka: "腰元楓",
        id: 1254
      })
      
    
      this.add({
        label_eng: "Gunki",
        label_ka: "笠原軍記",
        id: 1255
      })
      
    
      this.add({
        label_eng: "Shikitae",
        label_ka: "敷妙御前",
        id: 1256
      })
      
    
      this.add({
        label_eng: "Tomozo",
        label_ka: "文字屋友三",
        id: 1257
      })
      
    
      this.add({
        label_eng: "Sosuke",
        label_ka: "請人惣助",
        id: 1258
      })
      
    
      this.add({
        label_eng: "Yaehata",
        label_ka: "義家妹八重幡姫",
        id: 1259
      })
      
    
      this.add({
        label_eng: "Noriuji, in fact Sadato",
        label_ka: "桂中納言則氏実は安倍貞任",
        id: 1260
      })
      
    
      this.add({
        label_eng: "Gunroku",
        label_ka: "笠原軍六",
        id: 1261
      })
      
    
      this.add({
        label_eng: "Chota's wife",
        label_ka: "長太女房",
        id: 1262
      })
      
    
      this.add({
        label_eng: "Chota",
        label_ka: "海士長太",
        id: 1263
      })
      
    
      this.add({
        label_eng: "Otani",
        label_ka: "女房お谷",
        id: 1264
      })
      
    
      this.add({
        label_eng: "Takaemon",
        label_ka: "代官鵜の目鷹右衛門",
        id: 1265
      })
      
    
      this.add({
        label_eng: "Village headman",
        label_ka: "庄屋",
        id: 1266
      })
      
    
      this.add({
        label_eng: "Bunji",
        label_ka: "善知鳥文治安方",
        id: 1267
      })
      
    
      this.add({
        label_eng: "Nambei, in fact Muneto",
        label_ka: "車遣い(外が浜)南兵衛実は安倍宗任",
        id: 1268
      })
      
    
      this.add({
        label_eng: "Shoemon",
        label_ka: "年行司庄右衛門",
        id: 1269
      })
      
    
      this.add({
        label_eng: "Kiyodo",
        label_ka: "伜清童",
        id: 1270
      })
      
    
      this.add({
        label_eng: "Gosuke, brothel owner",
        label_ka: "くつわの亭主五助",
        id: 1271
      })
      
    
      this.add({
        label_eng: "Police captain",
        label_ka: "捕手頭",
        id: 1272
      })
      
    
      this.add({
        label_eng: "Sodehagi",
        label_ka: "袖萩",
        id: 1273
      })
      
    
      this.add({
        label_eng: "Okimi",
        label_ka: "娘お君",
        id: 1274
      })
      
    
      this.add({
        label_eng: "Roku, a begger",
        label_ka: "六",
        id: 1275
      })
      
    
      this.add({
        label_eng: "Jiroshichi, a begger",
        label_ka: "かさの次郎七",
        id: 1276
      })
      
    
      this.add({
        label_eng: "Kusuke, a begger",
        label_ka: "とんとこの九助",
        id: 1277
      })
      
    
      this.add({
        label_eng: "Hamayu",
        label_ka: "妻浜夕",
        id: 1278
      })
      
    
      this.add({
        label_eng: "Iwate",
        label_ka: "老女岩手",
        id: 1279
      })
      
    
      this.add({
        label_eng: "Traveller",
        label_ka: "旅の男",
        id: 1280
      })
      
    
      this.add({
        label_eng: "Drug peddler, in fact Kagemasa",
        label_ka: "薬売り実は鎌倉権五郎",
        id: 1281
      })
      
    
      this.add({
        label_eng: "Male lion",
        label_ka: "雄獅子",
        id: 1282
      })
      
    
      this.add({
        label_eng: "Female lion",
        label_ka: "雌獅子",
        id: 1283
      })
      
    
      this.add({
        label_eng: "Child lion",
        label_ka: "子獅子",
        id: 1284
      })
      
    
      this.add({
        label_eng: "Lady Nagisa",
        label_ka: "渚の方",
        id: 1285
      })
      
    
      this.add({
        label_eng: "Mitsumaru",
        label_ka: "光丸",
        id: 1286
      })
      
    
      this.add({
        label_eng: "Saeda",
        label_ka: "乳母小枝",
        id: 1287
      })
      
    
      this.add({
        label_eng: "Fujino, a maid servant",
        label_ka: "腰元藤野",
        id: 1288
      })
      
    
      this.add({
        label_eng: "Harue, a maid servant",
        label_ka: "腰元春枝",
        id: 1289
      })
      
    
      this.add({
        label_eng: "Soap bubble vendor",
        label_ka: "吹玉屋",
        id: 1290
      })
      
    
      this.add({
        label_eng: "Children",
        label_ka: "里の子",
        id: 1291
      })
      
    
      this.add({
        label_eng: "Assistant Priest Unya",
        label_ka: "雲弥坊",
        id: 1292
      })
      
    
      this.add({
        label_eng: "Priest Roben",
        label_ka: "良弁僧正",
        id: 1293
      })
      
    
      this.add({
        label_eng: "Apprentice priest",
        label_ka: "弟子僧",
        id: 1294
      })
      
    
      this.add({
        label_eng: "Dragon",
        label_ka: "龍",
        id: 1295
      })
      
    
      this.add({
        label_eng: "Tiger",
        label_ka: "虎",
        id: 1296
      })
      
    
      this.add({
        label_eng: "Yahei",
        label_ka: "香具屋弥兵衛",
        id: 1297
      })
      
    
      this.add({
        label_eng: "Jubei",
        label_ka: "てんぽの十兵衛",
        id: 1298
      })
      
    
      this.add({
        label_eng: "Otsuma's mother",
        label_ka: "お妻の母",
        id: 1299
      })
      
    
      this.add({
        label_eng: "Otsuma",
        label_ka: "女房お妻",
        id: 1300
      })
      
    
      this.add({
        label_eng: "Ohan",
        label_ka: "娘お半",
        id: 1301
      })
      
    
      this.add({
        label_eng: "Hachirobei",
        label_ka: "古手屋八郎兵衛",
        id: 1302
      })
      
    
      this.add({
        label_eng: "Gimpachi",
        label_ka: "仲仕銀八",
        id: 1303
      })
      
    
      this.add({
        label_eng: "Renge Obo",
        label_ka: "蓮華王坊",
        id: 1304
      })
      
    
      this.add({
        label_eng: "Naginosei",
        label_ka: "梛の精",
        id: 1305
      })
      
    
      this.add({
        label_eng: "Monk",
        label_ka: "客僧",
        id: 1306
      })
      
    
      this.add({
        label_eng: "Suenaka",
        label_ka: "大宰帥季仲",
        id: 1307
      })
      
    
      this.add({
        label_eng: "Tokizumi",
        label_ka: "武者所時澄",
        id: 1308
      })
      
    
      this.add({
        label_eng: "Heitaro",
        label_ka: "横曽根平太郎",
        id: 1309
      })
      
    
      this.add({
        label_eng: "Heitaro's mother",
        label_ka: "平太郎の母",
        id: 1310
      })
      
    
      this.add({
        label_eng: "Oryu",
        label_ka: "お柳",
        id: 1311
      })
      
    
      this.add({
        label_eng: "Former Emperor Shirakawa",
        label_ka: "白河法皇",
        id: 1312
      })
      
    
      this.add({
        label_eng: "Tadamori",
        label_ka: "平忠盛",
        id: 1313
      })
      
    
      this.add({
        label_eng: "Kurodo",
        label_ka: "進ノ蔵人",
        id: 1314
      })
      
    
      this.add({
        label_eng: "Midorimaru",
        label_ka: "緑丸",
        id: 1315
      })
      
    
      this.add({
        label_eng: "Rich man",
        label_ka: "有徳人",
        id: 1316
      })
      
    
      this.add({
        label_eng: "Zushio",
        label_ka: "厨子王丸",
        id: 1317
      })
      
    
      this.add({
        label_eng: "Rinemon",
        label_ka: "医者林右衛門",
        id: 1318
      })
      
    
      this.add({
        label_eng: "Heiji",
        label_ka: "阿漕の平治",
        id: 1319
      })
      
    
      this.add({
        label_eng: "Jirozo",
        label_ka: "平瓦治郎蔵",
        id: 1320
      })
      
    
      this.add({
        label_eng: "Oharu",
        label_ka: "女房お春",
        id: 1321
      })
      
    
      this.add({
        label_eng: "Heiji's mother",
        label_ka: "平治母",
        id: 1322
      })
      
    
      this.add({
        label_eng: "Hikosaku",
        label_ka: "庄屋彦作",
        id: 1323
      })
      
    
      this.add({
        label_eng: "Tomoishi",
        label_ka: "伜友石",
        id: 1324
      })
      
    
      this.add({
        label_eng: "Hyogo",
        label_ka: "代官奥村兵庫",
        id: 1325
      })
      
    
      this.add({
        label_eng: "Inagawa",
        label_ka: "猪名川",
        id: 1326
      })
      
    
      this.add({
        label_eng: "Tetsugatake",
        label_ka: "鉄ヶ嶽",
        id: 1327
      })
      
    
      this.add({
        label_eng: "Otowa",
        label_ka: "女房おとわ",
        id: 1328
      })
      
    
      this.add({
        label_eng: "Saemon",
        label_ka: "大坂屋",
        id: 1329
      })
      
    
      this.add({
        label_eng: "Crier",
        label_ka: "呼遣い",
        id: 1330
      })
      
    
      this.add({
        label_eng: "Shichibei",
        label_ka: "北野屋",
        id: 1331
      })
      
    
      this.add({
        label_eng: "Tamate-Gozen",
        label_ka: "玉手御前",
        id: 1332
      })
      
    
      this.add({
        label_eng: "Shuntokumaru",
        label_ka: "高安俊徳丸",
        id: 1333
      })
      
    
      this.add({
        label_eng: "Heima",
        label_ka: "壺井平馬",
        id: 1334
      })
      
    
      this.add({
        label_eng: "Zusho",
        label_ka: "桟図書",
        id: 1335
      })
      
    
      this.add({
        label_eng: "Irihei, a servant",
        label_ka: "奴入平",
        id: 1336
      })
      
    
      this.add({
        label_eng: "Gappo",
        label_ka: "合邦道心 (親合邦)",
        id: 1337
      })
      
    
      this.add({
        label_eng: "Asakahime",
        label_ka: "浅香姫",
        id: 1338
      })
      
    
      this.add({
        label_eng: "Gappo's wife",
        label_ka: "合邦女房",
        id: 1339
      })
      
    
      this.add({
        label_eng: "Jurojin",
        label_ka: "寿老人",
        id: 1340
      })
      
    
      this.add({
        label_eng: "Hotei",
        label_ka: "布袋",
        id: 1341
      })
      
    
      this.add({
        label_eng: "Daikokuten",
        label_ka: "大黒天",
        id: 1342
      })
      
    
      this.add({
        label_eng: "Benzaiten",
        label_ka: "弁財天",
        id: 1343
      })
      
    
      this.add({
        label_eng: "Fukurokuju",
        label_ka: "福禄寿",
        id: 1344
      })
      
    
      this.add({
        label_eng: "Ebisu",
        label_ka: "恵比須",
        id: 1345
      })
      
    
      this.add({
        label_eng: "Bishamon",
        label_ka: "毘沙門",
        id: 1346
      })
      
    
      this.add({
        label_eng: "Usuyuki",
        label_ka: "薄雪姫",
        id: 1347
      })
      
    
      this.add({
        label_eng: "Magaki",
        label_ka: "腰元籬",
        id: 1348
      })
      
    
      this.add({
        label_eng: "Saemon",
        label_ka: "園部左衛門",
        id: 1349
      })
      
    
      this.add({
        label_eng: "Kuniyuki",
        label_ka: "来国行",
        id: 1350
      })
      
    
      this.add({
        label_eng: "Tsumahei",
        label_ka: "奴妻平",
        id: 1351
      })
      
    
      this.add({
        label_eng: "Chief priest of the Kiyomizu Temple",
        label_ka: "清水寺住職",
        id: 1352
      })
      
    
      this.add({
        label_eng: "Priest of the Kiyomizu Temple",
        label_ka: "清水寺寺僧",
        id: 1353
      })
      
    
      this.add({
        label_eng: "Kunitoshi",
        label_ka: "来国俊",
        id: 1354
      })
      
    
      this.add({
        label_eng: "Dankuro",
        label_ka: "団九郎",
        id: 1355
      })
      
    
      this.add({
        label_eng: "Daizen Akizuki",
        label_ka: "秋月大膳",
        id: 1356
      })
      
    
      this.add({
        label_eng: "Toma",
        label_ka: "渋川藤馬",
        id: 1357
      })
      
    
      this.add({
        label_eng: "Iganokami's wife",
        label_ka: "幸崎の奥方",
        id: 1358
      })
      
    
      this.add({
        label_eng: "Iganokami",
        label_ka: "幸崎伊賀守",
        id: 1359
      })
      
    
      this.add({
        label_eng: "Mimbu Katsuragi",
        label_ka: "葛城民部",
        id: 1360
      })
      
    
      this.add({
        label_eng: "Hyoe",
        label_ka: "園部兵衛",
        id: 1361
      })
      
    
      this.add({
        label_eng: "Priest",
        label_ka: "轟坊の寺僧",
        id: 1362
      })
      
    
      this.add({
        label_eng: "Oume",
        label_ka: "お梅の方",
        id: 1363
      })
      
    
      this.add({
        label_eng: "Heizo",
        label_ka: "刎川兵蔵",
        id: 1364
      })
      
    
      this.add({
        label_eng: "Oren",
        label_ka: "娘おれん",
        id: 1365
      })
      
    
      this.add({
        label_eng: "Masamune",
        label_ka: "五郎兵衛正宗",
        id: 1366
      })
      
    
      this.add({
        label_eng: "Unai",
        label_ka: "渋川右内",
        id: 1367
      })
      
    
      this.add({
        label_eng: "Ofusa",
        label_ka: "重井筒のお房",
        id: 1368
      })
      
    
      this.add({
        label_eng: "Sayo",
        label_ka: "重井筒の小夜",
        id: 1369
      })
      
    
      this.add({
        label_eng: "Koroku",
        label_ka: "重井筒の小六",
        id: 1370
      })
      
    
      this.add({
        label_eng: "Cook",
        label_ka: "料理人",
        id: 1371
      })
      
    
      this.add({
        label_eng: "Courier",
        label_ka: "飛脚屋",
        id: 1372
      })
      
    
      this.add({
        label_eng: "Wife of the Kasaneizutsu proprietor",
        label_ka: "重井筒の内儀",
        id: 1373
      })
      
    
      this.add({
        label_eng: "Apprentice",
        label_ka: "丁稚",
        id: 1374
      })
      
    
      this.add({
        label_eng: "Tokubei",
        label_ka: "紺屋徳兵衛",
        id: 1375
      })
      
    
      this.add({
        label_eng: "Proprietor of the Kasaneizutsu tea house (Tokubei's brother)",
        label_ka: "重井筒の亭主(徳兵衛の兄 )",
        id: 1376
      })
      
    
      this.add({
        label_eng: "Jihei",
        label_ka: "紙屋治兵衛",
        id: 1377
      })
      
    
      this.add({
        label_eng: "Magoemon",
        label_ka: "粉屋孫右衛門",
        id: 1378
      })
      
    
      this.add({
        label_eng: "Koharu",
        label_ka: "紀の国屋小春",
        id: 1379
      })
      
    
      this.add({
        label_eng: "Otama",
        label_ka: "下女お玉",
        id: 1380
      })
      
    
      this.add({
        label_eng: "Tahei",
        label_ka: "江戸屋太兵衛",
        id: 1381
      })
      
    
      this.add({
        label_eng: "Zenroku",
        label_ka: "五貫屋善六",
        id: 1382
      })
      
    
      this.add({
        label_eng: "Kawasho proprietor",
        label_ka: "河庄亭主",
        id: 1383
      })
      
    
      this.add({
        label_eng: "Night watchman",
        label_ka: "夜回り ",
        id: 1384
      })
      
    
      this.add({
        label_eng: "Maid servant",
        label_ka: "紀の国屋下女子(下女)",
        id: 1385
      })
      
    
      this.add({
        label_eng: "Osan",
        label_ka: "女房おさん",
        id: 1386
      })
      
    
      this.add({
        label_eng: "Gozaemon",
        label_ka: "舅五左衛門",
        id: 1387
      })
      
    
      this.add({
        label_eng: "Sangoro",
        label_ka: "丁稚三五郎",
        id: 1388
      })
      
    
      this.add({
        label_eng: "Kantaro",
        label_ka: "伜勘太郎",
        id: 1389
      })
      
    
      this.add({
        label_eng: "Osue",
        label_ka: "娘お末",
        id: 1390
      })
      
    
      this.add({
        label_eng: "Okaru",
        label_ka: "姉おかる",
        id: 1391
      })
      
    
      this.add({
        label_eng: "Onabe, a maid",
        label_ka: "下女お鍋",
        id: 1392
      })
      
    
      this.add({
        label_eng: "Otake, a maid",
        label_ka: "下女お竹",
        id: 1393
      })
      
    
      this.add({
        label_eng: "Okiku, a maid",
        label_ka: "下女お菊",
        id: 1394
      })
      
    
      this.add({
        label_eng: "Ochiyo",
        label_ka: "女房お千代",
        id: 1395
      })
      
    
      this.add({
        label_eng: "Kinzo",
        label_ka: "百姓金蔵",
        id: 1396
      })
      
    
      this.add({
        label_eng: "Heiemon",
        label_ka: "島田平右衛門",
        id: 1397
      })
      
    
      this.add({
        label_eng: "Hambei",
        label_ka: "八百屋半兵衛",
        id: 1398
      })
      
    
      this.add({
        label_eng: "Iemon's wife",
        label_ka: "伊右衛門女房 (半兵衛母, 八百屋の母)",
        id: 1399
      })
      
    
      this.add({
        label_eng: "Tahei",
        label_ka: "甥太兵衛",
        id: 1400
      })
      
    
      this.add({
        label_eng: "Priest Sainen",
        label_ka: "西念坊",
        id: 1401
      })
      
    
      this.add({
        label_eng: "Iemon",
        label_ka: "八百屋伊右衛門",
        id: 1402
      })
      
    
      this.add({
        label_eng: "San, a maid",
        label_ka: "下女さん",
        id: 1403
      })
      
    
      this.add({
        label_eng: "Matsu, an apprentice",
        label_ka: "丁稚松",
        id: 1404
      })
      
    
      this.add({
        label_eng: "Buddhist devotee",
        label_ka: "庚申参り",
        id: 1405
      })
      
    
      this.add({
        label_eng: "Hisamatsu",
        label_ka: "丁稚久松",
        id: 1406
      })
      
    
      this.add({
        label_eng: "Tsukuba-Gozen",
        label_ka: "筑波御前",
        id: 1407
      })
      
    
      this.add({
        label_eng: "Terutora Nagao",
        label_ka: "長尾輝虎",
        id: 1408
      })
      
    
      this.add({
        label_eng: "Sono-no-kata",
        label_ka: "園生の方",
        id: 1409
      })
      
    
      this.add({
        label_eng: "Gemba Yamaoka",
        label_ka: "山岡玄蕃之允",
        id: 1410
      })
      
    
      this.add({
        label_eng: "Ryoan Komazawa",
        label_ka: "駒沢了庵",
        id: 1411
      })
      
    
      this.add({
        label_eng: "Tamahashi",
        label_ka: "玉橋の局",
        id: 1412
      })
      
    
      this.add({
        label_eng: "Umpachi Akaboshi",
        label_ka: "赤星運八",
        id: 1413
      })
      
    
      this.add({
        label_eng: "Yashamaru",
        label_ka: "夜叉丸",
        id: 1414
      })
      
    
      this.add({
        label_eng: "Nisaburo, in fact Haruji Komazawa",
        label_ka: "浮洲の仁三郎実は駒沢春次",
        id: 1415
      })
      
    
      this.add({
        label_eng: "Asojiro Miyagi, later known as Jirozaemon Komazawa",
        label_ka: "宮城阿曾次郎後に駒澤次郎左衛門",
        id: 1416
      })
      
    
      this.add({
        label_eng: "Priest Gesshin",
        label_ka: "僧月心",
        id: 1417
      })
      
    
      this.add({
        label_eng: "Miyuki",
        label_ka: "秋月娘深雪",
        id: 1418
      })
      
    
      this.add({
        label_eng: "Asaka",
        label_ka: "乳母浅香",
        id: 1419
      })
      
    
      this.add({
        label_eng: "Hanzo Abusaka",
        label_ka: "浪人虻坂半蔵",
        id: 1420
      })
      
    
      this.add({
        label_eng: "Heinai Iwabuchi",
        label_ka: "浪人岩淵平内",
        id: 1421
      })
      
    
      this.add({
        label_eng: "Shikanai",
        label_ka: "奴鹿内",
        id: 1422
      })
      
    
      this.add({
        label_eng: "Boatman at Ujigawa",
        label_ka: "宇治川の船頭",
        id: 1423
      })
      
    
      this.add({
        label_eng: "Keian Tachibana",
        label_ka: "立花桂庵",
        id: 1424
      })
      
    
      this.add({
        label_eng: "Oyoshi",
        label_ka: "茶店のお由",
        id: 1425
      })
      
    
      this.add({
        label_eng: "Yusen",
        label_ka: "萩の祐仙",
        id: 1426
      })
      
    
      this.add({
        label_eng: "Sekisuke",
        label_ka: "奴関助",
        id: 1427
      })
      
    
      this.add({
        label_eng: "Misao",
        label_ka: "秋月妻操",
        id: 1428
      })
      
    
      this.add({
        label_eng: "Rin",
        label_ka: "下女りん",
        id: 1429
      })
      
    
      this.add({
        label_eng: "Yuminosuke Akizuki",
        label_ka: "秋月弓之助",
        id: 1430
      })
      
    
      this.add({
        label_eng: "Yuzo Uriu",
        label_ka: "瓜生勇蔵",
        id: 1431
      })
      
    
      this.add({
        label_eng: "Boatman at Akashi",
        label_ka: "明石の船頭",
        id: 1432
      })
      
    
      this.add({
        label_eng: "Saeda, a lady-in-waiting",
        label_ka: "腰元早枝",
        id: 1433
      })
      
    
      this.add({
        label_eng: "Kaede, a lady-in-waiting",
        label_ka: "腰元楓",
        id: 1434
      })
      
    
      this.add({
        label_eng: "Old man of Kimura village",
        label_ka: "木村の親仁",
        id: 1435
      })
      
    
      this.add({
        label_eng: "Gonshichi",
        label_ka: "悪者権七",
        id: 1436
      })
      
    
      this.add({
        label_eng: "Kanta",
        label_ka: "悪者勘太",
        id: 1437
      })
      
    
      this.add({
        label_eng: "Aratae",
        label_ka: "老女荒妙",
        id: 1438
      })
      
    
      this.add({
        label_eng: "Chisato, in fact Kikuhime",
        label_ka: "千里実は大友菊姫",
        id: 1439
      })
      
    
      this.add({
        label_eng: "Sarusuberi",
        label_ka: "かんまち猿辷り",
        id: 1440
      })
      
    
      this.add({
        label_eng: "Dohachi",
        label_ka: "山蛭洞八",
        id: 1441
      })
      
    
      this.add({
        label_eng: "Ninzaemon, proprietor of the tea house at Oiso",
        label_ka: "亭主仁左衛門",
        id: 1442
      })
      
    
      this.add({
        label_eng: "Little girl",
        label_ka: "小娘",
        id: 1443
      })
      
    
      this.add({
        label_eng: "Kichibei",
        label_ka: "輪抜吉兵衛",
        id: 1444
      })
      
    
      this.add({
        label_eng: "Ritaro",
        label_ka: "利太郎",
        id: 1445
      })
      
    
      this.add({
        label_eng: "Ononohime",
        label_ka: "小野姫",
        id: 1446
      })
      
    
      this.add({
        label_eng: "Osome",
        label_ka: "娘お染",
        id: 1447
      })
      
    
      this.add({
        label_eng: "Tokubei",
        label_ka: "平野屋(手代)徳兵衛",
        id: 1448
      })
      
    
      this.add({
        label_eng: "Prince Tokiyo",
        label_ka: "斎世親王",
        id: 1449
      })
      
    
      this.add({
        label_eng: "Orin",
        label_ka: "女房おりん",
        id: 1450
      })
      
    
      this.add({
        label_eng: "Ohyaku, a streetwalker",
        label_ka: "惣嫁お百",
        id: 1451
      })
      
    
      this.add({
        label_eng: "Fumei-choja",
        label_ka: "普明長者",
        id: 1452
      })
      
    
      this.add({
        label_eng: "Jihei",
        label_ka: "紙屋治兵衛",
        id: 1453
      })
      
    
      this.add({
        label_eng: "Yajirobe",
        label_ka: "弥次郎兵衛",
        id: 1454
      })
      
    
      this.add({
        label_eng: "Osato",
        label_ka: "女房お里",
        id: 1455
      })
      
    
      this.add({
        label_eng: "Warlord",
        label_ka: "大名",
        id: 1456
      })
      
    
      this.add({
        label_eng: "Urikohime",
        label_ka: "瓜子姫",
        id: 1457
      })
      
    
      this.add({
        label_eng: "Lady Itsuki",
        label_ka: "息女斎姫",
        id: 1458
      })
      
    
      this.add({
        label_eng: "Sahei",
        label_ka: "づだの佐兵衛 ",
        id: 1459
      })
      
    
      this.add({
        label_eng: "Hambei",
        label_ka: "八百屋半兵衛",
        id: 1460
      })
      
    
      this.add({
        label_eng: "Gonza",
        label_ka: "笹野権三",
        id: 1461
      })
      
    
      this.add({
        label_eng: "Tomokata Fujiwara",
        label_ka: "藤原朝方",
        id: 1462
      })
      
    
      this.add({
        label_eng: "Dainoshin Inokuma",
        label_ka: "猪熊大之進",
        id: 1463
      })
      
    
      this.add({
        label_eng: "Benkei",
        label_ka: "武蔵坊弁慶",
        id: 1464
      })
      
    
      this.add({
        label_eng: "Yoshitsune Minamoto",
        label_ka: "源義経(九郎判官源義経)",
        id: 1465
      })
      
    
      this.add({
        label_eng: "Wakaba-no-Naishi",
        label_ka: "若葉の内侍",
        id: 1466
      })
      
    
      this.add({
        label_eng: "Rokudai",
        label_ka: "六代君",
        id: 1467
      })
      
    
      this.add({
        label_eng: "Nun Joshin",
        label_ka: "浄心尼",
        id: 1468
      })
      
    
      this.add({
        label_eng: "Kokingo",
        label_ka: "主馬の小金吾",
        id: 1469
      })
      
    
      this.add({
        label_eng: "Kyo-no-Kimi",
        label_ka: "卿の君",
        id: 1470
      })
      
    
      this.add({
        label_eng: "Shizuka-Gozen",
        label_ka: "静御前",
        id: 1471
      })
      
    
      this.add({
        label_eng: "Rokuro Kamei",
        label_ka: "亀井六郎",
        id: 1472
      })
      
    
      this.add({
        label_eng: "Jiro Suruga",
        label_ka: "駿河次郎",
        id: 1473
      })
      
    
      this.add({
        label_eng: "Taro Kawagoe",
        label_ka: "川越太郎 (鎌倉の使者川越太郎重頼 )",
        id: 1474
      })
      
    
      this.add({
        label_eng: "Tosanobo",
        label_ka: "土佐坊正尊",
        id: 1475
      })
      
    
      this.add({
        label_eng: "Gonta",
        label_ka: "いがみの権太",
        id: 1476
      })
      
    
      this.add({
        label_eng: "Kosen, Gonta's wife",
        label_ka: "権太女房小仙",
        id: 1477
      })
      
    
      this.add({
        label_eng: "Zenta, Gonta's son",
        label_ka: "権太伜善太",
        id: 1478
      })
      
    
      this.add({
        label_eng: "Yazaemon",
        label_ka: "すしや(親)弥左衛門",
        id: 1479
      })
      
    
      this.add({
        label_eng: "Osato, Yazaemon's daughter",
        label_ka: "娘お里",
        id: 1480
      })
      
    
      this.add({
        label_eng: "Yasuke, in fact Koremori",
        label_ka: "弥助実は平維盛",
        id: 1481
      })
      
    
      this.add({
        label_eng: "Yazaemon's wife",
        label_ka: "弥左衛門女房",
        id: 1482
      })
      
    
      this.add({
        label_eng: "Kagetoki Kajiwara",
        label_ka: "梶原景時",
        id: 1483
      })
      
    
      this.add({
        label_eng: "Toda Hayami",
        label_ka: "逸見藤太(土佐坊の郎党逸見の藤太)",
        id: 1484
      })
      
    
      this.add({
        label_eng: "Sato Tadanobu, in fact Fox Tadanobu",
        label_ka: "佐藤忠信実は源九郎狐 (狐忠信)",
        id: 1485
      })
      
    
      this.add({
        label_eng: "Tadanobu Sato",
        label_ka: "佐藤忠信 (佐藤四郎兵衛忠信)",
        id: 1486
      })
      
    
      this.add({
        label_eng: "Beggar",
        label_ka: "節季候",
        id: 1487
      })
      
    
      this.add({
        label_eng: "Shirayuri",
        label_ka: "白百合",
        id: 1488
      })
      
    
      this.add({
        label_eng: "Anju",
        label_ka: "安寿姫",
        id: 1489
      })
      
    
      this.add({
        label_eng: "Banzaemon Inami",
        label_ka: "井浪伴左衛門",
        id: 1490
      })
      
    
      this.add({
        label_eng: "Sukeyemon",
        label_ka: "番頭助右衛門",
        id: 1491
      })
      
    
      this.add({
        label_eng: "Tsuna Watanabe",
        label_ka: "渡辺源吾綱",
        id: 1492
      })
      
    
      this.add({
        label_eng: "Lady-in-waiting",
        label_ka: "官女",
        id: 1493
      })
      
    
      this.add({
        label_eng: "Emiji (Emishi)",
        label_ka: "蘇我蝦夷子",
        id: 1494
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "仕丁",
        id: 1495
      })
      
    
      this.add({
        label_eng: "Kosuke",
        label_ka: "手代(久三の)小助",
        id: 1496
      })
      
    
      this.add({
        label_eng: "Sashiro Yamagaya",
        label_ka: "山家屋佐四郎",
        id: 1497
      })
      
    
      this.add({
        label_eng: "Fortune teller",
        label_ka: "山伏法印",
        id: 1498
      })
      
    
      this.add({
        label_eng: "Osome",
        label_ka: "娘お染",
        id: 1499
      })
      
    
      this.add({
        label_eng: "Oden",
        label_ka: "下女お伝",
        id: 1500
      })
      
    
      this.add({
        label_eng: "Kihachi",
        label_ka: "下男喜八",
        id: 1501
      })
      
    
      this.add({
        label_eng: "Kanroku",
        label_ka: "油絞り(だはの)勘六",
        id: 1502
      })
      
    
      this.add({
        label_eng: "Yachuta",
        label_ka: "鈴木弥忠太",
        id: 1503
      })
      
    
      this.add({
        label_eng: "Kinemon Okamura, in fact Genzo",
        label_ka: "岡村金右衛門(実は 紀州の源蔵)",
        id: 1504
      })
      
    
      this.add({
        label_eng: "Kyusaku",
        label_ka: "親久作",
        id: 1505
      })
      
    
      this.add({
        label_eng: "Omitsu",
        label_ka: "娘おみつ",
        id: 1506
      })
      
    
      this.add({
        label_eng: "Omitsu's mother",
        label_ka: "おみつの母 ",
        id: 1507
      })
      
    
      this.add({
        label_eng: "Oyoshi",
        label_ka: "下女およし",
        id: 1508
      })
      
    
      this.add({
        label_eng: "Okatsu",
        label_ka: "油屋お勝",
        id: 1509
      })
      
    
      this.add({
        label_eng: "Boatman",
        label_ka: "船頭",
        id: 1510
      })
      
    
      this.add({
        label_eng: "Palanquin bearer",
        label_ka: "駕屋",
        id: 1511
      })
      
    
      this.add({
        label_eng: "Ballad book seller",
        label_ka: "祭文売り(ながしの祭文)",
        id: 1512
      })
      
    
      this.add({
        label_eng: "Kyubei",
        label_ka: "油絞り久兵衛",
        id: 1513
      })
      
    
      this.add({
        label_eng: "Chohachi",
        label_ka: "油絞り長八 ",
        id: 1514
      })
      
    
      this.add({
        label_eng: "Osatsu, a maid servant",
        label_ka: "下女おさつ",
        id: 1515
      })
      
    
      this.add({
        label_eng: "Sakino, a courtesan",
        label_ka: "女郎咲野 ",
        id: 1516
      })
      
    
      this.add({
        label_eng: "Proprietor of the Tanakaya tea house",
        label_ka: "田中屋亭主",
        id: 1517
      })
      
    
      this.add({
        label_eng: "Osho",
        label_ka: "乳母お庄",
        id: 1518
      })
      
    
      this.add({
        label_eng: "Naoe Yamashironokami",
        label_ka: "直江山城守(実綱)",
        id: 1519
      })
      
    
      this.add({
        label_eng: "Tokujumaru's wet nurse",
        label_ka: "徳寿丸の乳母 ",
        id: 1520
      })
      
    
      this.add({
        label_eng: "Minato",
        label_ka: "妻湊 ",
        id: 1521
      })
      
    
      this.add({
        label_eng: "Tomochiyo's wet nurse",
        label_ka: "友千代の乳母",
        id: 1522
      })
      
    
      this.add({
        label_eng: "Rokuro",
        label_ka: "南瀬六郎宗澄",
        id: 1523
      })
      
    
      this.add({
        label_eng: "Hyogonosuke",
        label_ka: "由良兵庫助信忠 ",
        id: 1524
      })
      
    
      this.add({
        label_eng: "Hachiro",
        label_ka: "篠塚八郎重虎",
        id: 1525
      })
      
    
      this.add({
        label_eng: "Takezawa",
        label_ka: "竹沢監物秀時",
        id: 1526
      })
      
    
      this.add({
        label_eng: "Onabe, a maid",
        label_ka: "腰元お鍋",
        id: 1527
      })
      
    
      this.add({
        label_eng: "Omatsu, a maid",
        label_ka: "腰元お松",
        id: 1528
      })
      
    
      this.add({
        label_eng: "Eda",
        label_ka: "江田判官景連",
        id: 1529
      })
      
    
      this.add({
        label_eng: "Chief constable",
        label_ka: "捕手頭",
        id: 1530
      })
      
    
      this.add({
        label_eng: "Chozo",
        label_ka: "馬方寝言の長蔵 ",
        id: 1531
      })
      
    
      this.add({
        label_eng: "Yoshimine",
        label_ka: "新田小太郎義岑",
        id: 1532
      })
      
    
      this.add({
        label_eng: "Utena",
        label_ka: "傾城臺",
        id: 1533
      })
      
    
      this.add({
        label_eng: "Ofune",
        label_ka: "娘お舟",
        id: 1534
      })
      
    
      this.add({
        label_eng: "Rokuzo",
        label_ka: "下男六蔵",
        id: 1535
      })
      
    
      this.add({
        label_eng: "Sorobei",
        label_ka: "しっかり候兵衛 ",
        id: 1536
      })
      
    
      this.add({
        label_eng: "Juji",
        label_ka: "三上十次",
        id: 1537
      })
      
    
      this.add({
        label_eng: "Pinsuke",
        label_ka: "からのぴん助 ",
        id: 1538
      })
      
    
      this.add({
        label_eng: "Tonbei",
        label_ka: "渡し守頓兵衛",
        id: 1539
      })
      
    
      this.add({
        label_eng: "Hachisuke",
        label_ka: "日傭の八助",
        id: 1540
      })
      
    
      this.add({
        label_eng: "Amakasu",
        label_ka: "甘糟",
        id: 1541
      })
      
    
      this.add({
        label_eng: "Kakizaki",
        label_ka: "柿崎",
        id: 1542
      })
      
    
      this.add({
        label_eng: "Usami",
        label_ka: "宇佐美",
        id: 1543
      })
      
    
      this.add({
        label_eng: "Karaginu",
        label_ka: "女房唐衣",
        id: 1544
      })
      
    
      this.add({
        label_eng: "Koshiji",
        label_ka: "母越路",
        id: 1545
      })
      
    
      this.add({
        label_eng: "Okatsu",
        label_ka: "女房お勝",
        id: 1546
      })
      
    
      this.add({
        label_eng: "Takada, a lady in waiting",
        label_ka: "高田の局",
        id: 1547
      })
      
    
      this.add({
        label_eng: "Odai, a maid",
        label_ka: "腰元お大",
        id: 1548
      })
      
    
      this.add({
        label_eng: "Messenger",
        label_ka: "番所早使",
        id: 1549
      })
      
    
      this.add({
        label_eng: "Kansuke",
        label_ka: "山本勘介",
        id: 1550
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "お茶小姓",
        id: 1551
      })
      
    
      this.add({
        label_eng: "Tompachi",
        label_ka: "幇間とん八",
        id: 1552
      })
      
    
      this.add({
        label_eng: "Utakichi",
        label_ka: "芸妓歌吉",
        id: 1553
      })
      
    
      this.add({
        label_eng: "Shunkin",
        label_ka: "春琴",
        id: 1554
      })
      
    
      this.add({
        label_eng: "Sasuke",
        label_ka: "佐助",
        id: 1555
      })
      
    
      this.add({
        label_eng: "Omatsu, a maid",
        label_ka: "下女お松",
        id: 1556
      })
      
    
      this.add({
        label_eng: "Otake, a maid",
        label_ka: "下女お竹",
        id: 1557
      })
      
    
      this.add({
        label_eng: "Yasuzaemon",
        label_ka: "安左衛門 ",
        id: 1558
      })
      
    
      this.add({
        label_eng: "Osayo",
        label_ka: "お小夜",
        id: 1559
      })
      
    
      this.add({
        label_eng: "Governess",
        label_ka: "乳母",
        id: 1560
      })
      
    
      this.add({
        label_eng: "Kagesue",
        label_ka: "梶原源太",
        id: 1561
      })
      
    
      this.add({
        label_eng: "Kagetoki",
        label_ka: "梶原景時",
        id: 1562
      })
      
    
      this.add({
        label_eng: "Kagekiyo",
        label_ka: "悪七兵衛景清",
        id: 1563
      })
      
    
      this.add({
        label_eng: "Shigetada",
        label_ka: "畠山重忠",
        id: 1564
      })
      
    
      this.add({
        label_eng: "Chief priest of the Atsuta shrine",
        label_ka: "熱田大宮司",
        id: 1565
      })
      
    
      this.add({
        label_eng: "Akoya",
        label_ka: "阿古屋",
        id: 1566
      })
      
    
      this.add({
        label_eng: "Iyaishi",
        label_ka: "弥石",
        id: 1567
      })
      
    
      this.add({
        label_eng: "Iyawaka",
        label_ka: "弥若",
        id: 1568
      })
      
    
      this.add({
        label_eng: "Juzo",
        label_ka: "伊庭十蔵",
        id: 1569
      })
      
    
      this.add({
        label_eng: "Hisamatsu",
        label_ka: "丁稚久松",
        id: 1570
      })
      
    
      this.add({
        label_eng: "Zenroku",
        label_ka: "番頭善六",
        id: 1571
      })
      
    
      this.add({
        label_eng: "Rin",
        label_ka: "下女りん",
        id: 1572
      })
      
    
      this.add({
        label_eng: "Tasaburo",
        label_ka: "伜多三郎",
        id: 1573
      })
      
    
      this.add({
        label_eng: "Oito",
        label_ka: "芸妓おいと",
        id: 1574
      })
      
    
      this.add({
        label_eng: "Seibei",
        label_ka: "山家屋清兵衛",
        id: 1575
      })
      
    
      this.add({
        label_eng: "Okatsu",
        label_ka: "母おかつ",
        id: 1576
      })
      
    
      this.add({
        label_eng: "Genemon",
        label_ka: "大阪屋源右衛門",
        id: 1577
      })
      
    
      this.add({
        label_eng: "Rihei",
        label_ka: "小道具屋利兵衛 ",
        id: 1578
      })
      
    
      this.add({
        label_eng: "Ballad book peddler",
        label_ka: "祭文売り(門つけ)",
        id: 1579
      })
      
    
      this.add({
        label_eng: "Pawnshop customer",
        label_ka: "質受男",
        id: 1580
      })
      
    
      this.add({
        label_eng: "Female pawner",
        label_ka: "質入女房 (質置嬶)",
        id: 1581
      })
      
    
      this.add({
        label_eng: "Kyusaku",
        label_ka: "百姓久作 ",
        id: 1582
      })
      
    
      this.add({
        label_eng: "Tarobei",
        label_ka: "親(油屋)太郎兵衛",
        id: 1583
      })
      
    
      this.add({
        label_eng: "Chozo, an apprentice",
        label_ka: "丁稚長蔵 ",
        id: 1584
      })
      
    
      this.add({
        label_eng: "Ohatsu",
        label_ka: "天満屋お初",
        id: 1585
      })
      
    
      this.add({
        label_eng: "Kuheiji",
        label_ka: "油屋九平次",
        id: 1586
      })
      
    
      this.add({
        label_eng: "Rustic customer",
        label_ka: "田舎客",
        id: 1587
      })
      
    
      this.add({
        label_eng: "Temmaya proprietor",
        label_ka: "天満屋亭主 ",
        id: 1588
      })
      
    
      this.add({
        label_eng: "Courtesan",
        label_ka: "遊女",
        id: 1589
      })
      
    
      this.add({
        label_eng: "Otama, a maid servant",
        label_ka: "下女お玉",
        id: 1590
      })
      
    
      this.add({
        label_eng: "Shihei, Minister of the Left",
        label_ka: "左大臣時平 ",
        id: 1591
      })
      
    
      this.add({
        label_eng: "Michizane",
        label_ka: "菅丞相",
        id: 1592
      })
      
    
      this.add({
        label_eng: "Gemba",
        label_ka: "春藤玄蕃",
        id: 1593
      })
      
    
      this.add({
        label_eng: "Tenrankei",
        label_ka: "唐使天蘭敬",
        id: 1594
      })
      
    
      this.add({
        label_eng: "Matsuomaru",
        label_ka: "松王丸(舎人) ",
        id: 1595
      })
      
    
      this.add({
        label_eng: "Umeomaru",
        label_ka: "梅王丸(舎人)",
        id: 1596
      })
      
    
      this.add({
        label_eng: "Sakuramaru",
        label_ka: "桜丸(舎人)",
        id: 1597
      })
      
    
      this.add({
        label_eng: "Kariya",
        label_ka: "苅屋姫 ",
        id: 1598
      })
      
    
      this.add({
        label_eng: "Yae, Sakuramaru's wife",
        label_ka: "女房八重",
        id: 1599
      })
      
    
      this.add({
        label_eng: "Kiyotsura",
        label_ka: "三善清貫",
        id: 1600
      })
      
    
      this.add({
        label_eng: "Lady in waiting",
        label_ka: "局 ",
        id: 1601
      })
      
    
      this.add({
        label_eng: "Katsuno, a maid",
        label_ka: "腰元勝野",
        id: 1602
      })
      
    
      this.add({
        label_eng: "Mareyo",
        label_ka: "左中弁希世",
        id: 1603
      })
      
    
      this.add({
        label_eng: "Michizane's wife",
        label_ka: "御台所",
        id: 1604
      })
      
    
      this.add({
        label_eng: "Kanshusai",
        label_ka: "菅秀才",
        id: 1605
      })
      
    
      this.add({
        label_eng: "Genzo",
        label_ka: "武部源蔵 ",
        id: 1606
      })
      
    
      this.add({
        label_eng: "Tonami",
        label_ka: "女房戸浪",
        id: 1607
      })
      
    
      this.add({
        label_eng: "Chikara",
        label_ka: "荒島主税 ",
        id: 1608
      })
      
    
      this.add({
        label_eng: "Boy",
        label_ka: "里の童",
        id: 1609
      })
      
    
      this.add({
        label_eng: "Girl",
        label_ka: "里の娘",
        id: 1610
      })
      
    
      this.add({
        label_eng: "Housewife",
        label_ka: "里の女房 ",
        id: 1611
      })
      
    
      this.add({
        label_eng: "Tatsuta-no-mae",
        label_ka: "立田前",
        id: 1612
      })
      
    
      this.add({
        label_eng: "Terukuni",
        label_ka: "判官代輝国",
        id: 1613
      })
      
    
      this.add({
        label_eng: "Kakuju",
        label_ka: "伯母覚寿",
        id: 1614
      })
      
    
      this.add({
        label_eng: "Taro Sukune",
        label_ka: "宿禰太郎",
        id: 1615
      })
      
    
      this.add({
        label_eng: "Hyoe",
        label_ka: "土師兵衛",
        id: 1616
      })
      
    
      this.add({
        label_eng: "False messenger",
        label_ka: "贋迎い",
        id: 1617
      })
      
    
      this.add({
        label_eng: "Takunai",
        label_ka: "奴宅内",
        id: 1618
      })
      
    
      this.add({
        label_eng: "Sugiomaru",
        label_ka: "杉王丸(舎人)",
        id: 1619
      })
      
    
      this.add({
        label_eng: "Shiratayu",
        label_ka: "親白太夫",
        id: 1620
      })
      
    
      this.add({
        label_eng: "Jussaku, a farmer",
        label_ka: "百姓十作",
        id: 1621
      })
      
    
      this.add({
        label_eng: "Chiyo, Matsuomaru's wife",
        label_ka: "女房千代",
        id: 1622
      })
      
    
      this.add({
        label_eng: "Haru, Umeomaru's wife",
        label_ka: "女房春",
        id: 1623
      })
      
    
      this.add({
        label_eng: "Priest of Anrakuji Temple",
        label_ka: "安楽寺の僧(住職)",
        id: 1624
      })
      
    
      this.add({
        label_eng: "Heima",
        label_ka: "鷲塚平馬",
        id: 1625
      })
      
    
      this.add({
        label_eng: "Gengo",
        label_ka: "星坂源吾",
        id: 1626
      })
      
    
      this.add({
        label_eng: "Yodarekuri, a naughty boy",
        label_ka: "よだれくり",
        id: 1627
      })
      
    
      this.add({
        label_eng: "Kotaro",
        label_ka: "一子小太郎",
        id: 1628
      })
      
    
      this.add({
        label_eng: "Sansuke, a servant",
        label_ka: "下男三助",
        id: 1629
      })
      
    
      this.add({
        label_eng: "Priest Hossho",
        label_ka: "法性坊阿闍梨 ",
        id: 1630
      })
      
    
      this.add({
        label_eng: "Oriku",
        label_ka: "扇折おりく",
        id: 1631
      })
      
    
      this.add({
        label_eng: "Omutsu",
        label_ka: "扇折おむつ",
        id: 1632
      })
      
    
      this.add({
        label_eng: "Wakasa",
        label_ka: "扇屋若狭",
        id: 1633
      })
      
    
      this.add({
        label_eng: "Kohagi, in fact Atsumori",
        label_ka: "小萩実は無官太夫敦盛",
        id: 1634
      })
      
    
      this.add({
        label_eng: "Katsurako",
        label_ka: "娘桂子 ",
        id: 1635
      })
      
    
      this.add({
        label_eng: "Kumagai",
        label_ka: "熊谷次郎直実",
        id: 1636
      })
      
    
      this.add({
        label_eng: "Anewa",
        label_ka: "阿根輪平治",
        id: 1637
      })
      
    
      this.add({
        label_eng: "Aoyama",
        label_ka: "青山軍次 ",
        id: 1638
      })
      
    
      this.add({
        label_eng: "Assistant carpenter",
        label_ka: "手伝い",
        id: 1639
      })
      
    
      this.add({
        label_eng: "Tokuwaka, a street entertaier",
        label_ka: "万歳徳若",
        id: 1640
      })
      
    
      this.add({
        label_eng: "Fake customer",
        label_ka: "からぞめき",
        id: 1641
      })
      
    
      this.add({
        label_eng: "Orie, Yazama's wife",
        label_ka: "おりゑ",
        id: 1642
      })
      
    
      this.add({
        label_eng: "Orie's customer",
        label_ka: "おりゑの客",
        id: 1643
      })
      
    
      this.add({
        label_eng: "Jutaro Yazama",
        label_ka: "矢間重太郎",
        id: 1644
      })
      
    
      this.add({
        label_eng: "Ukihashi, in fact Omutsu",
        label_ka: "浮橋実は重太郎妹おむつ",
        id: 1645
      })
      
    
      this.add({
        label_eng: "Laundry woman",
        label_ka: "洗濯婆",
        id: 1646
      })
      
    
      this.add({
        label_eng: "Tanbei, a monkey trainer",
        label_ka: "猿廻の丹兵衛",
        id: 1647
      })
      
    
      this.add({
        label_eng: "Housewife",
        label_ka: "茜屋の内儀(女房)",
        id: 1648
      })
      
    
      this.add({
        label_eng: "Kinai's wife",
        label_ka: "喜内女房 ",
        id: 1649
      })
      
    
      this.add({
        label_eng: "Taichiro, Kinai's grandson",
        label_ka: "太市郎",
        id: 1650
      })
      
    
      this.add({
        label_eng: "Kinai Yazama",
        label_ka: "矢間喜内",
        id: 1651
      })
      
    
      this.add({
        label_eng: "Sekinai, a servant",
        label_ka: "奴関内",
        id: 1652
      })
      
    
      this.add({
        label_eng: "Bachushi",
        label_ka: "農夫馬忠子",
        id: 1653
      })
      
    
      this.add({
        label_eng: "Lady Kayo, in fact a fox",
        label_ka: "花陽夫人実は妖狐 ",
        id: 1654
      })
      
    
      this.add({
        label_eng: "Dakki, in fact a fox",
        label_ka: "妲妃,玉藻前実は妖狐",
        id: 1655
      })
      
    
      this.add({
        label_eng: "Queen Saiki",
        label_ka: "采姫夫人",
        id: 1656
      })
      
    
      this.add({
        label_eng: "King Hanzoku",
        label_ka: "班足王 ",
        id: 1657
      })
      
    
      this.add({
        label_eng: "Guard",
        label_ka: "警固の役人",
        id: 1658
      })
      
    
      this.add({
        label_eng: "Kinshiren",
        label_ka: "錦糸蓮 ",
        id: 1659
      })
      
    
      this.add({
        label_eng: "Kinsha",
        label_ka: "錦舎",
        id: 1660
      })
      
    
      this.add({
        label_eng: "Bun-o",
        label_ka: "西伯文王",
        id: 1661
      })
      
    
      this.add({
        label_eng: "Hichukan",
        label_ka: "飛仲官",
        id: 1662
      })
      
    
      this.add({
        label_eng: "Emperor Chu",
        label_ka: "殷の紂王 ",
        id: 1663
      })
      
    
      this.add({
        label_eng: "Raishin",
        label_ka: "雷震 ",
        id: 1664
      })
      
    
      this.add({
        label_eng: "Taikobo",
        label_ka: "太公望",
        id: 1665
      })
      
    
      this.add({
        label_eng: "Prince Usugumo",
        label_ka: "薄雲皇子",
        id: 1666
      })
      
    
      this.add({
        label_eng: "Inubuchi",
        label_ka: "犬淵源蔵",
        id: 1667
      })
      
    
      this.add({
        label_eng: "Katsura",
        label_ka: "桂姫",
        id: 1668
      })
      
    
      this.add({
        label_eng: "Unemenosuke",
        label_ka: "安倍采女之助",
        id: 1669
      })
      
    
      this.add({
        label_eng: "Kintoji",
        label_ka: "鷲塚金藤次",
        id: 1670
      })
      
    
      this.add({
        label_eng: "Haginokata",
        label_ka: "萩の方",
        id: 1671
      })
      
    
      this.add({
        label_eng: "Shigeyuki",
        label_ka: "中納言重之卿",
        id: 1672
      })
      
    
      this.add({
        label_eng: "Hatsuhana, later Lady Tamamo",
        label_ka: "初花姫後に玉藻前",
        id: 1673
      })
      
    
      this.add({
        label_eng: "Jintahei, a servant",
        label_ka: "仕丁甚太平",
        id: 1674
      })
      
    
      this.add({
        label_eng: "Heisaku, a servant",
        label_ka: "仕丁平作",
        id: 1675
      })
      
    
      this.add({
        label_eng: "Ayame",
        label_ka: "菖蒲前 ",
        id: 1676
      })
      
    
      this.add({
        label_eng: "Empress Bifuku",
        label_ka: "美福門院 ",
        id: 1677
      })
      
    
      this.add({
        label_eng: "Katsuragi",
        label_ka: "葛城前",
        id: 1678
      })
      
    
      this.add({
        label_eng: "Chitose",
        label_ka: "千歳前",
        id: 1679
      })
      
    
      this.add({
        label_eng: "Jussaku",
        label_ka: "猟師十作 ",
        id: 1680
      })
      
    
      this.add({
        label_eng: "Taruhiko",
        label_ka: "酒辺の樽彦 ",
        id: 1681
      })
      
    
      this.add({
        label_eng: "Onoroku, in fact Miuranosuke",
        label_ka: "黒髪山の斧六実は三浦之助",
        id: 1682
      })
      
    
      this.add({
        label_eng: "Buddhist priest",
        label_ka: "逮夜坊主",
        id: 1683
      })
      
    
      this.add({
        label_eng: "Kamazo, in fact Kazusanosuke",
        label_ka: "鍋かけの釜蔵実は上総之助 ",
        id: 1684
      })
      
    
      this.add({
        label_eng: "Oyana",
        label_ka: "娘おやな",
        id: 1685
      })
      
    
      this.add({
        label_eng: "Kamegiku (Oyana, infact Kamegiku)",
        label_ka: "おやな実は傾城亀菊 ",
        id: 1686
      })
      
    
      this.add({
        label_eng: "Dairoku",
        label_ka: "矢田の大六 ",
        id: 1687
      })
      
    
      this.add({
        label_eng: "Mojino, a girl attendant",
        label_ka: "禿文字野",
        id: 1688
      })
      
    
      this.add({
        label_eng: "Court Lady",
        label_ka: "内侍の局",
        id: 1689
      })
      
    
      this.add({
        label_eng: "Prime Minister Machikane",
        label_ka: "持兼の宰相",
        id: 1690
      })
      
    
      this.add({
        label_eng: "Osue, a maid servant",
        label_ka: "お末",
        id: 1691
      })
      
    
      this.add({
        label_eng: "Court noble",
        label_ka: "右大弁",
        id: 1692
      })
      
    
      this.add({
        label_eng: "Yasunari",
        label_ka: "安倍泰成",
        id: 1693
      })
      
    
      this.add({
        label_eng: "Magoemon",
        label_ka: "粉屋孫右衛門",
        id: 1694
      })
      
    
      this.add({
        label_eng: "Koharu",
        label_ka: "紀の国屋小春",
        id: 1695
      })
      
    
      this.add({
        label_eng: "Kawasho proprietor",
        label_ka: "河庄亭主",
        id: 1696
      })
      
    
      this.add({
        label_eng: "Tahei",
        label_ka: "江戸屋太兵衛",
        id: 1697
      })
      
    
      this.add({
        label_eng: "Zenroku",
        label_ka: "五貫屋善六",
        id: 1698
      })
      
    
      this.add({
        label_eng: "Osan",
        label_ka: "女房おさん",
        id: 1699
      })
      
    
      this.add({
        label_eng: "Sangoro",
        label_ka: "丁稚三五郎",
        id: 1700
      })
      
    
      this.add({
        label_eng: "Gozaemon",
        label_ka: "舅五左衛門",
        id: 1701
      })
      
    
      this.add({
        label_eng: "Kantaro",
        label_ka: "伜勘太郎",
        id: 1702
      })
      
    
      this.add({
        label_eng: "Osue",
        label_ka: "娘お末",
        id: 1703
      })
      
    
      this.add({
        label_eng: "Kitahachi",
        label_ka: "喜多八 ",
        id: 1704
      })
      
    
      this.add({
        label_eng: "Son",
        label_ka: "伜仙松",
        id: 1705
      })
      
    
      this.add({
        label_eng: "Father",
        label_ka: "親父",
        id: 1706
      })
      
    
      this.add({
        label_eng: "Buddhist priest",
        label_ka: "和尚",
        id: 1707
      })
      
    
      this.add({
        label_eng: "Sawaichi",
        label_ka: "座頭沢市",
        id: 1708
      })
      
    
      this.add({
        label_eng: "Tea stall proprietress",
        label_ka: "茶店の嬶",
        id: 1709
      })
      
    
      this.add({
        label_eng: "Goddess of Mercy",
        label_ka: "観世音",
        id: 1710
      })
      
    
      this.add({
        label_eng: "Tarokaja",
        label_ka: "太郎冠者",
        id: 1711
      })
      
    
      this.add({
        label_eng: "Beautiful woman",
        label_ka: "美女",
        id: 1712
      })
      
    
      this.add({
        label_eng: "Ugly woman",
        label_ka: "醜女",
        id: 1713
      })
      
    
      this.add({
        label_eng: "Grandfather",
        label_ka: "ぢっさ",
        id: 1714
      })
      
    
      this.add({
        label_eng: "Grandmother",
        label_ka: "ばっさ",
        id: 1715
      })
      
    
      this.add({
        label_eng: "Gonroku",
        label_ka: "杣の権六",
        id: 1716
      })
      
    
      this.add({
        label_eng: "Monster",
        label_ka: "山父",
        id: 1717
      })
      
    
      this.add({
        label_eng: "Amanjaku",
        label_ka: "あまんじゃく",
        id: 1718
      })
      
    
      this.add({
        label_eng: "Kaede",
        label_ka: "腰元かえで",
        id: 1719
      })
      
    
      this.add({
        label_eng: "Kofuyu",
        label_ka: "腰元小冬",
        id: 1720
      })
      
    
      this.add({
        label_eng: "Heida Egara",
        label_ka: "荏柄平太",
        id: 1721
      })
      
    
      this.add({
        label_eng: "Shiro Fujisawa",
        label_ka: "藤沢四郎",
        id: 1722
      })
      
    
      this.add({
        label_eng: "Yoichi Asari",
        label_ka: "浅利与市",
        id: 1723
      })
      
    
      this.add({
        label_eng: "Hangaku, Yoichi's wife",
        label_ka: "妻板額",
        id: 1724
      })
      
    
      this.add({
        label_eng: "Ichiwaka",
        label_ka: "市若丸 ",
        id: 1725
      })
      
    
      this.add({
        label_eng: "Lady Masako",
        label_ka: "政子尼公",
        id: 1726
      })
      
    
      this.add({
        label_eng: "Tsunade, Heita's wife",
        label_ka: "平太妻綱手",
        id: 1727
      })
      
    
      this.add({
        label_eng: "Kinsato",
        label_ka: "公暁丸",
        id: 1728
      })
      
    
      this.add({
        label_eng: "Okaji",
        label_ka: "女房お梶",
        id: 1729
      })
      
    
      this.add({
        label_eng: "Kyushichi",
        label_ka: "廻しの久七 ",
        id: 1730
      })
      
    
      this.add({
        label_eng: "Jisuke",
        label_ka: "岩井風呂治助",
        id: 1731
      })
      
    
      this.add({
        label_eng: "Otomi",
        label_ka: "芸妓お富 ",
        id: 1732
      })
      
    
      this.add({
        label_eng: "Mohei",
        label_ka: "団七の茂兵衛",
        id: 1733
      })
      
    
      this.add({
        label_eng: "Ochiyo",
        label_ka: "嫁お千代",
        id: 1734
      })
      
    
      this.add({
        label_eng: "Okuma",
        label_ka: "母おくま",
        id: 1735
      })
      
    
      this.add({
        label_eng: "Tarobei",
        label_ka: "太郎兵衛",
        id: 1736
      })
      
    
      this.add({
        label_eng: "Kajuro",
        label_ka: "嘉十郎",
        id: 1737
      })
      
    
      this.add({
        label_eng: "Apprentice",
        label_ka: "丁稚 ",
        id: 1738
      })
      
    
      this.add({
        label_eng: "Juzo",
        label_ka: "十蔵",
        id: 1739
      })
      
    
      this.add({
        label_eng: "Oyuki",
        label_ka: "娘お雪",
        id: 1740
      })
      
    
      this.add({
        label_eng: "Oyuki's governess",
        label_ka: "お雪の乳母",
        id: 1741
      })
      
    
      this.add({
        label_eng: "Bannojo",
        label_ka: "川側伴之丞",
        id: 1742
      })
      
    
      this.add({
        label_eng: "Chutabei",
        label_ka: "岩木忠太兵衛",
        id: 1743
      })
      
    
      this.add({
        label_eng: "Osai",
        label_ka: "おさゐ",
        id: 1744
      })
      
    
      this.add({
        label_eng: "Kakusuke, a servant",
        label_ka: "奴角助",
        id: 1745
      })
      
    
      this.add({
        label_eng: "Torajiro, Osai's son",
        label_ka: "伜虎次郎",
        id: 1746
      })
      
    
      this.add({
        label_eng: "Okiku, Osai's daughter",
        label_ka: "娘お菊",
        id: 1747
      })
      
    
      this.add({
        label_eng: "Man, a maid",
        label_ka: "下女まん",
        id: 1748
      })
      
    
      this.add({
        label_eng: "Osugi, a maid",
        label_ka: "下女お杉",
        id: 1749
      })
      
    
      this.add({
        label_eng: "Namisuke, a servant",
        label_ka: "下人(仲間,奴)浪介",
        id: 1750
      })
      
    
      this.add({
        label_eng: "Ichinoshin",
        label_ka: "浅香市之進",
        id: 1751
      })
      
    
      this.add({
        label_eng: "Osai's mother",
        label_ka: "おさゐ母 ",
        id: 1752
      })
      
    
      this.add({
        label_eng: "Osute",
        label_ka: "娘お捨",
        id: 1753
      })
      
    
      this.add({
        label_eng: "Jimbei",
        label_ka: "岩木甚平 ",
        id: 1754
      })
      
    
      this.add({
        label_eng: "Dancer",
        label_ka: "踊り子",
        id: 1755
      })
      
    
      this.add({
        label_eng: "Izaemon",
        label_ka: "伊左衛門",
        id: 1756
      })
      
    
      this.add({
        label_eng: "Kizaemon",
        label_ka: "喜左衛門",
        id: 1757
      })
      
    
      this.add({
        label_eng: "Yugiri",
        label_ka: "夕霧",
        id: 1758
      })
      
    
      this.add({
        label_eng: "Girl attendant to a courtesan",
        label_ka: "禿",
        id: 1759
      })
      
    
      this.add({
        label_eng: "Oyuki",
        label_ka: "お雪",
        id: 1760
      })
      
    
      this.add({
        label_eng: "Rin, a maid",
        label_ka: "女中りん",
        id: 1761
      })
      
    
      this.add({
        label_eng: "Otoshi, a maid",
        label_ka: "女中お俊",
        id: 1762
      })
      
    
      this.add({
        label_eng: "Retainer",
        label_ka: "若党",
        id: 1763
      })
      
    
      this.add({
        label_eng: "Gennosuke",
        label_ka: "源之介",
        id: 1764
      })
      
    
      this.add({
        label_eng: "Palanquin bearer",
        label_ka: "駕籠舁",
        id: 1765
      })
      
    
      this.add({
        label_eng: "Sakon",
        label_ka: "平岡左近",
        id: 1766
      })
      
    
      this.add({
        label_eng: "Osugi, a tea house maid",
        label_ka: "遣手お杉",
        id: 1767
      })
      
    
      this.add({
        label_eng: "Baian",
        label_ka: "医者梅庵",
        id: 1768
      })
      
    
      this.add({
        label_eng: "Ryoku",
        label_ka: "扇屋了空",
        id: 1769
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "六尺",
        id: 1770
      })
      
    
      this.add({
        label_eng: "Myojun",
        label_ka: "藤屋妙順",
        id: 1771
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "下女",
        id: 1772
      })
      
    
      this.add({
        label_eng: "Attendant",
        label_ka: "供の男",
        id: 1773
      })
      
    
      this.add({
        label_eng: "Genza",
        label_ka: "源左 ",
        id: 1774
      })
      
    
      this.add({
        label_eng: "Genza's mother",
        label_ka: "源左の母 ",
        id: 1775
      })
      
    
      this.add({
        label_eng: "Zushio",
        label_ka: "づし王丸",
        id: 1776
      })
      
    
      this.add({
        label_eng: "Honzo Kakogawa",
        label_ka: "加古川本蔵",
        id: 1777
      })
      
    
      this.add({
        label_eng: "Michitose",
        label_ka: "三千歳姫 ",
        id: 1778
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "小姓",
        id: 1779
      })
      
    
      this.add({
        label_eng: "Wakasanosuke Momonoi",
        label_ka: "桃井若狭之助",
        id: 1780
      })
      
    
      this.add({
        label_eng: "Otama, a maid servant",
        label_ka: "下女お玉",
        id: 1781
      })
      
    
      this.add({
        label_eng: "Osan's mother",
        label_ka: "おさんの母",
        id: 1782
      })
      
    
      this.add({
        label_eng: "Osan",
        label_ka: "女房おさん",
        id: 1783
      })
      
    
      this.add({
        label_eng: "Mohei",
        label_ka: "手代茂兵衛 ",
        id: 1784
      })
      
    
      this.add({
        label_eng: "Shichisuke, a cleark",
        label_ka: "七助 ",
        id: 1785
      })
      
    
      this.add({
        label_eng: "Ishun",
        label_ka: "主人以春",
        id: 1786
      })
      
    
      this.add({
        label_eng: "Otake, a maid",
        label_ka: "女中お竹",
        id: 1787
      })
      
    
      this.add({
        label_eng: "Oume, a maid",
        label_ka: "女中お梅",
        id: 1788
      })
      
    
      this.add({
        label_eng: "Chomatsu, an apprentice",
        label_ka: "丁稚長松 ",
        id: 1789
      })
      
    
      this.add({
        label_eng: "Ugenta",
        label_ka: "右源太",
        id: 1790
      })
      
    
      this.add({
        label_eng: "Sagenta",
        label_ka: "左源太",
        id: 1791
      })
      
    
      this.add({
        label_eng: "Wakana, in fact a demon",
        label_ka: "扇折娘若菜実は悪鬼",
        id: 1792
      })
      
    
      this.add({
        label_eng: "Rokurodayu",
        label_ka: "青貝師六郎太夫",
        id: 1793
      })
      
    
      this.add({
        label_eng: "Bunzo",
        label_ka: "真田文蔵国安",
        id: 1794
      })
      
    
      this.add({
        label_eng: "Widow (Courtesan, in fact widow)",
        label_ka: "旅の遊女実は八丁礫喜平治後家",
        id: 1795
      })
      
    
      this.add({
        label_eng: "Oba",
        label_ka: "大場三郎景親 ",
        id: 1796
      })
      
    
      this.add({
        label_eng: "Matano",
        label_ka: "俣野五郎景久",
        id: 1797
      })
      
    
      this.add({
        label_eng: "Kajiwara",
        label_ka: "梶原平三景時",
        id: 1798
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "小姓",
        id: 1799
      })
      
    
      this.add({
        label_eng: "Criminal",
        label_ka: "罪人",
        id: 1800
      })
      
    
      this.add({
        label_eng: "Blind man",
        label_ka: "めくら/盲人半之丞",
        id: 1801
      })
      
    
      this.add({
        label_eng: "Deaf-mute",
        label_ka: "おし/唖おまき",
        id: 1802
      })
      
    
      this.add({
        label_eng: "Cripple",
        label_ka: "いざり/いざり太郎助",
        id: 1803
      })
      
    
      this.add({
        label_eng: "Osan's mother",
        label_ka: "おさんの母",
        id: 1804
      })
      
    
      this.add({
        label_eng: "Omon",
        label_ka: "おもん",
        id: 1805
      })
      
    
      this.add({
        label_eng: "Old woman at Inn",
        label_ka: "旅籠の婆",
        id: 1806
      })
      
    
      this.add({
        label_eng: "Courier",
        label_ka: "飛脚",
        id: 1807
      })
      
    
      this.add({
        label_eng: "Child",
        label_ka: "子供",
        id: 1808
      })
      
    
      this.add({
        label_eng: "Okimi, a streetwalker",
        label_ka: "惣嫁お君",
        id: 1809
      })
      
    
      this.add({
        label_eng: "Katota",
        label_ka: "嘉藤太",
        id: 1810
      })
      
    
      this.add({
        label_eng: "Medo",
        label_ka: "めどの方",
        id: 1811
      })
      
    
      this.add({
        label_eng: "Yukinushi",
        label_ka: "中納言行主",
        id: 1812
      })
      
    
      this.add({
        label_eng: "Manzai",
        label_ka: "万才",
        id: 1813
      })
      
    
      this.add({
        label_eng: "Gimpei, in fact Tomomori",
        label_ka: "渡海屋銀平実は中納言知盛",
        id: 1814
      })
      
    
      this.add({
        label_eng: "Oyasu, in fact Emperor Antoku",
        label_ka: "娘お安実は安徳天皇",
        id: 1815
      })
      
    
      this.add({
        label_eng: "Oryu, in fact Suke-no-Tsubone",
        label_ka: "女房おりう実は典侍局",
        id: 1816
      })
      
    
      this.add({
        label_eng: "Flower Girl",
        label_ka: "花売娘",
        id: 1817
      })
      
    
      this.add({
        label_eng: "Yoshiharu, the Shogun",
        label_ka: "将軍義晴",
        id: 1818
      })
      
    
      this.add({
        label_eng: "Lady Taoyame, Shogun's wife",
        label_ka: "手弱女御前",
        id: 1819
      })
      
    
      this.add({
        label_eng: "Ujitoki Hojo",
        label_ka: "北条氏時",
        id: 1820
      })
      
    
      this.add({
        label_eng: "Yamashironosuke",
        label_ka: "直江山城之助",
        id: 1821
      })
      
    
      this.add({
        label_eng: "Yatsuhashi",
        label_ka: "腰元八つ橋",
        id: 1822
      })
      
    
      this.add({
        label_eng: "Shizunokata, Shogun's mistress",
        label_ka: "愛妾賤の方",
        id: 1823
      })
      
    
      this.add({
        label_eng: "Shinzaemon Inoue, in fact Dosan Saito",
        label_ka: "井上新左衛門 実は 斉藤道三",
        id: 1824
      })
      
    
      this.add({
        label_eng: "Heinai Yokota",
        label_ka: "横田兵内",
        id: 1825
      })
      
    
      this.add({
        label_eng: "Toma Ochiai",
        label_ka: "落合藤馬",
        id: 1826
      })
      
    
      this.add({
        label_eng: "Karaori, Kosaka (Takasaka)'s wife",
        label_ka: "高坂妻唐織",
        id: 1827
      })
      
    
      this.add({
        label_eng: "Irie, Koshina's wife",
        label_ka: "越名妻入江",
        id: 1828
      })
      
    
      this.add({
        label_eng: "Jihizo, in fact Yamashironosuke",
        label_ka: "慈悲蔵 実は 直江山城之助",
        id: 1829
      })
      
    
      this.add({
        label_eng: "Danjo Tokitsuna Kosaka",
        label_ka: "高坂弾正",
        id: 1830
      })
      
    
      this.add({
        label_eng: "Danjo Tadamasa Koshina",
        label_ka: "越名弾正",
        id: 1831
      })
      
    
      this.add({
        label_eng: "Otane, in fact Yatsuhashi",
        label_ka: "お種 実は 腰元八つ橋",
        id: 1832
      })
      
    
      this.add({
        label_eng: "Kansuke's widow (Kansuke II's mother, Koshiji)",
        label_ka: "勘助の母 (母越路)",
        id: 1833
      })
      
    
      this.add({
        label_eng: "Yokozo, Kansuke Yamamoto II",
        label_ka: "横蔵 後に 山本勘助",
        id: 1834
      })
      
    
      this.add({
        label_eng: "Minematsu",
        label_ka: "伜峰松",
        id: 1835
      })
      
    
      this.add({
        label_eng: "Shogoro, a farmer",
        label_ka: "百姓正五郎",
        id: 1836
      })
      
    
      this.add({
        label_eng: "Tosuke, a farmer",
        label_ka: "百姓戸助",
        id: 1837
      })
      
    
      this.add({
        label_eng: "Gunta Iiyama",
        label_ka: "飯山軍太",
        id: 1838
      })
      
    
      this.add({
        label_eng: "Country girl",
        label_ka: "在所娘",
        id: 1839
      })
      
    
      this.add({
        label_eng: "Yurimaru",
        label_ka: "百合丸",
        id: 1840
      })
      
    
      this.add({
        label_eng: "Hinagiku",
        label_ka: "ひなぎく",
        id: 1841
      })
      
    
      this.add({
        label_eng: "Moutain Princess",
        label_ka: "山の姫君",
        id: 1842
      })
      
    
      this.add({
        label_eng: "Matsudayu",
        label_ka: "松太夫",
        id: 1843
      })
      
    
      this.add({
        label_eng: "Village headman",
        label_ka: "庄屋",
        id: 1844
      })
      
    
      this.add({
        label_eng: "Stonecutter",
        label_ka: "石工",
        id: 1845
      })
      
    
      this.add({
        label_eng: "Gonsuke",
        label_ka: "権助",
        id: 1846
      })
      
    
      this.add({
        label_eng: "Village Girl",
        label_ka: "村娘",
        id: 1847
      })
      
    
      this.add({
        label_eng: "Peddler from Ohara",
        label_ka: "大原女",
        id: 1848
      })
      
    
      this.add({
        label_eng: "Bamboo peddler",
        label_ka: "鞍馬の竹売り",
        id: 1849
      })
      
    
      this.add({
        label_eng: "Male pedestrian",
        label_ka: "通行の男",
        id: 1850
      })
      
    
      this.add({
        label_eng: "Female pedestrian",
        label_ka: "通行の女",
        id: 1851
      })
      
    
      this.add({
        label_eng: "Chief adviser to the Emperor",
        label_ka: "関白",
        id: 1852
      })
      
    
      this.add({
        label_eng: "Hooded woman",
        label_ka: "かつぎをかぶった女",
        id: 1853
      })
      
    
      this.add({
        label_eng: "Saikobo",
        label_ka: "西光坊",
        id: 1854
      })
      
    
      this.add({
        label_eng: "Saemon",
        label_ka: "左衛門の尉",
        id: 1855
      })
      
    
      this.add({
        label_eng: "Saemon's wife",
        label_ka: "尉の妻",
        id: 1856
      })
      
    
      this.add({
        label_eng: "Saemon's daughter",
        label_ka: "尉の娘",
        id: 1857
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "下人",
        id: 1858
      })
      
    
      this.add({
        label_eng: "Servant to chief advisor",
        label_ka: "関白の家来",
        id: 1859
      })
      
    
      this.add({
        label_eng: "Priest in charge of Accounting",
        label_ka: "納所坊主",
        id: 1860
      })
      
    
      this.add({
        label_eng: "Saburobei",
        label_ka: "百姓三郎兵衛",
        id: 1861
      })
      
    
      this.add({
        label_eng: "Iwami, a swordsmith",
        label_ka: "刀屋石見",
        id: 1862
      })
      
    
      this.add({
        label_eng: "Chujiro",
        label_ka: "重手代忠二郎",
        id: 1863
      })
      
    
      this.add({
        label_eng: "Sasuke",
        label_ka: "弟子佐助",
        id: 1864
      })
      
    
      this.add({
        label_eng: "Kihachi",
        label_ka: "弟子喜八",
        id: 1865
      })
      
    
      this.add({
        label_eng: "Ohana",
        label_ka: "井筒屋お花",
        id: 1866
      })
      
    
      this.add({
        label_eng: "Hanshichi's aunt",
        label_ka: "半七の叔母",
        id: 1867
      })
      
    
      this.add({
        label_eng: "Hanshichi",
        label_ka: "手代半七",
        id: 1868
      })
      
    
      this.add({
        label_eng: "Komanji",
        label_ka: "光満寺",
        id: 1869
      })
      
    
      this.add({
        label_eng: "Tarozaemon",
        label_ka: "井筒屋太郎左衛門",
        id: 1870
      })
      
    
      this.add({
        label_eng: "Kyubei",
        label_ka: "父九兵衛",
        id: 1871
      })
      
    
      this.add({
        label_eng: "Densuke",
        label_ka: "料理人伝介",
        id: 1872
      })
      
    
      this.add({
        label_eng: "Jingoro",
        label_ka: "伽羅屋甚五郎",
        id: 1873
      })
      
    
      this.add({
        label_eng: "Seishichi",
        label_ka: "供の男清七",
        id: 1874
      })
      
    
      this.add({
        label_eng: "Courtesan",
        label_ka: "遊女",
        id: 1875
      })
      
    
      this.add({
        label_eng: "Low class samurai",
        label_ka: "青侍",
        id: 1876
      })
      
    
      this.add({
        label_eng: "Kojika, a street girl",
        label_ka: "惣嫁小鹿(辻君お鹿)",
        id: 1877
      })
      
    
      this.add({
        label_eng: "Onoemon's mother",
        label_ka: "斧右衛門の母",
        id: 1878
      })
      
    
      this.add({
        label_eng: "Gihei Kadowaki, a highway robber",
        label_ka: "門脇儀平",
        id: 1879
      })
      
    
      this.add({
        label_eng: "Fisherman",
        label_ka: "海士",
        id: 1880
      })
      
    
      this.add({
        label_eng: "Tea house maids",
        label_ka: "仲居",
        id: 1881
      })
      
    
      this.add({
        label_eng: "Jester",
        label_ka: "太鼓持",
        id: 1882
      })
      
    
      this.add({
        label_eng: "Sachuta",
        label_ka: "梶下左忠太",
        id: 1883
      })
      
    
      this.add({
        label_eng: "Apprentice priest",
        label_ka: "弟子僧",
        id: 1884
      })
      
    
      this.add({
        label_eng: "Landlord",
        label_ka: "家主",
        id: 1885
      })
      
    
      this.add({
        label_eng: "Brothel supervisor",
        label_ka: "花車",
        id: 1886
      })
      
    
      this.add({
        label_eng: "Courtesan",
        label_ka: "傍輩女郎",
        id: 1887
      })
      
    
      this.add({
        label_eng: "Dembei",
        label_ka: "大和屋伝兵衛",
        id: 1888
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "近習",
        id: 1889
      })
      
    
      this.add({
        label_eng: "Palanquin bearer",
        label_ka: "駕屋",
        id: 1890
      })
      
    
      this.add({
        label_eng: "Ronin",
        label_ka: "浪人",
        id: 1891
      })
      
    
      this.add({
        label_eng: "Tokuemon Ebisuya",
        label_ka: "戎屋徳右衛門",
        id: 1892
      })
      
    
      this.add({
        label_eng: "Asagao, in fact Miyuki",
        label_ka: "朝顔実は深雪",
        id: 1893
      })
      
    
      this.add({
        label_eng: "Onabe, a maid",
        label_ka: "下女お鍋",
        id: 1894
      })
      
    
      this.add({
        label_eng: "Omatsu, a maid",
        label_ka: "下女おまつ",
        id: 1895
      })
      
    
      this.add({
        label_eng: "Matsubei, a clerk",
        label_ka: "手代松兵衛",
        id: 1896
      })
      
    
      this.add({
        label_eng: "Takita Iwashiro",
        label_ka: "岩代多喜太",
        id: 1897
      })
      
    
      this.add({
        label_eng: "Anju",
        label_ka: "安寿姫",
        id: 1898
      })
      
    
      this.add({
        label_eng: "Midaidokoro",
        label_ka: "御台所",
        id: 1899
      })
      
    
      this.add({
        label_eng: "Kamitaki",
        label_ka: "乳母上瀧",
        id: 1900
      })
      
    
      this.add({
        label_eng: "Tokoro no Nyobo",
        label_ka: "所の女房",
        id: 1901
      })
      
    
      this.add({
        label_eng: "Yamaoka Dayu",
        label_ka: "山岡太夫",
        id: 1902
      })
      
    
      this.add({
        label_eng: "Jiro",
        label_ka: "江戸の二郎",
        id: 1903
      })
      
    
      this.add({
        label_eng: "Saburo",
        label_ka: "宮崎の三郎",
        id: 1904
      })
      
    
      this.add({
        label_eng: "Sanshodayu",
        label_ka: "さんしょう太夫",
        id: 1905
      })
      
    
      this.add({
        label_eng: "Kohagi",
        label_ka: "伊勢の小萩",
        id: 1906
      })
      
    
      this.add({
        label_eng: "Saburo",
        label_ka: "一子三郎",
        id: 1907
      })
      
    
      this.add({
        label_eng: "Umezu no In",
        label_ka: "梅津の院",
        id: 1908
      })
      
    
      this.add({
        label_eng: "Nijo Dainagon",
        label_ka: "二条大納言",
        id: 1909
      })
      
    
      this.add({
        label_eng: "Feudal lords",
        label_ka: "大名",
        id: 1910
      })
      
    
      this.add({
        label_eng: "Ladies-in-waiting",
        label_ka: "腰元",
        id: 1911
      })
      
    
      this.add({
        label_eng: "Jinnai, a servant",
        label_ka: "奴甚内",
        id: 1912
      })
      
    
      this.add({
        label_eng: "Goro",
        label_ka: "相模五郎",
        id: 1913
      })
      
    
      this.add({
        label_eng: "Tanzo Irie",
        label_ka: "入江丹蔵",
        id: 1914
      })
      
    
      this.add({
        label_eng: "Boatmen",
        label_ka: "船頭",
        id: 1915
      })
      
    
      this.add({
        label_eng: "Kakuhan, in fact Noritsune",
        label_ka: "横川禅師覚範実は能登守(平)教経",
        id: 1916
      })
      
    
      this.add({
        label_eng: "Yoshioki Ouchi",
        label_ka: "大内之助義興",
        id: 1917
      })
      
    
      this.add({
        label_eng: "Segawa, a courtesan",
        label_ka: "傾城瀬川",
        id: 1918
      })
      
    
      this.add({
        label_eng: "Osaka, a courtesan",
        label_ka: "傾城逢坂",
        id: 1919
      })
      
    
      this.add({
        label_eng: "Choyama, a courtesan",
        label_ka: "傾城蝶山",
        id: 1920
      })
      
    
      this.add({
        label_eng: "Shihori, a young attendant to a courtesan",
        label_ka: "禿しほり",
        id: 1921
      })
      
    
      this.add({
        label_eng: "Junzo Asai",
        label_ka: "浅井順蔵",
        id: 1922
      })
      
    
      this.add({
        label_eng: "Kyuzo Mase",
        label_ka: "笆久蔵",
        id: 1923
      })
      
    
      this.add({
        label_eng: "Kompei",
        label_ka: "コン平",
        id: 1924
      })
      
    
      this.add({
        label_eng: "Byakuranni",
        label_ka: "白蘭尼",
        id: 1925
      })
      
    
      this.add({
        label_eng: "Konzo",
        label_ka: "コン蔵",
        id: 1926
      })
      
    
      this.add({
        label_eng: "Ukon",
        label_ka: "右コン",
        id: 1927
      })
      
    
      this.add({
        label_eng: "Sakon",
        label_ka: "左コン",
        id: 1928
      })
      
    
      this.add({
        label_eng: "Sekinai",
        label_ka: "奴関内",
        id: 1929
      })
      
    
      this.add({
        label_eng: "Kanai",
        label_ka: "奴可内",
        id: 1930
      })
      
    
      this.add({
        label_eng: "Tsurutayu",
        label_ka: "万歳鶴太夫",
        id: 1931
      })
      
    
      this.add({
        label_eng: "Kamekichi",
        label_ka: "才造亀吉",
        id: 1932
      })
      
    
      this.add({
        label_eng: "Shiro Wada",
        label_ka: "和田四郎",
        id: 1933
      })
      
    
      this.add({
        label_eng: "Gosubei",
        label_ka: "五州兵衛",
        id: 1934
      })
      
    
      this.add({
        label_eng: "Fukashichi, in fact Goro Kanawa",
        label_ka: "鱶七 実は 金輪五郎",
        id: 1935
      })
      
    
      this.add({
        label_eng: "Taro Genjo",
        label_ka: "玄上太郎",
        id: 1936
      })
      
    
      this.add({
        label_eng: "Proprietress of Sugisakaya sake shop",
        label_ka: "杉酒屋の婆",
        id: 1937
      })
      
    
      this.add({
        label_eng: "Boatman",
        label_ka: "船頭",
        id: 1938
      })
      
    
      this.add({
        label_eng: "Dengababa",
        label_ka: "伝が婆",
        id: 1939
      })
      
    
      this.add({
        label_eng: "Doan",
        label_ka: "針立の道庵",
        id: 1940
      })
      
    
      this.add({
        label_eng: "Magoemon",
        label_ka: "親孫右衛門",
        id: 1941
      })
      
    
      this.add({
        label_eng: "Tojibei",
        label_ka: "弦掛の藤治兵衛",
        id: 1942
      })
      
    
      this.add({
        label_eng: "Chief of a police squad",
        label_ka: "捕手小頭",
        id: 1943
      })
      
    
      this.add({
        label_eng: "Okizukin",
        label_ka: "置頭巾",
        id: 1944
      })
      
    
      this.add({
        label_eng: "Mizuemon",
        label_ka: "樋の口の水右衛門",
        id: 1945
      })
      
    
      this.add({
        label_eng: "Umegawa",
        label_ka: "梅川",
        id: 1946
      })
      
    
      this.add({
        label_eng: "Chubei",
        label_ka: "亀屋忠兵衛",
        id: 1947
      })
      
    
      this.add({
        label_eng: "Chuzaburo's wife (Chuza's wife)",
        label_ka: "忠三女房",
        id: 1948
      })
      
    
      this.add({
        label_eng: "Hachiemon",
        label_ka: "八右衛門",
        id: 1949
      })
      
    
      this.add({
        label_eng: "Tokitada",
        label_ka: "平時忠",
        id: 1950
      })
      
    
      this.add({
        label_eng: "Kikunomae",
        label_ka: "菊の前",
        id: 1951
      })
      
    
      this.add({
        label_eng: "Rokuyata",
        label_ka: "岡部六弥太忠澄",
        id: 1952
      })
      
    
      this.add({
        label_eng: "Uraha, a warrior's wife",
        label_ka: "女房裏葉",
        id: 1953
      })
      
    
      this.add({
        label_eng: "Makinoo, a warrior's wife",
        label_ka: "女房槙の尾",
        id: 1954
      })
      
    
      this.add({
        label_eng: "Someginu, a warrior's wife",
        label_ka: "女房染衣",
        id: 1955
      })
      
    
      this.add({
        label_eng: "Tsunemori",
        label_ka: "平経盛",
        id: 1956
      })
      
    
      this.add({
        label_eng: "Gemba",
        label_ka: "大館玄蕃",
        id: 1957
      })
      
    
      this.add({
        label_eng: "Goro",
        label_ka: "成田五郎",
        id: 1958
      })
      
    
      this.add({
        label_eng: "Hayashi",
        label_ka: "乳母林",
        id: 1959
      })
      
    
      this.add({
        label_eng: "Tadanori",
        label_ka: "薩摩守忠度",
        id: 1960
      })
      
    
      this.add({
        label_eng: "Tagohei",
        label_ka: "太五平",
        id: 1961
      })
      
    
      this.add({
        label_eng: "Mojibei",
        label_ka: "茂次兵衛",
        id: 1962
      })
      
    
      this.add({
        label_eng: "Oiwa",
        label_ka: "女房お岩",
        id: 1963
      })
      
    
      this.add({
        label_eng: "Hatsushimo",
        label_ka: "初霜姫",
        id: 1964
      })
      
    
      this.add({
        label_eng: "Unoha, a maid",
        label_ka: "腰元卯の葉",
        id: 1965
      })
      
    
      this.add({
        label_eng: "Sekiya, a maid",
        label_ka: "腰元関屋",
        id: 1966
      })
      
    
      this.add({
        label_eng: "Suganoi",
        label_ka: "妻菅の井",
        id: 1967
      })
      
    
      this.add({
        label_eng: "Nadeshiko",
        label_ka: "撫子姫",
        id: 1968
      })
      
    
      this.add({
        label_eng: "Umenoto",
        label_ka: "女房梅の戸",
        id: 1969
      })
      
    
      this.add({
        label_eng: "Taro",
        label_ka: "小由留木太郎",
        id: 1970
      })
      
    
      this.add({
        label_eng: "Atsumori",
        label_ka: "無官大夫敦盛",
        id: 1971
      })
      
    
      this.add({
        label_eng: "Tota, in fact Tagohei",
        label_ka: "醒ヶ井藤太 実は 太五平",
        id: 1972
      })
      
    
      this.add({
        label_eng: "Spy",
        label_ka: "忍び",
        id: 1973
      })
      
    
      this.add({
        label_eng: "Tokujumaru",
        label_ka: "徳寿丸",
        id: 1974
      })
      
    
      this.add({
        label_eng: "Tomochiyo",
        label_ka: "友千代",
        id: 1975
      })
      
    
      this.add({
        label_eng: "Osen, a street girl",
        label_ka: "惣嫁(辻君)お仙",
        id: 1976
      })
      
    
      this.add({
        label_eng: "Kikuno, a street girl",
        label_ka: "惣嫁(辻君)菊野",
        id: 1977
      })
      
    
      this.add({
        label_eng: "Itachigawa, a sumo werestler",
        label_ka: "いたち川",
        id: 1978
      })
      
    
      this.add({
        label_eng: "Pack-horse leader",
        label_ka: "馬丁",
        id: 1979
      })
      
    
      this.add({
        label_eng: "Matsubei, a woodcutter",
        label_ka: "杣松兵衛",
        id: 1980
      })
      
    
      this.add({
        label_eng: "Makizo, a woodcutter",
        label_ka: "杣槙蔵",
        id: 1981
      })
      
    
      this.add({
        label_eng: "Kashiroku, a woodcutter",
        label_ka: "杣樫六",
        id: 1982
      })
      
    
      this.add({
        label_eng: "Masseur",
        label_ka: "座頭",
        id: 1983
      })
      
    
      this.add({
        label_eng: "Highway robber",
        label_ka: "山賊",
        id: 1984
      })
      
    
      this.add({
        label_eng: "Soheiji, a retainer of Takumi",
        label_ka: "堀口曾平次",
        id: 1985
      })
      
    
      this.add({
        label_eng: "Onoemon",
        label_ka: "杣斧右衛門",
        id: 1986
      })
      
    
      this.add({
        label_eng: "Gunpachi, a retainer of Takumi",
        label_ka: "大坪軍八",
        id: 1987
      })
      
    
      this.add({
        label_eng: "Gonroku, a carter",
        label_ka: "車遣い権六",
        id: 1988
      })
      
    
      this.add({
        label_eng: "Kampachi, a carter",
        label_ka: "車遣い勘八",
        id: 1989
      })
      
    
      this.add({
        label_eng: "Kusuke, a rogue",
        label_ka: "車遣い九介(助)",
        id: 1990
      })
      
    
      this.add({
        label_eng: "Dosan Saito",
        label_ka: "斎藤道三",
        id: 1991
      })
      
    
      this.add({
        label_eng: "Boatman",
        label_ka: "船頭",
        id: 1992
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "先供",
        id: 1993
      })
      
    
      this.add({
        label_eng: "Sankichi",
        label_ka: "馬方三吉",
        id: 1994
      })
      
    
      this.add({
        label_eng: "Yatoji Tsutsumi",
        label_ka: "代官堤弥藤次",
        id: 1995
      })
      
    
      this.add({
        label_eng: "Wheat harvester (farmer)",
        label_ka: "麦苅男",
        id: 1996
      })
      
    
      this.add({
        label_eng: "Male traveler",
        label_ka: "旅の男",
        id: 1997
      })
      
    
      this.add({
        label_eng: "Female traveler",
        label_ka: "旅の女",
        id: 1998
      })
      
    
      this.add({
        label_eng: "Packhorse driver",
        label_ka: "馬子",
        id: 1999
      })
      
    
      this.add({
        label_eng: "Traveler on horseback",
        label_ka: "馬上の旅人",
        id: 2000
      })
      
    
      this.add({
        label_eng: "Courier",
        label_ka: "飛脚",
        id: 2001
      })
      
    
      this.add({
        label_eng: "Jiromaru",
        label_ka: "高安次郎丸",
        id: 2002
      })
      
    
      this.add({
        label_eng: "Hachiemon's messangers",
        label_ka: "八右衛門の使",
        id: 2003
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "下男",
        id: 2004
      })
      
    
      this.add({
        label_eng: "Farmers",
        label_ka: "百姓",
        id: 2005
      })
      
    
      this.add({
        label_eng: "God of thunder, the",
        label_ka: "雷",
        id: 2006
      })
      
    
      this.add({
        label_eng: "Man in a livery coat",
        label_ka: "いなせな男",
        id: 2007
      })
      
    
      this.add({
        label_eng: "Street girl",
        label_ka: "夜鷹",
        id: 2008
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "奴",
        id: 2009
      })
      
    
      this.add({
        label_eng: "Courtesan",
        label_ka: "女郎",
        id: 2010
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "奴",
        id: 2011
      })
      
    
      this.add({
        label_eng: "Retainer",
        label_ka: "若党",
        id: 2012
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "仲間",
        id: 2013
      })
      
    
      this.add({
        label_eng: "Kanai",
        label_ka: "奴可内",
        id: 2014
      })
      
    
      this.add({
        label_eng: "Children",
        label_ka: "寺子(手習子)",
        id: 2015
      })
      
    
      this.add({
        label_eng: "Buddhist devotee",
        label_ka: "同行衆",
        id: 2016
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "奴",
        id: 2017
      })
      
    
      this.add({
        label_eng: "Denkai",
        label_ka: "伝界坊",
        id: 2018
      })
      
    
      this.add({
        label_eng: "Saibei",
        label_ka: "紀の国屋才兵衛",
        id: 2019
      })
      
    
      this.add({
        label_eng: "Wakana, a maid",
        label_ka: "腰元若菜",
        id: 2020
      })
      
    
      this.add({
        label_eng: "Court ladies",
        label_ka: "女官",
        id: 2021
      })
      
    
      this.add({
        label_eng: "Beaters",
        label_ka: "勢子",
        id: 2022
      })
      
    
      this.add({
        label_eng: "Farmers",
        label_ka: "百姓",
        id: 2023
      })
      
    
      this.add({
        label_eng: "Ladies-in-waiting",
        label_ka: "腰元",
        id: 2024
      })
      
    
      this.add({
        label_eng: "Members of the five-man group",
        label_ka: "五人組",
        id: 2025
      })
      
    
      this.add({
        label_eng: "Oyoshi, a maid",
        label_ka: "下女およし",
        id: 2026
      })
      
    
      this.add({
        label_eng: "Yoshiteru",
        label_ka: "足利義輝",
        id: 2027
      })
      
    
      this.add({
        label_eng: "Masayasu",
        label_ka: "三好存保",
        id: 2028
      })
      
    
      this.add({
        label_eng: "Hanatachibana",
        label_ka: "傾城花橘",
        id: 2029
      })
      
    
      this.add({
        label_eng: "Townspeople",
        label_ka: "町衆",
        id: 2030
      })
      
    
      this.add({
        label_eng: "Sadashichi",
        label_ka: "本庄屋定七",
        id: 2031
      })
      
    
      this.add({
        label_eng: "Magoroku",
        label_ka: "池添孫六",
        id: 2032
      })
      
    
      this.add({
        label_eng: "Tarobei",
        label_ka: "郎党障子破りの太郎兵衛",
        id: 2033
      })
      
    
      this.add({
        label_eng: "Hikosuke",
        label_ka: "郎党俵くじりの彦助",
        id: 2034
      })
      
    
      this.add({
        label_eng: "Haito",
        label_ka: "郎党棚さがしの隼人",
        id: 2035
      })
      
    
      this.add({
        label_eng: "Reizei",
        label_ka: "下婢れいぜい",
        id: 2036
      })
      
    
      this.add({
        label_eng: "Senju",
        label_ka: "下婢せんじゅ",
        id: 2037
      })
      
    
      this.add({
        label_eng: "Page",
        label_ka: "お小姓",
        id: 2038
      })
      
    
      this.add({
        label_eng: "Priest Kyoji",
        label_ka: "教慈上人",
        id: 2039
      })
      
    
      this.add({
        label_eng: "Chinnen",
        label_ka: "小坊主珍念",
        id: 2040
      })
      
    
      this.add({
        label_eng: "Kasane",
        label_ka: "累",
        id: 2041
      })
      
    
      this.add({
        label_eng: "Yoemon, in fact Tanizo Kinugawa",
        label_ka: "与右衛門 実は 絹川谷蔵",
        id: 2042
      })
      
    
      this.add({
        label_eng: "Yonokichi",
        label_ka: "百姓与之吉",
        id: 2043
      })
      
    
      this.add({
        label_eng: "Okoma",
        label_ka: "お駒",
        id: 2044
      })
      
    
      this.add({
        label_eng: "Brothel owner",
        label_ka: "花扇屋亭主",
        id: 2045
      })
      
    
      this.add({
        label_eng: "Kingoro",
        label_ka: "金五郎",
        id: 2046
      })
      
    
      this.add({
        label_eng: "Utakata",
        label_ka: "歌潟姫",
        id: 2047
      })
      
    
      this.add({
        label_eng: "Sabu",
        label_ka: "豆腐屋三婦",
        id: 2048
      })
      
    
      this.add({
        label_eng: "Denkai",
        label_ka: "伝界坊",
        id: 2049
      })
      
    
      this.add({
        label_eng: "Saibei",
        label_ka: "紀の国屋才兵衛",
        id: 2050
      })
      
    
      this.add({
        label_eng: "Omaki",
        label_ka: "女房おまき",
        id: 2051
      })
      
    
      this.add({
        label_eng: "Zenbei, a candle dealer",
        label_ka: "蝋燭屋善兵衛",
        id: 2052
      })
      
    
      this.add({
        label_eng: "Kataoka",
        label_ka: "片岡造酒頭",
        id: 2053
      })
      
    
      this.add({
        label_eng: "Chozo, in fact Miuranosuke",
        label_ka: "塩売長蔵実は三浦之助義村",
        id: 2054
      })
      
    
      this.add({
        label_eng: "Tokihime",
        label_ka: "北条時姫",
        id: 2055
      })
      
    
      this.add({
        label_eng: "Tokihime, in fact Suminoe",
        label_ka: "北条時姫実は住之江",
        id: 2056
      })
      
    
      this.add({
        label_eng: "Kinezo, a dumpling peddler",
        label_ka: "団子売杵造",
        id: 2057
      })
      
    
      this.add({
        label_eng: "Ousu, a dumpling peddler",
        label_ka: "団子売お臼",
        id: 2058
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "仲居",
        id: 2059
      })
      
    
      this.add({
        label_eng: "Monkey",
        label_ka: "猿",
        id: 2060
      })
      
    
      this.add({
        label_eng: "Street performers",
        label_ka: "節季候",
        id: 2061
      })
      
    
      this.add({
        label_eng: "Secondhand goods dealer",
        label_ka: "古手買",
        id: 2062
      })
      
    
      this.add({
        label_eng: "Servant",
        label_ka: "水奴",
        id: 2063
      })
      
    
      this.add({
        label_eng: "Chinkozui, in fact Ryuko",
        label_ka: "陳光蕊 実は 劉洪",
        id: 2064
      })
      
    
      this.add({
        label_eng: "Nikuryokan, in fact Rihyo",
        label_ka: "肉良甘 実は 李彪",
        id: 2065
      })
      
    
      this.add({
        label_eng: "Flower peddler, in fact Hakuren",
        label_ka: "花売女 実は 白蓮",
        id: 2066
      })
      
    
      this.add({
        label_eng: "Inkaizan, in fact Chinkozui",
        label_ka: "殷開山 実は 陳光蕊",
        id: 2067
      })
      
    
      this.add({
        label_eng: "Sanzohoshi, in fact Songoku",
        label_ka: "三蔵法師実は孫悟空",
        id: 2068
      })
      
    
      this.add({
        label_eng: "Sanzohoshi",
        label_ka: "三蔵法師",
        id: 2069
      })
      
    
      this.add({
        label_eng: "Chohakkai",
        label_ka: "猪八戒",
        id: 2070
      })
      
    
      this.add({
        label_eng: "Palanquin bearers",
        label_ka: "駕屋",
        id: 2071
      })
      
    
      this.add({
        label_eng: "Watonai's mother",
        label_ka: "和藤内母",
        id: 2072
      })
      
    
      this.add({
        label_eng: "Kuriemon",
        label_ka: "杣栗右衛門",
        id: 2073
      })
      
    
      this.add({
        label_eng: "Lion",
        label_ka: "獅子",
        id: 2074
      })
      
    
      this.add({
        label_eng: "Yasota, a messanger",
        label_ka: "郎党弥惣太",
        id: 2075
      })
      
    
      this.add({
        label_eng: "Samurai",
        label_ka: "伊予の内侍",
        id: 2076
      })
      
    
      this.add({
        label_eng: "Oyotsu, in fact Kagaribi",
        label_ka: "およつ実は妻篝火",
        id: 2077
      })
      
    
      this.add({
        label_eng: "Jirosaku, in fact Takatsuna",
        label_ka: "二郎作実は佐々木高綱",
        id: 2078
      })
      
    
      this.add({
        label_eng: "Koyoshi",
        label_ka: "下女小よし",
        id: 2079
      })
      
    
      this.add({
        label_eng: "Tanemon Sasaki",
        label_ka: "佐々木丹右衛門",
        id: 2080
      })
      
    
      this.add({
        label_eng: "Jogoro Sawai",
        label_ka: "沢井城五郎",
        id: 2081
      })
      
    
      this.add({
        label_eng: "Narumi",
        label_ka: "母鳴海",
        id: 2082
      })
      
    
      this.add({
        label_eng: "Toshichi, in fact Saizaburo Obana",
        label_ka: "髪結藤七実は尾花才三郎",
        id: 2083
      })
      
    
      this.add({
        label_eng: "Referee",
        label_ka: "行司",
        id: 2084
      })
      
    
      this.add({
        label_eng: "Red Ogre",
        label_ka: "赤鬼",
        id: 2085
      })
      
    
      this.add({
        label_eng: "Green Ogre",
        label_ka: "青鬼",
        id: 2086
      })
      
    
      this.add({
        label_eng: "Sadakuro",
        label_ka: "定九郎",
        id: 2087
      })
      
    
      this.add({
        label_eng: "Emperor Taiso",
        label_ka: "太宗皇帝",
        id: 2088
      })
      
    
      this.add({
        label_eng: "Old Woman",
        label_ka: "婆",
        id: 2089
      })
      
    
      this.add({
        label_eng: "Sagojo",
        label_ka: "沙悟浄",
        id: 2090
      })
      
    
      this.add({
        label_eng: "Ground spider, in fact Ibarakidoji",
        label_ka: "土蜘蛛実は茨木童子",
        id: 2091
      })
      
    
      this.add({
        label_eng: "Kijiro",
        label_ka: "吉岡鬼次郎",
        id: 2092
      })
      
    
      this.add({
        label_eng: "Kisanta",
        label_ka: "吉岡鬼三太",
        id: 2093
      })
      
    
      this.add({
        label_eng: "Umechiyo",
        label_ka: "稚児梅千代丸",
        id: 2094
      })
      
    
      this.add({
        label_eng: "Takemaru",
        label_ka: "稚児竹丸",
        id: 2095
      })
      
    
      this.add({
        label_eng: "Iwachiyo",
        label_ka: "広盛一子岩千代丸",
        id: 2096
      })
      
    
      this.add({
        label_eng: "Dampei",
        label_ka: "市原団平",
        id: 2097
      })
      
    
      this.add({
        label_eng: "Shokei",
        label_ka: "性慶阿闍梨",
        id: 2098
      })
      
    
      this.add({
        label_eng: "Oniwaka, later known as Benkei",
        label_ka: "鬼若丸後に武蔵坊弁慶",
        id: 2099
      })
      
    
      this.add({
        label_eng: "Asuka",
        label_ka: "乳母飛鳥",
        id: 2100
      })
      
    
      this.add({
        label_eng: "Okyo",
        label_ka: "妻お京",
        id: 2101
      })
      
    
      this.add({
        label_eng: "Buzenbo",
        label_ka: "天狗豊前坊",
        id: 2102
      })
      
    
      this.add({
        label_eng: "Sanukibo",
        label_ka: "天狗讃岐坊",
        id: 2103
      })
      
    
      this.add({
        label_eng: "Togakushibo",
        label_ka: "天狗戸隠坊",
        id: 2104
      })
      
    
      this.add({
        label_eng: "Sojobo",
        label_ka: "僧正坊",
        id: 2105
      })
      
    
      this.add({
        label_eng: "Nomorinosuke Kondo",
        label_ka: "近藤野守之助",
        id: 2106
      })
      
    
      this.add({
        label_eng: "A vassal of the Shogun",
        label_ka: "眤近侍",
        id: 2107
      })
      
    
      this.add({
        label_eng: "Omatsu, a maid",
        label_ka: "腰元お松",
        id: 2108
      })
      
    
      this.add({
        label_eng: "Onaka, a maid",
        label_ka: "腰元お中",
        id: 2109
      })
      
    
      this.add({
        label_eng: "Shinobu, a maid",
        label_ka: "腰元信夫",
        id: 2110
      })
      
    
      this.add({
        label_eng: "Kuno Bungonokami",
        label_ka: "九野豊後守",
        id: 2111
      })
      
    
      this.add({
        label_eng: "Yosobei Akayama",
        label_ka: "赤山与三兵衛",
        id: 2112
      })
      
    
      this.add({
        label_eng: "Kosasa, a maid",
        label_ka: "腰元小笹",
        id: 2113
      })
      
    
      this.add({
        label_eng: "Namie, a maid",
        label_ka: "腰元浪江",
        id: 2114
      })
      
    
      this.add({
        label_eng: "Saeda Tokuzen-in",
        label_ka: "左枝徳善院",
        id: 2115
      })
      
    
      this.add({
        label_eng: "Harutaka Oda",
        label_ka: "尾田春孝",
        id: 2116
      })
      
    
      this.add({
        label_eng: "Katsuie Shibata",
        label_ka: "柴田勝家",
        id: 2117
      })
      
    
      this.add({
        label_eng: "Shogen Takigawa",
        label_ka: "滝川将監",
        id: 2118
      })
      
    
      this.add({
        label_eng: "Morimasa Sakuma",
        label_ka: "佐久間盛政",
        id: 2119
      })
      
    
      this.add({
        label_eng: "Masanori Fukushima",
        label_ka: "福島正則",
        id: 2120
      })
      
    
      this.add({
        label_eng: "Harunobu Oda",
        label_ka: "尾田春信",
        id: 2121
      })
      
    
      this.add({
        label_eng: "Farmer",
        label_ka: "下向の衆",
        id: 2122
      })
      
    
      this.add({
        label_eng: "Boatmen",
        label_ka: "船頭",
        id: 2123
      })
      
    
      this.add({
        label_eng: "Saeda",
        label_ka: "腰元小枝",
        id: 2124
      })
      
    
      this.add({
        label_eng: "Calf",
        label_ka: "小牛",
        id: 2125
      })
      
    
      this.add({
        label_eng: "Seki, a vassal of the Shogun",
        label_ka: "眤近侍関",
        id: 2126
      })
      
    
      this.add({
        label_eng: "Umida, a vassal of the Shogun",
        label_ka: "眤近侍海田",
        id: 2127
      })
      
    
      this.add({
        label_eng: "Arakawa, a vassal of the Shogun",
        label_ka: "眤近侍荒川",
        id: 2128
      })
      
    
      this.add({
        label_eng: "Shinzaemon",
        label_ka: "勝田新左衛門",
        id: 2129
      })
      
    
      this.add({
        label_eng: "Isuke",
        label_ka: "前原伊助",
        id: 2130
      })
      
    
      this.add({
        label_eng: "Gihei",
        label_ka: "天河屋義平",
        id: 2131
      })
      
    
      this.add({
        label_eng: "Yoshimatsu",
        label_ka: "伜芳松",
        id: 2132
      })
      
    
      this.add({
        label_eng: "Osono",
        label_ka: "女房おその",
        id: 2133
      })
      
    
      this.add({
        label_eng: "Tokuzo, Village headman",
        label_ka: "庄屋徳蔵",
        id: 2134
      })
      
    
      this.add({
        label_eng: "Kansaku's mother",
        label_ka: "勘作母",
        id: 2135
      })
      
    
      this.add({
        label_eng: "Kyoichi",
        label_ka: "伜経市",
        id: 2136
      })
      
    
      this.add({
        label_eng: "Shogunate official",
        label_ka: "本間六郎左衛門",
        id: 2137
      })
      
    
      this.add({
        label_eng: "Oden",
        label_ka: "女房お伝",
        id: 2138
      })
      
    
      this.add({
        label_eng: "Kansaku",
        label_ka: "鵜飼い勘作",
        id: 2139
      })
      
    
      this.add({
        label_eng: "Priest Nichiro",
        label_ka: "日朗法師",
        id: 2140
      })
      
    
      this.add({
        label_eng: "Saint Nichiren",
        label_ka: "日蓮聖人",
        id: 2141
      })
      
    
      this.add({
        label_eng: "Apprentice priest",
        label_ka: "弟子僧",
        id: 2142
      })
      
    
      this.add({
        label_eng: "Kinezo",
        label_ka: "団子売杵造",
        id: 2143
      })
      
    
      this.add({
        label_eng: "Rin, a maid",
        label_ka: "仲居りん",
        id: 2144
      })
      
    
      this.add({
        label_eng: "Tama, a maid",
        label_ka: "仲居たま",
        id: 2145
      })
      
    
      this.add({
        label_eng: "Otoki",
        label_ka: "周旋屋おとき",
        id: 2146
      })
      
    
      this.add({
        label_eng: "Ushiwakamaru",
        label_ka: "牛若丸",
        id: 2147
      })
      
    
      this.add({
        label_eng: "Omatsu",
        label_ka: "仲居お松",
        id: 2148
      })
      
    
      this.add({
        label_eng: "Ousu",
        label_ka: "団子売(女房)お臼",
        id: 2149
      })
      
    
      this.add({
        label_eng: "Soldiers",
        label_ka: "軍兵",
        id: 2150
      })
      
    
      this.add({
        label_eng: "Samurai",
        label_ka: "近侍",
        id: 2151
      })
      
    
      this.add({
        label_eng: "Samurai",
        label_ka: "近習",
        id: 2152
      })
      
    
      this.add({
        label_eng: "Assistant priests",
        label_ka: "下官",
        id: 2153
      })
      
    
      this.add({
        label_eng: "Carpenters",
        label_ka: "大工",
        id: 2154
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "奴",
        id: 2155
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "組子",
        id: 2156
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "奴",
        id: 2157
      })
      
    
      this.add({
        label_eng: "Jirokichi",
        label_ka: "次郎吉",
        id: 2158
      })
      
    
      this.add({
        label_eng: "Constables",
        label_ka: "捕手",
        id: 2159
      })
      
    
      this.add({
        label_eng: "Constables",
        label_ka: "捕手",
        id: 2160
      })
      
    
      this.add({
        label_eng: "Neighbors",
        label_ka: "近所の衆",
        id: 2161
      })
      
    
      this.add({
        label_eng: "Akuemon's followers",
        label_ka: "組子",
        id: 2162
      })
      
    
      this.add({
        label_eng: "Maids",
        label_ka: "下女",
        id: 2163
      })
      
    
      this.add({
        label_eng: "Constables",
        label_ka: "捕手",
        id: 2164
      })
      
    
      this.add({
        label_eng: "Palanquin bearer",
        label_ka: "駕屋",
        id: 2165
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "仕丁",
        id: 2166
      })
      
    
      this.add({
        label_eng: "Retainers",
        label_ka: "奴",
        id: 2167
      })
      
    
      this.add({
        label_eng: "Minor officials",
        label_ka: "諸士",
        id: 2168
      })
      
    
      this.add({
        label_eng: "Maids",
        label_ka: "腰元",
        id: 2169
      })
      
    
      this.add({
        label_eng: "Constables",
        label_ka: "捕手",
        id: 2170
      })
      
    
      this.add({
        label_eng: "Constables",
        label_ka: "捕手",
        id: 2171
      })
      
    
      this.add({
        label_eng: "Lumber carriers",
        label_ka: "人足",
        id: 2172
      })
      
    
      this.add({
        label_eng: "Constables",
        label_ka: "捕手",
        id: 2173
      })
      
    
      this.add({
        label_eng: "Constables in colorful uniform",
        label_ka: "花四天",
        id: 2174
      })
      
    
      this.add({
        label_eng: "School children",
        label_ka: "手習子",
        id: 2175
      })
      
    
      this.add({
        label_eng: "Zembei",
        label_ka: "爺善兵衛",
        id: 2176
      })
      
    
      this.add({
        label_eng: "Otake",
        label_ka: "婆お竹",
        id: 2177
      })
      
    
      this.add({
        label_eng: "Father sparrow",
        label_ka: "親雀",
        id: 2178
      })
      
    
      this.add({
        label_eng: "Young sparrow",
        label_ka: "子雀",
        id: 2179
      })
      
    
      this.add({
        label_eng: "Servant sparrows",
        label_ka: "雀の家来",
        id: 2180
      })
      
    
      this.add({
        label_eng: "Ghouls",
        label_ka: "つづらの妖怪",
        id: 2181
      })
      
    
      this.add({
        label_eng: "Maids",
        label_ka: "腰元",
        id: 2182
      })
      
    
      this.add({
        label_eng: "Janitors",
        label_ka: "仕丁",
        id: 2183
      })
      
    
      this.add({
        label_eng: "Wife 1",
        label_ka: "女房一",
        id: 2184
      })
      
    
      this.add({
        label_eng: "Wife 2",
        label_ka: "女房二",
        id: 2185
      })
      
    
      this.add({
        label_eng: "Wife 3",
        label_ka: "女房三",
        id: 2186
      })
      
    
      this.add({
        label_eng: "Lady of the house",
        label_ka: "奥方",
        id: 2187
      })
      
    
      this.add({
        label_eng: "Old woman",
        label_ka: "老婆",
        id: 2188
      })
      
    
      this.add({
        label_eng: "Lord",
        label_ka: "殿さま",
        id: 2189
      })
      
    
      this.add({
        label_eng: "Takunai",
        label_ka: "宅内",
        id: 2190
      })
      
    
      this.add({
        label_eng: "Soldier 1",
        label_ka: "兵士一",
        id: 2191
      })
      
    
      this.add({
        label_eng: "Soldier 2",
        label_ka: "兵士二",
        id: 2192
      })
      
    
      this.add({
        label_eng: "Soldier 3",
        label_ka: "兵士三",
        id: 2193
      })
      
    
      this.add({
        label_eng: "Maid",
        label_ka: "下女",
        id: 2194
      })
      
    
      this.add({
        label_eng: "Retainers",
        label_ka: "軍兵",
        id: 2195
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "雑色",
        id: 2196
      })
      
    
      this.add({
        label_eng: "Retainers",
        label_ka: "手下",
        id: 2197
      })
      
    
      this.add({
        label_eng: "Tea House Maid",
        label_ka: "仲居",
        id: 2198
      })
      
    
      this.add({
        label_eng: "Attendants to a lord",
        label_ka: "捕手",
        id: 2199
      })
      
    
      this.add({
        label_eng: "Pilgrims on their way to a temple",
        label_ka: "参詣人",
        id: 2200
      })
      
    
      this.add({
        label_eng: "Children",
        label_ka: "里の童",
        id: 2201
      })
      
    
      this.add({
        label_eng: "Men carrying passengers across a river",
        label_ka: "川越人足",
        id: 2202
      })
      
    
      this.add({
        label_eng: "Buddhist devotees",
        label_ka: "講中",
        id: 2203
      })
      
    
      this.add({
        label_eng: "Farmers",
        label_ka: "百姓",
        id: 2204
      })
      
    
      this.add({
        label_eng: "Maid servants",
        label_ka: "腰元",
        id: 2205
      })
      
    
      this.add({
        label_eng: "Servants",
        label_ka: "奴",
        id: 2206
      })
      
    
      this.add({
        label_eng: "Maid servants",
        label_ka: "腰元",
        id: 2207
      })
      
    
      this.add({
        label_eng: "Soldiers",
        label_ka: "軍兵",
        id: 2208
      })
      
    
      this.add({
        label_eng: "Maid servants",
        label_ka: "腰元",
        id: 2209
      })
      
    
      this.add({
        label_eng: "Maids",
        label_ka: "腰元",
        id: 2210
      })
      
    
      this.add({
        label_eng: "Youngsters",
        label_ka: "若中",
        id: 2211
      })
      
    
      this.add({
        label_eng: "Osan's mother",
        label_ka: "おさんの母",
        id: 2212
      })
      
    
      this.add({
        label_eng: "Members of religionist group",
        label_ka: "同行衆",
        id: 2213
      })
      
    
      this.add({
        label_eng: "Policemen",
        label_ka: "捕手",
        id: 2214
      })
      
    
      this.add({
        label_eng: "Policemen",
        label_ka: "捕手",
        id: 2215
      })
      
    
      this.add({
        label_eng: "Horse drivers",
        label_ka: "馬方",
        id: 2216
      })
      
    
      this.add({
        label_eng: "Farmers",
        label_ka: "百姓",
        id: 2217
      })
      
    
      this.add({
        label_eng: "Tiny monkeys",
        label_ka: "小猿",
        id: 2218
      })
      
    
      this.add({
        label_eng: "Ladies-in-waiting",
        label_ka: "腰元",
        id: 2219
      })
      
    
      this.add({
        label_eng: "Constables",
        label_ka: "捕手",
        id: 2220
      })
      
    
      this.add({
        label_eng: "Soldiers",
        label_ka: "雑兵",
        id: 2221
      })
      
    
      this.add({
        label_eng: "Farmers",
        label_ka: "百姓",
        id: 2222
      })
      
    
      this.add({
        label_eng: "Lady Tamamo, in fact a fox",
        label_ka: "玉藻前実は妖狐",
        id: 2223
      })
      
    
    //kashira
    
      this.add({
        label_eng: "Amanjaku",
        label_ka: "あまんじゃく",
        id: 2224
      })
      
    
      this.add({
        label_eng: "Ebisu",
        label_ka: "恵比須",
        id: 2225
      })
      
    
      this.add({
        label_eng: "Ōshūto",
        label_ka: "大舅",
        id: 2226
      })
      
    
      this.add({
        label_eng: "Ōdanshichi",
        label_ka: "大団七",
        id: 2227
      })
      
    
      this.add({
        label_eng: "Ochō no kodomo",
        label_ka: "お蝶の子供",
        id: 2228
      })
      
    
      this.add({
        label_eng: "Otoko koyaku",
        label_ka: "男子役",
        id: 2229
      })
      
    
      this.add({
        label_eng: "Otoko (sewa)",
        label_ka: "男（世話）",
        id: 2230
      })
      
    
      this.add({
        label_eng: "Otoko chū koyaku",
        label_ka: "男中子役",
        id: 2231
      })
      
    
      this.add({
        label_eng: "Otoko tsume",
        label_ka: "男つめ",
        id: 2232
      })
      
    
      this.add({
        label_eng: "Oni",
        label_ka: "鬼",
        id: 2233
      })
      
    
      this.add({
        label_eng: "Oniwaka",
        label_ka: "鬼若",
        id: 2234
      })
      
    
      this.add({
        label_eng: "Oniwaka chū koyaku",
        label_ka: "鬼若中子役",
        id: 2235
      })
      
    
      this.add({
        label_eng: "Onoemon",
        label_ka: "斧右衛門",
        id: 2236
      })
      
    
      this.add({
        label_eng: "Ofuku",
        label_ka: "お福",
        id: 2237
      })
      
    
      this.add({
        label_eng: "Onna koyaku",
        label_ka: "女子役",
        id: 2238
      })
      
    
      this.add({
        label_eng: "Onna chū koyaku",
        label_ka: "女中子役",
        id: 2239
      })
      
    
      this.add({
        label_eng: "Onna tsume",
        label_ka: "女つめ",
        id: 2240
      })
      
    
      this.add({
        label_eng: "Kagekiyo",
        label_ka: "景清",
        id: 2241
      })
      
    
      this.add({
        label_eng: "Gabu (kasane)",
        label_ka: "累のガブ",
        id: 2242
      })
      
    
      this.add({
        label_eng: "Kani",
        label_ka: "かに",
        id: 2243
      })
      
    
      this.add({
        label_eng: "Gabu",
        label_ka: "ガブ",
        id: 2244
      })
      
    
      this.add({
        label_eng: "Kabocha",
        label_ka: "かぼちゃ",
        id: 2245
      })
      
    
      this.add({
        label_eng: "Kamezasa",
        label_ka: "亀笹",
        id: 2246
      })
      
    
      this.add({
        label_eng: "Karasu tengu",
        label_ka: "烏天狗",
        id: 2247
      })
      
    
      this.add({
        label_eng: "Kawatarō",
        label_ka: "川太郎",
        id: 2248
      })
      
    
      this.add({
        label_eng: "Kiichi",
        label_ka: "鬼一",
        id: 2249
      })
      
    
      this.add({
        label_eng: "Kijo",
        label_ka: "鬼女",
        id: 2250
      })
      
    
      this.add({
        label_eng: "Kitsune",
        label_ka: "狐",
        id: 2251
      })
      
    
      this.add({
        label_eng: "Kintoki",
        label_ka: "金時",
        id: 2252
      })
      
    
      this.add({
        label_eng: "Kuchiaki Bunshichi",
        label_ka: "口あき文七",
        id: 2253
      })
      
    
      this.add({
        label_eng: "Keisei",
        label_ka: "傾城",
        id: 2254
      })
      
    
      this.add({
        label_eng: "Kēto",
        label_ka: "ケート",
        id: 2255
      })
      
    
      this.add({
        label_eng: "Genta",
        label_ka: "源太",
        id: 2256
      })
      
    
      this.add({
        label_eng: "Genta (jidai)",
        label_ka: "源太（時代）",
        id: 2257
      })
      
    
      this.add({
        label_eng: "Kenbishi",
        label_ka: "検非違使",
        id: 2258
      })
      
    
      this.add({
        label_eng: "Kōmei",
        label_ka: "孔明",
        id: 2259
      })
      
    
      this.add({
        label_eng: "Kodanshichi",
        label_ka: "小団七",
        id: 2260
      })
      
    
      this.add({
        label_eng: "Koneko",
        label_ka: "子猫",
        id: 2261
      })
      
    
      this.add({
        label_eng: "Konezumi",
        label_ka: "子ねずみ",
        id: 2262
      })
      
    
      this.add({
        label_eng: "Konoha tengu",
        label_ka: "木の葉天狗",
        id: 2263
      })
      
    
      this.add({
        label_eng: "Komusume",
        label_ka: "小娘",
        id: 2264
      })
      
    
      this.add({
        label_eng: "Koyaku",
        label_ka: "子役",
        id: 2265
      })
      
    
      this.add({
        label_eng: "Sagojō",
        label_ka: "沙悟浄",
        id: 2266
      })
      
    
      this.add({
        label_eng: "Sasuke",
        label_ka: "佐助",
        id: 2267
      })
      
    
      this.add({
        label_eng: "Sadanoshin",
        label_ka: "定之進",
        id: 2268
      })
      
    
      this.add({
        label_eng: "Zatō",
        label_ka: "座頭",
        id: 2269
      })
      
    
      this.add({
        label_eng: "Saru",
        label_ka: "猿",
        id: 2270
      })
      
    
      this.add({
        label_eng: "Sanmaime",
        label_ka: "三枚目",
        id: 2271
      })
      
    
      this.add({
        label_eng: "Sanmaime (onna)",
        label_ka: "三枚目（女）",
        id: 2272
      })
      
    
      this.add({
        label_eng: "Jiji (sewa)",
        label_ka: "爺（世話）",
        id: 2273
      })
      
    
      this.add({
        label_eng: "Jiji tsume",
        label_ka: "爺つめ",
        id: 2274
      })
      
    
      this.add({
        label_eng: "Shitadashi",
        label_ka: "舌出し",
        id: 2275
      })
      
    
      this.add({
        label_eng: "Shūto",
        label_ka: "舅",
        id: 2276
      })
      
    
      this.add({
        label_eng: "Shūto (sewa)",
        label_ka: "舅（世話）",
        id: 2277
      })
      
    
      this.add({
        label_eng: "Shūto no gabu",
        label_ka: "舅のガブ",
        id: 2278
      })
      
    
      this.add({
        label_eng: "Shutendōji",
        label_ka: "酒呑童子",
        id: 2279
      })
      
    
      this.add({
        label_eng: "Shōki",
        label_ka: "鍾馗",
        id: 2280
      })
      
    
      this.add({
        label_eng: "Shōjō",
        label_ka: "丞相",
        id: 2281
      })
      
    
      this.add({
        label_eng: "Shōnin",
        label_ka: "上人",
        id: 2282
      })
      
    
      this.add({
        label_eng: "Shiratayū",
        label_ka: "白太夫",
        id: 2283
      })
      
    
      this.add({
        label_eng: "Suzume",
        label_ka: "雀",
        id: 2284
      })
      
    
      this.add({
        label_eng: "Sen-ō no bōrei",
        label_ka: "先王の亡霊",
        id: 2285
      })
      
    
      this.add({
        label_eng: "Songokū",
        label_ka: "孫悟空",
        id: 2286
      })
      
    
      this.add({
        label_eng: "Daikon",
        label_ka: "大根",
        id: 2287
      })
      
    
      this.add({
        label_eng: "Takeuji",
        label_ka: "武氏",
        id: 2288
      })
      
    
      this.add({
        label_eng: "Tanuki",
        label_ka: "狸",
        id: 2289
      })
      
    
      this.add({
        label_eng: "Tamamonomae",
        label_ka: "玉藻前",
        id: 2290
      })
      
    
      this.add({
        label_eng: "Tameyoshi",
        label_ka: "為義",
        id: 2291
      })
      
    
      this.add({
        label_eng: "Darasuke",
        label_ka: "陀羅助",
        id: 2292
      })
      
    
      this.add({
        label_eng: "Darasuke (jidai)",
        label_ka: "陀羅助（時代）",
        id: 2293
      })
      
    
      this.add({
        label_eng: "Danbatake no hyakushō",
        label_ka: "段畑の百姓",
        id: 2294
      })
      
    
      this.add({
        label_eng: "Chū koyaku",
        label_ka: "中子役",
        id: 2295
      })
      
    
      this.add({
        label_eng: "Chohakkai",
        label_ka: "猪八戒",
        id: 2296
      })
      
    
      this.add({
        label_eng: "Gabu (tsunonashi)",
        label_ka: "角なしのガブ",
        id: 2297
      })
      
    
      this.add({
        label_eng: "Tsume",
        label_ka: "つめ",
        id: 2298
      })
      
    
      this.add({
        label_eng: "Tsurifune",
        label_ka: "釣船",
        id: 2299
      })
      
    
      this.add({
        label_eng: "Tedai",
        label_ka: "手代",
        id: 2300
      })
      
    
      this.add({
        label_eng: "Decchi",
        label_ka: "丁稚",
        id: 2301
      })
      
    
      this.add({
        label_eng: "Toraō",
        label_ka: "虎王",
        id: 2302
      })
      
    
      this.add({
        label_eng: "Nashiwari",
        label_ka: "梨割り",
        id: 2303
      })
      
    
      this.add({
        label_eng: "Nichiren",
        label_ka: "日蓮",
        id: 2304
      })
      
    
      this.add({
        label_eng: "Neko",
        label_ka: "猫",
        id: 2305
      })
      
    
      this.add({
        label_eng: "Nezumi",
        label_ka: "ねずみ",
        id: 2306
      })
      
    
      this.add({
        label_eng: "Nemuri no musume",
        label_ka: "ねむりの娘",
        id: 2307
      })
      
    
      this.add({
        label_eng: "Hagataki",
        label_ka: "端敵",
        id: 2308
      })
      
    
      this.add({
        label_eng: "Bakuya",
        label_ka: "莫耶",
        id: 2309
      })
      
    
      this.add({
        label_eng: "Hanaugoki",
        label_ka: "鼻動き",
        id: 2310
      })
      
    
      this.add({
        label_eng: "Baba",
        label_ka: "婆",
        id: 2311
      })
      
    
      this.add({
        label_eng: "Baba (jidai)",
        label_ka: "婆（時代）",
        id: 2312
      })
      
    
      this.add({
        label_eng: "Baba (sewa)",
        label_ka: "婆（世話）",
        id: 2313
      })
      
    
      this.add({
        label_eng: "Baba tsume",
        label_ka: "婆つめ",
        id: 2314
      })
      
    
      this.add({
        label_eng: "Hayaku",
        label_ka: "端役",
        id: 2315
      })
      
    
      this.add({
        label_eng: "Bannai",
        label_ka: "伴内",
        id: 2316
      })
      
    
      this.add({
        label_eng: "Hannya",
        label_ka: "般若",
        id: 2317
      })
      
    
      this.add({
        label_eng: "Hitotsume",
        label_ka: "一つ目",
        id: 2318
      })
      
    
      this.add({
        label_eng: "Hinin",
        label_ka: "非人",
        id: 2319
      })
      
    
      this.add({
        label_eng: "Hyakushō",
        label_ka: "百姓",
        id: 2320
      })
      
    
      this.add({
        label_eng: "Hiyoshimaru (Oniwaka)",
        label_ka: "日吉丸（鬼若）",
        id: 2321
      })
      
    
      this.add({
        label_eng: "Pinkāton",
        label_ka: "ピンカートン",
        id: 2322
      })
      
    
      this.add({
        label_eng: "Fukurokuju",
        label_ka: "福禄寿",
        id: 2323
      })
      
    
      this.add({
        label_eng: "Fukeoyama",
        label_ka: "老女形",
        id: 2324
      })
      
    
      this.add({
        label_eng: "Fukehayaku",
        label_ka: "老端役",
        id: 2325
      })
      
    
      this.add({
        label_eng: "Futaomote",
        label_ka: "両面",
        id: 2326
      })
      
    
      this.add({
        label_eng: "Bunshichi",
        label_ka: "文七",
        id: 2327
      })
      
    
      this.add({
        label_eng: "Masamune",
        label_ka: "正宗",
        id: 2328
      })
      
    
      this.add({
        label_eng: "Matahei",
        label_ka: "又平",
        id: 2329
      })
      
    
      this.add({
        label_eng: "Mitsume",
        label_ka: "三つ目",
        id: 2330
      })
      
    
      this.add({
        label_eng: "Myōrin",
        label_ka: "妙林",
        id: 2331
      })
      
    
      this.add({
        label_eng: "Musume",
        label_ka: "娘",
        id: 2332
      })
      
    
      this.add({
        label_eng: "Yashio",
        label_ka: "八汐",
        id: 2333
      })
      
    
      this.add({
        label_eng: "Yamachichi",
        label_ka: "山父",
        id: 2334
      })
      
    
      this.add({
        label_eng: "Yūgao",
        label_ka: "夕顔",
        id: 2335
      })
      
    
      this.add({
        label_eng: "Yūsen",
        label_ka: "祐仙",
        id: 2336
      })
      
    
      this.add({
        label_eng: "Yokanbei",
        label_ka: "与勘平",
        id: 2337
      })
      
    
      this.add({
        label_eng: "Yokanbei (jidai)",
        label_ka: "与勘平（時代）",
        id: 2338
      })
      
    
      this.add({
        label_eng: "Wakaotoko",
        label_ka: "若男",
        id: 2339
      })
      
    
      this.add({
        label_eng: "Warubaba",
        label_ka: "悪婆",
        id: 2340
      })
      
    
      this.add({
        label_eng: "Warubaba (sewa)",
        label_ka: "悪婆（世話）",
        id: 2341
      })
      
    
      this.add({
        label_eng: "Genta (nemuri tsuki)",
        label_ka: "源太眠りつき",
        id: 2342
      })
      
    
      this.add({
        label_eng: "Shinzō",
        label_ka: "新造",
        id: 2343
      })
      
    
      this.add({
        label_eng: "Hanamuke",
        label_ka: "はなむけ",
        id: 2344
      })
      
    
      this.add({
        label_eng: "Sanmaime (kani)",
        label_ka: "三枚目（かに）",
        id: 2345
      })
      
    
      this.add({
        label_eng: "Genta (Ugokinashi )",
        label_ka: "源太（動きなし）",
        id: 2346
      })
      
    
      this.add({
        label_eng: "Sanmaime (tedai)",
        label_ka: "三枚目（手代）",
        id: 2347
      })
      
    
      this.add({
        label_eng: "Mimi ugoki no Kōmei",
        label_ka: "耳動きの孔明",
        id: 2348
      })
      
    
      this.add({
        label_eng: "Gabu (tsunodashi)",
        label_ka: "角出しのガブ",
        id: 2349
      })
      
    
      this.add({
        label_eng: "Sanmaime (Yūsen)",
        label_ka: "三枚目（祐仙）",
        id: 2350
      })
      
    
      this.add({
        label_eng: "Sanmaime (Bannai)",
        label_ka: "三枚目（伴内）",
        id: 2351
      })
      
    
      this.add({
        label_eng: "Gaijin",
        label_ka: "外人",
        id: 2352
      })
      
    
    //performances
    
      this.add({
        label_eng: "January 1985: The League of the 47 Ronin",
        id: 2353
      })
      
    
      this.add({
        label_eng: "November 1964: More Worthy than Revenge",
        id: 2354
      })
      
    
      this.add({
        label_eng: "November 1964: The Vendetta in Iga",
        id: 2355
      })
      
    
      this.add({
        label_eng: "November 1964: The Maple Viewing Party",
        id: 2356
      })
      
    
      this.add({
        label_eng: "November 1964: The Two Butterflies",
        id: 2357
      })
      
    
      this.add({
        label_eng: "November 1964: The Courier for Hell",
        id: 2358
      })
      
    
      this.add({
        label_eng: "November 1964: The Battle of Ichinotani",
        id: 2359
      })
      
    
      this.add({
        label_eng: "November 1964: The Romance in the Gay Quarters",
        id: 2360
      })
      
    
      this.add({
        label_eng: "October 1968: The Color Prints of Kagamiyama",
        id: 2361
      })
      
    
      this.add({
        label_eng: "October 1968: The Cherry Trees of the Imperial Palace",
        id: 2362
      })
      
    
      this.add({
        label_eng: "October 1968: The Love of Ohan and Choemon",
        id: 2363
      })
      
    
      this.add({
        label_eng: "February 1968: The Battle of Dannoura",
        id: 2364
      })
      
    
      this.add({
        label_eng: "February 1968: The Love of Osome and Hisamatsu",
        id: 2365
      })
      
    
      this.add({
        label_eng: "February 1968: The Three Blind Masseurs",
        id: 2366
      })
      
    
      this.add({
        label_eng: "February 1968: The Pines on Mount Hibari",
        id: 2367
      })
      
    
      this.add({
        label_eng: "February 1968: Oshun and Dembei",
        id: 2368
      })
      
    
      this.add({
        label_eng: "February 1968: Fishing for Wives",
        id: 2369
      })
      
    
      this.add({
        label_eng: "May 1969: The Battle of Ichinotani",
        id: 2370
      })
      
    
      this.add({
        label_eng: "May 1969: The Story of Priest Roben",
        id: 2371
      })
      
    
      this.add({
        label_eng: "May 1969: The Infant Pilgrim",
        id: 2372
      })
      
    
      this.add({
        label_eng: "September 1969: The Battle of Sakamoto Castle",
        id: 2373
      })
      
    
      this.add({
        label_eng: "September 1969: The Travel on Mt. Yoshino",
        id: 2374
      })
      
    
      this.add({
        label_eng: "September 1969: The Amorous Courier",
        id: 2375
      })
      
    
      this.add({
        label_eng: "October 1969: The Twenty-Four Dutiful Sons",
        id: 2376
      })
      
    
      this.add({
        label_eng: "February 1970: The Battles of Genji and Heike",
        id: 2377
      })
      
    
      this.add({
        label_eng: "February 1970: A Tragic Love Triangle",
        id: 2378
      })
      
    
      this.add({
        label_eng: "April 1970: Yoshitsune and a Thousand Cherry Trees",
        id: 2379
      })
      
    
      this.add({
        label_eng: "May 1970: Yoshitsune and a Thousand Cherry Trees",
        id: 2380
      })
      
    
      this.add({
        label_eng: "July 1970: The Love Suicides at Sonezaki",
        id: 2381
      })
      
    
      this.add({
        label_eng: "July 1970: Fishing for Wives",
        id: 2382
      })
      
    
      this.add({
        label_eng: "September 1970: Sugawara's Secrets of Calligraphy",
        id: 2383
      })
      
    
      this.add({
        label_eng: "October 1970: The Inauspicious Sword",
        id: 2384
      })
      
    
      this.add({
        label_eng: "October 1970: The Teachings for Women",
        id: 2385
      })
      
    
      this.add({
        label_eng: "October 1970: The White Fox of Shinoda",
        id: 2386
      })
      
    
      this.add({
        label_eng: "October 1970: The Love of Ohan and Choemon",
        id: 2387
      })
      
    
      this.add({
        label_eng: "November 1970: The Love-Inspired Murder",
        id: 2388
      })
      
    
      this.add({
        label_eng: "November 1970: The Nunobiki Waterfall",
        id: 2389
      })
      
    
      this.add({
        label_eng: "February 1971: The Vendetta by a Samurai in Rags",
        id: 2390
      })
      
    
      this.add({
        label_eng: "February 1971: The Dances of the Four Seasons",
        id: 2391
      })
      
    
      this.add({
        label_eng: "February 1971: The Love of Osome and Hisamatsu",
        id: 2392
      })
      
    
      this.add({
        label_eng: "April 1971: The Teachings for Women",
        id: 2393
      })
      
    
      this.add({
        label_eng: "April 1971: Urikohime and Amanjaku",
        id: 2394
      })
      
    
      this.add({
        label_eng: "April 1971: The Battle of Dannoura",
        id: 2395
      })
      
    
      this.add({
        label_eng: "April 1971: The Old Tale of Kusunoki",
        id: 2396
      })
      
    
      this.add({
        label_eng: "May 1971: The Gion Festival",
        id: 2397
      })
      
    
      this.add({
        label_eng: "May 1971: The Shiraishi Story",
        id: 2398
      })
      
    
      this.add({
        label_eng: "July 1971: Gonza the Lancer",
        id: 2399
      })
      
    
      this.add({
        label_eng: "July 1971: The Summer Festival at Naniwa",
        id: 2400
      })
      
    
      this.add({
        label_eng: "July 1971: The Subscription List",
        id: 2401
      })
      
    
      this.add({
        label_eng: "July 1971: The Three Oddities",
        id: 2402
      })
      
    
      this.add({
        label_eng: "September 1971: The Battle of Ichinotani",
        id: 2403
      })
      
    
      this.add({
        label_eng: "September 1971: The Crossroads of Gappo",
        id: 2404
      })
      
    
      this.add({
        label_eng: "September 1971: The Battle of Dannoura",
        id: 2405
      })
      
    
      this.add({
        label_eng: "October 1971: The Love of Osome and Hisamatsu",
        id: 2406
      })
      
    
      this.add({
        label_eng: "October 1971: A Chushingura's Subplot",
        id: 2407
      })
      
    
      this.add({
        label_eng: "October 1971: The Nine-Tailed Fox",
        id: 2408
      })
      
    
      this.add({
        label_eng: "October 1971: The Amorous Courier on the Yamato Highway",
        id: 2409
      })
      
    
      this.add({
        label_eng: "October 1971: A Supplement to Chushingura",
        id: 2410
      })
      
    
      this.add({
        label_eng: "November 1971: The Inauspicious Sword",
        id: 2411
      })
      
    
      this.add({
        label_eng: "November 1971: The Priest in Exile",
        id: 2412
      })
      
    
      this.add({
        label_eng: "November 1971: The Amorous Courier",
        id: 2413
      })
      
    
      this.add({
        label_eng: "November 1971: Tametomo The Archer General",
        id: 2414
      })
      
    
      this.add({
        label_eng: "January 1972: The Miracle at the Tsubosaka Kannon Temple",
        id: 2415
      })
      
    
      this.add({
        label_eng: "January 1972: The Pines on Mount Hibari",
        id: 2416
      })
      
    
      this.add({
        label_eng: "January 1972: The Loyal Samurai",
        id: 2417
      })
      
    
      this.add({
        label_eng: "January 1972: A Tragic Love Triangle",
        id: 2418
      })
      
    
      this.add({
        label_eng: "January 1972: The Battle of Ichinotani",
        id: 2419
      })
      
    
      this.add({
        label_eng: "January 1972: The Dance of Sambaso",
        id: 2420
      })
      
    
      this.add({
        label_eng: "February 1972: The Two-Colored Reins",
        id: 2421
      })
      
    
      this.add({
        label_eng: "February 1972: The Loyal Samurai",
        id: 2422
      })
      
    
      this.add({
        label_eng: "February 1972: The Courier for Hell",
        id: 2423
      })
      
    
      this.add({
        label_eng: "April 1972: The Vendetta in Iga",
        id: 2424
      })
      
    
      this.add({
        label_eng: "April 1972: The Modoribashi Bridge",
        id: 2425
      })
      
    
      this.add({
        label_eng: "April 1972: The Stone Monument of Glory",
        id: 2426
      })
      
    
      this.add({
        label_eng: "April 1972: The Infant Pilgrim",
        id: 2427
      })
      
    
      this.add({
        label_eng: "April 1972: The Rat's Romance",
        id: 2428
      })
      
    
      this.add({
        label_eng: "May 1972: Sugawara's Secrets of Calligraphy",
        id: 2429
      })
      
    
      this.add({
        label_eng: "July 1972: The Story of the Morning Glory",
        id: 2430
      })
      
    
      this.add({
        label_eng: "July 1972: Kokaji the Swordsmith",
        id: 2431
      })
      
    
      this.add({
        label_eng: "July 1972: The Stuttering Painter",
        id: 2432
      })
      
    
      this.add({
        label_eng: "July 1972: The Love of Ohan and Choemon",
        id: 2433
      })
      
    
      this.add({
        label_eng: "July 1972: The Bloodshed at Ise",
        id: 2434
      })
      
    
      this.add({
        label_eng: "September 1972: The Trouble in the Date Household",
        id: 2435
      })
      
    
      this.add({
        label_eng: "September 1972: The Maiden's Colorful Fan",
        id: 2436
      })
      
    
      this.add({
        label_eng: "September 1972: The Three Oddities",
        id: 2437
      })
      
    
      this.add({
        label_eng: "September 1972: The Pine Tree on the River Bank",
        id: 2438
      })
      
    
      this.add({
        label_eng: "October 1972: The League of the 47 Ronin",
        id: 2439
      })
      
    
      this.add({
        label_eng: "November 1972: The Tycoon's Exploit",
        id: 2440
      })
      
    
      this.add({
        label_eng: "November 1972: A Tragic Love Triangle",
        id: 2441
      })
      
    
      this.add({
        label_eng: "November 1972: The New Barrier of Ataka",
        id: 2442
      })
      
    
      this.add({
        label_eng: "July 1973: The Battle of Kawanakajima",
        id: 2443
      })
      
    
      this.add({
        label_eng: "July 1973: The Crossroads of Gappo",
        id: 2444
      })
      
    
      this.add({
        label_eng: "July 1973: The Fiftieth Death Anniversary",
        id: 2445
      })
      
    
      this.add({
        label_eng: "July 1973: The Two Butterflies",
        id: 2446
      })
      
    
      this.add({
        label_eng: "July 1973: The Twenty-Four Dutiful Sons",
        id: 2447
      })
      
    
      this.add({
        label_eng: "July 1973: The Shank's Mare along the Tokaido Highway",
        id: 2448
      })
      
    
      this.add({
        label_eng: "September 1973: The Twins and the Sumida River",
        id: 2449
      })
      
    
      this.add({
        label_eng: "September 1973: The Woman-Killer and the Hell of Oil",
        id: 2450
      })
      
    
      this.add({
        label_eng: "September 1973: The Crossroads of Gappo",
        id: 2451
      })
      
    
      this.add({
        label_eng: "September 1973: The Faithful Wife",
        id: 2452
      })
      
    
      this.add({
        label_eng: "October 1973: The Battle of Coxinga",
        id: 2453
      })
      
    
      this.add({
        label_eng: "October 1973: The Stuttering Painter",
        id: 2454
      })
      
    
      this.add({
        label_eng: "October 1973: The Courier for Hell",
        id: 2455
      })
      
    
      this.add({
        label_eng: "October 1973: The Twins and the Sumida River",
        id: 2456
      })
      
    
      this.add({
        label_eng: "November 1973: The Battle of Coxinga",
        id: 2457
      })
      
    
      this.add({
        label_eng: "November 1973: The Courier for Hell",
        id: 2458
      })
      
    
      this.add({
        label_eng: "January 1973: The Dance of Sambaso",
        id: 2459
      })
      
    
      this.add({
        label_eng: "January 1973: The Love Suicides at Amijima",
        id: 2460
      })
      
    
      this.add({
        label_eng: "January 1973: The Battle of Sakamoto Castle",
        id: 2461
      })
      
    
      this.add({
        label_eng: "January 1973: Oshun and Dembei",
        id: 2462
      })
      
    
      this.add({
        label_eng: "January 1973: The Three Blind Masseurs",
        id: 2463
      })
      
    
      this.add({
        label_eng: "February 1973 Tour: The Trouble in the Date Household",
        id: 2464
      })
      
    
      this.add({
        label_eng: "February 1973 Tour: The Miracle at the Tsubosaka Kannon Temple",
        id: 2465
      })
      
    
      this.add({
        label_eng: "February 1973 Tour: The Infant Pilgrim",
        id: 2466
      })
      
    
      this.add({
        label_eng: "February 1973 Tour: A Tragic Love Triangle",
        id: 2467
      })
      
    
      this.add({
        label_eng: "February 1973 Tour: The Battle of Dannoura",
        id: 2468
      })
      
    
      this.add({
        label_eng: "February 1973 Tour: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2469
      })
      
    
      this.add({
        label_eng: "February 1973: The Adachi Plain in Oshu",
        id: 2470
      })
      
    
      this.add({
        label_eng: "April 1973: Yoshitsune and a Thousand Cherry Trees",
        id: 2471
      })
      
    
      this.add({
        label_eng: "April 1973: The Pregnant Mountain Ogress (Heroine)",
        id: 2472
      })
      
    
      this.add({
        label_eng: "April 1973: The Cherry Trees of the Imperial Palace",
        id: 2473
      })
      
    
      this.add({
        label_eng: "April 1973: The Ridge Pole of the Sanjusangendo Temple",
        id: 2474
      })
      
    
      this.add({
        label_eng: "April 1973: The Tycoon's Exploit",
        id: 2475
      })
      
    
      this.add({
        label_eng: "April 1973: The Love Suicide of Tokubei and Ofusa",
        id: 2476
      })
      
    
      this.add({
        label_eng: "April 1973: Kiichi's Book of Strategy",
        id: 2477
      })
      
    
      this.add({
        label_eng: "May 1973 National Theatre: The Battle of Kawanakajima",
        id: 2478
      })
      
    
      this.add({
        label_eng: "May 1973 National Theatre: The Pregnant Mountain Ogress (Heroine)",
        id: 2479
      })
      
    
      this.add({
        label_eng: "May 1973 National Theatre: The Fiftieth Death Anniversary",
        id: 2480
      })
      
    
      this.add({
        label_eng: "May 1973 National Theatre: The Old Tale of Kusunoki",
        id: 2481
      })
      
    
      this.add({
        label_eng: "May 1973 National Theatre: The Bloodshed at Ise",
        id: 2482
      })
      
    
      this.add({
        label_eng: "May 1973 National Theatre: The Cherry Trees Along the Hidaka River",
        id: 2483
      })
      
    
      this.add({
        label_eng: "May 1973 Asahiza: The Battle of Dannoura",
        id: 2484
      })
      
    
      this.add({
        label_eng: "May 1973 Asahiza: The Grateful Cormorant",
        id: 2485
      })
      
    
      this.add({
        label_eng: "May 1973 Asahiza: Botan doro (The Peony Lantern)",
        id: 2486
      })
      
    
      this.add({
        label_eng: "January 1974: The Dance of Sambaso",
        id: 2487
      })
      
    
      this.add({
        label_eng: "January 1974: The Go Game Strategy",
        id: 2488
      })
      
    
      this.add({
        label_eng: "January 1974: Sugawara's Secrets of Calligraphy",
        id: 2489
      })
      
    
      this.add({
        label_eng: "January 1974: The Love of Ohan and Choemon",
        id: 2490
      })
      
    
      this.add({
        label_eng: "January 1974: The Courtesan Yugiri",
        id: 2491
      })
      
    
      this.add({
        label_eng: "February 1974: The Stone Monument of Glory",
        id: 2492
      })
      
    
      this.add({
        label_eng: "February 1974: Oshun and Dembei",
        id: 2493
      })
      
    
      this.add({
        label_eng: "February 1974: The Romance in the Gay Quarters",
        id: 2494
      })
      
    
      this.add({
        label_eng: "February 1974: The Vendetta in Iga",
        id: 2495
      })
      
    
      this.add({
        label_eng: "February 1974: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2496
      })
      
    
      this.add({
        label_eng: "February 1974: The Tales of Ise",
        id: 2497
      })
      
    
      this.add({
        label_eng: "April 1974 Asahiza: The Tycoon's Exploit",
        id: 2498
      })
      
    
      this.add({
        label_eng: "April 1974 National Theatre: The Tycoon's Exploit",
        id: 2499
      })
      
    
      this.add({
        label_eng: "April 1974 National Theatre: The Travelling Butterflies",
        id: 2500
      })
      
    
      this.add({
        label_eng: "June 1974: The Modoribashi Bridge",
        id: 2501
      })
      
    
      this.add({
        label_eng: "June 1974: The Amorous Courier on the Yamato Highway",
        id: 2502
      })
      
    
      this.add({
        label_eng: "June 1974: The Vendetta in Iga",
        id: 2503
      })
      
    
      this.add({
        label_eng: "June 1974: The Battle of Ichinotani",
        id: 2504
      })
      
    
      this.add({
        label_eng: "June 1974: Oshun and Dembei",
        id: 2505
      })
      
    
      this.add({
        label_eng: "June 1974: Yoshitsune and a Thousand Cherry Trees",
        id: 2506
      })
      
    
      this.add({
        label_eng: "July 1974: The Three Generations of Kamakura Shoguns",
        id: 2507
      })
      
    
      this.add({
        label_eng: "July 1974: The Love Suicides at Sonezaki",
        id: 2508
      })
      
    
      this.add({
        label_eng: "July 1974: The Cherry Trees Along the Hidaka River",
        id: 2509
      })
      
    
      this.add({
        label_eng: "July 1974: A Tragic Love Triangle",
        id: 2510
      })
      
    
      this.add({
        label_eng: "September 1974: The Nine-Tailed Fox",
        id: 2511
      })
      
    
      this.add({
        label_eng: "September 1974: The Battle of Sakamoto Castle",
        id: 2512
      })
      
    
      this.add({
        label_eng: "October 1974: The Nunobiki Waterfall",
        id: 2513
      })
      
    
      this.add({
        label_eng: "October 1974: The Trouble in the Date Household",
        id: 2514
      })
      
    
      this.add({
        label_eng: "October 1974: The Miracle at the Tsubosaka Kannon Temple",
        id: 2515
      })
      
    
      this.add({
        label_eng: "October 1974: Fishing for Wives",
        id: 2516
      })
      
    
      this.add({
        label_eng: "November 1974: The Color Prints of Kagamiyama",
        id: 2517
      })
      
    
      this.add({
        label_eng: "November 1974: The Love of Osome and Hisamatsu",
        id: 2518
      })
      
    
      this.add({
        label_eng: "November 1974: The Dumpling Peddlers",
        id: 2519
      })
      
    
      this.add({
        label_eng: "January 1975: The Battle of Ichinotani",
        id: 2520
      })
      
    
      this.add({
        label_eng: "January 1975: The Battle of Sakamoto Castle",
        id: 2521
      })
      
    
      this.add({
        label_eng: "January 1975: The Subscription List",
        id: 2522
      })
      
    
      this.add({
        label_eng: "January 1975: The Amorous Courier on the Yamato Highway",
        id: 2523
      })
      
    
      this.add({
        label_eng: "January 1975: The Dragon and the Tiger",
        id: 2524
      })
      
    
      this.add({
        label_eng: "February 1975: The Battle of Ichinotani",
        id: 2525
      })
      
    
      this.add({
        label_eng: "February 1975: Two Girl Attendants to a Courtesan",
        id: 2526
      })
      
    
      this.add({
        label_eng: "April 1975: The Love of Osome and Hisamatsu",
        id: 2527
      })
      
    
      this.add({
        label_eng: "April 1975: Yoshitsune and a Thousand Cherry Trees",
        id: 2528
      })
      
    
      this.add({
        label_eng: "April 1975: The Faithful Wife",
        id: 2529
      })
      
    
      this.add({
        label_eng: "April 1975: The League of the 47 Ronin",
        id: 2530
      })
      
    
      this.add({
        label_eng: "April 1975: The Young Cherry Tree",
        id: 2531
      })
      
    
      this.add({
        label_eng: "April 1975: The Enticed High Priest",
        id: 2532
      })
      
    
      this.add({
        label_eng: "May 1975: The Yaguchi Ferry",
        id: 2533
      })
      
    
      this.add({
        label_eng: "May 1975: Kagekiyo and His Daughter",
        id: 2534
      })
      
    
      this.add({
        label_eng: "May 1975: A Tragic Love Triangle",
        id: 2535
      })
      
    
      this.add({
        label_eng: "July 1975: The Woman-Killer and the Hell of Oil",
        id: 2536
      })
      
    
      this.add({
        label_eng: "July 1975: The Dumpling Peddlers",
        id: 2537
      })
      
    
      this.add({
        label_eng: "July 1975: The Vendetta in Iga",
        id: 2538
      })
      
    
      this.add({
        label_eng: "July 1975: The Battle of Dannoura",
        id: 2539
      })
      
    
      this.add({
        label_eng: "July 1975: Akogi Bay in Ise Province",
        id: 2540
      })
      
    
      this.add({
        label_eng: "September 1975: The Vow of Rokusuke",
        id: 2541
      })
      
    
      this.add({
        label_eng: "October 1975: The Twenty-Four Dutiful Sons",
        id: 2542
      })
      
    
      this.add({
        label_eng: "October 1975: The White Fox of Shinoda",
        id: 2543
      })
      
    
      this.add({
        label_eng: "October 1975: The Battles of Genji and Heike",
        id: 2544
      })
      
    
      this.add({
        label_eng: "October 1975: The Shiraishi Story",
        id: 2545
      })
      
    
      this.add({
        label_eng: "October 1975: The Maple Viewing Party",
        id: 2546
      })
      
    
      this.add({
        label_eng: "December 1975: The Twenty-Four Dutiful Sons",
        id: 2547
      })
      
    
      this.add({
        label_eng: "January 1976: The Dance of Sambaso",
        id: 2548
      })
      
    
      this.add({
        label_eng: "January 1976: Kagekiyo and His Daughter",
        id: 2549
      })
      
    
      this.add({
        label_eng: "January 1976: Tragedy on a Snowy Night",
        id: 2550
      })
      
    
      this.add({
        label_eng: "January 1976: The Color Prints of Kagamiyama",
        id: 2551
      })
      
    
      this.add({
        label_eng: "March 1976: Sugawara's Secrets of Calligraphy",
        id: 2552
      })
      
    
      this.add({
        label_eng: "March 1976: The Love of Ohan and Choemon",
        id: 2553
      })
      
    
      this.add({
        label_eng: "March 1976: The Battles of Genji and Heike",
        id: 2554
      })
      
    
      this.add({
        label_eng: "March 1976: The Love Suicides at Sonezaki",
        id: 2555
      })
      
    
      this.add({
        label_eng: "April 1976: The Story of Priest Roben",
        id: 2556
      })
      
    
      this.add({
        label_eng: "April 1976: The Two-Colored Reins",
        id: 2557
      })
      
    
      this.add({
        label_eng: "April 1976: Sugawara's Secrets of Calligraphy",
        id: 2558
      })
      
    
      this.add({
        label_eng: "April 1976: The Love-Inspired Murder",
        id: 2559
      })
      
    
      this.add({
        label_eng: "May 1976: The White Fox of Shinoda",
        id: 2560
      })
      
    
      this.add({
        label_eng: "May 1976: The Love of Osome and Hisamatsu",
        id: 2561
      })
      
    
      this.add({
        label_eng: "May 1976: Kumagai at the Fan Shop",
        id: 2562
      })
      
    
      this.add({
        label_eng: "May 1976: The Summer Festival at Naniwa",
        id: 2563
      })
      
    
      this.add({
        label_eng: "July 1976: The Bloodshed at Ise",
        id: 2564
      })
      
    
      this.add({
        label_eng: "July 1976: The League of the 47 Ronin",
        id: 2565
      })
      
    
      this.add({
        label_eng: "July 1976: The Dances of the Four Seasons",
        id: 2566
      })
      
    
      this.add({
        label_eng: "July 1976: The Story of Kasane",
        id: 2567
      })
      
    
      this.add({
        label_eng: "August 1984: The White Fox of Shinoda",
        id: 2568
      })
      
    
      this.add({
        label_eng: "August 1984: Akogi Bay in Ise Province",
        id: 2569
      })
      
    
      this.add({
        label_eng: "August 1984: The Murder in Revenge",
        id: 2570
      })
      
    
      this.add({
        label_eng: "August 1984: The Story of Monsters",
        id: 2571
      })
      
    
      this.add({
        label_eng: "November 1976: The Adachi Plain in Oshu",
        id: 2572
      })
      
    
      this.add({
        label_eng: "November 1976: The Nine-Tailed Fox",
        id: 2573
      })
      
    
      this.add({
        label_eng: "November 1976: The Love Suicide of Hambei and Ochiyo",
        id: 2574
      })
      
    
      this.add({
        label_eng: "November 1976: The Hunter and the Female Fox",
        id: 2575
      })
      
    
      this.add({
        label_eng: "September 1976 Kōkōsei no tame no Bunraku Kyōshitsu: The Amorous Courier",
        id: 2576
      })
      
    
      this.add({
        label_eng: "December 1976: The League of the 47 Ronin",
        id: 2577
      })
      
    
      this.add({
        label_eng: "January 1977: The Love of Osome and Hisamatsu",
        id: 2578
      })
      
    
      this.add({
        label_eng: "January 1977: The Ridge Pole of the Sanjusangendo Temple",
        id: 2579
      })
      
    
      this.add({
        label_eng: "January 1977: The Twenty-Four Dutiful Sons",
        id: 2580
      })
      
    
      this.add({
        label_eng: "January 1977: The Crossroads of Gappo",
        id: 2581
      })
      
    
      this.add({
        label_eng: "January 1977: The Mask Peddler",
        id: 2582
      })
      
    
      this.add({
        label_eng: "February 1977: The Vendetta in Iga",
        id: 2583
      })
      
    
      this.add({
        label_eng: "February 1977: A Tragic Love Triangle",
        id: 2584
      })
      
    
      this.add({
        label_eng: "February 1977: The Vendetta by a Samurai in Rags",
        id: 2585
      })
      
    
      this.add({
        label_eng: "February 1977: The Ridge Pole of the Sanjusangendo Temple",
        id: 2586
      })
      
    
      this.add({
        label_eng: "February 1977: Kokaji the Swordsmith",
        id: 2587
      })
      
    
      this.add({
        label_eng: "April 1977: The Teachings for Women",
        id: 2588
      })
      
    
      this.add({
        label_eng: "May 1977: The Teachings for Women",
        id: 2589
      })
      
    
      this.add({
        label_eng: "June 1977: The Tycoon's Exploit",
        id: 2590
      })
      
    
      this.add({
        label_eng: "June 1977: Fishing for Wives",
        id: 2591
      })
      
    
      this.add({
        label_eng: "June 1977: The Trouble in the Date Household",
        id: 2592
      })
      
    
      this.add({
        label_eng: "June 1977: The Shank's Mare along the Tokaido Highway",
        id: 2593
      })
      
    
      this.add({
        label_eng: "July 1977 Asahiza: The Battles of Genji and Heike",
        id: 2594
      })
      
    
      this.add({
        label_eng: "July 1977 Asahiza: The Love of Ohan and Choemon",
        id: 2595
      })
      
    
      this.add({
        label_eng: "July 1977 Asahiza: The Maiden's Colorful Fan",
        id: 2596
      })
      
    
      this.add({
        label_eng: "July 1977 Asahiza: The Shank's Mare along the Tokaido Highway",
        id: 2597
      })
      
    
      this.add({
        label_eng: "August 1977 Hokkaido Tour: The Dance of Sambaso",
        id: 2598
      })
      
    
      this.add({
        label_eng: "August 1977 Hokkaido Tour: The Priest in Exile",
        id: 2599
      })
      
    
      this.add({
        label_eng: "August 1977 Hokkaido Tour: The Love of Osome and Hisamatsu",
        id: 2600
      })
      
    
      this.add({
        label_eng: "August 1977 Tour: Sansho Dayu",
        id: 2601
      })
      
    
      this.add({
        label_eng: "September 1977: A Supplement to Chushingura",
        id: 2602
      })
      
    
      this.add({
        label_eng: "September 1977: The Love Suicides at Amijima",
        id: 2603
      })
      
    
      this.add({
        label_eng: "September 1977: The Two Butterflies",
        id: 2604
      })
      
    
      this.add({
        label_eng: "October 1977: The Two Butterflies",
        id: 2605
      })
      
    
      this.add({
        label_eng: "October 1977: The Three Blind Masseurs",
        id: 2606
      })
      
    
      this.add({
        label_eng: "October 1977: The Courier for Hell",
        id: 2607
      })
      
    
      this.add({
        label_eng: "October 1977: The Battle of Dannoura",
        id: 2608
      })
      
    
      this.add({
        label_eng: "December 1977: The Trouble in the Date Household",
        id: 2609
      })
      
    
      this.add({
        label_eng: "December 1977: The Infant Pilgrim",
        id: 2610
      })
      
    
      this.add({
        label_eng: "December 1977: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2611
      })
      
    
      this.add({
        label_eng: "January 1978: The Battle of Coxinga",
        id: 2612
      })
      
    
      this.add({
        label_eng: "January 1978: Fishing for Wives",
        id: 2613
      })
      
    
      this.add({
        label_eng: "January 1978: The Celebration of Housing Starts",
        id: 2614
      })
      
    
      this.add({
        label_eng: "January 1978: The Priest in Exile",
        id: 2615
      })
      
    
      this.add({
        label_eng: "January 1978: Oshun and Dembei",
        id: 2616
      })
      
    
      this.add({
        label_eng: "February 1978: Sugawara's Secrets of Calligraphy",
        id: 2617
      })
      
    
      this.add({
        label_eng: "February 1978: The Battle of Dannoura",
        id: 2618
      })
      
    
      this.add({
        label_eng: "February 1978: The Crossroads of Gappo",
        id: 2619
      })
      
    
      this.add({
        label_eng: "February 1978: A Chushingura's Subplot",
        id: 2620
      })
      
    
      this.add({
        label_eng: "February 1978: Gonza the Lancer",
        id: 2621
      })
      
    
      this.add({
        label_eng: "April 1978: Yoshitsune and a Thousand Cherry Trees",
        id: 2622
      })
      
    
      this.add({
        label_eng: "May 1978: The Story of the Morning Glory",
        id: 2623
      })
      
    
      this.add({
        label_eng: "June 1978: Nami (The Wave)",
        id: 2624
      })
      
    
      this.add({
        label_eng: "June 1978: Hatsuse mode",
        id: 2625
      })
      
    
      this.add({
        label_eng: "June 1978: The Travel on Mt. Yoshino",
        id: 2626
      })
      
    
      this.add({
        label_eng: "June 1978: Omon Toda",
        id: 2627
      })
      
    
      this.add({
        label_eng: "July 1978: The Woman-Killer and the Hell of Oil",
        id: 2628
      })
      
    
      this.add({
        label_eng: "July 1978: The Stuttering Painter",
        id: 2629
      })
      
    
      this.add({
        label_eng: "July 1978: The Subscription List",
        id: 2630
      })
      
    
      this.add({
        label_eng: "July 1978: The Summer Festival at Naniwa",
        id: 2631
      })
      
    
      this.add({
        label_eng: "July 1978: The Love Suicides at Sonezaki",
        id: 2632
      })
      
    
      this.add({
        label_eng: "August 1970 Tour: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2633
      })
      
    
      this.add({
        label_eng: "August 1970 Tour: The Love Suicides at Sonezaki",
        id: 2634
      })
      
    
      this.add({
        label_eng: "August 1978: Kiichi's Book of Strategy",
        id: 2635
      })
      
    
      this.add({
        label_eng: "August 1978: The Murder in Revenge",
        id: 2636
      })
      
    
      this.add({
        label_eng: "August 1978: The Twenty-Four Dutiful Sons",
        id: 2637
      })
      
    
      this.add({
        label_eng: "August 1978: The Tycoon's Exploit",
        id: 2638
      })
      
    
      this.add({
        label_eng: "August 1978: The Dances of the Four Seasons",
        id: 2639
      })
      
    
      this.add({
        label_eng: "August 1978: The Story of Monsters",
        id: 2640
      })
      
    
      this.add({
        label_eng: "September 1978: The League of the 47 Ronin",
        id: 2641
      })
      
    
      this.add({
        label_eng: "December 1978: Sugawara's Secrets of Calligraphy",
        id: 2642
      })
      
    
      this.add({
        label_eng: "December 1978: The Amorous Courier",
        id: 2643
      })
      
    
      this.add({
        label_eng: "December 1978: The New Barrier of Ataka",
        id: 2644
      })
      
    
      this.add({
        label_eng: "January 1979: Sugawara's Secrets of Calligraphy",
        id: 2645
      })
      
    
      this.add({
        label_eng: "February 1979: The Battles of Genji and Heike",
        id: 2646
      })
      
    
      this.add({
        label_eng: "February 1979: The Love Suicide of Tokubei and Ofusa",
        id: 2647
      })
      
    
      this.add({
        label_eng: "April 1979: The Love of Osome and Hisamatsu",
        id: 2648
      })
      
    
      this.add({
        label_eng: "April 1979: The Tycoon's Exploit",
        id: 2649
      })
      
    
      this.add({
        label_eng: "April 1979: Kiichi's Book of Strategy",
        id: 2650
      })
      
    
      this.add({
        label_eng: "April 1979: The Love Suicides at Amijima",
        id: 2651
      })
      
    
      this.add({
        label_eng: "April 1979: The Ogress of Mt. Oe",
        id: 2652
      })
      
    
      this.add({
        label_eng: "May 1979: The Battle of Ichinotani",
        id: 2653
      })
      
    
      this.add({
        label_eng: "May 1979: The Crossroads of Gappo",
        id: 2654
      })
      
    
      this.add({
        label_eng: "May 1979: The Mask Peddler",
        id: 2655
      })
      
    
      this.add({
        label_eng: "May 1979: Yoshitsune and a Thousand Cherry Trees",
        id: 2656
      })
      
    
      this.add({
        label_eng: "May 1979: The Love Suicide of Hambei and Ochiyo",
        id: 2657
      })
      
    
      this.add({
        label_eng: "July 1979: The Three Generations of Kamakura Shoguns",
        id: 2658
      })
      
    
      this.add({
        label_eng: "July 1979: A Tragic Love Triangle",
        id: 2659
      })
      
    
      this.add({
        label_eng: "July 1979: The Story of the Morning Glory",
        id: 2660
      })
      
    
      this.add({
        label_eng: "September 1979: The Miracle at the Tsubosaka Kannon Temple",
        id: 2661
      })
      
    
      this.add({
        label_eng: "September 1979: Kiichi's Book of Strategy",
        id: 2662
      })
      
    
      this.add({
        label_eng: "September 1979: The Love of Ohan and Choemon",
        id: 2663
      })
      
    
      this.add({
        label_eng: "October 1979: Masakiyo's Loyalty",
        id: 2664
      })
      
    
      this.add({
        label_eng: "October 1979: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2665
      })
      
    
      this.add({
        label_eng: "October 1979: The Vendetta in Iga",
        id: 2666
      })
      
    
      this.add({
        label_eng: "October 1979: A Supplement to Chushingura",
        id: 2667
      })
      
    
      this.add({
        label_eng: "December 1979: The Teachings for Women",
        id: 2668
      })
      
    
      this.add({
        label_eng: "January 1980: The Battle of Ichinotani",
        id: 2669
      })
      
    
      this.add({
        label_eng: "January 1980: The Romance in the Gay Quarters",
        id: 2670
      })
      
    
      this.add({
        label_eng: "January 1980: The Trouble in the Date Household",
        id: 2671
      })
      
    
      this.add({
        label_eng: "January 1980: The Story of Matsukaza and Murasame",
        id: 2672
      })
      
    
      this.add({
        label_eng: "February 1980: The Battle of Coxinga",
        id: 2673
      })
      
    
      this.add({
        label_eng: "February 1980: The Go Game Strategy",
        id: 2674
      })
      
    
      this.add({
        label_eng: "February 1980: The Two-Colored Reins",
        id: 2675
      })
      
    
      this.add({
        label_eng: "February 1980: The Love Suicide at Amijima",
        id: 2676
      })
      
    
      this.add({
        label_eng: "April 1980: The Battle of Kawanakajima",
        id: 2677
      })
      
    
      this.add({
        label_eng: "April 1980: The Miracle at the Tsubosaka Kannon Temple",
        id: 2678
      })
      
    
      this.add({
        label_eng: "April 1980: Yoshitsune and a Thousand Cherry Trees",
        id: 2679
      })
      
    
      this.add({
        label_eng: "April 1980: The Old Tale of Kusunoki",
        id: 2680
      })
      
    
      this.add({
        label_eng: "April 1980: The Cherry Trees of the Imperial Palace",
        id: 2681
      })
      
    
      this.add({
        label_eng: "April 1980: The Cherry Trees Along the Hidaka River",
        id: 2682
      })
      
    
      this.add({
        label_eng: "May 1980: The Dance of Sambaso",
        id: 2683
      })
      
    
      this.add({
        label_eng: "May 1980: The Battle of Dannoura",
        id: 2684
      })
      
    
      this.add({
        label_eng: "May 1980: The Bloodshed at Ise",
        id: 2685
      })
      
    
      this.add({
        label_eng: "May 1980: The Cherry Trees Along the Hidaka River",
        id: 2686
      })
      
    
      this.add({
        label_eng: "May 1980: The Stuttering Painter",
        id: 2687
      })
      
    
      this.add({
        label_eng: "May 1980: The Summer Festival at Naniwa",
        id: 2688
      })
      
    
      this.add({
        label_eng: "July 1980 Tour: The Battle of Ichinotani",
        id: 2689
      })
      
    
      this.add({
        label_eng: "July 1980 Tour: The Amorous Courier on the Yamato Highway",
        id: 2690
      })
      
    
      this.add({
        label_eng: "July 1980: The Dances of the Four Seasons",
        id: 2691
      })
      
    
      this.add({
        label_eng: "July 1980: The Nunobiki Waterfall",
        id: 2692
      })
      
    
      this.add({
        label_eng: "July 1980: The Bloodshed at Ise",
        id: 2693
      })
      
    
      this.add({
        label_eng: "July 1980: The Infant Pilgrim",
        id: 2694
      })
      
    
      this.add({
        label_eng: "July 1980: The Courier for Hell",
        id: 2695
      })
      
    
      this.add({
        label_eng: "September 1980: The New Usuyuki Story",
        id: 2696
      })
      
    
      this.add({
        label_eng: "September 1980: The Crossroads of Gappo",
        id: 2697
      })
      
    
      this.add({
        label_eng: "September 1980: The Love of Osome and Hisamatsu",
        id: 2698
      })
      
    
      this.add({
        label_eng: "September 1980: The Dumpling Peddlers",
        id: 2699
      })
      
    
      this.add({
        label_eng: "October 1980: The League of the 47 Ronin",
        id: 2700
      })
      
    
      this.add({
        label_eng: "October 1980: The Vendetta in Iga",
        id: 2701
      })
      
    
      this.add({
        label_eng: "October 1980: The Love-Inspired Murder",
        id: 2702
      })
      
    
      this.add({
        label_eng: "October 1980: The New Usuyuki Story",
        id: 2703
      })
      
    
      this.add({
        label_eng: "December 1980 Bunraku Kanshō Kyōshitsu: The Love of Osome and Hisamatsu",
        id: 2704
      })
      
    
      this.add({
        label_eng: "January 1981: The Dance of Sambaso",
        id: 2705
      })
      
    
      this.add({
        label_eng: "January 1981: The Battle of Sakamoto Castle",
        id: 2706
      })
      
    
      this.add({
        label_eng: "January 1981: The Two-Colored Reins",
        id: 2707
      })
      
    
      this.add({
        label_eng: "January 1981: The Twenty-Four Dutiful Sons",
        id: 2708
      })
      
    
      this.add({
        label_eng: "January 1981: The Battle of Dannoura",
        id: 2709
      })
      
    
      this.add({
        label_eng: "February 1981: The Courier for Hell",
        id: 2710
      })
      
    
      this.add({
        label_eng: "February 1981: The Love Suicides at Sonezaki",
        id: 2711
      })
      
    
      this.add({
        label_eng: "February 1981: The Love Suicides at Amijima",
        id: 2712
      })
      
    
      this.add({
        label_eng: "April 1981: The Gion Festival",
        id: 2713
      })
      
    
      this.add({
        label_eng: "April 1981: A Chushingura's Subplot",
        id: 2714
      })
      
    
      this.add({
        label_eng: "April 1981: Kokaji the Swordsmith",
        id: 2715
      })
      
    
      this.add({
        label_eng: "April 1981: The Color Prints of Kagamiyama",
        id: 2716
      })
      
    
      this.add({
        label_eng: "April 1981: Tragedy on a Snowy Night",
        id: 2717
      })
      
    
      this.add({
        label_eng: "May 1981: Yoshitsune and a Thousand Cherry Trees",
        id: 2718
      })
      
    
      this.add({
        label_eng: "July 1981: The Battles of Genji and Heike",
        id: 2719
      })
      
    
      this.add({
        label_eng: "July 1981: The Shank's Mare along the Tokaido Highway",
        id: 2720
      })
      
    
      this.add({
        label_eng: "July 1981: The Young Cherry Tree",
        id: 2721
      })
      
    
      this.add({
        label_eng: "July 1981: The Love of Ohan and Choemon",
        id: 2722
      })
      
    
      this.add({
        label_eng: "September 1981: The Nunobiki Waterfall",
        id: 2723
      })
      
    
      this.add({
        label_eng: "September 1981: The Two Butterflies",
        id: 2724
      })
      
    
      this.add({
        label_eng: "September 1981: The Maple Viewing Party",
        id: 2725
      })
      
    
      this.add({
        label_eng: "September 1981: Monkey",
        id: 2726
      })
      
    
      this.add({
        label_eng: "November 1981: Kiichi's Book of Strategy",
        id: 2727
      })
      
    
      this.add({
        label_eng: "November 1981: The Inauspicious Sword",
        id: 2728
      })
      
    
      this.add({
        label_eng: "November 1981: The Sumo Wrestler's Banner",
        id: 2729
      })
      
    
      this.add({
        label_eng: "November 1981: The Shiraishi Story",
        id: 2730
      })
      
    
      this.add({
        label_eng: "November 1981: The Love Suicide of Hambei and Ochiyo",
        id: 2731
      })
      
    
      this.add({
        label_eng: "December 1981: The League of the 47 Ronin",
        id: 2732
      })
      
    
      this.add({
        label_eng: "January 1982: The Mask Peddler",
        id: 2733
      })
      
    
      this.add({
        label_eng: "January 1982: The Tycoon's Exploit",
        id: 2734
      })
      
    
      this.add({
        label_eng: "January 1982: The Amorous Courier on the Yamato Highway",
        id: 2735
      })
      
    
      this.add({
        label_eng: "January 1982: The Crossroads of Gappo",
        id: 2736
      })
      
    
      this.add({
        label_eng: "January 1982: The Love Suicides at Sonezaki",
        id: 2737
      })
      
    
      this.add({
        label_eng: "January 1982: Announcement on the assumption of his new name, Bungo Yoshida V, by Kotama Yoshida",
        id: 2738
      })
      
    
      this.add({
        label_eng: "February 1982: The Woman-Killer and the Hell of Oil",
        id: 2739
      })
      
    
      this.add({
        label_eng: "February 1982: The Battle of Coxinga",
        id: 2740
      })
      
    
      this.add({
        label_eng: "February 1982: The Love Suicide of Hambei and Ochiyo",
        id: 2741
      })
      
    
      this.add({
        label_eng: "March 1982: The Tycoon's Exploit",
        id: 2742
      })
      
    
      this.add({
        label_eng: "March 1982: A Tragic Love Triangle",
        id: 2743
      })
      
    
      this.add({
        label_eng: "March 1982: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2744
      })
      
    
      this.add({
        label_eng: "March 1982: The Love Suicides at Sonezaki",
        id: 2745
      })
      
    
      this.add({
        label_eng: "March 1982: The Ogress of Mt. Oe",
        id: 2746
      })
      
    
      this.add({
        label_eng: "April 1982: The Teachings for Women",
        id: 2747
      })
      
    
      this.add({
        label_eng: "May 1982: The Color Prints of Kagamiyama",
        id: 2748
      })
      
    
      this.add({
        label_eng: "May 1982: The Gion Festival",
        id: 2749
      })
      
    
      this.add({
        label_eng: "July 1982: The Vow of Rokusuke",
        id: 2750
      })
      
    
      this.add({
        label_eng: "July 1982: The Summer Festival at Naniwa",
        id: 2751
      })
      
    
      this.add({
        label_eng: "July 1982: The Cruel Employer",
        id: 2752
      })
      
    
      this.add({
        label_eng: "September 1982: The Nine-Tailed Fox",
        id: 2753
      })
      
    
      this.add({
        label_eng: "September 1982: Oshun and Dembei",
        id: 2754
      })
      
    
      this.add({
        label_eng: "October 1982: The Adachi Plain in Oshu",
        id: 2755
      })
      
    
      this.add({
        label_eng: "December 1982: The Adachi Plain in Oshu",
        id: 2756
      })
      
    
      this.add({
        label_eng: "January 1983: Sugawara's Secrets of Calligraphy",
        id: 2757
      })
      
    
      this.add({
        label_eng: "February 1983: The Drum of the Waves of Horikawa",
        id: 2758
      })
      
    
      this.add({
        label_eng: "February 1983: The Ancient Calendar",
        id: 2759
      })
      
    
      this.add({
        label_eng: "February 1983: Gonza the Lancer",
        id: 2760
      })
      
    
      this.add({
        label_eng: "April 1983: The Story of Priest Roben",
        id: 2761
      })
      
    
      this.add({
        label_eng: "April 1983: Oshun and Dembei",
        id: 2762
      })
      
    
      this.add({
        label_eng: "April 1983: Yoshitsune and a Thousand Cherry Trees",
        id: 2763
      })
      
    
      this.add({
        label_eng: "April 1983: The Love of Osome and Hisamatsu",
        id: 2764
      })
      
    
      this.add({
        label_eng: "April 1983: The Twenty-Four Dutiful Sons",
        id: 2765
      })
      
    
      this.add({
        label_eng: "May 1983: The Battle of Sakamoto Castle",
        id: 2766
      })
      
    
      this.add({
        label_eng: "May 1983: The Three Generations of Kamakura Shoguns",
        id: 2767
      })
      
    
      this.add({
        label_eng: "July 1983: Gonza the Lancer",
        id: 2768
      })
      
    
      this.add({
        label_eng: "July 1983: The Dances of the Four Seasons",
        id: 2769
      })
      
    
      this.add({
        label_eng: "July 1983: The Miracle at the Tsubosaka Kannon Temple",
        id: 2770
      })
      
    
      this.add({
        label_eng: "July 1983: The Subscription List",
        id: 2771
      })
      
    
      this.add({
        label_eng: "September 1983: Kagekiyo and His Daughter",
        id: 2772
      })
      
    
      this.add({
        label_eng: "September 1983: The Story of the Morning Glory",
        id: 2773
      })
      
    
      this.add({
        label_eng: "September 1983: A Tragic Love Triangle",
        id: 2774
      })
      
    
      this.add({
        label_eng: "September 1983: The Dumpling Peddlers",
        id: 2775
      })
      
    
      this.add({
        label_eng: "September 1983: The Priest Karukaya and the Souvenir of Tsukushi",
        id: 2776
      })
      
    
      this.add({
        label_eng: "October 1983: Kagekiyo and His Daughter",
        id: 2777
      })
      
    
      this.add({
        label_eng: "October 1983: A Tragic Love Triangle",
        id: 2778
      })
      
    
      this.add({
        label_eng: "October 1983: The Maple Viewing Party",
        id: 2779
      })
      
    
      this.add({
        label_eng: "October 1983: Two Girl Attendants to a Courtesan",
        id: 2780
      })
      
    
      this.add({
        label_eng: "October 1983: The Love Suicides at Amijima",
        id: 2781
      })
      
    
      this.add({
        label_eng: "December 1983: The Twenty-Four Dutiful Sons",
        id: 2782
      })
      
    
      this.add({
        label_eng: "January 1984: The Battle of Ichinotani",
        id: 2783
      })
      
    
      this.add({
        label_eng: "April 1984: The Dance of Sambaso",
        id: 2784
      })
      
    
      this.add({
        label_eng: "April 1984: Yoshitsune and a Thousand Cherry Trees",
        id: 2785
      })
      
    
      this.add({
        label_eng: "May 1984: The Dance of Sambaso",
        id: 2786
      })
      
    
      this.add({
        label_eng: "May 1984: Sugawara's Secrets of Calligraphy",
        id: 2787
      })
      
    
      this.add({
        label_eng: "June 1984: The Story of the Morning Glory",
        id: 2788
      })
      
    
      this.add({
        label_eng: "July 1984: The Battle of Coxinga",
        id: 2789
      })
      
    
      this.add({
        label_eng: "July 1984: The Stuttering Painter",
        id: 2790
      })
      
    
      this.add({
        label_eng: "July 1984: The Love Suicides at Sonezaki",
        id: 2791
      })
      
    
      this.add({
        label_eng: "September 1984: The White Fox of Shinoda",
        id: 2792
      })
      
    
      this.add({
        label_eng: "September 1984: Akogi Bay in Ise Province",
        id: 2793
      })
      
    
      this.add({
        label_eng: "September 1984: The Murder in Revenge",
        id: 2794
      })
      
    
      this.add({
        label_eng: "September 1984: The Story of Monsters",
        id: 2795
      })
      
    
      this.add({
        label_eng: "October 1984: The Amorous Courier on the Yamato Highway",
        id: 2796
      })
      
    
      this.add({
        label_eng: "October 1984: Sugawara's Secrets of Calligraphy",
        id: 2797
      })
      
    
      this.add({
        label_eng: "October 1984: The Priest in Exile",
        id: 2798
      })
      
    
      this.add({
        label_eng: "October 1984: Yoshitsune and a Thousand Cherry Trees",
        id: 2799
      })
      
    
      this.add({
        label_eng: "November 1984: The Vendetta in Iga",
        id: 2800
      })
      
    
      this.add({
        label_eng: "November 1984: The Love of Osome and Hisamatsu",
        id: 2801
      })
      
    
      this.add({
        label_eng: "November 1984: The Bridal Journey",
        id: 2802
      })
      
    
      this.add({
        label_eng: "December 1984: The Love of Osome and Hisamatsu",
        id: 2803
      })
      
    
      this.add({
        label_eng: "December 1984: The New Barrier of Ataka",
        id: 2804
      })
      
    
      this.add({
        label_eng: "December 1979 Bunraku Kanshō Kyōshitsu: Sugawara's Secrets of Calligraphy",
        id: 2805
      })
      
    
      this.add({
        label_eng: "January 1985: Fishing for Wives",
        id: 2806
      })
      
    
      this.add({
        label_eng: "February 1985: The Courier for Hell",
        id: 2807
      })
      
    
      this.add({
        label_eng: "February 1985: The Double Suicide at Ikudama",
        id: 2808
      })
      
    
      this.add({
        label_eng: "February 1985: The Love Suicide of Hambei and Ochiyo",
        id: 2809
      })
      
    
      this.add({
        label_eng: "April 1985: The Celebration of Housing Starts",
        id: 2810
      })
      
    
      this.add({
        label_eng: "April 1985: The Battles of Genji and Heike",
        id: 2811
      })
      
    
      this.add({
        label_eng: "April 1985: The Love Suicide at Amijima",
        id: 2812
      })
      
    
      this.add({
        label_eng: "April 1985: The Cherry Trees of the Imperial Palace",
        id: 2813
      })
      
    
      this.add({
        label_eng: "April 1985: The Battle of Dannoura",
        id: 2814
      })
      
    
      this.add({
        label_eng: "April 1985: The Tragedy of Love in Error",
        id: 2815
      })
      
    
      this.add({
        label_eng: "May 1985: The Celebration of Housing Starts",
        id: 2816
      })
      
    
      this.add({
        label_eng: "May 1985: The Pregnant Mountain Ogress (Heroine)",
        id: 2817
      })
      
    
      this.add({
        label_eng: "May 1985: The Battles of Genji and Heike",
        id: 2818
      })
      
    
      this.add({
        label_eng: "May 1985: Fishing for Wives",
        id: 2819
      })
      
    
      this.add({
        label_eng: "May 1985: The Tycoon's Exploit",
        id: 2820
      })
      
    
      this.add({
        label_eng: "May 1985: The Love-Inspired Murder",
        id: 2821
      })
      
    
      this.add({
        label_eng: "May 1985: The Battle of Dannoura",
        id: 2822
      })
      
    
      this.add({
        label_eng: "June 1985: Two Girl Attendants to a Courtesan",
        id: 2823
      })
      
    
      this.add({
        label_eng: "June 1985: Sugawara's Secrets of Calligraphy",
        id: 2824
      })
      
    
      this.add({
        label_eng: "June 1985: The Infant Pilgrim",
        id: 2825
      })
      
    
      this.add({
        label_eng: "June 1985: The Ogress of Mt. Oe",
        id: 2826
      })
      
    
      this.add({
        label_eng: "July 1985: The Summer Festival at Naniwa",
        id: 2827
      })
      
    
      this.add({
        label_eng: "July 1985: The Drum of the Waves of Horikawa",
        id: 2828
      })
      
    
      this.add({
        label_eng: "July 1985: The Vegetable Farm",
        id: 2829
      })
      
    
      this.add({
        label_eng: "August 1985: The Nine-Tailed Fox",
        id: 2830
      })
      
    
      this.add({
        label_eng: "August 1985: The Two Butterflies",
        id: 2831
      })
      
    
      this.add({
        label_eng: "August 1985: The Nunobiki Waterfall",
        id: 2832
      })
      
    
      this.add({
        label_eng: "August 1985: The Ridge Pole of the Sanjusangendo Temple",
        id: 2833
      })
      
    
      this.add({
        label_eng: "August 1985: The Butterfly Couple in the Other World",
        id: 2834
      })
      
    
      this.add({
        label_eng: "September 1985: Monkey",
        id: 2835
      })
      
    
      this.add({
        label_eng: "September 1985: A Supplement to Chushingura",
        id: 2836
      })
      
    
      this.add({
        label_eng: "September 1985: The Two Butterflies",
        id: 2837
      })
      
    
      this.add({
        label_eng: "November 1985: The Tycoon's Exploit",
        id: 2838
      })
      
    
      this.add({
        label_eng: "November 1985: The Hunter and the Female Fox",
        id: 2839
      })
      
    
      this.add({
        label_eng: "November 1985: The Love of Ohan and Choemon",
        id: 2840
      })
      
    
      this.add({
        label_eng: "November 1985: The Cherry Blossoms of the Dojoji Temple",
        id: 2841
      })
      
    
      this.add({
        label_eng: "November 1985: The Imprisoned Warrior",
        id: 2842
      })
      
    
      this.add({
        label_eng: "December 1985: Two Girl Attendants to a Courtesan",
        id: 2843
      })
      
    
      this.add({
        label_eng: "December 1985: The Battle of Ichinotani",
        id: 2844
      })
      
    
      this.add({
        label_eng: "December 1985 Bunraku Kanshō Kyōshitsu: The Miracle at the Tsubosaka Kannon Temple",
        id: 2845
      })
      
    
      this.add({
        label_eng: "January 1986: The Seven Gods of Fortune",
        id: 2846
      })
      
    
      this.add({
        label_eng: "January 1986: The Romance in the Gay Quarters",
        id: 2847
      })
      
    
      this.add({
        label_eng: "January 1986: The Crossroads of Gappo",
        id: 2848
      })
      
    
      this.add({
        label_eng: "January 1986: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2849
      })
      
    
      this.add({
        label_eng: "January 1986: Kajiwara The Swordsman",
        id: 2850
      })
      
    
      this.add({
        label_eng: "January 1986: The Eternal Love of Onatsu and Seijurō",
        id: 2851
      })
      
    
      this.add({
        label_eng: "February 1986: The Priest in Exile",
        id: 2852
      })
      
    
      this.add({
        label_eng: "February 1986: The Imprisoned Warrior",
        id: 2853
      })
      
    
      this.add({
        label_eng: "February 1986: The Story of Matsukaza and Murasame",
        id: 2854
      })
      
    
      this.add({
        label_eng: "February 1986: The Battle of Coxinga",
        id: 2855
      })
      
    
      this.add({
        label_eng: "April 1986: The Teachings for Women",
        id: 2856
      })
      
    
      this.add({
        label_eng: "May 1986: The Vendetta in Iga",
        id: 2857
      })
      
    
      this.add({
        label_eng: "July 1986: The Nunobiki Waterfall",
        id: 2858
      })
      
    
      this.add({
        label_eng: "July 1986: The Sumo Wrestler's Banner",
        id: 2859
      })
      
    
      this.add({
        label_eng: "July 1986: The Yaguchi Ferry",
        id: 2860
      })
      
    
      this.add({
        label_eng: "July 1986: The Bloodshed at Ise",
        id: 2861
      })
      
    
      this.add({
        label_eng: "July 1986: The Butterfly Couple in the Other World",
        id: 2862
      })
      
    
      this.add({
        label_eng: "July 1986: Danshichi the Homeless",
        id: 2863
      })
      
    
      this.add({
        label_eng: "August 1986 National Bunraku Theatre, Osaka: Urikohime and Amanjaku",
        id: 2864
      })
      
    
      this.add({
        label_eng: "August 1986 National Bunraku Theatre, Osaka: Kiichi's Book of Strategy",
        id: 2865
      })
      
    
      this.add({
        label_eng: "August 1986 National Bunraku Theatre, Osaka: Sugawara's Secrets of Calligraphy",
        id: 2866
      })
      
    
      this.add({
        label_eng: "August 1986 National Bunraku Theatre, Osaka: The Fulling Block and the Bonfire",
        id: 2867
      })
      
    
      this.add({
        label_eng: "August 1986 National Bunraku Theatre, Osaka: The Greengrocer's Tragedy",
        id: 2868
      })
      
    
      this.add({
        label_eng: "August 1986 National Bunraku Theatre, Osaka: The Story of Shunkin",
        id: 2869
      })
      
    
      this.add({
        label_eng: "August 1986 National Theatre, Tokyo: The Teachings for Women",
        id: 2870
      })
      
    
      this.add({
        label_eng: "February 1984: The Love Suicides at Amijima",
        id: 2871
      })
      
    
      this.add({
        label_eng: "February 1984: The Love Suicides at Sonezaki",
        id: 2872
      })
      
    
      this.add({
        label_eng: "February 1984: The Woman-Killer and the Hell of Oil",
        id: 2873
      })
      
    
      this.add({
        label_eng: "October 1986: The Priest in Exile",
        id: 2874
      })
      
    
      this.add({
        label_eng: "October 1986: The Love Suicides at Amijima",
        id: 2875
      })
      
    
      this.add({
        label_eng: "October 1986: The Courier for Hell",
        id: 2876
      })
      
    
      this.add({
        label_eng: "January 1987: The Dance of Sambaso",
        id: 2877
      })
      
    
      this.add({
        label_eng: "January 1987: The Battle of Ichinotani",
        id: 2878
      })
      
    
      this.add({
        label_eng: "January 1987: The Love of Osome and Hisamatsu",
        id: 2879
      })
      
    
      this.add({
        label_eng: "January 1987: The Pregnant Mountain Ogress (Heroine)",
        id: 2880
      })
      
    
      this.add({
        label_eng: "January 1987: A Tragic Love Triangle",
        id: 2881
      })
      
    
      this.add({
        label_eng: "January 1987: The Dances of the Four Seasons",
        id: 2882
      })
      
    
      this.add({
        label_eng: "February 1987: The Ancient Calendar",
        id: 2883
      })
      
    
      this.add({
        label_eng: "February 1987: The Courtesan Yugiri",
        id: 2884
      })
      
    
      this.add({
        label_eng: "February 1987: The Love Suicides at Amijima",
        id: 2885
      })
      
    
      this.add({
        label_eng: "March 1987: The Miracle at the Tsubosaka Kannon Temple",
        id: 2886
      })
      
    
      this.add({
        label_eng: "March 1987: Kokaji the Swordsmith",
        id: 2887
      })
      
    
      this.add({
        label_eng: "March 1987: The Woman-Killer and the Hell of Oil",
        id: 2888
      })
      
    
      this.add({
        label_eng: "April 1987: The Tycoon's Exploit",
        id: 2889
      })
      
    
      this.add({
        label_eng: "June 1987 National Bunraku Theatre: The Love Suicides at Sonezaki",
        id: 2890
      })
      
    
      this.add({
        label_eng: "July 1987: The Tales of Ise",
        id: 2891
      })
      
    
      this.add({
        label_eng: "July 1987: Yoshitsune and a Thousand Cherry Trees",
        id: 2892
      })
      
    
      this.add({
        label_eng: "July 1987: The Summer Festival at Naniwa",
        id: 2893
      })
      
    
      this.add({
        label_eng: "July 1987: The New Barrier of Ataka",
        id: 2894
      })
      
    
      this.add({
        label_eng: "August 1987: Fishing for Wives",
        id: 2895
      })
      
    
      this.add({
        label_eng: "August 1987: The Maple Viewing Party",
        id: 2896
      })
      
    
      this.add({
        label_eng: "August 1987: Mt. Oeyama",
        id: 2897
      })
      
    
      this.add({
        label_eng: "August 1987: Madame Butterfly",
        id: 2898
      })
      
    
      this.add({
        label_eng: "August 1987: The Disinherited Son",
        id: 2899
      })
      
    
      this.add({
        label_eng: "September 1987: The Tales of Ise",
        id: 2900
      })
      
    
      this.add({
        label_eng: "September 1987: The Summer Festival at Naniwa",
        id: 2901
      })
      
    
      this.add({
        label_eng: "September 1987: The Battle of Sakamoto Castle",
        id: 2902
      })
      
    
      this.add({
        label_eng: "September 1987: A Tragic Love Triangle",
        id: 2903
      })
      
    
      this.add({
        label_eng: "September 1987: The Maple Viewing Party",
        id: 2904
      })
      
    
      this.add({
        label_eng: "November 1987: The Battle of Sakamoto Castle",
        id: 2905
      })
      
    
      this.add({
        label_eng: "November 1987: The Two-Colored Reins",
        id: 2906
      })
      
    
      this.add({
        label_eng: "November 1987: The Love Suicide of Hambei and Ochiyo",
        id: 2907
      })
      
    
      this.add({
        label_eng: "December 1987 Bunraku Kanshō Kyōshitsu: The Love of Osome and Hisamatsu",
        id: 2908
      })
      
    
      this.add({
        label_eng: "December 1987: Kiichi's Book of Strategy",
        id: 2909
      })
      
    
      this.add({
        label_eng: "December 1987: Oshun and Dembei",
        id: 2910
      })
      
    
      this.add({
        label_eng: "January 1988: The Seven Gods of Fortune",
        id: 2911
      })
      
    
      this.add({
        label_eng: "January 1988: The Vow of Rokusuke",
        id: 2912
      })
      
    
      this.add({
        label_eng: "January 1988: Two Girl Attendants to a Courtesan",
        id: 2913
      })
      
    
      this.add({
        label_eng: "January 1988: The Story of Priest Roben",
        id: 2914
      })
      
    
      this.add({
        label_eng: "January 1988: The Ridge Pole of the Sanjusangendo Temple",
        id: 2915
      })
      
    
      this.add({
        label_eng: "February 1988: The Courier for Hell",
        id: 2916
      })
      
    
      this.add({
        label_eng: "February 1988: The Love Suicides at Sonezaki",
        id: 2917
      })
      
    
      this.add({
        label_eng: "February 1988: The Twins and the Sumida River",
        id: 2918
      })
      
    
      this.add({
        label_eng: "March 1988: The Cherry Trees of the Imperial Palace",
        id: 2919
      })
      
    
      this.add({
        label_eng: "March 1988: The Infant Pilgrim",
        id: 2920
      })
      
    
      this.add({
        label_eng: "March 1988: The Cherry Trees Along the Hidaka River",
        id: 2921
      })
      
    
      this.add({
        label_eng: "March 1988: The Cruel Employer",
        id: 2922
      })
      
    
      this.add({
        label_eng: "March 1988: The Trouble in the Date Household",
        id: 2923
      })
      
    
      this.add({
        label_eng: "March 1988: The Happy-Go-Lucky Palanquin Bearers",
        id: 2924
      })
      
    
      this.add({
        label_eng: "April 1988: The Priest Karukaya and the Souvenir of Tsukushi",
        id: 2925
      })
      
    
      this.add({
        label_eng: "April 1988: Announcement of the assumption of his new stage name, Datedayū Takemoto V, by Datejidayū Takemoto",
        id: 2926
      })
      
    
      this.add({
        label_eng: "April 1988: The Stuttering Painter",
        id: 2927
      })
      
    
      this.add({
        label_eng: "April 1988: The Lion Dance",
        id: 2928
      })
      
    
      this.add({
        label_eng: "April 1988: The Twenty-Four Dutiful Sons",
        id: 2929
      })
      
    
      this.add({
        label_eng: "May 1988: The Cherry Trees of the Imperial Palace",
        id: 2930
      })
      
    
      this.add({
        label_eng: "May 1988: The Stuttering Painter",
        id: 2931
      })
      
    
      this.add({
        label_eng: "May 1988: The Ogress of Mt. Oe",
        id: 2932
      })
      
    
      this.add({
        label_eng: "May 1988: The Twenty-Four Dutiful Sons",
        id: 2933
      })
      
    
      this.add({
        label_eng: "July 1988: The Shiraishi Story",
        id: 2934
      })
      
    
      this.add({
        label_eng: "July 1988: The Shank's Mare along the Tokaido Highway",
        id: 2935
      })
      
    
      this.add({
        label_eng: "July 1988: Kokaji the Swordsmith",
        id: 2936
      })
      
    
      this.add({
        label_eng: "July 1988: The Story of Kasane",
        id: 2937
      })
      
    
      this.add({
        label_eng: "August 1988: Pilgrimage to the West",
        id: 2938
      })
      
    
      this.add({
        label_eng: "August 1988: Ohan",
        id: 2939
      })
      
    
      this.add({
        label_eng: "August 1988: The Dancing Mushrooms",
        id: 2940
      })
      
    
      this.add({
        label_eng: "November 1988: The Battles of Genji and Heike",
        id: 2941
      })
      
    
      this.add({
        label_eng: "December 1988: The League of the 47 Ronin",
        id: 2942
      })
      
    
      this.add({
        label_eng: "January 1989: The Dance of Sambaso",
        id: 2943
      })
      
    
      this.add({
        label_eng: "January 1989: The Battle of Kawanakajima",
        id: 2944
      })
      
    
      this.add({
        label_eng: "January 1989: The Miracle at the Tsubosaka Kannon Temple",
        id: 2945
      })
      
    
      this.add({
        label_eng: "January 1989: The Red-Hot Love of the Greengrocer's Daughter",
        id: 2946
      })
      
    
      this.add({
        label_eng: "January 1989: The Young Cherry Tree",
        id: 2947
      })
      
    
      this.add({
        label_eng: "January 1989: The Amorous Courier",
        id: 2948
      })
      
    
      this.add({
        label_eng: "January 1989: The Feudal Lord in Asama",
        id: 2949
      })
      
    
      this.add({
        label_eng: "February 1989: The Drum of the Waves of Horikawa",
        id: 2950
      })
      
    
      this.add({
        label_eng: "February 1989: The Two-Colored Reins",
        id: 2951
      })
      
    
      this.add({
        label_eng: "February 1989: The Love Suicide at Amijima",
        id: 2952
      })
      
    
      this.add({
        label_eng: "March 1989: Yoshitsune and a Thousand Cherry Trees",
        id: 2953
      })
      
    
      this.add({
        label_eng: "March 1989: The Love of Ohan and Choemon",
        id: 2954
      })
      
    
      this.add({
        label_eng: "April 1989: Sugawara's Secrets of Calligraphy",
        id: 2955
      })
      
    
      this.add({
        label_eng: "August 1989: Subjugation of Ogres on Mt. Oe",
        id: 2956
      })
      
    
      this.add({
        label_eng: "August 1989: The Red Battle Surcoat",
        id: 2957
      })
      
    
      this.add({
        label_eng: "August 1989: The Rat's Romance",
        id: 2958
      })
      
    
      this.add({
        label_eng: "September 1989: The Two Butterflies",
        id: 2959
      })
      
    
      this.add({
        label_eng: "September 1989: The Love-Inspired Murder",
        id: 2960
      })
      
    
      this.add({
        label_eng: "September 1989: The Herculean Woman",
        id: 2961
      })
      
    
      this.add({
        label_eng: "November 1989: The Two Butterflies",
        id: 2962
      })
      
    
      this.add({
        label_eng: "November 1989: The Woman-Killer and the Hell of Oil",
        id: 2963
      })
      
    
      this.add({
        label_eng: "November 1989: The Story of Matsukaza and Murasame",
        id: 2964
      })
      
    
      this.add({
        label_eng: "December 1989 : Yoshitsune and a Thousand Cherry Trees",
        id: 2965
      })
      
    
      this.add({
        label_eng: "December 1989 : The Love of Ohan and Choemon",
        id: 2966
      })
      
    
      this.add({
        label_eng: "December 1989 Bunraku Kanshō Kyōshitsu: The Priest in Exile",
        id: 2967
      })
      
    
      this.add({
        label_eng: "January 1990: The Seven Gods of Fortune",
        id: 2968
      })
      
    
      this.add({
        label_eng: "January 1990: Kagekiyo and His Daughter",
        id: 2969
      })
      
    
      this.add({
        label_eng: "January 1990: The Romance in the Gay Quarters",
        id: 2970
      })
      
    
      this.add({
        label_eng: "January 1990: The Gion Festival",
        id: 2971
      })
      
    
      this.add({
        label_eng: "January 1990: The Love-Inspired Murder",
        id: 2972
      })
      
    
      this.add({
        label_eng: "January 1990: The Dumpling Peddlers",
        id: 2973
      })
      
    
      this.add({
        label_eng: "July 1990: The Nunobiki Waterfall",
        id: 2974
      })
      
    
      this.add({
        label_eng: "July 1990: The Bloodshed at Ise",
        id: 2975
      })
      
    
      this.add({
        label_eng: "July 1990: The Subscription List",
        id: 2976
      })
      
    
      this.add({
        label_eng: "October 1991: The Dance of Sambaso",
        id: 2977
      })
      
    
      this.add({
        label_eng: "October 1991: The Vendetta in Iga",
        id: 2978
      })
      
    
      this.add({
        label_eng: "October 1991: The Trouble in the Date Household",
        id: 2979
      })
      
    
      this.add({
        label_eng: "October 1991: The Faithful Wife",
        id: 2980
      })
      
    
      this.add({
        label_eng: "October 1991: The Teachings for Women",
        id: 2981
      })
      
    
      this.add({
        label_eng: "February 1991: The Vendetta by a Samurai in Rags",
        id: 2982
      })
      
    
      this.add({
        label_eng: "February 1991: Gonza the Lancer",
        id: 2983
      })
      
    
      this.add({
        label_eng: "February 1991: The Vendetta in Iga",
        id: 2984
      })
      
    
      this.add({
        label_eng: "April 1991: The Old Tale of Kusunoki",
        id: 2985
      })
      
    
      this.add({
        label_eng: "April 1991: A Tragic Love Triangle",
        id: 2986
      })
      
    
      this.add({
        label_eng: "April 1991: The Cherry Trees Along the Hidaka River",
        id: 2987
      })
      
    
      this.add({
        label_eng: "April 1991: The New Usuyuki Story",
        id: 2988
      })
      
    
      this.add({
        label_eng: "January 1992: The Pines on Mount Hibari",
        id: 2989
      })
      
    
      this.add({
        label_eng: "January 1992: The Love of Osome and Hisamatsu",
        id: 2990
      })
      
    
      this.add({
        label_eng: "January 1992: The Cherry Trees of the Imperial Palace",
        id: 2991
      })
      
    
      this.add({
        label_eng: "January 1992: Oshun and Dembei",
        id: 2992
      })
      
    
      this.add({
        label_eng: "January 1992: The Happy-Go-Lucky Palanquin Bearers",
        id: 2993
      })
      
    
      this.add({
        label_eng: "January 1992: The Dances of the Four Seasons",
        id: 2994
      })
      
    
      this.add({
        label_eng: "May 1991: The Enticed High Priest",
        id: 2995
      })
      
    
      this.add({
        label_eng: "May 1991: The Nine-Tailed Fox",
        id: 2996
      })
      
    
      this.add({
        label_eng: "May 1991: The Miracle at the Tsubosaka Kannon Temple",
        id: 2997
      })
      
    
      this.add({
        label_eng: "May 1991: The New Usuyuki Story",
        id: 2998
      })
      
    
      this.add({
        label_eng: "July 1977 Tour: Sugawara's Secrets of Calligraphy",
        id: 2999
      })
      
    
      this.add({
        label_eng: "July 1977 Tour: The Infant Pilgrim",
        id: 3000
      })
      
    
      this.add({
        label_eng: "December 1978 Bunraku Kanshō Kyōshitsu: The Priest in Exile",
        id: 3001
      })
      
    
      this.add({
        label_eng: "December 1977 Bunraku Kanshō Kyōshitsu: The Vendetta in Iga",
        id: 3002
      })
      
    
      this.add({
        label_eng: "September 1979: Masakiyo's Loyalty",
        id: 3003
      })
      
    
      this.add({
        label_eng: "May 1980: Annoucement of Jūzō Tsuruzawa's retirement",
        id: 3004
      })
      
    
      this.add({
        label_eng: "February 1982: Announcement on the assumption of his new name, Bungo Yoshida V, by Kotama Yoshida",
        id: 3005
      })
      
    
      this.add({
        label_eng: "December 1983 Bunraku Kanshō Kyōshitsu: The Courier for Hell",
        id: 3006
      })
      
    
      this.add({
        label_eng: "December 1984 Bunraku Kanshō Kyōshitsu: The Priest in Exile",
        id: 3007
      })
      
    
      this.add({
        label_eng: "November 1971: Announcement of Takemoto Aioidayū III's retirement and the assumption of his new name, Takemoto Aioidayū IV', by Aikodayū Takemoto",
        id: 3008
      })
      
    
      this.add({
        label_eng: "December 1980: The Tycoon's Exploit",
        id: 3009
      })
      
    
      this.add({
        label_eng: "December 1980: The Dances of the Four Seasons",
        id: 3010
      })
      
    
      this.add({
        label_eng: "July 1983: The Three Generations of Kamakura Shoguns",
        id: 3011
      })
      
    
      this.add({
        label_eng: "November 1977: The League of the 47 Ronin",
        id: 3012
      })
      
    
      this.add({
        label_eng: "March 1990: The Stuttering Painter",
        id: 3013
      })
      
    
      this.add({
        label_eng: "March 1990: The Love of Osome and Hisamatsu",
        id: 3014
      })
      
    
      this.add({
        label_eng: "March 1990: Two Girl Attendants to a Courtesan",
        id: 3015
      })
      
    
      this.add({
        label_eng: "March 1990: Sugawara's Secrets of Calligraphy",
        id: 3016
      })
      
    
      this.add({
        label_eng: "October 1971: Announcement of Takemoto Aioidayū III's retirement and the assumption of his new name, Takemoto Aioidayū IV', by Aikodayū Takemoto",
        id: 3017
      })
      
    
      this.add({
        label_eng: "April 1985: Announcement of the assumption of his new stage name, Sumitayū Takemoto VII, by Mojitayuū Takemoto",
        id: 3018
      })
      
    
      this.add({
        label_eng: "May 1985: Announcement of the assumption of his new stage name, Sumitayū Takemoto VII, by Mojitayuū Takemoto",
        id: 3019
      })
      
    
      this.add({
        label_eng: "April 1987: Announcement of the assumption of his new name, Kizaemon Nozawa III, by Katsuhei Nozawa",
        id: 3020
      })
      
    
      this.add({
        label_eng: "February 1990: The Love of Osome and Hisamatsu",
        id: 3021
      })
      
    
      this.add({
        label_eng: "February 1990: The Love Suicide of Hambei and Ochiyo",
        id: 3022
      })
      
    
      this.add({
        label_eng: "February 1997 Kioi Hall: The Twenty-Four Dutiful Sons",
        id: 3023
      })
      
    
      this.add({
        label_eng: "June 1984 Bunraku Kanshō Kyōshitsu: The Priest in Exile",
        id: 3024
      })
      
    
      this.add({
        label_eng: "June 1987 Harajuku Bunraku: The Love Suicides at Sonezaki",
        id: 3025
      })
      
    
      this.add({
        label_eng: "May 1988 Harajuku Bunraku: Yoshitsune and a Thousand Cherry Trees",
        id: 3026
      })
      
    
      this.add({
        label_eng: "December 1988 Bunraku Kanshō Kyōshitsu: The Miracle at the Tsubosaka Kannon Temple",
        id: 3027
      })
      
    
      this.add({
        label_eng: "January 1973: Announcement on the change of puppeteer Monya Kiritake's name to Tamamatsu Yoshida III",
        id: 3028
      })
      
    
      this.add({
        label_eng: "February 1973: Announcement on the change of puppeteer Monya Kiritake's name to Tamamatsu Yoshida III",
        id: 3029
      })
      
    
      this.add({
        label_eng: "April 1974 Asahiza: Two Girl Attendants to a Courtesan",
        id: 3030
      })
      
    
      this.add({
        label_eng: "July 1989: The Enticed High Priest",
        id: 3031
      })
      
    
      this.add({
        label_eng: "July 1989: Oshun and Dembei",
        id: 3032
      })
      
    
      this.add({
        label_eng: "July 1989: The Story of the Morning Glory",
        id: 3033
      })
      
    
      this.add({
        label_eng: "February 1990: Oshun and Dembei",
        id: 3034
      })
      
    
      this.add({
        label_eng: "April 1990: The Celebration of Housing Starts",
        id: 3035
      })
      
    
      this.add({
        label_eng: "April 1990: The Color Prints of Kagamiyama",
        id: 3036
      })
      
    
      this.add({
        label_eng: "April 1990: The Lion Dance",
        id: 3037
      })
      
    
      this.add({
        label_eng: "April 1990: Yoshitsune and a Thousand Cherry Trees",
        id: 3038
      })
      
    
      this.add({
        label_eng: "May 1990: The Color Prints of Kagamiyama",
        id: 3039
      })
      
    
      this.add({
        label_eng: "May 1990: The New Barrier of Ataka",
        id: 3040
      })
      
    
      this.add({
        label_eng: "May 1990: The Old Tale of Kusunoki",
        id: 3041
      })
      
    
      this.add({
        label_eng: "May 1990: The Story of the Morning Glory",
        id: 3042
      })
      
    
      this.add({
        label_eng: "July 1990: The Disinherited Son",
        id: 3043
      })
      
    
      this.add({
        label_eng: "August 1990: Stone Flower",
        id: 3044
      })
      
    
      this.add({
        label_eng: "August 1990: Fishing for Wives",
        id: 3045
      })
      
    
      this.add({
        label_eng: "August 1990: The Love Suicides at Sonezaki",
        id: 3046
      })
      
    
      this.add({
        label_eng: "September 1990: The Adachi Plain in Oshu",
        id: 3047
      })
      
    
      this.add({
        label_eng: "November 1990: The Pregnant Mountain Ogress (Heroine)",
        id: 3048
      })
      
    
      this.add({
        label_eng: "November 1990: Gonza the Lancer",
        id: 3049
      })
      
    
      this.add({
        label_eng: "November 1990: The Adachi Plain in Oshu",
        id: 3050
      })
      
    
      this.add({
        label_eng: "December 1990: The Seven Gods of Fortune",
        id: 3051
      })
      
    
      this.add({
        label_eng: "December 1990: The Trouble in the Date Household",
        id: 3052
      })
      
    
      this.add({
        label_eng: "December 1990: The Amorous Courier",
        id: 3053
      })
      
    
      this.add({
        label_eng: "December 1990 Bunraku Kanshō Kyōshitsu: The Love of Osome and Hisamatsu",
        id: 3054
      })
      
    
      this.add({
        label_eng: "July 1991: The Three Generations of Kamakura Shoguns",
        id: 3055
      })
      
    
      this.add({
        label_eng: "July 1991: The Battle of Ichinotani",
        id: 3056
      })
      
    
      this.add({
        label_eng: "July 1991: The Grateful Cormorant",
        id: 3057
      })
      
    
      this.add({
        label_eng: "August 1991: Mt. Oeyama",
        id: 3058
      })
      
    
      this.add({
        label_eng: "August 1991: Urikohime and Amanjaku",
        id: 3059
      })
      
    
      this.add({
        label_eng: "August 1991: The Shank's Mare along the Tokaido Highway",
        id: 3060
      })
      
    
      this.add({
        label_eng: "August 1991: The Courier for Hell",
        id: 3061
      })
      
    
      this.add({
        label_eng: "September 1991: Yoshitsune and a Thousand Cherry Trees",
        id: 3062
      })
      
    
      this.add({
        label_eng: "November 1991: Kiichi's Book of Strategy",
        id: 3063
      })
      
    
      this.add({
        label_eng: "November 1991: The Ancient Calendar",
        id: 3064
      })
      
    
      this.add({
        label_eng: "November 1991: The Maple Viewing Party",
        id: 3065
      })
      
    
      this.add({
        label_eng: "December 1991: The Crossroads of Gappo",
        id: 3066
      })
      
    
      this.add({
        label_eng: "December 1991: The Pines on Mount Hibari",
        id: 3067
      })
      
    
      this.add({
        label_eng: "December 1991: The Dumpling Peddlers",
        id: 3068
      })
      
    
      this.add({
        label_eng: "December 1991 Bunraku Kanshō Kyōshitsu: The Amorous Courier",
        id: 3069
      })
      
    
      this.add({
        label_eng: "April 1992: The Vendetta in Iga",
        id: 3070
      })
      
    
      this.add({
        label_eng: "May 1992: The Story of Priest Roben",
        id: 3071
      })
      
    
      this.add({
        label_eng: "May 1992: The Love of Osome and Hisamatsu",
        id: 3072
      })
      
    
      this.add({
        label_eng: "May 1992: The Battle of Ichinotani",
        id: 3073
      })
      
    
      this.add({
        label_eng: "May 1992: A Tragic Love Triangle",
        id: 3074
      })
      
    
      this.add({
        label_eng: "May 1992: The Butterfly Couple in the Other World",
        id: 3075
      })
      
    
      this.add({
        label_eng: "July 1992: The Ridge Pole of the Sanjusangendo Temple",
        id: 3076
      })
      
    
      this.add({
        label_eng: "July 1992: The Priest in Exile",
        id: 3077
      })
      
    
      this.add({
        label_eng: "July 1992: The Butterfly Couple in the Other World",
        id: 3078
      })
      
    
      this.add({
        label_eng: "July 1992: Masakiyo's Loyalty",
        id: 3079
      })
      
    
      this.add({
        label_eng: "July 1992: The Red-Hot Love of the Greengrocer's Daughter",
        id: 3080
      })
      
    
      this.add({
        label_eng: "August 1992: The Vegetable Farm",
        id: 3081
      })
      
    
      this.add({
        label_eng: "August 1992: The Hunter and the Female Fox",
        id: 3082
      })
      
    
      this.add({
        label_eng: "August 1992: The Ogress of Mt. Oe",
        id: 3083
      })
      
    
      this.add({
        label_eng: "August 1992: The Woman-Killer and the Hell of Oil",
        id: 3084
      })
      
    
      this.add({
        label_eng: "September 1992: The Twenty-Four Dutiful Sons",
        id: 3085
      })
      
    
      this.add({
        label_eng: "November 1992: The Love Suicides at Amijima",
        id: 3086
      })
      
    
      this.add({
        label_eng: "November 1992: Kokaji the Swordsmith",
        id: 3087
      })
      
    
      this.add({
        label_eng: "November 1992: The Stone Monument of Glory",
        id: 3088
      })
      
    
      this.add({
        label_eng: "November 1992: The Greengrocer's Tragedy",
        id: 3089
      })
      
    
      this.add({
        label_eng: "November 1992: The Sumo Wrestler's Banner",
        id: 3090
      })
      
    
      this.add({
        label_eng: "January 1993: The Dance of Sambaso",
        id: 3091
      })
      
    
      this.add({
        label_eng: "January 1993: The Crossroads of Gappo",
        id: 3092
      })
      
    
      this.add({
        label_eng: "January 1993: The Twenty-Four Dutiful Sons",
        id: 3093
      })
      
    
      this.add({
        label_eng: "January 1993: The Love of Osome and Hisamatsu",
        id: 3094
      })
      
    
      this.add({
        label_eng: "February 1993: The Courier for Hell",
        id: 3095
      })
      
    
      this.add({
        label_eng: "February 1993: The Double Suicide at Ikudama",
        id: 3096
      })
      
    
      this.add({
        label_eng: "February 1993: The Love Suicides at Amijima",
        id: 3097
      })
      
    
      this.add({
        label_eng: "April 1993: The Tycoon's Exploit",
        id: 3098
      })
      
    
      this.add({
        label_eng: "May 1993: The Tycoon's Exploit",
        id: 3099
      })
      
    
      this.add({
        label_eng: "August 1993: The Red Battle Surcoat",
        id: 3100
      })
      
    
      this.add({
        label_eng: "August 1993: Kiichi's Book of Strategy",
        id: 3101
      })
      
    
      this.add({
        label_eng: "August 1993: The Summer Festival at Naniwa",
        id: 3102
      })
      
    
      this.add({
        label_eng: "August 1993: The Love Suicide of Hambei and Ochiyo",
        id: 3103
      })
      
    
      this.add({
        label_eng: "September 1993: The Summer Festival at Naniwa",
        id: 3104
      })
      
    
      this.add({
        label_eng: "September 1993: The Priest Karukaya and the Souvenir of Tsukushi",
        id: 3105
      })
      
    
      this.add({
        label_eng: "September 1993: The Bloodshed at Ise",
        id: 3106
      })
      
    
      this.add({
        label_eng: "September 1993: Kiichi's Book of Strategy",
        id: 3107
      })
      
    
      this.add({
        label_eng: "November 1993: Sugawara's Secrets of Calligraphy",
        id: 3108
      })
      
    
      this.add({
        label_eng: "November 1993: The Inauspicious Sword",
        id: 3109
      })
      
    
      this.add({
        label_eng: "November 1993: Fishing for Wives",
        id: 3110
      })
      
    
      this.add({
        label_eng: "November 1993: Two Girl Attendants to a Courtesan",
        id: 3111
      })
      
    
      this.add({
        label_eng: "November 1993: The Loyal Samurai",
        id: 3112
      })
      
    
      this.add({
        label_eng: "November 1993: The Nunobiki Waterfall",
        id: 3113
      })
      
    
      this.add({
        label_eng: "December 1993: A Supplement to Chushingura",
        id: 3114
      })
      
    
      this.add({
        label_eng: "December 1993: The Nunobiki Waterfall",
        id: 3115
      })
      
    
      this.add({
        label_eng: "December 1993: The Mask Peddler",
        id: 3116
      })
      
    
      this.add({
        label_eng: "December 1993 Bunraku Kanshō Kyōshitsu: The Infant Pilgrim",
        id: 3117
      })
      
    
      this.add({
        label_eng: "January 1994: The Young Cherry Tree",
        id: 3118
      })
      
    
      this.add({
        label_eng: "January 1994: The Love Suicide at Amijima",
        id: 3119
      })
      
    
      this.add({
        label_eng: "January 1994: The Dances of the Four Seasons",
        id: 3120
      })
      
    
      this.add({
        label_eng: "January 1994: The Battle of Sakamoto Castle",
        id: 3121
      })
      
    
      this.add({
        label_eng: "January 1994: The Love of Ohan and Choemon",
        id: 3122
      })
      
    
      this.add({
        label_eng: "February 1994: The Ancient Calendar",
        id: 3123
      })
      
    
      this.add({
        label_eng: "February 1994: The Woman's Harakiri at Nagamachi",
        id: 3124
      })
      
    
      this.add({
        label_eng: "February 1994: The Love Suicide of Hambei and Ochiyo",
        id: 3125
      })
      
    
      this.add({
        label_eng: "April 1994: The Teachings for Women",
        id: 3126
      })
      
    
      this.add({
        label_eng: "April 1994: The Dance of Sambaso",
        id: 3127
      })
      
    
      this.add({
        label_eng: "August 1994: Pilgrimage to the West",
        id: 3128
      })
      
    
      this.add({
        label_eng: "August 1994: The Story of the Morning Glory",
        id: 3129
      })
      
    
      this.add({
        label_eng: "August 1994: The Love Suicides at Sonezaki",
        id: 3130
      })
      
    
      this.add({
        label_eng: "September 1994: The Shiraishi Story",
        id: 3131
      })
      
    
      this.add({
        label_eng: "September 1994: The Two Butterflies",
        id: 3132
      })
      
    
      this.add({
        label_eng: "September 1994: The Maple Viewing Party",
        id: 3133
      })
      
    
      this.add({
        label_eng: "September 1994: The White Fox of Shinoda",
        id: 3134
      })
      
    
      this.add({
        label_eng: "November 1994: The League of the 47 Ronin",
        id: 3135
      })
      
    
      this.add({
        label_eng: "December 1994: The Ridge Pole of the Sanjusangendo Temple",
        id: 3136
      })
      
    
      this.add({
        label_eng: "December 1994: The Love of Ohan and Choemon",
        id: 3137
      })
      
    
      this.add({
        label_eng: "December 1994: The Cherry Trees Along the Hidaka River",
        id: 3138
      })
      
    
      this.add({
        label_eng: "December 1994 Bunraku Kanshō Kyōshitsu: The Love of Osome and Hisamatsu",
        id: 3139
      })
      
    
      this.add({
        label_eng: "January 1995: The Celebration of Housing Starts",
        id: 3140
      })
      
    
      this.add({
        label_eng: "January 1995: The Nine-Tailed Fox",
        id: 3141
      })
      
    
      this.add({
        label_eng: "January 1995: The Miracle at the Tsubosaka Kannon Temple",
        id: 3142
      })
      
    
      this.add({
        label_eng: "January 1995: The Two-Colored Reins",
        id: 3143
      })
      
    
      this.add({
        label_eng: "January 1995: The Love-Inspired Murder",
        id: 3144
      })
      
    
      this.add({
        label_eng: "February 1995: The Priest in Exile",
        id: 3145
      })
      
    
      this.add({
        label_eng: "February 1995: The Love Suicides at Sonezaki",
        id: 3146
      })
      
    
      this.add({
        label_eng: "February 1995: The Drum of the Waves of Horikawa",
        id: 3147
      })
      
    
      this.add({
        label_eng: "April 1995: The Color Prints of Kagamiyama",
        id: 3148
      })
      
    
      this.add({
        label_eng: "April 1995: The Subscription List",
        id: 3149
      })
      
    
      this.add({
        label_eng: "April 1995: Yoshitsune and a Thousand Cherry Trees",
        id: 3150
      })
      
    
      this.add({
        label_eng: "May 1995: The Gion Festival",
        id: 3151
      })
      
    
      this.add({
        label_eng: "May 1995: The Story of the Morning Glory",
        id: 3152
      })
      
    
      this.add({
        label_eng: "May 1995: The New Barrier of Ataka",
        id: 3153
      })
      
    
      this.add({
        label_eng: "August 1995: The Story of Manda Ponds",
        id: 3154
      })
      
    
      this.add({
        label_eng: "August 1995: The Battles of Genji and Heike",
        id: 3155
      })
      
    
      this.add({
        label_eng: "August 1995: Gonza the Lancer",
        id: 3156
      })
      
    
      this.add({
        label_eng: "September 1995: Kiichi's Book of Strategy",
        id: 3157
      })
      
    
      this.add({
        label_eng: "September 1995: The Yaguchi Ferry",
        id: 3158
      })
      
    
      this.add({
        label_eng: "September 1995: The Murder in Revenge",
        id: 3159
      })
      
    
      this.add({
        label_eng: "September 1995: The Sumo Wrestler's Banner",
        id: 3160
      })
      
    
      this.add({
        label_eng: "January 1996: The Seven Gods of Fortune",
        id: 3161
      })
      
    
      this.add({
        label_eng: "January 1996: The Tycoon's Exploit",
        id: 3162
      })
      
    
      this.add({
        label_eng: "January 1996: Tragedy on a Snowy Night",
        id: 3163
      })
      
    
      this.add({
        label_eng: "January 1996: The Mask Peddler",
        id: 3164
      })
      
    
      this.add({
        label_eng: "January 1996: The Trouble in the Date Household",
        id: 3165
      })
      
    
      this.add({
        label_eng: "January 1996: The Amorous Courier",
        id: 3166
      })
      
    
      this.add({
        label_eng: "April 1996: The Gion Festival",
        id: 3167
      })
      
    
      this.add({
        label_eng: "April 1996: A Chushingura's Subplot",
        id: 3168
      })
      
    
      this.add({
        label_eng: "April 1996: The Cherry Trees Along the Hidaka River",
        id: 3169
      })
      
    
      this.add({
        label_eng: "April 1996: The White Fox of Shinoda",
        id: 3170
      })
      
    
      this.add({
        label_eng: "July 1996: Sasayaki no take",
        id: 3171
      })
      
    
      this.add({
        label_eng: "July 1996: The Monkey Dance",
        id: 3172
      })
      
    
      this.add({
        label_eng: "July 1996: The Bloodshed at Ise",
        id: 3173
      })
      
    
      this.add({
        label_eng: "July 1996: The Stuttering Painter",
        id: 3174
      })
      
    
      this.add({
        label_eng: "July 1996: The Courier for Hell",
        id: 3175
      })
      
    
      this.add({
        label_eng: "September 1996: Sugawara's Secrets of Calligraphy",
        id: 3176
      })
      
    
      this.add({
        label_eng: "January 1997: The Dance of Sambaso",
        id: 3177
      })
      
    
      this.add({
        label_eng: "January 1997: The Battle of Ichinotani",
        id: 3178
      })
      
    
      this.add({
        label_eng: "January 1997: The Miracle at the Tsubosaka Kannon Temple",
        id: 3179
      })
      
    
      this.add({
        label_eng: "January 1997: The Romance in the Gay Quarters",
        id: 3180
      })
      
    
      this.add({
        label_eng: "January 1997: The Crossroads of Gappo",
        id: 3181
      })
      
    
      this.add({
        label_eng: "January 1997: The Lion Dance",
        id: 3182
      })
      
    
      this.add({
        label_eng: "February 1997: The Pregnant Mountain Ogress (Heroine)",
        id: 3183
      })
      
    
      this.add({
        label_eng: "February 1997: The Love Suicide of Tokubei and Ofusa",
        id: 3184
      })
      
    
      this.add({
        label_eng: "February 1997: The Twins and the Sumida River",
        id: 3185
      })
      
    
      this.add({
        label_eng: "February 1997: The Woman-Killer and the Hell of Oil",
        id: 3186
      })
      
    
      this.add({
        label_eng: "April 1997: Yoshitsune and a Thousand Cherry Trees",
        id: 3187
      })
      
    
      this.add({
        label_eng: "September 1997: Kagekiyo and His Daughter",
        id: 3188
      })
      
    
      this.add({
        label_eng: "September 1997: The Infant Pilgrim",
        id: 3189
      })
      
    
      this.add({
        label_eng: "September 1997: Kokaji the Swordsmith",
        id: 3190
      })
      
    
      this.add({
        label_eng: "September 1997: The Stone Monument of Glory",
        id: 3191
      })
      
    
      this.add({
        label_eng: "September 1997: The Love of Ohan and Choemon",
        id: 3192
      })
      
    
      this.add({
        label_eng: "December 1997: The League of the 47 Ronin",
        id: 3193
      })
      
    
      this.add({
        label_eng: "December 1997 Bunraku Kanshō Kyōshitsu: The Priest in Exile",
        id: 3194
      })
      
    
      this.add({
        label_eng: "January 1998: The Cherry Trees of the Imperial Palace",
        id: 3195
      })
      
    
      this.add({
        label_eng: "January 1998: The Love of Osome and Hisamatsu",
        id: 3196
      })
      
    
      this.add({
        label_eng: "January 1998: Fishing for Wives",
        id: 3197
      })
      
    
      this.add({
        label_eng: "January 1998: The Story of Priest Roben",
        id: 3198
      })
      
    
      this.add({
        label_eng: "January 1998: The Twenty-Four Dutiful Sons",
        id: 3199
      })
      
    
      this.add({
        label_eng: "April 1998: The Celebration of Housing Starts",
        id: 3200
      })
      
    
      this.add({
        label_eng: "April 1998: The Love-Inspired Murder",
        id: 3201
      })
      
    
      this.add({
        label_eng: "April 1998: The Vendetta in Iga",
        id: 3202
      })
      
    
      this.add({
        label_eng: "April 1998: A Supplement to Chushingura",
        id: 3203
      })
      
    
      this.add({
        label_eng: "April 1998: The New Usuyuki Story",
        id: 3204
      })
      
    
      this.add({
        label_eng: "May 1998: The Vendetta in Iga",
        id: 3205
      })
      
    
      this.add({
        label_eng: "September 1998: The Battle of Dannoura",
        id: 3206
      })
      
    
      this.add({
        label_eng: "September 1998: The Crossroads of Gappo",
        id: 3207
      })
      
    
      this.add({
        label_eng: "September 1998: The Fulling Block and the Bonfire",
        id: 3208
      })
      
    
      this.add({
        label_eng: "September 1998: The Story of the Morning Glory",
        id: 3209
      })
      
    
      this.add({
        label_eng: "November 1998: The League of the 47 Ronin",
        id: 3210
      })
      
    
      this.add({
        label_eng: "December 1998: The League of the 47 Ronin",
        id: 3211
      })
      
    
      this.add({
        label_eng: "July 2000: Urikohime and Amanjaku",
        id: 3212
      })
      
    
      this.add({
        label_eng: "July 2000: The Shank's Mare along the Tokaido Highway",
        id: 3213
      })
      
    
      this.add({
        label_eng: "July 2000: The Three Generations of Kamakura Shoguns",
        id: 3214
      })
      
    
      this.add({
        label_eng: "July 2000: The Fulling Block and the Bonfire",
        id: 3215
      })
      
    
      this.add({
        label_eng: "July 2000: The Murder in Revenge",
        id: 3216
      })
      
    
      this.add({
        label_eng: "November 2000: The Two Butterflies",
        id: 3217
      })
      
    
      this.add({
        label_eng: "November 2000: The Love Suicides at Amijima",
        id: 3218
      })
      
    
      this.add({
        label_eng: "December 2000: The Vow of Rokusuke",
        id: 3219
      })
      
    
      this.add({
        label_eng: "December 2000 Bunraku Kanshō Kyōshitsu: Two Girl Attendants to a Courtesan",
        id: 3220
      })
      
    
      this.add({
        label_eng: "December 2000 Bunraku Kanshō Kyōshitsu: The Priest in Exile",
        id: 3221
      })
      
    
      this.add({
        label_eng: "April 2001: The Color Prints of Kagamiyama",
        id: 3222
      })
      
    
      this.add({
        label_eng: "April 2001: The White Fox of Shinoda",
        id: 3223
      })
      
    
      this.add({
        label_eng: "April 2001: The Crossroads of Gappo",
        id: 3224
      })
      
    
      this.add({
        label_eng: "April 2001: Yoshitsune and a Thousand Cherry Trees",
        id: 3225
      })
      
    
      this.add({
        label_eng: "July/August 2001: Mt. Oeyama",
        id: 3226
      })
      
    
      this.add({
        label_eng: "July/August 2001: The Rat's Romance",
        id: 3227
      })
      
    
      this.add({
        label_eng: "July/August 2001: The Benevolence of Saint Nichiren",
        id: 3228
      })
      
    
      this.add({
        label_eng: "July/August 2001: The Subscription List",
        id: 3229
      })
      
    
      this.add({
        label_eng: "July/August 2001: The Summer Festival at Naniwa",
        id: 3230
      })
      
    
      this.add({
        label_eng: "September 1972 Bunraku Kyōshitsu: The Amorous Courier",
        id: 3231
      })
      
    
      this.add({
        label_eng: "April 1979: Kojo (Formal Announcement)",
        id: 3232
      })
      
    
      this.add({
        label_eng: "May 1979: Announcement of the current performance being dedicated to the memory of Kanji Tsuruzawa VI",
        id: 3233
      })
      
    
      this.add({
        label_eng: "Marty Gross Film Production: The Courier for Hell",
        id: 3234
      })
      
    
      this.add({
        label_eng: "May 1988: Announcement of the assumption of his new stage name, Datedayū Takemoto V, by Datejidayū Takemoto",
        id: 3235
      })
      
    
      this.add({
        label_eng: "April 1989: Announcement of Koshijidayū Takemoto IV's retirement",
        id: 3236
      })
      
    
      this.add({
        label_eng: "January 1996: Announcement of the assumption of his new name, Tsunatayū Takemoto IX, by Oritayū Takemoto",
        id: 3237
      })
      
    
      this.add({
        label_eng: "May 1998: Announcement of the assumption of his new name, Kinshi Nozawa V, by Kinya Nozawa",
        id: 3238
      })
      
    
      this.add({
        label_eng: "September 1998: Announcement of the current performance being dedicated to the memory of Kanjūrō Kiritake II",
        id: 3239
      })
      
    
      this.add({
        label_eng: "September 1971 Bunraku Kanshō Kyōshitsu: The Love Suicides at Sonezaki",
        id: 3240
      })
      
    
      this.add({
        label_eng: "August 1970: The Subscription List",
        id: 3241
      })
      
    
      this.add({
        label_eng: "December 1997 Bunraku Kanshō Kyōshitsu: Kiichi's Book of Strategy",
        id: 3242
      })
      
    
      this.add({
        label_eng: "June 1986 Bunraku Kanshō Kyōshitsu: The Battle of Ichinotani",
        id: 3243
      })
      
    
      this.add({
        label_eng: "June 1986 Bunraku Kanshō Kyōshitsu: The Ridge Pole of the Sanjusangendo Temple",
        id: 3244
      })
      
    
      this.add({
        label_eng: "December 1986 Bunraku Kanshō Kyōshitsu: The Love Suicides at Sonezaki",
        id: 3245
      })
      
    
      this.add({
        label_eng: "May 1987: The Tycoon's Exploit",
        id: 3246
      })
      
    
      this.add({
        label_eng: "May 1987: Announcement of the assumption of his new name, Kizaemon Nozawa III, by Katsuhei Nozawa",
        id: 3247
      })
      
    
      this.add({
        label_eng: "March/April 1988 Tour: The Crossroads of Gappo",
        id: 3248
      })
      
    
      this.add({
        label_eng: "March/April 1988 Tour: The Battle of Dannoura",
        id: 3249
      })
      
    
      this.add({
        label_eng: "March/April 1988 Tour: The Love Suicides at Amijima",
        id: 3250
      })
      
    
      this.add({
        label_eng: "February 1996: The Battle of Coxinga",
        id: 3251
      })
      
    
      this.add({
        label_eng: "February 1996: The Battle of Kawanakajima",
        id: 3252
      })
      
    
      this.add({
        label_eng: "February 1996: The Love Suicides at Amijima",
        id: 3253
      })
      
    
      this.add({
        label_eng: "January 2002: The Celebration of Housing Starts",
        id: 3254
      })
      
    
      this.add({
        label_eng: "January 2002: The Battle of Coxinga",
        id: 3255
      })
      
    
      this.add({
        label_eng: "January 2002: Kagekiyo and His Daughter",
        id: 3256
      })
      
    
      this.add({
        label_eng: "January 2002: The Eternal Love of Onatsu and Seijurō",
        id: 3257
      })
      
    
      this.add({
        label_eng: "January 2002: The Red-Hot Love of the Greengrocer's Daughter",
        id: 3258
      })
      
    
      this.add({
        label_eng: "July/August 2002: The Tongue-Cut Sparrow",
        id: 3259
      })
      
    
      this.add({
        label_eng: "July/August 2002: Bunraku no ohanashi (Introduction to Bunraku)",
        id: 3260
      })
      
    
      this.add({
        label_eng: "July/August 2002: The Hunter and the Female Fox",
        id: 3261
      })
      
    
      this.add({
        label_eng: "July/August 2002: The Story of Kasane",
        id: 3262
      })
      
    
      this.add({
        label_eng: "July/August 2002: The Love Suicides at Sonezaki",
        id: 3263
      })
      
    
      this.add({
        label_eng: "April 2002: Sugawara's Secrets of Calligraphy",
        id: 3264
      })
      
    
      this.add({
        label_eng: "February 1996: Announcement of the assumption of his new name, Tsunatayū Takemoto IX, by Oritayū Takemoto",
        id: 3265
      })
      
    
      this.add({
        label_eng: "February 1973 Bunkyo Public Hall: Onna no heiwa (Lysistrata)",
        id: 3266
      })
      
    
      this.add({
        label_eng: "February 1973 Bunkyo Public Hall: The Battle of Dannoura",
        id: 3267
      })
      
    
      this.add({
        label_eng: "March 1996 Tour: The Cherry Trees of the Imperial Palace",
        id: 3268
      })
      
    
      this.add({
        label_eng: "March 1996 Tour: The Cherry Trees Along the Hidaka River",
        id: 3269
      })
      
    
      this.add({
        label_eng: "March 1996 Tour: Oshun and Dembei",
        id: 3270
      })
      
    
      this.add({
        label_eng: "March 1996 Tour: Yoshitsune and a Thousand Cherry Trees",
        id: 3271
      })
      
    
      this.add({
        label_eng: "October 1967: Fishing for Wives",
        id: 3272
      })
      
    
      this.add({
        label_eng: "October 1967: The Miracle at the Tsubosaka Kannon Temple",
        id: 3273
      })
      
    
      this.add({
        label_eng: "August 1970: The Two-Colored Reins",
        id: 3274
      })
      
    
      this.add({
        label_eng: "August 1970: The Woman-Killer and the Hell of Oil",
        id: 3275
      })
      
    
      this.add({
        label_eng: "December 1982: The Vendetta in Iga",
        id: 3276
      })
      
    
      this.add({
        label_eng: "May 2003: Announcement of the assumption of his new name, Kanjūrō Kiritake III, by Minotarō Yoshida",
        id: 3277
      })
      
    
      this.add({
        label_eng: "December 1992: The Battle of Coxinga",
        id: 3278
      })
      
    
      this.add({
        label_eng: "April 1970: Announcement on the assumption of his new stage name of Tsuruzawa Dōhachi II by Tokutarō Tsuruzawa",
        id: 3279
      })
      
    
      this.add({
        label_eng: "May 1970: Announcement on the assumption of his new stage name of Tsuruzawa Dōhachi II by Tokutarō Tsuruzawa",
        id: 3280
      })
      
    
      this.add({
        label_eng: "September 1969 Kōkōsei no tame no Bunraku Kyōshitsu: The Miracle at the Tsubosaka Kannon Temple",
        id: 3281
      })
      
    
      this.add({
        label_eng: "September 1971 Kōkōsei no tame no Bunraku Kyōshitsu: The Love Suicides at Sonezaki",
        id: 3282
      })
      
    
      this.add({
        label_eng: "November 1973 Kōkōsei no tame no Bunraku Kyōshitsu: The Ridge Pole of the Sanjusangendo Temple",
        id: 3283
      })
      
    
    // performers
    
      this.add({
        label_eng: "Takemoto Datejidayū (see also Takemoto Datetayū V)",
        label_ka: "竹本伊達路大夫",
        id: 3284
      })
      
    
      this.add({
        label_eng: "Takemoto Tsudayū IV",
        label_ka: "竹本津大夫 (四)",
        id: 3285
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Kanotarō",
        label_ka: "鶴澤叶太郎",
        id: 3286
      })
      
    
      this.add({
        label_eng: "Takezawa Danshichi (see also Takezawa Danjirō IV)",
        label_ka: "竹澤団七",
        id: 3287
      })
      
    
      this.add({
        label_eng: "Toyotake Matsukadayū",
        label_ka: "豊竹松香大夫",
        id: 3288
      })
      
    
      this.add({
        label_eng: "Takemoto Oritayū V (see also Takemoto Tsunatayū IX)",
        label_ka: "竹本織大夫 (五)",
        id: 3289
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Enjirō",
        label_ka: "鶴澤燕二郎",
        id: 3290
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Enza V",
        label_ka: "鶴澤燕三 (五)",
        id: 3291
      })
      
    
      this.add({
        label_eng: "Toyotake Sakitayū",
        label_ka: "豊竹咲大夫",
        id: 3292
      })
      
    
      this.add({
        label_eng: "Nozawa Katsushi (see also Toyozawa Tomisuke V)",
        label_ka: "野澤勝司",
        id: 3293
      })
      
    
      this.add({
        label_eng: "Yoshida Bunjaku",
        label_ka: "吉田文雀",
        id: 3294
      })
      
    
      this.add({
        label_eng: "Yoshida Bunshō",
        label_ka: "吉田文昇",
        id: 3295
      })
      
    
      this.add({
        label_eng: "Yoshida Minojirō",
        label_ka: "吉田蓑二郎",
        id: 3296
      })
      
    
      this.add({
        label_eng: "Kiritake Itchō",
        label_ka: "桐竹一暢",
        id: 3297
      })
      
    
      this.add({
        label_eng: "Yoshida Tamamatsu III (see also Kiritake Monya)",
        label_ka: "吉田玉松 (三)",
        id: 3298
      })
      
    
      this.add({
        label_eng: "Kiritake Kanjūrō II",
        label_ka: "桐竹勘十郎 (二)",
        id: 3299
      })
      
    
      this.add({
        label_eng: "Yoshida Minotarō (see also Kiritake Kanjūrō)",
        label_ka: "吉田蓑太郎",
        id: 3300
      })
      
    
      this.add({
        label_eng: "Yoshida Minosuke III",
        label_ka: "吉田蓑助 (三)",
        id: 3301
      })
      
    
      this.add({
        label_eng: "Yoshida Tamakō II",
        label_ka: "吉田玉幸 (二)",
        id: 3302
      })
      
    
      this.add({
        label_eng: "Toyomatsu Seijūrō IV",
        label_ka: "豊松清十郎 (四)",
        id: 3303
      })
      
    
      this.add({
        label_eng: "Yoshida Hidetama",
        label_ka: "吉田秀玉",
        id: 3304
      })
      
    
      this.add({
        label_eng: "Toyomatsu Seizaburō (see also Yoshida Seizaburō)",
        label_ka: "豊松清三郎",
        id: 3305
      })
      
    
      this.add({
        label_eng: "Yoshida Tamame",
        label_ka: "吉田玉女",
        id: 3306
      })
      
    
      this.add({
        label_eng: "Kiritake Kanju",
        label_ka: "桐竹勘寿",
        id: 3307
      })
      
    
      this.add({
        label_eng: "Kiritake Kamematsu IV",
        label_ka: "桐竹亀松 (四)",
        id: 3308
      })
      
    
      this.add({
        label_eng: "Yoshida Sakujūrō",
        label_ka: "吉田作十郎",
        id: 3309
      })
      
    
      this.add({
        label_eng: "Yoshida Tamaya (see also Yoshida Eikō)",
        label_ka: "吉田玉也",
        id: 3310
      })
      
    
      this.add({
        label_eng: "Yoshida Tamashi",
        label_ka: "吉田玉志",
        id: 3311
      })
      
    
      this.add({
        label_eng: "Toyotake Komatsudayū II",
        label_ka: "豊竹小松大夫 (二)",
        id: 3312
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seitomo II",
        label_ka: "鶴澤清友 (二)",
        id: 3313
      })
      
    
      this.add({
        label_eng: "Takemoto Koshijidayū IV",
        label_ka: "竹本越路大夫 (四)",
        id: 3314
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seiji",
        label_ka: "鶴澤清治",
        id: 3315
      })
      
    
      this.add({
        label_eng: "Takemoto Nanbudayū V",
        label_ka: "竹本南部大夫 (五)",
        id: 3316
      })
      
    
      this.add({
        label_eng: "Toyotake Tokutayū",
        label_ka: "豊竹十九大夫",
        id: 3317
      })
      
    
      this.add({
        label_eng: "Takemoto Tsukomadayū",
        label_ka: "竹本津駒大夫",
        id: 3318
      })
      
    
      this.add({
        label_eng: "Takemoto Tsumaidayū",
        label_ka: "竹本津梅大夫",
        id: 3319
      })
      
    
      this.add({
        label_eng: "Toyotake Rosetayū",
        label_ka: "豊竹呂勢大夫",
        id: 3320
      })
      
    
      this.add({
        label_eng: "Takemoto Orimidayū",
        label_ka: "竹本織美大夫",
        id: 3321
      })
      
    
      this.add({
        label_eng: "Takemoto Nantodayū",
        label_ka: "竹本南都大夫",
        id: 3322
      })
      
    
      this.add({
        label_eng: "Nozawa Kinshi IV",
        label_ka: "野澤錦糸 (四)",
        id: 3323
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Asazō V",
        label_ka: "鶴澤浅造 (五)",
        id: 3324
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Hachisuke",
        label_ka: "鶴澤八介",
        id: 3325
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seijirō V",
        label_ka: "鶴澤清二郎 (五)",
        id: 3326
      })
      
    
      this.add({
        label_eng: "Yoshida Tamao",
        label_ka: "吉田玉男",
        id: 3327
      })
      
    
      this.add({
        label_eng: "Yoshida Tamaki",
        label_ka: "吉田玉輝",
        id: 3328
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Jūzō IV",
        label_ka: "鶴澤重造 (四)",
        id: 3329
      })
      
    
      this.add({
        label_eng: "Kiritake Kanroku (see also Yoshida Kanroku)",
        label_ka: "桐竹勘緑",
        id: 3330
      })
      
    
      this.add({
        label_eng: "Yoshida Bungo V (see also Yoshida Kotama)",
        label_ka: "吉田文吾 (五)",
        id: 3331
      })
      
    
      this.add({
        label_eng: "Yoshida Kazuo",
        label_ka: "吉田和生",
        id: 3332
      })
      
    
      this.add({
        label_eng: "Toyomatsu Seinosuke (see also Yoshida Seinosuke)",
        label_ka: "豊松清之助",
        id: 3333
      })
      
    
      this.add({
        label_eng: "Kiritake Monju",
        label_ka: "桐竹紋寿",
        id: 3334
      })
      
    
      this.add({
        label_eng: "Takemoto Aioidayū IV (see also Takemoto Aikodayū I)",
        label_ka: "竹本相生大夫 (四)",
        id: 3335
      })
      
    
      this.add({
        label_eng: "Toyotake Hanabusadayū III",
        label_ka: "豊竹英大夫 (三)",
        id: 3336
      })
      
    
      this.add({
        label_eng: "Takemoto Midoridayū",
        label_ka: "竹本緑大夫",
        id: 3337
      })
      
    
      this.add({
        label_eng: "Takemoto Takatayū",
        label_ka: "竹本貴大夫",
        id: 3338
      })
      
    
      this.add({
        label_eng: "Takemoto Miwatayū",
        label_ka: "竹本三輪大夫",
        id: 3339
      })
      
    
      this.add({
        label_eng: "Takemoto Tsukunidayū",
        label_ka: "竹本津国大夫",
        id: 3340
      })
      
    
      this.add({
        label_eng: "Takemoto Nanshidayū",
        label_ka: "竹本南司大夫",
        id: 3341
      })
      
    
      this.add({
        label_eng: "Takemoto Mojihisadayū",
        label_ka: "竹本文字久大夫",
        id: 3342
      })
      
    
      this.add({
        label_eng: "Nozawa Kin'ya (see also Nozawa Kinshi V)",
        label_ka: "野澤錦弥",
        id: 3343
      })
      
    
      this.add({
        label_eng: "Takemoto Chitosedayū",
        label_ka: "竹本千歳大夫",
        id: 3344
      })
      
    
      this.add({
        label_eng: "Toyotake Rodayū V",
        label_ka: "豊竹呂大夫 (五)",
        id: 3345
      })
      
    
      this.add({
        label_eng: "Takezawa Danji",
        label_ka: "竹沢団治",
        id: 3346
      })
      
    
      this.add({
        label_eng: "Takezawa Danroku VIII (see also Tsuruzawa Kanji VII)",
        label_ka: "竹沢団六 (八)",
        id: 3347
      })
      
    
      this.add({
        label_eng: "Takemoto Mojitayū IX (see also Takemoto Sumitayū VII)",
        label_ka: "竹本文字大夫 (九)",
        id: 3348
      })
      
    
      this.add({
        label_eng: "Nozawa Katsuhei II (see also Nozawa Kizaemon III)",
        label_ka: "野澤勝平 (二)",
        id: 3349
      })
      
    
      this.add({
        label_eng: "Toyotake Shimatayū VIII",
        label_ka: "豊竹嶋大夫 (八)",
        id: 3350
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seisuke",
        label_ka: "鶴澤清介",
        id: 3351
      })
      
    
      this.add({
        label_eng: "Yoshida Tamae",
        label_ka: "吉田玉英",
        id: 3352
      })
      
    
      this.add({
        label_eng: "Kiritake Kanshirō",
        label_ka: "桐竹勘士朗",
        id: 3353
      })
      
    
      this.add({
        label_eng: "Kiritake Kameji",
        label_ka: "桐竹亀次",
        id: 3354
      })
      
    
      this.add({
        label_eng: "Takemoto Mojiedayū",
        label_ka: "竹本文字栄大夫",
        id: 3355
      })
      
    
      this.add({
        label_eng: "Kiritake Kan'ya (see also Yoshida Kanya)",
        label_ka: "桐竹勘弥",
        id: 3356
      })
      
    
      this.add({
        label_eng: "Yoshida Kōsuke",
        label_ka: "吉田幸助",
        id: 3357
      })
      
    
      this.add({
        label_eng: "Yoshida Wakatama (see also Yoshida Bunshi)",
        label_ka: "吉田若玉",
        id: 3358
      })
      
    
      this.add({
        label_eng: "Toyozawa Tomisuke V (see also Nozawa Katsushi)",
        label_ka: "豊澤富助 (五)",
        id: 3359
      })
      
    
      this.add({
        label_eng: "Takezawa Dango",
        label_ka: "竹澤団吾",
        id: 3360
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Entarō",
        label_ka: "鶴澤燕太郎",
        id: 3361
      })
      
    
      this.add({
        label_eng: "Nozawa Kichinosuke (see also Takezawa Yasaburō)",
        label_ka: "野澤吉之助",
        id: 3362
      })
      
    
      this.add({
        label_eng: "Yoshida Kotama (see also Yoshida Bungo V)",
        label_ka: "吉田小玉",
        id: 3363
      })
      
    
      this.add({
        label_eng: "Nozawa Yoshinosuke",
        label_ka: "野澤吉之助",
        id: 3364
      })
      
    
      this.add({
        label_eng: "Nozawa Kichibei IX",
        label_ka: "野澤吉兵衛 (九)",
        id: 3365
      })
      
    
      this.add({
        label_eng: "Takemoto Nanjudayū",
        label_ka: "竹本南寿大夫",
        id: 3366
      })
      
    
      this.add({
        label_eng: "Yoshida Kazusuke",
        label_ka: "吉田和右",
        id: 3367
      })
      
    
      this.add({
        label_eng: "Yoshida Minoichirō",
        label_ka: "吉田蓑一郎",
        id: 3368
      })
      
    
      this.add({
        label_eng: "Toyomatsu Seigorō (see also Yoshida Seigorō)",
        label_ka: "豊松清五郎",
        id: 3369
      })
      
    
      this.add({
        label_eng: "Yoshida Fukumaru",
        label_ka: "吉田福丸",
        id: 3370
      })
      
    
      this.add({
        label_eng: "Takezawa Yasaburō (see also Nozawa Kichinosuke)",
        label_ka: "竹澤弥三郎",
        id: 3371
      })
      
    
      this.add({
        label_eng: "Yoshida Kan'ya (see also Kiritake Kanya)",
        label_ka: "吉田勘弥",
        id: 3372
      })
      
    
      this.add({
        label_eng: "Kiritake Ikka",
        label_ka: "桐竹一嘉",
        id: 3373
      })
      
    
      this.add({
        label_eng: "Nozawa Kizaemon II",
        label_ka: "野澤喜左衛門 (二)",
        id: 3374
      })
      
    
      this.add({
        label_eng: "Yoshida Tamagorō II",
        label_ka: "吉田玉五郎 (二)",
        id: 3375
      })
      
    
      this.add({
        label_eng: "Yoshida Kan'ichi (see also Kiritake Kanichi)",
        label_ka: "吉田勘市",
        id: 3376
      })
      
    
      this.add({
        label_eng: "Kiritake Ichisuke",
        label_ka: "桐竹一輔",
        id: 3377
      })
      
    
      this.add({
        label_eng: "Nozawa Kiichirō",
        label_ka: "野澤喜一朗",
        id: 3378
      })
      
    
      this.add({
        label_eng: "Takemoto Sumitayū VII (see also Takemoto Mojitayū IX)",
        label_ka: "竹本住大夫 (七)",
        id: 3379
      })
      
    
      this.add({
        label_eng: "Yoshida Tamashō",
        label_ka: "吉田玉昇",
        id: 3380
      })
      
    
      this.add({
        label_eng: "Takemoto Mojitodayū",
        label_ka: "竹本文字登大夫",
        id: 3381
      })
      
    
      this.add({
        label_eng: "Nozawa Matsuya",
        label_ka: "野澤松也",
        id: 3382
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Dōhachi II (see also Tsuruzawa Tokutarō)",
        label_ka: "鶴沢道八 (二)",
        id: 3383
      })
      
    
      this.add({
        label_eng: "Nozawa Katsutarō II",
        label_ka: "野澤勝太郎 (二)",
        id: 3384
      })
      
    
      this.add({
        label_eng: "Takezawa Danjirō IV (see also Takezawa Danshichi)",
        label_ka: "竹澤団二郎 (四)",
        id: 3385
      })
      
    
      this.add({
        label_eng: "Yoshida Hyōji",
        label_ka: "吉田兵次",
        id: 3386
      })
      
    
      this.add({
        label_eng: "Yoshida Eiza II",
        label_ka: "吉田栄三 (二)",
        id: 3387
      })
      
    
      this.add({
        label_eng: "Yoshida Minoshi",
        label_ka: "吉田蓑司",
        id: 3388
      })
      
    
      this.add({
        label_eng: "Takezawa Yashichi X",
        label_ka: "竹澤弥七 (十)",
        id: 3389
      })
      
    
      this.add({
        label_eng: "Yoshida Eikō (see also Yoshida Tamaya)",
        label_ka: "吉田栄光",
        id: 3390
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Kanji VI",
        label_ka: "鶴澤寛治 (六)",
        id: 3391
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Kanpei",
        label_ka: "鶴澤寛平",
        id: 3392
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Katsunosuke",
        label_ka: "鶴澤勝之輔",
        id: 3393
      })
      
    
      this.add({
        label_eng: "Nozawa Katsunosuke",
        label_ka: "野澤勝之輔",
        id: 3394
      })
      
    
      this.add({
        label_eng: "Takemoto Tosatayū VII (see also Takemoto Datedayū IV)",
        label_ka: "竹本土佐大夫 (七)",
        id: 3395
      })
      
    
      this.add({
        label_eng: "Sunodayū [family name unidentified]",
        label_ka: "すのだゆう",
        id: 3396
      })
      
    
      this.add({
        label_eng: "Nozawa Matsunosuke",
        label_ka: "野澤松之輔",
        id: 3397
      })
      
    
      this.add({
        label_eng: "Takemoto Datetayū IV (see also Takemoto Tosatayū VII)",
        label_ka: "竹本伊達大夫 (四)",
        id: 3398
      })
      
    
      this.add({
        label_eng: "Takemoto Tsunatayū VIII",
        label_ka: "竹本綱大夫 (八)",
        id: 3399
      })
      
    
      this.add({
        label_eng: "Kanshichi [family name unidentified]",
        label_ka: "かんしち",
        id: 3400
      })
      
    
      this.add({
        label_eng: "Takemoto Aioidayū III",
        label_ka: "竹本相生大夫 (三)",
        id: 3401
      })
      
    
      this.add({
        label_eng: "Kiritake Monjūrō II",
        label_ka: "桐竹紋十郎 (二)",
        id: 3402
      })
      
    
      this.add({
        label_eng: "Takemoto Shikidayū",
        label_ka: "竹本しき大夫",
        id: 3403
      })
      
    
      this.add({
        label_eng: "Nozawa Kizaemon III (see also Nozawa Katsuhei)",
        label_ka: "野澤喜左衛門 (三)",
        id: 3404
      })
      
    
      this.add({
        label_eng: "Takemoto Harukodayū III",
        label_ka: "竹本春子大夫 (三)",
        id: 3405
      })
      
    
      this.add({
        label_eng: "Takemoto Koharudayū",
        label_ka: "竹本小春大夫",
        id: 3406
      })
      
    
      this.add({
        label_eng: "Takemoto Aikodayū I (see also Takemoto Aioidayū IV)",
        label_ka: "竹本相子大夫 (一)",
        id: 3407
      })
      
    
      this.add({
        label_eng: "Kiritake Monya (see also Yoshida Tamamatsu III)",
        label_ka: "桐竹紋弥",
        id: 3408
      })
      
    
      this.add({
        label_eng: "Yoshida Tatsugorō V",
        label_ka: "吉田辰五郎 (五)",
        id: 3409
      })
      
    
      this.add({
        label_eng: "Takemoto Ōsumidayū V",
        label_ka: "竹本大隈太夫 (五)",
        id: 3410
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Tokutarō (see also Tsuruzawa Dōhachi II)",
        label_ka: "鶴沢徳太郎",
        id: 3411
      })
      
    
      this.add({
        label_eng: "Yoshida Junzō",
        label_ka: "吉田淳造",
        id: 3412
      })
      
    
      this.add({
        label_eng: "Yoshida Tsuneji",
        label_ka: "吉田常次",
        id: 3413
      })
      
    
      this.add({
        label_eng: "Yoshida Kikuichi",
        label_ka: "吉田菊一",
        id: 3414
      })
      
    
      this.add({
        label_eng: "Yoshida Tamanosuke",
        label_ka: "吉田玉之助",
        id: 3415
      })
      
    
      this.add({
        label_eng: "Takemoto Musashidayū",
        label_ka: "竹本武蔵大夫",
        id: 3416
      })
      
    
      this.add({
        label_eng: "Yoshida Shōjirō",
        label_ka: "吉田昇二郎",
        id: 3417
      })
      
    
      this.add({
        label_eng: "Kiritake Komon",
        label_ka: "桐竹小紋",
        id: 3418
      })
      
    
      this.add({
        label_eng: "Yoshida Kunihide",
        label_ka: "吉田国秀",
        id: 3419
      })
      
    
      this.add({
        label_eng: "Nozawa Kin'ichi",
        label_ka: "野澤錦市",
        id: 3420
      })
      
    
      this.add({
        label_eng: "Nozawa Katsuya",
        label_ka: "野澤勝矢",
        id: 3421
      })
      
    
      this.add({
        label_eng: "Nozawa Kikusaburō",
        label_ka: "野澤喜久三郎",
        id: 3422
      })
      
    
      this.add({
        label_eng: "Takemoto Orinodayū",
        label_ka: "竹本織の大夫",
        id: 3423
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seigo",
        label_ka: "鶴澤清吾",
        id: 3424
      })
      
    
      this.add({
        label_eng: "Yoshida Tamayo",
        label_ka: "吉田玉世",
        id: 3425
      })
      
    
      this.add({
        label_eng: "Yoshida Tamaka",
        label_ka: "吉田玉佳",
        id: 3426
      })
      
    
      this.add({
        label_eng: "Takemoto Tsunatayū IX (see also Takemoto Oritayū V)",
        label_ka: "竹本綱大夫 (九)",
        id: 3427
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seitarō",
        label_ka: "鶴澤清太郎",
        id: 3428
      })
      
    
      this.add({
        label_eng: "Kiritake Monwaka",
        label_ka: "桐竹紋若",
        id: 3429
      })
      
    
      this.add({
        label_eng: "Yoshida Bunshi (see also Yoshida Wakatama)",
        label_ka: "吉田文司",
        id: 3430
      })
      
    
      this.add({
        label_eng: "Takezawa Dan'ichi",
        label_ka: "竹澤団市",
        id: 3431
      })
      
    
      this.add({
        label_eng: "Yoshida Bunya",
        label_ka: "吉田文哉",
        id: 3432
      })
      
    
      this.add({
        label_eng: "Toyotake Shintayū",
        label_ka: "豊竹新大夫",
        id: 3433
      })
      
    
      this.add({
        label_eng: "Kiritake Monhide",
        label_ka: "桐竹紋秀",
        id: 3434
      })
      
    
      this.add({
        label_eng: "Yoshida Tamase",
        label_ka: "吉田玉勢",
        id: 3435
      })
      
    
      this.add({
        label_eng: "Yoshida Minoshirō",
        label_ka: "吉田簑紫郎",
        id: 3436
      })
      
    
      this.add({
        label_eng: "Toyotake Hajimedayū",
        label_ka: "豊竹始大夫",
        id: 3437
      })
      
    
      this.add({
        label_eng: "Toyotake Sakihodayū",
        label_ka: "豊竹咲甫大夫",
        id: 3438
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seishirō",
        label_ka: "鶴澤清志郎",
        id: 3439
      })
      
    
      this.add({
        label_eng: "Takezawa Sōsuke",
        label_ka: "竹澤宗助",
        id: 3440
      })
      
    
      this.add({
        label_eng: "Yoshida Tamaichirō",
        label_ka: "吉田玉一郎",
        id: 3441
      })
      
    
      this.add({
        label_eng: "Yoshida Kōji",
        label_ka: "吉田幸司",
        id: 3442
      })
      
    
      this.add({
        label_eng: "Yoshida Shōichi",
        label_ka: "吉田昇市",
        id: 3443
      })
      
    
      this.add({
        label_eng: "Yoshida Shōroku",
        label_ka: "吉田昇六",
        id: 3444
      })
      
    
      this.add({
        label_eng: "Toyotake Mutsumidayū",
        label_ka: "豊竹睦大夫",
        id: 3445
      })
      
    
      this.add({
        label_eng: "Toyotake Tsubasadayū",
        label_ka: "豊竹つばさ大夫",
        id: 3446
      })
      
    
      this.add({
        label_eng: "Toyotake Romotayū",
        label_ka: "豊竹呂茂大夫",
        id: 3447
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seiki",
        label_ka: "鶴澤清馗",
        id: 3448
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Seijō",
        label_ka: "鶴澤清じょう",
        id: 3449
      })
      
    
      this.add({
        label_eng: "Toyozawa Ryōichi",
        label_ka: "豊澤龍聿",
        id: 3450
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Kantarō",
        label_ka: "鶴澤寛太郎",
        id: 3451
      })
      
    
      this.add({
        label_eng: "Yoshida Tamashō",
        label_ka: "吉田玉翔",
        id: 3452
      })
      
    
      this.add({
        label_eng: "Yoshida Seizaburō (see also Toyomatsu Seizaburō)",
        label_ka: "吉田清三郎",
        id: 3453
      })
      
    
      this.add({
        label_eng: "Kiritake Kan'ichi (see also Yoshida Kanichi)",
        label_ka: "桐竹勘市",
        id: 3454
      })
      
    
      this.add({
        label_eng: "Yoshida Kanroku (see also Kiritake Kanroku)",
        label_ka: "吉田勘緑",
        id: 3455
      })
      
    
      this.add({
        label_eng: "Yoshida Seigorō (see also Toyomatsu Seigorō)",
        label_ka: "吉田清五郎",
        id: 3456
      })
      
    
      this.add({
        label_eng: "Yoshida Seinosuke (see also Toyomatsu Seinosuke)",
        label_ka: "吉田清之助",
        id: 3457
      })
      
    
      this.add({
        label_eng: "Takemoto Datetayū V (see also Takemoto Datejidayū)",
        label_ka: "竹本伊達大夫 (五)",
        id: 3458
      })
      
    
      this.add({
        label_eng: "Takemoto Aikodayū II",
        label_ka: "竹本相子大夫 (二)",
        id: 3459
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Kanji VII (See also Takezawa Danroku VIII)",
        label_ka: "鶴澤寛治 (七)",
        id: 3460
      })
      
    
      this.add({
        label_eng: "Yoshida Minotsugu",
        label_ka: "吉田簑次",
        id: 3461
      })
      
    
      this.add({
        label_eng: "Toyozawa Ryōji",
        label_ka: "豊澤龍爾",
        id: 3462
      })
      
    
      this.add({
        label_eng: "Yoshida Bungorō",
        label_ka: "吉田文五郎",
        id: 3463
      })
      
    
      this.add({
        label_eng: "Kiritake Kanjūrō III (see also Yoshida Minotarō)",
        label_ka: "桐竹勘十郎 (三)",
        id: 3464
      })
      
    
      this.add({
        label_eng: "Toyotake Yamashiro no Shōjō",
        label_ka: "豊竹山城少掾",
        id: 3465
      })
      
    
      this.add({
        label_eng: "Tsuruzawa Tōzō",
        label_ka: "鶴沢藤蔵",
        id: 3466
      })
      
    
      this.add({
        label_eng: "Nozawa Kinshi V (see also Nozawa Kin'ya)",
        label_ka: "野澤錦糸 (五)",
        id: 3467
      })
      
    
    // plays
    
      this.add({
        label_eng: "The Woman-Killer and the Hell of Oil",
        label_ka: "女殺油地獄",
        id: 3468
      })
      
    
      this.add({
        label_eng: "The Love Suicides at Amijima",
        label_ka: "心中天網島",
        id: 3469
      })
      
    
      this.add({
        label_eng: "The Love Suicides at Sonezaki",
        label_ka: "曽根崎心中",
        id: 3470
      })
      
    
      this.add({
        label_eng: "The Love Suicide of Hambei and Ochiyo",
        label_ka: "心中宵庚申",
        id: 3471
      })
      
    
      this.add({
        label_eng: "The Love of Osome and Hisamatsu",
        label_ka: "染模様妹背門松",
        id: 3472
      })
      
    
      this.add({
        label_eng: "Oshun and Dembei",
        label_ka: "近頃河原の達引",
        id: 3473
      })
      
    
      this.add({
        label_eng: "The Courier for Hell",
        label_ka: "冥途の飛脚",
        id: 3474
      })
      
    
      this.add({
        label_eng: "The Double Suicide at Ikudama",
        label_ka: "生玉心中",
        id: 3475
      })
      
    
      this.add({
        label_eng: "Urikohime and Amanjaku",
        label_ka: "瓜子姫とあまんじゃく",
        id: 3476
      })
      
    
      this.add({
        label_eng: "The Three Generations of Kamakura Shoguns",
        label_ka: "鎌倉三代記",
        id: 3477
      })
      
    
      this.add({
        label_eng: "The Fulling Block and the Bonfire",
        label_ka: "きぬたと大文字",
        id: 3478
      })
      
    
      this.add({
        label_eng: "The Murder in Revenge",
        label_ka: "国言詢音頭",
        id: 3479
      })
      
    
      this.add({
        label_eng: "Tragedy on a Snowy Night",
        label_ka: "明烏六花曙",
        id: 3480
      })
      
    
      this.add({
        label_eng: "The White Fox of Shinoda",
        label_ka: "芦屋道満大内鑑",
        id: 3481
      })
      
    
      this.add({
        label_eng: "The Tycoon's Exploit",
        label_ka: "絵本太功記絵本太功記",
        id: 3482
      })
      
    
      this.add({
        label_eng: "The Twins and the Sumida River",
        label_ka: "雙生隅田川",
        id: 3483
      })
      
    
      this.add({
        label_eng: "The Two Butterflies",
        label_ka: "双蝶々曲輪日記",
        id: 3484
      })
      
    
      this.add({
        label_eng: "The Gion Festival",
        label_ka: "祇園祭礼信仰記",
        id: 3485
      })
      
    
      this.add({
        label_eng: "A Chushingura's Subplot",
        label_ka: "義士銘々伝",
        id: 3486
      })
      
    
      this.add({
        label_eng: "The Maiden's Colorful Fan",
        label_ka: "極彩色娘扇",
        id: 3487
      })
      
    
      this.add({
        label_eng: "The Shiraishi Story",
        label_ka: "碁太平記白石噺",
        id: 3488
      })
      
    
      this.add({
        label_eng: "The Stone Monument of Glory",
        label_ka: "花上野誉碑",
        id: 3489
      })
      
    
      this.add({
        label_eng: "The Priest in Exile",
        label_ka: "平家女護島",
        id: 3490
      })
      
    
      this.add({
        label_eng: "The Cherry Trees Along the Hidaka River",
        label_ka: "日高川入相花王",
        id: 3491
      })
      
    
      this.add({
        label_eng: "The Battles of Genji and Heike",
        label_ka: "ひらかな盛衰記",
        id: 3492
      })
      
    
      this.add({
        label_eng: "The Twenty-Four Dutiful Sons",
        label_ka: "本朝廿四孝",
        id: 3493
      })
      
    
      this.add({
        label_eng: "The Drum of the Waves of Horikawa",
        label_ka: "堀川波の鼓",
        id: 3494
      })
      
    
      this.add({
        label_eng: "The Vendetta in Iga",
        label_ka: "伊賀越道中双六",
        id: 3495
      })
      
    
      this.add({
        label_eng: "The Color Prints of Kagamiyama",
        label_ka: "加賀見山旧錦絵",
        id: 3496
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 3497
      })
      
    
      this.add({
        label_eng: "The Love of Ohan and Choemon",
        label_ka: "桂川連理柵",
        id: 3498
      })
      
    
      this.add({
        label_eng: "The Infant Pilgrim",
        label_ka: "傾城阿波の鳴門",
        id: 3499
      })
      
    
      this.add({
        label_eng: "The Stuttering Painter",
        label_ka: "傾城反魂香",
        id: 3500
      })
      
    
      this.add({
        label_eng: "The Amorous Courier",
        label_ka: "傾城恋飛脚",
        id: 3501
      })
      
    
      this.add({
        label_eng: "Kiichi's Book of Strategy",
        label_ka: "鬼一法眼三略巻",
        id: 3502
      })
      
    
      this.add({
        label_eng: "The Love-Inspired Murder",
        label_ka: "恋娘昔八丈",
        id: 3503
      })
      
    
      this.add({
        label_eng: "The Two-Colored Reins",
        label_ka: "恋女房染分手綱",
        id: 3504
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 3505
      })
      
    
      this.add({
        label_eng: "The Battle of Coxinga",
        label_ka: "国性爺合戦",
        id: 3506
      })
      
    
      this.add({
        label_eng: "The Pregnant Mountain Ogress (Heroine)",
        label_ka: "嫗山姥",
        id: 3507
      })
      
    
      this.add({
        label_eng: "The Celebration of Housing Starts",
        label_ka: "寿柱立万歳",
        id: 3508
      })
      
    
      this.add({
        label_eng: "The Story of Manda Ponds",
        label_ka: "まんだが池物語",
        id: 3509
      })
      
    
      this.add({
        label_eng: "The Trouble in the Date Household",
        label_ka: "伽羅先代萩",
        id: 3510
      })
      
    
      this.add({
        label_eng: "The Mask Peddler",
        label_ka: "面売り",
        id: 3511
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 3512
      })
      
    
      this.add({
        label_eng: "Kagekiyo and His Daughter",
        label_ka: "嬢景清八嶋日記",
        id: 3513
      })
      
    
      this.add({
        label_eng: "The New Barrier of Ataka",
        label_ka: "鳴響安宅新関",
        id: 3514
      })
      
    
      this.add({
        label_eng: "The Lion Dance",
        label_ka: "連獅子",
        id: 3515
      })
      
    
      this.add({
        label_eng: "Pilgrimage to the West",
        label_ka: "西遊記",
        id: 3516
      })
      
    
      this.add({
        label_eng: "The Sumo Wrestler's Banner",
        label_ka: "関取千両幟",
        id: 3517
      })
      
    
      this.add({
        label_eng: "The Seven Gods of Fortune",
        label_ka: "七福神宝の入舩",
        id: 3518
      })
      
    
      this.add({
        label_eng: "The Love Suicide of Tokubei and Ofusa",
        label_ka: "心中重井筒",
        id: 3519
      })
      
    
      this.add({
        label_eng: "The Yaguchi Ferry",
        label_ka: "神霊矢口渡",
        id: 3520
      })
      
    
      this.add({
        label_eng: "The New Usuyuki Story",
        label_ka: "新薄雪物語",
        id: 3521
      })
      
    
      this.add({
        label_eng: "The Story of the Morning Glory",
        label_ka: "生写朝顔話",
        id: 3522
      })
      
    
      this.add({
        label_eng: "The Nine-Tailed Fox",
        label_ka: "玉藻前曦袂",
        id: 3523
      })
      
    
      this.add({
        label_eng: "The Shank's Mare along the Tokaido Highway",
        label_ka: "東海道中膝栗毛",
        id: 3524
      })
      
    
      this.add({
        label_eng: "The Miracle at the Tsubosaka Kannon Temple",
        label_ka: "壺坂観音霊験記",
        id: 3525
      })
      
    
      this.add({
        label_eng: "Gonza the Lancer",
        label_ka: "鑓の権三重帷子",
        id: 3526
      })
      
    
      this.add({
        label_eng: "Yoshitsune and a Thousand Cherry Trees",
        label_ka: "義経千本桜",
        id: 3527
      })
      
    
      this.add({
        label_eng: "The League of the 47 Ronin",
        label_ka: "仮名手本忠臣蔵",
        id: 3528
      })
      
    
      this.add({
        label_eng: "The Dances of the Four Seasons",
        label_ka: "花競四季寿",
        id: 3529
      })
      
    
      this.add({
        label_eng: "The Pines on Mount Hibari",
        label_ka: "ひばり山(鶊山)姫捨松",
        id: 3530
      })
      
    
      this.add({
        label_eng: "The Cherry Trees of the Imperial Palace",
        label_ka: "御所桜堀川夜討",
        id: 3531
      })
      
    
      this.add({
        label_eng: "The Ogress of Mt. Oe",
        label_ka: "増補大江山",
        id: 3532
      })
      
    
      this.add({
        label_eng: "The Story of Priest Roben",
        label_ka: "良弁杉由来",
        id: 3533
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 3534
      })
      
    
      this.add({
        label_eng: "The Summer Festival at Naniwa",
        label_ka: "夏祭浪花鑑",
        id: 3535
      })
      
    
      this.add({
        label_eng: "The Battle of Ichinotani",
        label_ka: "一谷嫩軍記",
        id: 3536
      })
      
    
      this.add({
        label_eng: "Sugawara's Secrets of Calligraphy",
        label_ka: "菅原伝授手習鑑",
        id: 3537
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers",
        label_ka: "音冴春臼月",
        id: 3538
      })
      
    
      this.add({
        label_eng: "The Crossroads of Gappo",
        label_ka: "摂州合邦辻",
        id: 3539
      })
      
    
      this.add({
        label_eng: "The Ancient Calendar",
        label_ka: "大経師昔暦",
        id: 3540
      })
      
    
      this.add({
        label_eng: "The Ridge Pole of the Sanjusangendo Temple",
        label_ka: "三十三間堂棟由来",
        id: 3541
      })
      
    
      this.add({
        label_eng: "The Vow of Rokusuke",
        label_ka: "彦山権現誓助剣",
        id: 3542
      })
      
    
      this.add({
        label_eng: "The Teachings for Women",
        label_ka: "妹背山婦女庭訓",
        id: 3543
      })
      
    
      this.add({
        label_eng: "The Love of Osome and Hisamatsu",
        label_ka: "新版歌祭文",
        id: 3544
      })
      
    
      this.add({
        label_eng: "Kumagai at the Fan Shop",
        label_ka: "須磨都源平躑躅",
        id: 3545
      })
      
    
      this.add({
        label_eng: "A Tragic Love Triangle",
        label_ka: "艶容女舞衣",
        id: 3546
      })
      
    
      this.add({
        label_eng: "The Battle of Dannoura",
        label_ka: "壇浦兜軍記",
        id: 3547
      })
      
    
      this.add({
        label_eng: "The Go Game Strategy",
        label_ka: "碁盤太平記碁盤太平記",
        id: 3548
      })
      
    
      this.add({
        label_eng: "More Worthy than Revenge",
        label_ka: "恩讐の彼方に",
        id: 3549
      })
      
    
      this.add({
        label_eng: "The Romance in the Gay Quarters",
        label_ka: "曲輪ぶんしょう",
        id: 3550
      })
      
    
      this.add({
        label_eng: "The Three Blind Masseurs",
        label_ka: "盲杖桜雪社",
        id: 3551
      })
      
    
      this.add({
        label_eng: "The Pines on Mount Hibari",
        label_ka: "ひばり山古跡松",
        id: 3552
      })
      
    
      this.add({
        label_eng: "The Battle of Sakamoto Castle",
        label_ka: "近江源氏先陣館",
        id: 3553
      })
      
    
      this.add({
        label_eng: "The Travel on Mt. Yoshino",
        label_ka: "道行初音旅",
        id: 3554
      })
      
    
      this.add({
        label_eng: "The Inauspicious Sword",
        label_ka: "桜鍔恨鮫鞘",
        id: 3555
      })
      
    
      this.add({
        label_eng: "The Nunobiki Waterfall",
        label_ka: "源平布引滝",
        id: 3556
      })
      
    
      this.add({
        label_eng: "The Vendetta by a Samurai in Rags",
        label_ka: "敵討襤褸錦敵討襤褸錦",
        id: 3557
      })
      
    
      this.add({
        label_eng: "The Old Tale of Kusunoki",
        label_ka: "楠昔噺",
        id: 3558
      })
      
    
      this.add({
        label_eng: "The Three Oddities",
        label_ka: "三人片輪",
        id: 3559
      })
      
    
      this.add({
        label_eng: "The Amorous Courier on the Yamato Highway",
        label_ka: "恋飛脚大和往来",
        id: 3560
      })
      
    
      this.add({
        label_eng: "A Supplement to Chushingura",
        label_ka: "増補忠臣蔵",
        id: 3561
      })
      
    
      this.add({
        label_eng: "Tametomo The Archer General",
        label_ka: "椿説弓張月",
        id: 3562
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 3563
      })
      
    
      this.add({
        label_eng: "The Loyal Samurai",
        label_ka: "太平記忠臣講釈",
        id: 3564
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 3565
      })
      
    
      this.add({
        label_eng: "The Rat's Romance",
        label_ka: "鼠のそうし",
        id: 3566
      })
      
    
      this.add({
        label_eng: "The Bloodshed at Ise",
        label_ka: "伊勢音頭恋寝刃",
        id: 3567
      })
      
    
      this.add({
        label_eng: "The Pine Tree on the River Bank",
        label_ka: "岸姫松轡鑑",
        id: 3568
      })
      
    
      this.add({
        label_eng: "The Battle of Kawanakajima",
        label_ka: "信州川中島合戦",
        id: 3569
      })
      
    
      this.add({
        label_eng: "The Fiftieth Death Anniversary",
        label_ka: "五十年忌歌念仏",
        id: 3570
      })
      
    
      this.add({
        label_eng: "The Faithful Wife",
        label_ka: "紙子仕立両面鑑",
        id: 3571
      })
      
    
      this.add({
        label_eng: "The Red-Hot Love of the Greengrocer's Daughter",
        label_ka: "伊達娘恋緋鹿子",
        id: 3572
      })
      
    
      this.add({
        label_eng: "The Adachi Plain in Oshu",
        label_ka: "奥州安達原",
        id: 3573
      })
      
    
      this.add({
        label_eng: "The Grateful Cormorant",
        label_ka: "水映縁友綱",
        id: 3574
      })
      
    
      this.add({
        label_eng: "Botan doro (The Peony Lantern)",
        label_ka: "牡丹燈籠",
        id: 3575
      })
      
    
      this.add({
        label_eng: "The Courtesan Yugiri",
        label_ka: "夕霧阿波鳴渡",
        id: 3576
      })
      
    
      this.add({
        label_eng: "The Tales of Ise",
        label_ka: "競伊勢物語",
        id: 3577
      })
      
    
      this.add({
        label_eng: "The Travelling Butterflies",
        label_ka: "蝶の道行",
        id: 3578
      })
      
    
      this.add({
        label_eng: "The Amorous Courier on the Yamato Highway",
        label_ka: "恋飛脚大和往来",
        id: 3579
      })
      
    
      this.add({
        label_eng: "The Dragon and the Tiger",
        label_ka: "龍虎",
        id: 3580
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 3581
      })
      
    
      this.add({
        label_eng: "The Young Cherry Tree",
        label_ka: "日吉丸稚桜",
        id: 3582
      })
      
    
      this.add({
        label_eng: "The Enticed High Priest",
        label_ka: "粂仙人吉野花王",
        id: 3583
      })
      
    
      this.add({
        label_eng: "Akogi Bay in Ise Province",
        label_ka: "勢州阿漕浦",
        id: 3584
      })
      
    
      this.add({
        label_eng: "The Story of Kasane",
        label_ka: "薫樹累物語",
        id: 3585
      })
      
    
      this.add({
        label_eng: "The Story of Monsters",
        label_ka: "化競丑満鐘",
        id: 3586
      })
      
    
      this.add({
        label_eng: "The Hunter and the Female Fox",
        label_ka: "雪狐々姿湖",
        id: 3587
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "二人三番叟",
        id: 3588
      })
      
    
      this.add({
        label_eng: "Sansho Dayu",
        label_ka: "さんしょう太夫",
        id: 3589
      })
      
    
      this.add({
        label_eng: "Nami (The Wave)",
        label_ka: "波",
        id: 3590
      })
      
    
      this.add({
        label_eng: "Hatsuse mode",
        label_ka: "初瀬詣",
        id: 3591
      })
      
    
      this.add({
        label_eng: "Omon Toda",
        label_ka: "おもん藤太",
        id: 3592
      })
      
    
      this.add({
        label_eng: "Masakiyo's Loyalty",
        label_ka: "八陣守護城",
        id: 3593
      })
      
    
      this.add({
        label_eng: "The Story of Matsukaza and Murasame",
        label_ka: "松風村雨束帯鑑",
        id: 3594
      })
      
    
      this.add({
        label_eng: "The Love Suicide at Amijima",
        label_ka: "天網島時雨炬燵",
        id: 3595
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers",
        label_ka: "団子売",
        id: 3596
      })
      
    
      this.add({
        label_eng: "Monkey",
        label_ka: "五天竺",
        id: 3597
      })
      
    
      this.add({
        label_eng: "Kojo (Formal Announcement)",
        label_ka: "口上",
        id: 3598
      })
      
    
      this.add({
        label_eng: "The Cruel Employer",
        label_ka: "由良湊千軒長者",
        id: 3599
      })
      
    
      this.add({
        label_eng: "The Priest Karukaya and the Souvenir of Tsukushi",
        label_ka: "苅萱桑門筑紫いえづと",
        id: 3600
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路の嫁入",
        id: 3601
      })
      
    
      this.add({
        label_eng: "The Tragedy of Love in Error",
        label_ka: "増補恋八卦",
        id: 3602
      })
      
    
      this.add({
        label_eng: "The Vegetable Farm",
        label_ka: "段ばたけ「色模様文五郎好み」より",
        id: 3603
      })
      
    
      this.add({
        label_eng: "The Butterfly Couple in the Other World",
        label_ka: "契情倭荘子",
        id: 3604
      })
      
    
      this.add({
        label_eng: "The Cherry Blossoms of the Dojoji Temple",
        label_ka: "道成寺入相花王",
        id: 3605
      })
      
    
      this.add({
        label_eng: "The Imprisoned Warrior",
        label_ka: "出世景清",
        id: 3606
      })
      
    
      this.add({
        label_eng: "Kajiwara The Swordsman",
        label_ka: "三浦大助紅梅たづな",
        id: 3607
      })
      
    
      this.add({
        label_eng: "The Eternal Love of Onatsu and Seijurō",
        label_ka: "寿連理の松",
        id: 3608
      })
      
    
      this.add({
        label_eng: "Danshichi the Homeless",
        label_ka: "宿無団七時雨傘",
        id: 3609
      })
      
    
      this.add({
        label_eng: "The Story of Shunkin",
        label_ka: "春琴抄",
        id: 3610
      })
      
    
      this.add({
        label_eng: "The Greengrocer's Tragedy",
        label_ka: "八百屋献立",
        id: 3611
      })
      
    
      this.add({
        label_eng: "Mt. Oeyama",
        label_ka: "大江山酒呑童子",
        id: 3612
      })
      
    
      this.add({
        label_eng: "Madame Butterfly",
        label_ka: "お蝶夫人",
        id: 3613
      })
      
    
      this.add({
        label_eng: "The Disinherited Son",
        label_ka: "夫婦善哉",
        id: 3614
      })
      
    
      this.add({
        label_eng: "The Happy-Go-Lucky Palanquin Bearers",
        label_ka: "戻駕色相肩",
        id: 3615
      })
      
    
      this.add({
        label_eng: "The Dancing Mushrooms",
        label_ka: "舞い茸",
        id: 3616
      })
      
    
      this.add({
        label_eng: "Ohan",
        label_ka: "おはん",
        id: 3617
      })
      
    
      this.add({
        label_eng: "The Feudal Lord in Asama",
        label_ka: "浅間の殿様",
        id: 3618
      })
      
    
      this.add({
        label_eng: "Subjugation of Ogres on Mt. Oe",
        label_ka: "大江山の鬼退治",
        id: 3619
      })
      
    
      this.add({
        label_eng: "The Red Battle Surcoat",
        label_ka: "赤い陣羽織",
        id: 3620
      })
      
    
      this.add({
        label_eng: "The Herculean Woman",
        label_ka: "和田合戦女舞鶴",
        id: 3621
      })
      
    
      this.add({
        label_eng: "The Street Entertainers",
        label_ka: "万才",
        id: 3622
      })
      
    
      this.add({
        label_eng: "The Heron Girl",
        label_ka: "鷺娘",
        id: 3623
      })
      
    
      this.add({
        label_eng: "Annoucement of Jūzō Tsuruzawa's retirement",
        label_ka: "口上(鶴澤重造引退披露)",
        id: 3624
      })
      
    
      this.add({
        label_eng: "Announcement on the assumption of his new name, Bungo Yoshida V, by Kotama Yoshida",
        label_ka: "口上(吉田小玉改め五代吉田文吾襲名披露)",
        id: 3625
      })
      
    
      this.add({
        label_eng: "Announcement of Takemoto Aioidayū III's retirement and the assumption of his new name, Takemoto Aioidayū IV', by Aikodayū Takemoto",
        label_ka: "口上(三世竹本相生大夫引退・四世竹本相生大夫襲名披露)",
        id: 3626
      })
      
    
      this.add({
        label_eng: "Announcement of the assumption of his new stage name, Sumitayū Takemoto VII, by Mojitayuū Takemoto",
        label_ka: "口上(文字大夫改め七世竹本住大夫襲名披露)",
        id: 3627
      })
      
    
      this.add({
        label_eng: "Announcement of the assumption of his new name, Kizaemon Nozawa III, by Katsuhei Nozawa",
        label_ka: "口上(野澤勝平改め三代野澤喜左衛門襲名披露)",
        id: 3628
      })
      
    
      this.add({
        label_eng: "Announcement on the change of puppeteer Monya Kiritake's name to Tamamatsu Yoshida III",
        label_ka: "口上(桐竹紋弥改め三世吉田玉松襲名披露)",
        id: 3629
      })
      
    
      this.add({
        label_eng: "Stone Flower",
        label_ka: "石の花",
        id: 3630
      })
      
    
      this.add({
        label_eng: "The Woman's Harakiri at Nagamachi",
        label_ka: "長町女腹切",
        id: 3631
      })
      
    
      this.add({
        label_eng: "Sasayaki no take",
        label_ka: "ささやきの竹",
        id: 3632
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "うつぼ猿",
        id: 3633
      })
      
    
      this.add({
        label_eng: "The Benevolence of Saint Nichiren",
        label_ka: "日蓮聖人御法海",
        id: 3634
      })
      
    
      this.add({
        label_eng: "Announcement of the current performance being dedicated to the memory of Kanji Tsuruzawa VI",
        label_ka: "口上(六世鶴澤寛治追善)",
        id: 3635
      })
      
    
      this.add({
        label_eng: "Announcement of the assumption of his new stage name, Datedayū Takemoto V, by Datejidayū Takemoto",
        label_ka: "口上(伊達路大夫改め五世竹本伊達大夫襲名披露)",
        id: 3636
      })
      
    
      this.add({
        label_eng: "Announcement of Koshijidayū Takemoto IV's retirement",
        label_ka: "口上(四代竹本越路大夫引退披露)",
        id: 3637
      })
      
    
      this.add({
        label_eng: "Announcement of the assumption of his new name, Tsunatayū Takemoto IX, by Oritayū Takemoto",
        label_ka: "口上(竹本織大夫改め九代竹本綱大夫襲名披露)",
        id: 3638
      })
      
    
      this.add({
        label_eng: "Announcement of the assumption of his new name, Kinshi Nozawa V, by Kinya Nozawa",
        label_ka: "口上(野沢錦弥改め五世野沢錦糸襲名披露)",
        id: 3639
      })
      
    
      this.add({
        label_eng: "Announcement of the current performance being dedicated to the memory of Kanjūrō Kiritake II",
        label_ka: "口上(二世桐竹勘十郎十三回忌追善）",
        id: 3640
      })
      
    
      this.add({
        label_eng: "The Tongue-Cut Sparrow",
        label_ka: "舌切雀",
        id: 3641
      })
      
    
      this.add({
        label_eng: "Bunraku no ohanashi (Introduction to Bunraku)",
        label_ka: "文楽のおはなし",
        id: 3642
      })
      
    
      this.add({
        label_eng: "Onna no heiwa (Lysistrata)",
        label_ka: "女の平和",
        id: 3643
      })
      
    
      this.add({
        label_eng: "Announcement of the assumption of his new name, Kanjūrō Kiritake III, by Minotarō Yoshida",
        label_ka: "口上(吉田簑太郎改め三世桐竹勘十郎襲名披露)",
        id: 3644
      })
      
    
      this.add({
        label_eng: "Announcement on the assumption of his new stage name of Tsuruzawa Dōhachi II by Tokutarō Tsuruzawa",
        label_ka: "口上(徳太郎改め二世鶴澤道八襲名披露口上)",
        id: 3645
      })
      
    
    // productions
    
      this.add({
        label_eng: "November 1964",
        id: 3646
      })
      
    
      this.add({
        label_eng: "February 1968",
        id: 3647
      })
      
    
      this.add({
        label_eng: "October 1968",
        id: 3648
      })
      
    
      this.add({
        label_eng: "May 1969",
        id: 3649
      })
      
    
      this.add({
        label_eng: "September 1969",
        id: 3650
      })
      
    
      this.add({
        label_eng: "October 1969",
        id: 3651
      })
      
    
      this.add({
        label_eng: "February 1970",
        id: 3652
      })
      
    
      this.add({
        label_eng: "April 1970",
        id: 3653
      })
      
    
      this.add({
        label_eng: "May 1970",
        id: 3654
      })
      
    
      this.add({
        label_eng: "July 1970",
        id: 3655
      })
      
    
      this.add({
        label_eng: "August 1970 Tour",
        id: 3656
      })
      
    
      this.add({
        label_eng: "September 1970",
        id: 3657
      })
      
    
      this.add({
        label_eng: "October 1970",
        id: 3658
      })
      
    
      this.add({
        label_eng: "November 1970",
        id: 3659
      })
      
    
      this.add({
        label_eng: "February 1971",
        id: 3660
      })
      
    
      this.add({
        label_eng: "April 1971",
        id: 3661
      })
      
    
      this.add({
        label_eng: "May 1971",
        id: 3662
      })
      
    
      this.add({
        label_eng: "July 1971",
        id: 3663
      })
      
    
      this.add({
        label_eng: "September 1971",
        id: 3664
      })
      
    
      this.add({
        label_eng: "October 1971",
        id: 3665
      })
      
    
      this.add({
        label_eng: "November 1971",
        id: 3666
      })
      
    
      this.add({
        label_eng: "January 1972",
        id: 3667
      })
      
    
      this.add({
        label_eng: "February 1972",
        id: 3668
      })
      
    
      this.add({
        label_eng: "April 1972",
        id: 3669
      })
      
    
      this.add({
        label_eng: "May 1972",
        id: 3670
      })
      
    
      this.add({
        label_eng: "July 1972",
        id: 3671
      })
      
    
      this.add({
        label_eng: "September 1972",
        id: 3672
      })
      
    
      this.add({
        label_eng: "October 1972",
        id: 3673
      })
      
    
      this.add({
        label_eng: "November 1972",
        id: 3674
      })
      
    
      this.add({
        label_eng: "January 1973",
        id: 3675
      })
      
    
      this.add({
        label_eng: "February 1973 Tour",
        id: 3676
      })
      
    
      this.add({
        label_eng: "February 1973",
        id: 3677
      })
      
    
      this.add({
        label_eng: "April 1973",
        id: 3678
      })
      
    
      this.add({
        label_eng: "May 1973 Asahiza",
        id: 3679
      })
      
    
      this.add({
        label_eng: "May 1973 National Theatre",
        id: 3680
      })
      
    
      this.add({
        label_eng: "July 1973",
        id: 3681
      })
      
    
      this.add({
        label_eng: "September 1973",
        id: 3682
      })
      
    
      this.add({
        label_eng: "October 1973",
        id: 3683
      })
      
    
      this.add({
        label_eng: "November 1973",
        id: 3684
      })
      
    
      this.add({
        label_eng: "January 1974",
        id: 3685
      })
      
    
      this.add({
        label_eng: "February 1974",
        id: 3686
      })
      
    
      this.add({
        label_eng: "April 1974 Asahiza",
        id: 3687
      })
      
    
      this.add({
        label_eng: "April 1974 National Theatre",
        id: 3688
      })
      
    
      this.add({
        label_eng: "June 1974",
        id: 3689
      })
      
    
      this.add({
        label_eng: "July 1974",
        id: 3690
      })
      
    
      this.add({
        label_eng: "September 1974",
        id: 3691
      })
      
    
      this.add({
        label_eng: "October 1974",
        id: 3692
      })
      
    
      this.add({
        label_eng: "November 1974",
        id: 3693
      })
      
    
      this.add({
        label_eng: "January 1975",
        id: 3694
      })
      
    
      this.add({
        label_eng: "February 1975",
        id: 3695
      })
      
    
      this.add({
        label_eng: "April 1975",
        id: 3696
      })
      
    
      this.add({
        label_eng: "May 1975",
        id: 3697
      })
      
    
      this.add({
        label_eng: "July 1975",
        id: 3698
      })
      
    
      this.add({
        label_eng: "October 1975",
        id: 3699
      })
      
    
      this.add({
        label_eng: "December 1975",
        id: 3700
      })
      
    
      this.add({
        label_eng: "January 1976",
        id: 3701
      })
      
    
      this.add({
        label_eng: "March 1976",
        id: 3702
      })
      
    
      this.add({
        label_eng: "April 1976",
        id: 3703
      })
      
    
      this.add({
        label_eng: "July 1976",
        id: 3704
      })
      
    
      this.add({
        label_eng: "September 1976 Kōkōsei no tame no Bunraku Kyōshitsu",
        id: 3705
      })
      
    
      this.add({
        label_eng: "November 1976",
        id: 3706
      })
      
    
      this.add({
        label_eng: "December 1976",
        id: 3707
      })
      
    
      this.add({
        label_eng: "January 1977",
        id: 3708
      })
      
    
      this.add({
        label_eng: "February 1977",
        id: 3709
      })
      
    
      this.add({
        label_eng: "April 1977",
        id: 3710
      })
      
    
      this.add({
        label_eng: "May 1977",
        id: 3711
      })
      
    
      this.add({
        label_eng: "June 1977",
        id: 3712
      })
      
    
      this.add({
        label_eng: "July 1977 Asahiza",
        id: 3713
      })
      
    
      this.add({
        label_eng: "August 1977 Hokkaido Tour",
        id: 3714
      })
      
    
      this.add({
        label_eng: "August 1977 Tour",
        id: 3715
      })
      
    
      this.add({
        label_eng: "September 1977",
        id: 3716
      })
      
    
      this.add({
        label_eng: "October 1977",
        id: 3717
      })
      
    
      this.add({
        label_eng: "December 1977",
        id: 3718
      })
      
    
      this.add({
        label_eng: "January 1978",
        id: 3719
      })
      
    
      this.add({
        label_eng: "February 1978",
        id: 3720
      })
      
    
      this.add({
        label_eng: "April 1978",
        id: 3721
      })
      
    
      this.add({
        label_eng: "May 1978",
        id: 3722
      })
      
    
      this.add({
        label_eng: "June 1978",
        id: 3723
      })
      
    
      this.add({
        label_eng: "July 1978",
        id: 3724
      })
      
    
      this.add({
        label_eng: "August 1978",
        id: 3725
      })
      
    
      this.add({
        label_eng: "September 1978",
        id: 3726
      })
      
    
      this.add({
        label_eng: "December 1978",
        id: 3727
      })
      
    
      this.add({
        label_eng: "January 1979",
        id: 3728
      })
      
    
      this.add({
        label_eng: "February 1979",
        id: 3729
      })
      
    
      this.add({
        label_eng: "April 1979",
        id: 3730
      })
      
    
      this.add({
        label_eng: "May 1979",
        id: 3731
      })
      
    
      this.add({
        label_eng: "July 1979",
        id: 3732
      })
      
    
      this.add({
        label_eng: "October 1979",
        id: 3733
      })
      
    
      this.add({
        label_eng: "December 1979",
        id: 3734
      })
      
    
      this.add({
        label_eng: "December 1979 Bunraku Kanshō Kyōshitsu",
        id: 3735
      })
      
    
      this.add({
        label_eng: "January 1980",
        id: 3736
      })
      
    
      this.add({
        label_eng: "February 1980",
        id: 3737
      })
      
    
      this.add({
        label_eng: "April 1980",
        id: 3738
      })
      
    
      this.add({
        label_eng: "May 1980",
        id: 3739
      })
      
    
      this.add({
        label_eng: "July 1980",
        id: 3740
      })
      
    
      this.add({
        label_eng: "July 1980 Tour",
        id: 3741
      })
      
    
      this.add({
        label_eng: "September 1980",
        id: 3742
      })
      
    
      this.add({
        label_eng: "October 1980",
        id: 3743
      })
      
    
      this.add({
        label_eng: "December 1980 Bunraku Kanshō Kyōshitsu",
        id: 3744
      })
      
    
      this.add({
        label_eng: "January 1981",
        id: 3745
      })
      
    
      this.add({
        label_eng: "February 1981",
        id: 3746
      })
      
    
      this.add({
        label_eng: "April 1981",
        id: 3747
      })
      
    
      this.add({
        label_eng: "May 1981",
        id: 3748
      })
      
    
      this.add({
        label_eng: "July 1981",
        id: 3749
      })
      
    
      this.add({
        label_eng: "September 1981",
        id: 3750
      })
      
    
      this.add({
        label_eng: "November 1981",
        id: 3751
      })
      
    
      this.add({
        label_eng: "December 1981",
        id: 3752
      })
      
    
      this.add({
        label_eng: "January 1982",
        id: 3753
      })
      
    
      this.add({
        label_eng: "February 1982",
        id: 3754
      })
      
    
      this.add({
        label_eng: "March 1982",
        id: 3755
      })
      
    
      this.add({
        label_eng: "April 1982",
        id: 3756
      })
      
    
      this.add({
        label_eng: "May 1982",
        id: 3757
      })
      
    
      this.add({
        label_eng: "July 1982",
        id: 3758
      })
      
    
      this.add({
        label_eng: "September 1982",
        id: 3759
      })
      
    
      this.add({
        label_eng: "October 1982",
        id: 3760
      })
      
    
      this.add({
        label_eng: "December 1982",
        id: 3761
      })
      
    
      this.add({
        label_eng: "January 1983",
        id: 3762
      })
      
    
      this.add({
        label_eng: "February 1983",
        id: 3763
      })
      
    
      this.add({
        label_eng: "April 1983",
        id: 3764
      })
      
    
      this.add({
        label_eng: "May 1983",
        id: 3765
      })
      
    
      this.add({
        label_eng: "July 1983",
        id: 3766
      })
      
    
      this.add({
        label_eng: "September 1983",
        id: 3767
      })
      
    
      this.add({
        label_eng: "October 1983",
        id: 3768
      })
      
    
      this.add({
        label_eng: "December 1983 Bunraku Kanshō Kyōshitsu",
        id: 3769
      })
      
    
      this.add({
        label_eng: "December 1983",
        id: 3770
      })
      
    
      this.add({
        label_eng: "January 1984",
        id: 3771
      })
      
    
      this.add({
        label_eng: "February 1984",
        id: 3772
      })
      
    
      this.add({
        label_eng: "April 1984",
        id: 3773
      })
      
    
      this.add({
        label_eng: "May 1984",
        id: 3774
      })
      
    
      this.add({
        label_eng: "June 1984",
        id: 3775
      })
      
    
      this.add({
        label_eng: "July 1984",
        id: 3776
      })
      
    
      this.add({
        label_eng: "August 1984",
        id: 3777
      })
      
    
      this.add({
        label_eng: "September 1984",
        id: 3778
      })
      
    
      this.add({
        label_eng: "October 1984",
        id: 3779
      })
      
    
      this.add({
        label_eng: "November 1984",
        id: 3780
      })
      
    
      this.add({
        label_eng: "December 1984",
        id: 3781
      })
      
    
      this.add({
        label_eng: "January 1985",
        id: 3782
      })
      
    
      this.add({
        label_eng: "February 1985",
        id: 3783
      })
      
    
      this.add({
        label_eng: "April 1985",
        id: 3784
      })
      
    
      this.add({
        label_eng: "May 1985",
        id: 3785
      })
      
    
      this.add({
        label_eng: "June 1985",
        id: 3786
      })
      
    
      this.add({
        label_eng: "July 1985",
        id: 3787
      })
      
    
      this.add({
        label_eng: "August 1985",
        id: 3788
      })
      
    
      this.add({
        label_eng: "September 1985",
        id: 3789
      })
      
    
      this.add({
        label_eng: "November 1985",
        id: 3790
      })
      
    
      this.add({
        label_eng: "December 1985 Bunraku Kanshō Kyōshitsu",
        id: 3791
      })
      
    
      this.add({
        label_eng: "January 1986",
        id: 3792
      })
      
    
      this.add({
        label_eng: "February 1986",
        id: 3793
      })
      
    
      this.add({
        label_eng: "April 1986",
        id: 3794
      })
      
    
      this.add({
        label_eng: "May 1986",
        id: 3795
      })
      
    
      this.add({
        label_eng: "July 1986",
        id: 3796
      })
      
    
      this.add({
        label_eng: "August 1986 National Bunraku Theatre, Osaka",
        id: 3797
      })
      
    
      this.add({
        label_eng: "August 1986 National Theatre, Tokyo",
        id: 3798
      })
      
    
      this.add({
        label_eng: "October 1986",
        id: 3799
      })
      
    
      this.add({
        label_eng: "January 1987",
        id: 3800
      })
      
    
      this.add({
        label_eng: "February 1987",
        id: 3801
      })
      
    
      this.add({
        label_eng: "March 1987",
        id: 3802
      })
      
    
      this.add({
        label_eng: "April 1987",
        id: 3803
      })
      
    
      this.add({
        label_eng: "June 1987 National Bunraku Theatre",
        id: 3804
      })
      
    
      this.add({
        label_eng: "July 1987",
        id: 3805
      })
      
    
      this.add({
        label_eng: "August 1987",
        id: 3806
      })
      
    
      this.add({
        label_eng: "September 1987",
        id: 3807
      })
      
    
      this.add({
        label_eng: "November 1987",
        id: 3808
      })
      
    
      this.add({
        label_eng: "December 1987 Bunraku Kanshō Kyōshitsu",
        id: 3809
      })
      
    
      this.add({
        label_eng: "December 1987",
        id: 3810
      })
      
    
      this.add({
        label_eng: "January 1988",
        id: 3811
      })
      
    
      this.add({
        label_eng: "February 1988",
        id: 3812
      })
      
    
      this.add({
        label_eng: "March 1988",
        id: 3813
      })
      
    
      this.add({
        label_eng: "April 1988",
        id: 3814
      })
      
    
      this.add({
        label_eng: "May 1988",
        id: 3815
      })
      
    
      this.add({
        label_eng: "July 1988",
        id: 3816
      })
      
    
      this.add({
        label_eng: "August 1988",
        id: 3817
      })
      
    
      this.add({
        label_eng: "November 1988",
        id: 3818
      })
      
    
      this.add({
        label_eng: "December 1988",
        id: 3819
      })
      
    
      this.add({
        label_eng: "January 1989",
        id: 3820
      })
      
    
      this.add({
        label_eng: "February 1989",
        id: 3821
      })
      
    
      this.add({
        label_eng: "March 1989",
        id: 3822
      })
      
    
      this.add({
        label_eng: "April 1989",
        id: 3823
      })
      
    
      this.add({
        label_eng: "August 1989",
        id: 3824
      })
      
    
      this.add({
        label_eng: "September 1989",
        id: 3825
      })
      
    
      this.add({
        label_eng: "November 1989",
        id: 3826
      })
      
    
      this.add({
        label_eng: "December 1989 ",
        id: 3827
      })
      
    
      this.add({
        label_eng: "December 1989 Bunraku Kanshō Kyōshitsu",
        id: 3828
      })
      
    
      this.add({
        label_eng: "January 1990",
        id: 3829
      })
      
    
      this.add({
        label_eng: "July 1990",
        id: 3830
      })
      
    
      this.add({
        label_eng: "October 1991",
        id: 3831
      })
      
    
      this.add({
        label_eng: "February 1991",
        id: 3832
      })
      
    
      this.add({
        label_eng: "April 1991",
        id: 3833
      })
      
    
      this.add({
        label_eng: "May 1991",
        id: 3834
      })
      
    
      this.add({
        label_eng: "January 1992",
        id: 3835
      })
      
    
      this.add({
        label_eng: "September 1979",
        id: 3836
      })
      
    
      this.add({
        label_eng: "September 1975",
        id: 3837
      })
      
    
      this.add({
        label_eng: "May 1976",
        id: 3838
      })
      
    
      this.add({
        label_eng: "December 1985",
        id: 3839
      })
      
    
      this.add({
        label_eng: "July 1977 Tour",
        id: 3840
      })
      
    
      this.add({
        label_eng: "December 1978 Bunraku Kanshō Kyōshitsu",
        id: 3841
      })
      
    
      this.add({
        label_eng: "December 1977 Bunraku Kanshō Kyōshitsu",
        id: 3842
      })
      
    
      this.add({
        label_eng: "December 1984 Bunraku Kanshō Kyōshitsu",
        id: 3843
      })
      
    
      this.add({
        label_eng: "December 1980",
        id: 3844
      })
      
    
      this.add({
        label_eng: "November 1977",
        id: 3845
      })
      
    
      this.add({
        label_eng: "March 1990",
        id: 3846
      })
      
    
      this.add({
        label_eng: "February 1990",
        id: 3847
      })
      
    
      this.add({
        label_eng: "February 1997 Kioi Hall",
        id: 3848
      })
      
    
      this.add({
        label_eng: "June 1984 Bunraku Kanshō Kyōshitsu",
        id: 3849
      })
      
    
      this.add({
        label_eng: "May 1988 Harajuku Bunraku",
        id: 3850
      })
      
    
      this.add({
        label_eng: "June 1987 Harajuku Bunraku",
        id: 3851
      })
      
    
      this.add({
        label_eng: "December 1988 Bunraku Kanshō Kyōshitsu",
        id: 3852
      })
      
    
      this.add({
        label_eng: "July 1989",
        id: 3853
      })
      
    
      this.add({
        label_eng: "April 1990",
        id: 3854
      })
      
    
      this.add({
        label_eng: "May 1990",
        id: 3855
      })
      
    
      this.add({
        label_eng: "August 1990",
        id: 3856
      })
      
    
      this.add({
        label_eng: "September 1990",
        id: 3857
      })
      
    
      this.add({
        label_eng: "November 1990",
        id: 3858
      })
      
    
      this.add({
        label_eng: "December 1990",
        id: 3859
      })
      
    
      this.add({
        label_eng: "December 1990 Bunraku Kanshō Kyōshitsu",
        id: 3860
      })
      
    
      this.add({
        label_eng: "July 1991",
        id: 3861
      })
      
    
      this.add({
        label_eng: "August 1991",
        id: 3862
      })
      
    
      this.add({
        label_eng: "September 1991",
        id: 3863
      })
      
    
      this.add({
        label_eng: "November 1991",
        id: 3864
      })
      
    
      this.add({
        label_eng: "December 1991",
        id: 3865
      })
      
    
      this.add({
        label_eng: "December 1991 Bunraku Kanshō Kyōshitsu",
        id: 3866
      })
      
    
      this.add({
        label_eng: "April 1992",
        id: 3867
      })
      
    
      this.add({
        label_eng: "May 1992",
        id: 3868
      })
      
    
      this.add({
        label_eng: "July 1992",
        id: 3869
      })
      
    
      this.add({
        label_eng: "August 1992",
        id: 3870
      })
      
    
      this.add({
        label_eng: "September 1992",
        id: 3871
      })
      
    
      this.add({
        label_eng: "November 1992",
        id: 3872
      })
      
    
      this.add({
        label_eng: "January 1993",
        id: 3873
      })
      
    
      this.add({
        label_eng: "February 1993",
        id: 3874
      })
      
    
      this.add({
        label_eng: "April 1993",
        id: 3875
      })
      
    
      this.add({
        label_eng: "May 1993",
        id: 3876
      })
      
    
      this.add({
        label_eng: "August 1993",
        id: 3877
      })
      
    
      this.add({
        label_eng: "September 1993",
        id: 3878
      })
      
    
      this.add({
        label_eng: "November 1993",
        id: 3879
      })
      
    
      this.add({
        label_eng: "December 1993",
        id: 3880
      })
      
    
      this.add({
        label_eng: "December 1993 Bunraku Kanshō Kyōshitsu",
        id: 3881
      })
      
    
      this.add({
        label_eng: "January 1994",
        id: 3882
      })
      
    
      this.add({
        label_eng: "February 1994",
        id: 3883
      })
      
    
      this.add({
        label_eng: "April 1994",
        id: 3884
      })
      
    
      this.add({
        label_eng: "August 1994",
        id: 3885
      })
      
    
      this.add({
        label_eng: "September 1994",
        id: 3886
      })
      
    
      this.add({
        label_eng: "November 1994",
        id: 3887
      })
      
    
      this.add({
        label_eng: "December 1994",
        id: 3888
      })
      
    
      this.add({
        label_eng: "December 1994 Bunraku Kanshō Kyōshitsu",
        id: 3889
      })
      
    
      this.add({
        label_eng: "January 1995",
        id: 3890
      })
      
    
      this.add({
        label_eng: "February 1995",
        id: 3891
      })
      
    
      this.add({
        label_eng: "April 1995",
        id: 3892
      })
      
    
      this.add({
        label_eng: "May 1995",
        id: 3893
      })
      
    
      this.add({
        label_eng: "August 1995",
        id: 3894
      })
      
    
      this.add({
        label_eng: "September 1995",
        id: 3895
      })
      
    
      this.add({
        label_eng: "January 1996",
        id: 3896
      })
      
    
      this.add({
        label_eng: "April 1996",
        id: 3897
      })
      
    
      this.add({
        label_eng: "July 1996",
        id: 3898
      })
      
    
      this.add({
        label_eng: "September 1996",
        id: 3899
      })
      
    
      this.add({
        label_eng: "January 1997",
        id: 3900
      })
      
    
      this.add({
        label_eng: "February 1997",
        id: 3901
      })
      
    
      this.add({
        label_eng: "April 1997",
        id: 3902
      })
      
    
      this.add({
        label_eng: "September 1997",
        id: 3903
      })
      
    
      this.add({
        label_eng: "December 1997",
        id: 3904
      })
      
    
      this.add({
        label_eng: "December 1997 Bunraku Kanshō Kyōshitsu",
        id: 3905
      })
      
    
      this.add({
        label_eng: "January 1998",
        id: 3906
      })
      
    
      this.add({
        label_eng: "April 1998",
        id: 3907
      })
      
    
      this.add({
        label_eng: "May 1998",
        id: 3908
      })
      
    
      this.add({
        label_eng: "September 1998",
        id: 3909
      })
      
    
      this.add({
        label_eng: "November 1998",
        id: 3910
      })
      
    
      this.add({
        label_eng: "December 1998",
        id: 3911
      })
      
    
      this.add({
        label_eng: "July 2000",
        id: 3912
      })
      
    
      this.add({
        label_eng: "November 2000",
        id: 3913
      })
      
    
      this.add({
        label_eng: "December 2000",
        id: 3914
      })
      
    
      this.add({
        label_eng: "December 2000 Bunraku Kanshō Kyōshitsu",
        id: 3915
      })
      
    
      this.add({
        label_eng: "April 2001",
        id: 3916
      })
      
    
      this.add({
        label_eng: "July/August 2001",
        id: 3917
      })
      
    
      this.add({
        label_eng: "September 1972 Bunraku Kyōshitsu",
        id: 3918
      })
      
    
      this.add({
        label_eng: "Marty Gross Film Production",
        id: 3919
      })
      
    
      this.add({
        label_eng: "September 1971 Bunraku Kanshō Kyōshitsu",
        id: 3920
      })
      
    
      this.add({
        label_eng: "August 1970",
        id: 3921
      })
      
    
      this.add({
        label_eng: "June 1986 Bunraku Kanshō Kyōshitsu",
        id: 3922
      })
      
    
      this.add({
        label_eng: "December 1986 Bunraku Kanshō Kyōshitsu",
        id: 3923
      })
      
    
      this.add({
        label_eng: "May 1987",
        id: 3924
      })
      
    
      this.add({
        label_eng: "March/April 1988 Tour",
        id: 3925
      })
      
    
      this.add({
        label_eng: "February 1996",
        id: 3926
      })
      
    
      this.add({
        label_eng: "January 2002",
        id: 3927
      })
      
    
      this.add({
        label_eng: "April 2002",
        id: 3928
      })
      
    
      this.add({
        label_eng: "July/August 2002",
        id: 3929
      })
      
    
      this.add({
        label_eng: "February 1973 Bunkyo Public Hall",
        id: 3930
      })
      
    
      this.add({
        label_eng: "March 1996 Tour",
        id: 3931
      })
      
    
      this.add({
        label_eng: "October 1967",
        id: 3932
      })
      
    
      this.add({
        label_eng: "December 1982",
        id: 3933
      })
      
    
      this.add({
        label_eng: "May 2003",
        id: 3934
      })
      
    
      this.add({
        label_eng: "December 1992",
        id: 3935
      })
      
    
      this.add({
        label_eng: "September 1969 Kōkōsei no tame no Bunraku Kyōshitsu",
        id: 3936
      })
      
    
      this.add({
        label_eng: "September 1971 Kōkōsei no tame no Bunraku Kyōshitsu",
        id: 3937
      })
      
    
      this.add({
        label_eng: "November 1973 Kōkōsei no tame no Bunraku Kyōshitsu",
        id: 3938
      })
      
    
    // scenes
    
      this.add({
        label_eng: "The Tea Stall at Torii Pass",
        label_ka: "鳥居峠茶店",
        id: 3939
      })
      
    
      this.add({
        label_eng: "Ao no Dōmon (Blue Tunnel)",
        label_ka: "青の洞門",
        id: 3940
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 3941
      })
      
    
      this.add({
        label_eng: "House of Heisaku and One Thousand Pine Trees at Matsubara",
        label_ka: "平作内より千本松原",
        id: 3942
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 3943
      })
      
    
      this.add({
        label_eng: "The Sumo Arena at Horie",
        label_ka: "堀江相撲場",
        id: 3944
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 3945
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 3946
      })
      
    
      this.add({
        label_eng: "The Village of Ninokuchi",
        label_ka: "新口村",
        id: 3947
      })
      
    
      this.add({
        label_eng: "Drawing Lots at Wakigahara",
        label_ka: "脇ヶ浜宝引",
        id: 3948
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 3949
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "吉田屋",
        id: 3950
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 3951
      })
      
    
      this.add({
        label_eng: "The Oil Store",
        label_ka: "油店",
        id: 3952
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 3953
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 3954
      })
      
    
      this.add({
        label_eng: "The Three Blind Masseurs",
        label_ka: "三人座頭",
        id: 3955
      })
      
    
      this.add({
        label_eng: "The Torture of Chujohime in the Snow",
        label_ka: "中将姫雪責",
        id: 3956
      })
      
    
      this.add({
        label_eng: "Mount Hibari",
        label_ka: "ひばり山古跡松",
        id: 3957
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed of Shijo",
        label_ka: "四条河原",
        id: 3958
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 3959
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 3960
      })
      
    
      this.add({
        label_eng: "Chikuma River",
        label_ka: "筑摩川",
        id: 3961
      })
      
    
      this.add({
        label_eng: "Matasuke's House",
        label_ka: "又助住家",
        id: 3962
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 3963
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 3964
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 3965
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 3966
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 3967
      })
      
    
      this.add({
        label_eng: "The Inn at Ishibe",
        label_ka: "石部宿屋",
        id: 3968
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 3969
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 3970
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 3971
      })
      
    
      this.add({
        label_eng: "The Camp Gate",
        label_ka: "陣門",
        id: 3972
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 3973
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 3974
      })
      
    
      this.add({
        label_eng: "Drawing Lots at Wakigahara",
        label_ka: "脇ヶ浜宝引",
        id: 3975
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 3976
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 3977
      })
      
    
      this.add({
        label_eng: "The Town of Shiga",
        label_ka: "志賀の里",
        id: 3978
      })
      
    
      this.add({
        label_eng: "The Sakuranomiya Shrine",
        label_ka: "桜の宮物狂",
        id: 3979
      })
      
    
      this.add({
        label_eng: "The Todaiji Temple",
        label_ka: "東大寺",
        id: 3980
      })
      
    
      this.add({
        label_eng: "The Nigatsudo Hall",
        label_ka: "二月堂",
        id: 3981
      })
      
    
      this.add({
        label_eng: "Jurobei's House",
        label_ka: "十郎兵衛内",
        id: 3982
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 3983
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 3984
      })
      
    
      this.add({
        label_eng: "The Travel on Mount Yoshino",
        label_ka: "道行初音旅",
        id: 3985
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 3986
      })
      
    
      this.add({
        label_eng: "Grand Hall in Ashikaga Mansion",
        label_ka: "足利館大広間",
        id: 3987
      })
      
    
      this.add({
        label_eng: "The Innermost Room",
        label_ka: "足利館奥御殿",
        id: 3988
      })
      
    
      this.add({
        label_eng: "The Suwa Shrine",
        label_ka: "諏訪明神百度石",
        id: 3989
      })
      
    
      this.add({
        label_eng: "Kikyo Field",
        label_ka: "桔梗原",
        id: 3990
      })
      
    
      this.add({
        label_eng: "Kagekatsu and Wooden Clogs",
        label_ka: "景勝下駄",
        id: 3991
      })
      
    
      this.add({
        label_eng: "Kansuke's House",
        label_ka: "勘助住家",
        id: 3992
      })
      
    
      this.add({
        label_eng: "Shingen's Mansion",
        label_ka: "武田信玄館",
        id: 3993
      })
      
    
      this.add({
        label_eng: "Messenger Yoshikiyo's Visit",
        label_ka: "村上義清上使",
        id: 3994
      })
      
    
      this.add({
        label_eng: "Katsuyori Kills Himself",
        label_ka: "勝頼切腹",
        id: 3995
      })
      
    
      this.add({
        label_eng: "Shingen's Talk",
        label_ka: "信玄物語",
        id: 3996
      })
      
    
      this.add({
        label_eng: "The Drug Peddlers' Journey",
        label_ka: "道行似合の女夫丸",
        id: 3997
      })
      
    
      this.add({
        label_eng: "Bewitched by a Fox",
        label_ka: "和田別所化性屋敷",
        id: 3998
      })
      
    
      this.add({
        label_eng: "Messenger Kagekatsu's Visit (See also Kenshin's Mansion)",
        label_ka: "景勝上使 (See also 謙信館）",
        id: 3999
      })
      
    
      this.add({
        label_eng: "The Delivery of the Rifle (See also Kenshin's Mansion)",
        label_ka: "鉄砲渡し (See also 謙信館)",
        id: 4000
      })
      
    
      this.add({
        label_eng: "Kenshin's Mansion (See also Messenger Kagekatsu's Visit and the Delivery of the Rifle)",
        label_ka: "謙信館 (see akso 景勝上使  and 鉄砲渡し)",
        id: 4001
      })
      
    
      this.add({
        label_eng: "The Death of Dosan",
        label_ka: "道三最期",
        id: 4002
      })
      
    
      this.add({
        label_eng: "The Itodo Myojin Shrine",
        label_ka: "射手明神",
        id: 4003
      })
      
    
      this.add({
        label_eng: "Yoshinaka's Mansion",
        label_ka: "義仲館",
        id: 4004
      })
      
    
      this.add({
        label_eng: "The Toothbrush Maker's House",
        label_ka: "楊枝屋",
        id: 4005
      })
      
    
      this.add({
        label_eng: "The Inn at Otsu",
        label_ka: "大津宿屋",
        id: 4006
      })
      
    
      this.add({
        label_eng: "The Improvised Bamboo Hearse",
        label_ka: "笹引",
        id: 4007
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 4008
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 4009
      })
      
    
      this.add({
        label_eng: "Kajiwara's Mansion",
        label_ka: "梶原館",
        id: 4010
      })
      
    
      this.add({
        label_eng: "The Argument on the Uji River Crossing",
        label_ka: "先陣問答",
        id: 4011
      })
      
    
      this.add({
        label_eng: "Disinheritance of Genda",
        label_ka: "源太勘当",
        id: 4012
      })
      
    
      this.add({
        label_eng: "The Fortune Teller",
        label_ka: "辻法印",
        id: 4013
      })
      
    
      this.add({
        label_eng: "The Tea House at Kanzaki",
        label_ka: "神崎揚屋",
        id: 4014
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4015
      })
      
    
      this.add({
        label_eng: "The Sento Palace",
        label_ka: "仙洞御所",
        id: 4016
      })
      
    
      this.add({
        label_eng: "The Nunnery at Kitasaga",
        label_ka: "北嵯峨",
        id: 4017
      })
      
    
      this.add({
        label_eng: "Yoshitsune's Mansion at Horikawa",
        label_ka: "堀川御所",
        id: 4018
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 4019
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 4020
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 4021
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 4022
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 4023
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 4024
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 4025
      })
      
    
      this.add({
        label_eng: "The Sento Palace",
        label_ka: "仙洞御所",
        id: 4026
      })
      
    
      this.add({
        label_eng: "The Nunnery at Kitasaga",
        label_ka: "北嵯峨",
        id: 4027
      })
      
    
      this.add({
        label_eng: "Yoshitsune's Mansion at Horikawa",
        label_ka: "堀川御所",
        id: 4028
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 4029
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 4030
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 4031
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 4032
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 4033
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 4034
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 4035
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 4036
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 4037
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 4038
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 4039
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 4040
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 4041
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 4042
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 4043
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 4044
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4045
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4046
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 4047
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 4048
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 4049
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 4050
      })
      
    
      this.add({
        label_eng: "The Second-Hand Article Dealer's at Unagidani",
        label_ka: "鰻谷",
        id: 4051
      })
      
    
      this.add({
        label_eng: "The Well-Cleaning",
        label_ka: "井戸替",
        id: 4052
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 4053
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 4054
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 4055
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 4056
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 4057
      })
      
    
      this.add({
        label_eng: "The Fox-Kuzunoha's Travel",
        label_ka: "蘭菊の乱れ",
        id: 4058
      })
      
    
      this.add({
        label_eng: "The Inn at Ishibe",
        label_ka: "石部宿屋",
        id: 4059
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 4060
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 4061
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 4062
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 4063
      })
      
    
      this.add({
        label_eng: "The Nunobiki Waterfall",
        label_ka: "布引滝",
        id: 4064
      })
      
    
      this.add({
        label_eng: "Yosikata's Mansion",
        label_ka: "義賢館",
        id: 4065
      })
      
    
      this.add({
        label_eng: "Yabase Bay",
        label_ka: "矢橋",
        id: 4066
      })
      
    
      this.add({
        label_eng: "The Return from Chikubu Island",
        label_ka: "竹生島遊覧",
        id: 4067
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 4068
      })
      
    
      this.add({
        label_eng: "The Otowa Hill",
        label_ka: "音羽山",
        id: 4069
      })
      
    
      this.add({
        label_eng: "The Biwa Music",
        label_ka: "松波琵琶",
        id: 4070
      })
      
    
      this.add({
        label_eng: "The Maple Hill",
        label_ka: "紅葉山",
        id: 4071
      })
      
    
      this.add({
        label_eng: "The Disinheritance of Saizaburo",
        label_ka: "才三勘当",
        id: 4072
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 4073
      })
      
    
      this.add({
        label_eng: "The Suzugamori Execution Ground",
        label_ka: "鈴ヶ森",
        id: 4074
      })
      
    
      this.add({
        label_eng: "The Tea House at Pontocho",
        label_ka: "先斗町貸座敷",
        id: 4075
      })
      
    
      this.add({
        label_eng: "Shundo Jiroemon's House",
        label_ka: "春藤次郎右衛門屋敷",
        id: 4076
      })
      
    
      this.add({
        label_eng: "The Koriyama Hachiman Shrine",
        label_ka: "郡山八幡",
        id: 4077
      })
      
    
      this.add({
        label_eng: "The Daianji River Bank",
        label_ka: "大安寺堤",
        id: 4078
      })
      
    
      this.add({
        label_eng: "Street Entertainers",
        label_ka: "万歳",
        id: 4079
      })
      
    
      this.add({
        label_eng: "The Fisherwoman",
        label_ka: "海女",
        id: 4080
      })
      
    
      this.add({
        label_eng: "Komachi in Her Old Age",
        label_ka: "関寺小町",
        id: 4081
      })
      
    
      this.add({
        label_eng: "Heron Girl",
        label_ka: "鷺娘",
        id: 4082
      })
      
    
      this.add({
        label_eng: "The Zama Shrine",
        label_ka: "座摩社前",
        id: 4083
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 4084
      })
      
    
      this.add({
        label_eng: "Nagamachi Street",
        label_ka: "長町",
        id: 4085
      })
      
    
      this.add({
        label_eng: "The Oil Store",
        label_ka: "油屋",
        id: 4086
      })
      
    
      this.add({
        label_eng: "The Pine Grove",
        label_ka: "小松原",
        id: 4087
      })
      
    
      this.add({
        label_eng: "Emiji's Mansion",
        label_ka: "蝦夷子館",
        id: 4088
      })
      
    
      this.add({
        label_eng: "Sadaka's (Dazai) Mansion",
        label_ka: "太宰館",
        id: 4089
      })
      
    
      this.add({
        label_eng: "Imoyama and Seyama Mansions",
        label_ka: "妹山背山",
        id: 4090
      })
      
    
      this.add({
        label_eng: "The Laundry",
        label_ka: "碪拍子",
        id: 4091
      })
      
    
      this.add({
        label_eng: "The House of Tokutayu (Tokudayu or Tokutaifu)",
        label_ka: "徳太夫住家",
        id: 4092
      })
      
    
      this.add({
        label_eng: "Urikohime and Amanjaku",
        label_ka: "瓜子姫とあまんじゃく",
        id: 4093
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4094
      })
      
    
      this.add({
        label_eng: "The Ashikaga Palace",
        label_ka: "足利館",
        id: 4095
      })
      
    
      this.add({
        label_eng: "The Village of Kishinosato (See also The Sake Peddler)",
        label_ka: "岸の里 (See also 鳶田)",
        id: 4096
      })
      
    
      this.add({
        label_eng: "The Village of Tengachaya (See also Zesai's House)",
        label_ka: "天下茶屋 (See also 是斎住家)",
        id: 4097
      })
      
    
      this.add({
        label_eng: "The Golden Pavilion",
        label_ka: "金閣寺",
        id: 4098
      })
      
    
      this.add({
        label_eng: "The Forest of the Myojin Shrine",
        label_ka: "明神森",
        id: 4099
      })
      
    
      this.add({
        label_eng: "Rice Planting",
        label_ka: "田植",
        id: 4100
      })
      
    
      this.add({
        label_eng: "The Village of Sakai",
        label_ka: "逆井村",
        id: 4101
      })
      
    
      this.add({
        label_eng: "The Kaminari Gate",
        label_ka: "雷門",
        id: 4102
      })
      
    
      this.add({
        label_eng: "The Tea House",
        label_ka: "揚屋",
        id: 4103
      })
      
    
      this.add({
        label_eng: "The Hamanomiya Riding Ground",
        label_ka: "浜の宮馬場",
        id: 4104
      })
      
    
      this.add({
        label_eng: "The House of Ichinoshin Asaka",
        label_ka: "浅香市之進留守宅",
        id: 4105
      })
      
    
      this.add({
        label_eng: "The Tea Ceremony House",
        label_ka: "数寄屋",
        id: 4106
      })
      
    
      this.add({
        label_eng: "The Revenge on Kyobashi Bridge in Fushimi",
        label_ka: "伏見京橋女敵討",
        id: 4107
      })
      
    
      this.add({
        label_eng: "The Three Oddities",
        label_ka: "三人片輪",
        id: 4108
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 4109
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 4110
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 4111
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 4112
      })
      
    
      this.add({
        label_eng: "Kumagai's Explanation (See also Kumagai's Camp )",
        label_ka: "熊谷物語 (See also 熊谷陣屋)",
        id: 4113
      })
      
    
      this.add({
        label_eng: "The Head Identification (See also Kumagai's Camp)",
        label_ka: "首実検 (See also 熊谷陣屋)",
        id: 4114
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 4115
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4116
      })
      
    
      this.add({
        label_eng: "The Oil Store",
        label_ka: "油店",
        id: 4117
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 4118
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 4119
      })
      
    
      this.add({
        label_eng: "The Suicide with a Scythe",
        label_ka: "弥作鎌腹",
        id: 4120
      })
      
    
      this.add({
        label_eng: "Michiharu's Mansion",
        label_ka: "道春館",
        id: 4121
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 4122
      })
      
    
      this.add({
        label_eng: "Honzo's Villa",
        label_ka: "本蔵下屋敷",
        id: 4123
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 4124
      })
      
    
      this.add({
        label_eng: "Oshima Island in Izu Province",
        label_ka: "伊豆国大嶋",
        id: 4125
      })
      
    
      this.add({
        label_eng: "Shiramine in Sanuki Province",
        label_ka: "讃岐国白峯",
        id: 4126
      })
      
    
      this.add({
        label_eng: "Mt. Kihara in Higo Province",
        label_ka: "肥後国木原山山塞",
        id: 4127
      })
      
    
      this.add({
        label_eng: "The Sea off Satsuma",
        label_ka: "薩南海上",
        id: 4128
      })
      
    
      this.add({
        label_eng: "Kitadani Ceremonial Site in Ryukyu",
        label_ka: "琉球国北谷斎場",
        id: 4129
      })
      
    
      this.add({
        label_eng: "The Inn at Kitadani",
        label_ka: "北谷夫婦宿",
        id: 4130
      })
      
    
      this.add({
        label_eng: "The Unten Beach",
        label_ka: "運天海浜宵宮",
        id: 4131
      })
      
    
      this.add({
        label_eng: "The Second-Hand Article Dealer's at Unagidani",
        label_ka: "鰻谷",
        id: 4132
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 4133
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 4134
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 4135
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 4136
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 4137
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 4138
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4139
      })
      
    
      this.add({
        label_eng: "The Double Suicide",
        label_ka: "道行霜夜の千日",
        id: 4140
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed at Shichijo",
        label_ka: "七条河原",
        id: 4141
      })
      
    
      this.add({
        label_eng: "Kinai's House",
        label_ka: "喜内住家",
        id: 4142
      })
      
    
      this.add({
        label_eng: "The Torture of Chujohime in the Snow",
        label_ka: "中将姫雪責",
        id: 4143
      })
      
    
      this.add({
        label_eng: "The Tsubosaka Temple (See also The Mountain)",
        label_ka: "壺坂寺 (See also 山)",
        id: 4144
      })
      
    
      this.add({
        label_eng: "Sadanoshin's Suicide",
        label_ka: "能舞台定之進切腹",
        id: 4145
      })
      
    
      this.add({
        label_eng: "Katsukake Village",
        label_ka: "沓掛村",
        id: 4146
      })
      
    
      this.add({
        label_eng: "At the Foot of the Slope",
        label_ka: "坂の下",
        id: 4147
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 4148
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 4149
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed at Shichijo",
        label_ka: "七条河原",
        id: 4150
      })
      
    
      this.add({
        label_eng: "Kinai's House",
        label_ka: "喜内住家",
        id: 4151
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 4152
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 4153
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 4154
      })
      
    
      this.add({
        label_eng: "The Tsurugaoka Hachiman Shrine",
        label_ka: "鶴が岡",
        id: 4155
      })
      
    
      this.add({
        label_eng: "The House of Yukie Wada",
        label_ka: "和田行家屋敷",
        id: 4156
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 4157
      })
      
    
      this.add({
        label_eng: "The Hokkokuya Inn at Fushimi,",
        label_ka: "伏見北国屋",
        id: 4158
      })
      
    
      this.add({
        label_eng: "The Revenge at Iga-Ueno",
        label_ka: "伊賀上野仇討",
        id: 4159
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 4160
      })
      
    
      this.add({
        label_eng: "The Rat's Romance",
        label_ka: "鼠のそうし",
        id: 4161
      })
      
    
      this.add({
        label_eng: "The Shido Temple",
        label_ka: "志渡寺",
        id: 4162
      })
      
    
      this.add({
        label_eng: "Jurobei's House",
        label_ka: "十郎兵衛内",
        id: 4163
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 4164
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 4165
      })
      
    
      this.add({
        label_eng: "The Handing on the Secrets of Calligraphy",
        label_ka: "筆法伝授",
        id: 4166
      })
      
    
      this.add({
        label_eng: "At the Fence",
        label_ka: "築地",
        id: 4167
      })
      
    
      this.add({
        label_eng: "The Wheat-Gluten Peddler's Travel",
        label_ka: "道行詞甘替",
        id: 4168
      })
      
    
      this.add({
        label_eng: "The Port of Yasui",
        label_ka: "安井汐待",
        id: 4169
      })
      
    
      this.add({
        label_eng: "The Beating of Kariya",
        label_ka: "杖折檻",
        id: 4170
      })
      
    
      this.add({
        label_eng: "The Cockcrow",
        label_ka: "東天紅",
        id: 4171
      })
      
    
      this.add({
        label_eng: "The Departure of Michizane",
        label_ka: "丞相名残",
        id: 4172
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 4173
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 4174
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 4175
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 4176
      })
      
    
      this.add({
        label_eng: "Mount Tempai",
        label_ka: "天拝山",
        id: 4177
      })
      
    
      this.add({
        label_eng: "The Hideout at Kitasaga",
        label_ka: "北嵯峨",
        id: 4178
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4179
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4180
      })
      
    
      this.add({
        label_eng: "The Disaster at the Imperial Palace",
        label_ka: "大内天変",
        id: 4181
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 4182
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 4183
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 4184
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 4185
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 4186
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 4187
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 4188
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 4189
      })
      
    
      this.add({
        label_eng: "The Bamboo Room",
        label_ka: "竹の間",
        id: 4190
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 4191
      })
      
    
      this.add({
        label_eng: "Hanyu Village (See also Hanyu Village from \"\"The Story of Kasane\"\")",
        label_ka: "埴生村",
        id: 4192
      })
      
    
      this.add({
        label_eng: "The Earthen Bridge (See also The Earthen Bridge from \"\"The Story of Kasane\"\")",
        label_ka: "土橋",
        id: 4193
      })
      
    
      this.add({
        label_eng: "Hyoe's Mansion",
        label_ka: "飯原館",
        id: 4194
      })
      
    
      this.add({
        label_eng: "Eitai Riverside at Utsubo",
        label_ka: "靱永代浜",
        id: 4195
      })
      
    
      this.add({
        label_eng: "Hyosuke's House",
        label_ka: "兵助内 (天王寺村兵助内)",
        id: 4196
      })
      
    
      this.add({
        label_eng: "The Masui Well",
        label_ka: "増井",
        id: 4197
      })
      
    
      this.add({
        label_eng: "The Three Oddities",
        label_ka: "三人片輪",
        id: 4198
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 4199
      })
      
    
      this.add({
        label_eng: "The Helmet Identification at Tsurugaoka",
        label_ka: "鶴が岡兜改め",
        id: 4200
      })
      
    
      this.add({
        label_eng: "The Love Poem",
        label_ka: "恋歌",
        id: 4201
      })
      
    
      this.add({
        label_eng: "The Cutting of the Pine Branch",
        label_ka: "松切り",
        id: 4202
      })
      
    
      this.add({
        label_eng: "The Bribing of Moronao",
        label_ka: "大手下馬先進物　",
        id: 4203
      })
      
    
      this.add({
        label_eng: "Okaru Delivers the Letter Case (Kaoyo's Poem)",
        label_ka: "おかる文使い",
        id: 4204
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 4205
      })
      
    
      this.add({
        label_eng: "The Back Gate",
        label_ka: "裏門",
        id: 4206
      })
      
    
      this.add({
        label_eng: "The Flower Basket",
        label_ka: "花籠",
        id: 4207
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 4208
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 4209
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 4210
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 4211
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 4212
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 4213
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 4214
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 4215
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 4216
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 4217
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4218
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4219
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4220
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 4221
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 4222
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 4223
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 4224
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 4225
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 4226
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 4227
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 4228
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed of Shijo",
        label_ka: "四条河原",
        id: 4229
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 4230
      })
      
    
      this.add({
        label_eng: "The Three Blind Masseurs",
        label_ka: "三人座頭",
        id: 4231
      })
      
    
      this.add({
        label_eng: "The Temporary Mansion at Tsurugaoka",
        label_ka: "鶴が岡仮屋",
        id: 4232
      })
      
    
      this.add({
        label_eng: "The Yoshida Shrine",
        label_ka: "吉田社頭",
        id: 4233
      })
      
    
      this.add({
        label_eng: "Yoshiie's Mansion",
        label_ka: "八幡太郎館",
        id: 4234
      })
      
    
      this.add({
        label_eng: "The Sotogahama Beach",
        label_ka: "外が浜",
        id: 4235
      })
      
    
      this.add({
        label_eng: "The House of Bunji",
        label_ka: "善知鳥文治住家",
        id: 4236
      })
      
    
      this.add({
        label_eng: "The Shujaku River Bank",
        label_ka: "朱雀堤",
        id: 4237
      })
      
    
      this.add({
        label_eng: "The Mansion of Prince Tamaki (See also The Messenger Shikitae, Arrowhead and Sodehagi's Appeal)",
        label_ka: "環の宮明御殿 (See also 敷妙使者, 矢の根 and 袖萩祭文)",
        id: 4238
      })
      
    
      this.add({
        label_eng: "The Drug Peddlers' Travel",
        label_ka: "道行千里の岩田帯",
        id: 4239
      })
      
    
      this.add({
        label_eng: "The Solitary House",
        label_ka: "一つ家",
        id: 4240
      })
      
    
      this.add({
        label_eng: "The Bottom of the Ravin",
        label_ka: "谷底",
        id: 4241
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 4242
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 4243
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 4244
      })
      
    
      this.add({
        label_eng: "The Pilgrim's Song",
        label_ka: "順礼歌",
        id: 4245
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4246
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4247
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 4248
      })
      
    
      this.add({
        label_eng: "The Gay Quarter Gossips",
        label_ka: "廓噺",
        id: 4249
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 4250
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 4251
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 4252
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4253
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4254
      })
      
    
      this.add({
        label_eng: "The Kasaneizutsu Tea House",
        label_ka: "六軒町",
        id: 4255
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 4256
      })
      
    
      this.add({
        label_eng: "The Kyohaku Lakeside in China",
        label_ka: "唐国鏡白湖畔",
        id: 4257
      })
      
    
      this.add({
        label_eng: "The Cormorant Fisherman's House",
        label_ka: "美濃国鵜飼屋鵜匠の頭内",
        id: 4258
      })
      
    
      this.add({
        label_eng: "Inspection of the Cormorant Fishing on the Nagara River",
        label_ka: "長良川鵜飼上覧",
        id: 4259
      })
      
    
      this.add({
        label_eng: "The House of Kyosei 1",
        label_ka: "喬生住家一",
        id: 4260
      })
      
    
      this.add({
        label_eng: "The House of Kyosei 2",
        label_ka: "喬生住家二",
        id: 4261
      })
      
    
      this.add({
        label_eng: "The House of Kyosei 3",
        label_ka: "喬生住家三より古心寺朱の丸柱の間",
        id: 4262
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4263
      })
      
    
      this.add({
        label_eng: "Terutora Serves a Meal",
        label_ka: "輝虎配膳",
        id: 4264
      })
      
    
      this.add({
        label_eng: "Sanetsuna's Mansion",
        label_ka: "直江屋敷",
        id: 4265
      })
      
    
      this.add({
        label_eng: "The Gay Quarter Gossips",
        label_ka: "廓噺",
        id: 4266
      })
      
    
      this.add({
        label_eng: "The Mad Woman",
        label_ka: "笠物狂",
        id: 4267
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 4268
      })
      
    
      this.add({
        label_eng: "The Laundry",
        label_ka: "碪拍子",
        id: 4269
      })
      
    
      this.add({
        label_eng: "The House of Tokutayu (Tokudayu or Tokutaifu)",
        label_ka: "徳太夫住家",
        id: 4270
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 4271
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 4272
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 4273
      })
      
    
      this.add({
        label_eng: "Terutora Serves a Meal",
        label_ka: "輝虎配膳",
        id: 4274
      })
      
    
      this.add({
        label_eng: "Sanetsuna's Mansion",
        label_ka: "直江屋敷",
        id: 4275
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 4276
      })
      
    
      this.add({
        label_eng: "The Mad Woman",
        label_ka: "笠物狂",
        id: 4277
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 4278
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 4279
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 4280
      })
      
    
      this.add({
        label_eng: "The Pine-Lined Road at Akasaka",
        label_ka: "赤坂並木",
        id: 4281
      })
      
    
      this.add({
        label_eng: "Sota's House",
        label_ka: "惣太住家",
        id: 4282
      })
      
    
      this.add({
        label_eng: "The Mad Woman",
        label_ka: "狂女道行",
        id: 4283
      })
      
    
      this.add({
        label_eng: "The Sumida River",
        label_ka: "隅田川",
        id: 4284
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 4285
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 4286
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 4287
      })
      
    
      this.add({
        label_eng: "The Poisoned Sake",
        label_ka: "住吉松原毒酒",
        id: 4288
      })
      
    
      this.add({
        label_eng: "The Bandai Pond",
        label_ka: "万代池",
        id: 4289
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 4290
      })
      
    
      this.add({
        label_eng: "The Daimonjiya Cotton Shop",
        label_ka: "大文字屋",
        id: 4291
      })
      
    
      this.add({
        label_eng: "On the Hirado Beach",
        label_ka: "平戸浜伝ひ",
        id: 4292
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 4293
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 4294
      })
      
    
      this.add({
        label_eng: "Kanki's Mansion (See also The Shishigajo Catsle)",
        label_ka: "甘輝館 (See also 獅子が城)",
        id: 4295
      })
      
    
      this.add({
        label_eng: "The Red Signal (See also The Shishigajo Catsle)",
        label_ka: "紅流し (See also 獅子が城)",
        id: 4296
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 4297
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 4298
      })
      
    
      this.add({
        label_eng: "The Haori Falls Off",
        label_ka: "羽織落し",
        id: 4299
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 4300
      })
      
    
      this.add({
        label_eng: "Sota's House",
        label_ka: "惣太住家",
        id: 4301
      })
      
    
      this.add({
        label_eng: "The Mad Woman",
        label_ka: "狂女道行",
        id: 4302
      })
      
    
      this.add({
        label_eng: "The Sumida River",
        label_ka: "隅田川",
        id: 4303
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 4304
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 4305
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 4306
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 4307
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 4308
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 4309
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House in Yamashina",
        label_ka: "山科閑居",
        id: 4310
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "九軒吉田屋",
        id: 4311
      })
      
    
      this.add({
        label_eng: "Sakon's Temporary Residence",
        label_ka: "平岡左近宿宅",
        id: 4312
      })
      
    
      this.add({
        label_eng: "The Ogiya House",
        label_ka: "扇屋内",
        id: 4313
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 4314
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4315
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4316
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 4317
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 4318
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 4319
      })
      
    
      this.add({
        label_eng: "The Shido Temple",
        label_ka: "志渡寺",
        id: 4320
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 4321
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "吉田屋",
        id: 4322
      })
      
    
      this.add({
        label_eng: "Tamamizu Pond",
        label_ka: "玉水淵",
        id: 4323
      })
      
    
      this.add({
        label_eng: "Kasuga Village",
        label_ka: "春日村",
        id: 4324
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 4325
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 4326
      })
      
    
      this.add({
        label_eng: "The Feast at Nijo Castle",
        label_ka: "二条城配膳",
        id: 4327
      })
      
    
      this.add({
        label_eng: "The Honnoji Temple",
        label_ka: "本能寺",
        id: 4328
      })
      
    
      this.add({
        label_eng: "Lady Ano's Reports to Hisayoshi",
        label_ka: "局注進",
        id: 4329
      })
      
    
      this.add({
        label_eng: "Chozaemon's Suicide",
        label_ka: "長左衛門切腹",
        id: 4330
      })
      
    
      this.add({
        label_eng: "The Myoshinji Temple",
        label_ka: "妙心寺",
        id: 4331
      })
      
    
      this.add({
        label_eng: "The Fort of Suginomori",
        label_ka: "杉の森",
        id: 4332
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 4333
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4334
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4335
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 4336
      })
      
    
      this.add({
        label_eng: "Azuchi Castle",
        label_ka: "安土城中",
        id: 4337
      })
      
    
      this.add({
        label_eng: "The Feast at Nijo Castle",
        label_ka: "二条城配膳",
        id: 4338
      })
      
    
      this.add({
        label_eng: "The Honnoji Temple",
        label_ka: "本能寺",
        id: 4339
      })
      
    
      this.add({
        label_eng: "Lady Ano's Reports to Hisayoshi",
        label_ka: "局注進",
        id: 4340
      })
      
    
      this.add({
        label_eng: "Chozaemon's Suicide",
        label_ka: "長左衛門切腹",
        id: 4341
      })
      
    
      this.add({
        label_eng: "The Myoshinji Temple",
        label_ka: "妙心寺",
        id: 4342
      })
      
    
      this.add({
        label_eng: "The Fort of Suginomori",
        label_ka: "杉の森",
        id: 4343
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 4344
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4345
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4346
      })
      
    
      this.add({
        label_eng: "The Travelling Butterflies",
        label_ka: "蝶の道行",
        id: 4347
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 4348
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 4349
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 4350
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 4351
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 4352
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 4353
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 4354
      })
      
    
      this.add({
        label_eng: "The Tattooing",
        label_ka: "入墨",
        id: 4355
      })
      
    
      this.add({
        label_eng: "A Visit of Two Ladies-in-Waiting (See also Kinugawa Villege)",
        label_ka: "局使者 (See also 絹川村)",
        id: 4356
      })
      
    
      this.add({
        label_eng: "Rice Washing (See also Kinugawa Villege)",
        label_ka: "米洗い (See also 絹川村)",
        id: 4357
      })
      
    
      this.add({
        label_eng: "Parting of Miuranosuke with His Mother (See also Kinugawa Villege)",
        label_ka: "三浦之助母別れ（三浦別れ） (See also 絹川村)",
        id: 4358
      })
      
    
      this.add({
        label_eng: "Takatsuna's Declaration (See also Kinugawa Villege)",
        label_ka: "高綱物語 (See also 絹川村)",
        id: 4359
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 4360
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 4361
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 4362
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 4363
      })
      
    
      this.add({
        label_eng: "Sankatsu's House",
        label_ka: "長町美濃屋",
        id: 4364
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4365
      })
      
    
      this.add({
        label_eng: "The Double Suicide",
        label_ka: "道行霜夜の千日",
        id: 4366
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 4367
      })
      
    
      this.add({
        label_eng: "Michiharu's Mansion",
        label_ka: "道春館",
        id: 4368
      })
      
    
      this.add({
        label_eng: "The Shinsen Garden",
        label_ka: "神泉苑",
        id: 4369
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 4370
      })
      
    
      this.add({
        label_eng: "The Trial",
        label_ka: "訴訟",
        id: 4371
      })
      
    
      this.add({
        label_eng: "The Prayer",
        label_ka: "祈り",
        id: 4372
      })
      
    
      this.add({
        label_eng: "The Fleeing Fox",
        label_ka: "化粧殺生石",
        id: 4373
      })
      
    
      this.add({
        label_eng: "Shitobei's House",
        label_ka: "四斗兵衛住家",
        id: 4374
      })
      
    
      this.add({
        label_eng: "Sakamoto Castle",
        label_ka: "坂本城",
        id: 4375
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 4376
      })
      
    
      this.add({
        label_eng: "The Return from Chikubu Island",
        label_ka: "竹生島遊覧",
        id: 4377
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 4378
      })
      
    
      this.add({
        label_eng: "Inquisition by Seno-o",
        label_ka: "瀬尾十郎詮議",
        id: 4379
      })
      
    
      this.add({
        label_eng: "Sanemori's Explanation",
        label_ka: "実盛物語",
        id: 4380
      })
      
    
      this.add({
        label_eng: "The Spinning Frame",
        label_ka: "綿繰馬",
        id: 4381
      })
      
    
      this.add({
        label_eng: "The Otowa Hill",
        label_ka: "音羽山",
        id: 4382
      })
      
    
      this.add({
        label_eng: "The Biwa Music",
        label_ka: "松波琵琶",
        id: 4383
      })
      
    
      this.add({
        label_eng: "The Maple Hill",
        label_ka: "紅葉山",
        id: 4384
      })
      
    
      this.add({
        label_eng: "The Bamboo Room",
        label_ka: "竹の間",
        id: 4385
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 4386
      })
      
    
      this.add({
        label_eng: "The Tsubosaka Temple (See also The Mountain)",
        label_ka: "壺坂寺 (See also 山)",
        id: 4387
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 4388
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 4389
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 4390
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 4391
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 4392
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers (\"\"Nemosaeru Haruno Usuzuki\"\")",
        label_ka: "団子売",
        id: 4393
      })
      
    
      this.add({
        label_eng: "The Camp Gate",
        label_ka: "陣門",
        id: 4394
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 4395
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 4396
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 4397
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 4398
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 4399
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 4400
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 4401
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 4402
      })
      
    
      this.add({
        label_eng: "The Horikawa Mansion",
        label_ka: "堀川御所",
        id: 4403
      })
      
    
      this.add({
        label_eng: "Atsumori's Departure for the Battlefront",
        label_ka: "敦盛出陣",
        id: 4404
      })
      
    
      this.add({
        label_eng: "The Camp Gate",
        label_ka: "陣門",
        id: 4405
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 4406
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 4407
      })
      
    
      this.add({
        label_eng: "The House of Hayashi",
        label_ka: "林住家",
        id: 4408
      })
      
    
      this.add({
        label_eng: "The House of Midaroku",
        label_ka: "弥陀六内",
        id: 4409
      })
      
    
      this.add({
        label_eng: "Drawing Lots at Wakigahara",
        label_ka: "脇ヶ浜宝引",
        id: 4410
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 4411
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 4412
      })
      
    
      this.add({
        label_eng: "Rokuyata's Mansion",
        label_ka: "六弥太館",
        id: 4413
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 4414
      })
      
    
      this.add({
        label_eng: "The Komakiyama Castle",
        label_ka: "駒木山城中",
        id: 4415
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 4416
      })
      
    
      this.add({
        label_eng: "Mount Yoshino",
        label_ka: "吉野山",
        id: 4417
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 4418
      })
      
    
      this.add({
        label_eng: "The Daimonjiya Cotton Shop",
        label_ka: "大文字屋",
        id: 4419
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 4420
      })
      
    
      this.add({
        label_eng: "Nitta's Castle",
        label_ka: "新田居城",
        id: 4421
      })
      
    
      this.add({
        label_eng: "Hyogonosuke's Mansion",
        label_ka: "由良兵庫邸",
        id: 4422
      })
      
    
      this.add({
        label_eng: "The Lovers' Travel",
        label_ka: "道行比翼の袖",
        id: 4423
      })
      
    
      this.add({
        label_eng: "Tombei's House",
        label_ka: "頓兵衛内",
        id: 4424
      })
      
    
      this.add({
        label_eng: "The Divine Miracle",
        label_ka: "神霊奇瑞",
        id: 4425
      })
      
    
      this.add({
        label_eng: "The Hanabishiya Brothel",
        label_ka: "花菱屋",
        id: 4426
      })
      
    
      this.add({
        label_eng: "Hiuga Island",
        label_ka: "日向嶋",
        id: 4427
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4428
      })
      
    
      this.add({
        label_eng: "The Double Suicide",
        label_ka: "道行霜夜の千日",
        id: 4429
      })
      
    
      this.add({
        label_eng: "Akogi Bay",
        label_ka: "阿漕浦",
        id: 4430
      })
      
    
      this.add({
        label_eng: "Heiji's House",
        label_ka: "平治住家",
        id: 4431
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 4432
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 4433
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 4434
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers (\"\"Nemosaeru Haruno Usuzuki\"\")",
        label_ka: "団子売",
        id: 4435
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 4436
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4437
      })
      
    
      this.add({
        label_eng: "Sumiyoshi Beach",
        label_ka: "住吉浜辺",
        id: 4438
      })
      
    
      this.add({
        label_eng: "In Front of the Hikosan Gongen Shrine",
        label_ka: "彦山権現社前",
        id: 4439
      })
      
    
      this.add({
        label_eng: "Otonari's Mansion",
        label_ka: "郡音成館",
        id: 4440
      })
      
    
      this.add({
        label_eng: "The Yamaguchi Hachiman Shrine",
        label_ka: "山口八幡",
        id: 4441
      })
      
    
      this.add({
        label_eng: "Ichimisai's Mansion",
        label_ka: "一味斎屋敷",
        id: 4442
      })
      
    
      this.add({
        label_eng: "Suma Beach",
        label_ka: "須磨の浦",
        id: 4443
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "瓢箪棚",
        id: 4444
      })
      
    
      this.add({
        label_eng: "The Sugisaka Cemetery",
        label_ka: "杉坂墓所",
        id: 4445
      })
      
    
      this.add({
        label_eng: "Rokusuke's House",
        label_ka: "毛谷村六助住家",
        id: 4446
      })
      
    
      this.add({
        label_eng: "The Revenge at the Tatsunami Mansion",
        label_ka: "立浪館仇討",
        id: 4447
      })
      
    
      this.add({
        label_eng: "Kikyo Field",
        label_ka: "桔梗原",
        id: 4448
      })
      
    
      this.add({
        label_eng: "Messenger Kagekatsu's Visit (See also Kenshin's Mansion)",
        label_ka: "景勝上使 (See also 謙信館）",
        id: 4449
      })
      
    
      this.add({
        label_eng: "Kansuke's House",
        label_ka: "勘助住家",
        id: 4450
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 4451
      })
      
    
      this.add({
        label_eng: "The Fox-Kuzunoha's Travel",
        label_ka: "蘭菊の乱れ",
        id: 4452
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 4453
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 4454
      })
      
    
      this.add({
        label_eng: "The Kaminari Gate",
        label_ka: "雷門",
        id: 4455
      })
      
    
      this.add({
        label_eng: "The Tea House",
        label_ka: "揚屋",
        id: 4456
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 4457
      })
      
    
      this.add({
        label_eng: "The Suwa Shrine",
        label_ka: "諏訪明神百度石",
        id: 4458
      })
      
    
      this.add({
        label_eng: "Kikyo Field",
        label_ka: "桔梗原",
        id: 4459
      })
      
    
      this.add({
        label_eng: "Kagekatsu and Wooden Clogs",
        label_ka: "景勝下駄",
        id: 4460
      })
      
    
      this.add({
        label_eng: "Kansuke's House",
        label_ka: "勘助住家",
        id: 4461
      })
      
    
      this.add({
        label_eng: "The Drug Peddlers' Journey",
        label_ka: "道行似合の女夫丸",
        id: 4462
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 4463
      })
      
    
      this.add({
        label_eng: "The Hanabishiya Brothel",
        label_ka: "花菱屋",
        id: 4464
      })
      
    
      this.add({
        label_eng: "Hiuga Island",
        label_ka: "日向嶋",
        id: 4465
      })
      
    
      this.add({
        label_eng: "The Yamanaya Tea House",
        label_ka: "山名屋",
        id: 4466
      })
      
    
      this.add({
        label_eng: "Chikuma River",
        label_ka: "筑摩川",
        id: 4467
      })
      
    
      this.add({
        label_eng: "Matasuke's House",
        label_ka: "又助住家",
        id: 4468
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 4469
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 4470
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 4471
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 4472
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4473
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4474
      })
      
    
      this.add({
        label_eng: "The Inn at Ishibe",
        label_ka: "石部宿屋",
        id: 4475
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 4476
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 4477
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 4478
      })
      
    
      this.add({
        label_eng: "The Inn at Otsu",
        label_ka: "大津宿屋",
        id: 4479
      })
      
    
      this.add({
        label_eng: "The Improvised Bamboo Hearse",
        label_ka: "笹引",
        id: 4480
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 4481
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 4482
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 4483
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 4484
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 4485
      })
      
    
      this.add({
        label_eng: "The Town of Shiga",
        label_ka: "志賀の里",
        id: 4486
      })
      
    
      this.add({
        label_eng: "The Sakuranomiya Shrine",
        label_ka: "桜の宮物狂",
        id: 4487
      })
      
    
      this.add({
        label_eng: "The Todaiji Temple",
        label_ka: "東大寺",
        id: 4488
      })
      
    
      this.add({
        label_eng: "The Nigatsudo Hall",
        label_ka: "二月堂",
        id: 4489
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 4490
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 4491
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 4492
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 4493
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 4494
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 4495
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 4496
      })
      
    
      this.add({
        label_eng: "The Suzugamori Execution Ground",
        label_ka: "鈴ヶ森",
        id: 4497
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 4498
      })
      
    
      this.add({
        label_eng: "The Two Look-Alike Servants",
        label_ka: "信田森二人奴",
        id: 4499
      })
      
    
      this.add({
        label_eng: "The Oil Store",
        label_ka: "油店",
        id: 4500
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 4501
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 4502
      })
      
    
      this.add({
        label_eng: "In front of the Storehouse",
        label_ka: "蔵前",
        id: 4503
      })
      
    
      this.add({
        label_eng: "The Fan Shop",
        label_ka: "扇屋内",
        id: 4504
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 4505
      })
      
    
      this.add({
        label_eng: "In Front of the Sumiyoshi Shrine",
        label_ka: "住吉鳥居前",
        id: 4506
      })
      
    
      this.add({
        label_eng: "The Curio Shop at Uchihonmachi",
        label_ka: "内本町道具屋",
        id: 4507
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 4508
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 4509
      })
      
    
      this.add({
        label_eng: "The Bean Curd Maker's",
        label_ka: "豆腐屋",
        id: 4510
      })
      
    
      this.add({
        label_eng: "The Village of Hanyu (See also Hanyu Village from \"\"The Trouble in the Date Household\"\")",
        label_ka: "埴生村",
        id: 4511
      })
      
    
      this.add({
        label_eng: "The Earthen Bridge (See also The Earthen Bridge from \"\"The Trouble in the Date Household\"\")",
        label_ka: "土橋",
        id: 4512
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 4513
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 4514
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 4515
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 4516
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 4517
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 4518
      })
      
    
      this.add({
        label_eng: "The Fisherwoman",
        label_ka: "海女",
        id: 4519
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 4520
      })
      
    
      this.add({
        label_eng: "The Kamo Residence",
        label_ka: "加茂館",
        id: 4521
      })
      
    
      this.add({
        label_eng: "The Insane Yasuna",
        label_ka: "保名物狂",
        id: 4522
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 4523
      })
      
    
      this.add({
        label_eng: "The Fox-Kuzunoha's Travel",
        label_ka: "蘭菊の乱れ",
        id: 4524
      })
      
    
      this.add({
        label_eng: "The Two Look-Alike Servants",
        label_ka: "信田森二人奴",
        id: 4525
      })
      
    
      this.add({
        label_eng: "Akogi Bay",
        label_ka: "阿漕浦",
        id: 4526
      })
      
    
      this.add({
        label_eng: "Heiji's House",
        label_ka: "平治住家",
        id: 4527
      })
      
    
      this.add({
        label_eng: "The Okawa River",
        label_ka: "大川",
        id: 4528
      })
      
    
      this.add({
        label_eng: "The Mass Murder",
        label_ka: "五人伐",
        id: 4529
      })
      
    
      this.add({
        label_eng: "The Haunted House at Hakone",
        label_ka: "箱根先化住居",
        id: 4530
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 4531
      })
      
    
      this.add({
        label_eng: "The Shujaku River Bank",
        label_ka: "朱雀堤",
        id: 4532
      })
      
    
      this.add({
        label_eng: "Messenger Shikitae (See also The Mansion of Prince Tamaki)",
        label_ka: "敷妙使者 (See also 環の宮明御殿)",
        id: 4533
      })
      
    
      this.add({
        label_eng: "The Arrowhead (See also The Mansion of Prince Tamaki)",
        label_ka: "矢の根 (See also 環の宮明御殿)",
        id: 4534
      })
      
    
      this.add({
        label_eng: "Sodehagi's Appeal (See also The Mansion of Prince Tamaki)",
        label_ka: "袖萩祭文 (See also 環の宮明御殿)",
        id: 4535
      })
      
    
      this.add({
        label_eng: "Autumn on Mount Kon",
        label_ka: "崑山の秋",
        id: 4536
      })
      
    
      this.add({
        label_eng: "The House of Hunter Genza",
        label_ka: "猟師源左内",
        id: 4537
      })
      
    
      this.add({
        label_eng: "The Lakeside in Winter",
        label_ka: "冬の湖畔",
        id: 4538
      })
      
    
      this.add({
        label_eng: "Michiharu's Mansion",
        label_ka: "道春館",
        id: 4539
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 4540
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 4541
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 4542
      })
      
    
      this.add({
        label_eng: "The Helmet Identification at Tsurugaoka",
        label_ka: "鶴が岡兜改め",
        id: 4543
      })
      
    
      this.add({
        label_eng: "The Love Poem",
        label_ka: "恋歌",
        id: 4544
      })
      
    
      this.add({
        label_eng: "Rikiya Bears a Message",
        label_ka: "桃井館力弥上使",
        id: 4545
      })
      
    
      this.add({
        label_eng: "The Cutting of the Pine Branch",
        label_ka: "松切り",
        id: 4546
      })
      
    
      this.add({
        label_eng: "The Bribing of Moronao",
        label_ka: "大手下馬先進物　",
        id: 4547
      })
      
    
      this.add({
        label_eng: "Okaru Delivers the Letter Case (Kaoyo's Poem)",
        label_ka: "おかる文使い",
        id: 4548
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 4549
      })
      
    
      this.add({
        label_eng: "The Back Gate",
        label_ka: "裏門",
        id: 4550
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 4551
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 4552
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 4553
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 4554
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 4555
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 4556
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 4557
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 4558
      })
      
    
      this.add({
        label_eng: "The Snowball",
        label_ka: "雪転かし",
        id: 4559
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 4560
      })
      
    
      this.add({
        label_eng: "The Hanamizubashi Bridge",
        label_ka: "花水橋引揚",
        id: 4561
      })
      
    
      this.add({
        label_eng: "The Oil Store",
        label_ka: "油店",
        id: 4562
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 4563
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 4564
      })
      
    
      this.add({
        label_eng: "In front of the Storehouse",
        label_ka: "蔵前",
        id: 4565
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 4566
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 4567
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 4568
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 4569
      })
      
    
      this.add({
        label_eng: "The Mask Peddler",
        label_ka: "面売り",
        id: 4570
      })
      
    
      this.add({
        label_eng: "The New Barrier at Fujikawa with Insertion of the Scene of Dumpling Peddlers",
        label_ka: "富士川新関 引抜き 団子売",
        id: 4571
      })
      
    
      this.add({
        label_eng: "The Bamboo Groove",
        label_ka: "竹藪",
        id: 4572
      })
      
    
      this.add({
        label_eng: "The Town of Okazaki",
        label_ka: "岡崎",
        id: 4573
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4574
      })
      
    
      this.add({
        label_eng: "Shundo Jiroemon's House",
        label_ka: "春藤次郎右衛門屋敷",
        id: 4575
      })
      
    
      this.add({
        label_eng: "The Daianji River Bank",
        label_ka: "大安寺堤",
        id: 4576
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 4577
      })
      
    
      this.add({
        label_eng: "The Lumber Carriers' Song",
        label_ka: "木遣り音頭",
        id: 4578
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 4579
      })
      
    
      this.add({
        label_eng: "The Pine Grove",
        label_ka: "小松原",
        id: 4580
      })
      
    
      this.add({
        label_eng: "Emiji's Mansion",
        label_ka: "蝦夷子館",
        id: 4581
      })
      
    
      this.add({
        label_eng: "Sarusawa Pond",
        label_ka: "猿沢池",
        id: 4582
      })
      
    
      this.add({
        label_eng: "Sadaka's (Dazai) Mansion",
        label_ka: "太宰館",
        id: 4583
      })
      
    
      this.add({
        label_eng: "Imoyama and Seyama Mansions",
        label_ka: "妹山背山",
        id: 4584
      })
      
    
      this.add({
        label_eng: "The Well-Cleaning",
        label_ka: "井戸替",
        id: 4585
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 4586
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 4587
      })
      
    
      this.add({
        label_eng: "Fukashichi's Visit",
        label_ka: "鱶七上使",
        id: 4588
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 4589
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 4590
      })
      
    
      this.add({
        label_eng: "The Assassination of Iruka",
        label_ka: "入鹿誅伐",
        id: 4591
      })
      
    
      this.add({
        label_eng: "The Pine Grove",
        label_ka: "小松原",
        id: 4592
      })
      
    
      this.add({
        label_eng: "Emiji's Mansion",
        label_ka: "蝦夷子館",
        id: 4593
      })
      
    
      this.add({
        label_eng: "Sarusawa Pond",
        label_ka: "猿沢池",
        id: 4594
      })
      
    
      this.add({
        label_eng: "Sadaka's (Dazai) Mansion",
        label_ka: "太宰館",
        id: 4595
      })
      
    
      this.add({
        label_eng: "Imoyama and Seyama Mansions",
        label_ka: "妹山背山",
        id: 4596
      })
      
    
      this.add({
        label_eng: "The Deer Killing",
        label_ka: "鹿殺し",
        id: 4597
      })
      
    
      this.add({
        label_eng: "Shibaroku's House",
        label_ka: "芝六住家",
        id: 4598
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 4599
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 4600
      })
      
    
      this.add({
        label_eng: "Fukashichi's Visit",
        label_ka: "鱶七上使",
        id: 4601
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 4602
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 4603
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 4604
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4605
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4606
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 4607
      })
      
    
      this.add({
        label_eng: "The Bamboo Room",
        label_ka: "竹の間",
        id: 4608
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 4609
      })
      
    
      this.add({
        label_eng: "The Pine-Lined Road at Akasaka",
        label_ka: "赤坂並木",
        id: 4610
      })
      
    
      this.add({
        label_eng: "Kajiwara's Mansion",
        label_ka: "梶原館",
        id: 4611
      })
      
    
      this.add({
        label_eng: "The Argument on the Uji River Crossing",
        label_ka: "先陣問答",
        id: 4612
      })
      
    
      this.add({
        label_eng: "Disinheritance of Genda",
        label_ka: "源太勘当",
        id: 4613
      })
      
    
      this.add({
        label_eng: "The Fortune Teller",
        label_ka: "辻法印",
        id: 4614
      })
      
    
      this.add({
        label_eng: "The Tea House at Kanzaki",
        label_ka: "神崎揚屋",
        id: 4615
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 4616
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 4617
      })
      
    
      this.add({
        label_eng: "Eitai Riverside at Utsubo",
        label_ka: "靱永代浜",
        id: 4618
      })
      
    
      this.add({
        label_eng: "Hyosuke's House",
        label_ka: "兵助内 (天王寺村兵助内)",
        id: 4619
      })
      
    
      this.add({
        label_eng: "The Masui Well",
        label_ka: "増井",
        id: 4620
      })
      
    
      this.add({
        label_eng: "The Pine-Lined Road at Akasaka",
        label_ka: "赤坂並木",
        id: 4621
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "二人三番叟",
        id: 4622
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 4623
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 4624
      })
      
    
      this.add({
        label_eng: "Iwashiro Hangan's Mansion",
        label_ka: "岩城判官館",
        id: 4625
      })
      
    
      this.add({
        label_eng: "Naoi Beach",
        label_ka: "直井浦",
        id: 4626
      })
      
    
      this.add({
        label_eng: "On the Beach",
        label_ka: "浜路",
        id: 4627
      })
      
    
      this.add({
        label_eng: "Sanshodayu's Mansion",
        label_ka: "さんしょう太夫館",
        id: 4628
      })
      
    
      this.add({
        label_eng: "Zushiomaru Success",
        label_ka: "厨子王丸出世",
        id: 4629
      })
      
    
      this.add({
        label_eng: "Chestnut Field",
        label_ka: "栗畑",
        id: 4630
      })
      
    
      this.add({
        label_eng: "Honzo's Villa",
        label_ka: "本蔵下屋敷",
        id: 4631
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 4632
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 4633
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 4634
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 4635
      })
      
    
      this.add({
        label_eng: "The Sumo Arena at Horie",
        label_ka: "堀江相撲場",
        id: 4636
      })
      
    
      this.add({
        label_eng: "The Rice Shop at Daihojimachi",
        label_ka: "大宝寺町米屋",
        id: 4637
      })
      
    
      this.add({
        label_eng: "The Fighting at Nambaura",
        label_ka: "難波裏喧嘩",
        id: 4638
      })
      
    
      this.add({
        label_eng: "The Town of Hashimoto",
        label_ka: "橋本",
        id: 4639
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 4640
      })
      
    
      this.add({
        label_eng: "The Sumo Arena at Horie",
        label_ka: "堀江相撲場",
        id: 4641
      })
      
    
      this.add({
        label_eng: "The Rice Shop at Daihojimachi",
        label_ka: "大宝寺町米屋",
        id: 4642
      })
      
    
      this.add({
        label_eng: "The Fighting at Nambaura",
        label_ka: "難波裏喧嘩",
        id: 4643
      })
      
    
      this.add({
        label_eng: "The Town of Hashimoto",
        label_ka: "橋本",
        id: 4644
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 4645
      })
      
    
      this.add({
        label_eng: "The Three Blind Masseurs",
        label_ka: "三人座頭",
        id: 4646
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 4647
      })
      
    
      this.add({
        label_eng: "The Haori Falls Off",
        label_ka: "羽織落し",
        id: 4648
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 4649
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 4650
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4651
      })
      
    
      this.add({
        label_eng: "The Helmet Identification at Tsurugaoka",
        label_ka: "鶴が岡兜改め",
        id: 4652
      })
      
    
      this.add({
        label_eng: "The Love Poem",
        label_ka: "恋歌",
        id: 4653
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 4654
      })
      
    
      this.add({
        label_eng: "The Back Gate",
        label_ka: "裏門",
        id: 4655
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 4656
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 4657
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 4658
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 4659
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 4660
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 4661
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 4662
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 4663
      })
      
    
      this.add({
        label_eng: "The Snowball",
        label_ka: "雪転かし",
        id: 4664
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 4665
      })
      
    
      this.add({
        label_eng: "The Hanamizubashi Bridge",
        label_ka: "花水橋引揚",
        id: 4666
      })
      
    
      this.add({
        label_eng: "The Bamboo Room",
        label_ka: "竹の間",
        id: 4667
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 4668
      })
      
    
      this.add({
        label_eng: "Masaoka's Loyalty",
        label_ka: "政岡忠義",
        id: 4669
      })
      
    
      this.add({
        label_eng: "Under the Floor",
        label_ka: "床下",
        id: 4670
      })
      
    
      this.add({
        label_eng: "Jurobei's House",
        label_ka: "十郎兵衛内",
        id: 4671
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 4672
      })
      
    
      this.add({
        label_eng: "On the Hirado Beach",
        label_ka: "平戸浜伝ひ",
        id: 4673
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 4674
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 4675
      })
      
    
      this.add({
        label_eng: "Kanki's Mansion (See also The Shishigajo Catsle)",
        label_ka: "甘輝館 (See also 獅子が城)",
        id: 4676
      })
      
    
      this.add({
        label_eng: "The Red Signal (See also The Shishigajo Catsle)",
        label_ka: "紅流し (See also 獅子が城)",
        id: 4677
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 4678
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers",
        label_ka: "団子売",
        id: 4679
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 4680
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed of Shijo",
        label_ka: "四条河原",
        id: 4681
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 4682
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 4683
      })
      
    
      this.add({
        label_eng: "The Wheat-Gluten Peddler's Travel",
        label_ka: "道行詞甘替",
        id: 4684
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 4685
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 4686
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 4687
      })
      
    
      this.add({
        label_eng: "The Petition",
        label_ka: "訴訟",
        id: 4688
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 4689
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4690
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 4691
      })
      
    
      this.add({
        label_eng: "The Suicide with a Scythe",
        label_ka: "弥作鎌腹",
        id: 4692
      })
      
    
      this.add({
        label_eng: "The Hamanomiya Riding Ground",
        label_ka: "浜の宮馬場",
        id: 4693
      })
      
    
      this.add({
        label_eng: "The House of Ichinoshin Asaka",
        label_ka: "浅香市之進留守宅",
        id: 4694
      })
      
    
      this.add({
        label_eng: "The Tea Ceremony House",
        label_ka: "数寄屋",
        id: 4695
      })
      
    
      this.add({
        label_eng: "The Revenge on Kyobashi Bridge in Fushimi",
        label_ka: "伏見京橋女敵討",
        id: 4696
      })
      
    
      this.add({
        label_eng: "The Sento Palace",
        label_ka: "仙洞御所",
        id: 4697
      })
      
    
      this.add({
        label_eng: "The Nunnery at Kitasaga",
        label_ka: "北嵯峨",
        id: 4698
      })
      
    
      this.add({
        label_eng: "Yoshitsune's Mansion at Horikawa",
        label_ka: "堀川御所",
        id: 4699
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 4700
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 4701
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 4702
      })
      
    
      this.add({
        label_eng: "The Ouchi Mansion",
        label_ka: "大内館",
        id: 4703
      })
      
    
      this.add({
        label_eng: "Tatara Beach",
        label_ka: "多々羅浜",
        id: 4704
      })
      
    
      this.add({
        label_eng: "The Uji River",
        label_ka: "宇治川蛍狩",
        id: 4705
      })
      
    
      this.add({
        label_eng: "The Tea Stall on the Makuzu Plain",
        label_ka: "真葛ヶ原真葛が原茶店",
        id: 4706
      })
      
    
      this.add({
        label_eng: "Yuminosuke's House at Okazaki",
        label_ka: "岡崎隠れ家",
        id: 4707
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 4708
      })
      
    
      this.add({
        label_eng: "Yuminosuke's Mansion",
        label_ka: "弓之助屋舗",
        id: 4709
      })
      
    
      this.add({
        label_eng: "The Ose River",
        label_ka: "小瀬川",
        id: 4710
      })
      
    
      this.add({
        label_eng: "Mt. Maya",
        label_ka: "摩耶が嶽",
        id: 4711
      })
      
    
      this.add({
        label_eng: "The Tea House at Oiso",
        label_ka: "大磯揚屋",
        id: 4712
      })
      
    
      this.add({
        label_eng: "The Patent Medicine Seller",
        label_ka: "薬売り",
        id: 4713
      })
      
    
      this.add({
        label_eng: "The Hut at Hamamatsu",
        label_ka: "浜松小屋",
        id: 4714
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 4715
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 4716
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 4717
      })
      
    
      this.add({
        label_eng: "The Second Blooming",
        label_ka: "帰り咲吾妻の路草",
        id: 4718
      })
      
    
      this.add({
        label_eng: "Nami",
        label_ka: "波",
        id: 4719
      })
      
    
      this.add({
        label_eng: "Hatsuse mode",
        label_ka: "初瀬詣",
        id: 4720
      })
      
    
      this.add({
        label_eng: "Omon Toda",
        label_ka: "おもん藤太",
        id: 4721
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 4722
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 4723
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 4724
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 4725
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 4726
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 4727
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 4728
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 4729
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 4730
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 4731
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 4732
      })
      
    
      this.add({
        label_eng: "The Okawa River",
        label_ka: "大川",
        id: 4733
      })
      
    
      this.add({
        label_eng: "The Mass Murder",
        label_ka: "五人伐",
        id: 4734
      })
      
    
      this.add({
        label_eng: "Messenger Kagekatsu's Visit (See also Kenshin's Mansion)",
        label_ka: "景勝上使 (See also 謙信館）",
        id: 4735
      })
      
    
      this.add({
        label_eng: "The Delivery of the Rifle (See also Kenshin's Mansion)",
        label_ka: "鉄砲渡し (See also 謙信館)",
        id: 4736
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 4737
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 4738
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4739
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4740
      })
      
    
      this.add({
        label_eng: "The Fisherwoman",
        label_ka: "海女",
        id: 4741
      })
      
    
      this.add({
        label_eng: "Komachi in Her Old Age",
        label_ka: "関寺小町",
        id: 4742
      })
      
    
      this.add({
        label_eng: "The Haunted House at Hakone",
        label_ka: "箱根先化住居",
        id: 4743
      })
      
    
      this.add({
        label_eng: "The Helmet Identification at Tsurugaoka",
        label_ka: "鶴が岡兜改め",
        id: 4744
      })
      
    
      this.add({
        label_eng: "The Love Poem",
        label_ka: "恋歌",
        id: 4745
      })
      
    
      this.add({
        label_eng: "The Cutting of the Pine Branch",
        label_ka: "松切り",
        id: 4746
      })
      
    
      this.add({
        label_eng: "The Bribing of Moronao",
        label_ka: "大手下馬先進物　",
        id: 4747
      })
      
    
      this.add({
        label_eng: "Okaru Delivers the Letter Case (Kaoyo's Poem)",
        label_ka: "おかる文使い",
        id: 4748
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 4749
      })
      
    
      this.add({
        label_eng: "The Back Gate",
        label_ka: "裏門",
        id: 4750
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 4751
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 4752
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 4753
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 4754
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 4755
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 4756
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 4757
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 4758
      })
      
    
      this.add({
        label_eng: "The Snowball",
        label_ka: "雪転かし",
        id: 4759
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 4760
      })
      
    
      this.add({
        label_eng: "The Hanamizubashi Bridge",
        label_ka: "花水橋引揚",
        id: 4761
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4762
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4763
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 4764
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 4765
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 4766
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 4767
      })
      
    
      this.add({
        label_eng: "The Handing on the Secrets of Calligraphy",
        label_ka: "筆法伝授",
        id: 4768
      })
      
    
      this.add({
        label_eng: "At the Fence",
        label_ka: "築地",
        id: 4769
      })
      
    
      this.add({
        label_eng: "The Beating of Kariya",
        label_ka: "杖折檻",
        id: 4770
      })
      
    
      this.add({
        label_eng: "The Cockcrow",
        label_ka: "東天紅",
        id: 4771
      })
      
    
      this.add({
        label_eng: "The Departure of Michizane",
        label_ka: "丞相名残",
        id: 4772
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 4773
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 4774
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 4775
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 4776
      })
      
    
      this.add({
        label_eng: "Mount Tempai",
        label_ka: "天拝山",
        id: 4777
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4778
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4779
      })
      
    
      this.add({
        label_eng: "The Itodo Myojin Shrine",
        label_ka: "射手明神",
        id: 4780
      })
      
    
      this.add({
        label_eng: "Yoshinaka's Mansion",
        label_ka: "義仲館",
        id: 4781
      })
      
    
      this.add({
        label_eng: "The Toothbrush Maker's House",
        label_ka: "楊枝屋",
        id: 4782
      })
      
    
      this.add({
        label_eng: "The Travel of the Bereaved Family",
        label_ka: "道行君後紐",
        id: 4783
      })
      
    
      this.add({
        label_eng: "The Inn at Otsu",
        label_ka: "大津宿屋",
        id: 4784
      })
      
    
      this.add({
        label_eng: "The Improvised Bamboo Hearse",
        label_ka: "笹引",
        id: 4785
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 4786
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 4787
      })
      
    
      this.add({
        label_eng: "Kajiwara's Mansion",
        label_ka: "梶原館",
        id: 4788
      })
      
    
      this.add({
        label_eng: "The Argument on the Uji River Crossing",
        label_ka: "先陣問答",
        id: 4789
      })
      
    
      this.add({
        label_eng: "Disinheritance of Genda",
        label_ka: "源太勘当",
        id: 4790
      })
      
    
      this.add({
        label_eng: "The Tea House at Kanzaki",
        label_ka: "神崎揚屋",
        id: 4791
      })
      
    
      this.add({
        label_eng: "The Innermost Room",
        label_ka: "奥座敷",
        id: 4792
      })
      
    
      this.add({
        label_eng: "The Kasaneizutsu Tea House",
        label_ka: "六軒町",
        id: 4793
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 4794
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 4795
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4796
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4797
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 4798
      })
      
    
      this.add({
        label_eng: "The Slanderous Remarks",
        label_ka: "口三味線",
        id: 4799
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 4800
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 4801
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 4802
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 4803
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 4804
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 4805
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 4806
      })
      
    
      this.add({
        label_eng: "The Mask Peddler",
        label_ka: "面売り",
        id: 4807
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 4808
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 4809
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 4810
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 4811
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 4812
      })
      
    
      this.add({
        label_eng: "The Tattooing",
        label_ka: "入墨",
        id: 4813
      })
      
    
      this.add({
        label_eng: "A Visit of Two Ladies-in-Waiting (See also Kinugawa Villege)",
        label_ka: "局使者 (See also 絹川村)",
        id: 4814
      })
      
    
      this.add({
        label_eng: "Rice Washing (See also Kinugawa Villege)",
        label_ka: "米洗い (See also 絹川村)",
        id: 4815
      })
      
    
      this.add({
        label_eng: "Parting of Miuranosuke with His Mother (See also Kinugawa Villege)",
        label_ka: "三浦之助母別れ（三浦別れ） (See also 絹川村)",
        id: 4816
      })
      
    
      this.add({
        label_eng: "Takatsuna's Declaration (See also Kinugawa Villege)",
        label_ka: "高綱物語 (See also 絹川村)",
        id: 4817
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 4818
      })
      
    
      this.add({
        label_eng: "The Double Suicide",
        label_ka: "道行霜夜の千日",
        id: 4819
      })
      
    
      this.add({
        label_eng: "The Uji River",
        label_ka: "宇治川蛍狩",
        id: 4820
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 4821
      })
      
    
      this.add({
        label_eng: "The Patent Medicine Seller",
        label_ka: "薬売り",
        id: 4822
      })
      
    
      this.add({
        label_eng: "The Hut at Hamamatsu",
        label_ka: "浜松小屋",
        id: 4823
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 4824
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 4825
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 4826
      })
      
    
      this.add({
        label_eng: "In Front of the Gate",
        label_ka: "門前",
        id: 4827
      })
      
    
      this.add({
        label_eng: "The Poisoned Sake",
        label_ka: "毒酒",
        id: 4828
      })
      
    
      this.add({
        label_eng: "The Port of Naniwa",
        label_ka: "浪花入江",
        id: 4829
      })
      
    
      this.add({
        label_eng: "Kazuenosuke's Urgent Call",
        label_ka: "主計之介早討",
        id: 4830
      })
      
    
      this.add({
        label_eng: "Masakiyo's Castle",
        label_ka: "正清本城",
        id: 4831
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 4832
      })
      
    
      this.add({
        label_eng: "Kiyomori's Mansion",
        label_ka: "清盛館兵法",
        id: 4833
      })
      
    
      this.add({
        label_eng: "The Chrysanthemum Garden (See also The Rear Garden)",
        label_ka: "菊畑 (See also 奥庭)",
        id: 4834
      })
      
    
      this.add({
        label_eng: "The Rear Garden (See also The Chrysanthemum Garden)",
        label_ka: "奥庭 (See also 菊畑)",
        id: 4835
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 4836
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 4837
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 4838
      })
      
    
      this.add({
        label_eng: "In Front of the Gate",
        label_ka: "門前",
        id: 4839
      })
      
    
      this.add({
        label_eng: "The Poisoned Sake",
        label_ka: "毒酒",
        id: 4840
      })
      
    
      this.add({
        label_eng: "The Port of Naniwa",
        label_ka: "浪花入江",
        id: 4841
      })
      
    
      this.add({
        label_eng: "Kazuenosuke's Urgent Call",
        label_ka: "主計之介早討",
        id: 4842
      })
      
    
      this.add({
        label_eng: "Masakiyo's Castle",
        label_ka: "正清本城",
        id: 4843
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 4844
      })
      
    
      this.add({
        label_eng: "The New Barrier at Fujikawa with Insertion of the Scene of Dumpling Peddlers",
        label_ka: "富士川新関 引抜き 団子売",
        id: 4845
      })
      
    
      this.add({
        label_eng: "The Bamboo Groove",
        label_ka: "竹藪",
        id: 4846
      })
      
    
      this.add({
        label_eng: "The Town of Okazaki",
        label_ka: "岡崎",
        id: 4847
      })
      
    
      this.add({
        label_eng: "Honzo's Villa",
        label_ka: "本蔵下屋敷",
        id: 4848
      })
      
    
      this.add({
        label_eng: "Emiji's Mansion",
        label_ka: "蝦夷子館",
        id: 4849
      })
      
    
      this.add({
        label_eng: "The Well-Cleaning",
        label_ka: "井戸替",
        id: 4850
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 4851
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 4852
      })
      
    
      this.add({
        label_eng: "Fukashichi's Visit",
        label_ka: "鱶七上使",
        id: 4853
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 4854
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 4855
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4856
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4857
      })
      
    
      this.add({
        label_eng: "The Camp Gate",
        label_ka: "陣門",
        id: 4858
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 4859
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 4860
      })
      
    
      this.add({
        label_eng: "Drawing Lots at Wakigahara",
        label_ka: "脇ヶ浜宝引",
        id: 4861
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 4862
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 4863
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "吉田屋",
        id: 4864
      })
      
    
      this.add({
        label_eng: "The Bamboo Room",
        label_ka: "竹の間",
        id: 4865
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 4866
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "靱猿",
        id: 4867
      })
      
    
      this.add({
        label_eng: "The Court of the Ming Emperor",
        label_ka: "大明御殿",
        id: 4868
      })
      
    
      this.add({
        label_eng: "The Rearmost Chamber",
        label_ka: "大明御殿奥殿",
        id: 4869
      })
      
    
      this.add({
        label_eng: "The Reedy Marshes",
        label_ka: "芦辺",
        id: 4870
      })
      
    
      this.add({
        label_eng: "On the Hirado Beach",
        label_ka: "平戸浜伝ひ",
        id: 4871
      })
      
    
      this.add({
        label_eng: "The Chinese Ship",
        label_ka: "唐土船",
        id: 4872
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 4873
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 4874
      })
      
    
      this.add({
        label_eng: "Kanki's Mansion (See also The Shishigajo Catsle)",
        label_ka: "甘輝館 (See also 獅子が城)",
        id: 4875
      })
      
    
      this.add({
        label_eng: "The Red Signal (See also The Shishigajo Catsle)",
        label_ka: "紅流し (See also 獅子が城)",
        id: 4876
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House in Yamashina",
        label_ka: "山科閑居",
        id: 4877
      })
      
    
      this.add({
        label_eng: "Jihei's House (The Paper Store)",
        label_ka: "天満紙屋内(紙屋内)",
        id: 4878
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 4879
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 4880
      })
      
    
      this.add({
        label_eng: "Terutora Serves a Meal",
        label_ka: "輝虎配膳",
        id: 4881
      })
      
    
      this.add({
        label_eng: "Sanetsuna's Mansion",
        label_ka: "直江屋敷",
        id: 4882
      })
      
    
      this.add({
        label_eng: "The Pine Grove at Tosamachi",
        label_ka: "土佐町松原",
        id: 4883
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 4884
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 4885
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 4886
      })
      
    
      this.add({
        label_eng: "The Laundry",
        label_ka: "碪拍子",
        id: 4887
      })
      
    
      this.add({
        label_eng: "The House of Tokutayu (Tokudayu or Tokutaifu)",
        label_ka: "徳太夫住家",
        id: 4888
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 4889
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 4890
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 4891
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 4892
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4893
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 4894
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 4895
      })
      
    
      this.add({
        label_eng: "Manago Village Headman's House",
        label_ka: "真那古庄司館",
        id: 4896
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 4897
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 4898
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 4899
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 4900
      })
      
    
      this.add({
        label_eng: "Street Entertainers",
        label_ka: "万歳",
        id: 4901
      })
      
    
      this.add({
        label_eng: "The Fisherwoman",
        label_ka: "海女",
        id: 4902
      })
      
    
      this.add({
        label_eng: "Komachi in Her Old Age",
        label_ka: "関寺小町",
        id: 4903
      })
      
    
      this.add({
        label_eng: "Heron Girl",
        label_ka: "鷺娘",
        id: 4904
      })
      
    
      this.add({
        label_eng: "The Return from Chikubu Island",
        label_ka: "竹生島遊覧",
        id: 4905
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 4906
      })
      
    
      this.add({
        label_eng: "Inquisition by Seno-o",
        label_ka: "瀬尾十郎詮議",
        id: 4907
      })
      
    
      this.add({
        label_eng: "Sanemori's Explanation",
        label_ka: "実盛物語",
        id: 4908
      })
      
    
      this.add({
        label_eng: "The Spinning Frame",
        label_ka: "綿繰馬",
        id: 4909
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 4910
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 4911
      })
      
    
      this.add({
        label_eng: "The Pilgrim's Song",
        label_ka: "順礼歌",
        id: 4912
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 4913
      })
      
    
      this.add({
        label_eng: "The Haori Falls Off",
        label_ka: "羽織落し",
        id: 4914
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 4915
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 4916
      })
      
    
      this.add({
        label_eng: "The Cherry-Viewing",
        label_ka: "地主権現花見",
        id: 4917
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 4918
      })
      
    
      this.add({
        label_eng: "The Messenger Shibukawa",
        label_ka: "渋川使者",
        id: 4919
      })
      
    
      this.add({
        label_eng: "The Consultation",
        label_ka: "評議",
        id: 4920
      })
      
    
      this.add({
        label_eng: "Sonobe's House",
        label_ka: "園部屋敷",
        id: 4921
      })
      
    
      this.add({
        label_eng: "The Blacksmith Shop",
        label_ka: "鍛冶屋",
        id: 4922
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers",
        label_ka: "団子売",
        id: 4923
      })
      
    
      this.add({
        label_eng: "The Bandai Pond",
        label_ka: "万代池",
        id: 4924
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 4925
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 4926
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 4927
      })
      
    
      this.add({
        label_eng: "In front of the Storehouse",
        label_ka: "蔵前",
        id: 4928
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 4929
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 4930
      })
      
    
      this.add({
        label_eng: "The Disinheritance of Saizaburo",
        label_ka: "才三勘当",
        id: 4931
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 4932
      })
      
    
      this.add({
        label_eng: "The Suzugamori Execution Ground",
        label_ka: "鈴ヶ森",
        id: 4933
      })
      
    
      this.add({
        label_eng: "The Cherry-Viewing",
        label_ka: "地主権現花見",
        id: 4934
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 4935
      })
      
    
      this.add({
        label_eng: "The Messenger Shibukawa",
        label_ka: "渋川使者",
        id: 4936
      })
      
    
      this.add({
        label_eng: "The Consultation",
        label_ka: "評議",
        id: 4937
      })
      
    
      this.add({
        label_eng: "Sonobe's House",
        label_ka: "園部屋敷",
        id: 4938
      })
      
    
      this.add({
        label_eng: "The Blacksmith Shop",
        label_ka: "鍛冶屋",
        id: 4939
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 4940
      })
      
    
      this.add({
        label_eng: "The Feast at Nijo Castle",
        label_ka: "二条城配膳",
        id: 4941
      })
      
    
      this.add({
        label_eng: "The Myoshinji Temple",
        label_ka: "妙心寺",
        id: 4942
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 4943
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 4944
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 4945
      })
      
    
      this.add({
        label_eng: "Street Entertainers",
        label_ka: "万歳",
        id: 4946
      })
      
    
      this.add({
        label_eng: "Heron Girl",
        label_ka: "鷺娘",
        id: 4947
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 4948
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 4949
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 4950
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 4951
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 4952
      })
      
    
      this.add({
        label_eng: "Kikyo Field",
        label_ka: "桔梗原",
        id: 4953
      })
      
    
      this.add({
        label_eng: "Kagekatsu and Wooden Clogs",
        label_ka: "景勝下駄",
        id: 4954
      })
      
    
      this.add({
        label_eng: "Kansuke's House",
        label_ka: "勘助住家",
        id: 4955
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 4956
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 4957
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 4958
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 4959
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 4960
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 4961
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 4962
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 4963
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 4964
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 4965
      })
      
    
      this.add({
        label_eng: "The Golden Pavilion",
        label_ka: "金閣寺",
        id: 4966
      })
      
    
      this.add({
        label_eng: "The Painted Rat",
        label_ka: "爪先鼠",
        id: 4967
      })
      
    
      this.add({
        label_eng: "The Suicide with a Scythe",
        label_ka: "弥作鎌腹",
        id: 4968
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 4969
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 4970
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 4971
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 4972
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 4973
      })
      
    
      this.add({
        label_eng: "The Yamanaya Tea House",
        label_ka: "山名屋",
        id: 4974
      })
      
    
      this.add({
        label_eng: "The Sento Palace",
        label_ka: "仙洞御所",
        id: 4975
      })
      
    
      this.add({
        label_eng: "The Nunnery at Kitasaga",
        label_ka: "北嵯峨",
        id: 4976
      })
      
    
      this.add({
        label_eng: "Yoshitsune's Mansion at Horikawa",
        label_ka: "堀川御所",
        id: 4977
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 4978
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 4979
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 4980
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 4981
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 4982
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 4983
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 4984
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "川連法眼館奥庭",
        id: 4985
      })
      
    
      this.add({
        label_eng: "The Dragon and the Tiger",
        label_ka: "龍虎",
        id: 4986
      })
      
    
      this.add({
        label_eng: "The Pilgrim's Song",
        label_ka: "順礼歌",
        id: 4987
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 4988
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 4989
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 4990
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 4991
      })
      
    
      this.add({
        label_eng: "The Old Temple",
        label_ka: "古寺",
        id: 4992
      })
      
    
      this.add({
        label_eng: "The Chinese Ship",
        label_ka: "唐土船",
        id: 4993
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 4994
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 4995
      })
      
    
      this.add({
        label_eng: "The Inn at Otsu",
        label_ka: "大津宿屋",
        id: 4996
      })
      
    
      this.add({
        label_eng: "The Improvised Bamboo Hearse",
        label_ka: "笹引",
        id: 4997
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 4998
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 4999
      })
      
    
      this.add({
        label_eng: "The Pine-Lined Road at Akasaka",
        label_ka: "赤坂並木",
        id: 5000
      })
      
    
      this.add({
        label_eng: "The Old Temple",
        label_ka: "古寺",
        id: 5001
      })
      
    
      this.add({
        label_eng: "The Komakiyama Castle",
        label_ka: "駒木山城中",
        id: 5002
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 5003
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 5004
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 5005
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 5006
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 5007
      })
      
    
      this.add({
        label_eng: "Hakuren Parts with Her Baby",
        label_ka: "白蓮子別れ",
        id: 5008
      })
      
    
      this.add({
        label_eng: "The Hell",
        label_ka: "地獄",
        id: 5009
      })
      
    
      this.add({
        label_eng: "The Kinzanji Temple",
        label_ka: "径山寺",
        id: 5010
      })
      
    
      this.add({
        label_eng: "The Caldron",
        label_ka: "釜煮",
        id: 5011
      })
      
    
      this.add({
        label_eng: "The Isolated House",
        label_ka: "一つ家",
        id: 5012
      })
      
    
      this.add({
        label_eng: "The River Ryusa",
        label_ka: "流沙川",
        id: 5013
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 5014
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 5015
      })
      
    
      this.add({
        label_eng: "Kiyomori's Mansion",
        label_ka: "清盛館兵法",
        id: 5016
      })
      
    
      this.add({
        label_eng: "The Chrysanthemum Garden (See also The Rear Garden)",
        label_ka: "菊畑 (See also 奥庭)",
        id: 5017
      })
      
    
      this.add({
        label_eng: "The Rear Garden (See also The Chrysanthemum Garden)",
        label_ka: "奥庭 (See also 菊畑)",
        id: 5018
      })
      
    
      this.add({
        label_eng: "The Second-Hand Article Dealer's at Unagidani",
        label_ka: "鰻谷",
        id: 5019
      })
      
    
      this.add({
        label_eng: "Inagawa's House",
        label_ka: "猪名川内",
        id: 5020
      })
      
    
      this.add({
        label_eng: "The Sumo Arena",
        label_ka: "相撲場",
        id: 5021
      })
      
    
      this.add({
        label_eng: "The Kaminari Gate",
        label_ka: "雷門",
        id: 5022
      })
      
    
      this.add({
        label_eng: "The Tea House",
        label_ka: "揚屋",
        id: 5023
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 5024
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 5025
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 5026
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 5027
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 5028
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 5029
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 5030
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 5031
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 5032
      })
      
    
      this.add({
        label_eng: "The Mask Peddler",
        label_ka: "面売り",
        id: 5033
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5034
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 5035
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 5036
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 5037
      })
      
    
      this.add({
        label_eng: "The Bandai Pond",
        label_ka: "万代池",
        id: 5038
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 5039
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5040
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5041
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5042
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 5043
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 5044
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 5045
      })
      
    
      this.add({
        label_eng: "The Memorial Service",
        label_ka: "豊島屋逮夜",
        id: 5046
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 5047
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5048
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 5049
      })
      
    
      this.add({
        label_eng: "Kanki's Mansion (See also The Shishigajo Catsle)",
        label_ka: "甘輝館 (See also 獅子が城)",
        id: 5050
      })
      
    
      this.add({
        label_eng: "The Red Signal (See also The Shishigajo Catsle)",
        label_ka: "紅流し (See also 獅子が城)",
        id: 5051
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 5052
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 5053
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 5054
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 5055
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 5056
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 5057
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 5058
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5059
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5060
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5061
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 5062
      })
      
    
      this.add({
        label_eng: "The Pine Grove",
        label_ka: "小松原",
        id: 5063
      })
      
    
      this.add({
        label_eng: "Emiji's Mansion",
        label_ka: "蝦夷子館",
        id: 5064
      })
      
    
      this.add({
        label_eng: "Sarusawa Pond",
        label_ka: "猿沢池",
        id: 5065
      })
      
    
      this.add({
        label_eng: "Sadaka's (Dazai) Mansion",
        label_ka: "太宰館",
        id: 5066
      })
      
    
      this.add({
        label_eng: "Imoyama and Seyama Mansions",
        label_ka: "妹山背山",
        id: 5067
      })
      
    
      this.add({
        label_eng: "The Bill-Collecting",
        label_ka: "掛乞",
        id: 5068
      })
      
    
      this.add({
        label_eng: "The Comical Ballad",
        label_ka: "万才",
        id: 5069
      })
      
    
      this.add({
        label_eng: "Shibaroku's House",
        label_ka: "芝六住家",
        id: 5070
      })
      
    
      this.add({
        label_eng: "The Well-Cleaning",
        label_ka: "井戸替",
        id: 5071
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 5072
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 5073
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 5074
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 5075
      })
      
    
      this.add({
        label_eng: "The Chinese Ship",
        label_ka: "唐土船",
        id: 5076
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 5077
      })
      
    
      this.add({
        label_eng: "Chikuma River",
        label_ka: "筑摩川",
        id: 5078
      })
      
    
      this.add({
        label_eng: "Matasuke's House",
        label_ka: "又助住家",
        id: 5079
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 5080
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 5081
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 5082
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 5083
      })
      
    
      this.add({
        label_eng: "The Sake Peddler (See also The Village of Kishinosato)",
        label_ka: "鳶田 (See also 岸の里)",
        id: 5084
      })
      
    
      this.add({
        label_eng: "Zesai's House (See also The Village of Tengachaya)",
        label_ka: "是斎住家 (See also 天下茶屋)",
        id: 5085
      })
      
    
      this.add({
        label_eng: "The Golden Pavilion",
        label_ka: "金閣寺",
        id: 5086
      })
      
    
      this.add({
        label_eng: "The Painted Rat",
        label_ka: "爪先鼠",
        id: 5087
      })
      
    
      this.add({
        label_eng: "Suma Beach",
        label_ka: "須磨の浦",
        id: 5088
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "瓢箪棚",
        id: 5089
      })
      
    
      this.add({
        label_eng: "The Sugisaka Cemetery",
        label_ka: "杉坂墓所",
        id: 5090
      })
      
    
      this.add({
        label_eng: "Rokusuke's House",
        label_ka: "毛谷村六助住家",
        id: 5091
      })
      
    
      this.add({
        label_eng: "In Front of the Sumiyoshi Shrine",
        label_ka: "住吉鳥居前",
        id: 5092
      })
      
    
      this.add({
        label_eng: "The Curio Shop at Uchihonmachi",
        label_ka: "内本町道具屋",
        id: 5093
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 5094
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 5095
      })
      
    
      this.add({
        label_eng: "The Mountain",
        label_ka: "山",
        id: 5096
      })
      
    
      this.add({
        label_eng: "Mt. Shamuro in India",
        label_ka: "天竺沙牟呂山の段　",
        id: 5097
      })
      
    
      this.add({
        label_eng: "At the Foot of Mt. Shamuro",
        label_ka: "天竺沙牟呂山麓",
        id: 5098
      })
      
    
      this.add({
        label_eng: "King Hanzoku's Palace",
        label_ka: "班足王御殿",
        id: 5099
      })
      
    
      this.add({
        label_eng: "Dakki Going to the Palace",
        label_ka: "妲妃入内",
        id: 5100
      })
      
    
      this.add({
        label_eng: "The Palace of Emperor Chu",
        label_ka: "紂王御殿化粧殿",
        id: 5101
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 5102
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 5103
      })
      
    
      this.add({
        label_eng: "Michiharu's Mansion",
        label_ka: "道春館",
        id: 5104
      })
      
    
      this.add({
        label_eng: "The Shinsen Garden",
        label_ka: "神泉苑",
        id: 5105
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 5106
      })
      
    
      this.add({
        label_eng: "The House of Jussaku",
        label_ka: "十作住家",
        id: 5107
      })
      
    
      this.add({
        label_eng: "The Trial",
        label_ka: "訴訟",
        id: 5108
      })
      
    
      this.add({
        label_eng: "The Prayer",
        label_ka: "祈り",
        id: 5109
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 5110
      })
      
    
      this.add({
        label_eng: "The Tearful Journey",
        label_ka: "道行涙の編笠",
        id: 5111
      })
      
    
      this.add({
        label_eng: "The Temporary Mansion at Tsurugaoka",
        label_ka: "鶴が岡仮屋",
        id: 5112
      })
      
    
      this.add({
        label_eng: "The Yoshida Shrine",
        label_ka: "吉田社頭",
        id: 5113
      })
      
    
      this.add({
        label_eng: "Yoshiie's Mansion",
        label_ka: "八幡太郎館",
        id: 5114
      })
      
    
      this.add({
        label_eng: "The Sotogahama Beach",
        label_ka: "外が浜",
        id: 5115
      })
      
    
      this.add({
        label_eng: "The House of Bunji",
        label_ka: "善知鳥文治住家",
        id: 5116
      })
      
    
      this.add({
        label_eng: "The Shujaku River Bank",
        label_ka: "朱雀堤",
        id: 5117
      })
      
    
      this.add({
        label_eng: "The Mansion of Prince Tamaki (See also The Messenger Shikitae, Arrowhead and Sodehagi's Appeal)",
        label_ka: "環の宮明御殿 (See also 敷妙使者, 矢の根 and 袖萩祭文)",
        id: 5118
      })
      
    
      this.add({
        label_eng: "The Drug Peddlers' Travel",
        label_ka: "道行千里の岩田帯",
        id: 5119
      })
      
    
      this.add({
        label_eng: "The Solitary House",
        label_ka: "一つ家",
        id: 5120
      })
      
    
      this.add({
        label_eng: "The Bottom of the Ravin",
        label_ka: "谷底",
        id: 5121
      })
      
    
      this.add({
        label_eng: "The Shujaku River Bank",
        label_ka: "朱雀堤",
        id: 5122
      })
      
    
      this.add({
        label_eng: "Messenger Shikitae (See also The Mansion of Prince Tamaki)",
        label_ka: "敷妙使者 (See also 環の宮明御殿)",
        id: 5123
      })
      
    
      this.add({
        label_eng: "The Arrowhead (See also The Mansion of Prince Tamaki)",
        label_ka: "矢の根 (See also 環の宮明御殿)",
        id: 5124
      })
      
    
      this.add({
        label_eng: "Sodehagi's Appeal (See also The Mansion of Prince Tamaki)",
        label_ka: "袖萩祭文 (See also 環の宮明御殿)",
        id: 5125
      })
      
    
      this.add({
        label_eng: "The Solitary House",
        label_ka: "一つ家",
        id: 5126
      })
      
    
      this.add({
        label_eng: "The Bottom of the Ravin",
        label_ka: "谷底",
        id: 5127
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 5128
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 5129
      })
      
    
      this.add({
        label_eng: "The Handing on the Secrets of Calligraphy",
        label_ka: "筆法伝授",
        id: 5130
      })
      
    
      this.add({
        label_eng: "At the Fence",
        label_ka: "築地",
        id: 5131
      })
      
    
      this.add({
        label_eng: "The Port of Yasui",
        label_ka: "安井汐待",
        id: 5132
      })
      
    
      this.add({
        label_eng: "The Beating of Kariya",
        label_ka: "杖折檻",
        id: 5133
      })
      
    
      this.add({
        label_eng: "The Cockcrow",
        label_ka: "東天紅",
        id: 5134
      })
      
    
      this.add({
        label_eng: "The Departure of Michizane",
        label_ka: "丞相名残",
        id: 5135
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 5136
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 5137
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 5138
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 5139
      })
      
    
      this.add({
        label_eng: "Mount Tempai",
        label_ka: "天拝山",
        id: 5140
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 5141
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 5142
      })
      
    
      this.add({
        label_eng: "Chudayu Naruyama's House",
        label_ka: "成山忠太夫内",
        id: 5143
      })
      
    
      this.add({
        label_eng: "Hikokuro Ogura's House",
        label_ka: "小倉彦九郎内",
        id: 5144
      })
      
    
      this.add({
        label_eng: "The Revenge at Horikawa",
        label_ka: "京堀川妻敵討",
        id: 5145
      })
      
    
      this.add({
        label_eng: "The Almanac Maker's",
        label_ka: "大経師内",
        id: 5146
      })
      
    
      this.add({
        label_eng: "Bairyu's House at Okazaki",
        label_ka: "岡崎村梅龍内",
        id: 5147
      })
      
    
      this.add({
        label_eng: "The Hideout in Tamba Province",
        label_ka: "奥丹波隠れ家",
        id: 5148
      })
      
    
      this.add({
        label_eng: "The Hamanomiya Riding Ground",
        label_ka: "浜の宮馬場",
        id: 5149
      })
      
    
      this.add({
        label_eng: "The House of Ichinoshin Asaka",
        label_ka: "浅香市之進留守宅",
        id: 5150
      })
      
    
      this.add({
        label_eng: "The Tea Ceremony House",
        label_ka: "数寄屋",
        id: 5151
      })
      
    
      this.add({
        label_eng: "The House of Chutabei Iwaki",
        label_ka: "岩木忠太兵衛屋敷",
        id: 5152
      })
      
    
      this.add({
        label_eng: "The Revenge on Kyobashi Bridge in Fushimi",
        label_ka: "伏見京橋女敵討",
        id: 5153
      })
      
    
      this.add({
        label_eng: "The Town of Shiga",
        label_ka: "志賀の里",
        id: 5154
      })
      
    
      this.add({
        label_eng: "The Sakuranomiya Shrine",
        label_ka: "桜の宮物狂",
        id: 5155
      })
      
    
      this.add({
        label_eng: "The Todaiji Temple",
        label_ka: "東大寺",
        id: 5156
      })
      
    
      this.add({
        label_eng: "The Nigatsudo Hall",
        label_ka: "二月堂",
        id: 5157
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 5158
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5159
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 5160
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 5161
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 5162
      })
      
    
      this.add({
        label_eng: "Sakamoto Castle",
        label_ka: "坂本城",
        id: 5163
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 5164
      })
      
    
      this.add({
        label_eng: "Love for Koshiro (See also Moritsuna's War Camp)",
        label_ka: "小四郎恩愛 (See also 盛綱陣屋)",
        id: 5165
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 5166
      })
      
    
      this.add({
        label_eng: "Takatsuna's Hideout",
        label_ka: "高綱隠れ家",
        id: 5167
      })
      
    
      this.add({
        label_eng: "The Tattooing",
        label_ka: "入墨",
        id: 5168
      })
      
    
      this.add({
        label_eng: "A Visit of Two Ladies-in-Waiting (See also Kinugawa Villege)",
        label_ka: "局使者 (See also 絹川村)",
        id: 5169
      })
      
    
      this.add({
        label_eng: "Rice Washing (See also Kinugawa Villege)",
        label_ka: "米洗い (See also 絹川村)",
        id: 5170
      })
      
    
      this.add({
        label_eng: "Parting of Miuranosuke with His Mother (See also Kinugawa Villege)",
        label_ka: "三浦之助母別れ（三浦別れ） (See also 絹川村)",
        id: 5171
      })
      
    
      this.add({
        label_eng: "Takatsuna's Declaration (See also Kinugawa Villege)",
        label_ka: "高綱物語 (See also 絹川村)",
        id: 5172
      })
      
    
      this.add({
        label_eng: "Tokimasa's Headquarters at Ishiyama",
        label_ka: "石山本陣",
        id: 5173
      })
      
    
      this.add({
        label_eng: "Takadono",
        label_ka: "高楼",
        id: 5174
      })
      
    
      this.add({
        label_eng: "The Tattooing",
        label_ka: "入墨",
        id: 5175
      })
      
    
      this.add({
        label_eng: "A Visit of Two Ladies-in-Waiting (See also Kinugawa Villege)",
        label_ka: "局使者 (See also 絹川村)",
        id: 5176
      })
      
    
      this.add({
        label_eng: "Rice Washing (See also Kinugawa Villege)",
        label_ka: "米洗い (See also 絹川村)",
        id: 5177
      })
      
    
      this.add({
        label_eng: "Parting of Miuranosuke with His Mother (See also Kinugawa Villege)",
        label_ka: "三浦之助母別れ（三浦別れ） (See also 絹川村)",
        id: 5178
      })
      
    
      this.add({
        label_eng: "Takatsuna's Declaration (See also Kinugawa Villege)",
        label_ka: "高綱物語 (See also 絹川村)",
        id: 5179
      })
      
    
      this.add({
        label_eng: "The Hamanomiya Riding Ground",
        label_ka: "浜の宮馬場",
        id: 5180
      })
      
    
      this.add({
        label_eng: "The House of Ichinoshin Asaka",
        label_ka: "浅香市之進留守宅",
        id: 5181
      })
      
    
      this.add({
        label_eng: "The Tea Ceremony House",
        label_ka: "数寄屋",
        id: 5182
      })
      
    
      this.add({
        label_eng: "The Revenge on Kyobashi Bridge in Fushimi",
        label_ka: "伏見京橋女敵討",
        id: 5183
      })
      
    
      this.add({
        label_eng: "Street Entertainers",
        label_ka: "万歳",
        id: 5184
      })
      
    
      this.add({
        label_eng: "The Fisherwoman",
        label_ka: "海女",
        id: 5185
      })
      
    
      this.add({
        label_eng: "The Pine Grove at Tosamachi",
        label_ka: "土佐町松原",
        id: 5186
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 5187
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 5188
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 5189
      })
      
    
      this.add({
        label_eng: "The Hanabishiya Brothel",
        label_ka: "花菱屋",
        id: 5190
      })
      
    
      this.add({
        label_eng: "Hiuga Island",
        label_ka: "日向嶋",
        id: 5191
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 5192
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 5193
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 5194
      })
      
    
      this.add({
        label_eng: "The Ouchi Mansion",
        label_ka: "大内館",
        id: 5195
      })
      
    
      this.add({
        label_eng: "The Aphrodisiac Wine",
        label_ka: "守宮酒",
        id: 5196
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 5197
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers",
        label_ka: "団子売",
        id: 5198
      })
      
    
      this.add({
        label_eng: "The Hanabishiya Brothel",
        label_ka: "花菱屋",
        id: 5199
      })
      
    
      this.add({
        label_eng: "Hiuga Island",
        label_ka: "日向嶋",
        id: 5200
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 5201
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 5202
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 5203
      })
      
    
      this.add({
        label_eng: "The Slanderous Remarks",
        label_ka: "口三味線",
        id: 5204
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 5205
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 5206
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 5207
      })
      
    
      this.add({
        label_eng: "Shingen's Mansion",
        label_ka: "武田信玄館",
        id: 5208
      })
      
    
      this.add({
        label_eng: "Messenger Yoshikiyo's Visit",
        label_ka: "村上義清上使",
        id: 5209
      })
      
    
      this.add({
        label_eng: "Katsuyori Kills Himself",
        label_ka: "勝頼切腹",
        id: 5210
      })
      
    
      this.add({
        label_eng: "The Drug Peddlers' Journey",
        label_ka: "道行似合の女夫丸",
        id: 5211
      })
      
    
      this.add({
        label_eng: "Messenger Kagekatsu's Visit (See also Kenshin's Mansion)",
        label_ka: "景勝上使 (See also 謙信館）",
        id: 5212
      })
      
    
      this.add({
        label_eng: "The Delivery of the Rifle (See also Kenshin's Mansion)",
        label_ka: "鉄砲渡し (See also 謙信館)",
        id: 5213
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 5214
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 5215
      })
      
    
      this.add({
        label_eng: "The Death of Dosan",
        label_ka: "道三最期",
        id: 5216
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 5217
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 5218
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5219
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 5220
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 5221
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5222
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 5223
      })
      
    
      this.add({
        label_eng: "The Old Temple",
        label_ka: "古寺",
        id: 5224
      })
      
    
      this.add({
        label_eng: "The Tsubosaka Temple (See also The Mountain)",
        label_ka: "壺坂寺 (See also 山)",
        id: 5225
      })
      
    
      this.add({
        label_eng: "The Horikawa Mansion",
        label_ka: "堀川御所",
        id: 5226
      })
      
    
      this.add({
        label_eng: "Atsumori's Departure for the Battlefront",
        label_ka: "敦盛出陣",
        id: 5227
      })
      
    
      this.add({
        label_eng: "The Camp Gate",
        label_ka: "陣門",
        id: 5228
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 5229
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 5230
      })
      
    
      this.add({
        label_eng: "The House of Hayashi",
        label_ka: "林住家",
        id: 5231
      })
      
    
      this.add({
        label_eng: "The House of Midaroku",
        label_ka: "弥陀六内",
        id: 5232
      })
      
    
      this.add({
        label_eng: "Drawing Lots at Wakigahara",
        label_ka: "脇ヶ浜宝引",
        id: 5233
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 5234
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 5235
      })
      
    
      this.add({
        label_eng: "Rokuyata's Mansion",
        label_ka: "六弥太館",
        id: 5236
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 5237
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 5238
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 5239
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5240
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5241
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5242
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 5243
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 5244
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 5245
      })
      
    
      this.add({
        label_eng: "The Memorial Service",
        label_ka: "豊島屋逮夜",
        id: 5246
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 5247
      })
      
    
      this.add({
        label_eng: "Yoshitsune's Mansion at Horikawa",
        label_ka: "堀川御所",
        id: 5248
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 5249
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 5250
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 5251
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 5252
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 5253
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5254
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 5255
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 5256
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 5257
      })
      
    
      this.add({
        label_eng: "The Handing on the Secrets of Calligraphy",
        label_ka: "筆法伝授",
        id: 5258
      })
      
    
      this.add({
        label_eng: "At the Fence",
        label_ka: "築地",
        id: 5259
      })
      
    
      this.add({
        label_eng: "The Beating of Kariya",
        label_ka: "杖折檻",
        id: 5260
      })
      
    
      this.add({
        label_eng: "The Cockcrow",
        label_ka: "東天紅",
        id: 5261
      })
      
    
      this.add({
        label_eng: "The Departure of Michizane",
        label_ka: "丞相名残",
        id: 5262
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 5263
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 5264
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 5265
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 5266
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 5267
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 5268
      })
      
    
      this.add({
        label_eng: "The Uji River",
        label_ka: "宇治川蛍狩",
        id: 5269
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 5270
      })
      
    
      this.add({
        label_eng: "The Patent Medicine Seller",
        label_ka: "薬売り",
        id: 5271
      })
      
    
      this.add({
        label_eng: "The Hut at Hamamatsu",
        label_ka: "浜松小屋",
        id: 5272
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 5273
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 5274
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 5275
      })
      
    
      this.add({
        label_eng: "The Second Blooming",
        label_ka: "帰り咲吾妻の路草",
        id: 5276
      })
      
    
      this.add({
        label_eng: "The Court of the Ming Emperor",
        label_ka: "大明御殿",
        id: 5277
      })
      
    
      this.add({
        label_eng: "The Rearmost Chamber",
        label_ka: "大明御殿奥殿",
        id: 5278
      })
      
    
      this.add({
        label_eng: "The Reedy Marshes",
        label_ka: "芦辺",
        id: 5279
      })
      
    
      this.add({
        label_eng: "On the Hirado Beach",
        label_ka: "平戸浜伝ひ",
        id: 5280
      })
      
    
      this.add({
        label_eng: "The Chinese Ship",
        label_ka: "唐土船",
        id: 5281
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 5282
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 5283
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 5284
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 5285
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5286
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5287
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5288
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 5289
      })
      
    
      this.add({
        label_eng: "The Kamo Residence",
        label_ka: "加茂館",
        id: 5290
      })
      
    
      this.add({
        label_eng: "The Insane Yasuna",
        label_ka: "保名物狂",
        id: 5291
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 5292
      })
      
    
      this.add({
        label_eng: "The Fox-Kuzunoha's Travel",
        label_ka: "蘭菊の乱れ",
        id: 5293
      })
      
    
      this.add({
        label_eng: "The Two Look-Alike Servants",
        label_ka: "信田森二人奴",
        id: 5294
      })
      
    
      this.add({
        label_eng: "Akogi Bay",
        label_ka: "阿漕浦",
        id: 5295
      })
      
    
      this.add({
        label_eng: "Heiji's House",
        label_ka: "平治住家",
        id: 5296
      })
      
    
      this.add({
        label_eng: "The Okawa River",
        label_ka: "大川",
        id: 5297
      })
      
    
      this.add({
        label_eng: "The Mass Murder",
        label_ka: "五人伐",
        id: 5298
      })
      
    
      this.add({
        label_eng: "The Haunted House at Hakone",
        label_ka: "箱根先化住居",
        id: 5299
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 5300
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 5301
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 5302
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 5303
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5304
      })
      
    
      this.add({
        label_eng: "The Tsurugaoka Hachiman Shrine",
        label_ka: "鶴が岡",
        id: 5305
      })
      
    
      this.add({
        label_eng: "The House of Yukie Wada",
        label_ka: "和田行家屋敷",
        id: 5306
      })
      
    
      this.add({
        label_eng: "The Engakuji Temple",
        label_ka: "円覚寺",
        id: 5307
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 5308
      })
      
    
      this.add({
        label_eng: "The Hokkokuya Inn at Fushimi,",
        label_ka: "伏見北国屋",
        id: 5309
      })
      
    
      this.add({
        label_eng: "The Oil Store",
        label_ka: "油店",
        id: 5310
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 5311
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 5312
      })
      
    
      this.add({
        label_eng: "In front of the Storehouse",
        label_ka: "蔵前",
        id: 5313
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路の嫁入",
        id: 5314
      })
      
    
      this.add({
        label_eng: "The Zama Shrine",
        label_ka: "座摩社前",
        id: 5315
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 5316
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 5317
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 5318
      })
      
    
      this.add({
        label_eng: "The Helmet Identification at Tsurugaoka",
        label_ka: "鶴が岡兜改め",
        id: 5319
      })
      
    
      this.add({
        label_eng: "The Love Poem",
        label_ka: "恋歌",
        id: 5320
      })
      
    
      this.add({
        label_eng: "The Bribing of Moronao",
        label_ka: "大手下馬先進物　",
        id: 5321
      })
      
    
      this.add({
        label_eng: "Okaru Delivers the Letter Case (Kaoyo's Poem)",
        label_ka: "おかる文使い",
        id: 5322
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 5323
      })
      
    
      this.add({
        label_eng: "The Back Gate",
        label_ka: "裏門",
        id: 5324
      })
      
    
      this.add({
        label_eng: "The Flower Basket",
        label_ka: "花籠",
        id: 5325
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 5326
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 5327
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 5328
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 5329
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 5330
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 5331
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 5332
      })
      
    
      this.add({
        label_eng: "The Incense-Burning at the Komyoji Temple",
        label_ka: "光明寺焼香",
        id: 5333
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 5334
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 5335
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 5336
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 5337
      })
      
    
      this.add({
        label_eng: "The Simizuya Tea House at Temma",
        label_ka: "天満清水屋",
        id: 5338
      })
      
    
      this.add({
        label_eng: "The Branch Store at Yamatobashi",
        label_ka: "大和橋出見世",
        id: 5339
      })
      
    
      this.add({
        label_eng: "The Suicide Trip of Kaheiji and Osaga",
        label_ka: "嘉平次おさが道行",
        id: 5340
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 5341
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 5342
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 5343
      })
      
    
      this.add({
        label_eng: "The Street Entertainers",
        label_ka: "寿柱立万歳",
        id: 5344
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5345
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 5346
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 5347
      })
      
    
      this.add({
        label_eng: "Jihei's House (The Paper Store)",
        label_ka: "天満紙屋内(紙屋内)",
        id: 5348
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 5349
      })
      
    
      this.add({
        label_eng: "The Almanac Maker's House",
        label_ka: "大経師内",
        id: 5350
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 5351
      })
      
    
      this.add({
        label_eng: "The Street Entertainers",
        label_ka: "寿柱立万歳",
        id: 5352
      })
      
    
      this.add({
        label_eng: "The Gay Quarter Gossips",
        label_ka: "廓噺",
        id: 5353
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5354
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 5355
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 5356
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 5357
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 5358
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 5359
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 5360
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 5361
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 5362
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 5363
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 5364
      })
      
    
      this.add({
        label_eng: "Jurobei's House",
        label_ka: "十郎兵衛内",
        id: 5365
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 5366
      })
      
    
      this.add({
        label_eng: "In Front of the Sumiyoshi Shrine",
        label_ka: "住吉鳥居前",
        id: 5367
      })
      
    
      this.add({
        label_eng: "The Curio Shop at Uchihonmachi",
        label_ka: "内本町道具屋",
        id: 5368
      })
      
    
      this.add({
        label_eng: "The Lovers' Trip",
        label_ka: "道行妹背の走書",
        id: 5369
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 5370
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 5371
      })
      
    
      this.add({
        label_eng: "The House of Danshichi",
        label_ka: "田島町団七内",
        id: 5372
      })
      
    
      this.add({
        label_eng: "Chudayu Naruyama's House",
        label_ka: "成山忠太夫内",
        id: 5373
      })
      
    
      this.add({
        label_eng: "Hikokuro Ogura's House",
        label_ka: "小倉彦九郎内",
        id: 5374
      })
      
    
      this.add({
        label_eng: "The Revenge at Horikawa",
        label_ka: "京堀川妻敵討",
        id: 5375
      })
      
    
      this.add({
        label_eng: "The Vegetable Farm",
        label_ka: "段ばたけ",
        id: 5376
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 5377
      })
      
    
      this.add({
        label_eng: "Michiharu's Mansion",
        label_ka: "道春館",
        id: 5378
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 5379
      })
      
    
      this.add({
        label_eng: "Butterflies' Travel",
        label_ka: "蝶の道行",
        id: 5380
      })
      
    
      this.add({
        label_eng: "The Return from Chikubu Island",
        label_ka: "竹生島遊覧",
        id: 5381
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 5382
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 5383
      })
      
    
      this.add({
        label_eng: "The Lumber Carriers' Song",
        label_ka: "木遣り音頭",
        id: 5384
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 5385
      })
      
    
      this.add({
        label_eng: "Hakuren Parts with Her Baby",
        label_ka: "白蓮子別れ",
        id: 5386
      })
      
    
      this.add({
        label_eng: "The Hell",
        label_ka: "地獄",
        id: 5387
      })
      
    
      this.add({
        label_eng: "The Kinzanji Temple",
        label_ka: "径山寺",
        id: 5388
      })
      
    
      this.add({
        label_eng: "The Caldron",
        label_ka: "釜煮",
        id: 5389
      })
      
    
      this.add({
        label_eng: "The Isolated House",
        label_ka: "一つ家",
        id: 5390
      })
      
    
      this.add({
        label_eng: "The River Ryusa",
        label_ka: "流沙川",
        id: 5391
      })
      
    
      this.add({
        label_eng: "The Buddha's Temple",
        label_ka: "祇園精舎",
        id: 5392
      })
      
    
      this.add({
        label_eng: "Honzo's Villa",
        label_ka: "本蔵下屋敷",
        id: 5393
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 5394
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 5395
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 5396
      })
      
    
      this.add({
        label_eng: "Autumn on Mount Kon",
        label_ka: "崑山の秋",
        id: 5397
      })
      
    
      this.add({
        label_eng: "The House of Hunter Genza",
        label_ka: "猟師源左内",
        id: 5398
      })
      
    
      this.add({
        label_eng: "The Lakeside in Winter",
        label_ka: "冬の湖畔",
        id: 5399
      })
      
    
      this.add({
        label_eng: "The Hidaka River Ferry",
        label_ka: "日高川渡し場",
        id: 5400
      })
      
    
      this.add({
        label_eng: "Ononohime's Trip",
        label_ka: "小野姫道行",
        id: 5401
      })
      
    
      this.add({
        label_eng: "The Kamo Riverbed at Rokujō",
        label_ka: "六条河原",
        id: 5402
      })
      
    
      this.add({
        label_eng: "The Dungeon",
        label_ka: "景清牢破り",
        id: 5403
      })
      
    
      this.add({
        label_eng: "The Inn at Ishibe",
        label_ka: "石部宿屋",
        id: 5404
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 5405
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 5406
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 5407
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 5408
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 5409
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 5410
      })
      
    
      this.add({
        label_eng: "Drawing Lots at Wakigahara",
        label_ka: "脇ヶ浜宝引",
        id: 5411
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 5412
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 5413
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 5414
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 5415
      })
      
    
      this.add({
        label_eng: "The Seven Gods of Fortune",
        label_ka: "七福神宝の入舩",
        id: 5416
      })
      
    
      this.add({
        label_eng: "The House of Rokurodayu",
        label_ka: "青貝師六郎太夫住家",
        id: 5417
      })
      
    
      this.add({
        label_eng: "The Hoshiai Temple",
        label_ka: "星合寺梶原石切",
        id: 5418
      })
      
    
      this.add({
        label_eng: "The House of Sajibei (Sajihei)",
        label_ka: "湊町",
        id: 5419
      })
      
    
      this.add({
        label_eng: "The Sumiyoshi Beach",
        label_ka: "住吉浜辺",
        id: 5420
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "吉田屋",
        id: 5421
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 5422
      })
      
    
      this.add({
        label_eng: "The Greengrocer's",
        label_ka: "八百屋内",
        id: 5423
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 5424
      })
      
    
      this.add({
        label_eng: "The Heike Clan Headquarters",
        label_ka: "六波羅",
        id: 5425
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 5426
      })
      
    
      this.add({
        label_eng: "The Shikina Bay",
        label_ka: "舟路の道行より敷名の浦",
        id: 5427
      })
      
    
      this.add({
        label_eng: "Ononohime's Trip",
        label_ka: "小野姫道行",
        id: 5428
      })
      
    
      this.add({
        label_eng: "The Kamo Riverbed at Rokujō",
        label_ka: "六条河原",
        id: 5429
      })
      
    
      this.add({
        label_eng: "The Dungeon",
        label_ka: "景清牢破り",
        id: 5430
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "靱猿",
        id: 5431
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 5432
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 5433
      })
      
    
      this.add({
        label_eng: "Kanki's Mansion (See also The Shishigajo Catsle)",
        label_ka: "甘輝館 (See also 獅子が城)",
        id: 5434
      })
      
    
      this.add({
        label_eng: "The Red Signal (See also The Shishigajo Catsle)",
        label_ka: "紅流し (See also 獅子が城)",
        id: 5435
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 5436
      })
      
    
      this.add({
        label_eng: "The Pine Grove",
        label_ka: "小松原",
        id: 5437
      })
      
    
      this.add({
        label_eng: "Sarusawa Pond",
        label_ka: "猿沢池",
        id: 5438
      })
      
    
      this.add({
        label_eng: "The Deer Killing",
        label_ka: "鹿殺し",
        id: 5439
      })
      
    
      this.add({
        label_eng: "The Bill-Collecting",
        label_ka: "掛乞",
        id: 5440
      })
      
    
      this.add({
        label_eng: "The Comical Ballad",
        label_ka: "万才",
        id: 5441
      })
      
    
      this.add({
        label_eng: "Shibaroku's House",
        label_ka: "芝六住家",
        id: 5442
      })
      
    
      this.add({
        label_eng: "Sadaka's (Dazai) Mansion",
        label_ka: "太宰館",
        id: 5443
      })
      
    
      this.add({
        label_eng: "Imoyama and Seyama Mansions",
        label_ka: "妹山背山",
        id: 5444
      })
      
    
      this.add({
        label_eng: "The Well-Cleaning",
        label_ka: "井戸替",
        id: 5445
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 5446
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 5447
      })
      
    
      this.add({
        label_eng: "Fukashichi's Visit",
        label_ka: "鱶七上使",
        id: 5448
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 5449
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 5450
      })
      
    
      this.add({
        label_eng: "The House of Yukie Wada",
        label_ka: "和田行家屋敷",
        id: 5451
      })
      
    
      this.add({
        label_eng: "The Hachiman Shrine in Koriyama",
        label_ka: "郡山宮居",
        id: 5452
      })
      
    
      this.add({
        label_eng: "The House of Karaki Masaemon",
        label_ka: "唐木政右衛門屋敷",
        id: 5453
      })
      
    
      this.add({
        label_eng: "The Grand Hall in Lord Konda's Mansion",
        label_ka: "誉田家大広間",
        id: 5454
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 5455
      })
      
    
      this.add({
        label_eng: "The New Barrier at Fujikawa with Insertion of the Scene of Dumpling Peddlers",
        label_ka: "富士川新関 引抜き 団子売",
        id: 5456
      })
      
    
      this.add({
        label_eng: "The Bamboo Groove",
        label_ka: "竹藪",
        id: 5457
      })
      
    
      this.add({
        label_eng: "The Town of Okazaki",
        label_ka: "岡崎",
        id: 5458
      })
      
    
      this.add({
        label_eng: "The Hokkokuya Inn at Fushimi,",
        label_ka: "伏見北国屋",
        id: 5459
      })
      
    
      this.add({
        label_eng: "The Revenge at Iga-Ueno",
        label_ka: "伊賀上野仇討",
        id: 5460
      })
      
    
      this.add({
        label_eng: "The Return from Chikubu Island",
        label_ka: "竹生島遊覧",
        id: 5461
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 5462
      })
      
    
      this.add({
        label_eng: "The Iwai Bathhouse",
        label_ka: "岩井風呂",
        id: 5463
      })
      
    
      this.add({
        label_eng: "Inagawa's House",
        label_ka: "猪名川内",
        id: 5464
      })
      
    
      this.add({
        label_eng: "The Sumo Arena",
        label_ka: "相撲場",
        id: 5465
      })
      
    
      this.add({
        label_eng: "Tombei's House",
        label_ka: "頓兵衛内",
        id: 5466
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 5467
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 5468
      })
      
    
      this.add({
        label_eng: "Butterflies' Travel",
        label_ka: "蝶の道行",
        id: 5469
      })
      
    
      this.add({
        label_eng: "The Plum-Blossom Viewing",
        label_ka: "天下茶屋聖天山梅見",
        id: 5470
      })
      
    
      this.add({
        label_eng: "Shunkin's House at Yodoyabashi",
        label_ka: "淀屋橋浮世小路春琴住居",
        id: 5471
      })
      
    
      this.add({
        label_eng: "The Room of Shunkin's Koto Lessons",
        label_ka: "淀屋橋春琴稽古場",
        id: 5472
      })
      
    
      this.add({
        label_eng: "Outside Shunkin's House",
        label_ka: "春琴住居塀外",
        id: 5473
      })
      
    
      this.add({
        label_eng: "Urikohime and Amanjaku",
        label_ka: "瓜子姫とあまんじゃく",
        id: 5474
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 5475
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 5476
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 5477
      })
      
    
      this.add({
        label_eng: "The Greengrocer's at Shin-Utsubo",
        label_ka: "新靱",
        id: 5478
      })
      
    
      this.add({
        label_eng: "The Fulling Block and the Bonfire",
        label_ka: "きぬたと大文字",
        id: 5479
      })
      
    
      this.add({
        label_eng: "The Pine Grove",
        label_ka: "小松原",
        id: 5480
      })
      
    
      this.add({
        label_eng: "Emiji's Mansion",
        label_ka: "蝦夷子館",
        id: 5481
      })
      
    
      this.add({
        label_eng: "Sarusawa Pond",
        label_ka: "猿沢池",
        id: 5482
      })
      
    
      this.add({
        label_eng: "Sadaka's (Dazai) Mansion",
        label_ka: "太宰館",
        id: 5483
      })
      
    
      this.add({
        label_eng: "Imoyama and Seyama Mansions",
        label_ka: "妹山背山",
        id: 5484
      })
      
    
      this.add({
        label_eng: "The Deer Killing",
        label_ka: "鹿殺し",
        id: 5485
      })
      
    
      this.add({
        label_eng: "Shibaroku's House",
        label_ka: "芝六住家",
        id: 5486
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 5487
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 5488
      })
      
    
      this.add({
        label_eng: "Fukashichi's Visit",
        label_ka: "鱶七上使",
        id: 5489
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 5490
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 5491
      })
      
    
      this.add({
        label_eng: "The Heike Clan Headquarters",
        label_ka: "六波羅",
        id: 5492
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 5493
      })
      
    
      this.add({
        label_eng: "The Shikina Bay",
        label_ka: "舟路の道行より敷名の浦",
        id: 5494
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 5495
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 5496
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 5497
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 5498
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 5499
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 5500
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 5501
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 5502
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 5503
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 5504
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 5505
      })
      
    
      this.add({
        label_eng: "The Gay Quarter Gossips",
        label_ka: "廓噺",
        id: 5506
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 5507
      })
      
    
      this.add({
        label_eng: "Street Entertainers",
        label_ka: "万歳",
        id: 5508
      })
      
    
      this.add({
        label_eng: "The Fisherwoman",
        label_ka: "海女",
        id: 5509
      })
      
    
      this.add({
        label_eng: "Komachi in Her Old Age",
        label_ka: "関寺小町",
        id: 5510
      })
      
    
      this.add({
        label_eng: "Heron Girl",
        label_ka: "鷺娘",
        id: 5511
      })
      
    
      this.add({
        label_eng: "The Almanac Maker's",
        label_ka: "大経師内",
        id: 5512
      })
      
    
      this.add({
        label_eng: "Bairyu's House at Okazaki",
        label_ka: "岡崎村梅龍内",
        id: 5513
      })
      
    
      this.add({
        label_eng: "The Hideout in Tamba Province",
        label_ka: "奥丹波隠れ家",
        id: 5514
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "九軒吉田屋",
        id: 5515
      })
      
    
      this.add({
        label_eng: "Sakon's Temporary Residence",
        label_ka: "平岡左近宿宅",
        id: 5516
      })
      
    
      this.add({
        label_eng: "The Ogiya House",
        label_ka: "扇屋内",
        id: 5517
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 5518
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 5519
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 5520
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 5521
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 5522
      })
      
    
      this.add({
        label_eng: "The Tsubosaka Temple (See also The Mountain)",
        label_ka: "壺坂寺 (See also 山)",
        id: 5523
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 5524
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 5525
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 5526
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 5527
      })
      
    
      this.add({
        label_eng: "Azuchi Castle",
        label_ka: "安土城中",
        id: 5528
      })
      
    
      this.add({
        label_eng: "The Feast at Nijo Castle",
        label_ka: "二条城配膳",
        id: 5529
      })
      
    
      this.add({
        label_eng: "The Honnoji Temple",
        label_ka: "本能寺",
        id: 5530
      })
      
    
      this.add({
        label_eng: "Lady Ano's Reports to Hisayoshi",
        label_ka: "局注進",
        id: 5531
      })
      
    
      this.add({
        label_eng: "Chozaemon's Suicide",
        label_ka: "長左衛門切腹",
        id: 5532
      })
      
    
      this.add({
        label_eng: "The Myoshinji Temple",
        label_ka: "妙心寺",
        id: 5533
      })
      
    
      this.add({
        label_eng: "The Fort of Suginomori",
        label_ka: "杉の森",
        id: 5534
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 5535
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5536
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 5537
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 5538
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5539
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5540
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5541
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5542
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5543
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5544
      })
      
    
      this.add({
        label_eng: "Tamamizu Pond",
        label_ka: "玉水淵",
        id: 5545
      })
      
    
      this.add({
        label_eng: "Kasuga Village",
        label_ka: "春日村",
        id: 5546
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5547
      })
      
    
      this.add({
        label_eng: "In Front of the Sumiyoshi Shrine",
        label_ka: "住吉鳥居前",
        id: 5548
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 5549
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 5550
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 5551
      })
      
    
      this.add({
        label_eng: "The Subjugation of the Earth-Spider",
        label_ka: "土蜘蛛退治",
        id: 5552
      })
      
    
      this.add({
        label_eng: "Scene 1 (\"\"Madame Butterfly\"\")",
        label_ka: "第一景",
        id: 5553
      })
      
    
      this.add({
        label_eng: "Scene 2 (\"\"Madame Butterfly\"\")",
        label_ka: "第二景",
        id: 5554
      })
      
    
      this.add({
        label_eng: "Scene 3 (\"\"Madame Butterfly\"\")",
        label_ka: "第三景",
        id: 5555
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 5556
      })
      
    
      this.add({
        label_eng: "Teahouse Sometaro at Sonezaki",
        label_ka: "北新地曽根崎茶屋染太郎",
        id: 5557
      })
      
    
      this.add({
        label_eng: "Fry Shop at Gataro Yokocho",
        label_ka: "上塩町がたろ横丁一銭天婦羅天たね",
        id: 5558
      })
      
    
      this.add({
        label_eng: "A Room Upstairs at Kuromon",
        label_ka: "高津日本橋筋黒門市場裏二階間借り",
        id: 5559
      })
      
    
      this.add({
        label_eng: "Café Salon Choryu at Shimoderamachi",
        label_ka: "下寺町電停前カフェーサロン蝶柳",
        id: 5560
      })
      
    
      this.add({
        label_eng: "Meoto Zenzai",
        label_ka: "千日前法善寺横丁めをとぜんざい",
        id: 5561
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 5562
      })
      
    
      this.add({
        label_eng: "Tamamizu Pond",
        label_ka: "玉水淵",
        id: 5563
      })
      
    
      this.add({
        label_eng: "Kasuga Village",
        label_ka: "春日村",
        id: 5564
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 5565
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 5566
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 5567
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 5568
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 5569
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 5570
      })
      
    
      this.add({
        label_eng: "Sakamoto Castle",
        label_ka: "坂本城",
        id: 5571
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 5572
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 5573
      })
      
    
      this.add({
        label_eng: "Takatsuna's Hideout",
        label_ka: "高綱隠れ家",
        id: 5574
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 5575
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 5576
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 5577
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 5578
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 5579
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 5580
      })
      
    
      this.add({
        label_eng: "Kiyomori's Mansion",
        label_ka: "清盛館兵法",
        id: 5581
      })
      
    
      this.add({
        label_eng: "The Chrysanthemum Garden (See also The Rear Garden)",
        label_ka: "菊畑 (See also 奥庭)",
        id: 5582
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 5583
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 5584
      })
      
    
      this.add({
        label_eng: "The Tearful Journey",
        label_ka: "道行涙の編笠",
        id: 5585
      })
      
    
      this.add({
        label_eng: "The Seven Gods of Fortune",
        label_ka: "七福神宝の入舩",
        id: 5586
      })
      
    
      this.add({
        label_eng: "The Sugisaka Cemetery",
        label_ka: "杉坂墓所",
        id: 5587
      })
      
    
      this.add({
        label_eng: "Rokusuke's House",
        label_ka: "毛谷村六助住家",
        id: 5588
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 5589
      })
      
    
      this.add({
        label_eng: "The Town of Shiga",
        label_ka: "志賀の里",
        id: 5590
      })
      
    
      this.add({
        label_eng: "The Sakuranomiya Shrine",
        label_ka: "桜の宮物狂",
        id: 5591
      })
      
    
      this.add({
        label_eng: "The Todaiji Temple",
        label_ka: "東大寺",
        id: 5592
      })
      
    
      this.add({
        label_eng: "The Nigatsudo Hall",
        label_ka: "二月堂",
        id: 5593
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 5594
      })
      
    
      this.add({
        label_eng: "The Lumber Carriers' Song",
        label_ka: "木遣り音頭",
        id: 5595
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 5596
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 5597
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 5598
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5599
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5600
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5601
      })
      
    
      this.add({
        label_eng: "Sota's House",
        label_ka: "惣太住家",
        id: 5602
      })
      
    
      this.add({
        label_eng: "The Mad Woman",
        label_ka: "狂女道行",
        id: 5603
      })
      
    
      this.add({
        label_eng: "The Sumida River",
        label_ka: "隅田川",
        id: 5604
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 5605
      })
      
    
      this.add({
        label_eng: "Jurobei's House",
        label_ka: "十郎兵衛内",
        id: 5606
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 5607
      })
      
    
      this.add({
        label_eng: "The Mountain",
        label_ka: "山",
        id: 5608
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 5609
      })
      
    
      this.add({
        label_eng: "Under the Floor",
        label_ka: "床下",
        id: 5610
      })
      
    
      this.add({
        label_eng: "The Talks About Gay Quarters",
        label_ka: "廓噺",
        id: 5611
      })
      
    
      this.add({
        label_eng: "The Aphrodisiac Wine",
        label_ka: "守宮酒",
        id: 5612
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5613
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 5614
      })
      
    
      this.add({
        label_eng: "The Lion Dance",
        label_ka: "連獅子",
        id: 5615
      })
      
    
      this.add({
        label_eng: "The Suwa Shrine",
        label_ka: "諏訪明神百度石",
        id: 5616
      })
      
    
      this.add({
        label_eng: "Shingen's Mansion",
        label_ka: "武田信玄館",
        id: 5617
      })
      
    
      this.add({
        label_eng: "Messenger Yoshikiyo's Visit",
        label_ka: "村上義清上使",
        id: 5618
      })
      
    
      this.add({
        label_eng: "Katsuyori Kills Himself",
        label_ka: "勝頼切腹",
        id: 5619
      })
      
    
      this.add({
        label_eng: "Kenshin's Mansion (See also Messenger Kagekatsu's Visit and the Delivery of the Rifle)",
        label_ka: "謙信館 (see akso 景勝上使  and 鉄砲渡し)",
        id: 5620
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 5621
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 5622
      })
      
    
      this.add({
        label_eng: "The House of Jiju Taro",
        label_ka: "侍従太郎館",
        id: 5623
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 5624
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 5625
      })
      
    
      this.add({
        label_eng: "The Suwa Shrine",
        label_ka: "諏訪明神百度石",
        id: 5626
      })
      
    
      this.add({
        label_eng: "Shingen's Mansion",
        label_ka: "武田信玄館",
        id: 5627
      })
      
    
      this.add({
        label_eng: "Messenger Yoshikiyo's Visit",
        label_ka: "村上義清上使",
        id: 5628
      })
      
    
      this.add({
        label_eng: "Katsuyori Kills Himself",
        label_ka: "勝頼切腹",
        id: 5629
      })
      
    
      this.add({
        label_eng: "Kenshin's Mansion (See also Messenger Kagekatsu's Visit and the Delivery of the Rifle)",
        label_ka: "謙信館 (see akso 景勝上使  and 鉄砲渡し)",
        id: 5630
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 5631
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 5632
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 5633
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5634
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 5635
      })
      
    
      this.add({
        label_eng: "Rice Planting",
        label_ka: "田植",
        id: 5636
      })
      
    
      this.add({
        label_eng: "The Kaminari Gate",
        label_ka: "雷門",
        id: 5637
      })
      
    
      this.add({
        label_eng: "The Tea House",
        label_ka: "揚屋",
        id: 5638
      })
      
    
      this.add({
        label_eng: "The Pine-Lined Road at Akasaka",
        label_ka: "赤坂並木",
        id: 5639
      })
      
    
      this.add({
        label_eng: "The Old Temple",
        label_ka: "古寺",
        id: 5640
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 5641
      })
      
    
      this.add({
        label_eng: "The Bean Curd Maker's",
        label_ka: "豆腐屋",
        id: 5642
      })
      
    
      this.add({
        label_eng: "The Village of Hanyu (See also Hanyu Village from \"\"The Trouble in the Date Household\"\")",
        label_ka: "埴生村",
        id: 5643
      })
      
    
      this.add({
        label_eng: "The Earthen Bridge (See also The Earthen Bridge from \"\"The Trouble in the Date Household\"\")",
        label_ka: "土橋",
        id: 5644
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5645
      })
      
    
      this.add({
        label_eng: "Yama's Court",
        label_ka: "閻魔王宮",
        id: 5646
      })
      
    
      this.add({
        label_eng: "The Elixir Fruit",
        label_ka: "人蔘菓",
        id: 5647
      })
      
    
      this.add({
        label_eng: "Attempted Boiling to Death",
        label_ka: "釜煮",
        id: 5648
      })
      
    
      this.add({
        label_eng: "The Solitary House",
        label_ka: "一つ家",
        id: 5649
      })
      
    
      this.add({
        label_eng: "The River Ryusa",
        label_ka: "流沙川",
        id: 5650
      })
      
    
      this.add({
        label_eng: "The Burning Mountain",
        label_ka: "火焔山",
        id: 5651
      })
      
    
      this.add({
        label_eng: "The Basho Cave",
        label_ka: "芭蕉洞",
        id: 5652
      })
      
    
      this.add({
        label_eng: "The Buddha's Temple",
        label_ka: "祇園精舎",
        id: 5653
      })
      
    
      this.add({
        label_eng: "Act 1",
        label_ka: "第一幕",
        id: 5654
      })
      
    
      this.add({
        label_eng: "Act 2",
        label_ka: "第二幕",
        id: 5655
      })
      
    
      this.add({
        label_eng: "Teppo Alley",
        label_ka: "鉄砲小路",
        id: 5656
      })
      
    
      this.add({
        label_eng: "Okayo's House",
        label_ka: "鍛冶屋町",
        id: 5657
      })
      
    
      this.add({
        label_eng: "The New Residence",
        label_ka: "家うつり",
        id: 5658
      })
      
    
      this.add({
        label_eng: "Teppo Alley [after the New Residence scene]",
        label_ka: "鉄砲小路 [家うつりの段より]",
        id: 5659
      })
      
    
      this.add({
        label_eng: "The Itodo Myojin Shrine",
        label_ka: "射手明神",
        id: 5660
      })
      
    
      this.add({
        label_eng: "Yoshinaka's Mansion",
        label_ka: "義仲館",
        id: 5661
      })
      
    
      this.add({
        label_eng: "The Toothbrush Maker's House",
        label_ka: "楊枝屋",
        id: 5662
      })
      
    
      this.add({
        label_eng: "The Inn at Otsu",
        label_ka: "大津宿屋",
        id: 5663
      })
      
    
      this.add({
        label_eng: "The Improvised Bamboo Hearse",
        label_ka: "笹引",
        id: 5664
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 5665
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 5666
      })
      
    
      this.add({
        label_eng: "Kajiwara's Mansion",
        label_ka: "梶原館",
        id: 5667
      })
      
    
      this.add({
        label_eng: "The Argument on the Uji River Crossing",
        label_ka: "先陣問答",
        id: 5668
      })
      
    
      this.add({
        label_eng: "Disinheritance of Genda",
        label_ka: "源太勘当",
        id: 5669
      })
      
    
      this.add({
        label_eng: "The Fortune Teller",
        label_ka: "辻法印",
        id: 5670
      })
      
    
      this.add({
        label_eng: "The Tea House at Kanzaki",
        label_ka: "神崎揚屋",
        id: 5671
      })
      
    
      this.add({
        label_eng: "The Innermost Room",
        label_ka: "奥座敷",
        id: 5672
      })
      
    
      this.add({
        label_eng: "The Bribing of Moronao",
        label_ka: "大手下馬先進物　",
        id: 5673
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 5674
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 5675
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 5676
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 5677
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 5678
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 5679
      })
      
    
      this.add({
        label_eng: "Terutora Serves a Meal",
        label_ka: "輝虎配膳",
        id: 5680
      })
      
    
      this.add({
        label_eng: "The Pine Grove at Tosamachi",
        label_ka: "土佐町松原",
        id: 5681
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 5682
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 5683
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 5684
      })
      
    
      this.add({
        label_eng: "The Komakiyama Castle",
        label_ka: "駒木山城中",
        id: 5685
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 5686
      })
      
    
      this.add({
        label_eng: "Scene One",
        label_ka: "（一）",
        id: 5687
      })
      
    
      this.add({
        label_eng: "Scene Two",
        label_ka: "（二）",
        id: 5688
      })
      
    
      this.add({
        label_eng: "Scene Three",
        label_ka: "（三） ",
        id: 5689
      })
      
    
      this.add({
        label_eng: "Scene Four",
        label_ka: "（四） ",
        id: 5690
      })
      
    
      this.add({
        label_eng: "Chudayu Naruyama's House",
        label_ka: "成山忠太夫内",
        id: 5691
      })
      
    
      this.add({
        label_eng: "Hikokuro Ogura's House",
        label_ka: "小倉彦九郎内",
        id: 5692
      })
      
    
      this.add({
        label_eng: "The Revenge at Horikawa",
        label_ka: "京堀川妻敵討",
        id: 5693
      })
      
    
      this.add({
        label_eng: "Sadanoshin's Suicide",
        label_ka: "能舞台定之進切腹",
        id: 5694
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 5695
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 5696
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 5697
      })
      
    
      this.add({
        label_eng: "Jihei's House (The Paper Store)",
        label_ka: "天満紙屋内(紙屋内)",
        id: 5698
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残の橋尽し",
        id: 5699
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 5700
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 5701
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 5702
      })
      
    
      this.add({
        label_eng: "The Inn at Ishibe",
        label_ka: "石部宿屋",
        id: 5703
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 5704
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 5705
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 5706
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 5707
      })
      
    
      this.add({
        label_eng: "The Handing on the Secrets of Calligraphy",
        label_ka: "筆法伝授",
        id: 5708
      })
      
    
      this.add({
        label_eng: "At the Fence",
        label_ka: "築地",
        id: 5709
      })
      
    
      this.add({
        label_eng: "The Beating of Kariya",
        label_ka: "杖折檻",
        id: 5710
      })
      
    
      this.add({
        label_eng: "The Cockcrow",
        label_ka: "東天紅",
        id: 5711
      })
      
    
      this.add({
        label_eng: "The Departure of Michizane",
        label_ka: "丞相名残",
        id: 5712
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 5713
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 5714
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 5715
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 5716
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 5717
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 5718
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 5719
      })
      
    
      this.add({
        label_eng: "Mount Yoshino",
        label_ka: "吉野山",
        id: 5720
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed of Shijo",
        label_ka: "四条河原",
        id: 5721
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 5722
      })
      
    
      this.add({
        label_eng: "The Tearful Journey",
        label_ka: "道行涙の編笠",
        id: 5723
      })
      
    
      this.add({
        label_eng: "The Uji River",
        label_ka: "宇治川蛍狩",
        id: 5724
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 5725
      })
      
    
      this.add({
        label_eng: "The Patent Medicine Seller",
        label_ka: "薬売り",
        id: 5726
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 5727
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 5728
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 5729
      })
      
    
      this.add({
        label_eng: "Takafusa's Mansion",
        label_ka: "中納言高房館",
        id: 5730
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge at Ichijo",
        label_ka: "一條戻り橋",
        id: 5731
      })
      
    
      this.add({
        label_eng: "Watanabe-no-Tsuna's Mansion",
        label_ka: "渡辺綱屋敷",
        id: 5732
      })
      
    
      this.add({
        label_eng: "Minamoto-no-Yorimitsu's Mansion",
        label_ka: "源頼光邸",
        id: 5733
      })
      
    
      this.add({
        label_eng: "Raiko Climbs the Mountain",
        label_ka: "頼光山入り",
        id: 5734
      })
      
    
      this.add({
        label_eng: "The Confrontation with Shutendoji",
        label_ka: "酒呑童子対面",
        id: 5735
      })
      
    
      this.add({
        label_eng: "The Giant Spider",
        label_ka: "大蜘蛛退治",
        id: 5736
      })
      
    
      this.add({
        label_eng: "Shutendoji's Bedroom",
        label_ka: "童子寝所",
        id: 5737
      })
      
    
      this.add({
        label_eng: "Scene One",
        label_ka: "（一）",
        id: 5738
      })
      
    
      this.add({
        label_eng: "Scene Two",
        label_ka: "（二）",
        id: 5739
      })
      
    
      this.add({
        label_eng: "Scene Three",
        label_ka: "（三） ",
        id: 5740
      })
      
    
      this.add({
        label_eng: "The Rat's Romance",
        label_ka: "鼠のそうし",
        id: 5741
      })
      
    
      this.add({
        label_eng: "The Sumo Arena at Horie",
        label_ka: "堀江相撲場",
        id: 5742
      })
      
    
      this.add({
        label_eng: "The Rice Shop at Daihojimachi",
        label_ka: "大宝寺町米屋",
        id: 5743
      })
      
    
      this.add({
        label_eng: "The Fighting at Nambaura",
        label_ka: "難波裏喧嘩",
        id: 5744
      })
      
    
      this.add({
        label_eng: "The Town of Hashimoto",
        label_ka: "橋本",
        id: 5745
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 5746
      })
      
    
      this.add({
        label_eng: "Hangaku Breaks the Gate",
        label_ka: "板額門破り",
        id: 5747
      })
      
    
      this.add({
        label_eng: "Ichiwaka's Maiden Battle",
        label_ka: "市若初陣",
        id: 5748
      })
      
    
      this.add({
        label_eng: "The Disinheritance of Saizaburo",
        label_ka: "才三勘当",
        id: 5749
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 5750
      })
      
    
      this.add({
        label_eng: "The Suzugamori Execution Ground",
        label_ka: "鈴ヶ森",
        id: 5751
      })
      
    
      this.add({
        label_eng: "The Sumo Arena at Horie",
        label_ka: "堀江相撲場",
        id: 5752
      })
      
    
      this.add({
        label_eng: "The Rice Shop at Daihojimachi",
        label_ka: "大宝寺町米屋",
        id: 5753
      })
      
    
      this.add({
        label_eng: "The Fighting at Nambaura",
        label_ka: "難波裏喧嘩",
        id: 5754
      })
      
    
      this.add({
        label_eng: "The Town of Hashimoto",
        label_ka: "橋本",
        id: 5755
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 5756
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 5757
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 5758
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 5759
      })
      
    
      this.add({
        label_eng: "The Memorial Service",
        label_ka: "豊島屋逮夜",
        id: 5760
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "靱猿",
        id: 5761
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5762
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 5763
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 5764
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 5765
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 5766
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 5767
      })
      
    
      this.add({
        label_eng: "The Seven Gods of Fortune",
        label_ka: "七福神宝の入舩",
        id: 5768
      })
      
    
      this.add({
        label_eng: "The Hanabishiya Brothel",
        label_ka: "花菱屋",
        id: 5769
      })
      
    
      this.add({
        label_eng: "Hiuga Island",
        label_ka: "日向嶋",
        id: 5770
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "吉田屋",
        id: 5771
      })
      
    
      this.add({
        label_eng: "The Golden Pavilion",
        label_ka: "金閣寺",
        id: 5772
      })
      
    
      this.add({
        label_eng: "The Painted Rat",
        label_ka: "爪先鼠",
        id: 5773
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 5774
      })
      
    
      this.add({
        label_eng: "The Suzugamori Execution Ground",
        label_ka: "鈴ヶ森",
        id: 5775
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers",
        label_ka: "団子売",
        id: 5776
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 5777
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 5778
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 5779
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 5780
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 5781
      })
      
    
      this.add({
        label_eng: "In front of the Storehouse",
        label_ka: "蔵前",
        id: 5782
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed of Shijo",
        label_ka: "四条河原",
        id: 5783
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 5784
      })
      
    
      this.add({
        label_eng: "The Tearful Journey",
        label_ka: "道行涙の編笠",
        id: 5785
      })
      
    
      this.add({
        label_eng: "The Street Entertainers",
        label_ka: "寿柱立万歳",
        id: 5786
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 5787
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 5788
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 5789
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 5790
      })
      
    
      this.add({
        label_eng: "The Lion Dance",
        label_ka: "連獅子",
        id: 5791
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 5792
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 5793
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5794
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 5795
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 5796
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 5797
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 5798
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 5799
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 5800
      })
      
    
      this.add({
        label_eng: "The Laundry",
        label_ka: "碪拍子",
        id: 5801
      })
      
    
      this.add({
        label_eng: "The House of Tokutayu (Tokudayu or Tokutaifu)",
        label_ka: "徳太夫住家",
        id: 5802
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 5803
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 5804
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 5805
      })
      
    
      this.add({
        label_eng: "The Return from Chikubu Island",
        label_ka: "竹生島遊覧",
        id: 5806
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 5807
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 5808
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 5809
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 5810
      })
      
    
      this.add({
        label_eng: "Teahouse Sometaro at Sonezaki",
        label_ka: "北新地曽根崎茶屋染太郎",
        id: 5811
      })
      
    
      this.add({
        label_eng: "Fry Shop at Gataro Yokocho",
        label_ka: "上塩町がたろ横丁一銭天婦羅天たね",
        id: 5812
      })
      
    
      this.add({
        label_eng: "A Room Upstairs at Kuromon",
        label_ka: "高津日本橋筋黒門市場裏二階間借り",
        id: 5813
      })
      
    
      this.add({
        label_eng: "Café Salon Choryu at Shimoderamachi",
        label_ka: "下寺町電停前カフェーサロン蝶柳",
        id: 5814
      })
      
    
      this.add({
        label_eng: "Meoto Zenzai",
        label_ka: "千日前法善寺横丁めをとぜんざい",
        id: 5815
      })
      
    
      this.add({
        label_eng: "The Quarry",
        label_ka: "石切場",
        id: 5816
      })
      
    
      this.add({
        label_eng: "The House of Matsudayu",
        label_ka: "松太夫住家",
        id: 5817
      })
      
    
      this.add({
        label_eng: "Mt. Hebiyama",
        label_ka: "蛇山",
        id: 5818
      })
      
    
      this.add({
        label_eng: "All Kinds of Flowers",
        label_ka: "花づくし",
        id: 5819
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 5820
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 5821
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 5822
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 5823
      })
      
    
      this.add({
        label_eng: "The Temporary Mansion at Tsurugaoka",
        label_ka: "鶴が岡仮屋",
        id: 5824
      })
      
    
      this.add({
        label_eng: "The Yoshida Shrine",
        label_ka: "吉田社頭",
        id: 5825
      })
      
    
      this.add({
        label_eng: "Yoshiie's Mansion",
        label_ka: "八幡太郎館",
        id: 5826
      })
      
    
      this.add({
        label_eng: "The Sotogahama Beach",
        label_ka: "外が浜",
        id: 5827
      })
      
    
      this.add({
        label_eng: "The House of Bunji",
        label_ka: "善知鳥文治住家",
        id: 5828
      })
      
    
      this.add({
        label_eng: "The Shujaku River Bank",
        label_ka: "朱雀堤",
        id: 5829
      })
      
    
      this.add({
        label_eng: "The Mansion of Prince Tamaki (See also The Messenger Shikitae, Arrowhead and Sodehagi's Appeal)",
        label_ka: "環の宮明御殿 (See also 敷妙使者, 矢の根 and 袖萩祭文)",
        id: 5830
      })
      
    
      this.add({
        label_eng: "The Solitary House",
        label_ka: "一つ家",
        id: 5831
      })
      
    
      this.add({
        label_eng: "The Bottom of the Ravin",
        label_ka: "谷底",
        id: 5832
      })
      
    
      this.add({
        label_eng: "The Gay Quarter Gossips",
        label_ka: "廓噺",
        id: 5833
      })
      
    
      this.add({
        label_eng: "The Hamanomiya Riding Ground",
        label_ka: "浜の宮馬場",
        id: 5834
      })
      
    
      this.add({
        label_eng: "The House of Ichinoshin Asaka",
        label_ka: "浅香市之進留守宅",
        id: 5835
      })
      
    
      this.add({
        label_eng: "The Tea Ceremony House",
        label_ka: "数寄屋",
        id: 5836
      })
      
    
      this.add({
        label_eng: "The House of Chutabei Iwaki",
        label_ka: "岩木忠太兵衛屋敷",
        id: 5837
      })
      
    
      this.add({
        label_eng: "The Revenge on Kyobashi Bridge in Fushimi",
        label_ka: "伏見京橋女敵討",
        id: 5838
      })
      
    
      this.add({
        label_eng: "The Shujaku River Bank",
        label_ka: "朱雀堤",
        id: 5839
      })
      
    
      this.add({
        label_eng: "The Mansion of Prince Tamaki (See also The Messenger Shikitae, Arrowhead and Sodehagi's Appeal)",
        label_ka: "環の宮明御殿 (See also 敷妙使者, 矢の根 and 袖萩祭文)",
        id: 5840
      })
      
    
      this.add({
        label_eng: "The Solitary House",
        label_ka: "一つ家",
        id: 5841
      })
      
    
      this.add({
        label_eng: "The Bottom of the Ravin",
        label_ka: "谷底",
        id: 5842
      })
      
    
      this.add({
        label_eng: "The Seven Gods of Fortune",
        label_ka: "七福神宝の入舩",
        id: 5843
      })
      
    
      this.add({
        label_eng: "The Bamboo Room",
        label_ka: "竹の間",
        id: 5844
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 5845
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 5846
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 5847
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 5848
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 5849
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 5850
      })
      
    
      this.add({
        label_eng: "Masaoka's Loyalty",
        label_ka: "政岡忠義",
        id: 5851
      })
      
    
      this.add({
        label_eng: "Under the Floor",
        label_ka: "床下",
        id: 5852
      })
      
    
      this.add({
        label_eng: "The Daimonjiya Cotton Shop",
        label_ka: "大文字屋",
        id: 5853
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 5854
      })
      
    
      this.add({
        label_eng: "Fukashichi's Visit",
        label_ka: "鱶七上使",
        id: 5855
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 5856
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 5857
      })
      
    
      this.add({
        label_eng: "Shundo Jiroemon's House",
        label_ka: "春藤次郎右衛門屋敷",
        id: 5858
      })
      
    
      this.add({
        label_eng: "The Koriyama Hachiman Shrine",
        label_ka: "郡山八幡",
        id: 5859
      })
      
    
      this.add({
        label_eng: "The Daianji River Bank",
        label_ka: "大安寺堤",
        id: 5860
      })
      
    
      this.add({
        label_eng: "The House of Ichinoshin Asaka",
        label_ka: "浅香市之進留守宅",
        id: 5861
      })
      
    
      this.add({
        label_eng: "The Tea Ceremony House",
        label_ka: "数寄屋",
        id: 5862
      })
      
    
      this.add({
        label_eng: "The House of Chutabei Iwaki",
        label_ka: "岩木忠太兵衛屋敷",
        id: 5863
      })
      
    
      this.add({
        label_eng: "The Revenge on Kyobashi Bridge in Fushimi",
        label_ka: "伏見京橋女敵討",
        id: 5864
      })
      
    
      this.add({
        label_eng: "The House of Yukie Wada",
        label_ka: "和田行家屋敷",
        id: 5865
      })
      
    
      this.add({
        label_eng: "The Town of Okazaki",
        label_ka: "岡崎",
        id: 5866
      })
      
    
      this.add({
        label_eng: "The Revenge at Iga-Ueno",
        label_ka: "伊賀上野仇討",
        id: 5867
      })
      
    
      this.add({
        label_eng: "The Laundry",
        label_ka: "碪拍子",
        id: 5868
      })
      
    
      this.add({
        label_eng: "The House of Tokutayu (Tokudayu or Tokutaifu)",
        label_ka: "徳太夫住家",
        id: 5869
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 5870
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 5871
      })
      
    
      this.add({
        label_eng: "The Cherry-Viewing",
        label_ka: "地主権現花見",
        id: 5872
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 5873
      })
      
    
      this.add({
        label_eng: "The Messenger Shibukawa",
        label_ka: "渋川使者",
        id: 5874
      })
      
    
      this.add({
        label_eng: "The Consultation",
        label_ka: "評議",
        id: 5875
      })
      
    
      this.add({
        label_eng: "Sonobe's House",
        label_ka: "園部屋敷",
        id: 5876
      })
      
    
      this.add({
        label_eng: "The Blacksmith Shop",
        label_ka: "鍛冶屋",
        id: 5877
      })
      
    
      this.add({
        label_eng: "Mount Yoshino",
        label_ka: "吉野山",
        id: 5878
      })
      
    
      this.add({
        label_eng: "Michiharu's Mansion",
        label_ka: "道春館",
        id: 5879
      })
      
    
      this.add({
        label_eng: "The Pine Grove at Tosamachi",
        label_ka: "土佐町松原",
        id: 5880
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 5881
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 5882
      })
      
    
      this.add({
        label_eng: "The Cherry-Viewing",
        label_ka: "地主権現花見",
        id: 5883
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 5884
      })
      
    
      this.add({
        label_eng: "The Messenger Shibukawa",
        label_ka: "渋川使者",
        id: 5885
      })
      
    
      this.add({
        label_eng: "The Consultation",
        label_ka: "評議",
        id: 5886
      })
      
    
      this.add({
        label_eng: "Sonobe's House",
        label_ka: "園部屋敷",
        id: 5887
      })
      
    
      this.add({
        label_eng: "The Blacksmith Shop",
        label_ka: "鍛冶屋",
        id: 5888
      })
      
    
      this.add({
        label_eng: "The Tattooing",
        label_ka: "入墨",
        id: 5889
      })
      
    
      this.add({
        label_eng: "A Visit of Two Ladies-in-Waiting (See also Kinugawa Villege)",
        label_ka: "局使者 (See also 絹川村)",
        id: 5890
      })
      
    
      this.add({
        label_eng: "Rice Washing (See also Kinugawa Villege)",
        label_ka: "米洗い (See also 絹川村)",
        id: 5891
      })
      
    
      this.add({
        label_eng: "Parting of Miuranosuke with His Mother (See also Kinugawa Villege)",
        label_ka: "三浦之助母別れ（三浦別れ） (See also 絹川村)",
        id: 5892
      })
      
    
      this.add({
        label_eng: "Takatsuna's Declaration (See also Kinugawa Villege)",
        label_ka: "高綱物語 (See also 絹川村)",
        id: 5893
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 5894
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 5895
      })
      
    
      this.add({
        label_eng: "The Kyohaku Lakeside in China",
        label_ka: "唐国鏡白湖畔",
        id: 5896
      })
      
    
      this.add({
        label_eng: "The Cormorant Fisherman's House",
        label_ka: "美濃国鵜飼屋鵜匠の頭内",
        id: 5897
      })
      
    
      this.add({
        label_eng: "Inspection of the Cormorant Fishing on the Nagara River",
        label_ka: "長良川鵜飼上覧",
        id: 5898
      })
      
    
      this.add({
        label_eng: "The Subjugation of the Earth-Spider",
        label_ka: "土蜘蛛退治",
        id: 5899
      })
      
    
      this.add({
        label_eng: "Urikohime and Amanjaku",
        label_ka: "瓜子姫とあまんじゃく",
        id: 5900
      })
      
    
      this.add({
        label_eng: "The Pine-Lined Road at Akasaka",
        label_ka: "赤坂並木",
        id: 5901
      })
      
    
      this.add({
        label_eng: "The Old Temple",
        label_ka: "古寺",
        id: 5902
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 5903
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 5904
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 5905
      })
      
    
      this.add({
        label_eng: "The Sento Palace",
        label_ka: "仙洞御所",
        id: 5906
      })
      
    
      this.add({
        label_eng: "The Nunnery at Kitasaga",
        label_ka: "北嵯峨",
        id: 5907
      })
      
    
      this.add({
        label_eng: "Yoshitsune's Mansion at Horikawa",
        label_ka: "堀川御所",
        id: 5908
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 5909
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 5910
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 5911
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 5912
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 5913
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 5914
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 5915
      })
      
    
      this.add({
        label_eng: "Mt. Kurama",
        label_ka: "鞍馬山",
        id: 5916
      })
      
    
      this.add({
        label_eng: "Mt. Shosha in Banshu Province",
        label_ka: "播州書写山",
        id: 5917
      })
      
    
      this.add({
        label_eng: "Kiyomori's Mansion",
        label_ka: "清盛館兵法",
        id: 5918
      })
      
    
      this.add({
        label_eng: "The Chrysanthemum Garden (See also The Rear Garden)",
        label_ka: "菊畑 (See also 奥庭)",
        id: 5919
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 5920
      })
      
    
      this.add({
        label_eng: "The Almanac Maker's",
        label_ka: "大経師内",
        id: 5921
      })
      
    
      this.add({
        label_eng: "Bairyu's House at Okazaki",
        label_ka: "岡崎村梅龍内",
        id: 5922
      })
      
    
      this.add({
        label_eng: "The Hideout in Tamba Province",
        label_ka: "奥丹波隠れ家",
        id: 5923
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 5924
      })
      
    
      this.add({
        label_eng: "The Bandai Pond",
        label_ka: "万代池",
        id: 5925
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 5926
      })
      
    
      this.add({
        label_eng: "The Torture of Chujohime in the Snow",
        label_ka: "中将姫雪責",
        id: 5927
      })
      
    
      this.add({
        label_eng: "The Dumpling Peddlers",
        label_ka: "団子売",
        id: 5928
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 5929
      })
      
    
      this.add({
        label_eng: "Street Entertainers",
        label_ka: "万歳",
        id: 5930
      })
      
    
      this.add({
        label_eng: "The Torture of Chujohime in the Snow",
        label_ka: "中将姫雪責",
        id: 5931
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 5932
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 5933
      })
      
    
      this.add({
        label_eng: "In front of the Storehouse",
        label_ka: "蔵前",
        id: 5934
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 5935
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 5936
      })
      
    
      this.add({
        label_eng: "The Talks About Gay Quarters",
        label_ka: "廓噺",
        id: 5937
      })
      
    
      this.add({
        label_eng: "The House of Yukie Wada",
        label_ka: "和田行家屋敷",
        id: 5938
      })
      
    
      this.add({
        label_eng: "The Engakuji Temple",
        label_ka: "円覚寺",
        id: 5939
      })
      
    
      this.add({
        label_eng: "The House of Karaki Masaemon",
        label_ka: "唐木政右衛門屋敷",
        id: 5940
      })
      
    
      this.add({
        label_eng: "The Grand Hall in Lord Konda's Mansion",
        label_ka: "誉田家大広間",
        id: 5941
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 5942
      })
      
    
      this.add({
        label_eng: "The New Barrier at Fujikawa with Insertion of the Scene of Dumpling Peddlers",
        label_ka: "富士川新関 引抜き 団子売",
        id: 5943
      })
      
    
      this.add({
        label_eng: "The Bamboo Groove",
        label_ka: "竹藪",
        id: 5944
      })
      
    
      this.add({
        label_eng: "The Town of Okazaki",
        label_ka: "岡崎",
        id: 5945
      })
      
    
      this.add({
        label_eng: "The Hokkokuya Inn at Fushimi,",
        label_ka: "伏見北国屋",
        id: 5946
      })
      
    
      this.add({
        label_eng: "The Revenge at Iga-Ueno",
        label_ka: "伊賀上野仇討",
        id: 5947
      })
      
    
      this.add({
        label_eng: "The Town of Shiga",
        label_ka: "志賀の里",
        id: 5948
      })
      
    
      this.add({
        label_eng: "The Sakuranomiya Shrine",
        label_ka: "桜の宮物狂",
        id: 5949
      })
      
    
      this.add({
        label_eng: "The Todaiji Temple",
        label_ka: "東大寺",
        id: 5950
      })
      
    
      this.add({
        label_eng: "The Nigatsudo Hall",
        label_ka: "二月堂",
        id: 5951
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 5952
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 5953
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 5954
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "酒屋",
        id: 5955
      })
      
    
      this.add({
        label_eng: "Butterflies' Travel",
        label_ka: "蝶の道行",
        id: 5956
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 5957
      })
      
    
      this.add({
        label_eng: "The Lumber Carriers' Song",
        label_ka: "木遣り音頭",
        id: 5958
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 5959
      })
      
    
      this.add({
        label_eng: "Butterflies' Travel",
        label_ka: "蝶の道行",
        id: 5960
      })
      
    
      this.add({
        label_eng: "In Front of the Gate",
        label_ka: "門前",
        id: 5961
      })
      
    
      this.add({
        label_eng: "The Poisoned Sake",
        label_ka: "毒酒",
        id: 5962
      })
      
    
      this.add({
        label_eng: "The Port of Naniwa",
        label_ka: "浪花入江",
        id: 5963
      })
      
    
      this.add({
        label_eng: "Kazuenosuke's Urgent Call",
        label_ka: "主計之介早討",
        id: 5964
      })
      
    
      this.add({
        label_eng: "Masakiyo's Castle",
        label_ka: "正清本城",
        id: 5965
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 5966
      })
      
    
      this.add({
        label_eng: "The Vegetable Farm",
        label_ka: "段ばたけ",
        id: 5967
      })
      
    
      this.add({
        label_eng: "Autumn on Mount Kon",
        label_ka: "崑山の秋",
        id: 5968
      })
      
    
      this.add({
        label_eng: "The House of Hunter Genza",
        label_ka: "猟師源左内",
        id: 5969
      })
      
    
      this.add({
        label_eng: "The Lakeside in Winter",
        label_ka: "冬の湖畔",
        id: 5970
      })
      
    
      this.add({
        label_eng: "The Modoribashi Bridge",
        label_ka: "戻り橋",
        id: 5971
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 5972
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 5973
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 5974
      })
      
    
      this.add({
        label_eng: "Grand Hall in Ashikaga Mansion",
        label_ka: "足利館大広間",
        id: 5975
      })
      
    
      this.add({
        label_eng: "The Innermost Room",
        label_ka: "足利館奥御殿",
        id: 5976
      })
      
    
      this.add({
        label_eng: "The Suwa Shrine",
        label_ka: "諏訪明神百度石",
        id: 5977
      })
      
    
      this.add({
        label_eng: "Kikyo Field",
        label_ka: "桔梗原",
        id: 5978
      })
      
    
      this.add({
        label_eng: "Kagekatsu and Wooden Clogs",
        label_ka: "景勝下駄",
        id: 5979
      })
      
    
      this.add({
        label_eng: "Kansuke's House",
        label_ka: "勘助住家",
        id: 5980
      })
      
    
      this.add({
        label_eng: "Shingen's Mansion",
        label_ka: "武田信玄館",
        id: 5981
      })
      
    
      this.add({
        label_eng: "Messenger Yoshikiyo's Visit",
        label_ka: "村上義清上使",
        id: 5982
      })
      
    
      this.add({
        label_eng: "Katsuyori Kills Himself",
        label_ka: "勝頼切腹",
        id: 5983
      })
      
    
      this.add({
        label_eng: "The Drug Peddlers' Journey",
        label_ka: "道行似合の女夫丸",
        id: 5984
      })
      
    
      this.add({
        label_eng: "Messenger Kagekatsu's Visit (See also Kenshin's Mansion)",
        label_ka: "景勝上使 (See also 謙信館）",
        id: 5985
      })
      
    
      this.add({
        label_eng: "The Delivery of the Rifle (See also Kenshin's Mansion)",
        label_ka: "鉄砲渡し (See also 謙信館)",
        id: 5986
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 5987
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 5988
      })
      
    
      this.add({
        label_eng: "The Death of Dosan",
        label_ka: "道三最期",
        id: 5989
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 5990
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 5991
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 5992
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 5993
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 5994
      })
      
    
      this.add({
        label_eng: "The Shido Temple",
        label_ka: "志渡寺",
        id: 5995
      })
      
    
      this.add({
        label_eng: "The Greengrocer's at Shin-Utsubo",
        label_ka: "新靱",
        id: 5996
      })
      
    
      this.add({
        label_eng: "Inagawa's House",
        label_ka: "猪名川内",
        id: 5997
      })
      
    
      this.add({
        label_eng: "The Sumo Arena",
        label_ka: "相撲場",
        id: 5998
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 5999
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 6000
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 6001
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 6002
      })
      
    
      this.add({
        label_eng: "The Zama Shrine",
        label_ka: "座摩社前",
        id: 6003
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 6004
      })
      
    
      this.add({
        label_eng: "The Oil Store",
        label_ka: "油屋",
        id: 6005
      })
      
    
      this.add({
        label_eng: "The Storehouse",
        label_ka: "蔵場",
        id: 6006
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 6007
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 6008
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 6009
      })
      
    
      this.add({
        label_eng: "The Simizuya Tea House at Temma",
        label_ka: "天満清水屋",
        id: 6010
      })
      
    
      this.add({
        label_eng: "The Branch Store at Yamatobashi",
        label_ka: "大和橋出見世",
        id: 6011
      })
      
    
      this.add({
        label_eng: "The Suicide Trip of Kaheiji and Osaga",
        label_ka: "嘉平次おさが道行",
        id: 6012
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 6013
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 6014
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 6015
      })
      
    
      this.add({
        label_eng: "Azuchi Castle",
        label_ka: "安土城中",
        id: 6016
      })
      
    
      this.add({
        label_eng: "The Feast at Nijo Castle",
        label_ka: "二条城配膳",
        id: 6017
      })
      
    
      this.add({
        label_eng: "Mitsuhide's Residence at Sembondori",
        label_ka: "千本通光秀館",
        id: 6018
      })
      
    
      this.add({
        label_eng: "The Honnoji Temple",
        label_ka: "本能寺",
        id: 6019
      })
      
    
      this.add({
        label_eng: "Lady Ano's Reports to Hisayoshi",
        label_ka: "局注進",
        id: 6020
      })
      
    
      this.add({
        label_eng: "Chozaemon's Suicide",
        label_ka: "長左衛門切腹",
        id: 6021
      })
      
    
      this.add({
        label_eng: "The Myoshinji Temple",
        label_ka: "妙心寺",
        id: 6022
      })
      
    
      this.add({
        label_eng: "The Fort of Suginomori",
        label_ka: "杉の森",
        id: 6023
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 6024
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 6025
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 6026
      })
      
    
      this.add({
        label_eng: "The Funeral at the Daitokuji Temple",
        label_ka: "大徳寺焼香",
        id: 6027
      })
      
    
      this.add({
        label_eng: "Azuchi Castle",
        label_ka: "安土城中",
        id: 6028
      })
      
    
      this.add({
        label_eng: "The Feast at Nijo Castle",
        label_ka: "二条城配膳",
        id: 6029
      })
      
    
      this.add({
        label_eng: "Mitsuhide's Residence at Sembondori",
        label_ka: "千本通光秀館",
        id: 6030
      })
      
    
      this.add({
        label_eng: "The Honnoji Temple",
        label_ka: "本能寺",
        id: 6031
      })
      
    
      this.add({
        label_eng: "Lady Ano's Reports to Hisayoshi",
        label_ka: "局注進",
        id: 6032
      })
      
    
      this.add({
        label_eng: "Chozaemon's Suicide",
        label_ka: "長左衛門切腹",
        id: 6033
      })
      
    
      this.add({
        label_eng: "The Myoshinji Temple",
        label_ka: "妙心寺",
        id: 6034
      })
      
    
      this.add({
        label_eng: "The Fort of Suginomori",
        label_ka: "杉の森",
        id: 6035
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 6036
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 6037
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 6038
      })
      
    
      this.add({
        label_eng: "The Funeral at the Daitokuji Temple",
        label_ka: "大徳寺焼香",
        id: 6039
      })
      
    
      this.add({
        label_eng: "Scene One",
        label_ka: "（一）",
        id: 6040
      })
      
    
      this.add({
        label_eng: "Scene Two",
        label_ka: "（二）",
        id: 6041
      })
      
    
      this.add({
        label_eng: "Scene Three",
        label_ka: "（三） ",
        id: 6042
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 6043
      })
      
    
      this.add({
        label_eng: "In Front of the Sumiyoshi Shrine",
        label_ka: "住吉鳥居前",
        id: 6044
      })
      
    
      this.add({
        label_eng: "The Curio Shop at Uchihonmachi",
        label_ka: "内本町道具屋",
        id: 6045
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 6046
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 6047
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 6048
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 6049
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 6050
      })
      
    
      this.add({
        label_eng: "In Front of the Sumiyoshi Shrine",
        label_ka: "住吉鳥居前",
        id: 6051
      })
      
    
      this.add({
        label_eng: "The Curio Shop at Uchihonmachi",
        label_ka: "内本町道具屋",
        id: 6052
      })
      
    
      this.add({
        label_eng: "The Lovers' Trip",
        label_ka: "道行妹背の走書",
        id: 6053
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 6054
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 6055
      })
      
    
      this.add({
        label_eng: "The House of Danshichi",
        label_ka: "田島町団七内",
        id: 6056
      })
      
    
      this.add({
        label_eng: "The Ouchi Mansion",
        label_ka: "大内館",
        id: 6057
      })
      
    
      this.add({
        label_eng: "The Aphrodisiac Wine",
        label_ka: "守宮酒",
        id: 6058
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 6059
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 6060
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 6061
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 6062
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 6063
      })
      
    
      this.add({
        label_eng: "The Second-Hand Article Dealer's at Unagidani",
        label_ka: "鰻谷",
        id: 6064
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 6065
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 6066
      })
      
    
      this.add({
        label_eng: "The Dry Riverbed at Shichijo",
        label_ka: "七条河原",
        id: 6067
      })
      
    
      this.add({
        label_eng: "Kinai's House",
        label_ka: "喜内住家",
        id: 6068
      })
      
    
      this.add({
        label_eng: "The Otowa Hill",
        label_ka: "音羽山",
        id: 6069
      })
      
    
      this.add({
        label_eng: "The Biwa Music",
        label_ka: "松波琵琶",
        id: 6070
      })
      
    
      this.add({
        label_eng: "The Maple Hill",
        label_ka: "紅葉山",
        id: 6071
      })
      
    
      this.add({
        label_eng: "Honzo's Villa",
        label_ka: "本蔵下屋敷",
        id: 6072
      })
      
    
      this.add({
        label_eng: "The Return from Chikubu Island",
        label_ka: "竹生島遊覧",
        id: 6073
      })
      
    
      this.add({
        label_eng: "Kurosuke's House",
        label_ka: "九郎助内",
        id: 6074
      })
      
    
      this.add({
        label_eng: "The Mask Peddler",
        label_ka: "面売り",
        id: 6075
      })
      
    
      this.add({
        label_eng: "Jurobei's House",
        label_ka: "十郎兵衛内",
        id: 6076
      })
      
    
      this.add({
        label_eng: "The Komakiyama Castle",
        label_ka: "駒木山城中",
        id: 6077
      })
      
    
      this.add({
        label_eng: "Jihei's House (The Paper Store)",
        label_ka: "天満紙屋内(紙屋内)",
        id: 6078
      })
      
    
      this.add({
        label_eng: "Street Entertainers",
        label_ka: "万歳",
        id: 6079
      })
      
    
      this.add({
        label_eng: "The Fisherwoman",
        label_ka: "海女",
        id: 6080
      })
      
    
      this.add({
        label_eng: "Komachi in Her Old Age",
        label_ka: "関寺小町",
        id: 6081
      })
      
    
      this.add({
        label_eng: "Heron Girl",
        label_ka: "鷺娘",
        id: 6082
      })
      
    
      this.add({
        label_eng: "The Visit of Wada Byoe",
        label_ka: "和田兵衛上使",
        id: 6083
      })
      
    
      this.add({
        label_eng: "Moritsuna's War Camp (See also Love for Koshiro and Moritsuna Identifies a Head)",
        label_ka: "盛綱陣屋 (See also 小四郎恩愛 and 盛綱首実検)",
        id: 6084
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 6085
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 6086
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 6087
      })
      
    
      this.add({
        label_eng: "The Almanac Maker's",
        label_ka: "大経師内",
        id: 6088
      })
      
    
      this.add({
        label_eng: "Bairyu's House at Okazaki",
        label_ka: "岡崎村梅龍内",
        id: 6089
      })
      
    
      this.add({
        label_eng: "The Hideout in Tamba Province",
        label_ka: "奥丹波隠れ家",
        id: 6090
      })
      
    
      this.add({
        label_eng: "The Swordsmith Shop at Shimotachiuri in Kyoto",
        label_ka: "京下立売刀屋",
        id: 6091
      })
      
    
      this.add({
        label_eng: "The Izutsuya Tea House at Ishigaki-cho",
        label_ka: "石垣町井筒屋",
        id: 6092
      })
      
    
      this.add({
        label_eng: "The Trip from Kyoto to Osaka",
        label_ka: "おはな半七道行",
        id: 6093
      })
      
    
      this.add({
        label_eng: "The Woodwork Shop at Nagamachi, Osaka",
        label_ka: "大坂長町伽羅屋",
        id: 6094
      })
      
    
      this.add({
        label_eng: "The Village of Ueda",
        label_ka: "上田村",
        id: 6095
      })
      
    
      this.add({
        label_eng: "The Grocery Store",
        label_ka: "八百屋",
        id: 6096
      })
      
    
      this.add({
        label_eng: "The Final Trip",
        label_ka: "道行思ひの短夜",
        id: 6097
      })
      
    
      this.add({
        label_eng: "The Pine Grove",
        label_ka: "小松原",
        id: 6098
      })
      
    
      this.add({
        label_eng: "Sarusawa Pond",
        label_ka: "猿沢池",
        id: 6099
      })
      
    
      this.add({
        label_eng: "The Deer Killing",
        label_ka: "鹿殺し",
        id: 6100
      })
      
    
      this.add({
        label_eng: "The Bill-Collecting",
        label_ka: "掛乞",
        id: 6101
      })
      
    
      this.add({
        label_eng: "The Comical Ballad",
        label_ka: "万才",
        id: 6102
      })
      
    
      this.add({
        label_eng: "Shibaroku's House",
        label_ka: "芝六住家",
        id: 6103
      })
      
    
      this.add({
        label_eng: "Sadaka's (Dazai) Mansion",
        label_ka: "太宰館",
        id: 6104
      })
      
    
      this.add({
        label_eng: "Imoyama and Seyama Mansions",
        label_ka: "妹山背山",
        id: 6105
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 6106
      })
      
    
      this.add({
        label_eng: "The Well-Cleaning",
        label_ka: "井戸替",
        id: 6107
      })
      
    
      this.add({
        label_eng: "The Sake Shop",
        label_ka: "杉酒屋",
        id: 6108
      })
      
    
      this.add({
        label_eng: "The Strands of Love",
        label_ka: "道行恋の小田巻",
        id: 6109
      })
      
    
      this.add({
        label_eng: "Fukashichi's Visit",
        label_ka: "鱶七上使",
        id: 6110
      })
      
    
      this.add({
        label_eng: "Tachibana's Return",
        label_ka: "姫戻り",
        id: 6111
      })
      
    
      this.add({
        label_eng: "The Glittering Mansion",
        label_ka: "金殿",
        id: 6112
      })
      
    
      this.add({
        label_eng: "Yama's Court",
        label_ka: "閻魔王宮",
        id: 6113
      })
      
    
      this.add({
        label_eng: "The Elixir Fruit",
        label_ka: "人蔘菓",
        id: 6114
      })
      
    
      this.add({
        label_eng: "Attempted Boiling to Death",
        label_ka: "釜煮",
        id: 6115
      })
      
    
      this.add({
        label_eng: "The Solitary House",
        label_ka: "一つ家",
        id: 6116
      })
      
    
      this.add({
        label_eng: "The River Ryusa",
        label_ka: "流沙川",
        id: 6117
      })
      
    
      this.add({
        label_eng: "The Burning Mountain",
        label_ka: "火焔山",
        id: 6118
      })
      
    
      this.add({
        label_eng: "The Basho Cave",
        label_ka: "芭蕉洞",
        id: 6119
      })
      
    
      this.add({
        label_eng: "The Buddha's Temple",
        label_ka: "祇園精舎",
        id: 6120
      })
      
    
      this.add({
        label_eng: "The Uji River",
        label_ka: "宇治川蛍狩",
        id: 6121
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 6122
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 6123
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 6124
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 6125
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 6126
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 6127
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 6128
      })
      
    
      this.add({
        label_eng: "The Kaminari Gate",
        label_ka: "雷門",
        id: 6129
      })
      
    
      this.add({
        label_eng: "The Tea House",
        label_ka: "揚屋",
        id: 6130
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 6131
      })
      
    
      this.add({
        label_eng: "The Maple Viewing Party",
        label_ka: "紅葉狩",
        id: 6132
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 6133
      })
      
    
      this.add({
        label_eng: "The Kamo Residence",
        label_ka: "加茂館",
        id: 6134
      })
      
    
      this.add({
        label_eng: "The Insane Yasuna",
        label_ka: "保名物狂",
        id: 6135
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 6136
      })
      
    
      this.add({
        label_eng: "The Fox-Kuzunoha's Travel",
        label_ka: "蘭菊の乱れ",
        id: 6137
      })
      
    
      this.add({
        label_eng: "The Helmet Identification at Tsurugaoka",
        label_ka: "鶴が岡兜改め",
        id: 6138
      })
      
    
      this.add({
        label_eng: "The Love Poem",
        label_ka: "恋歌",
        id: 6139
      })
      
    
      this.add({
        label_eng: "The Cutting of the Pine Branch",
        label_ka: "松切り",
        id: 6140
      })
      
    
      this.add({
        label_eng: "The Bribing of Moronao",
        label_ka: "大手下馬先進物　",
        id: 6141
      })
      
    
      this.add({
        label_eng: "Okaru Delivers the Letter Case (Kaoyo's Poem)",
        label_ka: "おかる文使い",
        id: 6142
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 6143
      })
      
    
      this.add({
        label_eng: "The Back Gate",
        label_ka: "裏門",
        id: 6144
      })
      
    
      this.add({
        label_eng: "The Flower Basket",
        label_ka: "花籠",
        id: 6145
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 6146
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 6147
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 6148
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 6149
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 6150
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 6151
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 6152
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 6153
      })
      
    
      this.add({
        label_eng: "The Snowball",
        label_ka: "雪転かし",
        id: 6154
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 6155
      })
      
    
      this.add({
        label_eng: "The Hanamizubashi Bridge",
        label_ka: "花水橋引揚",
        id: 6156
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 6157
      })
      
    
      this.add({
        label_eng: "The Lumber Carriers' Song",
        label_ka: "木遣り音頭",
        id: 6158
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 6159
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 6160
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 6161
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 6162
      })
      
    
      this.add({
        label_eng: "The Village of Nozaki",
        label_ka: "野崎村",
        id: 6163
      })
      
    
      this.add({
        label_eng: "The Street Entertainers",
        label_ka: "寿柱立万歳",
        id: 6164
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 6165
      })
      
    
      this.add({
        label_eng: "Michiharu's Mansion",
        label_ka: "道春館",
        id: 6166
      })
      
    
      this.add({
        label_eng: "The Pine Grove at Tosamachi",
        label_ka: "土佐町松原",
        id: 6167
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 6168
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 6169
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 6170
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 6171
      })
      
    
      this.add({
        label_eng: "The Disinheritance of Saizaburo",
        label_ka: "才三勘当",
        id: 6172
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 6173
      })
      
    
      this.add({
        label_eng: "The Suzugamori Execution Ground",
        label_ka: "鈴ヶ森",
        id: 6174
      })
      
    
      this.add({
        label_eng: "The Heike Clan Headquarters",
        label_ka: "六波羅",
        id: 6175
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 6176
      })
      
    
      this.add({
        label_eng: "The Shikina Bay",
        label_ka: "舟路の道行より敷名の浦",
        id: 6177
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 6178
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 6179
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 6180
      })
      
    
      this.add({
        label_eng: "Chudayu Naruyama's House",
        label_ka: "成山忠太夫内",
        id: 6181
      })
      
    
      this.add({
        label_eng: "Hikokuro Ogura's House",
        label_ka: "小倉彦九郎内",
        id: 6182
      })
      
    
      this.add({
        label_eng: "The Revenge at Horikawa",
        label_ka: "京堀川妻敵討",
        id: 6183
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 6184
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 6185
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 6186
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 6187
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 6188
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 6189
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 6190
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 6191
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 6192
      })
      
    
      this.add({
        label_eng: "The Sake Peddler (See also The Village of Kishinosato)",
        label_ka: "鳶田 (See also 岸の里)",
        id: 6193
      })
      
    
      this.add({
        label_eng: "Zesai's House (See also The Village of Tengachaya)",
        label_ka: "是斎住家 (See also 天下茶屋)",
        id: 6194
      })
      
    
      this.add({
        label_eng: "The Golden Pavilion",
        label_ka: "金閣寺",
        id: 6195
      })
      
    
      this.add({
        label_eng: "The Painted Rat",
        label_ka: "爪先鼠",
        id: 6196
      })
      
    
      this.add({
        label_eng: "The Uji River",
        label_ka: "宇治川蛍狩",
        id: 6197
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 6198
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 6199
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 6200
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 6201
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 6202
      })
      
    
      this.add({
        label_eng: "The Seven Gods of Fortune",
        label_ka: "七福神宝の入舩",
        id: 6203
      })
      
    
      this.add({
        label_eng: "The Tug of War",
        label_ka: "首引き",
        id: 6204
      })
      
    
      this.add({
        label_eng: "The Old Shinto Shrine",
        label_ka: "奥山古社",
        id: 6205
      })
      
    
      this.add({
        label_eng: "Kowakubi's House",
        label_ka: "強頸屋敷",
        id: 6206
      })
      
    
      this.add({
        label_eng: "In Front of the Kitchen of Koromonogo's House",
        label_ka: "衫子館厨口",
        id: 6207
      })
      
    
      this.add({
        label_eng: "The Path Across a Field",
        label_ka: "野道",
        id: 6208
      })
      
    
      this.add({
        label_eng: "The Human Sacrifice",
        label_ka: "人柱",
        id: 6209
      })
      
    
      this.add({
        label_eng: "The Koromonogo Riverbank",
        label_ka: "衫子堤",
        id: 6210
      })
      
    
      this.add({
        label_eng: "The Inn at Otsu",
        label_ka: "大津宿屋",
        id: 6211
      })
      
    
      this.add({
        label_eng: "The Improvised Bamboo Hearse",
        label_ka: "笹引",
        id: 6212
      })
      
    
      this.add({
        label_eng: "The Matsuemon's House",
        label_ka: "松右衛門内",
        id: 6213
      })
      
    
      this.add({
        label_eng: "The Rowing Lesson",
        label_ka: "逆櫓",
        id: 6214
      })
      
    
      this.add({
        label_eng: "The Hamanomiya Riding Ground",
        label_ka: "浜の宮馬場",
        id: 6215
      })
      
    
      this.add({
        label_eng: "The House of Ichinoshin Asaka",
        label_ka: "浅香市之進留守宅",
        id: 6216
      })
      
    
      this.add({
        label_eng: "The Tea Ceremony House",
        label_ka: "数寄屋",
        id: 6217
      })
      
    
      this.add({
        label_eng: "The House of Chutabei Iwaki",
        label_ka: "岩木忠太兵衛屋敷",
        id: 6218
      })
      
    
      this.add({
        label_eng: "The Revenge on Kyobashi Bridge in Fushimi",
        label_ka: "伏見京橋女敵討",
        id: 6219
      })
      
    
      this.add({
        label_eng: "Mt. Kurama",
        label_ka: "鞍馬山",
        id: 6220
      })
      
    
      this.add({
        label_eng: "Mt. Shosha in Banshu Province",
        label_ka: "播州書写山",
        id: 6221
      })
      
    
      this.add({
        label_eng: "Kiyomori's Mansion",
        label_ka: "清盛館兵法",
        id: 6222
      })
      
    
      this.add({
        label_eng: "The Chrysanthemum Garden (See also The Rear Garden)",
        label_ka: "菊畑 (See also 奥庭)",
        id: 6223
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 6224
      })
      
    
      this.add({
        label_eng: "Tombei's House",
        label_ka: "頓兵衛内",
        id: 6225
      })
      
    
      this.add({
        label_eng: "The Okawa River",
        label_ka: "大川",
        id: 6226
      })
      
    
      this.add({
        label_eng: "The Mass Murder",
        label_ka: "五人伐",
        id: 6227
      })
      
    
      this.add({
        label_eng: "Inagawa's House",
        label_ka: "猪名川内",
        id: 6228
      })
      
    
      this.add({
        label_eng: "The Sumo Arena",
        label_ka: "相撲場",
        id: 6229
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6230
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 6231
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 6232
      })
      
    
      this.add({
        label_eng: "The Yamanaya Tea House",
        label_ka: "山名屋",
        id: 6233
      })
      
    
      this.add({
        label_eng: "The Mask Peddler",
        label_ka: "面売り",
        id: 6234
      })
      
    
      this.add({
        label_eng: "The Bamboo Room",
        label_ka: "竹の間",
        id: 6235
      })
      
    
      this.add({
        label_eng: "The State Room",
        label_ka: "御殿",
        id: 6236
      })
      
    
      this.add({
        label_eng: "Masaoka's Loyalty",
        label_ka: "政岡忠義",
        id: 6237
      })
      
    
      this.add({
        label_eng: "Under the Floor",
        label_ka: "床下",
        id: 6238
      })
      
    
      this.add({
        label_eng: "Village of Ninokuchi",
        label_ka: "新口村",
        id: 6239
      })
      
    
      this.add({
        label_eng: "The Golden Pavilion",
        label_ka: "金閣寺",
        id: 6240
      })
      
    
      this.add({
        label_eng: "The Painted Rat",
        label_ka: "爪先鼠",
        id: 6241
      })
      
    
      this.add({
        label_eng: "The Suicide with a Scythe",
        label_ka: "弥作鎌腹",
        id: 6242
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 6243
      })
      
    
      this.add({
        label_eng: "The Imperial Palace",
        label_ka: "大内",
        id: 6244
      })
      
    
      this.add({
        label_eng: "The Kamo Residence",
        label_ka: "加茂館",
        id: 6245
      })
      
    
      this.add({
        label_eng: "The Insane Yasuna",
        label_ka: "保名物狂",
        id: 6246
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 6247
      })
      
    
      this.add({
        label_eng: "The Two Look-Alike Servants",
        label_ka: "信田森二人奴",
        id: 6248
      })
      
    
      this.add({
        label_eng: "Act 1",
        label_ka: "第一幕",
        id: 6249
      })
      
    
      this.add({
        label_eng: "Act 2",
        label_ka: "第二幕",
        id: 6250
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "うつぼ猿",
        id: 6251
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 6252
      })
      
    
      this.add({
        label_eng: "The Aburaya Tea House",
        label_ka: "古市油屋",
        id: 6253
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 6254
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 6255
      })
      
    
      this.add({
        label_eng: "The Travel in a Palanquin",
        label_ka: "道行相合かご",
        id: 6256
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 6257
      })
      
    
      this.add({
        label_eng: "The Handing on the Secrets of Calligraphy",
        label_ka: "筆法伝授",
        id: 6258
      })
      
    
      this.add({
        label_eng: "At the Fence",
        label_ka: "築地",
        id: 6259
      })
      
    
      this.add({
        label_eng: "The Beating of Kariya",
        label_ka: "杖折檻",
        id: 6260
      })
      
    
      this.add({
        label_eng: "The Cockcrow",
        label_ka: "東天紅",
        id: 6261
      })
      
    
      this.add({
        label_eng: "The Departure of Michizane",
        label_ka: "丞相名残",
        id: 6262
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 6263
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 6264
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 6265
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 6266
      })
      
    
      this.add({
        label_eng: "Mount Tempai",
        label_ka: "天拝山",
        id: 6267
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 6268
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 6269
      })
      
    
      this.add({
        label_eng: "The Dance of Sambaso",
        label_ka: "寿式三番叟",
        id: 6270
      })
      
    
      this.add({
        label_eng: "Kumagai's Cheery Tree",
        label_ka: "熊谷桜",
        id: 6271
      })
      
    
      this.add({
        label_eng: "Kumagai's Camp (See also Kumagai's Explanation and The Head Identification)",
        label_ka: "熊谷陣屋 (See also 熊谷物語 and 首実検)",
        id: 6272
      })
      
    
      this.add({
        label_eng: "The Pine Grove at Tosamachi",
        label_ka: "土佐町松原",
        id: 6273
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 6274
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 6275
      })
      
    
      this.add({
        label_eng: "The Yoshidaya Tea House",
        label_ka: "吉田屋",
        id: 6276
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 6277
      })
      
    
      this.add({
        label_eng: "The Lion Dance",
        label_ka: "連獅子",
        id: 6278
      })
      
    
      this.add({
        label_eng: "The Gay Quarter Gossips",
        label_ka: "廓噺",
        id: 6279
      })
      
    
      this.add({
        label_eng: "The Kasaneizutsu Tea House",
        label_ka: "六軒町",
        id: 6280
      })
      
    
      this.add({
        label_eng: "Sota's House",
        label_ka: "惣太住家",
        id: 6281
      })
      
    
      this.add({
        label_eng: "The Mad Woman",
        label_ka: "狂女道行",
        id: 6282
      })
      
    
      this.add({
        label_eng: "The Sumida River",
        label_ka: "隅田川",
        id: 6283
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 6284
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 6285
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 6286
      })
      
    
      this.add({
        label_eng: "The Memorial Service",
        label_ka: "豊島屋逮夜",
        id: 6287
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 6288
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 6289
      })
      
    
      this.add({
        label_eng: "The Sento Palace",
        label_ka: "仙洞御所",
        id: 6290
      })
      
    
      this.add({
        label_eng: "The Nunnery at Kitasaga",
        label_ka: "北嵯峨",
        id: 6291
      })
      
    
      this.add({
        label_eng: "Yoshitsune's Mansion at Horikawa",
        label_ka: "堀川御所",
        id: 6292
      })
      
    
      this.add({
        label_eng: "Fushimi Inari Shrine",
        label_ka: "伏見稲荷",
        id: 6293
      })
      
    
      this.add({
        label_eng: "The Shipping Agent at Daimotsu",
        label_ka: "渡海屋大物浦",
        id: 6294
      })
      
    
      this.add({
        label_eng: "The Gathering Nuts",
        label_ka: "椎の木",
        id: 6295
      })
      
    
      this.add({
        label_eng: "Kokingo's Death",
        label_ka: "小金吾討死",
        id: 6296
      })
      
    
      this.add({
        label_eng: "The Sushi Shop",
        label_ka: "すしや",
        id: 6297
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 6298
      })
      
    
      this.add({
        label_eng: "The Mansion of Kawatsura Hogen",
        label_ka: "川連法眼館",
        id: 6299
      })
      
    
      this.add({
        label_eng: "The Hanabishiya Brothel",
        label_ka: "花菱屋",
        id: 6300
      })
      
    
      this.add({
        label_eng: "Hiuga Island",
        label_ka: "日向嶋",
        id: 6301
      })
      
    
      this.add({
        label_eng: "Jurobei's House",
        label_ka: "十郎兵衛内",
        id: 6302
      })
      
    
      this.add({
        label_eng: "Kokaji the Swordsmith",
        label_ka: "小鍛冶",
        id: 6303
      })
      
    
      this.add({
        label_eng: "The Shido Temple",
        label_ka: "志渡寺",
        id: 6304
      })
      
    
      this.add({
        label_eng: "The Rokkakudo Temple",
        label_ka: "六角堂",
        id: 6305
      })
      
    
      this.add({
        label_eng: "The Obi Shop",
        label_ka: "帯屋",
        id: 6306
      })
      
    
      this.add({
        label_eng: "The Katsura River in a Dim Moonlight",
        label_ka: "道行朧の桂川",
        id: 6307
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 6308
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 6309
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 6310
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 6311
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 6312
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 6313
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 6314
      })
      
    
      this.add({
        label_eng: "The Ikutama Shrine",
        label_ka: "生玉鳥居前",
        id: 6315
      })
      
    
      this.add({
        label_eng: "The Pawnshop",
        label_ka: "質店",
        id: 6316
      })
      
    
      this.add({
        label_eng: "In front of the Storehouse",
        label_ka: "蔵前",
        id: 6317
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 6318
      })
      
    
      this.add({
        label_eng: "The Town of Shiga",
        label_ka: "志賀の里",
        id: 6319
      })
      
    
      this.add({
        label_eng: "The Sakuranomiya Shrine",
        label_ka: "桜の宮物狂",
        id: 6320
      })
      
    
      this.add({
        label_eng: "The Todaiji Temple",
        label_ka: "東大寺",
        id: 6321
      })
      
    
      this.add({
        label_eng: "The Nigatsudo Hall",
        label_ka: "二月堂",
        id: 6322
      })
      
    
      this.add({
        label_eng: "The Incense",
        label_ka: "十種香",
        id: 6323
      })
      
    
      this.add({
        label_eng: "The Fox Fire",
        label_ka: "奥庭狐火",
        id: 6324
      })
      
    
      this.add({
        label_eng: "The Street Entertainers",
        label_ka: "寿柱立万歳",
        id: 6325
      })
      
    
      this.add({
        label_eng: "The Shirokiya Timber Store",
        label_ka: "城木屋",
        id: 6326
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 6327
      })
      
    
      this.add({
        label_eng: "Honzo's Villa",
        label_ka: "本蔵下屋敷",
        id: 6328
      })
      
    
      this.add({
        label_eng: "The Cherry-Viewing",
        label_ka: "地主権現花見",
        id: 6329
      })
      
    
      this.add({
        label_eng: "The Kiyomizu Temple",
        label_ka: "清水寺",
        id: 6330
      })
      
    
      this.add({
        label_eng: "The Messenger Shibukawa",
        label_ka: "渋川使者",
        id: 6331
      })
      
    
      this.add({
        label_eng: "The Consultation",
        label_ka: "評議",
        id: 6332
      })
      
    
      this.add({
        label_eng: "Sonobe's House",
        label_ka: "園部屋敷",
        id: 6333
      })
      
    
      this.add({
        label_eng: "The Blacksmith Shop",
        label_ka: "鍛冶屋",
        id: 6334
      })
      
    
      this.add({
        label_eng: "The House of Yukie Wada",
        label_ka: "和田行家屋敷",
        id: 6335
      })
      
    
      this.add({
        label_eng: "The Engakuji Temple",
        label_ka: "円覚寺",
        id: 6336
      })
      
    
      this.add({
        label_eng: "The House of Karaki Masaemon",
        label_ka: "唐木政右衛門屋敷",
        id: 6337
      })
      
    
      this.add({
        label_eng: "The Grand Hall in Lord Konda's Mansion",
        label_ka: "誉田家大広間",
        id: 6338
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6339
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 6340
      })
      
    
      this.add({
        label_eng: "The New Barrier at Fujikawa with Insertion of the Scene of Dumpling Peddlers",
        label_ka: "富士川新関 引抜き 団子売",
        id: 6341
      })
      
    
      this.add({
        label_eng: "The Bamboo Groove",
        label_ka: "竹藪",
        id: 6342
      })
      
    
      this.add({
        label_eng: "The Town of Okazaki",
        label_ka: "岡崎",
        id: 6343
      })
      
    
      this.add({
        label_eng: "The Hokkokuya Inn at Fushimi,",
        label_ka: "伏見北国屋",
        id: 6344
      })
      
    
      this.add({
        label_eng: "The Revenge at Iga-Ueno",
        label_ka: "伊賀上野仇討",
        id: 6345
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 6346
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 6347
      })
      
    
      this.add({
        label_eng: "The Fulling Block and the Bonfire",
        label_ka: "きぬたと大文字",
        id: 6348
      })
      
    
      this.add({
        label_eng: "The Uji River",
        label_ka: "宇治川蛍狩",
        id: 6349
      })
      
    
      this.add({
        label_eng: "The Parting at the Port of Akashi",
        label_ka: "明石船別れ (明石浦船別れ)",
        id: 6350
      })
      
    
      this.add({
        label_eng: "The Hut at Hamamatsu",
        label_ka: "浜松小屋",
        id: 6351
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6352
      })
      
    
      this.add({
        label_eng: "The Laughter Drug",
        label_ka: "島田駅笑ひ薬",
        id: 6353
      })
      
    
      this.add({
        label_eng: "The Inn",
        label_ka: "宿屋",
        id: 6354
      })
      
    
      this.add({
        label_eng: "The Oi River",
        label_ka: "大井川",
        id: 6355
      })
      
    
      this.add({
        label_eng: "The Helmet Identification at Tsurugaoka",
        label_ka: "鶴が岡兜改め",
        id: 6356
      })
      
    
      this.add({
        label_eng: "The Love Poem",
        label_ka: "恋歌",
        id: 6357
      })
      
    
      this.add({
        label_eng: "The Cutting of the Pine Branch",
        label_ka: "松切り",
        id: 6358
      })
      
    
      this.add({
        label_eng: "The Bribing of Moronao",
        label_ka: "大手下馬先進物　",
        id: 6359
      })
      
    
      this.add({
        label_eng: "Okaru Delivers the Letter Case (Kaoyo's Poem)",
        label_ka: "おかる文使い",
        id: 6360
      })
      
    
      this.add({
        label_eng: "The Attack in the Palace",
        label_ka: "殿中刃傷",
        id: 6361
      })
      
    
      this.add({
        label_eng: "The Back Gate",
        label_ka: "裏門",
        id: 6362
      })
      
    
      this.add({
        label_eng: "The Flower Basket",
        label_ka: "花籠",
        id: 6363
      })
      
    
      this.add({
        label_eng: "The Suicide of Hangan",
        label_ka: "塩谷館判官切腹",
        id: 6364
      })
      
    
      this.add({
        label_eng: "The Evacuation",
        label_ka: "霞ヶ関城明渡し",
        id: 6365
      })
      
    
      this.add({
        label_eng: "The Encounter on the Yamazaki Highway",
        label_ka: "山崎街道出合",
        id: 6366
      })
      
    
      this.add({
        label_eng: "The Shooting in the Dark",
        label_ka: "山崎街道二つ玉",
        id: 6367
      })
      
    
      this.add({
        label_eng: "The Selling of Okaru",
        label_ka: "お軽身売り",
        id: 6368
      })
      
    
      this.add({
        label_eng: "Kampei's Suicide",
        label_ka: "勘平腹切",
        id: 6369
      })
      
    
      this.add({
        label_eng: "The Ichiriki Tea House in Gion",
        label_ka: "祇園一力茶屋",
        id: 6370
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 6371
      })
      
    
      this.add({
        label_eng: "The Snowball",
        label_ka: "雪転かし",
        id: 6372
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 6373
      })
      
    
      this.add({
        label_eng: "The Hanamizubashi Bridge",
        label_ka: "花水橋引揚",
        id: 6374
      })
      
    
      this.add({
        label_eng: "The Bridal Journey",
        label_ka: "道行旅路嫁入り",
        id: 6375
      })
      
    
      this.add({
        label_eng: "The Snowball",
        label_ka: "雪転かし",
        id: 6376
      })
      
    
      this.add({
        label_eng: "Yuranosuke's House at Yamashina",
        label_ka: "山科閑居",
        id: 6377
      })
      
    
      this.add({
        label_eng: "The Amagawaya Shop",
        label_ka: "天河屋",
        id: 6378
      })
      
    
      this.add({
        label_eng: "The Incense-Burning at the Komyoji Temple",
        label_ka: "光明寺焼香",
        id: 6379
      })
      
    
      this.add({
        label_eng: "Urikohime and Amanjaku",
        label_ka: "瓜子姫とあまんじゃく",
        id: 6380
      })
      
    
      this.add({
        label_eng: "The Pine-Lined Road at Akasaka",
        label_ka: "赤坂並木",
        id: 6381
      })
      
    
      this.add({
        label_eng: "The Old Temple",
        label_ka: "古寺",
        id: 6382
      })
      
    
      this.add({
        label_eng: "The Tattooing",
        label_ka: "入墨",
        id: 6383
      })
      
    
      this.add({
        label_eng: "Kinugawa Villege (See also A Visit of Two Ladies-in-Waiting, Rice Washing, Parting of Miuranosuke with His Mother, Takatsuna's Declaration)",
        label_ka: "絹川村 (See also 局使者, 米洗い, 三浦之助母別れ, 高綱物語)",
        id: 6384
      })
      
    
      this.add({
        label_eng: "The Fulling Block and the Bonfire",
        label_ka: "きぬたと大文字",
        id: 6385
      })
      
    
      this.add({
        label_eng: "The Okawa River",
        label_ka: "大川",
        id: 6386
      })
      
    
      this.add({
        label_eng: "The Mass Murder",
        label_ka: "五人伐",
        id: 6387
      })
      
    
      this.add({
        label_eng: "The Sumo Arena at Horie",
        label_ka: "堀江相撲場",
        id: 6388
      })
      
    
      this.add({
        label_eng: "The Rice Shop at Daihojimachi",
        label_ka: "大宝寺町米屋",
        id: 6389
      })
      
    
      this.add({
        label_eng: "The Fighting at Nambaura",
        label_ka: "難波裏喧嘩",
        id: 6390
      })
      
    
      this.add({
        label_eng: "The Town of Hashimoto",
        label_ka: "橋本",
        id: 6391
      })
      
    
      this.add({
        label_eng: "The Skylight",
        label_ka: "八幡里引窓",
        id: 6392
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 6393
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 6394
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 6395
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 6396
      })
      
    
      this.add({
        label_eng: "Suma Beach",
        label_ka: "須磨の浦",
        id: 6397
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "瓢箪棚",
        id: 6398
      })
      
    
      this.add({
        label_eng: "The Sugisaka Cemetery",
        label_ka: "杉坂墓所",
        id: 6399
      })
      
    
      this.add({
        label_eng: "Rokusuke's House",
        label_ka: "毛谷村六助住家",
        id: 6400
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 6401
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 6402
      })
      
    
      this.add({
        label_eng: "Chikuma River",
        label_ka: "筑摩川",
        id: 6403
      })
      
    
      this.add({
        label_eng: "Matasuke's House",
        label_ka: "又助住家",
        id: 6404
      })
      
    
      this.add({
        label_eng: "The Beating with a Sandal",
        label_ka: "草履打",
        id: 6405
      })
      
    
      this.add({
        label_eng: "The Corridor",
        label_ka: "廊下",
        id: 6406
      })
      
    
      this.add({
        label_eng: "Onoe's Room",
        label_ka: "長局",
        id: 6407
      })
      
    
      this.add({
        label_eng: "The Rear Garden",
        label_ka: "奥庭",
        id: 6408
      })
      
    
      this.add({
        label_eng: "Kuzunoha's Parting with Her Son",
        label_ka: "葛の葉子別れ",
        id: 6409
      })
      
    
      this.add({
        label_eng: "The Two Look-Alike Servants",
        label_ka: "信田森二人奴",
        id: 6410
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 6411
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 6412
      })
      
    
      this.add({
        label_eng: "The Subjugation of the Earth-Spider",
        label_ka: "土蜘蛛退治",
        id: 6413
      })
      
    
      this.add({
        label_eng: "The Rat's Romance",
        label_ka: "鼠のそうし",
        id: 6414
      })
      
    
      this.add({
        label_eng: "Kansaku's House",
        label_ka: "鵜飼い勘作住家",
        id: 6415
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 6416
      })
      
    
      this.add({
        label_eng: "In Front of the Sumiyoshi Shrine",
        label_ka: "住吉鳥居前",
        id: 6417
      })
      
    
      this.add({
        label_eng: "The House of Sabu",
        label_ka: "釣船三婦内",
        id: 6418
      })
      
    
      this.add({
        label_eng: "The Back Lane at Nagamachi",
        label_ka: "長町裏",
        id: 6419
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 6420
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 6421
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 6422
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 6423
      })
      
    
      this.add({
        label_eng: "The Misappropriation (of Money)",
        label_ka: "封印切",
        id: 6424
      })
      
    
      this.add({
        label_eng: "The Kameya Express Agency at Awajimachi",
        label_ka: "淡路町",
        id: 6425
      })
      
    
      this.add({
        label_eng: "The Subscription List",
        label_ka: "勧進帳",
        id: 6426
      })
      
    
      this.add({
        label_eng: "The Bloodthirsty Sword",
        label_ka: "奥庭十人斬り",
        id: 6427
      })
      
    
      this.add({
        label_eng: "The Gojo Bridge",
        label_ka: "五条橋",
        id: 6428
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6429
      })
      
    
      this.add({
        label_eng: "Kikai Island",
        label_ka: "鬼界ヶ島",
        id: 6430
      })
      
    
      this.add({
        label_eng: "The Tosa Painter's House",
        label_ka: "土佐将監閑居",
        id: 6431
      })
      
    
      this.add({
        label_eng: "Two Girl Attendants to a Courtesan",
        label_ka: "二人禿",
        id: 6432
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 6433
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 6434
      })
      
    
      this.add({
        label_eng: "Heron Girl",
        label_ka: "鷺娘",
        id: 6435
      })
      
    
      this.add({
        label_eng: "The Old Temple",
        label_ka: "古寺",
        id: 6436
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 6437
      })
      
    
      this.add({
        label_eng: "The Suma Beach",
        label_ka: "須磨浦",
        id: 6438
      })
      
    
      this.add({
        label_eng: "The Duel",
        label_ka: "組打",
        id: 6439
      })
      
    
      this.add({
        label_eng: "In the Kumano Mountain",
        label_ka: "熊野山中",
        id: 6440
      })
      
    
      this.add({
        label_eng: "Falconry",
        label_ka: "鷹狩",
        id: 6441
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 6442
      })
      
    
      this.add({
        label_eng: "The Lumber Carriers' Song",
        label_ka: "木遣り音頭",
        id: 6443
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 6444
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 6445
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 6446
      })
      
    
      this.add({
        label_eng: "Azuchi Castle",
        label_ka: "安土城中",
        id: 6447
      })
      
    
      this.add({
        label_eng: "The Feast at Nijo Castle",
        label_ka: "二条城配膳",
        id: 6448
      })
      
    
      this.add({
        label_eng: "The Honnoji Temple",
        label_ka: "本能寺",
        id: 6449
      })
      
    
      this.add({
        label_eng: "Lady Ano's Reports to Hisayoshi",
        label_ka: "局注進",
        id: 6450
      })
      
    
      this.add({
        label_eng: "Chozaemon's Suicide",
        label_ka: "長左衛門切腹",
        id: 6451
      })
      
    
      this.add({
        label_eng: "The Myoshinji Temple",
        label_ka: "妙心寺",
        id: 6452
      })
      
    
      this.add({
        label_eng: "The Fort of Suginomori",
        label_ka: "杉の森",
        id: 6453
      })
      
    
      this.add({
        label_eng: "The Melons Offered to Hisayoshi",
        label_ka: "瓜献上",
        id: 6454
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6455
      })
      
    
      this.add({
        label_eng: "The Gourd Trellis",
        label_ka: "夕顔棚",
        id: 6456
      })
      
    
      this.add({
        label_eng: "The Amagasaki Village",
        label_ka: "尼が崎",
        id: 6457
      })
      
    
      this.add({
        label_eng: "Gappo's House",
        label_ka: "合邦庵室",
        id: 6458
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 6459
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 6460
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 6461
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 6462
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6463
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 6464
      })
      
    
      this.add({
        label_eng: "Kanki's Mansion (See also The Shishigajo Catsle)",
        label_ka: "甘輝館 (See also 獅子が城)",
        id: 6465
      })
      
    
      this.add({
        label_eng: "The Red Signal (See also The Shishigajo Catsle)",
        label_ka: "紅流し (See also 獅子が城)",
        id: 6466
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 6467
      })
      
    
      this.add({
        label_eng: "Terutora Serves a Meal",
        label_ka: "輝虎配膳",
        id: 6468
      })
      
    
      this.add({
        label_eng: "Sanetsuna's Mansion",
        label_ka: "直江屋敷",
        id: 6469
      })
      
    
      this.add({
        label_eng: "The Tea House Kawasho",
        label_ka: "北新地河庄",
        id: 6470
      })
      
    
      this.add({
        label_eng: "Jihei's House",
        label_ka: "天満紙屋内",
        id: 6471
      })
      
    
      this.add({
        label_eng: "The Yamatoya Tea House",
        label_ka: "大和屋",
        id: 6472
      })
      
    
      this.add({
        label_eng: "The Lover's Suicide Trip",
        label_ka: "道行名残りの橋尽し",
        id: 6473
      })
      
    
      this.add({
        label_eng: "On the Hirado Beach",
        label_ka: "平戸浜伝ひ",
        id: 6474
      })
      
    
      this.add({
        label_eng: "The Chinese Ship",
        label_ka: "唐土船",
        id: 6475
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 6476
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 6477
      })
      
    
      this.add({
        label_eng: "Kanki's Mansion (See also The Shishigajo Catsle)",
        label_ka: "甘輝館 (See also 獅子が城)",
        id: 6478
      })
      
    
      this.add({
        label_eng: "The Red Signal (See also The Shishigajo Catsle)",
        label_ka: "紅流し (See also 獅子が城)",
        id: 6479
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 6480
      })
      
    
      this.add({
        label_eng: "The Hanabishiya Brothel",
        label_ka: "花菱屋",
        id: 6481
      })
      
    
      this.add({
        label_eng: "Hiuga Island",
        label_ka: "日向嶋",
        id: 6482
      })
      
    
      this.add({
        label_eng: "The House of Sajibei (Sajihei)",
        label_ka: "湊町",
        id: 6483
      })
      
    
      this.add({
        label_eng: "The Fire Lookout Tower",
        label_ka: "火の見櫓",
        id: 6484
      })
      
    
      this.add({
        label_eng: "The Street Entertainers",
        label_ka: "寿柱立万歳",
        id: 6485
      })
      
    
      this.add({
        label_eng: "The Tongue-Cut Sparrpw",
        label_ka: "舌切雀",
        id: 6486
      })
      
    
      this.add({
        label_eng: "Introduction to Bunraku",
        label_ka: "文楽のおはなし",
        id: 6487
      })
      
    
      this.add({
        label_eng: "Autumn on Mount Kon",
        label_ka: "崑山の秋",
        id: 6488
      })
      
    
      this.add({
        label_eng: "The House of Hunter Genza",
        label_ka: "猟師源左内",
        id: 6489
      })
      
    
      this.add({
        label_eng: "The Lakeside in Winter",
        label_ka: "冬の湖畔",
        id: 6490
      })
      
    
      this.add({
        label_eng: "The Bean Curd Maker's",
        label_ka: "豆腐屋",
        id: 6491
      })
      
    
      this.add({
        label_eng: "The Village of Hanyu (See also Hanyu Village from \"\"The Trouble in the Date Household\"\")",
        label_ka: "埴生村",
        id: 6492
      })
      
    
      this.add({
        label_eng: "The Earthen Bridge (See also The Earthen Bridge from \"\"The Trouble in the Date Household\"\")",
        label_ka: "土橋",
        id: 6493
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 6494
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 6495
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 6496
      })
      
    
      this.add({
        label_eng: "The Kamo River Bank",
        label_ka: "加茂堤",
        id: 6497
      })
      
    
      this.add({
        label_eng: "The Handing on the Secrets of Calligraphy",
        label_ka: "筆法伝授",
        id: 6498
      })
      
    
      this.add({
        label_eng: "At the Fence",
        label_ka: "築地",
        id: 6499
      })
      
    
      this.add({
        label_eng: "The Beating of Kariya",
        label_ka: "杖折檻",
        id: 6500
      })
      
    
      this.add({
        label_eng: "The Cockcrow",
        label_ka: "東天紅",
        id: 6501
      })
      
    
      this.add({
        label_eng: "The Departure of Michizane",
        label_ka: "丞相名残",
        id: 6502
      })
      
    
      this.add({
        label_eng: "The Quarrel Over the Carriage",
        label_ka: "車曳(車引吉田社頭)",
        id: 6503
      })
      
    
      this.add({
        label_eng: "Shiradayu's 70th Birthday Celebration",
        label_ka: "茶筅酒",
        id: 6504
      })
      
    
      this.add({
        label_eng: "The Quarrel",
        label_ka: "喧嘩",
        id: 6505
      })
      
    
      this.add({
        label_eng: "Sakuramaru's Suicide",
        label_ka: "桜丸切腹",
        id: 6506
      })
      
    
      this.add({
        label_eng: "Mount Tempai",
        label_ka: "天拝山",
        id: 6507
      })
      
    
      this.add({
        label_eng: "The Enrollment",
        label_ka: "寺入り",
        id: 6508
      })
      
    
      this.add({
        label_eng: "The Village School",
        label_ka: "寺子屋",
        id: 6509
      })
      
    
      this.add({
        label_eng: "Act 1",
        label_ka: "第一景",
        id: 6510
      })
      
    
      this.add({
        label_eng: "Act 2",
        label_ka: "第二景",
        id: 6511
      })
      
    
      this.add({
        label_eng: "Act 3",
        label_ka: "第三景",
        id: 6512
      })
      
    
      this.add({
        label_eng: "The Torture by Koto",
        label_ka: "阿古屋琴責",
        id: 6513
      })
      
    
      this.add({
        label_eng: "The Visit of Benkei",
        label_ka: "弁慶上使",
        id: 6514
      })
      
    
      this.add({
        label_eng: "The Ferry",
        label_ka: "渡し場",
        id: 6515
      })
      
    
      this.add({
        label_eng: "The Monkey Dance",
        label_ka: "堀川猿廻し",
        id: 6516
      })
      
    
      this.add({
        label_eng: "The Travel Dance on Mount Yoshino",
        label_ka: "道行初音の旅",
        id: 6517
      })
      
    
      this.add({
        label_eng: "Fishing for Wives",
        label_ka: "釣女",
        id: 6518
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 6519
      })
      
    
      this.add({
        label_eng: "The Tsubosaka Temple (See also The Mountain)",
        label_ka: "壺坂寺 (See also 山)",
        id: 6520
      })
      
    
      this.add({
        label_eng: "Sadanoshin's Suicide",
        label_ka: "能舞台定之進切腹",
        id: 6521
      })
      
    
      this.add({
        label_eng: "Katsukake Village",
        label_ka: "沓掛村",
        id: 6522
      })
      
    
      this.add({
        label_eng: "At the Foot of the Slope",
        label_ka: "坂の下",
        id: 6523
      })
      
    
      this.add({
        label_eng: "Backgammon",
        label_ka: "道中双六",
        id: 6524
      })
      
    
      this.add({
        label_eng: "Shigenoi's Parting with Her Son",
        label_ka: "重の井子別れ",
        id: 6525
      })
      
    
      this.add({
        label_eng: "The Riverbank at Tokuan",
        label_ka: "徳庵堤茶店",
        id: 6526
      })
      
    
      this.add({
        label_eng: "The House of Kawachiya",
        label_ka: "河内屋内",
        id: 6527
      })
      
    
      this.add({
        label_eng: "The Oil Store Teshimaya",
        label_ka: "豊島屋油店",
        id: 6528
      })
      
    
      this.add({
        label_eng: "The Town of Numazu",
        label_ka: "沼津",
        id: 6529
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6530
      })
      
    
      this.add({
        label_eng: "On the Hirado Beach",
        label_ka: "平戸浜伝ひ",
        id: 6531
      })
      
    
      this.add({
        label_eng: "The Chinese Ship",
        label_ka: "唐土船",
        id: 6532
      })
      
    
      this.add({
        label_eng: "The Tiger Hunt",
        label_ka: "千里が竹虎狩り",
        id: 6533
      })
      
    
      this.add({
        label_eng: "The Castle Gate",
        label_ka: "楼門",
        id: 6534
      })
      
    
      this.add({
        label_eng: "The Shishigajo Catsle (See also Kanki's Mansion and The Red Signal)",
        label_ka: "獅子が城 (See also 甘輝館 and 紅流し)",
        id: 6535
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6536
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement/special performance]",
        label_ka: "口上",
        id: 6537
      })
      
    
      this.add({
        label_eng: "The Travel on Mount Yoshino",
        label_ka: "道行初音旅",
        id: 6538
      })
      
    
      this.add({
        label_eng: "Sawaichi's House",
        label_ka: "沢市内",
        id: 6539
      })
      
    
      this.add({
        label_eng: "The Mountain (See also The Tsubosaka Temple)",
        label_ka: "山 (See also 壺坂寺)",
        id: 6540
      })
      
    
      this.add({
        label_eng: "In Front of the Ikudama Shrine",
        label_ka: "生玉社前",
        id: 6541
      })
      
    
      this.add({
        label_eng: "The Temmaya Tea House",
        label_ka: "天満屋",
        id: 6542
      })
      
    
      this.add({
        label_eng: "The Woods of the Tenjin Shrine",
        label_ka: "天神森",
        id: 6543
      })
      
    
      this.add({
        label_eng: "In the Kumano Mountain",
        label_ka: "熊野山中",
        id: 6544
      })
      
    
      this.add({
        label_eng: "Falconry",
        label_ka: "鷹狩",
        id: 6545
      })
      
    
      this.add({
        label_eng: "Heitaro's House",
        label_ka: "平太郎住家",
        id: 6546
      })
      
    
      this.add({
        label_eng: "The Lumber Carriers' Song",
        label_ka: "木遣り音頭",
        id: 6547
      })
      
    
    // tags
    
      this.add({
        label_eng: "Asahi Theater",
        label_ka: "朝日座",
        id: 6548
      })
      
    
      this.add({
        label_eng: "Butai geta [high wooden clogs]",
        label_ka: "舞台下駄",
        id: 6549
      })
      
    
      this.add({
        label_eng: "Dō [body]",
        label_ka: "胴",
        id: 6550
      })
      
    
      this.add({
        label_eng: "Dressing room",
        label_ka: "楽屋",
        id: 6551
      })
      
    
      this.add({
        label_eng: "Geza [room for offstage musicians]",
        label_ka: "下座あるいは囃子部屋",
        id: 6552
      })
      
    
      this.add({
        label_eng: "Hishida Kōji, Keeper of heads",
        label_ka: "菱田宏治",
        id: 6553
      })
      
    
      this.add({
        label_eng: "Ishibashi Osamu, Costume director",
        label_ka: "石橋長武",
        id: 6554
      })
      
    
      this.add({
        label_eng: "Puppet head",
        label_ka: "かしら",
        id: 6555
      })
      
    
      this.add({
        label_eng: "Props",
        label_ka: "小道具",
        id: 6556
      })
      
    
      this.add({
        label_eng: "Kotsuzumi [hourglass-shaped drum]",
        label_ka: "小鼓",
        id: 6557
      })
      
    
      this.add({
        label_eng: "Kowari-chō/Kowari [cue book]",
        label_ka: "小割帳",
        id: 6558
      })
      
    
      this.add({
        label_eng: "Nakoshi Shōji, Wig master",
        label_ka: "名越昭司",
        id: 6559
      })
      
    
      this.add({
        label_eng: "Puppet costuming",
        label_ka: "人形拵え",
        id: 6560
      })
      
    
      this.add({
        label_eng: "Uehara Tsuruko, Seamstress",
        label_ka: "うえはらつるこ",
        id: 6561
      })
      
    
      this.add({
        label_eng: "Wig",
        label_ka: "かづら",
        id: 6562
      })
      
    
      this.add({
        label_eng: "Narrator",
        label_ka: "太夫",
        id: 6563
      })
      
    
      this.add({
        label_eng: "Shamisen player",
        label_ka: "三味線",
        id: 6564
      })
      
    
      this.add({
        label_eng: "Backstage",
        label_ka: "舞台裏",
        id: 6565
      })
      
    
      this.add({
        label_eng: "Rehearsal",
        label_ka: "舞台稽古",
        id: 6566
      })
      
    
      this.add({
        label_eng: "Ōe Minosuke, Carver of heads",
        label_ka: "大江巳之助",
        id: 6567
      })
      
    
      this.add({
        label_eng: "Chakutōban",
        label_ka: "着到板あるいは到着板",
        id: 6568
      })
      
    
      this.add({
        label_eng: "Wing, from",
        label_ka: "舞台そでからの写真",
        id: 6569
      })
      
    
      this.add({
        label_eng: "Tour",
        label_ka: "ツアー",
        id: 6570
      })
      
    
      this.add({
        label_eng: "Animal",
        label_ka: "動物",
        id: 6571
      })
      
    
      this.add({
        label_eng: "Yonetani Eijirō, Properties",
        label_ka: "よねたにえいじろう",
        id: 6572
      })
      
    
      this.add({
        label_eng: "Fox",
        label_ka: "狐",
        id: 6573
      })
      
    
      this.add({
        label_eng: "Dōgushi [headgrip]",
        label_ka: "胴串",
        id: 6574
      })
      
    
      this.add({
        label_eng: "Arm",
        label_ka: "手",
        id: 6575
      })
      
    
      this.add({
        label_eng: "Leg",
        label_ka: "足",
        id: 6576
      })
      
    
      this.add({
        label_eng: "Costume",
        label_ka: "衣装",
        id: 6577
      })
      
    
      this.add({
        label_eng: "Mochizuki Taishirō, Offstage Musician",
        label_ka: "もちづきたいしろう",
        id: 6578
      })
      
    
      this.add({
        label_eng: "Set Construction",
        label_ka: "大道具造り",
        id: 6579
      })
      
    
      this.add({
        label_eng: "Taiko [drum]",
        label_ka: "太鼓",
        id: 6580
      })
      
    
      this.add({
        label_eng: "Training",
        label_ka: "稽古",
        id: 6581
      })
      
    
      this.add({
        label_eng: "Yukahon [narrator's text]",
        label_ka: "床本",
        id: 6582
      })
      
    
      this.add({
        label_eng: "Puppet",
        label_ka: "人形",
        id: 6583
      })
      
    
      this.add({
        label_eng: "Koto [transverse harp]",
        label_ka: "琴",
        id: 6584
      })
      
    
      this.add({
        label_eng: "Chūzuri [flying performance]",
        label_ka: "宙吊り",
        id: 6585
      })
      
    
      this.add({
        label_eng: "Kōjō performance",
        label_ka: "口上（演目）",
        id: 6586
      })
      
    
      this.add({
        label_eng: "Puppeteer",
        label_ka: "人形遣い",
        id: 6587
      })
      
    
      this.add({
        label_eng: "Kashirawari [distribution of puppet heads]",
        label_ka: "首割り",
        id: 6588
      })
      
    
      this.add({
        label_eng: "Kagezukai [hooded performers]",
        label_ka: "影遣い",
        id: 6589
      })
      
    
      this.add({
        label_eng: "Barbara Curtis Adachi",
        label_ka: "バーバラ・カーティス・足立",
        id: 6590
      })
      
    
      this.add({
        label_eng: "Tour, International",
        label_ka: "海外公演",
        id: 6591
      })
      
    
      this.add({
        label_eng: "Jason Choi, Translator",
        label_ka: "ジェイソン・チョイ",
        id: 6592
      })
      
    
      this.add({
        label_eng: "Derek Birdsall, Art Director",
        label_ka: "デレック・バードサル",
        id: 6593
      })
      
    
      this.add({
        label_eng: "Gregory Vitiello, Editor",
        label_ka: "グレゴリー・ヴィティエロ",
        id: 6594
      })
      
    
      this.add({
        label_eng: "The Voices and Hands of Bunraku",
        label_ka: "文楽のひとびと",
        id: 6595
      })
      
    
      this.add({
        label_eng: "Directing",
        label_ka: "演出",
        id: 6596
      })
      
    
      this.add({
        label_eng: "Theater",
        label_ka: "劇場",
        id: 6597
      })
      
    
      this.add({
        label_eng: "Non-Bunraku materials",
        label_ka: "文楽以外の資料",
        id: 6598
      })
      
    
      this.add({
        label_eng: "Sankyoku [three instruments]",
        label_ka: "三曲",
        id: 6599
      })
      
    
      this.add({
        label_eng: "Auxiliary stage",
        label_ka: "床あるいは出語台",
        id: 6600
      })
      
    
      this.add({
        label_eng: "Armature",
        label_ka: "さし金",
        id: 6601
      })
      
    
      this.add({
        label_eng: "Kokyū [a musical instrument]",
        label_ka: "胡弓",
        id: 6602
      })
      
    
      this.add({
        label_eng: "Television programs/motion pictures",
        label_ka: "テレビ番組・映画",
        id: 6603
      })
      
    
      this.add({
        label_eng: "Kōjō [announcement]",
        label_ka: "口上（東西東西）",
        id: 6604
      })
      
    
      this.add({
        label_eng: "Adachi's Interviews",
        label_ka: "足立インタビュー資料",
        id: 6605
      })
      
    
      this.add({
        label_eng: "Stage set",
        label_ka: "大道具",
        id: 6606
      })
      
    
      this.add({
        label_eng: "Donald Keene",
        label_ka: "ドナルド・キーン",
        id: 6607
      })
      
    
      this.add({
        label_eng: "Hitori zukai",
        label_ka: "一人遣い",
        id: 6608
      })
      
    
  })

  var store = [
    // authors
    {
    "label_eng": "Asada Icchō",
    "label_ka": "浅田一鳥",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/1"
    },{
    "label_eng": "Ashikawa Teruha",
    "label_ka": "芦川照葉",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/2"
    },{
    "label_eng": "Chikamatsu Hanji",
    "label_ka": "近松半二",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/4"
    },{
    "label_eng": "Chikamatsu Kosuiken",
    "label_ka": "近松湖水軒",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/5"
    },{
    "label_eng": "Chikamatsu Monzaemon",
    "label_ka": "近松門左衛門",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/6"
    },{
    "label_eng": "Chikamatsu Sen'yōken",
    "label_ka": "近松千葉軒",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/7"
    },{
    "label_eng": "Chikamatsu Yasuzō",
    "label_ka": "近松保蔵",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/8"
    },{
    "label_eng": "Fukuda Kakei",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/9"
    },{
    "label_eng": "Hasegawa Senshi",
    "label_ka": "長谷川千四",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/10"
    },{
    "label_eng": "Hōjō Hideji",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/11"
    },{
    "label_eng": "Ki Kaion",
    "label_ka": "紀海音",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/12"
    },{
    "label_eng": "Kino Jōtarō",
    "label_ka": "紀上太郎",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/13"
    },{
    "label_eng": "Kinoshita Junji",
    "label_ka": "木下順二",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/14"
    },{
    "label_eng": "Kyokutei Bakin",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/15"
    },{
    "label_eng": "Matsuda Baku",
    "label_ka": "松田ばく",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/16"
    },{
    "label_eng": "Matsuda Bunkōdō",
    "label_ka": "文耕堂",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/17"
    },{
    "label_eng": "Mishima Yukio",
    "label_ka": "三島由紀夫",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/18"
    },{
    "label_eng": "Miyoshi Shōraku",
    "label_ka": "三好松洛",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/19"
    },{
    "label_eng": "Nakamura Akei",
    "label_ka": "中邑阿契",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/20"
    },{
    "label_eng": "Nakawa Kamesuke",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/21"
    },{
    "label_eng": "Nakawa Shimesuke",
    "label_ka": "奈河七五三助",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/22"
    },{
    "label_eng": "Nanba Shōzō",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/23"
    },{
    "label_eng": "Namiki Geiji",
    "label_ka": "並木鯨児",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/24"
    },{
    "label_eng": "Namiki Senryū (See also Namiki Namiki Sōsuke)",
    "label_ka": "並木千柳",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/25"
    },{
    "label_eng": "Namiki Shōzō",
    "label_ka": "並木正三",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/26"
    },{
    "label_eng": "Namiki Sōsuke (See also Namiki Senryū)",
    "label_ka": "並木宗輔",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/27"
    },{
    "label_eng": "Namiki Jōsuke",
    "label_ka": "並木丈輔",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/28"
    },{
    "label_eng": "Namioka Geiji",
    "label_ka": "浪岡鯨児",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/29"
    },{
    "label_eng": "Nozawa Katsuhei",
    "label_ka": "野澤勝平",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/30"
    },{
    "label_eng": "Nozawa Matsunosuke",
    "label_ka": "野澤松之輔",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/31"
    },{
    "label_eng": "Senzenken",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/32"
    },{
    "label_eng": "Shiba Shisō",
    "label_ka": "司馬芝叟",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/33"
    },{
    "label_eng": "Suga Sensuke",
    "label_ka": "菅専助",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/34"
    },{
    "label_eng": "Takeda Izumo, I",
    "label_ka": "竹田出雲",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/36"
    },{
    "label_eng": "Takeda Hanshichi",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/37"
    },{
    "label_eng": "Takeda Inaba",
    "label_ka": "竹田因幡",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/38"
    },{
    "label_eng": "Takeda Koide",
    "label_ka": "竹田小出",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/39"
    },{
    "label_eng": "Takeda Koizumo",
    "label_ka": "竹田小出雲",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/40"
    },{
    "label_eng": "Takemoto Saburobei",
    "label_ka": "竹本三郎兵衛",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/41"
    },{
    "label_eng": "Tanaka Chikao",
    "label_ka": "田中千禾夫",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/42"
    },{
    "label_eng": "Toyotake Jinroku",
    "label_ka": "豊竹甚六",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/43"
    },{
    "label_eng": "Toyotake Ōritsu",
    "label_ka": "豊竹応律",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/44"
    },{
    "label_eng": "Tsutsui Hanko",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/45"
    },{
    "label_eng": "Uchimura Naoya",
    "label_ka": "内村直也",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/46"
    },{
    "label_eng": "Umeno Shitakaze",
    "label_ka": "梅野下風",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/47"
    },{
    "label_eng": "Utei Enba",
    "label_ka": "烏亭焉馬",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/48"
    },{
    "label_eng": "Yamada Kakashi",
    "label_ka": "山田案山子",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/49"
    },{
    "label_eng": "Yō Yōtai",
    "label_ka": "容楊黛",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/50"
    },{
    "label_eng": "Takeda Izumo, II",
    "label_ka": "竹田出雲",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/52"
    },{
    "label_eng": "Takizawa Bakin",
    "label_ka": "滝沢馬琴",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/53"
    },{
    "label_eng": "Satō Aiko",
    "label_ka": "佐藤靄子",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/54"
    },{
    "label_eng": "Sumi Fusako",
    "label_ka": "鷲見房子",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/55"
    },{
    "label_eng": "Namiki Gohei",
    "label_ka": "並木五瓶",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/56"
    },{
    "label_eng": "Matsuda Wakichi",
    "label_ka": "松田和吉",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/57"
    },{
    "label_eng": "Wakatake Fuemi",
    "label_ka": "若竹笛躬",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/58"
    },{
    "label_eng": "Kitamado Goichi",
    "label_ka": "北窓後一",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/59"
    },{
    "label_eng": "Nihodō",
    "label_ka": "二歩堂",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/60"
    },{
    "label_eng": "Chikamatsu Yanagi",
    "label_ka": "近松柳",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/61"
    },{
    "label_eng": "Koku Zōsu",
    "label_ka": "黒蔵主",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/62"
    },{
    "label_eng": "Mitsu",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/63"
    },{
    "label_eng": "Sagawa Tōta",
    "label_ka": "佐川藤太",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/64"
    },{
    "label_eng": "Chikamatsu Baishiken",
    "label_ka": "近松梅枝軒",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/65"
    },{
    "label_eng": "Yoshida Shingo",
    "label_ka": "吉田新吾",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/66"
    },{
    "label_eng": "Nakamura Gyogan",
    "label_ka": "中村漁岸",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/67"
    },{
    "label_eng": "Yatami Heishichi",
    "label_ka": "八民平七",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/68"
    },{
    "label_eng": "Tamaki [Fudeji?]",
    "label_ka": "玉木筆二",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/69"
    },{
    "label_eng": "Tankō Tazō",
    "label_ka": "亶侯多蔵",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/71"
    },{
    "label_eng": "Tsutsui Hanbei",
    "label_ka": "筒井半平",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/72"
    },{
    "label_eng": "Asada Kakei",
    "label_ka": "浅田可啓",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/73"
    },{
    "label_eng": "Chikamatsu Kazō",
    "label_ka": "近松加造",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/74"
    },{
    "label_eng": "Chikamatsu Manju",
    "label_ka": "近松万寿",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/75"
    },{
    "label_eng": "Takeda Heishichi",
    "label_ka": "竹田平七",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/76"
    },{
    "label_eng": "Naniwa Sanzō",
    "label_ka": "難波三蔵",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/77"
    },{
    "label_eng": "Chikamatsu Tokuzō",
    "label_ka": "近松徳三",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/78"
    },{
    "label_eng": "Terada Heizō",
    "label_ka": "寺田兵蔵",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/79"
    },{
    "label_eng": "Takeda Bunkichi",
    "label_ka": "竹田文吉",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/80"
    },{
    "label_eng": "Matsu Kanshi",
    "label_ka": "松貫四",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/81"
    },{
    "label_eng": "Yoshida Kakumaru",
    "label_ka": "吉田角丸",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/82"
    },{
    "label_eng": "Kujō Takeko",
    "label_ka": "九條武子",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/83"
    },{
    "label_eng": "Fukumatsu Tōsuke",
    "label_ka": "福松藤助",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/84"
    },{
    "label_eng": "Namiki Eisuke",
    "label_ka": "並木永輔",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/85"
    },{
    "label_eng": "Yoshida Kanshi",
    "label_ka": "吉田冠子",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/86"
    },{
    "label_eng": "Kimura Tomiko",
    "label_ka": "木村富子",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/87"
    },{
    "label_eng": "Sakurada Jisuke, III",
    "label_ka": "櫻田治助",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/88"
    },{
    "label_eng": "Tamenaga Tarobei",
    "label_ka": "為永太郎兵衛",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/89"
    },{
    "label_eng": "Amano Shirō",
    "label_ka": "雨野士郎",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/90"
    },{
    "label_eng": "Takahashi Buhei",
    "label_ka": "高橋武兵衛",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/91"
    },{
    "label_eng": "Oda Sakunosuke",
    "label_ka": "織田作之助",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/92"
    },{
    "label_eng": "Yamaguchi Kōichi",
    "label_ka": "山口廣一",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/93"
    },{
    "label_eng": "Yamada Shōichi",
    "label_ka": "山田庄一",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/94"
    },{
    "label_eng": "Uno Chiyo",
    "label_ka": "宇野千代",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/95"
    },{
    "label_eng": "Matsuda Saiji",
    "label_ka": "松田才二",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/96"
    },{
    "label_eng": "Takeda [Shinmatsu?]",
    "label_ka": "竹田新松",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/97"
    },{
    "label_eng": "Chikamatsu Tōnan",
    "label_ka": "近松東南",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/98"
    },{
    "label_eng": "Kikuchi Hiroshi",
    "label_ka": "菊池寛",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/99"
    },{
    "label_eng": "Takeda Izumi",
    "label_ka": "竹田和泉",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/100"
    },{
    "label_eng": "Kako Chika",
    "label_ka": "加古千賀",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/101"
    },{
    "label_eng": "Ōno Keizō",
    "label_ka": "大野惠造",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/102"
    },{
    "label_eng": "Toyota Shōzō",
    "label_ka": "豊田正蔵",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/104"
    },{
    "label_eng": "Ogawa Hanbei",
    "label_ka": "小川半平",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/105"
    },{
    "label_eng": "Fukuuchi Kigai",
    "label_ka": "福内鬼外",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/106"
    },{
    "label_eng": "Takemoto Nishikidayū",
    "label_ka": "竹本錦太夫",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/107"
    },{
    "label_eng": "Tanizaki Junichirō",
    "label_ka": "谷崎潤一郎",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/108"
    },{
    "label_eng": "Tsukuda Heishichi",
    "label_ka": "筑田平七",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/109"
    },{
    "label_eng": "Takami Jun",
    "label_ka": "高見順",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/110"
    },{
    "label_eng": "Ariyoshi Sawako",
    "label_ka": "有吉佐和子",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/111"
    },{
    "label_eng": "Takeshiba Genzō",
    "label_ka": "竹柴諺蔵",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/112"
    },{
    "label_eng": "Tamekawa Sōsuke",
    "label_ka": "為川宗輔",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/113"
    },{
    "label_eng": "Tsutsukawa Hanji",
    "label_ka": "筒川半二",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/114"
    },{
    "label_eng": "Toyozawa Danpei, II",
    "label_ka": "豊沢団平",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/115"
    },{
    "label_eng": "Nozawa Kichibei, III",
    "label_ka": "野沢吉兵衛",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/116"
    },{
    "label_eng": "Tsuruzawa Jūzō, IV",
    "label_ka": "鶴澤重造",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/117"
    },{
    "label_eng": "Chikamatsu Kasaku",
    "label_ka": "近松加作",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/118"
    },{
    "label_eng": "Sakae Zenpei",
    "label_ka": "栄善平",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/119"
    },{
    "label_eng": "Yamada Shōichi",
    "label_ka": "山田庄一",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/120"
    },{
    "label_eng": "Takeshiba Kamesuke",
    "label_ka": "",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/121"
    },{
    "label_eng": "Tsuruzawa Dōhachi, I",
    "label_ka": "鶴澤 道八",
    "type": "Author",
    "extra": "",
    "link": "/ldpd-bunraku/authors/122"
    },
    // characters
    {
    "label_eng": "Farmer",
    "label_ka": "おやじ",
    "type": "Character",
    "extra": " from <i>The Red Battle Surcoat</i>",
    "link": "/ldpd-bunraku/characters/1"
    },{
    "label_eng": "Farmer's wife",
    "label_ka": "女房",
    "type": "Character",
    "extra": " from <i>The Red Battle Surcoat</i>",
    "link": "/ldpd-bunraku/characters/2"
    },{
    "label_eng": "Magotaro, a horse",
    "label_ka": "孫太郎（馬）",
    "type": "Character",
    "extra": " from <i>The Red Battle Surcoat</i>",
    "link": "/ldpd-bunraku/characters/3"
    },{
    "label_eng": "Local governor",
    "label_ka": "お代官",
    "type": "Character",
    "extra": " from <i>The Red Battle Surcoat</i>",
    "link": "/ldpd-bunraku/characters/4"
    },{
    "label_eng": "Local governor's assistant",
    "label_ka": "お代官のこぶん",
    "type": "Character",
    "extra": " from <i>The Red Battle Surcoat</i>",
    "link": "/ldpd-bunraku/characters/5"
    },{
    "label_eng": "Village headman",
    "label_ka": "庄屋さま",
    "type": "Character",
    "extra": " from <i>The Red Battle Surcoat</i>",
    "link": "/ldpd-bunraku/characters/6"
    },{
    "label_eng": "Local governor's wife",
    "label_ka": "奥方",
    "type": "Character",
    "extra": " from <i>The Red Battle Surcoat</i>",
    "link": "/ldpd-bunraku/characters/7"
    },{
    "label_eng": "Urazato",
    "label_ka": "女郎浦里",
    "type": "Character",
    "extra": " from <i>Tragedy on a Snowy Night</i>",
    "link": "/ldpd-bunraku/characters/8"
    },{
    "label_eng": "Midori",
    "label_ka": "禿みどり",
    "type": "Character",
    "extra": " from <i>Tragedy on a Snowy Night</i>",
    "link": "/ldpd-bunraku/characters/9"
    },{
    "label_eng": "Tokijiro Kasuga",
    "label_ka": "春日時次郎",
    "type": "Character",
    "extra": " from <i>Tragedy on a Snowy Night</i>",
    "link": "/ldpd-bunraku/characters/10"
    },{
    "label_eng": "Otatsu",
    "label_ka": "髪結おたつ",
    "type": "Character",
    "extra": " from <i>Tragedy on a Snowy Night</i>",
    "link": "/ldpd-bunraku/characters/11"
    },{
    "label_eng": "Okaya",
    "label_ka": "遣り手おかや",
    "type": "Character",
    "extra": " from <i>Tragedy on a Snowy Night</i>",
    "link": "/ldpd-bunraku/characters/12"
    },{
    "label_eng": "Kambei",
    "label_ka": "亭主勘兵衛",
    "type": "Character",
    "extra": " from <i>Tragedy on a Snowy Night</i>",
    "link": "/ldpd-bunraku/characters/13"
    },{
    "label_eng": "Hikoroku",
    "label_ka": "手代彦六",
    "type": "Character",
    "extra": " from <i>Tragedy on a Snowy Night</i>",
    "link": "/ldpd-bunraku/characters/14"
    },{
    "label_eng": "Chuzaemon, Chief retainer",
    "label_ka": "老家老忠左衛門",
    "type": "Character",
    "extra": " from <i>The Feudal Lord in Asama</i>",
    "link": "/ldpd-bunraku/characters/15"
    },{
    "label_eng": "Kunimochi, Feudal lord",
    "label_ka": "大名国持",
    "type": "Character",
    "extra": " from <i>The Feudal Lord in Asama</i>",
    "link": "/ldpd-bunraku/characters/16"
    },{
    "label_eng": "Hanasode, a courtesan",
    "label_ka": "花袖太夫",
    "type": "Character",
    "extra": " from <i>The Feudal Lord in Asama</i>",
    "link": "/ldpd-bunraku/characters/17"
    },{
    "label_eng": "Courtesan",
    "label_ka": "遊女",
    "type": "Character",
    "extra": " from <i>The Feudal Lord in Asama</i>",
    "link": "/ldpd-bunraku/characters/18"
    },{
    "label_eng": "Ukon",
    "label_ka": "近習右近",
    "type": "Character",
    "extra": " from <i>The Feudal Lord in Asama</i>",
    "link": "/ldpd-bunraku/characters/19"
    },{
    "label_eng": "Sakyo",
    "label_ka": "近習左京",
    "type": "Character",
    "extra": " from <i>The Feudal Lord in Asama</i>",
    "link": "/ldpd-bunraku/characters/20"
    },{
    "label_eng": "Madam",
    "label_ka": "女将",
    "type": "Character",
    "extra": " from <i>The Feudal Lord in Asama</i>",
    "link": "/ldpd-bunraku/characters/21"
    },{
    "label_eng": "Crown Prince Sakuragi",
    "label_ka": "桜木親王",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/22"
    },{
    "label_eng": "Motokata",
    "label_ka": "左大将元方",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/23"
    },{
    "label_eng": "Yoshifuru",
    "label_ka": "小野好古",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/24"
    },{
    "label_eng": "Sakaki",
    "label_ka": "榊の前",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/25"
    },{
    "label_eng": "Jibu",
    "label_ka": "岩倉治部大輔",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/26"
    },{
    "label_eng": "Taro",
    "label_ka": "左近太郎",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/27"
    },{
    "label_eng": "Yasunori Kamo's widow",
    "label_ka": "加茂の後室",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/28"
    },{
    "label_eng": "Heima",
    "label_ka": "乾平馬",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/29"
    },{
    "label_eng": "Yasuna",
    "label_ka": "安倍保名",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/30"
    },{
    "label_eng": "Yokambei",
    "label_ka": "奴与勘平",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/31"
    },{
    "label_eng": "Kuzunoha",
    "label_ka": "葛の葉姫",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/32"
    },{
    "label_eng": "Akuemon",
    "label_ka": "石川悪右衛門",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/33"
    },{
    "label_eng": "Fox-Kuzunoha",
    "label_ka": "女房葛の葉",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/34"
    },{
    "label_eng": "Yasuna's son",
    "label_ka": "安倍童子",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/35"
    },{
    "label_eng": "Dampachi",
    "label_ka": "木綿買実は荏柄段八",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/36"
    },{
    "label_eng": "Shoji",
    "label_ka": "信田庄司",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/37"
    },{
    "label_eng": "Shoji's wife",
    "label_ka": "庄司の妻",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/38"
    },{
    "label_eng": "Unzo",
    "label_ka": "信楽雲蔵",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/39"
    },{
    "label_eng": "Toji",
    "label_ka": "落合藤治",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/40"
    },{
    "label_eng": "Yakambei",
    "label_ka": "奴野干平",
    "type": "Character",
    "extra": " from <i>The White Fox of Shinoda</i>",
    "link": "/ldpd-bunraku/characters/41"
    },{
    "label_eng": "Tanuki",
    "label_ka": "狸",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/42"
    },{
    "label_eng": "Kawataro",
    "label_ka": "川太郎",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/43"
    },{
    "label_eng": "Rokurohime",
    "label_ka": "ろくろ姫",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/44"
    },{
    "label_eng": "Aosaginoshin",
    "label_ka": "青鷺之進",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/45"
    },{
    "label_eng": "Yukionna",
    "label_ka": "雪女",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/46"
    },{
    "label_eng": "Kawauso",
    "label_ka": "かわうそ",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/47"
    },{
    "label_eng": "Kamaitachi",
    "label_ka": "かまいたち",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/48"
    },{
    "label_eng": "Kamaitachi's retainer",
    "label_ka": "いたちの家来",
    "type": "Character",
    "extra": " from <i>The Story of Monsters</i>",
    "link": "/ldpd-bunraku/characters/49"
    },{
    "label_eng": "Kyosei",
    "label_ka": "喬生",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/50"
    },{
    "label_eng": "Old man, a neighbor",
    "label_ka": "隣ノ爺",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/51"
    },{
    "label_eng": "Old Woman, a neighbor",
    "label_ka": "隣ノ婆",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/52"
    },{
    "label_eng": "Neighbor",
    "label_ka": "近所の人",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/54"
    },{
    "label_eng": "Kinren",
    "label_ka": "金連",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/55"
    },{
    "label_eng": "Reikei",
    "label_ka": "麗卿",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/56"
    },{
    "label_eng": "Reikei doll",
    "label_ka": "麗卿藁人形",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/57"
    },{
    "label_eng": "Kinren doll",
    "label_ka": "金連藁人形",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/58"
    },{
    "label_eng": "Suikan",
    "label_ka": "酔漢",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/59"
    },{
    "label_eng": "Priest at Koshinji",
    "label_ka": "湖心寺の僧",
    "type": "Character",
    "extra": " from <i>Botan doro (The Peony Lantern)</i>",
    "link": "/ldpd-bunraku/characters/60"
    },{
    "label_eng": "Yojiro",
    "label_ka": "猿廻し与次郎",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/61"
    },{
    "label_eng": "Oshun",
    "label_ka": "娘おしゅん",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/62"
    },{
    "label_eng": "Dembei",
    "label_ka": "井筒屋伝兵衛",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/63"
    },{
    "label_eng": "Kanzaemon",
    "label_ka": "横淵官左衛門",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/64"
    },{
    "label_eng": "Yojiro's mother",
    "label_ka": "与次郎の母",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/65"
    },{
    "label_eng": "Kyuhachi",
    "label_ka": "廻しの久八",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/66"
    },{
    "label_eng": "Otsuru",
    "label_ka": "稽古娘おつる",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/67"
    },{
    "label_eng": "Kanzo",
    "label_ka": "仲買勘蔵",
    "type": "Character",
    "extra": " from <i>Oshun and Dembei</i>",
    "link": "/ldpd-bunraku/characters/68"
    },{
    "label_eng": "Tametomo",
    "label_ka": "鎮西八郎為朝",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/69"
    },{
    "label_eng": "Kiheiji",
    "label_ka": "八町礫紀平治太夫",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/70"
    },{
    "label_eng": "Takama",
    "label_ka": "高間太郎原鑑",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/71"
    },{
    "label_eng": "Sasarae",
    "label_ka": "簓江",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/72"
    },{
    "label_eng": "Isohagi",
    "label_ka": "磯萩",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/73"
    },{
    "label_eng": "Tameyori",
    "label_ka": "為頼",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/74"
    },{
    "label_eng": "Shimagimi",
    "label_ka": "島君",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/75"
    },{
    "label_eng": "Spy",
    "label_ka": "忍び",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/76"
    },{
    "label_eng": "Mutoda",
    "label_ka": "武藤太",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/77"
    },{
    "label_eng": "Ghost of retired Emperor Sutoku",
    "label_ka": "崇徳上皇の霊",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/78"
    },{
    "label_eng": "Ghost of Yorinaga",
    "label_ka": "左大臣頼長の霊",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/79"
    },{
    "label_eng": "Ghost of Tameyoshi",
    "label_ka": "六条判官為義の霊",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/80"
    },{
    "label_eng": "Crow",
    "label_ka": "烏天狗",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/81"
    },{
    "label_eng": "Shiranui",
    "label_ka": "白縫姫",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/82"
    },{
    "label_eng": "Chigusa, a maid",
    "label_ka": "腰元千種",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/83"
    },{
    "label_eng": "Yamahagi, a maid",
    "label_ka": "腰元山萩",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/84"
    },{
    "label_eng": "Takihei, a servant",
    "label_ka": "郎党滝平",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/85"
    },{
    "label_eng": "Sutemaru (Shunten, later known as Sutemaru)",
    "label_ka": "舜天丸後に舜天王",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/86"
    },{
    "label_eng": "Riyu",
    "label_ka": "紫巾官利勇",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/87"
    },{
    "label_eng": "Wanzu",
    "label_ka": "王子",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/88"
    },{
    "label_eng": "Neiwannyo",
    "label_ka": "寧王女",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/89"
    },{
    "label_eng": "Kumagimi",
    "label_ka": "巫女阿公",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/90"
    },{
    "label_eng": "Tsuru",
    "label_ka": "鶴",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/91"
    },{
    "label_eng": "Kame",
    "label_ka": "亀",
    "type": "Character",
    "extra": " from <i>Tametomo The Archer General</i>",
    "link": "/ldpd-bunraku/characters/92"
    },{
    "label_eng": "Komaki",
    "label_ka": "小巻",
    "type": "Character",
    "extra": " from <i>The Travelling Butterflies</i>",
    "link": "/ldpd-bunraku/characters/93"
    },{
    "label_eng": "Sukekuni",
    "label_ka": "助国",
    "type": "Character",
    "extra": " from <i>The Travelling Butterflies</i>",
    "link": "/ldpd-bunraku/characters/94"
    },{
    "label_eng": "Osan",
    "label_ka": "女房おさん",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/95"
    },{
    "label_eng": "Ishun",
    "label_ka": "大経師以春",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/96"
    },{
    "label_eng": "Sukeyemon",
    "label_ka": "手代助右衛門",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/97"
    },{
    "label_eng": "Tama",
    "label_ka": "下女玉",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/98"
    },{
    "label_eng": "Osan's mother",
    "label_ka": "おさん母",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/99"
    },{
    "label_eng": "Mohei",
    "label_ka": "手代茂兵衛",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/100"
    },{
    "label_eng": "Shichisuke, a servant",
    "label_ka": "下男七介",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/101"
    },{
    "label_eng": "Denkichi, a servant",
    "label_ka": "下男伝吉",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/102"
    },{
    "label_eng": "Bairyu",
    "label_ka": "赤松梅龍",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/103"
    },{
    "label_eng": "Dojun",
    "label_ka": "岐阜屋道順",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/104"
    },{
    "label_eng": "Street entertainer",
    "label_ka": "万歳",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/105"
    },{
    "label_eng": "Government official",
    "label_ka": "役人",
    "type": "Character",
    "extra": " from <i>The Ancient Calendar</i>",
    "link": "/ldpd-bunraku/characters/106"
    },{
    "label_eng": "Farmer",
    "label_ka": "百姓",
    "type": "Character",
    "extra": " from <i>The Vegetable Farm</i>",
    "link": "/ldpd-bunraku/characters/107"
    },{
    "label_eng": "Pumpkin",
    "label_ka": "かぼちゃ",
    "type": "Character",
    "extra": " from <i>The Vegetable Farm</i>",
    "link": "/ldpd-bunraku/characters/108"
    },{
    "label_eng": "Bottle gourd",
    "label_ka": "夕顔",
    "type": "Character",
    "extra": " from <i>The Vegetable Farm</i>",
    "link": "/ldpd-bunraku/characters/109"
    },{
    "label_eng": "Kinezo",
    "label_ka": "団子売杵造",
    "type": "Character",
    "extra": " from <i>The Dumpling Peddlers</i>",
    "link": "/ldpd-bunraku/characters/110"
    },{
    "label_eng": "Ousu",
    "label_ka": "団子売お臼",
    "type": "Character",
    "extra": " from <i>The Dumpling Peddlers</i>",
    "link": "/ldpd-bunraku/characters/111"
    },{
    "label_eng": "Akoya",
    "label_ka": "遊君阿古屋",
    "type": "Character",
    "extra": " from <i>The Battle of Dannoura</i>",
    "link": "/ldpd-bunraku/characters/112"
    },{
    "label_eng": "Shigetada",
    "label_ka": "秩父庄司重忠",
    "type": "Character",
    "extra": " from <i>The Battle of Dannoura</i>",
    "link": "/ldpd-bunraku/characters/113"
    },{
    "label_eng": "Iwanaga",
    "label_ka": "岩永左衛門",
    "type": "Character",
    "extra": " from <i>The Battle of Dannoura</i>",
    "link": "/ldpd-bunraku/characters/114"
    },{
    "label_eng": "Hanzawa",
    "label_ka": "榛沢六郎",
    "type": "Character",
    "extra": " from <i>The Battle of Dannoura</i>",
    "link": "/ldpd-bunraku/characters/115"
    },{
    "label_eng": "Servant",
    "label_ka": "水奴",
    "type": "Character",
    "extra": " from <i>The Battle of Dannoura</i>",
    "link": "/ldpd-bunraku/characters/116"
    },{
    "label_eng": "Kichisaburo",
    "label_ka": "小姓吉三郎",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/117"
    },{
    "label_eng": "Osugi",
    "label_ka": "下女お杉",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/118"
    },{
    "label_eng": "Oshichi",
    "label_ka": "娘お七",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/119"
    },{
    "label_eng": "Kyubei",
    "label_ka": "親久兵衛",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/120"
    },{
    "label_eng": "Kyubei's wife",
    "label_ka": "久兵衛女房",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/121"
    },{
    "label_eng": "Yasaku",
    "label_ka": "丁稚弥作",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/122"
    },{
    "label_eng": "Buhei",
    "label_ka": "武兵衛 (釜屋武兵衛 )",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/123"
    },{
    "label_eng": "Tazaemon",
    "label_ka": "太左衛門",
    "type": "Character",
    "extra": " from <i>The Red-Hot Love of the Greengrocer's Daughter</i>",
    "link": "/ldpd-bunraku/characters/124"
    },{
    "label_eng": "Harunaga",
    "label_ka": "尾田春長",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/127"
    },{
    "label_eng": "Hisayoshi",
    "label_ka": "真柴久吉(旅僧実は)",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/128"
    },{
    "label_eng": "Mitsuhide",
    "label_ka": "武智光秀",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/129"
    },{
    "label_eng": "Priest Abe",
    "label_ka": "安倍法印",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/130"
    },{
    "label_eng": "Priest Futen",
    "label_ka": "普天坊",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/131"
    },{
    "label_eng": "Naniwa-Chunagon Kanefuyu",
    "label_ka": "浪花中納言",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/132"
    },{
    "label_eng": "Rammaru",
    "label_ka": "森の蘭丸",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/133"
    },{
    "label_eng": "Jujiro",
    "label_ka": "武智十次郎",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/134"
    },{
    "label_eng": "Samboshi",
    "label_ka": "三法師丸",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/135"
    },{
    "label_eng": "Lady Ano",
    "label_ka": "阿野の局",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/136"
    },{
    "label_eng": "Shinobu",
    "label_ka": "腰元しのぶ",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/137"
    },{
    "label_eng": "Rikimaru",
    "label_ka": "森の力丸",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/138"
    },{
    "label_eng": "Sogi",
    "label_ka": "宗祇坊",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/139"
    },{
    "label_eng": "Kanroku, a soldier",
    "label_ka": "珍分勘六",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/140"
    },{
    "label_eng": "Masakiyo",
    "label_ka": "加藤正清",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/141"
    },{
    "label_eng": "Tamatsuyu",
    "label_ka": "玉露",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/142"
    },{
    "label_eng": "Ekei",
    "label_ka": "安徳寺恵瓊",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/143"
    },{
    "label_eng": "Yamasaburo",
    "label_ka": "浦辺山三郎",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/144"
    },{
    "label_eng": "Chozaemon",
    "label_ka": "清水長左衛門",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/145"
    },{
    "label_eng": "Yariume",
    "label_ka": "妻やり梅",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/146"
    },{
    "label_eng": "Takakage",
    "label_ka": "小梅川隆景",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/147"
    },{
    "label_eng": "Satsuki",
    "label_ka": "母皐月",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/148"
    },{
    "label_eng": "Shioten",
    "label_ka": "四王天田島頭 (百姓長兵衛実は四王天田島頭) (四王天但馬守)",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/149"
    },{
    "label_eng": "Misao",
    "label_ka": "妻操",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/150"
    },{
    "label_eng": "Hatsugiku",
    "label_ka": "嫁初菊",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/151"
    },{
    "label_eng": "Yukinoya",
    "label_ka": "妻雪の谷",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/152"
    },{
    "label_eng": "Matsuyo",
    "label_ka": "姉松代",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/153"
    },{
    "label_eng": "Shigenari",
    "label_ka": "鱸重成",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/154"
    },{
    "label_eng": "Page",
    "label_ka": "小姓",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/155"
    },{
    "label_eng": "Keikaku",
    "label_ka": "慶覚君",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/156"
    },{
    "label_eng": "Hachiro",
    "label_ka": "鷺森八郎",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/157"
    },{
    "label_eng": "Magoichi",
    "label_ka": "鱸孫市",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/158"
    },{
    "label_eng": "Rokuro",
    "label_ka": "是角六郎",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/159"
    },{
    "label_eng": "Shigewaka",
    "label_ka": "重若丸",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/160"
    },{
    "label_eng": "Kiyohide Nakagawa",
    "label_ka": "中川清秀",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/161"
    },{
    "label_eng": "Kenketsu",
    "label_ka": "僧献穴",
    "type": "Character",
    "extra": " from <i>The Tycoon's Exploit</i>",
    "link": "/ldpd-bunraku/characters/162"
    },{
    "label_eng": "Sota, in fact Shichiro",
    "label_ka": "猿嶋惣太実は淡路七郎",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/163"
    },{
    "label_eng": "Karaito",
    "label_ka": "惣太女房から糸",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/164"
    },{
    "label_eng": "Sajitayu",
    "label_ka": "蠅頭の左次太夫",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/165"
    },{
    "label_eng": "Bozuko",
    "label_ka": "坊主子",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/166"
    },{
    "label_eng": "Mutsu",
    "label_ka": "六",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/167"
    },{
    "label_eng": "Suika",
    "label_ka": "すいか(すいくわ)",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/168"
    },{
    "label_eng": "Yazo",
    "label_ka": "はねわなの弥蔵(弥次)",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/169"
    },{
    "label_eng": "Umewakamaru",
    "label_ka": "吉田梅若丸",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/170"
    },{
    "label_eng": "Takekuni",
    "label_ka": "県の権正武国",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/171"
    },{
    "label_eng": "Hanjogozen",
    "label_ka": "班女御前",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/172"
    },{
    "label_eng": "Hokaibo, in fact Tengu",
    "label_ka": "山伏法界坊実は天狗",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/173"
    },{
    "label_eng": "Matsuwakamaru",
    "label_ka": "吉田松若丸",
    "type": "Character",
    "extra": " from <i>The Twins and the Sumida River</i>",
    "link": "/ldpd-bunraku/characters/174"
    },{
    "label_eng": "Chogoro Nuregami",
    "label_ka": "濡髪長五郎",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/175"
    },{
    "label_eng": "Tea stall proprietor",
    "label_ka": "茶店亭主",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/176"
    },{
    "label_eng": "Chokichi Hanaregoma",
    "label_ka": "放駒長吉",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/177"
    },{
    "label_eng": "Oseki",
    "label_ka": "姉お関",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/178"
    },{
    "label_eng": "Geta-no-Ichi",
    "label_ka": "下駄の市",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/179"
    },{
    "label_eng": "Node-no-San",
    "label_ka": "野手の三",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/180"
    },{
    "label_eng": "Rokubei",
    "label_ka": "同行六兵衛",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/181"
    },{
    "label_eng": "Myorin",
    "label_ka": "尼妙林",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/182"
    },{
    "label_eng": "Gonzaemon Hiraoka",
    "label_ka": "平岡郷左衛門",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/183"
    },{
    "label_eng": "Ariemon Mihara",
    "label_ka": "三原有右衛門",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/184"
    },{
    "label_eng": "Yogoro Yamazaki",
    "label_ka": "山崎与五郎",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/185"
    },{
    "label_eng": "Azuma",
    "label_ka": "藤屋吾妻",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/186"
    },{
    "label_eng": "Oteru",
    "label_ka": "嫁お照",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/187"
    },{
    "label_eng": "Oyoshi",
    "label_ka": "下女およし",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/188"
    },{
    "label_eng": "Jimbei",
    "label_ka": "駕籠舁甚兵衛",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/189"
    },{
    "label_eng": "Tasuke",
    "label_ka": "駕籠舁太助",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/190"
    },{
    "label_eng": "Jibuemon Hashimoto",
    "label_ka": "橋本治部右衛門",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/191"
    },{
    "label_eng": "Yojibei Yamazaki",
    "label_ka": "山崎与次兵衛",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/192"
    },{
    "label_eng": "Shohachi, a senior employee",
    "label_ka": "手代庄八",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/193"
    },{
    "label_eng": "Junior employee",
    "label_ka": "丁稚",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/194"
    },{
    "label_eng": "Ohaya",
    "label_ka": "女房お早",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/195"
    },{
    "label_eng": "Chogoro's mother",
    "label_ka": "長五郎母(十次兵衛母)",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/196"
    },{
    "label_eng": "Jujibei Nampo",
    "label_ka": "南方十次兵衛",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/197"
    },{
    "label_eng": "Tampei Hiraoka",
    "label_ka": "平岡丹平",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/198"
    },{
    "label_eng": "Denzo Mihara",
    "label_ka": "三原伝蔵",
    "type": "Character",
    "extra": " from <i>The Two Butterflies</i>",
    "link": "/ldpd-bunraku/characters/199"
    },{
    "label_eng": "Naritada, a court noble",
    "label_ka": "大納言成忠",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/200"
    },{
    "label_eng": "Suemune, a Heike clansman",
    "label_ka": "長田太郎末宗",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/201"
    },{
    "label_eng": "Yoshikata, a Genji general",
    "label_ka": "木曾先生義賢",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/202"
    },{
    "label_eng": "Emperor Goshirakawa",
    "label_ka": "後白河天皇",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/203"
    },{
    "label_eng": "Kiyomori, Head of the Heike clan",
    "label_ka": "安芸守平清盛",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/204"
    },{
    "label_eng": "Tsunetoshi, a Heike clansman",
    "label_ka": "難波六郎常俊",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/205"
    },{
    "label_eng": "Shigemori, Son of Kiyomori",
    "label_ka": "平重盛 (小松内府重盛)",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/206"
    },{
    "label_eng": "Nagatsune",
    "label_ka": "高橋判官長常",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/207"
    },{
    "label_eng": "Yukitsuna, a Genji warrior",
    "label_ka": "多田蔵人行綱",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/208"
    },{
    "label_eng": "Aoi-Gozen, Yoshikata's wife",
    "label_ka": "葵御前",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/209"
    },{
    "label_eng": "Matsuyoi, Yoshikata's daughter",
    "label_ka": "待宵姫",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/210"
    },{
    "label_eng": "Kurosuke, a farmer",
    "label_ka": "百姓九郎助",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/211"
    },{
    "label_eng": "Koman, Kurosuke's daughter",
    "label_ka": "女房小まん",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/212"
    },{
    "label_eng": "Tarokichi, Koman's son",
    "label_ka": "伜太郎吉",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/213"
    },{
    "label_eng": "Munemasa, a Heike warrior",
    "label_ka": "進野次郎宗政",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/214"
    },{
    "label_eng": "Heinai, Munemasa's retainer",
    "label_ka": "横田平内",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/215"
    },{
    "label_eng": "Gunzo, Munemasa's retainer",
    "label_ka": "軍蔵",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/216"
    },{
    "label_eng": "Chuta, a Heike warrior",
    "label_ka": "塩見忠太",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/217"
    },{
    "label_eng": "Munemori, Son of Shigemori",
    "label_ka": "平宗盛",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/218"
    },{
    "label_eng": "Saemon, a Heike general",
    "label_ka": "飛騨左衛門",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/219"
    },{
    "label_eng": "Sanemori, a Heike general",
    "label_ka": "斎藤実盛",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/220"
    },{
    "label_eng": "Koyoshi, Kurosuke's wife",
    "label_ka": "九郎助女房小よし",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/221"
    },{
    "label_eng": "Nisota, Kurosuke's nephew",
    "label_ka": "矢橋二惣太",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/222"
    },{
    "label_eng": "Seno-o, a Heike warrior",
    "label_ka": "瀬尾十郎",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/223"
    },{
    "label_eng": "Village headman",
    "label_ka": "庄屋",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/224"
    },{
    "label_eng": "Matsunami Kengyo",
    "label_ka": "松波検校",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/225"
    },{
    "label_eng": "Reisui, a highway robber",
    "label_ka": "谷川冷水",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/226"
    },{
    "label_eng": "Kozakura, Yukitsuna's daughter",
    "label_ka": "娘小桜",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/227"
    },{
    "label_eng": "Wakaba, a lady-in-waiting",
    "label_ka": "若葉局",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/228"
    },{
    "label_eng": "Momiji, a lady-in-waiting",
    "label_ka": "紅葉局",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/229"
    },{
    "label_eng": "Moritsugu, a Heike clansman (Etchu Jiro)",
    "label_ka": "越中次郎盛次",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/230"
    },{
    "label_eng": "Tadamitsu, a Heike clansman (Kazusa Goro)",
    "label_ka": "上総五郎忠光",
    "type": "Character",
    "extra": " from <i>The Nunobiki Waterfall</i>",
    "link": "/ldpd-bunraku/characters/231"
    },{
    "label_eng": "Shinsaku",
    "label_ka": "新作",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/232"
    },{
    "label_eng": "Otsuyu",
    "label_ka": "娘お露",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/233"
    },{
    "label_eng": "Mokuzo (Kizo)",
    "label_ka": "どすの木蔵",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/234"
    },{
    "label_eng": "Tsubute-no-san",
    "label_ka": "礫の三",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/235"
    },{
    "label_eng": "Kanta",
    "label_ka": "勘太",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/236"
    },{
    "label_eng": "Teruwaka",
    "label_ka": "輝若君",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/237"
    },{
    "label_eng": "Jiju",
    "label_ka": "乳人侍従",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/238"
    },{
    "label_eng": "Osaji",
    "label_ka": "母お匕",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/239"
    },{
    "label_eng": "Gumpei, in fact Masakiyo",
    "label_ka": "十河軍平実は加藤正清",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/240"
    },{
    "label_eng": "Zesai",
    "label_ka": "小西是斎",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/241"
    },{
    "label_eng": "Mochibei",
    "label_ka": "庄屋持兵衛",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/242"
    },{
    "label_eng": "Tokichi, later known as Hisayoshi",
    "label_ka": "此下東吉後に真柴久吉",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/243"
    },{
    "label_eng": "Kojibei",
    "label_ka": "小次兵衛",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/244"
    },{
    "label_eng": "Daizen",
    "label_ka": "松永大膳",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/245"
    },{
    "label_eng": "Kitota",
    "label_ka": "松永鬼藤太",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/246"
    },{
    "label_eng": "Yukihime",
    "label_ka": "雪姫",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/247"
    },{
    "label_eng": "Naonobu",
    "label_ka": "狩野之介直信",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/248"
    },{
    "label_eng": "Keijuin",
    "label_ka": "慶寿院",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/249"
    },{
    "label_eng": "Shingo Ishihara",
    "label_ka": "石原新五",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/250"
    },{
    "label_eng": "Tanzo Inui",
    "label_ka": "乾丹蔵",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/251"
    },{
    "label_eng": "Chuji Kawashima",
    "label_ka": "川嶋忠治",
    "type": "Character",
    "extra": " from <i>The Gion Festival</i>",
    "link": "/ldpd-bunraku/characters/252"
    },{
    "label_eng": "Okaya",
    "label_ka": "女房おかや",
    "type": "Character",
    "extra": " from <i>A Chushingura's Subplot</i>",
    "link": "/ldpd-bunraku/characters/253"
    },{
    "label_eng": "Yasaku, a farmer",
    "label_ka": "百姓弥作",
    "type": "Character",
    "extra": " from <i>A Chushingura's Subplot</i>",
    "link": "/ldpd-bunraku/characters/254"
    },{
    "label_eng": "Wasuke Kayano",
    "label_ka": "萱野和助",
    "type": "Character",
    "extra": " from <i>A Chushingura's Subplot</i>",
    "link": "/ldpd-bunraku/characters/255"
    },{
    "label_eng": "Shichidayu",
    "label_ka": "芝村七太夫",
    "type": "Character",
    "extra": " from <i>A Chushingura's Subplot</i>",
    "link": "/ldpd-bunraku/characters/256"
    },{
    "label_eng": "Kakubei",
    "label_ka": "狸の角兵衛",
    "type": "Character",
    "extra": " from <i>A Chushingura's Subplot</i>",
    "link": "/ldpd-bunraku/characters/257"
    },{
    "label_eng": "Rikiya",
    "label_ka": "大星力弥",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/258"
    },{
    "label_eng": "Okahei, in fact Heiemon Teraoka",
    "label_ka": "奴岡平実は寺岡平右衛門",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/259"
    },{
    "label_eng": "Acolyte",
    "label_ka": "所化",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/260"
    },{
    "label_eng": "Pilgrim",
    "label_ka": "巡礼",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/261"
    },{
    "label_eng": "Packhorse driver",
    "label_ka": "馬方",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/262"
    },{
    "label_eng": "Traveling priest",
    "label_ka": "高野聖",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/263"
    },{
    "label_eng": "Courier",
    "label_ka": "飛脚",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/264"
    },{
    "label_eng": "Yuranosuke",
    "label_ka": "大星由良之介",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/265"
    },{
    "label_eng": "Yuranosuke's wife",
    "label_ka": "由良之介妻",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/266"
    },{
    "label_eng": "Yuranosuke's mother",
    "label_ka": "由良之介母",
    "type": "Character",
    "extra": " from <i>The Go Game Strategy</i>",
    "link": "/ldpd-bunraku/characters/267"
    },{
    "label_eng": "Onatsu",
    "label_ka": "娘お夏",
    "type": "Character",
    "extra": " from <i>The Fiftieth Death Anniversary</i>",
    "link": "/ldpd-bunraku/characters/268"
    },{
    "label_eng": "Oshun",
    "label_ka": "おしゅん",
    "type": "Character",
    "extra": " from <i>The Fiftieth Death Anniversary</i>",
    "link": "/ldpd-bunraku/characters/269"
    },{
    "label_eng": "Osan",
    "label_ka": "おさん",
    "type": "Character",
    "extra": " from <i>The Fiftieth Death Anniversary</i>",
    "link": "/ldpd-bunraku/characters/270"
    },{
    "label_eng": "Hyosuke's mother",
    "label_ka": "母お幸",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/271"
    },{
    "label_eng": "Hyosuke",
    "label_ka": "寺子屋兵助",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/272"
    },{
    "label_eng": "Fudematsu",
    "label_ka": "伜筆松",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/273"
    },{
    "label_eng": "Otsuru, Tobei's wife",
    "label_ka": "女房おつる",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/274"
    },{
    "label_eng": "Ohaya",
    "label_ka": "手習子お早",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/275"
    },{
    "label_eng": "Ohana",
    "label_ka": "手習子お花",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/276"
    },{
    "label_eng": "Omaki, Hyosuke's wife",
    "label_ka": "女房お牧",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/277"
    },{
    "label_eng": "Gambei",
    "label_ka": "兄眼兵衛",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/278"
    },{
    "label_eng": "Dampachi",
    "label_ka": "手代段八",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/279"
    },{
    "label_eng": "Tobei",
    "label_ka": "朝日奈藤兵衛",
    "type": "Character",
    "extra": " from <i>The Maiden's Colorful Fan</i>",
    "link": "/ldpd-bunraku/characters/280"
    },{
    "label_eng": "Kyonokimi",
    "label_ka": "卿の君",
    "type": "Character",
    "extra": " from <i>The Cherry Trees of the Imperial Palace</i>",
    "link": "/ldpd-bunraku/characters/281"
    },{
    "label_eng": "Hananoi",
    "label_ka": "妻花の井",
    "type": "Character",
    "extra": " from <i>The Cherry Trees of the Imperial Palace</i>",
    "link": "/ldpd-bunraku/characters/282"
    },{
    "label_eng": "Shinobu",
    "label_ka": "腰元信夫",
    "type": "Character",
    "extra": " from <i>The Cherry Trees of the Imperial Palace</i>",
    "link": "/ldpd-bunraku/characters/283"
    },{
    "label_eng": "Owasa",
    "label_ka": "母おわさ",
    "type": "Character",
    "extra": " from <i>The Cherry Trees of the Imperial Palace</i>",
    "link": "/ldpd-bunraku/characters/284"
    },{
    "label_eng": "Taro",
    "label_ka": "侍従太郎",
    "type": "Character",
    "extra": " from <i>The Cherry Trees of the Imperial Palace</i>",
    "link": "/ldpd-bunraku/characters/285"
    },{
    "label_eng": "Benkei",
    "label_ka": "武蔵坊弁慶",
    "type": "Character",
    "extra": " from <i>The Cherry Trees of the Imperial Palace</i>",
    "link": "/ldpd-bunraku/characters/286"
    },{
    "label_eng": "Joetsu",
    "label_ka": "宇治常悦",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/287"
    },{
    "label_eng": "Tanigoro",
    "label_ka": "金江谷五郎",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/288"
    },{
    "label_eng": "Daishichi",
    "label_ka": "志賀台七",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/289"
    },{
    "label_eng": "Kampei",
    "label_ka": "家来貫平",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/290"
    },{
    "label_eng": "Tansuke",
    "label_ka": "家来丹介",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/291"
    },{
    "label_eng": "Yomosaku",
    "label_ka": "百姓与茂作",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/292"
    },{
    "label_eng": "Onobu",
    "label_ka": "妹おのぶ",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/293"
    },{
    "label_eng": "Shichirobei",
    "label_ka": "庄屋七郎兵衛",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/294"
    },{
    "label_eng": "Osayo",
    "label_ka": "女房おさよ",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/295"
    },{
    "label_eng": "Shichisuke, a farmer",
    "label_ka": "百姓七助",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/296"
    },{
    "label_eng": "Oune",
    "label_ka": "女房おうね",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/297"
    },{
    "label_eng": "Dojo",
    "label_ka": "豆蔵どぜう (手品師豆造ことどじょう)",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/298"
    },{
    "label_eng": "Soroku",
    "label_ka": "大黒屋宗六",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/299"
    },{
    "label_eng": "Tea stall proprietor",
    "label_ka": "茶店亭主",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/300"
    },{
    "label_eng": "Kankuro",
    "label_ka": "観九郎 (金貸勘九郎)",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/301"
    },{
    "label_eng": "Miyagino",
    "label_ka": "傾城宮城野",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/302"
    },{
    "label_eng": "Girl attendant to Miyagino",
    "label_ka": "禿しげり",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/303"
    },{
    "label_eng": "Miyazato",
    "label_ka": "新造宮里 (女郎)",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/304"
    },{
    "label_eng": "Miyashiba",
    "label_ka": "新造宮柴 (女郎)",
    "type": "Character",
    "extra": " from <i>The Shiraishi Story</i>",
    "link": "/ldpd-bunraku/characters/305"
    },{
    "label_eng": "Ryuko",
    "label_ka": "劉洪",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/306"
    },{
    "label_eng": "Rihyo",
    "label_ka": "李彪",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/307"
    },{
    "label_eng": "Chinkozui",
    "label_ka": "陳光蕊",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/308"
    },{
    "label_eng": "Hakuren",
    "label_ka": "女房白蓮",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/309"
    },{
    "label_eng": "King of Hell",
    "label_ka": "閻魔大王",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/310"
    },{
    "label_eng": "Ogre",
    "label_ka": "鬼",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/311"
    },{
    "label_eng": "Dead man",
    "label_ka": "亡者",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/312"
    },{
    "label_eng": "Songoku",
    "label_ka": "孫悟空",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/313"
    },{
    "label_eng": "Ungai",
    "label_ka": "僧雲外",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/314"
    },{
    "label_eng": "Genjo, later known as Sanzohoshi",
    "label_ka": "玄奘後に三蔵法師",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/315"
    },{
    "label_eng": "Fuyo, in fact Ginkaku",
    "label_ka": "娘芙蓉実は銀角",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/316"
    },{
    "label_eng": "Friend of Fuyo's",
    "label_ka": "芙蓉の友達",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/317"
    },{
    "label_eng": "Priest Homei",
    "label_ka": "法明上人",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/318"
    },{
    "label_eng": "Saikakuen",
    "label_ka": "才覚延",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/319"
    },{
    "label_eng": "Teremen",
    "label_ka": "医者竹林テレメン",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/320"
    },{
    "label_eng": "Ryuko's wife",
    "label_ka": "劉洪の妻",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/321"
    },{
    "label_eng": "Chogohachi, later known as Chohakkai",
    "label_ka": "猪悟八後に猪八戒",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/322"
    },{
    "label_eng": "Gaikotsu, later known as Sagojo",
    "label_ka": "骸骨後に沙悟浄",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/323"
    },{
    "label_eng": "Jagatara-no-gon",
    "label_ka": "手下じゃがたらの権",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/324"
    },{
    "label_eng": "Shabbily-clothed woman",
    "label_ka": "賤の女",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/325"
    },{
    "label_eng": "Boatman",
    "label_ka": "船人",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/326"
    },{
    "label_eng": "Buddha",
    "label_ka": "釈迦如来",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/327"
    },{
    "label_eng": "Flower peddler",
    "label_ka": "花売女",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/328"
    },{
    "label_eng": "Donketsu",
    "label_ka": "手下どん穴",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/329"
    },{
    "label_eng": "Townsman",
    "label_ka": "里人",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/330"
    },{
    "label_eng": "Rasetsujo",
    "label_ka": "羅刹女",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/331"
    },{
    "label_eng": "Gyumao",
    "label_ka": "牛魔王",
    "type": "Character",
    "extra": " from <i>Monkey</i>",
    "link": "/ldpd-bunraku/characters/332"
    },{
    "label_eng": "Masakiyo Kato",
    "label_ka": "加藤肥多守正清",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/334"
    },{
    "label_eng": "Yoshinari Mori",
    "label_ka": "森三左衛門義成",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/335"
    },{
    "label_eng": "Hayase, a maid",
    "label_ka": "腰元早瀬",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/336"
    },{
    "label_eng": "Saeda, a maid",
    "label_ka": "腰元左枝",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/337"
    },{
    "label_eng": "Hinaginu",
    "label_ka": "娘雛絹",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/338"
    },{
    "label_eng": "Gemba Marikawa",
    "label_ka": "鞠川玄蕃",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/339"
    },{
    "label_eng": "Shigarami",
    "label_ka": "妻柵",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/340"
    },{
    "label_eng": "Kazuenosuke Kato",
    "label_ka": "加藤主計之介清郷",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/341"
    },{
    "label_eng": "Tokimasa Hojo",
    "label_ka": "北条時政",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/342"
    },{
    "label_eng": "Imperial messenger",
    "label_ka": "山蔭中納言",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/343"
    },{
    "label_eng": "Kyuma Hayabuchi",
    "label_ka": "早淵久馬",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/344"
    },{
    "label_eng": "Spy",
    "label_ka": "忍び",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/345"
    },{
    "label_eng": "Teruha, a maid",
    "label_ka": "腰元照葉",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/346"
    },{
    "label_eng": "Miyuki, a maid",
    "label_ka": "腰元深雪",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/347"
    },{
    "label_eng": "Yoshihiro Ouchi",
    "label_ka": "大内冠者義弘",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/348"
    },{
    "label_eng": "Hazue",
    "label_ka": "奥方葉末",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/349"
    },{
    "label_eng": "Nadaemon, in fact Motobei Kojima",
    "label_ka": "船頭灘右衛門実は児嶋元兵衛政次",
    "type": "Character",
    "extra": " from <i>Masakiyo's Loyalty</i>",
    "link": "/ldpd-bunraku/characters/350"
    },{
    "label_eng": "Shinobu",
    "label_ka": "娘信夫",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/351"
    },{
    "label_eng": "Mameshiro",
    "label_ka": "磯の上豆四郎",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/352"
    },{
    "label_eng": "Gosaku",
    "label_ka": "亭主五作",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/353"
    },{
    "label_eng": "Nyohachi",
    "label_ka": "鉦の鐃八",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/354"
    },{
    "label_eng": "Tenzen",
    "label_ka": "代官川島典膳",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/355"
    },{
    "label_eng": "Osaki",
    "label_ka": "文字摺売りお咲",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/356"
    },{
    "label_eng": "Otani",
    "label_ka": "文字摺売りお谷",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/357"
    },{
    "label_eng": "Koyoshi",
    "label_ka": "母小よし",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/358"
    },{
    "label_eng": "Aritsune",
    "label_ka": "紀有常",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/359"
    },{
    "label_eng": "Narihira",
    "label_ka": "在原業平",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/360"
    },{
    "label_eng": "Izutsu",
    "label_ka": "井筒姫",
    "type": "Character",
    "extra": " from <i>The Tales of Ise</i>",
    "link": "/ldpd-bunraku/characters/361"
    },{
    "label_eng": "Sankatsu",
    "label_ka": "美濃屋三勝",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/362"
    },{
    "label_eng": "Hanshichi's mother",
    "label_ka": "半七の母",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/363"
    },{
    "label_eng": "Chota",
    "label_ka": "丁稚長太",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/364"
    },{
    "label_eng": "Hambei's wife",
    "label_ka": "半兵衛女房",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/365"
    },{
    "label_eng": "Otsu",
    "label_ka": "娘お通",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/366"
    },{
    "label_eng": "Hambei",
    "label_ka": "舅半兵衛",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/367"
    },{
    "label_eng": "Leader of the five-man group",
    "label_ka": "五人組の頭",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/368"
    },{
    "label_eng": "Sogan",
    "label_ka": "親宗岸",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/369"
    },{
    "label_eng": "Osono",
    "label_ka": "嫁お園",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/370"
    },{
    "label_eng": "Hanshichi",
    "label_ka": "茜屋半七",
    "type": "Character",
    "extra": " from <i>A Tragic Love Triangle</i>",
    "link": "/ldpd-bunraku/characters/371"
    },{
    "label_eng": "Gentazaemon",
    "label_ka": "森口源太左衛門",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/372"
    },{
    "label_eng": "Kanzo, Gentazaemon's retainer",
    "label_ka": "門弟官蔵 (勘蔵)",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/373"
    },{
    "label_eng": "Kazuma, Naiki's Retainer",
    "label_ka": "門弟数馬",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/374"
    },{
    "label_eng": "Juzo, Naiki's Retainer",
    "label_ka": "門弟十蔵",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/375"
    },{
    "label_eng": "Naiki",
    "label_ka": "槌屋内記",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/376"
    },{
    "label_eng": "Chief priest",
    "label_ka": "方丈",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/377"
    },{
    "label_eng": "Suganoya, Naiki's wife",
    "label_ka": "内記妻菅の谷",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/378"
    },{
    "label_eng": "Unchiku, an acolyte",
    "label_ka": "弟子僧雲竹",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/379"
    },{
    "label_eng": "Nensai, an acolyte",
    "label_ka": "弟子僧念西",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/380"
    },{
    "label_eng": "Otsuji",
    "label_ka": "乳母お辻",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/381"
    },{
    "label_eng": "Botaro",
    "label_ka": "民谷坊太郎",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/382"
    },{
    "label_eng": "Danemon",
    "label_ka": "門弟団右衛門",
    "type": "Character",
    "extra": " from <i>The Stone Monument of Glory</i>",
    "link": "/ldpd-bunraku/characters/383"
    },{
    "label_eng": "Tayu",
    "label_ka": "太夫",
    "type": "Character",
    "extra": " from <i>The Dances of the Four Seasons</i>",
    "link": "/ldpd-bunraku/characters/384"
    },{
    "label_eng": "Saizo",
    "label_ka": "才蔵",
    "type": "Character",
    "extra": " from <i>The Dances of the Four Seasons</i>",
    "link": "/ldpd-bunraku/characters/385"
    },{
    "label_eng": "Fisherwoman",
    "label_ka": "海女",
    "type": "Character",
    "extra": " from <i>The Dances of the Four Seasons</i>",
    "link": "/ldpd-bunraku/characters/386"
    },{
    "label_eng": "Sekidera Komachi",
    "label_ka": "関寺小町",
    "type": "Character",
    "extra": " from <i>The Dances of the Four Seasons</i>",
    "link": "/ldpd-bunraku/characters/387"
    },{
    "label_eng": "Sagimusume",
    "label_ka": "鷺娘",
    "type": "Character",
    "extra": " from <i>The Dances of the Four Seasons</i>",
    "link": "/ldpd-bunraku/characters/388"
    },{
    "label_eng": "Saigyo",
    "label_ka": "西行",
    "type": "Character",
    "extra": " from <i>Hatsuse mode</i>",
    "link": "/ldpd-bunraku/characters/389"
    },{
    "label_eng": "Nun",
    "label_ka": "尼",
    "type": "Character",
    "extra": " from <i>Hatsuse mode</i>",
    "link": "/ldpd-bunraku/characters/390"
    },{
    "label_eng": "Daughter",
    "label_ka": "娘",
    "type": "Character",
    "extra": " from <i>Hatsuse mode</i>",
    "link": "/ldpd-bunraku/characters/391"
    },{
    "label_eng": "Ghost of Shoi",
    "label_ka": "少尉の亡霊",
    "type": "Character",
    "extra": " from <i>Hatsuse mode</i>",
    "link": "/ldpd-bunraku/characters/392"
    },{
    "label_eng": "Satonoko",
    "label_ka": "里の子",
    "type": "Character",
    "extra": " from <i>Hatsuse mode</i>",
    "link": "/ldpd-bunraku/characters/393"
    },{
    "label_eng": "Girl",
    "label_ka": "女の子",
    "type": "Character",
    "extra": " from <i>Hatsuse mode</i>",
    "link": "/ldpd-bunraku/characters/394"
    },{
    "label_eng": "Azumaya",
    "label_ka": "俊寛妻あづまや",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/395"
    },{
    "label_eng": "Lady-in-waiting",
    "label_ka": "上臈",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/396"
    },{
    "label_eng": "Moritsugu",
    "label_ka": "越中次郎兵衛盛次",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/397"
    },{
    "label_eng": "Noritsune",
    "label_ka": "能登守教経",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/398"
    },{
    "label_eng": "Kikuo",
    "label_ka": "童菊王",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/399"
    },{
    "label_eng": "Kiyomori",
    "label_ka": "平相国清盛",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/400"
    },{
    "label_eng": "Ario",
    "label_ka": "有王丸",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/401"
    },{
    "label_eng": "Tomokata",
    "label_ka": "下司次郎友方",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/402"
    },{
    "label_eng": "Shunkan",
    "label_ka": "俊寛僧都",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/403"
    },{
    "label_eng": "Yasuyori",
    "label_ka": "平判官康頼",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/404"
    },{
    "label_eng": "Naritsune",
    "label_ka": "丹波少将成経",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/405"
    },{
    "label_eng": "Chidori",
    "label_ka": "蜑千鳥",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/406"
    },{
    "label_eng": "Seno-o",
    "label_ka": "瀬尾太郎兼康",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/407"
    },{
    "label_eng": "Motoyasu",
    "label_ka": "丹左衛門元康",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/408"
    },{
    "label_eng": "Former Emperor Goshirkawa",
    "label_ka": "後白河法皇",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/409"
    },{
    "label_eng": "Boatman",
    "label_ka": "船頭",
    "type": "Character",
    "extra": " from <i>The Priest in Exile</i>",
    "link": "/ldpd-bunraku/characters/410"
    },{
    "label_eng": "Ukifune",
    "label_ka": "浮舟",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/411"
    },{
    "label_eng": "Kirinoya",
    "label_ka": "桐の谷",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/412"
    },{
    "label_eng": "Lady Iwane",
    "label_ka": "岩根御前",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/413"
    },{
    "label_eng": "Kakunai, a servant",
    "label_ka": "奴角内",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/414"
    },{
    "label_eng": "Takunai, a servant",
    "label_ka": "奴宅内",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/415"
    },{
    "label_eng": "Hirotsugu",
    "label_ka": "大貮広嗣",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/416"
    },{
    "label_eng": "Chujohime",
    "label_ka": "中将姫",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/417"
    },{
    "label_eng": "Toyonari",
    "label_ka": "父豊成卿",
    "type": "Character",
    "extra": " from <i>The Pines on Mount Hibari</i>",
    "link": "/ldpd-bunraku/characters/418"
    },{
    "label_eng": "Kiyohime",
    "label_ka": "娘清姫",
    "type": "Character",
    "extra": " from <i>The Cherry Trees Along the Hidaka River</i>",
    "link": "/ldpd-bunraku/characters/419"
    },{
    "label_eng": "Odamaki",
    "label_ka": "おだ巻姫",
    "type": "Character",
    "extra": " from <i>The Cherry Trees Along the Hidaka River</i>",
    "link": "/ldpd-bunraku/characters/420"
    },{
    "label_eng": "Priest Gojaku",
    "label_ka": "剛寂僧都",
    "type": "Character",
    "extra": " from <i>The Cherry Trees Along the Hidaka River</i>",
    "link": "/ldpd-bunraku/characters/421"
    },{
    "label_eng": "Juta",
    "label_ka": "鹿瀬十太",
    "type": "Character",
    "extra": " from <i>The Cherry Trees Along the Hidaka River</i>",
    "link": "/ldpd-bunraku/characters/422"
    },{
    "label_eng": "Village headman",
    "label_ka": "真那古庄司",
    "type": "Character",
    "extra": " from <i>The Cherry Trees Along the Hidaka River</i>",
    "link": "/ldpd-bunraku/characters/423"
    },{
    "label_eng": "Anchin, in fact Crown Prince Sakuragi",
    "label_ka": "白川の安珍実は桜木親王",
    "type": "Character",
    "extra": " from <i>The Cherry Trees Along the Hidaka River</i>",
    "link": "/ldpd-bunraku/characters/424"
    },{
    "label_eng": "Boatman",
    "label_ka": "渡し守 (船頭)",
    "type": "Character",
    "extra": " from <i>The Cherry Trees Along the Hidaka River</i>",
    "link": "/ldpd-bunraku/characters/425"
    },{
    "label_eng": "Yasaburo",
    "label_ka": "衣川弥三郎",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/426"
    },{
    "label_eng": "Okiku",
    "label_ka": "腰元お菊",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/427"
    },{
    "label_eng": "Mayumi",
    "label_ka": "奥方真弓の方",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/428"
    },{
    "label_eng": "Rindayu, a Shinto priest",
    "label_ka": "祝部山上倫太夫",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/429"
    },{
    "label_eng": "Mokusokan, in fact Shihoden",
    "label_ka": "車騎将軍木曾官実は四方田但馬守",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/430"
    },{
    "label_eng": "Rokusuke",
    "label_ka": "毛谷村六助",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/431"
    },{
    "label_eng": "Enami, a warrior",
    "label_ka": "榎並一学",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/432"
    },{
    "label_eng": "Hayakawa, a warrior",
    "label_ka": "早川兎毛",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/433"
    },{
    "label_eng": "Dengoemon",
    "label_ka": "轟伝五右衛門",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/434"
    },{
    "label_eng": "Ichimisai",
    "label_ka": "吉岡一味斎",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/435"
    },{
    "label_eng": "Yasamatsu",
    "label_ka": "一子弥三松",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/436"
    },{
    "label_eng": "Tomohei",
    "label_ka": "若党友平",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/437"
    },{
    "label_eng": "Yasazaemon",
    "label_ka": "衣川弥三左衛門",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/438"
    },{
    "label_eng": "Takumi",
    "label_ka": "京極内匠",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/439"
    },{
    "label_eng": "Tozo",
    "label_ka": "春風藤蔵",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/440"
    },{
    "label_eng": "Otonari",
    "label_ka": "郡大守音成",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/441"
    },{
    "label_eng": "Hisayoshi",
    "label_ka": "真柴久吉",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/442"
    },{
    "label_eng": "Shingo Sakurai",
    "label_ka": "桜井新吾",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/443"
    },{
    "label_eng": "Sasen",
    "label_ka": "医者柴左仙",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/444"
    },{
    "label_eng": "Kotomi, a lady-in-waiting",
    "label_ka": "腰元小富",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/445"
    },{
    "label_eng": "Omatsu, a lady-in-waiting",
    "label_ka": "腰元お松",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/446"
    },{
    "label_eng": "Sannojo",
    "label_ka": "弟三之丞",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/447"
    },{
    "label_eng": "Oko",
    "label_ka": "母お幸",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/448"
    },{
    "label_eng": "Osono",
    "label_ka": "娘お園",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/449"
    },{
    "label_eng": "Sagohei",
    "label_ka": "若党佐吾平",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/450"
    },{
    "label_eng": "Page",
    "label_ka": "小姓",
    "type": "Character",
    "extra": " from <i>The Vow of Rokusuke</i>",
    "link": "/ldpd-bunraku/characters/451"
    },{
    "label_eng": "Minamoto-no-Yoshitsune",
    "label_ka": "源義経",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/452"
    },{
    "label_eng": "Kagetoki Kajiwara",
    "label_ka": "梶原平三景時",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/453"
    },{
    "label_eng": "Takatsuna Sasaki",
    "label_ka": "佐々木高綱",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/454"
    },{
    "label_eng": "Shigetada Hatakeyama",
    "label_ka": "畠山重忠",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/455"
    },{
    "label_eng": "Yoshimori Wada",
    "label_ka": "和田義盛",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/456"
    },{
    "label_eng": "Old woodcutter",
    "label_ka": "杣の老人",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/457"
    },{
    "label_eng": "Yoshinaka Kiso",
    "label_ka": "木曽義仲(朝日将軍義仲)",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/458"
    },{
    "label_eng": "Ofude",
    "label_ka": "腰元お筆",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/459"
    },{
    "label_eng": "Yamabuki-Gozen",
    "label_ka": "山吹御前",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/460"
    },{
    "label_eng": "Tomoe-Gozen",
    "label_ka": "巴御前",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/461"
    },{
    "label_eng": "Kamada (Kamata) Haito",
    "label_ka": "鎌田隼人",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/462"
    },{
    "label_eng": "Landlord Rokubei",
    "label_ka": "家主六兵衛",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/463"
    },{
    "label_eng": "Bamba-no-Chuta",
    "label_ka": "番場忠太",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/464"
    },{
    "label_eng": "Gonshiro",
    "label_ka": "船頭権四郎",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/465"
    },{
    "label_eng": "Oyoshi",
    "label_ka": "およし",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/466"
    },{
    "label_eng": "Innkeeper",
    "label_ka": "宿屋亭主",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/467"
    },{
    "label_eng": "Komawaka",
    "label_ka": "駒若君",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/468"
    },{
    "label_eng": "Tsuchimatsu",
    "label_ka": "槌松",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/469"
    },{
    "label_eng": "Matsuemon, in fact Kanemitsu Matsuemon",
    "label_ka": "松右衛門実は樋口次郎兼光",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/470"
    },{
    "label_eng": "Mataroku, a boatman",
    "label_ka": "船頭又六",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/471"
    },{
    "label_eng": "Tomizo, a boatman",
    "label_ka": "船頭富蔵",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/472"
    },{
    "label_eng": "Kurosaku, a boatman",
    "label_ka": "九郎作",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/473"
    },{
    "label_eng": "Genta Kajiwara",
    "label_ka": "梶原源太景季",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/474"
    },{
    "label_eng": "Heiji Kajiwara",
    "label_ka": "梶原平次景高",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/475"
    },{
    "label_eng": "Chidori, later known as Umegae",
    "label_ka": "腰元千鳥後に傾城梅ヶ枝(傾城梅ヶ枝)",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/476"
    },{
    "label_eng": "Enju",
    "label_ka": "母延寿",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/477"
    },{
    "label_eng": "Gunnai Yokosuka",
    "label_ka": "横須賀軍内",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/478"
    },{
    "label_eng": "Fortune teller",
    "label_ka": "辻法印",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/479"
    },{
    "label_eng": "Fortune teller's wife",
    "label_ka": "法印女房",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/480"
    },{
    "label_eng": "Tea house proprietor",
    "label_ka": "揚屋亭主",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/481"
    },{
    "label_eng": "Maid",
    "label_ka": "仲居",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/482"
    },{
    "label_eng": "Pawn shop employee",
    "label_ka": "質屋の男",
    "type": "Character",
    "extra": " from <i>The Battles of Genji and Heike</i>",
    "link": "/ldpd-bunraku/characters/483"
    },{
    "label_eng": "Man-yohime",
    "label_ka": "萬代姫",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/484"
    },{
    "label_eng": "Mosuke Horio",
    "label_ka": "堀尾茂助義晴",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/485"
    },{
    "label_eng": "Tokichi Konoshita",
    "label_ka": "木下藤吉",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/486"
    },{
    "label_eng": "Gorosuke, in fact Kiyotada Kato",
    "label_ka": "鍛冶屋五郎助実は加藤清忠",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/487"
    },{
    "label_eng": "Takematsu",
    "label_ka": "伜竹松",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/488"
    },{
    "label_eng": "Omasa",
    "label_ka": "女房お政",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/489"
    },{
    "label_eng": "Gorosuke's wife",
    "label_ka": "五郎助女房",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/490"
    },{
    "label_eng": "Hayata Nagai",
    "label_ka": "永井早太",
    "type": "Character",
    "extra": " from <i>The Young Cherry Tree</i>",
    "link": "/ldpd-bunraku/characters/491"
    },{
    "label_eng": "Nureginu",
    "label_ka": "腰元濡衣",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/492"
    },{
    "label_eng": "Lady Tokiwai",
    "label_ka": "奥方常盤井",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/493"
    },{
    "label_eng": "Yoshikiyo Murakami",
    "label_ka": "村上義清",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/494"
    },{
    "label_eng": "Blind Katsuyori",
    "label_ka": "盲勝頼",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/495"
    },{
    "label_eng": "Hyobu Itagaki",
    "label_ka": "板垣兵部",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/496"
    },{
    "label_eng": "Minosaku, in fact Takeda Katsuyori",
    "label_ka": "簑作実は武田勝頼",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/497"
    },{
    "label_eng": "Shingen Takeda",
    "label_ka": "武田信玄",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/498"
    },{
    "label_eng": "Kakusuke, a servant",
    "label_ka": "奴角助",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/499"
    },{
    "label_eng": "Hakibeii (Hakubei), a servant",
    "label_ka": "奴掃兵衛",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/500"
    },{
    "label_eng": "Sekibei, in fact Dosan",
    "label_ka": "花守関兵衛実は斎藤道三",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/501"
    },{
    "label_eng": "Kenshin Nagao",
    "label_ka": "長尾謙信",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/502"
    },{
    "label_eng": "Kagekatsu Nagao",
    "label_ka": "長尾景勝",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/503"
    },{
    "label_eng": "Yaegaki",
    "label_ka": "八重垣姫",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/504"
    },{
    "label_eng": "Rokuro",
    "label_ka": "白須賀六郎",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/505"
    },{
    "label_eng": "Kobunji",
    "label_ka": "原小文治",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/506"
    },{
    "label_eng": "Kansuke",
    "label_ka": "山本勘助",
    "type": "Character",
    "extra": " from <i>The Twenty-Four Dutiful Sons</i>",
    "link": "/ldpd-bunraku/characters/507"
    },{
    "label_eng": "Otane",
    "label_ka": "女房お種",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/508"
    },{
    "label_eng": "Ofuji",
    "label_ka": "妹お藤",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/509"
    },{
    "label_eng": "Bunroku",
    "label_ka": "伜文六",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/510"
    },{
    "label_eng": "Gen-emon",
    "label_ka": "宮地源右衛門",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/511"
    },{
    "label_eng": "Kakuzo",
    "label_ka": "中間角蔵",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/512"
    },{
    "label_eng": "Maid",
    "label_ka": "下女",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/513"
    },{
    "label_eng": "Yukaemon",
    "label_ka": "磯部床右衛門",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/514"
    },{
    "label_eng": "Rin",
    "label_ka": "下女りん",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/515"
    },{
    "label_eng": "Hikokuro",
    "label_ka": "小倉彦九郎",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/516"
    },{
    "label_eng": "Sangohei's messanger",
    "label_ka": "三五平使者",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/517"
    },{
    "label_eng": "Yura",
    "label_ka": "妹ゆら",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/518"
    },{
    "label_eng": "Bean curd peddler",
    "label_ka": "豆腐売",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/519"
    },{
    "label_eng": "Stone peddler",
    "label_ka": "石売",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/520"
    },{
    "label_eng": "Young Man",
    "label_ka": "若い者",
    "type": "Character",
    "extra": " from <i>The Drum of the Waves of Horikawa</i>",
    "link": "/ldpd-bunraku/characters/521"
    },{
    "label_eng": "Tamaori",
    "label_ka": "玉織姫",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/522"
    },{
    "label_eng": "Hirayama",
    "label_ka": "平山武者所",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/523"
    },{
    "label_eng": "Atsumori, in fact Kojiro",
    "label_ka": "敦盛実は熊谷小次郎直家",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/524"
    },{
    "label_eng": "Kumagai",
    "label_ka": "熊谷次郎直実",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/525"
    },{
    "label_eng": "Atsumori in the distance",
    "label_ka": "遠見の敦盛",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/526"
    },{
    "label_eng": "Kumagai in the distance",
    "label_ka": "遠見の熊谷",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/527"
    },{
    "label_eng": "Midaroku, in fact Munekiyo",
    "label_ka": "石屋弥陀六実は弥平兵衛宗清",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/528"
    },{
    "label_eng": "Koyuki",
    "label_ka": "娘小雪",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/529"
    },{
    "label_eng": "Fuji-no-tsubone",
    "label_ka": "藤の局(藤の方)",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/530"
    },{
    "label_eng": "Chuta",
    "label_ka": "番場忠太",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/531"
    },{
    "label_eng": "Umpei",
    "label_ka": "須股運平",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/532"
    },{
    "label_eng": "Magosaku",
    "label_ka": "庄屋孫作",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/533"
    },{
    "label_eng": "Sagami",
    "label_ka": "妻相模",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/534"
    },{
    "label_eng": "Gunji",
    "label_ka": "堤軍次",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/535"
    },{
    "label_eng": "Kajiwara",
    "label_ka": "梶原平次景高",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/536"
    },{
    "label_eng": "Yoshitsune Minamoto",
    "label_ka": "源義経",
    "type": "Character",
    "extra": " from <i>The Battle of Ichinotani</i>",
    "link": "/ldpd-bunraku/characters/537"
    },{
    "label_eng": "Shibagaki",
    "label_ka": "母柴垣",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/538"
    },{
    "label_eng": "Otani",
    "label_ka": "娘お谷",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/539"
    },{
    "label_eng": "Matagoro",
    "label_ka": "沢井股五郎",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/540"
    },{
    "label_eng": "Yukie",
    "label_ka": "和田行家",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/541"
    },{
    "label_eng": "Jitsunai",
    "label_ka": "奴実内",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/542"
    },{
    "label_eng": "Dainaiki",
    "label_ka": "誉田大内記",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/543"
    },{
    "label_eng": "Goemon",
    "label_ka": "宇佐見五右衛門",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/544"
    },{
    "label_eng": "Rinzaemon",
    "label_ka": "桜田林左衛門",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/545"
    },{
    "label_eng": "Busuke",
    "label_ka": "石留武助",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/546"
    },{
    "label_eng": "Masaemon",
    "label_ka": "唐木政右衛門",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/547"
    },{
    "label_eng": "Okura",
    "label_ka": "乳母おくら",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/548"
    },{
    "label_eng": "Onochi",
    "label_ka": "娘おのち",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/549"
    },{
    "label_eng": "Page",
    "label_ka": "小姓",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/550"
    },{
    "label_eng": "Heisaku",
    "label_ka": "親平作 (雲助平作)",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/551"
    },{
    "label_eng": "Jubei",
    "label_ka": "呉服屋十兵衛 (重兵衛)",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/552"
    },{
    "label_eng": "Yasubei",
    "label_ka": "荷持安兵衛",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/553"
    },{
    "label_eng": "Oyone",
    "label_ka": "娘お米",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/554"
    },{
    "label_eng": "Magohachi",
    "label_ka": "池添孫八",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/555"
    },{
    "label_eng": "Shizuma",
    "label_ka": "和田志津馬",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/556"
    },{
    "label_eng": "Osode",
    "label_ka": "娘お袖",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/557"
    },{
    "label_eng": "Sukehei",
    "label_ka": "奴助平",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/558"
    },{
    "label_eng": "Gampachi",
    "label_ka": "蛇の目の眼八",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/559"
    },{
    "label_eng": "Kobei's wife",
    "label_ka": "幸兵衛女房",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/560"
    },{
    "label_eng": "Kobei",
    "label_ka": "山田幸兵衛",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/561"
    },{
    "label_eng": "Chief constable",
    "label_ka": "捕手の小頭",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/562"
    },{
    "label_eng": "Messanger Kosuke",
    "label_ka": "歩きの小助",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/563"
    },{
    "label_eng": "Minosuke, Otani's son",
    "label_ka": "伜巳之助",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/564"
    },{
    "label_eng": "Night watchman",
    "label_ka": "夜回り",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/565"
    },{
    "label_eng": "Segawa",
    "label_ka": "傾城瀬川",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/566"
    },{
    "label_eng": "Postman",
    "label_ka": "飛脚",
    "type": "Character",
    "extra": " from <i>The Vendetta in Iga</i>",
    "link": "/ldpd-bunraku/characters/567"
    },{
    "label_eng": "Osaga",
    "label_ka": "柏屋おさが",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/568"
    },{
    "label_eng": "Rustic customer",
    "label_ka": "田舎客",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/569"
    },{
    "label_eng": "Palanquin bearer",
    "label_ka": "駕屋",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/570"
    },{
    "label_eng": "Tea house madam",
    "label_ka": "花車",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/571"
    },{
    "label_eng": "Kaheiji",
    "label_ka": "茶碗屋嘉平次",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/572"
    },{
    "label_eng": "Kaheiji's elder sister",
    "label_ka": "嘉平次姉",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/573"
    },{
    "label_eng": "Ikumatsu",
    "label_ka": "弟幾松",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/574"
    },{
    "label_eng": "Otake",
    "label_ka": "飯炊きお竹",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/575"
    },{
    "label_eng": "Chosaku",
    "label_ka": "印伝屋長作",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/576"
    },{
    "label_eng": "Apprentice",
    "label_ka": "迎いの丁稚",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/577"
    },{
    "label_eng": "Clerk",
    "label_ka": "紺屋の手代",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/578"
    },{
    "label_eng": "Seisuke",
    "label_ka": "若い者清介",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/579"
    },{
    "label_eng": "Gohei",
    "label_ka": "親五兵衛",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/580"
    },{
    "label_eng": "Okiwa",
    "label_ka": "許婚おきわ",
    "type": "Character",
    "extra": " from <i>The Double Suicide at Ikudama</i>",
    "link": "/ldpd-bunraku/characters/581"
    },{
    "label_eng": "Koganosuke",
    "label_ka": "久我之助",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/582"
    },{
    "label_eng": "Hinadori",
    "label_ka": "雛鳥",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/583"
    },{
    "label_eng": "Kogiku",
    "label_ka": "腰元小菊",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/584"
    },{
    "label_eng": "Kikyo",
    "label_ka": "腰元桔梗",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/585"
    },{
    "label_eng": "Gemba",
    "label_ka": "宮越玄蕃",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/586"
    },{
    "label_eng": "Uneme",
    "label_ka": "采女",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/587"
    },{
    "label_eng": "Emperor Tenji",
    "label_ka": "天智帝",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/588"
    },{
    "label_eng": "Kaneaki",
    "label_ka": "大納言兼秋",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/589"
    },{
    "label_eng": "Tankai",
    "label_ka": "藤原淡海",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/590"
    },{
    "label_eng": "Imperial Court messanger",
    "label_ka": "禁庭の使",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/591"
    },{
    "label_eng": "Shibaroku",
    "label_ka": "猟師芝六",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/592"
    },{
    "label_eng": "Sansaku",
    "label_ka": "伜三作",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/593"
    },{
    "label_eng": "Okiji",
    "label_ka": "女房お雉",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/594"
    },{
    "label_eng": "Shin-emon",
    "label_ka": "米屋新右衛門",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/595"
    },{
    "label_eng": "Sugimatsu",
    "label_ka": "伜杉松",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/596"
    },{
    "label_eng": "Official in charge of deer",
    "label_ka": "鹿役人",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/597"
    },{
    "label_eng": "Buddhist devotee",
    "label_ka": "興福寺衆徒",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/598"
    },{
    "label_eng": "Kamatari",
    "label_ka": "藤原鎌足",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/599"
    },{
    "label_eng": "Sadaka",
    "label_ka": "後室定高",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/600"
    },{
    "label_eng": "Kiyozumi",
    "label_ka": "大判事清澄",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/601"
    },{
    "label_eng": "Iruka",
    "label_ka": "蘇我入鹿",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/602"
    },{
    "label_eng": "Yatoji",
    "label_ka": "荒巻弥藤次",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/603"
    },{
    "label_eng": "Messenger",
    "label_ka": "注進",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/604"
    },{
    "label_eng": "Netaro",
    "label_ka": "丁稚子太郎",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/605"
    },{
    "label_eng": "Dozaemon",
    "label_ka": "土左衛門",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/606"
    },{
    "label_eng": "Toroku",
    "label_ka": "藤六",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/607"
    },{
    "label_eng": "Yahei (Nohei)",
    "label_ka": "野平",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/608"
    },{
    "label_eng": "Omiwa's mother",
    "label_ka": "お三輪母",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/609"
    },{
    "label_eng": "Landlord",
    "label_ka": "家主 (家主茂次兵衛)",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/610"
    },{
    "label_eng": "Motome, in fact Tankai Fujiwara",
    "label_ka": "求馬実は藤原淡海",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/611"
    },{
    "label_eng": "Tachibana",
    "label_ka": "橘姫",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/612"
    },{
    "label_eng": "Omiwa",
    "label_ka": "お三輪",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/613"
    },{
    "label_eng": "Bean curd buyer",
    "label_ka": "豆腐買 (豆腐の御用)",
    "type": "Character",
    "extra": " from <i>The Teachings for Women</i>",
    "link": "/ldpd-bunraku/characters/615"
    },{
    "label_eng": "Okon",
    "label_ka": "女郎お紺",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/616"
    },{
    "label_eng": "Manno",
    "label_ka": "仲居万野",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/617"
    },{
    "label_eng": "Mitsugi",
    "label_ka": "福岡貢",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/618"
    },{
    "label_eng": "Kisuke",
    "label_ka": "料理人喜助",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/619"
    },{
    "label_eng": "Iwaji",
    "label_ka": "徳島岩次",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/620"
    },{
    "label_eng": "Kitaroku",
    "label_ka": "藍玉屋北六",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/621"
    },{
    "label_eng": "Oshika",
    "label_ka": "女郎お鹿",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/622"
    },{
    "label_eng": "Night watchman",
    "label_ka": "起番男",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/623"
    },{
    "label_eng": "Waitress",
    "label_ka": "仲居",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/624"
    },{
    "label_eng": "Maid",
    "label_ka": "下女",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/625"
    },{
    "label_eng": "Junior courtesan",
    "label_ka": "小女郎",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/626"
    },{
    "label_eng": "Tea house guest",
    "label_ka": "泊り客",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/627"
    },{
    "label_eng": "Courtesan",
    "label_ka": "相方女郎",
    "type": "Character",
    "extra": " from <i>The Bloodshed at Ise</i>",
    "link": "/ldpd-bunraku/characters/628"
    },{
    "label_eng": "Matasuke",
    "label_ka": "鳥井又助",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/629"
    },{
    "label_eng": "Lord of Taga",
    "label_ka": "多賀大領 (前田大領)",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/630"
    },{
    "label_eng": "Sanzaemon, a page",
    "label_ka": "近習山左衛門",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/631"
    },{
    "label_eng": "Odai, wife of Matasuke",
    "label_ka": "女房お大",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/632"
    },{
    "label_eng": "Tarosaku, a messanger",
    "label_ka": "歩き太郎作",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/633"
    },{
    "label_eng": "Saibei, Proprietor of the tea house Kutsuwa",
    "label_ka": "亭主才兵衛 (くつわの亭主)",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/634"
    },{
    "label_eng": "Motome",
    "label_ka": "谷沢求馬",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/635"
    },{
    "label_eng": "Jirosaku, Village headman",
    "label_ka": "庄屋治郎作",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/636"
    },{
    "label_eng": "Matakichi, son of Matasuke",
    "label_ka": "伜又吉",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/637"
    },{
    "label_eng": "Shoji Yasuda, chief retainer",
    "label_ka": "安田庄司",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/638"
    },{
    "label_eng": "Iwafuji, chief lady-in-waiting",
    "label_ka": "局岩藤",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/639"
    },{
    "label_eng": "Onoe, lady-in-waiting",
    "label_ka": "中老尾上",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/640"
    },{
    "label_eng": "Zenroku, a merchant",
    "label_ka": "鷲の善六",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/641"
    },{
    "label_eng": "Onaka, a maid",
    "label_ka": "腰元お仲(お夏)",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/642"
    },{
    "label_eng": "Ofuyu, a maid",
    "label_ka": "腰元お冬",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/643"
    },{
    "label_eng": "Ohatsu, Onoe's maid",
    "label_ka": "召使お初",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/644"
    },{
    "label_eng": "Danjo, Iwafuji's uncle",
    "label_ka": "伯父弾正",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/645"
    },{
    "label_eng": "Toma",
    "label_ka": "忍び当馬",
    "type": "Character",
    "extra": " from <i>The Color Prints of Kagamiyama</i>",
    "link": "/ldpd-bunraku/characters/646"
    },{
    "label_eng": "Shinzaemon",
    "label_ka": "古郡新左衛門",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/647"
    },{
    "label_eng": "Rokuro",
    "label_ka": "富田六郎",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/648"
    },{
    "label_eng": "Tokimasa",
    "label_ka": "北條時政",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/649"
    },{
    "label_eng": "Page",
    "label_ka": "小姓",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/650"
    },{
    "label_eng": "Tozaburo, in fact Takatsuna",
    "label_ka": "安達藤三郎実は高綱 (藤三郎実は佐々木高綱)",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/651"
    },{
    "label_eng": "Kagaribi",
    "label_ka": "妻篝火",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/652"
    },{
    "label_eng": "Yagoro",
    "label_ka": "土肥弥五郎",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/653"
    },{
    "label_eng": "Okuru",
    "label_ka": "女房おくる",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/654"
    },{
    "label_eng": "Miuranosuke's mother",
    "label_ka": "三浦之助母",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/655"
    },{
    "label_eng": "Orachi",
    "label_ka": "女房おらち",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/656"
    },{
    "label_eng": "Lady-in-waiting Sanuki",
    "label_ka": "讃岐の局",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/657"
    },{
    "label_eng": "Lady-in-waiting Awa",
    "label_ka": "阿波の局",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/658"
    },{
    "label_eng": "Tokihime",
    "label_ka": "北條時姫",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/659"
    },{
    "label_eng": "Miuranosuke",
    "label_ka": "三浦之助",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/660"
    },{
    "label_eng": "Shigarami",
    "label_ka": "腰元柵",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/661"
    },{
    "label_eng": "Sakuragi",
    "label_ka": "腰元桜木",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/662"
    },{
    "label_eng": "Shigure",
    "label_ka": "腰元時雨",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/663"
    },{
    "label_eng": "Gemba",
    "label_ka": "飯盛玄番",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/664"
    },{
    "label_eng": "Yoshitoki",
    "label_ka": "北條義時",
    "type": "Character",
    "extra": " from <i>The Three Generations of Kamakura Shoguns</i>",
    "link": "/ldpd-bunraku/characters/665"
    },{
    "label_eng": "Gompachi",
    "label_ka": "番頭権八",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/666"
    },{
    "label_eng": "Eizaburo's mother (Myosan)",
    "label_ka": "母妙三",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/667"
    },{
    "label_eng": "Eizaburo",
    "label_ka": "大文字屋栄三郎",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/668"
    },{
    "label_eng": "Chubei",
    "label_ka": "手代忠兵衛",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/669"
    },{
    "label_eng": "Apprentice",
    "label_ka": "丁稚",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/670"
    },{
    "label_eng": "Maid",
    "label_ka": "下女",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/671"
    },{
    "label_eng": "Omatsu",
    "label_ka": "嫁お松",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/672"
    },{
    "label_eng": "Sukeemon",
    "label_ka": "万屋助右衛門",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/673"
    },{
    "label_eng": "Denkuro",
    "label_ka": "手代伝九郎",
    "type": "Character",
    "extra": " from <i>The Faithful Wife</i>",
    "link": "/ldpd-bunraku/characters/674"
    },{
    "label_eng": "Tadayoshi",
    "label_ka": "足利直義",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/675"
    },{
    "label_eng": "Moronao",
    "label_ka": "高師直",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/676"
    },{
    "label_eng": "Hangan",
    "label_ka": "塩谷判官",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/677"
    },{
    "label_eng": "Wakasanosuke",
    "label_ka": "桃井若狭助",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/678"
    },{
    "label_eng": "Kaoyo",
    "label_ka": "顔世御前",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/679"
    },{
    "label_eng": "Bannai",
    "label_ka": "鷺坂伴内",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/680"
    },{
    "label_eng": "Honzo",
    "label_ka": "加古川本蔵",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/681"
    },{
    "label_eng": "Kampei",
    "label_ka": "早野勘平",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/682"
    },{
    "label_eng": "Okaru",
    "label_ka": "腰元(遊女,女房, 娘)おかる",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/683"
    },{
    "label_eng": "Chinsai",
    "label_ka": "茶道珍才",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/684"
    },{
    "label_eng": "Rikiya",
    "label_ka": "大星力弥",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/685"
    },{
    "label_eng": "Goemon",
    "label_ka": "原郷右衛門",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/686"
    },{
    "label_eng": "Kudayu",
    "label_ka": "斧九太夫",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/687"
    },{
    "label_eng": "Ishido",
    "label_ka": "石堂右馬丞",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/688"
    },{
    "label_eng": "Yakushiji",
    "label_ka": "薬師寺次郎左衛門",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/689"
    },{
    "label_eng": "Ōboshi Yuranosuke",
    "label_ka": "大星由良助",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/690"
    },{
    "label_eng": "Yagoro",
    "label_ka": "千崎弥五郎",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/691"
    },{
    "label_eng": "Yoichibei",
    "label_ka": "百姓与市兵衛",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/692"
    },{
    "label_eng": "Sadakuro",
    "label_ka": "斧定九郎",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/693"
    },{
    "label_eng": "Yoichibei's wife",
    "label_ka": "与市兵衛女房",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/694"
    },{
    "label_eng": "Saibei",
    "label_ka": "一文字屋才兵衛",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/695"
    },{
    "label_eng": "Yahachi",
    "label_ka": "めっぽう弥八",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/696"
    },{
    "label_eng": "Roku",
    "label_ka": "種ヶ島の六",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/697"
    },{
    "label_eng": "Kakubei",
    "label_ka": "狸の角兵衛",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/698"
    },{
    "label_eng": "Tea house proprietor",
    "label_ka": "一力亭主",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/699"
    },{
    "label_eng": "Jutaro",
    "label_ka": "矢間十太郎",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/700"
    },{
    "label_eng": "Kitahachi",
    "label_ka": "竹森喜太八",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/701"
    },{
    "label_eng": "Heiemon",
    "label_ka": "寺岡平右衛門",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/702"
    },{
    "label_eng": "Yasubei",
    "label_ka": "織部安兵衛",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/703"
    },{
    "label_eng": "Yomoshichi",
    "label_ka": "佐藤与茂七",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/704"
    },{
    "label_eng": "Bungo",
    "label_ka": "大鷲文吾",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/705"
    },{
    "label_eng": "Matanojo",
    "label_ka": "小汐田又之丞",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/706"
    },{
    "label_eng": "Konami",
    "label_ka": "娘小浪",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/707"
    },{
    "label_eng": "Tonase",
    "label_ka": "妻(母)戸無瀬",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/708"
    },{
    "label_eng": "Rin, a maid",
    "label_ka": "下女りん",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/709"
    },{
    "label_eng": "Oishi",
    "label_ka": "妻お石",
    "type": "Character",
    "extra": " from <i>The League of the 47 Ronin</i>",
    "link": "/ldpd-bunraku/characters/710"
    },{
    "label_eng": "Benkei",
    "label_ka": "武蔵坊弁慶",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/711"
    },{
    "label_eng": "Togashi",
    "label_ka": "富樫左衛門 (富樫之介正広)",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/712"
    },{
    "label_eng": "Yoshitsune Minamoto",
    "label_ka": "源義経",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/713"
    },{
    "label_eng": "Ise",
    "label_ka": "伊勢三郎",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/714"
    },{
    "label_eng": "Suruga",
    "label_ka": "駿河次郎",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/715"
    },{
    "label_eng": "Hachiro Kataoka",
    "label_ka": "片岡八郎",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/716"
    },{
    "label_eng": "Hitachibo",
    "label_ka": "常陸坊 (常陸坊海尊)",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/717"
    },{
    "label_eng": "Barrier guards",
    "label_ka": "番卒",
    "type": "Character",
    "extra": " from <i>The Subscription List</i>",
    "link": "/ldpd-bunraku/characters/718"
    },{
    "label_eng": "Yoshihiro",
    "label_ka": "大内之助義弘",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/719"
    },{
    "label_eng": "Hayato",
    "label_ka": "関口隼人",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/720"
    },{
    "label_eng": "Yushide",
    "label_ka": "娘ゆうしで",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/721"
    },{
    "label_eng": "Shindosaemon",
    "label_ka": "多々羅新洞左衛門",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/722"
    },{
    "label_eng": "Yoshihiro's wife",
    "label_ka": "大内の御台",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/723"
    },{
    "label_eng": "Zenkyo Sue",
    "label_ka": "陶全姜",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/724"
    },{
    "label_eng": "Daigaku Tomokata",
    "label_ka": "友方大学",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/725"
    },{
    "label_eng": "Shikibu Kaigetsu",
    "label_ka": "海月式部",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/726"
    },{
    "label_eng": "Taro",
    "label_ka": "監物太郎",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/727"
    },{
    "label_eng": "Makinokata",
    "label_ka": "御台牧の方",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/728"
    },{
    "label_eng": "Ishidomaru",
    "label_ka": "石動丸",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/729"
    },{
    "label_eng": "Hashidate",
    "label_ka": "妻橋立",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/730"
    },{
    "label_eng": "Onnanosuke",
    "label_ka": "女之助",
    "type": "Character",
    "extra": " from <i>The Priest Karukaya and the Souvenir of Tsukushi</i>",
    "link": "/ldpd-bunraku/characters/731"
    },{
    "label_eng": "Shundo Sukedayu",
    "label_ka": "春藤助太夫",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/732"
    },{
    "label_eng": "Sahei, Suketayu's servant",
    "label_ka": "若党佐兵衛",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/733"
    },{
    "label_eng": "Dempachi, a broker",
    "label_ka": "熊手の伝八",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/734"
    },{
    "label_eng": "Rokuroemon Sudo",
    "label_ka": "須藤六郎右衛門",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/735"
    },{
    "label_eng": "Jinroku Hikosaka",
    "label_ka": "彦坂甚六",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/736"
    },{
    "label_eng": "Oteru, a dancing girl",
    "label_ka": "舞子おてる",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/737"
    },{
    "label_eng": "Katsuno, a dancing girl",
    "label_ka": "舞子かつの",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/738"
    },{
    "label_eng": "Ikuyo, a dancing girl",
    "label_ka": "舞子いく世",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/739"
    },{
    "label_eng": "Suketaro Shundo",
    "label_ka": "春藤助太郎",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/740"
    },{
    "label_eng": "Shinshichi Shundo",
    "label_ka": "春藤新七",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/741"
    },{
    "label_eng": "Page",
    "label_ka": "小坊主",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/742"
    },{
    "label_eng": "Oshimo, Rokuroemon's sister",
    "label_ka": "須藤妹お霜",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/743"
    },{
    "label_eng": "Oyana, a cook",
    "label_ka": "賄おやな",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/744"
    },{
    "label_eng": "Okatsu, a housewife",
    "label_ka": "女房おかつ",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/745"
    },{
    "label_eng": "Otsuya, a housewife",
    "label_ka": "女房おつや",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/746"
    },{
    "label_eng": "Jiroemon Shundo",
    "label_ka": "春藤次郎右衛門",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/747"
    },{
    "label_eng": "Oharu, Jiroemon's wife",
    "label_ka": "妻お春",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/748"
    },{
    "label_eng": "Sukedayu's wife",
    "label_ka": "助太夫妻",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/749"
    },{
    "label_eng": "Ihei, a servant",
    "label_ka": "若党伊兵衛",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/750"
    },{
    "label_eng": "Oshimo's mother",
    "label_ka": "須藤母",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/751"
    },{
    "label_eng": "Udaemon (Utaemon) Kamura",
    "label_ka": "加村宇田右衛門",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/752"
    },{
    "label_eng": "Yoroku",
    "label_ka": "与六",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/753"
    },{
    "label_eng": "Buemon Takaichi",
    "label_ka": "高市武右衛門",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/754"
    },{
    "label_eng": "Shonosuke, Buemon's son",
    "label_ka": "伜庄之助",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/755"
    },{
    "label_eng": "Samurai",
    "label_ka": "修行者",
    "type": "Character",
    "extra": " from <i>The Vendetta by a Samurai in Rags</i>",
    "link": "/ldpd-bunraku/characters/756"
    },{
    "label_eng": "Chokichi",
    "label_ka": "丁稚長吉",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/757"
    },{
    "label_eng": "Ohan",
    "label_ka": "娘お半",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/758"
    },{
    "label_eng": "Rin",
    "label_ka": "下女りん",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/759"
    },{
    "label_eng": "Choemon",
    "label_ka": "帯屋長右衛門",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/760"
    },{
    "label_eng": "Proprietor of the inn",
    "label_ka": "宿屋亭主",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/761"
    },{
    "label_eng": "Maid at the debaya inn",
    "label_ka": "出刃屋の女中",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/762"
    },{
    "label_eng": "Okinu",
    "label_ka": "女房お絹",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/763"
    },{
    "label_eng": "Gihei",
    "label_ka": "弟儀兵衛",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/764"
    },{
    "label_eng": "Otose",
    "label_ka": "母おとせ",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/765"
    },{
    "label_eng": "Hansai",
    "label_ka": "親繁斎",
    "type": "Character",
    "extra": " from <i>The Love of Ohan and Choemon</i>",
    "link": "/ldpd-bunraku/characters/766"
    },{
    "label_eng": "Oyumi",
    "label_ka": "女房お弓",
    "type": "Character",
    "extra": " from <i>The Infant Pilgrim</i>",
    "link": "/ldpd-bunraku/characters/767"
    },{
    "label_eng": "Postman",
    "label_ka": "飛脚",
    "type": "Character",
    "extra": " from <i>The Infant Pilgrim</i>",
    "link": "/ldpd-bunraku/characters/768"
    },{
    "label_eng": "Otsuru",
    "label_ka": "娘おつる",
    "type": "Character",
    "extra": " from <i>The Infant Pilgrim</i>",
    "link": "/ldpd-bunraku/characters/769"
    },{
    "label_eng": "Jurobei",
    "label_ka": "阿波十郎兵衛",
    "type": "Character",
    "extra": " from <i>The Infant Pilgrim</i>",
    "link": "/ldpd-bunraku/characters/770"
    },{
    "label_eng": "Shurinosuke",
    "label_ka": "修理之介",
    "type": "Character",
    "extra": " from <i>The Stuttering Painter</i>",
    "link": "/ldpd-bunraku/characters/771"
    },{
    "label_eng": "Mitsunobu",
    "label_ka": "土佐将監(光信）",
    "type": "Character",
    "extra": " from <i>The Stuttering Painter</i>",
    "link": "/ldpd-bunraku/characters/772"
    },{
    "label_eng": "Mitsunobu's wife",
    "label_ka": "将監奥方",
    "type": "Character",
    "extra": " from <i>The Stuttering Painter</i>",
    "link": "/ldpd-bunraku/characters/773"
    },{
    "label_eng": "Matahei",
    "label_ka": "吃又平 (浮世又平 後に 土佐光起)",
    "type": "Character",
    "extra": " from <i>The Stuttering Painter</i>",
    "link": "/ldpd-bunraku/characters/774"
    },{
    "label_eng": "Otoku",
    "label_ka": "女房おとく",
    "type": "Character",
    "extra": " from <i>The Stuttering Painter</i>",
    "link": "/ldpd-bunraku/characters/775"
    },{
    "label_eng": "Utanosuke",
    "label_ka": "雅楽之介 (狩野雅楽之助)",
    "type": "Character",
    "extra": " from <i>The Stuttering Painter</i>",
    "link": "/ldpd-bunraku/characters/776"
    },{
    "label_eng": "Chuzaburo's wife (Chuza's wife)",
    "label_ka": "忠三女房",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/777"
    },{
    "label_eng": "Hachiemon",
    "label_ka": "八右衛門",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/778"
    },{
    "label_eng": "Chubei",
    "label_ka": "亀屋忠兵衛",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/779"
    },{
    "label_eng": "Umegawa",
    "label_ka": "傾城(遊女, 槌屋) 梅川",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/780"
    },{
    "label_eng": "Mizuemon",
    "label_ka": "樋の口の水右衛門",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/781"
    },{
    "label_eng": "Dengababa",
    "label_ka": "伝が婆",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/782"
    },{
    "label_eng": "Okizukin",
    "label_ka": "置頭巾",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/783"
    },{
    "label_eng": "Tojibei",
    "label_ka": "弦掛の藤治兵衛",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/784"
    },{
    "label_eng": "Doan",
    "label_ka": "道庵",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/785"
    },{
    "label_eng": "Magoemon",
    "label_ka": "親孫右衛門",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/786"
    },{
    "label_eng": "Chief constable",
    "label_ka": "捕手小頭",
    "type": "Character",
    "extra": " from <i>The Amorous Courier</i>",
    "link": "/ldpd-bunraku/characters/787"
    },{
    "label_eng": "Komaki",
    "label_ka": "小巻",
    "type": "Character",
    "extra": " from <i>The Butterfly Couple in the Other World</i>",
    "link": "/ldpd-bunraku/characters/788"
    },{
    "label_eng": "Sukekuni",
    "label_ka": "助国",
    "type": "Character",
    "extra": " from <i>The Butterfly Couple in the Other World</i>",
    "link": "/ldpd-bunraku/characters/789"
    },{
    "label_eng": "Kiyomori",
    "label_ka": "平清盛",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/790"
    },{
    "label_eng": "Hiromori",
    "label_ka": "播磨大掾広盛",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/791"
    },{
    "label_eng": "Tankai Kasahara",
    "label_ka": "笠原湛海",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/792"
    },{
    "label_eng": "Minazuru",
    "label_ka": "皆鶴姫",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/793"
    },{
    "label_eng": "Kobata",
    "label_ka": "腰元木幡",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/794"
    },{
    "label_eng": "Chienai, in fact Kisanta",
    "label_ka": "奴智恵内実は吉岡鬼三太",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/795"
    },{
    "label_eng": "Kiichi",
    "label_ka": "吉岡鬼一法眼",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/796"
    },{
    "label_eng": "Torazo, in fact Ushiwakamaru",
    "label_ka": "奴虎蔵実は牛若丸",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/797"
    },{
    "label_eng": "Benkei",
    "label_ka": "武蔵坊弁慶",
    "type": "Character",
    "extra": " from <i>Kiichi's Book of Strategy</i>",
    "link": "/ldpd-bunraku/characters/798"
    },{
    "label_eng": "Maiko",
    "label_ka": "舞妓",
    "type": "Character",
    "extra": " from <i>The Fulling Block and the Bonfire</i>",
    "link": "/ldpd-bunraku/characters/799"
    },{
    "label_eng": "Woman fulling cloth",
    "label_ka": "砧の女",
    "type": "Character",
    "extra": " from <i>The Fulling Block and the Bonfire</i>",
    "link": "/ldpd-bunraku/characters/800"
    },{
    "label_eng": "Asahina",
    "label_ka": "朝比奈三郎義秀",
    "type": "Character",
    "extra": " from <i>The Pine Tree on the River Bank</i>",
    "link": "/ldpd-bunraku/characters/801"
    },{
    "label_eng": "Hyoe",
    "label_ka": "飯原兵衛",
    "type": "Character",
    "extra": " from <i>The Pine Tree on the River Bank</i>",
    "link": "/ldpd-bunraku/characters/802"
    },{
    "label_eng": "Fujimaki",
    "label_ka": "妻藤巻",
    "type": "Character",
    "extra": " from <i>The Pine Tree on the River Bank</i>",
    "link": "/ldpd-bunraku/characters/803"
    },{
    "label_eng": "Yomosaku",
    "label_ka": "百姓与茂作",
    "type": "Character",
    "extra": " from <i>The Pine Tree on the River Bank</i>",
    "link": "/ldpd-bunraku/characters/804"
    },{
    "label_eng": "Hayatonosuke",
    "label_ka": "飯原隼人之助",
    "type": "Character",
    "extra": " from <i>The Pine Tree on the River Bank</i>",
    "link": "/ldpd-bunraku/characters/805"
    },{
    "label_eng": "Osoyo",
    "label_ka": "娘おそよ",
    "type": "Character",
    "extra": " from <i>The Pine Tree on the River Bank</i>",
    "link": "/ldpd-bunraku/characters/806"
    },{
    "label_eng": "Tsukasa",
    "label_ka": "司姫",
    "type": "Character",
    "extra": " from <i>The Pine Tree on the River Bank</i>",
    "link": "/ldpd-bunraku/characters/807"
    },{
    "label_eng": "Kakunai, a servant",
    "label_ka": "奴角内",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/810"
    },{
    "label_eng": "Sekinai, a servant",
    "label_ka": "奴関内",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/811"
    },{
    "label_eng": "Okoma",
    "label_ka": "娘お駒",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/812"
    },{
    "label_eng": "Saizaburo Obana",
    "label_ka": "尾花才三郎",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/813"
    },{
    "label_eng": "Rokuroemon Obana",
    "label_ka": "尾花六郎右衛門",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/814"
    },{
    "label_eng": "Johachi",
    "label_ka": "番頭丈八",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/815"
    },{
    "label_eng": "Okiku",
    "label_ka": "下女おきく",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/816"
    },{
    "label_eng": "Santa, an apprentice",
    "label_ka": "丁稚三太",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/817"
    },{
    "label_eng": "Shobei, Okoma's father",
    "label_ka": "城木屋庄兵衛",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/818"
    },{
    "label_eng": "Tsukudaya Kizo",
    "label_ka": "佃屋喜蔵",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/819"
    },{
    "label_eng": "Shobei's wife",
    "label_ka": "城木屋女房 (庄兵衛女房)",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/820"
    },{
    "label_eng": "Yatoda Tsutsumi",
    "label_ka": "堤弥藤太",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/821"
    },{
    "label_eng": "Watchman",
    "label_ka": "番太",
    "type": "Character",
    "extra": " from <i>The Love-Inspired Murder</i>",
    "link": "/ldpd-bunraku/characters/822"
    },{
    "label_eng": "Saemon Yurugi",
    "label_ka": "由留木左衛門",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/823"
    },{
    "label_eng": "Sanai Sagisaka",
    "label_ka": "鷺坂左内",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/824"
    },{
    "label_eng": "Yosabei Date",
    "label_ka": "伊達与三兵衛",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/825"
    },{
    "label_eng": "Ohana, a maid",
    "label_ka": "腰元お花",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/826"
    },{
    "label_eng": "Oharu, a maid",
    "label_ka": "腰元お春",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/827"
    },{
    "label_eng": "Oyuki, a maid",
    "label_ka": "腰元お雪",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/828"
    },{
    "label_eng": "Shigenoi",
    "label_ka": "乳人重の井",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/829"
    },{
    "label_eng": "Priest",
    "label_ka": "脇僧",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/830"
    },{
    "label_eng": "Sadanoshin Takemura",
    "label_ka": "竹村定之進",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/831"
    },{
    "label_eng": "Hachizo, a pack horse driver",
    "label_ka": "馬方八蔵",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/832"
    },{
    "label_eng": "Jirosaku, a pack horse driver",
    "label_ka": "馬方治郎作",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/833"
    },{
    "label_eng": "Hachizo's mother",
    "label_ka": "八蔵の母",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/834"
    },{
    "label_eng": "Rice dealer",
    "label_ka": "掛乞米屋",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/835"
    },{
    "label_eng": "Cloth dealer",
    "label_ka": "掛乞布屋",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/836"
    },{
    "label_eng": "Yonosuke",
    "label_ka": "伜与之助",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/837"
    },{
    "label_eng": "Keimasa, a blind masseur",
    "label_ka": "座頭慶政 (座頭慶政実は伊達与八郎)",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/838"
    },{
    "label_eng": "Yaheiji (Happeiji) Washizuka",
    "label_ka": "鷲塚八平次",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/839"
    },{
    "label_eng": "Highway robber",
    "label_ka": "悪者",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/840"
    },{
    "label_eng": "Shirabe",
    "label_ka": "調姫",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/841"
    },{
    "label_eng": "Ofuku, a maid",
    "label_ka": "腰元お福",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/842"
    },{
    "label_eng": "Dancer",
    "label_ka": "踊り子",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/843"
    },{
    "label_eng": "Transport manager",
    "label_ka": "宰領",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/844"
    },{
    "label_eng": "Yasazaemon Honda",
    "label_ka": "本田弥三左衛門",
    "type": "Character",
    "extra": " from <i>The Two-Colored Reins</i>",
    "link": "/ldpd-bunraku/characters/845"
    },{
    "label_eng": "The Inari God",
    "label_ka": "老翁実は稲荷明神",
    "type": "Character",
    "extra": " from <i>Kokaji the Swordsmith</i>",
    "link": "/ldpd-bunraku/characters/846"
    },{
    "label_eng": "Munechika",
    "label_ka": "三条小鍛冶宗近",
    "type": "Character",
    "extra": " from <i>Kokaji the Swordsmith</i>",
    "link": "/ldpd-bunraku/characters/847"
    },{
    "label_eng": "Michinari",
    "label_ka": "勅使道成",
    "type": "Character",
    "extra": " from <i>Kokaji the Swordsmith</i>",
    "link": "/ldpd-bunraku/characters/848"
    },{
    "label_eng": "Emperor Shisoretsu",
    "label_ka": "大明皇帝",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/849"
    },{
    "label_eng": "Ri Toten",
    "label_ka": "右軍将李蹈天",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/850"
    },{
    "label_eng": "Prince Bairoku",
    "label_ka": "使者梅勒王",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/851"
    },{
    "label_eng": "Go Sankei",
    "label_ka": "司馬将軍呉三桂",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/852"
    },{
    "label_eng": "Princess Sendan",
    "label_ka": "栴檀皇女",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/853"
    },{
    "label_eng": "Ryukakun",
    "label_ka": "柳哥君",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/854"
    },{
    "label_eng": "An Taijin",
    "label_ka": "安大人",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/855"
    },{
    "label_eng": "Watonai",
    "label_ka": "和藤内",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/856"
    },{
    "label_eng": "Komutsu",
    "label_ka": "女房小むつ",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/857"
    },{
    "label_eng": "Ro Ikkan",
    "label_ka": "鄭芝龍老一官",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/858"
    },{
    "label_eng": "Ro Ikkan's wife",
    "label_ka": "老一官妻",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/859"
    },{
    "label_eng": "Kinshojo",
    "label_ka": "錦祥女",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/860"
    },{
    "label_eng": "Gojogun Kanki",
    "label_ka": "五常軍甘輝",
    "type": "Character",
    "extra": " from <i>The Battle of Coxinga</i>",
    "link": "/ldpd-bunraku/characters/861"
    },{
    "label_eng": "Omodakahime",
    "label_ka": "沢瀉姫",
    "type": "Character",
    "extra": " from <i>The Pregnant Mountain Ogress (Heroine)</i>",
    "link": "/ldpd-bunraku/characters/862"
    },{
    "label_eng": "Lady Fujinami",
    "label_ka": "局藤浪",
    "type": "Character",
    "extra": " from <i>The Pregnant Mountain Ogress (Heroine)</i>",
    "link": "/ldpd-bunraku/characters/863"
    },{
    "label_eng": "Sarashina",
    "label_ka": "腰元更科",
    "type": "Character",
    "extra": " from <i>The Pregnant Mountain Ogress (Heroine)</i>",
    "link": "/ldpd-bunraku/characters/864"
    },{
    "label_eng": "Kamon, a maid",
    "label_ka": "腰元歌門",
    "type": "Character",
    "extra": " from <i>The Pregnant Mountain Ogress (Heroine)</i>",
    "link": "/ldpd-bunraku/characters/865"
    },{
    "label_eng": "Genshichi, in fact Tokiyuki",
    "label_ka": "煙草屋源七実は坂田蔵人時行",
    "type": "Character",
    "extra": " from <i>The Pregnant Mountain Ogress (Heroine)</i>",
    "link": "/ldpd-bunraku/characters/866"
    },{
    "label_eng": "Yaegiri",
    "label_ka": "荻野屋八重桐",
    "type": "Character",
    "extra": " from <i>The Pregnant Mountain Ogress (Heroine)</i>",
    "link": "/ldpd-bunraku/characters/867"
    },{
    "label_eng": "Taro Ota",
    "label_ka": "太田太郎",
    "type": "Character",
    "extra": " from <i>The Pregnant Mountain Ogress (Heroine)</i>",
    "link": "/ldpd-bunraku/characters/868"
    },{
    "label_eng": "Tayu",
    "label_ka": "太夫",
    "type": "Character",
    "extra": " from <i>The Celebration of Housing Starts</i>",
    "link": "/ldpd-bunraku/characters/869"
    },{
    "label_eng": "Saizo",
    "label_ka": "才三",
    "type": "Character",
    "extra": " from <i>The Celebration of Housing Starts</i>",
    "link": "/ldpd-bunraku/characters/870"
    },{
    "label_eng": "Oume",
    "label_ka": "娘お梅",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/871"
    },{
    "label_eng": "Tazaemon",
    "label_ka": "手代太左衛門",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/872"
    },{
    "label_eng": "Seijuro",
    "label_ka": "手代清十郎",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/873"
    },{
    "label_eng": "Hanroku",
    "label_ka": "小半の親方",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/874"
    },{
    "label_eng": "Sajibei (Sajihei)",
    "label_ka": "親佐治兵衛",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/875"
    },{
    "label_eng": "Onatsu",
    "label_ka": "娘お夏",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/876"
    },{
    "label_eng": "Okane",
    "label_ka": "母おかね",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/877"
    },{
    "label_eng": "Tokujiro",
    "label_ka": "徳次郎",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/878"
    },{
    "label_eng": "Kohan",
    "label_ka": "女郎小半",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/879"
    },{
    "label_eng": "Tokuemon",
    "label_ka": "親徳右衛門",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/880"
    },{
    "label_eng": "Chokichi",
    "label_ka": "丁稚長吉",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/881"
    },{
    "label_eng": "Omatsu",
    "label_ka": "下女お松",
    "type": "Character",
    "extra": " from <i>The Eternal Love of Onatsu and Seijurō</i>",
    "link": "/ldpd-bunraku/characters/882"
    },{
    "label_eng": "Senzai",
    "label_ka": "千歳",
    "type": "Character",
    "extra": " from <i>The Dance of Sambaso</i>",
    "link": "/ldpd-bunraku/characters/883"
    },{
    "label_eng": "Okina",
    "label_ka": "翁",
    "type": "Character",
    "extra": " from <i>The Dance of Sambaso</i>",
    "link": "/ldpd-bunraku/characters/884"
    },{
    "label_eng": "Sambaso",
    "label_ka": "三番叟",
    "type": "Character",
    "extra": " from <i>The Dance of Sambaso</i>",
    "link": "/ldpd-bunraku/characters/885"
    },{
    "label_eng": "Otomobo",
    "label_ka": "大伴坊",
    "type": "Character",
    "extra": " from <i>The Enticed High Priest</i>",
    "link": "/ldpd-bunraku/characters/886"
    },{
    "label_eng": "Azumibo",
    "label_ka": "安曇坊",
    "type": "Character",
    "extra": " from <i>The Enticed High Priest</i>",
    "link": "/ldpd-bunraku/characters/887"
    },{
    "label_eng": "Kume-no-Sennin",
    "label_ka": "粂仙人",
    "type": "Character",
    "extra": " from <i>The Enticed High Priest</i>",
    "link": "/ldpd-bunraku/characters/888"
    },{
    "label_eng": "Hanamasu",
    "label_ka": "花ます",
    "type": "Character",
    "extra": " from <i>The Enticed High Priest</i>",
    "link": "/ldpd-bunraku/characters/889"
    },{
    "label_eng": "Kikuno",
    "label_ka": "桜風呂の菊野",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/890"
    },{
    "label_eng": "Okishi",
    "label_ka": "仲居お岸",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/891"
    },{
    "label_eng": "Kojoro, a maid",
    "label_ka": "小女郎",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/892"
    },{
    "label_eng": "Iheita",
    "label_ka": "若党伊平太",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/893"
    },{
    "label_eng": "Hatsuemon",
    "label_ka": "八柴初右衛門",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/894"
    },{
    "label_eng": "Nisaburo",
    "label_ka": "絵屋仁三郎",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/895"
    },{
    "label_eng": "Chushichi (Tadashichi), a jester",
    "label_ka": "太鼓持忠七",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/896"
    },{
    "label_eng": "Tea house proprietor",
    "label_ka": "大重の亭主",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/897"
    },{
    "label_eng": "Gennosuke",
    "label_ka": "弟源之助",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/898"
    },{
    "label_eng": "Servant",
    "label_ka": "迎いの奴",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/899"
    },{
    "label_eng": "Omisu",
    "label_ka": "許嫁おみす",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/900"
    },{
    "label_eng": "Busuke",
    "label_ka": "悪者武助",
    "type": "Character",
    "extra": " from <i>The Murder in Revenge</i>",
    "link": "/ldpd-bunraku/characters/901"
    },{
    "label_eng": "Kizaemon",
    "label_ka": "吉田屋喜左衛門",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/902"
    },{
    "label_eng": "Otsuru, a maid",
    "label_ka": "仲居お鶴",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/903"
    },{
    "label_eng": "Okame, a maid",
    "label_ka": "仲居お亀",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/904"
    },{
    "label_eng": "Gondayu",
    "label_ka": "権太夫",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/905"
    },{
    "label_eng": "Shishidayu",
    "label_ka": "獅子太夫",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/906"
    },{
    "label_eng": "Izaemon",
    "label_ka": "藤屋伊左衛門",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/907"
    },{
    "label_eng": "Okisa, Kizaemon's wife",
    "label_ka": "女房おきさ",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/908"
    },{
    "label_eng": "Yugiri",
    "label_ka": "扇屋夕霧",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/909"
    },{
    "label_eng": "Professional jester",
    "label_ka": "太鼓持",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/910"
    },{
    "label_eng": "Little girl attendant",
    "label_ka": "禿",
    "type": "Character",
    "extra": " from <i>The Romance in the Gay Quarters</i>",
    "link": "/ldpd-bunraku/characters/911"
    },{
    "label_eng": "Tokutayu (Tokudayu)",
    "label_ka": "祖父徳太夫",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/912"
    },{
    "label_eng": "Kosen",
    "label_ka": "祖母小仙",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/913"
    },{
    "label_eng": "Dumpling peddler",
    "label_ka": "団子売",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/914"
    },{
    "label_eng": "Fugitive Warrior",
    "label_ka": "落武者",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/915"
    },{
    "label_eng": "Firewood gatherer (woodcutter)",
    "label_ka": "柴刈男",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/916"
    },{
    "label_eng": "Otowa",
    "label_ka": "女房おとわ",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/917"
    },{
    "label_eng": "Sentaro",
    "label_ka": "伜千太郎",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/918"
    },{
    "label_eng": "Utsunomiya Kintsuna",
    "label_ka": "宇都宮公綱",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/919"
    },{
    "label_eng": "Teriha",
    "label_ka": "妻照葉",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/920"
    },{
    "label_eng": "Midori",
    "label_ka": "娘みどり",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/921"
    },{
    "label_eng": "Masashige Kusunoki",
    "label_ka": "楠正成",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/922"
    },{
    "label_eng": "Messenger",
    "label_ka": "注進",
    "type": "Character",
    "extra": " from <i>The Old Tale of Kusunoki</i>",
    "link": "/ldpd-bunraku/characters/923"
    },{
    "label_eng": "Yappachi",
    "label_ka": "やっ八(八作)",
    "type": "Character",
    "extra": " from <i>The Dancing Mushrooms</i>",
    "link": "/ldpd-bunraku/characters/924"
    },{
    "label_eng": "Kamagoro",
    "label_ka": "鎌五郎",
    "type": "Character",
    "extra": " from <i>The Dancing Mushrooms</i>",
    "link": "/ldpd-bunraku/characters/925"
    },{
    "label_eng": "Ominaeshi",
    "label_ka": "小侍従女郎花",
    "type": "Character",
    "extra": " from <i>The Dancing Mushrooms</i>",
    "link": "/ldpd-bunraku/characters/926"
    },{
    "label_eng": "Matsuomaru",
    "label_ka": "侍童松王丸",
    "type": "Character",
    "extra": " from <i>The Dancing Mushrooms</i>",
    "link": "/ldpd-bunraku/characters/927"
    },{
    "label_eng": "Priest",
    "label_ka": "山法師",
    "type": "Character",
    "extra": " from <i>The Dancing Mushrooms</i>",
    "link": "/ldpd-bunraku/characters/928"
    },{
    "label_eng": "Nun",
    "label_ka": "尼",
    "type": "Character",
    "extra": " from <i>The Dancing Mushrooms</i>",
    "link": "/ldpd-bunraku/characters/929"
    },{
    "label_eng": "Kowakubi",
    "label_ka": "武蔵の強頸",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/930"
    },{
    "label_eng": "Kirara",
    "label_ka": "きらら",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/931"
    },{
    "label_eng": "Yukimune, Imperial messenger",
    "label_ka": "勅使葛城の行宗",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/932"
    },{
    "label_eng": "Koromonogo, Head of upper village",
    "label_ka": "連衫子",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/933"
    },{
    "label_eng": "Kawachinosuke",
    "label_ka": "河内介",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/934"
    },{
    "label_eng": "Koen",
    "label_ka": "端下女小えん",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/935"
    },{
    "label_eng": "Hillbilly",
    "label_ka": "山男",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/936"
    },{
    "label_eng": "Takemaro",
    "label_ka": "竹麿",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/937"
    },{
    "label_eng": "White-robed priest",
    "label_ka": "白衣の行人",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/938"
    },{
    "label_eng": "Yokoshiba",
    "label_ka": "執事横芝",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/939"
    },{
    "label_eng": "Queer-shaped man",
    "label_ka": "異形の男",
    "type": "Character",
    "extra": " from <i>The Story of Manda Ponds</i>",
    "link": "/ldpd-bunraku/characters/940"
    },{
    "label_eng": "Tayu",
    "label_ka": "太夫",
    "type": "Character",
    "extra": " from <i>The Street Entertainers</i>",
    "link": "/ldpd-bunraku/characters/941"
    },{
    "label_eng": "Saizo",
    "label_ka": "才蔵",
    "type": "Character",
    "extra": " from <i>The Street Entertainers</i>",
    "link": "/ldpd-bunraku/characters/942"
    },{
    "label_eng": "Feudal lord",
    "label_ka": "大名",
    "type": "Character",
    "extra": " from <i>The Story of Matsukaza and Murasame</i>",
    "link": "/ldpd-bunraku/characters/943"
    },{
    "label_eng": "Retainer",
    "label_ka": "太郎冠者",
    "type": "Character",
    "extra": " from <i>The Story of Matsukaza and Murasame</i>",
    "link": "/ldpd-bunraku/characters/944"
    },{
    "label_eng": "Monkey trainer",
    "label_ka": "猿曳",
    "type": "Character",
    "extra": " from <i>The Story of Matsukaza and Murasame</i>",
    "link": "/ldpd-bunraku/characters/945"
    },{
    "label_eng": "Kasane",
    "label_ka": "累",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/946"
    },{
    "label_eng": "Kinugawa, later known as Yoemon",
    "label_ka": "絹川谷蔵後に与右衛門",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/947"
    },{
    "label_eng": "Takao's ghost",
    "label_ka": "高尾の亡霊",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/948"
    },{
    "label_eng": "Sabu",
    "label_ka": "豆腐屋(兄)三婦",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/949"
    },{
    "label_eng": "Yonokichi",
    "label_ka": "百姓与之吉",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/950"
    },{
    "label_eng": "Okoma",
    "label_ka": "お駒",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/951"
    },{
    "label_eng": "Kingoro",
    "label_ka": "金五郎",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/952"
    },{
    "label_eng": "Brothel owner",
    "label_ka": "女郎屋亭主",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/953"
    },{
    "label_eng": "Utakata",
    "label_ka": "歌潟姫",
    "type": "Character",
    "extra": " from <i>The Story of Kasane</i>",
    "link": "/ldpd-bunraku/characters/954"
    },{
    "label_eng": "Masaoka",
    "label_ka": "乳人政岡",
    "type": "Character",
    "extra": " from <i>The Trouble in the Date Household</i>",
    "link": "/ldpd-bunraku/characters/955"
    },{
    "label_eng": "Tsurukiyo",
    "label_ka": "鶴喜代君",
    "type": "Character",
    "extra": " from <i>The Trouble in the Date Household</i>",
    "link": "/ldpd-bunraku/characters/956"
    },{
    "label_eng": "Senmatsu",
    "label_ka": "千松",
    "type": "Character",
    "extra": " from <i>The Trouble in the Date Household</i>",
    "link": "/ldpd-bunraku/characters/957"
    },{
    "label_eng": "Yashio",
    "label_ka": "八汐",
    "type": "Character",
    "extra": " from <i>The Trouble in the Date Household</i>",
    "link": "/ldpd-bunraku/characters/958"
    },{
    "label_eng": "Okinoi",
    "label_ka": "沖の井",
    "type": "Character",
    "extra": " from <i>The Trouble in the Date Household</i>",
    "link": "/ldpd-bunraku/characters/959"
    },{
    "label_eng": "Komaki",
    "label_ka": "小巻",
    "type": "Character",
    "extra": " from <i>The Trouble in the Date Household</i>",
    "link": "/ldpd-bunraku/characters/960"
    },{
    "label_eng": "Secret agent",
    "label_ka": "忍び",
    "type": "Character",
    "extra": " from <i>The Trouble in the Date Household</i>",
    },{
    "label_eng": "Lady Sakae",