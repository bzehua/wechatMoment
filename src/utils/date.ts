import dayjs from 'dayjs';
/**
 * 往后移动N年
 * @param  {Date} date 传入日期对象
 * @return {Date}      返回下一个年份日期对象
 */
export const formatDate = (endTime: number) => {
  const currentTime = new Date().getTime();
  const diffTime = currentTime - endTime;
  //计算出相差天数
  const days = Math.floor(diffTime / (24 * 3600 * 1000));

  //计算出小时数
  const leave1 = diffTime % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  const hours = Math.floor(leave1 / (3600 * 1000));

  //计算相差分钟数
  const leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  const minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  const leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  const seconds = Math.round(leave3 / 1000);

  const tDate = `${dayjs().format('YYYY')}-${dayjs().format('MM')}-${dayjs().format(
    'DD'
  )} 00:00:00`; //当前凌晨时间(string)
  const tTime = new Date(tDate).getTime(); //当前凌晨时间(long)
  const eTime = 24 * 60 * 60 * 1000; //一天时间(long)
  const yTime = tTime - eTime; //昨天凌晨时间(long)
  const byTime = tTime - 2 * eTime; //前天凌晨时间(long)
  let text = '';
  if (days === 0 && hours === 0 && leave2 === 0 && seconds < 60) {
    text = `1分钟前`;
  } else if (days === 0 && hours === 0 && Number(minutes) <= 60) {
    text = `${minutes}分钟前`;
  } else if (endTime >= tTime) {
    text = `${hours}小时前`;
  } else if (endTime < tTime && endTime >= yTime) {
    text = `昨天`;
  } else if (endTime < yTime && endTime >= byTime) {
    text = `前天`;
  } else {
    text = dayjs(endTime).format('MM-DD hh:mm');
  }
  return text;
};
