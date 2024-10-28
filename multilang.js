const multilang = {
    detectedLang: null,

    async init() {

      const savedLang = localStorage.getItem("preferredLang");
      if (savedLang) {
        this.detectedLang = savedLang;
        console.log(`Previously selected language: ${this.detectedLang}`);
        return;
      }

      const browserLang = navigator.language || navigator.userLanguage;
      const browserLangCode = browserLang.split('-')[0];

      try {

        const geoLangCode = await this.getGeoLangCode();

        const userChoice = window.prompt(
          `Choose language:\n1. Device Language (${browserLangCode})\n2. Language estimated by geolocation (${geoLangCode})`,
          browserLangCode
        );

        this.detectedLang = userChoice === geoLangCode ? geoLangCode : browserLangCode;

        localStorage.setItem("preferredLang", this.detectedLang);
        console.log(`Selected language: ${this.detectedLang}`);
      } catch (error) {
        console.error("Language setting error: ", error);

        this.detectedLang = browserLangCode;
        localStorage.setItem("preferredLang", this.detectedLang);
        console.log(`Default language (browser): ${this.detectedLang}`);
      }
    },

    async getGeoLangCode() {
      try {
        const position = await new Promise((resolve, reject) =>
          navigator.geolocation.getCurrentPosition(resolve, reject)
        );

        return this.simulateGeoLangCode(position);
      } catch (error) {
        console.warn("Geolocation failed; using browser language");
        throw error;
      }
    },

    simulateGeoLangCode(position) {
      const { latitude, longitude } = position.coords;

      if (latitude >= 24.396308 && latitude <= 49.384358 && longitude >= -125.0 && longitude <= -66.93457) {
        return 'en'; 
      } else if (latitude >= 49.0 && latitude <= 70.0 && longitude >= -141.0 && longitude <= -53.0) {
        return 'fr'; 
      } else if (latitude >= -35.0 && latitude <= -10.0 && longitude >= 110.0 && longitude <= 155.0) {
        return 'en'; 
      } else if (latitude >= -40.0 && latitude <= -10.0 && longitude >= -75.0 && longitude <= -34.0) {
        return 'es'; 
      } else if (latitude >= -22.0 && latitude <= -15.0 && longitude >= -60.0 && longitude <= -34.0) {
        return 'pt'; 
      } else if (latitude >= 35.0 && latitude <= 42.0 && longitude >= -10.0 && longitude <= 5.0) {
        return 'es'; 
      } else if (latitude >= 47.0 && latitude <= 55.0 && longitude >= 5.0 && longitude <= 15.0) {
        return 'de'; 
      } else if (latitude >= 41.0 && latitude <= 51.0 && longitude >= -5.0 && longitude <= 10.0) {
        return 'fr'; 
      } else if (latitude >= 36.0 && latitude <= 43.0 && longitude >= 25.0 && longitude <= 45.0) {
        return 'ar'; 
      } else if (latitude >= -35.0 && latitude <= -12.0 && longitude >= 18.0 && longitude <= 32.0) {
        return 'af'; 
      } else if (latitude >= 55.0 && latitude <= 71.0 && longitude >= 10.0 && longitude <= 30.0) {
        return 'ru'; 
      } else if (latitude >= 20.0 && latitude <= 25.0 && longitude >= 105.0 && longitude <= 122.0) {
        return 'zh'; 
      } else if (latitude >= 34.0 && latitude <= 40.0 && longitude >= 128.0 && longitude <= 145.0) {
        return 'ja'; 
      } else {
        return 'en'; 
      }
    },

    translate(id, lang, newText) {
      if (this.detectedLang === lang) {
        const element = document.getElementById(id);
        if (element) {
          element.textContent = newText;
        } else {
          console.warn(`Element with id '${id}' not found.`);
        }
      }
    }
  };
