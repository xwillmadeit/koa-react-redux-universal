const getDataFromApi = async (apiList, keyList) => {

  const result = await Promise.all(apiList)

  return keyList.reduce((acc, value, index) => {
    acc[value] = result[index]
    return acc
  }, {})
}

export default getDataFromApi
