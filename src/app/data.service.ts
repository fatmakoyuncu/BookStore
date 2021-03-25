import { Injectable } from '@angular/core';
export interface IBook {
  id: number;
  bookName: string;
  bookType: string;
  bookYear: number;
  bookStore: string;
  price: number;
  desciription: string;
  page: number;
  image: string;
  writer: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  books: IBook[] = [
    { id: 1, bookName: "Mantıku't-Tayr", bookType: "Roman", bookYear: 1679, bookStore: "KAKNÜS YAYINLARI", price: 22, desciription: "Tasavvuf edebiyatının başlıca eserlerinden olan Mantıku't-Tayr, tasavvufî bir temaya sahip olmasının yanı sıra kişinin tasavvufa dair ve tasavvuf yoluna dair bilgi edinmesi açısından da önemlidir. Zira kitapta tasavvufun temel prensipleri, özellikleri, kavramları ve inanç yapısı açıklanmıştır. Hüdhüd sırtında tarikat elbisesi ile tasvir edilirken Simurg Tanrı için bir sembol olmuştur. Kuşların her birinin zaafı kişinin tasavvuf yolunda o zaafa sahip olmasının kötülüğü ve sonuçları ile açıklanmıştır.", page: 432, image: "https://img.kitapyurdu.com/v1/getImage/fn:11209832/wh:true/wi:500", writer: "Feridüddin Attar" },
    { id: 2, bookName: "Kekeme Çocuklar Korosu", bookType: "Deneme", bookYear: 2017, bookStore: "PROFİL KİTAP", price: 27, desciription: "Popüler kültürün hızlı yayılışı ve modern yaşam tasarımları birçok hayatı ve duyarlılığı kapitalizmin çöp kutularına yuvarladı. Artık neredeyse hemen her şeyin bir bedeli ya da fiyatı vardı. Bu hızlı yaşamda kendini içlerine hapsedenler İslamcı söylemin tarafında yer alanlardı. Elinizdeki kitap 1990-2000 yılları arasında İslamcılık söyleminin bir tarafında yer tutmuş kuşağın içinde biriktirdiklerini dikkafalı bir söylemle dışavurumu; bu koronun çocuklarına ulşabilmiş, kimi zaman bağıra çağıra, kimi zaman da dudak ucuyla söylediklerini anlayan kitlenin kitabıdır. Kekeme Çocuklar Korosu içinde barındırdığı insanlar ve onların öyküleriyle kocaman bir duygu dünyasına karşılık geliyor.", page: 136, image: "https://img.kitapyurdu.com/v1/getImage/fn:10064388/wh:true/wi:500", writer: "Tarık Tufan" },
    { id: 3, bookName: "Genç Werther' in Acıları", bookType: "Roman", bookYear: 1774, bookStore: "Can Yayınları", price: 15, desciription: "Genç Werther'in Acıları (Almanca: Die Leiden des jungen Werthers), Werther adındaki genç bir hukuk stajyerinin, diğer taraftan nişanlı bir kadın olan Lotte ile intiharına kadar kurmuş olduğu ızdırap dolu münasebetini konu alan, Goethe'nin mektup tarzındaki romanının ismidir.", page: 126, image: "https://img.kitapyurdu.com/v1/getImage/fn:11242836/wh:true/wi:500", writer: "Johann Wolfgang Goethe" },
    { id: 4, bookName: "Kendi Gök Kubbemiz", bookType: "Şiir", bookYear: 2003, bookStore: "İSTANBUL FETİH CEMİYETİ YAYINLARI", price: 17, desciription: "Yahya Kemal, en güzel şiirlerini 20. yüzyılda yazmıştır. Bu bakımdan da Türk şiirine güçlü bir ses ve soluk getirmiştir. Ona göre şiir, her şeyden önce dil, istif ve ahenktir. Yahya Kemal şiirlerinde tarihimizi, musikimizi, değerlerimizi, bütün kültür varlıklarımızı, medeniyetimizi ideolojiye bulamadan en güzel şekilde ve sanat olarak işlemiştir. Kendi Gök Kubbemiz, yaşadığı ana ruhunu yansıtan bir milletin yeri ve göğüyle bütün bir dünyanın terennümüdür. ", page: 102, image: "https://img.kitapyurdu.com/v1/getImage/fn:7026001/wh:true/wi:500", writer: "Yahya Kemal Beyatlı" },
    { id: 5, bookName: "Mai ve Siyah", bookType: "Roman", bookYear: 1879, bookStore: "Özgür Yayınları", price: 35, desciription: "Batılı anlamda Türk romanının başlangıcı sayılan ve Tanpınar'ın Türkiye'de nesli adına konuşan ilk eser diye tanımladığı Mai ve Siyah, dönemin basın, edebiyat ve şiir hayatına ilişkin gözlemleriyle de ayrı bir öneme sahiptir.", page: 336, image: "https://img.kitapyurdu.com/v1/getImage/fn:11341669/wh:true/wi:500", writer: "Halit Ziya Uşaklıgil" },
    { id: 6, bookName: "Ah'lar Ağacı", bookType: "Şiir", bookYear: 2003, bookStore: "METİS YAYINLARI", price: 20, desciription: "Geçen yıl aramızdan ayrılan şair Didem Madak'ın yayımlanmış üç kitabı vardır: Grapon Kâğıtları, Ah'lar Ağacı ve Pulbiber Mahallesi. Bir süredir baskısı olmayan ve okurlar tarafından ısrarla aranan kitapların yeni basımını yaptık.", page: 76, image: "https://img.kitapyurdu.com/v1/getImage/fn:11276749/wh:true/wi:500", writer: "Didem Madak" },    
    { id: 7, bookName: "İnsanlığın Dirilişi", bookType: "Deneme", bookYear: 1950, bookStore: "Diriliş", price: 27, desciription: "Sezai Karakoç bu kitabında insanlığın meselesini dünya çapında ele almış. Rönesans öncesi ve sonrası dönemi değerlendirerek özellikle Batı’nın, akabinde gözünü ona dikmiş milletlerin yaşadığı buhranlara bir çözüm arayışına girmiş. Sezai Karakoç İnsanlığın Dirilişi kitabında bunu yaparken edebiyat, müzik, resim alanında ortaya konulan eserlerden insanlığın ruh halini tahlil etmiş, son bölümle de çözüm planını sunmuş.", page: 160, image: "https://img.kitapyurdu.com/v1/getImage/fn:111665/wh:true/wi:500", writer: "Sezai Karakoç" },
    { id: 8, bookName: "Simyacı ", bookType: "Roman", bookYear: 1988, bookStore: "Can Yayınları", price: 19, desciription: "Simyacı, Brezilyalı eski şarkı sözü yazarı Paulo Coelho'nun, yayınlandığı 1988 yılından bu yana dünyayı birbirine katan, eleştirmenler tarafından bir `fenomen' olarak değerlendirilen üçüncü romanı. Simyacı, altı yılda kırk iki ülkede yedi milyondan fazla sattı. Bu, Gabriel Garcia Marquez'den bu yana görülmemiş bir olay. ", page: 184, image: "https://img.kitapyurdu.com/v1/getImage/fn:11273967/wh:true/wi:500", writer: "Paulo Coelho " }   
  ]
}
