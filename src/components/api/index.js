export default {
  async getProjects() {
    try {
      let res = await fetch(
        "https://api.github.com/users/brianlfarmerllc/repos?per_page=100"
      );
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  },
};
