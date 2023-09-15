import baseUrl from '../Api/baseURL'




const useInsUpdateData = async (url, parmas) => {
    const res = await baseUrl.put(url, parmas);
    return res;
}

export default useInsUpdateData