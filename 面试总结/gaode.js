// 1.写一个获取用户信息的方法
function userInfo() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove({
        userid: 1,
      });
    }, 1000);
  });
}

function permisionList(id) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove({
        data: [],
      });
    }, 1000);
  });
}

async function login() {
  try {
    let user = await userInfo();
    let { userid } = user;
    let permisson = await permisionList(id);
  } catch (error) {
    console.log("get user info failed");
  }
}

function callbackLogin() {
  function getUserinfo(callback) {
    return userInfo().then((res) => callback(res));
  }
  getUserinfo(permisionList);
}

// 2.写一个求根方法
function ann(val, num, c) {
  // 求根, val为需要求根的值，num为几次幂，c为精确值（到小数点后哪一位）
  if (val === 1) return 1;
  let lastone = 0;
  for (let i = 1; i < num; i++) {
    let result = i ** num;
    if (result > val) {
      return lastone;
    } else {
      lastone = result;
    }
  }
}
