//name으로 value를 받아와서 인자가 name
const getCookie = (name) => {
  // 쿠키값 가져오기
  // ";" + = 맨 앞자리라서 앞에 ;이 없는 항목(user_id)이 split에서 undefined 되는거 방지
  let value = ";" + document.cookie;
  // 키값 기준으로 파싱
  let parts = value.split(`; ${name}=`); //; user_id = 으로 문자열이 잘림
  //value return
  //2일때만 실제로 쿠키에 저장돼있기때문에
  if(parts.length === 2){
    return parts.pop().split(";").shift();
  }
}

//exp의 기본값을 미리 정해주어서 exp를 인수를 받아오지 않아도 setCookie는 exp를 사용 가능하다
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp*24*60*60*1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString}
  `;
}

const deleteCookie = (name) => {
  let date = new Date("2022-02-05").toUTCString();
  console.log(date);

  document.cookie = name+"=; expires="+date;
}

export {getCookie, setCookie, deleteCookie};