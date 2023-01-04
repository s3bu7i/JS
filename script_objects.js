let siparis_1 = {
    "siparis_id": 101,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "IPhone 13 Pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "urun_fiyat": 22000
        },
        {
            "urun_id": 6,
            "urun_adi": "IPhone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
    ]
};

let siparis_2 = {
    "siparis_id": 102,
    "siparis_tarihi": "30.12.2022",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urun_id": 6,
            "urun_adi": "IPhone 13 Pro Max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "urun_fiyat": 25000
        }
    ]
};

let siparis1_toplam = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18;
let siparis2_toplam = (siparis_1.urunler[0].urun_fiyat) * 1.18;

let toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log("sipariş 1: " + siparis1_toplam);
console.log("sipariş 2: " + siparis2_toplam);

console.log("toplam ödenen miktar: " , toplam_siparis);

let siparisler = [siparis_1, siparis_2];
