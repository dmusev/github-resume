
const baseUrl = 'https://api.github.com/users'

export const fetchGithubAccountInfo = async (accountName) => {
  const url = `${baseUrl}/${accountName}`
  
  return await get(url)
}

export const fetchGithubAccountOrgs = async (accountName) => {
  const url = `${baseUrl}/${accountName}/orgs`

  return await get(url)
}

export const fetchGithubAccountRepos = async (accountName) => {
  const url = `${baseUrl}/${accountName}/repos?per_page=100`

  return await get(url)
}


const get = async (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => {
      try {
        console.log(err);
      } catch (e) {
          /*fail silently*/
      }
    })
}