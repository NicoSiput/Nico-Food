const CacheHelper = {
  getAppShell(request) {
    const CACHE_DATA = [];
    request.forEach((url) => {
      CACHE_DATA.push({ url, revision: null });
    });

    return CACHE_DATA;
  },
};

export default CacheHelper;
