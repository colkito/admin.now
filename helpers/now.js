import axios from 'axios'

// Deployments
async function getDeployments () {
  const deployments = await axios.get('/deploymens')
  return deploymens
}

function getDeployment () {
  console.log('>> getDeployment')
}

function deleteDeployment () {
  console.log('>> deleteDeployment')
}

// Domains
function getDomains () {
  console.log('>> getDomains')
}

function addDomain () {
  console.log('>> addDomain')
}

function deleteDomain () {
  console.log('>> deleteDomain')
}

// Init
function init (token) {
  if (!token) {
    return false
  }

  // Setting axios
  axios.defaults.baseURL = 'https://api.zeit.co/now';
  axios.defaults.headers.common['Authorization'] = token;

  return {
    getDeployments,
    getDeployment,
    deleteDeployment,
    getDomains,
    addDomain,
    deleteDomain
  }
}

export default init
