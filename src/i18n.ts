import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ko: {
    translation: {
      "hospital_name": "후한의원 구미점",
      "tagline": "교통사고 1인실 입원치료",
      "nav_features": "입원실특징",
      "nav_facilities": "시설안내",
      "nav_process": "치료절차",
      "nav_location": "진료시간/위치",
      "btn_kakao": "카톡상담",
      "btn_call": "문의 054-474-1075",
      "hero_title": "교통사고 후유증, <br /> <span class='accent'>365일 운영 1인실 위주</span> <br /> 쾌적한 입원 환경에서 회복하세요",
      "hero_sub": "사고 접수번호만 있으면 절차 완료! <br /> 월/화/수/금 야간진료(20:30)로 바쁜 일상 중에도 집중 치료가 가능합니다.",
      "btn_reserve": "네이버 예약",
      "quick_night": "야간진료 월/화/수/금 (~20:30)",
      "quick_365": "입원실 365일 정상 운영",
      "quick_park": "건물 내 무료 타워 주차"
      // ... (more keys as needed)
    }
  },
  en: {
    translation: {
      "hospital_name": "Hoo Clinic Gumi",
      "tagline": "Traffic Accident Inpatient Treatment (Single Room)",
      "nav_features": "Features",
      "nav_facilities": "Facilities",
      "nav_process": "Process",
      "nav_location": "Location",
      "btn_kakao": "KakaoTalk",
      "btn_call": "Call 054-474-1075",
      "hero_title": "Car Accident Recovery, <br /> <span class='accent'>365 Days Single Rooms</span> <br /> Recover in a comfortable environment",
      "hero_sub": "All procedures done with an accident number! <br /> Evening clinics available (Mon/Tue/Wed/Fri until 20:30).",
      "btn_reserve": "Naver Reserve",
      "quick_night": "Night Clinic Mon/Tue/Wed/Fri (~20:30)",
      "quick_365": "Inpatient ward open 365 days",
      "quick_park": "Free tower parking in building"
    }
  },
  th: {
    translation: {
      "hospital_name": "ฮูคลินิก กูมิ (Hoo Clinic Gumi)",
      "tagline": "การรักษาผู้ป่วยในจากอุบัติเหตุจราจร (ห้องเดี่ยว)",
      "nav_features": "คุณสมบัติ",
      "nav_facilities": "สิ่งอำนวยความสะดวก",
      "nav_process": "ขั้นตอน",
      "nav_location": "ที่ตั้ง",
      "btn_kakao": "ปรึกษา Kakao",
      "btn_call": "โทร 054-474-1075",
      "hero_title": "ฟื้นฟูจากอุบัติเหตุรถยนต์ <br /> <span class='accent'>ห้องเดี่ยว เปิด 365 วัน</span> <br /> ฟื้นตัวในสภาพแวดล้อมที่สะดวกสบาย",
      "hero_sub": "ขั้นตอนทั้งหมดเสร็จสมบูรณ์ด้วยหมายเลขรับเรื่องอุบัติเหตุ! <br /> คลินิกภาคค่ำพร้อมให้บริการ (จันทร์/อังคาร/พุธ/ศุกร์ ถึง 20:30 น.)",
      "btn_reserve": "จอง Naver",
      "quick_night": "คลินิกกลางคืน จันทร์/อังคาร/พุธ/ศุกร์ (~20:30)",
      "quick_365": "วอร์ดผู้ป่วยในเปิด 365 วัน",
      "quick_park": "ที่จอดรถทาวเวอร์ฟรีในอาคาร"
    }
  },
  vi: {
    translation: {
      "hospital_name": "Phòng khám Hoo chi nhánh Gumi",
      "tagline": "Điều trị nội trú tai nạn giao thông (Phòng đơn)",
      "nav_features": "Đặc điểm",
      "nav_facilities": "Cơ sở vật chất",
      "nav_process": "Quy trình",
      "nav_location": "Vị trí",
      "btn_kakao": "Tư vấn Kakao",
      "btn_call": "Gọi 054-474-1075",
      "hero_title": "Hồi phục sau tai nạn ô tô, <br /> <span class='accent'>Phòng đơn mở cửa 365 ngày</span> <br /> Hồi phục trong môi trường thoải mái",
      "hero_sub": "Mọi thủ tục hoàn tất chỉ với số hồ sơ tai nạn! <br /> Có phòng khám tối (Thứ 2/3/4/6 đến 20:30).",
      "btn_reserve": "Đặt chỗ Naver",
      "quick_night": "Khám tối Thứ 2/3/4/6 (~20:30)",
      "quick_365": "Phòng nội trú mở cửa 365 ngày",
      "quick_park": "Bãi đậu xe miễn phí trong tòa nhà"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
