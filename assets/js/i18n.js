/* ==========================================================================
   REDDASH ADMIN TEMPLATE - INTERNATIONALIZATION (i18n)
   ========================================================================== */

const I18nManager = (() => {
  const STORAGE_KEY = 'reddash_lang';

  const translations = {
    en: {
      // Navigation
      'nav.dashboard': 'Dashboard',
      'nav.users': 'Users',
      'nav.projects': 'Projects',
      'nav.calendar': 'Calendar',
      'nav.kanban': 'Kanban',
      'nav.chat': 'Chat',
      'nav.pricing': 'Pricing',
      'nav.faq': 'FAQ',
      'nav.profile': 'Profile',
      'nav.authentication': 'Authentication',
      'nav.login': 'Login',
      'nav.register': 'Register',
      'nav.pages': 'Pages',
      'nav.error404': '404 Page',
      'nav.maintenance': 'Maintenance',
      'nav.documentation': 'Documentation',
      'nav.changelog': 'Changelog',
      // Dashboard
      'dashboard.title': 'Dashboard',
      'dashboard.welcome': 'Welcome back',
      'dashboard.revenue': 'Total Revenue',
      'dashboard.users': 'Total Users',
      'dashboard.orders': 'New Orders',
      'dashboard.growth': 'Growth Rate',
      'dashboard.recentActivity': 'Recent Activity',
      'dashboard.topProducts': 'Top Products',
      'dashboard.transactions': 'Recent Transactions',
      // Actions
      'action.save': 'Save',
      'action.cancel': 'Cancel',
      'action.delete': 'Delete',
      'action.edit': 'Edit',
      'action.view': 'View',
      'action.add': 'Add New',
      'action.search': 'Search...',
      'action.export': 'Export',
      'action.import': 'Import',
      'action.filter': 'Filter',
      // Status
      'status.active': 'Active',
      'status.inactive': 'Inactive',
      'status.pending': 'Pending',
      'status.completed': 'Completed',
      'status.cancelled': 'Cancelled',
      // Profile
      'profile.title': 'Profile',
      'profile.editProfile': 'Edit Profile',
      'profile.changePassword': 'Change Password',
      'profile.logout': 'Logout',
      // Settings
      'settings.title': 'Settings',
      'settings.layout': 'Layout',
      'settings.theme': 'Theme',
      'settings.language': 'Language',
      // Search
      'search.placeholder': 'Search anything... (Ctrl+K)',
      // Notifications
      'notifications.title': 'Notifications',
      'notifications.markAll': 'Mark all as read',
      'notifications.viewAll': 'View all notifications',
      'notifications.empty': 'No new notifications',
      // Page titles
      'page.users': 'Users Management',
      'page.projects': 'Projects',
      'page.calendar': 'Calendar',
      'page.kanban': 'Kanban Board',
      'page.pricing': 'Pricing Plans',
      'page.faq': 'Frequently Asked Questions',
      'page.profile': 'My Profile',
      'page.documentation': 'Documentation',
      'page.changelog': 'Changelog',
    },
    hi: {
      'nav.dashboard': 'डैशबोर्ड',
      'nav.users': 'उपयोगकर्ता',
      'nav.projects': 'प्रोजेक्ट',
      'nav.calendar': 'कैलेंडर',
      'nav.kanban': 'कानबान',
      'nav.chat': 'चैट',
      'nav.pricing': 'मूल्य निर्धारण',
      'nav.faq': 'सामान्य प्रश्न',
      'nav.profile': 'प्रोफाइल',
      'nav.authentication': 'प्रमाणीकरण',
      'nav.login': 'लॉगिन',
      'nav.register': 'पंजीकरण',
      'nav.pages': 'पृष्ठ',
      'nav.error404': '404 पृष्ठ',
      'nav.maintenance': 'रखरखाव',
      'nav.documentation': 'दस्तावेज़ीकरण',
      'nav.changelog': 'परिवर्तन लॉग',
      'dashboard.title': 'डैशबोर्ड',
      'dashboard.welcome': 'वापसी पर स्वागत',
      'dashboard.revenue': 'कुल राजस्व',
      'dashboard.users': 'कुल उपयोगकर्ता',
      'dashboard.orders': 'नए ऑर्डर',
      'dashboard.growth': 'विकास दर',
      'dashboard.recentActivity': 'हाल की गतिविधि',
      'dashboard.topProducts': 'शीर्ष उत्पाद',
      'dashboard.transactions': 'हाल के लेनदेन',
      'action.save': 'सहेजें',
      'action.cancel': 'रद्द करें',
      'action.delete': 'हटाएं',
      'action.edit': 'संपादित करें',
      'action.view': 'देखें',
      'action.add': 'नया जोड़ें',
      'action.search': 'खोजें...',
      'action.export': 'निर्यात',
      'action.import': 'आयात',
      'action.filter': 'फ़िल्टर',
      'status.active': 'सक्रिय',
      'status.inactive': 'निष्क्रिय',
      'status.pending': 'लंबित',
      'status.completed': 'पूर्ण',
      'status.cancelled': 'रद्द',
      'profile.title': 'प्रोफाइल',
      'profile.editProfile': 'प्रोफाइल संपादित करें',
      'profile.changePassword': 'पासवर्ड बदलें',
      'profile.logout': 'लॉग आउट',
      'settings.title': 'सेटिंग्स',
      'settings.layout': 'लेआउट',
      'settings.theme': 'थीम',
      'settings.language': 'भाषा',
      'search.placeholder': 'कुछ भी खोजें... (Ctrl+K)',
      'notifications.title': 'सूचनाएं',
      'notifications.markAll': 'सभी पढ़े हुए मार्क करें',
      'notifications.viewAll': 'सभी सूचनाएं देखें',
      'notifications.empty': 'कोई नई सूचना नहीं',
      // Page titles
      'page.users': 'उपयोगकर्ता प्रबंधन',
      'page.projects': 'प्रोजेक्ट',
      'page.calendar': 'कैलेंडर',
      'page.kanban': 'कानबान बोर्ड',
      'page.pricing': 'मूल्य निर्धारण योजनाएं',
      'page.faq': 'सामान्य प्रश्न',
      'page.profile': 'मेरी प्रोफाइल',
      'page.documentation': 'दस्तावेज़ीकरण',
      'page.changelog': 'परिवर्तन लॉग',
    },
    ar: {
      'nav.dashboard': 'لوحة التحكم',
      'nav.users': 'المستخدمون',
      'nav.projects': 'المشاريع',
      'nav.calendar': 'التقويم',
      'nav.kanban': 'كانبان',
      'nav.chat': 'الدردشة',
      'nav.pricing': 'التسعير',
      'nav.faq': 'الأسئلة الشائعة',
      'nav.profile': 'الملف الشخصي',
      'nav.authentication': 'المصادقة',
      'nav.login': 'تسجيل الدخول',
      'nav.register': 'التسجيل',
      'nav.pages': 'الصفحات',
      'nav.error404': 'صفحة 404',
      'nav.maintenance': 'صيانة',
      'nav.documentation': 'التوثيق',
      'nav.changelog': 'سجل التغييرات',
      'dashboard.title': 'لوحة التحكم',
      'dashboard.welcome': 'مرحباً بعودتك',
      'dashboard.revenue': 'إجمالي الإيرادات',
      'dashboard.users': 'إجمالي المستخدمين',
      'dashboard.orders': 'الطلبات الجديدة',
      'dashboard.growth': 'معدل النمو',
      'dashboard.recentActivity': 'النشاط الأخير',
      'dashboard.topProducts': 'أفضل المنتجات',
      'dashboard.transactions': 'المعاملات الأخيرة',
      'action.save': 'حفظ',
      'action.cancel': 'إلغاء',
      'action.delete': 'حذف',
      'action.edit': 'تعديل',
      'action.view': 'عرض',
      'action.add': 'إضافة جديد',
      'action.search': 'بحث...',
      'action.export': 'تصدير',
      'action.import': 'استيراد',
      'action.filter': 'تصفية',
      'status.active': 'نشط',
      'status.inactive': 'غير نشط',
      'status.pending': 'معلق',
      'status.completed': 'مكتمل',
      'status.cancelled': 'ملغى',
      'profile.title': 'الملف الشخصي',
      'profile.editProfile': 'تعديل الملف الشخصي',
      'profile.changePassword': 'تغيير كلمة المرور',
      'profile.logout': 'تسجيل الخروج',
      'settings.title': 'الإعدادات',
      'settings.layout': 'التخطيط',
      'settings.theme': 'السمة',
      'settings.language': 'اللغة',
      'search.placeholder': 'ابحث عن أي شيء... (Ctrl+K)',
      'notifications.title': 'الإشعارات',
      'notifications.markAll': 'وضع علامة مقروء للكل',
      'notifications.viewAll': 'عرض كل الإشعارات',
      'notifications.empty': 'لا توجد إشعارات جديدة',
      // Page titles
      'page.users': 'إدارة المستخدمين',
      'page.projects': 'المشاريع',
      'page.calendar': 'التقويم',
      'page.kanban': 'لوحة كانبان',
      'page.pricing': 'خطط الأسعار',
      'page.faq': 'الأسئلة الشائعة',
      'page.profile': 'ملفي الشخصي',
      'page.documentation': 'التوثيق',
      'page.changelog': 'سجل التغييرات',
    }
  };

  const langMeta = {
    en: { flag: '🇺🇸', label: 'English', dir: 'ltr' },
    hi: { flag: '🇮🇳', label: 'हिंदी', dir: 'ltr' },
    ar: { flag: '🇸🇦', label: 'العربية', dir: 'rtl' }
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function t(key) {
    const lang = getLang();
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  }

  function apply(lang) {
    if (!translations[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update dir for RTL
    const meta = langMeta[lang];
    document.documentElement.dir = meta.dir;
    document.documentElement.lang = lang;

    // Update all translate elements
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.dataset.translate;
      const translated = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translated;
      } else {
        el.textContent = translated;
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.translatePlaceholder);
    });

    // Update language selector display
    document.querySelectorAll('.lang-current-flag').forEach(el => el.textContent = meta.flag);
    document.querySelectorAll('.lang-current-label').forEach(el => el.textContent = meta.label);

    // Mark active language
    document.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === lang);
    });
  }

  function init() {
    const lang = getLang();
    apply(lang);

    // Bind language switcher buttons
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-lang]');
      if (btn) {
        apply(btn.dataset.lang);
      }
    });
  }

  return { init, apply, t, getLang, langMeta };
})();

document.addEventListener('DOMContentLoaded', () => I18nManager.init());
