import {
  request
} from "../common/request.js";

const SERVICE_NAME = "";

const getOrderList = (type) => {
  return request({
    url: SERVICE_NAME + "/order/findByType",
    qs:{
		type
	}
  })
}

const createPublisher = (data) => {
  return request({
    url: SERVICE_NAME + "/order/add/v1",
    method: "post",
    data
  })
}

const delOrder = (id) => {
  return request({
    url: SERVICE_NAME + "/order/delete/v1",
    method: "post",
    data:{
		id
	}
  })
}

export {
	getOrderList,
	createPublisher,
	delOrder
}
