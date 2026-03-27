import React, { useState, useEffect } from 'react';
import {
  Heart,
  Lightbulb,
  Users,
  School,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Target,
  BookOpen,
  Leaf,
  Smile,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-orange-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-800 text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-orange-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-orange-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
};
export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    "https://github.com/chenghua0216/figures/blob/main/DSC00578.jpg?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/DSC00244.jpg?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/DSC00412.jpg?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/DSC09618.jpg?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/DSC09703.jpg?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/R0006780.JPG?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/R0008773.JPG?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/R0006640.JPG?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/R0007958.JPG?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/PXL_20260106_020617985.jpg?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/R0007945.JPG?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/DSC00742.jpg?raw=true",
    "https://github.com/chenghua0216/figures/blob/main/PXL_20260116_040011531.jpg?raw=true"
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);
  const faqs = [
    {
      q: "哪些學校或組織可以申請這個計畫?",
      a: "符合以下任一條件即可申請:",
1. 教育部認定之極偏、特偏、偏遠或非山非市國小。
2. 全校學生人數 100 人以下之國小。
3. 致力於偏鄉教育之非營利教育機構或團隊(依個案審查)。"
    },
    {
      q: "參加這個計畫,學校需要負擔費用嗎?",
      a: "不需要。本計畫由立賢教育基金會全額支持,包含專業講師費用、交通及住宿安排、完整課程設計規劃與專案行政協作,並依課程需求提供部分教材與創作材料。"
    },
    {
      q: "學校端需要配合哪些事項?",
      a: "學校主要協助行政與在地協作,包含:
1. 行政協助:安排日期、場地、器材、名單。
2. 前置共備:與基金會討論課程需求與師生現況。
3. 積極參與:鼓勵教師共學,協助觀課與拍攝紀錄。
4. 交通接駁:協助安排講師從最近車站至學校之接送。
5. 餐食安排:安排講師進駐當日之餐點。"
    },
    {
      q: "方案 A、B、C 有什麼不同?該怎麼選擇?",
      a: "本計畫每學年規劃 12 堂課程,依學校時間彈性提供三種方案:
• 方案 A (完整體驗):包含多元廣度、探索聚焦、教師賦能與師生共學,最為完整,強烈建議優先考量。
• 方案 B (多元體驗):著重學生廣度探索與教師賦能,適合時間安排較受限的學校。
• 方案 C (探索工作坊):著重學生深度聚焦與教師賦能,適合時間充裕且希望深化探索的學校。"
    },
    {
      q: "課程的主題和內容如何規劃呢?",
      a: "立賢會以教育策展的視角(Curate → Create → Connect),先梳理學校的特色、脈絡與發展需求,再透過共備討論轉化為貼近現場脈絡的主題課程。學校可在申請表單中提出希望優先安排的課程領域,也歡迎提出不在五大方向內的建議。"
    },
    {
      q: "遇到天災或不可抗力因素(如颱風停課)怎麼辦?",
      a: "若遇天災等不可抗力因素,基金會將視情況與學校協商,採取『改期』或以『線上/預錄教材』的方式實施,共同決定最適合的課程調整方式。"
    }
  ];
  const timelineItems = [
    {
      phase: "1. 申請階段",
      title: "線上申請",
      date: "115/03/31 ～ 115/05/24",
      desc: "填寫線上申請表單及附件一。",
      colorTheme: {
        dot: "bg-orange-500",
        phase: "text-orange-500",
        date: "text-orange-600",
      }
    },
    {
      phase: "1. 申請階段",
      title: "書審會談",
      date: "115/04/07 ～ 115/06/05",
      desc: "採先到先審制;學校在提交後約 3-5 個工作天會收到會談助觀課與拍攝紀錄。
4. 交通接駁:協助安排講師從最近車站至學校之接送。
5. 餐食安排:安排講師進駐當日之餐點。"
    },
    {
      q: "方案 A、B、C 有什麼不同?該怎麼選擇?",
      a: "本計畫每學年規劃 12 堂課程,依學校時間彈性提供三種方案:
• 方案 A (完整體驗):包含多元廣度、探索聚焦、教師賦能與師生共學,最為完整,強烈建議優先考量。
• 方案 B (多元體驗):著重學生廣度探索與教師賦能,適合時間安排較受限的學校。
• 方案 C (探索工作坊):著重學生深度聚焦與教師賦能,適合時間充裕且希望深化探索的學校。"
    },
    {
      q: "課程的主題和內容如何規劃呢?",
      a: "立賢會以教育策展的視角(Curate → Create → Connect),先梳理學校的特色、脈絡與發展需求,再透過共備討論轉化為貼近現場脈絡的主題課程。學校可在申請表單中提出希望優先安排的課程領域,也歡迎提出不在五大方向內的建議。"
    },
    {
      q: "遇到天災或不可抗力因素(如颱風停課)怎麼辦?",
      a: "若遇天災等不可抗力因素,基金會將視情況與學校協商,採取『改期』或以『線上/預錄教材』的方式實施,共同決定最適合的課程調整方式。"
    }
  ];
  const timelineItems = [
    {
      phase: "1. 申請階段",
      title: "線上申請",
      date: "115/03/31 ～ 115/05/24",
      desc: "填寫線上申請表單及附件一。",
      colorTheme: {
        dot: "bg-orange-500",
        phase: "text-orange-500",
        date: "text-orange-600",
      }
    },
    {
      phase: "1. 申請階段",
      title: "書審會談",
      date: "115/04/07 ～ 115/06/05",
      desc: "採先到先審制;學校在提交後約 3-5 個工作天會收到會談v className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between py-3 md:py-5 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
              <img
                src="https://github.com/chenghua0216/figures/blob/main/TheShiner_logo.png?raw=true"
                alt="立賢教育基金會 Logo"
                className="h-16 md:h-24 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <button onClick={() => scrollTo('purpose')} className="text-gray-600 hover:text-orange-500 transition">計畫緣起</button>
              <button onClick={() => scrollTo('goals')} className="text-gray-600 hover:text-orange-500 transition">核心目標</button>
              <button onClick={() => scrollTo('eligibility')} className="text-gray-600 hover:text-orange-500 transition">申請資格</button>
              <button onClick={() => scrollTo('execution')} className="text-gray-600 hover:text-orange-500 transition">執行方式</button>
              <button onClick={() => scrollTo('timeline')} className="text-gray-600 hover:text-orange-500 transition">申請時程</button>
              <button onClick={() => scrollTo('faq')} className="text-gray-600 hover:text-orange-500 transition">常見問題</button>
              <a
                href="https://forms.gle/PR9eD8W2J7oUmptV8"
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition shadow-md flex items-center"
              >
                立即申請 <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-orange-500 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <button onClick={() => scrollTo('purpose')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md text-left">計畫緣起</button>
              <button onClick={() => scrollTo('goals')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md text-left">核心目標</button>
              <button onClick={() => scrollTo('eligibility')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md text-left">申請資格</button>
              <button onClick={() => scrollTo('execution')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md text-left">執行方式</button>
              <button onClick={() => scrollTo('timeline')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md text-left">申請時程</button>
              <button onClick={() => scrollTo('faq')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-md text-left">常見問題</button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section id="hero" className="pt-40 md:pt-52 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            相信,<span className="text-orange-500">就能創造</span>
          </h1>
          <div className="text-xl text-gray-600 leading-relaxed">
            <div className="flex items-center flex-wrap gap-3">
              <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                115 學年度
              </span>
              <span className="font-bold text-gray-800">立賢心創力校本陪伴計畫</span>
            </div>
            <div className="w-24 h-1 bg-white rounded-full my-4 shadow-sm"></div>
            整合「多元探索」與「教師支援」雙軌系統,為偏遠地區學校打造兼具心理安全感與創造力自信的永續教育生態。
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/PR9eD8W2J7oUmptV8"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-500 text-white text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 hover:shadow-lg transition duration-300 flex justify-center items-center"
            >
              填寫申請表單 <ExternalLink className="w-5 h-5 ml-2" />
            </a>
            <a
              href="https://docs.google.com/document/d/1QpdfJSq8QB-vLNk__W7_imMUEF6RrgTX6NMttSkMj7M/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-orange-600 border border-orange-200 text-center px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition duration-300 flex justify-center items-center"
            >
              了解完整計畫內容
            </a>
          </div>
        </div>
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <div className="aspect-square bg-gradient-to-tr from-orange-200 to-slate-200 rounded-full opacity-70 absolute -inset-4 blur-2xl -z-10"></div>
          <div className="relative h-[400px] w-full rounded-3xl shadow-2xl border-4 border-white overflow-hidden group">
            {heroImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`陪伴與學習 ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                onError={(e) => {
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="800" height="400" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af">師生共學情境圖</text></svg>'
                }}
              />
            ))}

            {/* 輪播指示點 */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white w-6' : 'bg-white/60 w-2 hover:bg-white'
                  }`}
                  aria-label={`切換至第 ${index + 1} 張圖片`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 計畫緣起 */}
      <section id="purpose" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-01.png?raw=true" alt="icon-01" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%237acbc2"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">計畫緣起</h2>
            </div>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 px-4 md:px-8 text-justify">
            <p>
              立賢教育基金會自 2008 年起,長期深耕偏遠地區教育現場。從早期「蔡公英的冒險多元課程」到近年推動「超能力解鎖多元探索計畫」、「教師支援計畫」,我們始終與師生並肩同行。在長期的陪伴中,我們也深刻體會到,教育現場的核心挑戰,往往來自內在動機的匱乏與高壓環境下心理能量的消耗。
            </p>
            <p>
              腦科學與心理學研究指出,創造力不僅是藝術表現或解決問題的思考,更是維繫心理健康、建立自我認同與情緒調節的關鍵。在創作歷程中,能有效提升專注力、轉化挫折並厚植心理韌性,引導師生找回內在覺察,以及與生活的深度連結。
            </p>
            <p>
              AI 時代下,擁有跨域整合的創造力與獨立觀點的思辨力,是人類不可替代的核心素養。而這份能力的培養,端賴真實的探索歷程與充滿安全感的學習環境。
            </p>
            <p>
              立賢承襲過往現場的實踐經驗與回顧,自 115 學年度起正式啟動「心創力校本陪伴計畫」。整合「超能力解鎖多元探索」與「教師支援」雙軌系統,啟動內在創造歷程、推動師生共學,希望為學校或組織打造一個兼具心理安全感與創造力自信的永續教育生態。
            </p>
          </div>
        </div>
      </section>
      {/* 核心目標 */}
      <section id="goals" className="py-20 bg-orange-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex justify-center items-center gap-3 mb-6">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-03.png?raw=true" alt="icon-03" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23f25c27"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">核心目標</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              立賢秉持「相信,就能創造」的核心價值,致力於成為教育現場的創造力啟動者。透過由內而外的陪伴,讓偏遠地區學生在多元與深度探索的課程活動中,建立自信心及內在動能,同時支持教師內在韌性與自我照顧,進而激發師生潛能,實現教育平權與身心整合的永續願景。
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 學生 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col h-full">
              <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">為學生:點燃內在動機,建立學習信心</h3>
              <ul className="space-y-4 text-gray-600 flex-grow">
                <li><strong className="text-gray-800 block mb-1">創造力自信:</strong>透過藝術、自然與戲劇等跨領域課程作為媒介,引導學生探索潛能並實踐自我表達,從覺察自我的特質出發,建立深層的創造力自信。</li>
                <li><strong className="text-gray-800 block mb-1">安全感建立:</strong>在具備心理安全感的環境中累積正向經驗,將「我做得到」的自信,轉化為能夠面對學習及生活挑戰的韌性。</li>
              </ul>
            </div>
            {/* 教師 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col h-full">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-orange-500">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">為教師:掌握支援的力量,賦能並照顧身心</h3>
              <ul className="space-y-4 text-gray-600 flex-grow">
                <li><strong className="text-gray-800 block mb-1">身心支援:</strong>邀請各領域專業講師,透過團體分享、肢體或戲劇表演、藝術療癒等多元活動,陪伴老師釋放教學現場的壓力;藉由內在覺察引導創造力的實踐,讓老師的身心先獲得修復與照顧,轉化為守護學生的堅韌力量。</li>
                <li><strong className="text-gray-800 block mb-1">專業成長與共學:</strong>藉由與不同領域講師的共學與合作,開啟教師的視野,擴展教學可能性,並透過反思與回饋,深化教學創新的實踐,成為學生創造力學習路上的引路人。</li>
              </ul>
            </div>
            {/* 學校/組織 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col h-full">
              <div className="bg-teal-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-teal-600">
                <School className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">為學校/組織:打造永續的教育生態</h3>
              <ul className="space-y-4 text-gray-600 flex-grow">
                <li><strong className="text-gray-800 block mb-1">永續教育生態:</strong>透過校本課程與教師專業發展的雙軌支持,建立一個兼具心理安全感與創造力自信的學習環境,成為學校自主發展與成長的基礎。</li>
                <li><strong className="text-gray-800 block mb-1">跨域整合與在地脈絡:</strong>結合學校的地方特色與師生現況,規劃符合在地需求的主題課程,打造具在地特色的永續教育品牌。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 申請資格 */}
      <section id="eligibility" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-6">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-02.png?raw=true" alt="icon-02" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23f97316"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">申請資格</h2>
            </div>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center"><CheckCircle2 className="w-6 h-6 text-orange-500 mr-3" /> 誰可以申請?</h3>
              <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span><strong>偏遠地區國小</strong>:教育部認定之極偏、特偏、偏遠或非山非市國小</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span><strong>小規模國小</strong>:全校學生人數 100 人以下之國小</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500 font-bold flex-shrink-0">✓</span>
                  <span><strong>非營利教育組織</strong>:致力於偏鄉教育之非營利教育機構或團隊(依個案審查)</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center"><Target className="w-6 h-6 text-blue-500 mr-3" /> 你需要具備什麼?</h3>
              <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                  <span>願意接受本計畫的「多元課程」與「教師支援」兩大支持</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                  <span>配合課程時程與行政安排</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                  <span>致力於回饋與成果分享,協助推廣計畫成果</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 執行方式 */}
      <section id="execution" className="py-20 bg-orange-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-6">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-04.png?raw=true" alt="icon-04" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23fbbf24"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">執行方式</h2>
            </div>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">方案 A: 完整體驗</h3>
                  <p className="text-gray-600 mb-4">包含多元廣度、探索聚焦、教師賦能與師生共學,最為完整。強烈建議優先考量此方案,可最大化計畫成效。</p>
                  <div className="bg-amber-50 p-4 rounded-lg text-sm text-gray-700">
                    <p className="font-semibold mb-2">課程構成:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>多元廣度課程 (6 堂)</li>
                      <li>探索聚焦課程 (3 堂)</li>
                      <li>教師支援活動 (3 場)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    B
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">方案 B: 多元體驗</h3>
                  <p className="text-gray-600 mb-4">著重學生廣度探索與教師賦能,適合時間安排較受限的學校。</p>
                  <div className="bg-green-50 p-4 rounded-lg text-sm text-gray-700">
                    <p className="font-semibold mb-2">課程構成:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>多元廣度課程 (6 堂)</li>
                      <li>教師支援活動 (3 場)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    C
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">方案 C: 探索工作坊</h3>
                  <p className="text-gray-600 mb-4">著重學生深度聚焦與教師賦能,適合時間充裕且希望深化探索的學校。</p>
                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-gray-700">
                    <p className="font-semibold mb-2">課程構成:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>探索聚焦課程 (6 堂)</li>
                      <li>教師支援活動 (3 場)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section id="faq" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-6">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-05.png?raw=true" alt="icon-05" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23ec4899"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">常見問題</h2>
            </div>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="bg-orange-50 p-8 rounded-2xl space-y-0">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={index === openFaqIndex}
                onClick={() => setOpenFaqIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* 申請時程 */}
      <section id="timeline" className="py-20 bg-orange-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-6">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-06.png?raw=true" alt="icon-06" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%2310b981"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">申請時程</h2>
            </div>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-4 md:gap-6">
                <div className="relative flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${item.colorTheme.dot} z-10`}></div>
                  {index < timelineItems.length - 1 && (
                    <div className={`w-1 h-24 ${item.colorTheme.dot.replace('bg-', 'bg-').replace('-500', '-200').replace('-600', '-200')} mt-2`}></div>
                  )}
                </div>
                <div className="flex-grow pb-4">
                  <p className={`text-sm font-semibold ${item.colorTheme.phase} mb-1`}>{item.phase}</p>
                  <p className="text-lg font-bold text-gray-900">{item.title}</p>
                  <p className={`text-sm font-semibold ${item.colorTheme.date} mb-2`}>{item.date}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="https://forms.gle/PR9eD8W2J7oUmptV8"
              target="_blank"
              rel="noreferrer"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-600 hover:shadow-lg transition duration-300 flex items-center"
            >
              立即申請 <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://github.com/chenghua0216/figures/blob/main/TheShiner_logo_white.png?raw=true"
                alt="立賢教育基金會 Logo"
                className="h-12 w-auto mb-4 object-contain"
              />
              <p className="text-sm text-gray-400">相信,就能創造</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">聯絡方式</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (02) 2545-1669</li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@lishan.org.tw</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#purpose" onClick={() => scrollTo('purpose')} className="hover:text-white transition">計畫緣起</a></li>
                <li><a href="#goals" onClick={() => scrollTo('goals')} className="hover:text-white transition">核心目標</a></li>
                <li><a href="#execution" onClick={() => scrollTo('execution')} className="hover:text-white transition">執行方式</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">追蹤我們</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.lishan.org.tw" target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-2"><ExternalLink className="w-4 h-4" /> 官方網站</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400 text-center">
              &copy; 2026 立賢教育基金會. All rights reserved. | <a href="#" className="hover:text-white transition">隱私政策</a> | <a href="#" className="hover:text-white transition">使用條款</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}<strong className="text-gray-800 block mb-1">專業賦能:</strong>透過工作坊或師生共學模式,促進師生深度對話,並讓老師掌握多元對話引導鷹架和技巧,在過程中看見學生不同面向的潛能與表達方式,進而激發班級經營的新靈感。</li>
              </ul>
            </div>
            {/* 學校 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 flex flex-col h-full">
              <div className="bg-slate-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-slate-600">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">為學校:打造溫暖且永續的校園文化</h3>
              <ul className="space-y-4 text-gray-600 flex-grow">
                <li><strong className="text-gray-800 block mb-1">跨域資源:</strong>專業領域講師走進校園,深化校定課程及豐富師生學習視野。</li>
                <li><strong className="text-gray-800 block mb-1">支援系統:</strong>建立以心理健康與相互支援為核心的校園氛圍。</li>
                <li><strong className="text-gray-800 block mb-1">團隊凝聚:</strong>透過共同參與,強化教師團隊的凝聚力。</li>
                <li><strong className="text-gray-800 block mb-1">社區連結:</strong>促進學校與社區的有機連結,形塑具備創造力的學習基地。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 申請資格 */}
      <section id="eligibility" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-slate-600 text-white p-6 rounded-2xl rotate-3 shadow-md">
              <School className="w-16 h-16" />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-02.png?raw=true" alt="icon-02" className="w-8 h-8 md:w-10 md:h-10 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%2308823b"/></svg>'; }} />
              <h2 className="text-2xl font-bold text-slate-800">我們在尋找這樣的學校!</h2>
            </div>
            <p className="text-slate-700 mb-4">符合以下任一條件即可申請:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">教育部認定之極偏、特偏、偏遠或非山非市國小。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">全校學生人數 100 人以下之國小。</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">致力於偏鄉教育之非營利教育機構或團隊(依個案審查)。</span>
              </li>
            </ul>
            <p className="text-sm text-slate-600 mt-4">* 學生端主要以 3-6 年級為對象,採一學年連貫課程。</p>
          </div>
        </div>
      </section>
      {/* 執行方式與課程架構 */}
      <section id="execution" className="py-20 bg-slate-50 text-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-04.png?raw=true" alt="icon-04" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23006a86"/></svg>'; }} />
              <h2 className="text-3xl font-bold">心創力課程設計邏輯</h2>
            </div>
            <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed text-left md:text-center">
              立賢創造力課程的設計邏輯,將「準備 → 醞釀 → 豁朗 → 驗證」的認知歷程,轉化為更具實踐導向的 IDEA 四階段:協同各領域專業講師或學者,將其豐富知識或抽象的認知理論,轉化為可落地操作的教學流程,目標是透過系統化的引導,觸發學生或教師的內在潛能與核心素養。
            </p>
          </div>
          {/* IDEA 階段 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 text-center">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-500 transition shadow-sm">
              <h3 className="text-orange-500 font-bold text-xl mb-2">I</h3>
              <div className="font-semibold mb-2 text-slate-800">Immerse 沉浸探索</div>
              <p className="text-sm text-slate-600">多感官覺察,開啟學習視野</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-500 transition shadow-sm">
              <h3 className="text-orange-500 font-bold text-xl mb-2">D</h3>
              <div className="font-semibold mb-2 text-slate-800">Develop 內在發展</div>
              <p className="text-sm text-slate-600">提問與體驗,讓想法醞釀成形</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-500 transition shadow-sm">
              <h3 className="text-orange-500 font-bold text-xl mb-2">E</h3>
              <div className="font-semibold mb-2 text-slate-800">Evolve 靈感演化</div>
              <p className="text-sm text-slate-600">多元媒介表達與團隊合作轉化</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-orange-500 transition shadow-sm">
              <h3 className="text-orange-500 font-bold text-xl mb-2">A</h3>
              <div className="font-semibold mb-2 text-slate-800">Act 行動驗證</div>
              <p className="text-sm text-slate-600">實踐與反思,轉化為內在連結</p>
            </div>
          </div>
          {/* 方案選擇 */}
          <h3 className="text-2xl font-bold text-center mb-8">專案架構:全學年 12 堂課</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 text-slate-900 rounded-3xl p-8 relative overflow-hidden group border border-orange-100">
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-xl font-medium text-sm">推薦</div>
              <h4 className="text-xl font-bold mb-2">方案 A:完整體驗</h4>
              <p className="text-slate-600 mb-6 text-sm">確保師生共同經歷豐富完整的連貫課程。</p>
              <ul className="space-y-2 mb-6 font-medium">
                <li className="flex justify-between"><span>學生多元課程 (廣度)</span> <span className="text-orange-600">4堂</span></li>
                <li className="flex justify-between"><span>學生探索課程 (聚焦)</span> <span className="text-orange-600">2堂</span></li>
                <li className="flex justify-between"><span>教育者賦能</span> <span className="text-orange-600">4堂</span></li>
                <li className="flex justify-between"><span>師生共學工作坊</span> <span className="text-orange-600">2堂</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold mb-2 text-slate-900">方案 B:多元體驗</h4>
              <p className="text-slate-600 mb-6 text-sm">適合學校能夠安排的時間較有限。</p>
              <ul className="space-y-2 mb-6 font-medium text-slate-700">
                <li className="flex justify-between"><span>學生多元課程 (廣度)</span> <span className="text-amber-600">6堂</span></li>
                <li className="flex justify-between"><span>教育者賦能</span> <span className="text-amber-600">6堂</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold mb-2 text-slate-900">方案 C:探索工作坊</h4>
              <p className="text-slate-600 mb-6 text-sm">適合時間充裕,希望深化探索的學校。</p>
              <ul className="space-y-2 mb-6 font-medium text-slate-700">
                <li className="flex justify-between"><span>學生探索課程 (聚焦)</span> <span className="text-amber-600">6堂</span></li>
                <li className="flex justify-between"><span>教育者賦能</span> <span className="text-amber-600">6堂</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* 申請時程 */}
      <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-05.png?raw=true" alt="icon-05" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23f15a7b"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">申請與執行時程</h2>
            </div>
            <p className="text-gray-600">請留意各階段重要時間節點,名額採先到先審制。</p>
          </div>
          <div className="relative">
            {/* 垂直時間軸 */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {timelineItems.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                    {/* 圓點 */}
                    <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white transform -translate-x-1/2 z-10 shadow-sm ${item.colorTheme.dot}`}></div>

                    {/* 內容卡片 */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}>
                      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className={`font-semibold mb-3 ${item.colorTheme.date}`}>{item.date}</p>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* FAQ 常見問題 */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src="https://github.com/chenghua0216/figures/blob/main/%E7%AB%8B%E8%B3%A2_vi%EF%BC%BF20260122_o-06.png?raw=true" alt="icon-06" className="w-10 h-10 md:w-12 md:h-12 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23a22868"/></svg>'; }} />
              <h2 className="text-3xl font-bold text-gray-900">常見問題 FAQ</h2>
            </div>
            <p className="text-gray-600">關於申請與合作的各種疑問,為您一次解答。</p>
          </div>

          <div className="bg-orange-50 rounded-3xl p-6 md:p-10 shadow-sm">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaqIndex === index}
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Footer CTA & 聯絡資訊 */}
      <footer className="bg-slate-100 text-slate-600 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">準備好啟動校園創造力了嗎?</h2>
            <p className="mb-8 text-slate-600 max-w-md">
              我們期待與您攜手,為孩子打造充滿心理安全感的學習基地。請於期限內完成線上表單申請。
            </p>
            <a
              href="https://forms.gle/PR9eD8W2J7oUmptV8"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-sm"
            >
              前往線上申請
            </a>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Heart className="w-5 h-5 text-orange-500 mr-2" /> 聯絡我們
            </h3>
            <p className="text-slate-600 mb-6">財團法人立賢教育基金會<br/>課程設計及專案整合組</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <span className="text-slate-700">(02) 2533-7008</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3" />
                <a href="mailto:info@theshiner.org" className="text-slate-700 hover:text-orange-500 transition">info@theshiner.org</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-700">台北市中山區南京東路三段 118 號 4 樓</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>© 2026 財團法人立賢教育基金會. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
