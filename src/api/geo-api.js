const fetchGeolocation = async ({ searchQuery = '' }) => {
  try {
    const response = await fetch(`https://ipapi.co/${searchQuery}/json/`);
    const geolocation = response.json();
    return geolocation;
  } catch (error) {
    throw error;
  }
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchGeolocation };
