// Packages
import axios from 'axios'

let request

// Deployments
async function getDeployments() {
  const deployments = await request.get('/deployments')
  return deployments
}

function getDeployment() {
  console.log('>> getDeployment')
}

function deleteDeployment() {
  console.log('>> deleteDeployment')
}

// Domains
async function getDomains() {
  const domains = await request.get('/domains')
  return domains
}

function addDomain() {
  console.log('>> addDomain')
}

function deleteDomain() {
  console.log('>> deleteDomain')
}

// Init
function init(token) {
  if (!token) {
    return false
  }

  // Setting axios
  request = axios.create({
    baseURL: 'https://api.zeit.co/now',
    headers: {Authorization: `Bearer ${token}`}
  })

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
