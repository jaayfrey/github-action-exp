import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

octokit.rest.pulls
  .get({
    owner: "jayfrey",
    repo: "github-action-exp",
    pull_number: "",
  })
  .then(({ data }) => {
    console.log(data);
  });
