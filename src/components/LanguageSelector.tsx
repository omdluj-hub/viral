import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'ko', name: 'KR', flag: '🇰🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'th', name: 'TH', flag: '🇹🇭' },
    { code: 'vi', name: 'VN', flag: '🇻🇳' }
  ];

  return (
    <div className="language-selector" style={{ 
      position: 'absolute', 
      top: '10px', 
      right: '20px', 
      display: 'flex', 
      gap: '8px',
      zIndex: 1001
    }}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          style={{
            background: i18n.language === lang.code ? '#007bff' : 'rgba(255,255,255,0.8)',
            color: i18n.language === lang.code ? '#fff' : '#333',
            border: '1px solid #ddd',
            padding: '4px 8px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            transition: 'all 0.2s'
          }}
        >
          <span>{lang.flag}</span>
          <span>{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
