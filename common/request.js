import configs from './config.js'
const service = configs.service[configs.env]

const request = (params) => {
	let url = service + params.url
	let search = ''
	if (!params.method && params.qs) {
		let queryString = params.qs;
		for (let i in queryString) {
			search += [i] + "=" + queryString[i] + "&"
		}
		search = "?" + search.slice(0, search.length - 1)
		url = url + search
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${url}`,
			data: params.data || null,
			method: params.method || "GET",
			success: res => {
				if (res.statusCode === 200) {
					resolve(res.data)
				} else {
					reject(res.data)
				}
			},
			fail: err => {
				reject(err)
			}
		})
	})

}

export {
	request
}
