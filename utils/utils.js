export const transformRepos = (data) => {
  const maxLanguages = 9 
  let sorted = []
  let languages = {}
  let  popularity = null

  Array.isArray(data) && data.forEach((repo, i) => {
    if (repo.fork !== false) {
        return
    }

    if (repo.language) {
        if (repo.language in languages) {
            languages[repo.language]++
        } else {
            languages[repo.language] = 1
        }
    }

    popularity = repo.watchers + repo.forks
    sorted.push({position: i, popularity: popularity, info: repo})
  })

  const sortByPopularity = (a, b) => {
    return b.popularity - a.popularity
  }

  sorted.sort(sortByPopularity)


  const sortLanguages = (languages, limit) => {
    let sorted_languages = []

    for (let lang in languages) {
        if (typeof lang !== "string") {
            continue
        }
        sorted_languages.push({
            name: lang,
            popularity: languages[lang]
        })
    }

    if (limit) {
        sorted_languages = sorted_languages.slice(0, limit)
    }

    return sorted_languages.sort(sortByPopularity)
  }

  return {
    languages: sortLanguages(languages, maxLanguages),
    sorted
  }
}