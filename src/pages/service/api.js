const rootPath = 'http://127.0.0.1:5000';
const apiObject = {
  register: rootPath + '/user/register', //注册
  login: rootPath + '/user/login', //登录
  getCheckList: rootPath + '/user/getCheckList', 
  updateCheckList: rootPath + '/user/updateCheckList',
  leaverecord_add: rootPath + '/leaverecord/add', //增加离校记录
  leaverecord_query: rootPath + '/leaverecord/query', //查询离校记录
  leaverecord_modify: rootPath + '/leaverecord/modify', //修改离校记录
  leaverecord_delete: rootPath + '/leaverecord/delete', //删除离校记录
  inoutthing_query: rootPath + '/inoutthing/query', //查询进出记录
  inoutthing_add: rootPath + '/inoutthing/add', //增加进出记录
  inoutthing_modify: rootPath + '/inoutthing/modify', //修改进出记录
  inoutthing_delete: rootPath + '/inoutthing/delete', //删除进出记录
  lateback_add: rootPath + '/lateback/add', //增加晚归记录
  lateback_query: rootPath + '/lateback/query', //查询晚归记录
  lateback_modify: rootPath + '/lateback/modify', //修改晚归记录
  lateback_delete: rootPath + '/lateback/delete', //删除晚归记录
}
export default apiObject;