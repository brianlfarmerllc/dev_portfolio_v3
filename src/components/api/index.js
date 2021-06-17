import { Octokit } from "@octokit/core";
require("dotenv").config();

const octokit = new Octokit({
  auth: process.env.GIT_TOKEN,
});

const Apis = {
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
  async getTopics(ownerData, repoData) {
    try {
      let res = await octokit.request("GET /repos/{owner}/{repo}/topics", {
        owner: ownerData,
        repo: repoData,
        mediaType: {
          previews: ["mercy"],
        },
      });
      return res.data.names;
    } catch (err) {
      console.log(err);
    }
  },
};

export default Apis;
