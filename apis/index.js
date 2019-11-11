import {
  request
} from "../common/request.js";

const SERVICE_NAME = "/";

const getP2cList = (data) => {
  return request({
    url: SERVICE_NAME + "",
    method: "post",
    data
  })
}

const getC2pList = (data) => {
  return request({
    url: SERVICE_NAME + "",
    method: "post",
    data
  })
}

const createPublisher = (data) => {
  return request({
    url: SERVICE_NAME + "",
    method: "post",
    data
  })
}

export {
	getP2cList,
	getC2pList,
	createPublisher
}
