const GITHUB_URL = `${import.meta.env.VITE_API_URL}`;
const GITHUB_TOKEN = `${import.meta.env.VITE_API_GITHUB_TOKEN}`;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  console.log(response, 'response');

  const { items } = await response.json();

  return items;
};

// Get single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (response.status === 404) {
    window.location = '/notfound';
  } else {
    console.log(response, 'response');

    const data = await response.json();

    return data;
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({ sort: 'create', per_page: 10 });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  console.log(response, 'response Repos');

  const data = await response.json();

  return data;
};
