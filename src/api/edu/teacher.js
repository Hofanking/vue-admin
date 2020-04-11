import request from '@/utils/request'

export default {

  getTeacherPageList(page, limit, teacherQuery) {
    return request({
      // url: `${api_name}/${page}/${limit}`,
      // url: '/eduService/edu/pageTeacherListByCondition/' + page + '/' + limit,
      url: `/eduService/teacher/pageTeacherListByCondition/${page}/${limit}`,
      method: 'post',
      // teacherQuery条件对象，后端使用RequestBody获取数据
      // data表示把对象转换json进行传递到接口里面
      data: teacherQuery
    })
  },

  // 删除讲师
  deleteTeacherId(id) {
    return request({
      url: `/eduService/teacher/removeTeacher/${id}`,
      method: 'delete'
    })
  },

  // 添加讲师
  addTeacher(teacher) {
    return request({
      url: `/eduService/teacher/saveTeacher`,
      method: 'post',
      data: teacher
    })
  },

  // 根据id查询讲师
  getTeacherInfo(id) {
    return request({
      url: `/eduService/teacher/getTeacher/${id}`,
      method: 'get'
    })
  },

  // 修改讲师
  updateTeacherInfo(teacher) {
    return request({
      url: `/eduService/teacher/updateTeacher`,
      method: 'post',
      data: teacher
    })
  }

}
